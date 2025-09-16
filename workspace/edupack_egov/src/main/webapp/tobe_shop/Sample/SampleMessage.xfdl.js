(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SampleMessage");
            this.set_titletext("메세지");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("grdMessage","10","208",null,null,"10","30",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("gdsMessage");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"180\"/><Column size=\"300\"/><Column size=\"300\"/><Column size=\"80\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"Msg Id\"/><Cell col=\"1\" text=\"Msg Text\"/><Cell col=\"2\" text=\"Msg Text EN\"/><Cell col=\"3\" text=\"Msg Type\"/></Band><Band id=\"body\"><Cell text=\"bind:MSG_ID\" edittype=\"readonly\" editautoselect=\"true\"/><Cell col=\"1\" text=\"bind:MSG_TEXT\" editautoselect=\"true\"/><Cell col=\"2\" text=\"bind:MSG_TEXT_EN\" editautoselect=\"true\"/><Cell col=\"3\" text=\"bind:MSG_TYPE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn00",null,"175","90","28","105",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Alert");
            this.addChild(obj.name, obj);

            obj = new Button("btn01",null,"175","90","28","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Confirm");
            this.addChild(obj.name, obj);

            obj = new Button("btnGoogle",null,"3","90","28","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("구글번역기");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","10","0","196","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("메시지 처리");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","10","35",null,"130","10",null,"980",null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("- 메시지 팝업을 통해 사용자에게 알림, 확인창을 호출한다.\r\n- 메시지는 AppVariables의 gdsMessage에서 관리한다.\r\n- 업무화면에서 메시지 호출은 아래와 같이 사용한다.\r\n   {0} 의 입력값의 길이는 {1} 이하이어야 합니다.\r\n   this.gfnAlert(\"msg.err.validator.maxlength\", [\"이름\", \"3자\"]);\t");
            obj.set_verticalAlign("top");
            obj.set_cssclass("sta_WF_Desc");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("webGoogle",null,"27","860","20","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1038,650,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SampleMessage.xfdl", function() {
        /**
        *  Nexacro Professional Training Couse
        *  @MenuPath    개발가이드 > 표준 및 기본 정의 > 메시지
        *  @FileName 	SampleMessage.xfdl
        *  @Creator 	TOBESOFT Education
        *  @CreateDate 	2023/01/03
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2023/01/03      		 TOBESOFT Education	 	  	최초 생성
        *******************************************************************************
        */



        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.Form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);
        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        /************************************************************************************************
         * CALLBACK 콜백 처리부분
         ************************************************************************************************/

         /**
         * @description 메세지 콜백
        */
        this.fnMsgCallback = function (strId, strVal)
        {
        	if(strId == "confirm.before.save"){
        		trace("strVal : " + strVal);
        	}
        };

         /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/

        /**
         * @description Alert 메시지 호출
        */
        this.btn00_onclick = function(obj,e)
        {
        	// {0} 의 입력값의 길이는 {1} 이하이어야 합니다.
        	this.gfnAlert("msg.err.validator.maxlength", ["이름", "3자"]);
        };

        /**
         * @description Confirm 메시지 호출
        */
        this.btn01_onclick = function(obj,e)
        {
        	var sMsgId = "confirm.before.save";				//메세지ID
        	var arrArg = "";								//메세지취환될값 배열[생략가능]
        	var sPopId = sMsgId;							//메세지팝업ID[생략가능]	*해당화면에서 메시지 중복사용시 구분되는값을 넣어줘야함
        	var sMsgCallback = "fnMsgCallback";				//메세지콜백[생략가능] 		* confirm성 메시지를 사용 시 반드시 필요

        	// 변경된 내역을 저장 하시겠습니까?
        	//this.gfnAlert(sMsgId, arrArg, sPopId, sMsgCallback);

        	// function 전달
        	this.gfnAlert(sMsgId, arrArg, sPopId, function(strId, strVal) {
        											trace("strId : " + strId + " / strVal : " + strVal + " / valueOf : " + this.gfnTypeOf(strVal));
        											if (strVal == true) {
        												alert("확인 선택함");
        											}
        											else {
        												alert("취소 선택함");
        											}
        										  });

        	// popup 메시창 밑의 script는 수행됩니다.
        	alert("팝업창 밑의 alert");
        };

        /**
         * @description Grid 더블 클릭시 메시지 호출 예제
        */
        this.grdMessage_oncelldblclick = function(obj,e)
        {
        	var sMsgId = obj.getBindDataset().getColumn(e.row, "MSG_ID");				//메세지ID
        	var arrArg = ["값1", "값2", "값3"];							//메세지취환될값 배열[생략가능]
        	var sPopId = sMsgId;											//메세지팝업ID[생략가능]	*해당화면에서 메시지 중복사용시 구분되는값을 넣어줘야함
        	var sMsgCallback = "fnMsgCallback";								//메세지콜백[생략가능] 		* confirm성 메시지를 사용 시 반드시 필요

        	// callback 함수 전달
        	this.gfnAlert(sMsgId, arrArg, sPopId, sMsgCallback);
        };

        /**
         * @description 구글번역기 보이고/숨기기
        */
        this.btnGoogle_onclick = function(obj,e)
        {
        	if (this.webGoogle.visible) {
        		this.webGoogle.set_url("");
        		this.webGoogle.set_height(20);
        		this.webGoogle.set_visible(false);
        	}
        	else {
        		this.webGoogle.set_url("https://translate.google.co.kr/");
        		this.webGoogle.set_height(389);
        		this.webGoogle.set_visible(true);
        	}
        };

        this.webGoogle_onusernotify = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.grdMessage.addEventHandler("oncelldblclick",this.grdMessage_oncelldblclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.btnGoogle.addEventHandler("onclick",this.btnGoogle_onclick,this);
            this.webGoogle.addEventHandler("onusernotify",this.webGoogle_onusernotify,this);
        };
        this.loadIncludeScript("SampleMessage.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
