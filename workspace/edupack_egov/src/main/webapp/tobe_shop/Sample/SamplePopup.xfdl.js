(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SamplePopup");
            this.set_titletext("팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTest", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">명칭1</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">명칭2</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnPopup","10","375","170","56",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("모달팝업\r\ncallback-string");
            obj.getSetter("uWord").set("popup.modal");
            this.addChild(obj.name, obj);

            obj = new Button("btnPopup00","185","375","170","56",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("모달리스 팝업\r\ncallback-string");
            this.addChild(obj.name, obj);

            obj = new Button("btnPopup01","506","375","170","56",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("팝업에 form 연결\r\ncallback-string");
            this.addChild(obj.name, obj);

            obj = new Button("btnPopup02","10","497","170","56",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("모달Sync(Runtime)\r");
            this.addChild(obj.name, obj);

            obj = new Button("btnPopup03","185","497","170","56",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("모달Window(Runtime)");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","10","0","221","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("팝업");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","10","35",null,"320","10",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("팝업 종류별(모달, 모달리스, 모달Sync, 모달Window) 호출 테스트 및 옵션을 통해 제어할 수 있는 샘플이다.\r\n\r\n1. 호출 방법\r\nvar oArg = {paramTitle:\"가나다라\", paramCode:\"abcd\", paramNum:12345};\r\nvar oOption = {popuptype:\"modeless\"};\r\nvar sPopupCallBack = \"fnPopupCallback\";\r\nthis.gfnOpenPopup( \"popup\",\"Cmm::CmmPopup.xfdl\",oArg,sPopupCallBack,oOption);\r\n\r\n2. option 종류\r\n\"top\" / \"left\" / \"width\" / \"height\" / \"popuptype\" / \"title\" / \"layered\" / \"opacity\" / \"autosize\"\r\n\r\n※ 모달리스 팝업 호출시 가운데 정렬 처리때문에  width, height 옵션을 반드시 주어야 한다. \r\n※ 팝업callback function object 를 사용하는 방법도 가능하다.\r\nthis.gfnOpenPopup(\"popup\", \"Cmm::CmmPopup.xfdl\", oArg, function() { this.btnPopup05.setFocus(); } , oOption);");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Desc");
            this.addChild(obj.name, obj);

            obj = new Button("btnPopup04","680","375","170","56",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("팝업에 url 연결\r\ncallback-string");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","10","558","170","56",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("모든 팝업 닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btnPopup05","10","436","170","56",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("모달팝업\r\ncallback-function");
            obj.getSetter("uWord").set("popup.modal");
            this.addChild(obj.name, obj);

            obj = new Button("btnPopup06","185","436","170","56",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("모달리스 팝업\r\ncallback-function");
            this.addChild(obj.name, obj);

            obj = new Button("btnPopup07","681","436","170","56",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("팝업에 url 연결\r\ncallback-function");
            this.addChild(obj.name, obj);

            obj = new Button("btnPopup08","506","436","170","56",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("팝업에 form 연결\r\ncallback-function");
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
        this.registerScript("SamplePopup.xfdl", function() {
        /**
        *  Nexacro Professional Training Couse
        *  @MenuPath    개발가이드 > 표준 및 기본 정의 > 팝업
        *  @FileName 	SamplePopup.xfdl
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
        * fnPopupCallback : popup callback
        * @param  : strId		   - [string]popup id
        * @param  : strVal		   - [string]return val
        * @return : N/A
        */
        this.fnPopupCallback = function(strId, strVal)
        {
        	trace("콜백함수에서의 팝업ID : " + strId + " / 리턴값 : " + strVal);

        	// json Object 리턴받는 예제
        	if (strId == "modelesspopup1") {
        		var rtnObj = JSON.parse(strVal);
        		trace("rtnObj.aaa : " + rtnObj.aaa);
        		trace("rtnObj.bbb : " + rtnObj.bbb);
        	}
        };

         /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/

         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
        * btnPopup_onclick : modal popup open
        * @param  : obj		   - [object]Button
        * @param  : e		   - [string]ClickEventInfo
        * @return : N/A
        */
        this.btnPopup_onclick = function(obj,e)
        {
        	var sTitle = this.gfnGetWord("popup.modal");	// 모달팝업
        	var oArg = {paramCode:"abcd", paramNum:12345, paramDataset:this.dsTest};
        	//trace("팝업 전 : " + JSON.stringify(oArg));
        	var oOption = {title:sTitle};	//top, left를 지정하지 않으면 가운데정렬 //"top=20,left=370"
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup( "popup","Cmm::CmmPopup.xfdl",oArg,sPopupCallBack,oOption);
        };

        /**
        * btnPopup00_onclick : modaless popup open
        * @param  : obj		   - [object]Button
        * @param  : e		   - [string]ClickEventInfo
        * @return : N/A
        */
        this.btnPopup00_onclick = function(obj,e)
        {
        	var oArg = {paramCode:"abcd", paramNum:12345, paramDataset:this.dsTest};
        	var oOption = {popuptype:"modeless",title:"모달리스 팝업",width:"512",height:"384"};	// 모달리스는 form의 width,height를 지정해야 가운데 정렬
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("modelesspopup1","Cmm::CmmPopup.xfdl",oArg,sPopupCallBack,oOption);
        };

        this.btnPopup02_onclick = function(obj,e)
        {
        	var sTitle = "모달싱크 팝업";
        	var oArg = {paramCode:"abcd", paramNum:12345};
        	var oOption = {popuptype:"modalsync",title:sTitle};	//top, left를 지정하지 않으면 가운데정렬 //"top=20,left=370"
        	trace("modalsync 호출전");
        	var rtn = this.gfnOpenPopup( "popup","Cmm::CmmPopup.xfdl",oArg,"",oOption);
        	trace("modalsync 호출후 리턴값 : " + JSON.stringify(rtn));
        };

        this.btnPopup03_onclick = function(obj,e)
        {
        	var sTitle = "모달윈도우 팝업";
        	var oArg = {paramCode:"abcd", paramNum:12345};
        	var oOption = {popuptype:"modalwindow",title:sTitle};	//top, left를 지정하지 않으면 가운데정렬 //"top=20,left=370"
        	trace("modalwindow 호출전");
        	var rtn = this.gfnOpenPopup( "popup","Cmm::CmmPopup.xfdl",oArg,"",oOption);
        	trace("modalwindow 호출후 리턴값 : " + JSON.stringify(rtn));
        };

        /**
        * btnPopup01_onclick : modaless popup open - div에 form연결
        * @param  : obj		   - [object]Button
        * @param  : e		   - [string]ClickEventInfo
        * @return : N/A
        */
        this.btnPopup01_onclick = function(obj,e)
        {
        	var sTitle = "팝업에 form 연결";
        	var sFormUrl  = "Sample::SampleTransaction.xfdl";
        	var oArg = {paramCode:"abcd", paramNum:12345, paramUrl:sFormUrl};
        	var oOption = {title:sTitle,width:"1000",height:"800"};	//top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup( "popup","Cmm::CmmPopup.xfdl",oArg,sPopupCallBack,oOption);
        };

        this.btnPopup04_onclick = function(obj,e)
        {
        	var sUrl = this.gfnGetServerUrl();
        	    sUrl += "document/jsDoc/index.html";
        	var oArg = {paramUrl:sUrl};
        	var oOption = {popuptype:"modeless",title:"팝업에 url 연결",width:"900",height:"700"};
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("webView","Cmm::CmmWebpage.xfdl",oArg,sPopupCallBack,oOption);
        };

        this.btnClose_onclick = function(obj,e)
        {
        	var arrPopFrame = nexacro.getPopupFrames();
        	//alert(arrPopFrame.length);

        	for (var i=arrPopFrame.length-1; i>=0; i--) {
        		// html5 일때
        		//var cWindow = arrPopFrame[i]._getWindowHandle();
        		//cWindow.opener='nothing';
        		//cWindow.open('','_parent','');
        		//cWindow.close();

        		// Runtime, html5에서도 모두 작동
        		var rObj = arrPopFrame[i];
        		rObj.destroy();
        		rObj = null;
        	}
        };

        this.btnPopup05_onclick = function(obj,e)
        {
        	var sTitle = this.gfnGetWord("popup.modal");	// 모달팝업
        	var oArg = {paramCode:"abcd", paramNum:12345, paramDataset:this.dsTest};
        	//trace("팝업 전 : " + JSON.stringify(oArg));
        	var oOption = {title:sTitle};	//top, left를 지정하지 않으면 가운데정렬 //"top=20,left=370"

        	//함수 callback 예시1 (함수 직접선언)
        	this.gfnOpenPopup("popup", "Cmm::CmmPopup.xfdl", oArg, function() { this.btnPopup05.setFocus(); }, oOption);

        	/*
        	//함수 callback 예시2 (함수 직접선언)
        	this.gfnOpenPopup("popup", "Cmm::CmmPopup.xfdl", oArg, function(strId, strVal)
        															{
        																//후처리 바로 가능
        																this.btnPopup05.setFocus();

        																trace("콜백 함수OBJECT에서의 팝업ID : " + strId + " / 리턴값 : " + strVal);

        																// json Object 리턴받는 예제
        																if (strId == "modelesspopup1") {
        																	var rtnObj = JSON.parse(strVal);
        																	trace("rtnObj.aaa : " + rtnObj.aaa);
        																	trace("rtnObj.bbb : " + rtnObj.bbb);
        																}
        															 }, oOption);
        	*/

        	/*
        	//함수 callback 예시3 (함수 object 전달)
        	this.gfnOpenPopup("popup", "Cmm::CmmPopup.xfdl", oArg, this.fnPopupCallback, oOption);
        	*/

        };


        this.btnPopup06_onclick = function(obj,e)
        {
            var oArg = {paramCode:"abcd", paramNum:12345, paramDataset:this.dsTest};
        	var oOption = {popuptype:"modeless",title:"모달리스 팝업",width:"512",height:"384"};	// 모달리스는 form의 width,height를 지정해야 가운데 정렬
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("modelesspopup1", "Cmm::CmmPopup.xfdl", oArg, function(strId, strVal)
        																	{
        																		//후처리 바로 가능
        																		this.btnPopup05.setFocus();

        																		trace("콜백 함수OBJECT에서의 팝업ID : " + strId + " / 리턴값 : " + strVal);

        																		// json Object 리턴받는 예제
        																		if (strId == "modelesspopup1") {
        																			var rtnObj = JSON.parse(strVal);
        																			trace("rtnObj.aaa : " + rtnObj.aaa);
        																			trace("rtnObj.bbb : " + rtnObj.bbb);
        																		}
        																	 }, oOption);
        };

        this.btnPopup08_onclick = function(obj,e)
        {
        	var sTitle = "팝업에 form 연결";
        	var sFormUrl  = "Sample::SampleTransaction.xfdl";
        	var oArg = {paramCode:"abcd", paramNum:12345, paramUrl:sFormUrl};
        	var oOption = {title:sTitle,width:"1000",height:"800"};	//top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup( "popup","Cmm::CmmPopup.xfdl", oArg, function(strId, strVal)
        															{
        																//후처리 바로 가능
        																this.btnPopup05.setFocus();

        																trace("콜백 함수OBJECT에서의 팝업ID : " + strId + " / 리턴값 : " + strVal);

        																// json Object 리턴받는 예제
        																if (strId == "modelesspopup1") {
        																	var rtnObj = JSON.parse(strVal);
        																	trace("rtnObj.aaa : " + rtnObj.aaa);
        																	trace("rtnObj.bbb : " + rtnObj.bbb);
        																}
        															 }, oOption);
        };

        this.btnPopup07_onclick = function(obj,e)
        {
        	var sUrl = this.gfnGetServerUrl();
        	    sUrl += "document/jsDoc/index.html";
        	var oArg = {paramUrl:sUrl};
        	var oOption = {popuptype:"modeless",title:"팝업에 url 연결",width:"900",height:"700"};
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("webView","Cmm::CmmWebpage.xfdl",oArg,function(strId, strVal)
        															{
        																//후처리 바로 가능
        																this.btnPopup05.setFocus();

        																trace("콜백 함수OBJECT에서의 팝업ID : " + strId + " / 리턴값 : " + strVal);

        																// json Object 리턴받는 예제
        																if (strId == "modelesspopup1") {
        																	var rtnObj = JSON.parse(strVal);
        																	trace("rtnObj.aaa : " + rtnObj.aaa);
        																	trace("rtnObj.bbb : " + rtnObj.bbb);
        																}
        															 },oOption);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.btnPopup.addEventHandler("onclick",this.btnPopup_onclick,this);
            this.btnPopup00.addEventHandler("onclick",this.btnPopup00_onclick,this);
            this.btnPopup01.addEventHandler("onclick",this.btnPopup01_onclick,this);
            this.btnPopup02.addEventHandler("onclick",this.btnPopup02_onclick,this);
            this.btnPopup03.addEventHandler("onclick",this.btnPopup03_onclick,this);
            this.sta03.addEventHandler("onclick",this.sta03_onclick,this);
            this.btnPopup04.addEventHandler("onclick",this.btnPopup04_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.btnPopup05.addEventHandler("onclick",this.btnPopup05_onclick,this);
            this.btnPopup06.addEventHandler("onclick",this.btnPopup06_onclick,this);
            this.btnPopup07.addEventHandler("onclick",this.btnPopup07_onclick,this);
            this.btnPopup08.addEventHandler("onclick",this.btnPopup08_onclick,this);
        };
        this.loadIncludeScript("SamplePopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
