(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frameMain");
            this.set_titletext("frameMain");
            this.set_background("#f3f5f6");
            if (Form == this.constructor)
            {
                this._setFormPosition(1058,688);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta00","0","0",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_MF_Bg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("st_center","0","0","50%","50%",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("sta02");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","st_center:-399","st_center:-280","805","240",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_MF_Center");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("divNotice",null,null,"300","120","10","10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_formscrollbartype("none");
            obj.set_cssclass("div_MF_Notice");
            this.addChild(obj.name, obj);

            obj = new Static("staNotice","65","30",null,null,"10","10",null,null,null,null,this.divNotice.form);
            obj.set_taborder("0");
            obj.set_textAlign("left");
            obj.set_verticalAlign("top");
            obj.set_text("공지사항 입니다.\r\n\r\n열심히 합시다");
            this.divNotice.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"7","15","15","10",null,null,null,null,null,this.divNotice.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_MF_Close");
            this.divNotice.addChild(obj.name, obj);

            obj = new Static("sta00","10","20","48","48",null,null,null,null,null,null,this.divNotice.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_MF_Notice");
            this.divNotice.addChild(obj.name, obj);

            obj = new Grid("grd00","160","318","678","129",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("gdsXpushManage");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"TOPIC_ID\"/><Cell col=\"1\" text=\"TOPIC_TYPE\"/><Cell col=\"2\" text=\"CODE\"/><Cell col=\"3\" text=\"MSG\"/></Band><Band id=\"body\"><Cell text=\"bind:TOPIC_ID\"/><Cell col=\"1\" text=\"bind:TOPIC_TYPE\"/><Cell col=\"2\" text=\"bind:CODE\"/><Cell col=\"3\" text=\"bind:MSG\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divNotice.form
            obj = new Layout("default","",0,0,this.divNotice.form,function(p){});
            this.divNotice.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1058,688,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divNotice.form.staNotice","text","gdsXpushManage","MSG");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FrameMain.xfdl", function() {
        /**
        *  Nexacro Professional Training Couse
        *  @MenuPath    Frame > FrameMain
        *  @FileName 	FrameMain.xfdl
        *  @Creator 	TOBESOFT Education
        *  @CreateDate 	2022/12/22
        *  @Desction    메인 화면
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2022/12/22      		 TOBESOFT Education	 	  	최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.fvObjApp = this.gfnGetApplication();
        this.objArgs;

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        /**
         * @description form onload 함수
         */
        this.form_onload = function(obj,e)
        {
        	this.form_onsize();

        	// 알림창 숨기기
        	this.divNotice.set_height(0);
        };

        /**
         * @description workFrame_onclose event
         */
        this.form_onclose = function(obj, e)
        {
        }

        /**
         * @description onsize event
         */
        this.form_onsize = function(obj, e)
        {
        	this.resetScroll();
        }


        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/

        /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/

        this.divNotice_btnClose_onclick = function(obj,e)
        {
        	// 알림창 동기화
        	this.fvObjApp.avTopFrame.form.fnSetNoticeShow(this, false, true);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onactivate",this.form_onactivate,this);
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.divNotice.form.staNotice.addEventHandler("onclick",this.divNotice_staNotice_onclick,this);
            this.divNotice.form.btnClose.addEventHandler("onclick",this.divNotice_btnClose_onclick,this);
        };
        this.loadIncludeScript("FrameMain.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
