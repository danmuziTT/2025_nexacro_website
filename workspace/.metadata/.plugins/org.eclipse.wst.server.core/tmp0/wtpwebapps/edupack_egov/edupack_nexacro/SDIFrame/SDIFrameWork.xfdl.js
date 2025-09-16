(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frameWork");
            this.set_titletext("frameWork");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,687);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divWork","0","37","1038","650",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divTitle","0","0",null,"38","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_url("SDIFrame::SDIFrameWorkTitle.xfdl");
            obj.set_text("해당 화면의 loading 시간은 0.05 Sec 입니다.");
            this.addChild(obj.name, obj);

            obj = new Static("staLodingTime",null,"7","325","17","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_usedecorate("true");
            obj.set_color("orangered");
            obj.set_textAlign("right");
            obj.set_text("해당 화면의 loading 시간은 0.05 Sec 입니다.");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divWork
            obj = new Layout("default","",0,0,this.divWork.form,function(p){});
            this.divWork.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divTitle
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","SDIFrame::SDIFrameWorkTitle.xfdl");
        };
        
        // User Script
        this.registerScript("SDIFrameWork.xfdl", function() {
        /**
        *  Nexacro Professional Training Couse
        *  @MenuPath    SIDFrame > SDIFrameWork
        *  @FileName 	SDIFrameWork.xfdl
        *  @Creator 	TOBESOFT Education
        *  @CreateDate 	2022/12/22
        *  @Desction    SDI 업무 공통 화면
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2022/12/22      		 TOBESOFT Education	 	  	최초 생성
        *******************************************************************************
        */


        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.objApp = this.gfnGetApplication();

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        /**
         * form onload 함수
         * @return
         * @example
         * @memberOf
         */
        this.form_onload = function(obj,e)
        {
        	this.form_onsize();

        	this.divTitle.form.set_scrollbartype("none")
        };

        this.fnSetLoad = function()
        {
        	//넘어온 아규먼트 셋팅
        	this.fnSetOwnFrameArgu(this);
        	// form로딩시 화면에 표시할 page URL 설정
        	this.divWork.set_url(this.parent.arguments["pageUrl"]);
        }


        /**
         * workFrame_onclose event
         * @return
         * @example
         *
         * @memberOf
         */
        this.form_onclose = function(obj, e)
        {
        	try
        	{
        		//trace("workFrame_onclose : " + e.fromobject.name);
        		if (e.fromobject == "[object Form]")
        		{
        			var winId = this.getOwnerFrame().name;
        			//trace("winId : " + winId);
        			if (this.objApp.gvMdiFrame.form.bClose)
        			{
        				this.objApp.gvMdiFrame.form.bClose = false;
        				this.objApp.gvMdiFrame.form.fnTabOnClose(winId);
        			}
        		}
        	}
        	catch(e)
        	{

        	}
        }

        /**
         * onsize event
         * @return
         * @example
         *
         * @memberOf this
         */
        this.form_onsize = function(obj, e)
        {
        	this.resetScroll();
        }

        /**
         * @description 각 화면에서 디버그창을 호출할 수 있도록 단축키 지정
        */
        this.form_onkeydown = function(obj,e)
        {
        	// 공통 키다운 이벤트 호출
        	this.gfnOnkeydown(obj, e);
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/
        /**
         * @description 메세지 콜백
        */
        this.fnMsgCallback = function (strId, strVal)
        {
        	//trace("strId >> " + strId + "   strVal >> " + strVal);
        	if(strId == "confirm.before.movepage"){
        		if(strVal == true)
        		{
        			this.close();
        		}
        	}
        };

        /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
         *  넘어온 아규먼트 처리 설정
         * @param  {XaComp} this(현재form)
         * @return
         * @example
         * fnSetOwnFrameArgu(this);
         * @memberOf
         */
        this.fnSetOwnFrameArgu = function(o)
        {
        	var menuId = this.parent.arguments["menuId"];

        	if(this.objApp.gvIsComBtnUse){	//공통 버튼 사용유무
        		//공통 버튼권한세팅
        		var sAuth = this.fnGetAuth(menuId, "auth");  //권한조회
        		this.divTitle.form.fnSetAuthBtn(sAuth);
        	}

        	var sTitle = this.parent.arguments["menuPath"];
        	this.divTitle.form.staTitle.set_text(sTitle);
        }

        /**
         * gdsMenu에서 버튼권한 가져오기
         * @param {string} menuId: 메뉴Id
         * @param {string} colId: 컬럼(권한별) Id
         * @return
         * @example
         *
         * @memberOf
         */
        this.fnGetAuth = function(menuId, colId)
        {
        	var sValue = this.objApp.gdsMenu.lookupAs(this.FRAME_MENUCOLUMNS.menuId, menuId, colId);
        	if(this.gfnIsNull(sValue))
        	{
        		sValue = "YNNNNN";
        	}
        	return sValue;
        }

        /**
         * @description workFrame close 시 처리
        */
        this.fnWorkFrameClose = function()
        {
        	if (this.gfnIsNull(this.divWork.form.lookup("fnClose")))
        	{
        		trace("해당화면에 fnClose 함수가 없습니다. fnClose 함수가 없으면 데이타 변경여부 체크를 하지 않습니다.");
        	}
        	else
        	{
        		if (this.divWork.form.fnClose() == false)
        		{
        			var sMsgId 		 = "confirm.before.movepage";					//메세지ID
        			var arrArg 		 = "";											//메세지취환될값 배열[생략가능]
        			var sPopId 		 = sMsgId;										//메세지팝업ID[생략가능]	*해당화면에서 메시지 중복사용시 구분되는값을 넣어줘야함
        			var sMsgCallback = "fnMsgCallback";								//메세지콜백[생략가능] 		* confirm성 메시지를 사용 시 반드시 필요

        			// 변경된 데이터가 있습니다. 현재 화면을 닫겠습니까?
        			this.gfnAlert(sMsgId, arrArg, sPopId, sMsgCallback);
        			return false;
        		}
        	}
        	this.close();
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.addEventHandler("onactivate",this.form_onactivate,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onkeydown",this.form_onkeydown,this);
        };
        this.loadIncludeScript("SDIFrameWork.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
