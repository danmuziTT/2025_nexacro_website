(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SampleCalendar");
            this.set_titletext("월/기간 달력");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"dtFrom\" type=\"STRING\" size=\"256\"/><Column id=\"dtTo\" type=\"STRING\" size=\"256\"/><Column id=\"dtMonth\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"dtFrom\">20220915</Col><Col id=\"dtTo\">20220926</Col><Col id=\"dtMonth\">202209</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("<ColumnInfo><Column id=\"DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divCalFromTo","10","258","310","28",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("Cmm::CmmCalFromTo.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btnInit","279","311","108","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btnGetFromDate","10","311","108","28",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("getFromDate");
            this.addChild(obj.name, obj);

            obj = new Edit("editFromDate","123","311","131","28",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnGetToDate","10","344","108","28",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("getToDate");
            this.addChild(obj.name, obj);

            obj = new Edit("editToDate","123","344","131","28",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetFromDate","10","377","108","28",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("setFromDate");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSetFrom","123","377","131","28",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_maxlength("8");
            obj.set_value("20220506");
            obj.set_text("20220506");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetToDate","10","410","108","28",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("setToDate");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSetTo","123","410","131","28",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_maxlength("8");
            obj.set_value("20220518");
            obj.set_text("20220518");
            this.addChild(obj.name, obj);

            obj = new Button("btnEnableTrue","279","344","108","28",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("enable true");
            this.addChild(obj.name, obj);

            obj = new Button("btnEnableFalse","392","344","108","28",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("enable false");
            this.addChild(obj.name, obj);

            obj = new Button("btnReadonlyTrue","279","377","108","28",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("readonly true");
            this.addChild(obj.name, obj);

            obj = new Button("btnReadonlyFalse","392","377","108","28",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("readonly false");
            this.addChild(obj.name, obj);

            obj = new Button("btnRequiredFalse","392","410","108","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("required false");
            this.addChild(obj.name, obj);

            obj = new Button("btnRequiredTrue","279","410","108","28",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("required true");
            this.addChild(obj.name, obj);

            obj = new Div("divCalMM","529","258","128","28",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("Div00");
            obj.set_url("Cmm::CmmCalMM.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btnGetDate00","529","311","108","28",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("getFromDate");
            this.addChild(obj.name, obj);

            obj = new Edit("editFromDate00","642","311","131","28",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetDate00","529","344","108","28",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("setFromDate");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSetFrom00","642","344","131","28",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_maxlength("6");
            obj.set_value("202205");
            obj.set_text("202205");
            this.addChild(obj.name, obj);

            obj = new Button("btnEnableTrue00","798","344","108","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("enable true");
            this.addChild(obj.name, obj);

            obj = new Button("btnEnableFalse00","911","344","108","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("enable false");
            this.addChild(obj.name, obj);

            obj = new Button("btnReadonlyTrue00","798","377","108","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("readonly true");
            this.addChild(obj.name, obj);

            obj = new Button("btnReadonlyFalse00","911","377","108","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("readonly false");
            this.addChild(obj.name, obj);

            obj = new Button("btnRequiredFalse00","911","410","108","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("required false");
            this.addChild(obj.name, obj);

            obj = new Button("btnRequiredTrue00","798","410","108","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("required true");
            this.addChild(obj.name, obj);

            obj = new Button("btnInit00","798","311","108","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btnTest",null,"15","120","30","10",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("Util Library Test");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","10","0","221","35",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("기간/월 달력");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","10","35",null,"150","10",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("1. Div를 생성하고 url 속성에\r\r\r\n    기간달력 : \"Cmm::CmmCalFromTo.xfdl\"\r\r\r\n    월력 : \"Cmm::CmmCalMM.xfdl\" 을 지정한다.\r\r\r\n\r\n2. Calendar 방식의 월달력\r\n    Calendar의 User Property에 uCalType 를 추가하고 값을 \"MM\" 으로 설정한다.");
            obj.set_cssclass("sta_WF_Desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","520","225","218","28",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("2) 월달력");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal01","529","517","128","28",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_value("20220901");
            obj.set_dateformat("yyyy-MM");
            obj.set_editformat("yyyy-MM");
            obj.getSetter("uCalType").set("MM");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","10","225","218","28",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("1) 기간달력");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","519","484","401","28",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("2-1) 월달력 - Calendar 방식(user property)");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divCalFromTo
            obj = new Layout("default","",0,0,this.divCalFromTo.form,function(p){});
            this.divCalFromTo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCalMM
            obj = new Layout("default","",0,0,this.divCalMM.form,function(p){});
            this.divCalMM.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1038,650,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divCalFromTo.form.calFrom","value","dsList","dtFrom");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divCalFromTo.form.calTo","value","dsList","dtTo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divCalMM.form.calYM","value","dsList","dtMonth");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Cmm::CmmCalFromTo.xfdl");
            this._addPreloadList("fdl","Cmm::CmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("SampleCalendar.xfdl", function() {
        /**
        *  Nexacro Professional Training Couse
        *  @MenuPath    개발가이드 > 컴포넌트 연동 > 기간/월 달력
        *  @FileName 	SampleCalendar.xfdl
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

        	var today = this.gfnGetDate("date");
        	var nRow = this.dsList2.addRow();
        	this.dsList2.setColumn(nRow, "DATE", today);
        };
        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        /************************************************************************************************
         * CALLBACK 콜백 처리부분
         ************************************************************************************************/

         /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/

         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
         /**
        * btnInit_onclick :  달력 버튼이벤트
        * @param  : obj		   - [object]Button
        * @param  : e		   - [string]ClickEventInfo
        * @return : N/A
        * @example :
        */
        this.btnInit_onclick = function(obj,e)
        {
        	var objForm = this.divCalFromTo.form;
        	var objFormMM = this.divCalMM.form;
        	var sTarget = obj.name;
        	var sDate ;

        	switch(sTarget) {
        	case "btnInit":
        		objForm.fnInit();
        		break;
        	case "btnGetFromDate":
        		sDate = objForm.fnGetFromDate();
        		this.editFromDate.set_value(sDate);
        		break;
        	case "btnGetToDate":
        		sDate = objForm.fnGetToDate();
        		this.editToDate.set_value(sDate);
        		break;
        	case "btnSetFromDate":
        		sDate = this.edtSetFrom.value;
        		objForm.fnSetFromDate(sDate);
        		break;
        	case "btnSetToDate":
        		sDate = this.edtSetTo.value;
        		objForm.fnSetToDate(sDate);
        		break;
        	case "btnEnableTrue":
        		objForm.fnSetEnable(true);
        		break;
        	case "btnEnableFalse":
        		objForm.fnSetEnable(false);
        		break;
        	case "btnReadonlyTrue":
        		objForm.fnSetReadonly(true);
        		break;
        	case "btnReadonlyFalse":
        		objForm.fnSetReadonly(false);
        		break;
        	case "btnRequiredTrue":
        		objForm.fnSetEssential(true);
        		break;
        	case "btnRequiredFalse":
        		objForm.fnSetEssential(false);
        		break;
        	case "btnInit00":
        		objFormMM.fnInit();
        		break;
        	case "btnGetDate00":
        		sDate = objFormMM.fnGetValue();
        		if( sDate != false ) this.editFromDate00.set_value(sDate);
        		else this.divCalMM.form.setFocus();
        		break;
        	case "btnSetDate00":
        		sDate = this.edtSetFrom00.value;
        		objFormMM.fnSetValue(sDate);
        		break;
        	case "btnEnableTrue00":
        		objFormMM.fnSetEnable(true);
        		break;
        	case "btnEnableFalse00":
        		objFormMM.fnSetEnable(false);
        		break;
        	case "btnReadonlyTrue00":
        		objFormMM.fnSetReadonly(true);
        		break;
        	case "btnReadonlyFalse00":
        		objFormMM.fnSetReadonly(false);
        		break;
        	case "btnRequiredTrue00":
        		objFormMM.fnSetEssential(true);
        		break;
        	case "btnRequiredFalse00":
        		objFormMM.fnSetEssential(false);
        		break;
        	default:
        	}
        };

        this.btnTest_onclick = function(obj,e)
        {
         	var sComma = this.gfnAppendComma(123456789.52, 1);
         	trace("gfnAppendComma : " + sComma);

        	trace("gfnRemoveComma : " + this.gfnRemoveComma(sComma));

        	trace("gfnTrim : " + this.gfnTrim(" 123 456 789 "));

        	trace("gfnAllTrim : " + this.gfnAllTrim(" 123 456 789 "));

        	trace("gfnGetDigit : " + this.gfnGetDigit("가나다 123 456 789 마바사"));

        	trace("gfnRemoveSpecialChar : " + this.gfnRemoveSpecialChar("$% 가나다 123 456 789 마바사&*"));

        	trace("gfnIsExistInArray : " + this.gfnIsExistInArray(["a", "b", "c"], "b"));

        	trace("gfnLeft : " + this.gfnLeft("abc", 1));

        	trace("gfnRight : " + this.gfnRight("abc", 1));

        	trace("gfnPosReverse : " + this.gfnPosReverse("aaBBbbccBB", "BB"));

        	trace("gfnTypeOf : " + this.gfnTypeOf(this.btn00));

        	trace("gfnIsNexaComponent : " + this.gfnIsNexaComponent("this.btn00"));

        	trace("gfnIsNexaComponent : " + this.gfnIsNexaComponent(this.btn00));

        	trace("gfnGetDate 일시 : " + this.gfnGetDate());

        	trace("gfnGetDate 일시+time: " + this.gfnGetDate("time"));

        	trace("gfnGetDate 일시+time+milliseconds: " + this.gfnGetDate("milli"));

        	trace("gfnGetLastDate : " + this.gfnGetLastDate("20171011"));

        	trace("gfnGetLastDate : " + this.gfnGetLastDate("201710"));

        	trace("gfnGetFirstDate : " + this.gfnGetFirstDate("20171022"));

        	trace("gfnGetDay : " + this.gfnGetDay("20171011"));

        	trace("gfnGetDiffDate : " + this.gfnGetDiffDate("20171011", "20171231"));

        	trace("gfnGetDiffMonth : " + this.gfnGetDiffMonth("20171011", "20171231"));

        	trace("gfnAddDate : " + this.gfnAddDate("20171011", 3));

        	trace("gfnAddMonth : " + this.gfnAddMonth("20171031", 1));

        	trace("gfnAddMonth : " + this.gfnAddMonth("20171031", -1));

        	trace("gfnGetWeek : " + this.gfnGetWeek("20171011"));

        	var sDate = this.gfnSolarToLunar("20171020");
        	trace("gfnSolarToLunar : " + sDate);

        	trace("gfnLunarToSolar : " + this.gfnLunarToSolar(sDate.substring(1,9), sDate.substring(0,1)));
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.btnInit.addEventHandler("onclick",this.btnInit_onclick,this);
            this.btnGetFromDate.addEventHandler("onclick",this.btnInit_onclick,this);
            this.btnGetToDate.addEventHandler("onclick",this.btnInit_onclick,this);
            this.btnSetFromDate.addEventHandler("onclick",this.btnInit_onclick,this);
            this.btnSetToDate.addEventHandler("onclick",this.btnInit_onclick,this);
            this.btnEnableTrue.addEventHandler("onclick",this.btnInit_onclick,this);
            this.btnEnableFalse.addEventHandler("onclick",this.btnInit_onclick,this);
            this.btnReadonlyTrue.addEventHandler("onclick",this.btnInit_onclick,this);
            this.btnReadonlyFalse.addEventHandler("onclick",this.btnInit_onclick,this);
            this.btnRequiredFalse.addEventHandler("onclick",this.btnInit_onclick,this);
            this.btnRequiredTrue.addEventHandler("onclick",this.btnInit_onclick,this);
            this.btnGetDate00.addEventHandler("onclick",this.btnInit_onclick,this);
            this.btnSetDate00.addEventHandler("onclick",this.btnInit_onclick,this);
            this.btnEnableTrue00.addEventHandler("onclick",this.btnInit_onclick,this);
            this.btnEnableFalse00.addEventHandler("onclick",this.btnInit_onclick,this);
            this.btnReadonlyTrue00.addEventHandler("onclick",this.btnInit_onclick,this);
            this.btnReadonlyFalse00.addEventHandler("onclick",this.btnInit_onclick,this);
            this.btnRequiredFalse00.addEventHandler("onclick",this.btnInit_onclick,this);
            this.btnRequiredTrue00.addEventHandler("onclick",this.btnInit_onclick,this);
            this.btnInit00.addEventHandler("onclick",this.btnInit_onclick,this);
            this.btnTest.addEventHandler("onclick",this.btnTest_onclick,this);
            this.Static03.addEventHandler("onclick",this.Static03_onclick,this);
        };
        this.loadIncludeScript("SampleCalendar.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
