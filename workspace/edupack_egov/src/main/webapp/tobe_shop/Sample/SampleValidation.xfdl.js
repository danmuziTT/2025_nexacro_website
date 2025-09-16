(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SampleValidation");
            this.set_titletext("정합성 체크");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"SSN\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TO\" type=\"STRING\" size=\"256\"/><Column id=\"MAX_NUM\" type=\"FLOAT\" size=\"256\"/><Column id=\"DECIMAL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"COMPARE_1\" type=\"STRING\" size=\"256\"/><Column id=\"COMPARE_2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID\">kimyk</Col><Col id=\"DATE_FROM\">20171101</Col><Col id=\"DATE_TO\">20171130</Col><Col id=\"MAX_NUM\">10</Col><Col id=\"DECIMAL\">1.25</Col><Col id=\"COMPARE_1\">10</Col><Col id=\"COMPARE_2\">20</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("<ColumnInfo><Column id=\"DATE\" type=\"STRING\" size=\"256\"/><Column id=\"EDIT\" type=\"STRING\" size=\"256\"/><Column id=\"MAX_NUM\" type=\"INT\" size=\"256\"/><Column id=\"MIN_NUM\" type=\"INT\" size=\"256\"/><Column id=\"LENGTH_MIN\" type=\"STRING\" size=\"256\"/><Column id=\"RANGE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divVali","10","1186","490","116",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","260","10","71","28",null,null,null,null,null,null,this.divVali.form);
            obj.set_taborder("6");
            obj.set_text("필수(Edit)");
            obj.set_cssclass("sta_WF_LabelE");
            this.divVali.addChild(obj.name, obj);

            obj = new Edit("edt01","334","10","146","28",null,null,null,null,null,null,this.divVali.form);
            obj.set_taborder("5");
            obj.set_cssclass("edt_WF_Essential\n");
            this.divVali.addChild(obj.name, obj);

            obj = new Static("Static08","10","10","71","28",null,null,null,null,null,null,this.divVali.form);
            obj.set_taborder("7");
            obj.set_text("필수(날짜)");
            obj.set_cssclass("sta_WF_LabelE");
            this.divVali.addChild(obj.name, obj);

            obj = new Calendar("cal","84","10","146","28",null,null,null,null,null,null,this.divVali.form);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Essential");
            this.divVali.addChild(obj.name, obj);

            obj = new Static("Static30","10","43","71","28",null,null,null,null,null,null,this.divVali.form);
            obj.set_taborder("8");
            obj.set_text("최대값100");
            this.divVali.addChild(obj.name, obj);

            obj = new Edit("edtMax","84","43","146","28",null,null,null,null,null,null,this.divVali.form);
            obj.set_taborder("3");
            this.divVali.addChild(obj.name, obj);

            obj = new Static("Static29","260","43","71","28",null,null,null,null,null,null,this.divVali.form);
            obj.set_taborder("9");
            obj.set_text("최소값10");
            this.divVali.addChild(obj.name, obj);

            obj = new Edit("edtMin","334","43","146","28",null,null,null,null,null,null,this.divVali.form);
            obj.set_taborder("2");
            this.divVali.addChild(obj.name, obj);

            obj = new Static("Static20","10","76","71","28",null,null,null,null,null,null,this.divVali.form);
            obj.set_taborder("10");
            obj.set_text("최소길이3");
            this.divVali.addChild(obj.name, obj);

            obj = new Edit("edtLegthMin","84","76","146","28",null,null,null,null,null,null,this.divVali.form);
            obj.set_taborder("1");
            this.divVali.addChild(obj.name, obj);

            obj = new Static("Static54","260","76","71","28",null,null,null,null,null,null,this.divVali.form);
            obj.set_taborder("11");
            obj.set_text("범위(1~5)");
            this.divVali.addChild(obj.name, obj);

            obj = new Static("Static55","410","84",null,"28","78",null,null,null,null,null,this.divVali.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_InputBg");
            this.divVali.addChild(obj.name, obj);

            obj = new Edit("edtRange","334","76","146","28",null,null,null,null,null,null,this.divVali.form);
            obj.set_taborder("0");
            this.divVali.addChild(obj.name, obj);

            obj = new Grid("grdVali","10","988",null,"140","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_nodatatext("No Data");
            obj.set_binddataset("dsList");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"148\"/><Column size=\"135\"/><Column size=\"118\"/><Column size=\"80\"/><Column size=\"115\"/><Column size=\"137\"/><Column size=\"137\"/><Column size=\"137\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"필수,길이(5)\"/><Cell col=\"1\" text=\"주민등록번호\"/><Cell col=\"2\" colspan=\"2\" text=\"from ~ to\"/><Cell col=\"4\" text=\"최대값(10)\"/><Cell col=\"5\" text=\"소숫점2자리\"/><Cell col=\"6\" colspan=\"2\" text=\"비교\"/><Cell row=\"1\" text=\"ID\"/><Cell row=\"1\" col=\"1\" text=\"SSN\"/><Cell row=\"1\" col=\"2\" text=\"DATE_FROM\"/><Cell row=\"1\" col=\"3\" text=\"DATE_TO\"/><Cell row=\"1\" col=\"4\" text=\"MAX_NUM\"/><Cell row=\"1\" col=\"5\" text=\"DECIMAL\"/><Cell row=\"1\" col=\"6\" text=\"COMPARE_1\"/><Cell row=\"1\" col=\"7\" text=\"COMPARE_2\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\" edittype=\"normal\" editautoselect=\"true\"/><Cell col=\"1\" text=\"bind:SSN\" edittype=\"normal\" editautoselect=\"true\"/><Cell col=\"2\" text=\"bind:DATE_FROM\" edittype=\"normal\" editautoselect=\"true\"/><Cell col=\"3\" text=\"bind:DATE_TO\" edittype=\"normal\" editautoselect=\"true\"/><Cell col=\"4\" text=\"bind:MAX_NUM\" edittype=\"mask\" maskeditautoselect=\"true\"/><Cell col=\"5\" text=\"bind:DECIMAL\" edittype=\"mask\" maskeditautoselect=\"true\"/><Cell col=\"6\" text=\"bind:COMPARE_1\" edittype=\"mask\" maskeditautoselect=\"true\"/><Cell col=\"7\" text=\"bind:COMPARE_2\" edittype=\"mask\" maskeditautoselect=\"true\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnGrdCheck",null,"957","60","28","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("체크");
            obj.set_cssclass("btn_WF_GridControl");
            this.addChild(obj.name, obj);

            obj = new Button("btnDivCheck","438","1153","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("체크");
            obj.set_cssclass("btn_WF_GridControl");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","0","1405",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("salmon");
            obj.set_textAlign("center");
            obj.set_visible("false");
            obj.set_opacity("0.00");
            obj.set_text("20px");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","10","0","221","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("정합성 체크");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","955","218","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("1) Grid Validation Check");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","1153","248","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("2) Component Validation Check");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","10","35",null,"880","10",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("1.Validation 공통함수는 아래와 같이 4개의 함수가 제공된다.\r\n  1) Dataset에 설정된 정합성체크 RuleSet을 Clear한다.\r\n       this.gfnClearValidation(this.dsList);\r\n  2) Dataset의 Column별로 정합성체크 Rule을 등록한다.\r\n       this.gfnSetValidation(this.dsList, \"ID\", \"아이디\", \"required,length:5\");\r\n  3) Dataset의 Column별로 설정된 정합성체크 Rule을 제거한다.\r\n       this.gfnRemoveValidation(this.dsList, \"ID\");\r\n  4) Dataset에 등록된 데이터 정합성체크 RuleSet에의해 정합성을 체크를 하고 이상여부를 리턴한다.\r\n       this.gfnValidation(this.dsList,this.dsList2,this.dsList3, \"U\");\r\n\r\n2. gfnSetValidation에 등록할 수 있는 Validation 체크 Rule의 종류\r\n  예) this.gfnSetValidation(this.dsList, \"ID\", \"아이디\", \"required,equalto:NAME\");\r\n  required - 필수 체크\r\n  length:7 - 길이가 7자리인지 체크\r\n  rangelength:2:3 - 길이가 2 ~ 3 자리인지 체크\r\n  maxlength:7 - 길이가 7보다 작은지 체크\r\n  minlength:3 - 길이가 3보다 큰지 체크\r\n  maxlengthbyte:7 - byte의 길이가 7보다 작은지 체크\r\n  minlengthbyte:3 - byte의 길이가 3보다 큰지 체크\r\n  digits - 숫자여부 체크\r\n  min:7 - 값이 7보다 작은지 체크\r\n  max:7 - 값이 7보다 큰지 체크\r\n  declimit:3 - 소수점의 자리수가 3자리인지 체크\r\n  date - 년월일형태의 날짜가 맞는지 체크\r\n  dateym - 년월형태의 날짜가 맞는지 체크\r\n  range:40:100 - 값이 40 ~ 100 사이의 값인지 체크\r\n  code:1:2:3 - 값이 1,2,3 의 값인지 체크\r\n  equalto:NAME - NAME 칼럼의 값과 같은지 체크 \r\n  예) this.gfnSetValidation(this.dsList, \"ID\", \"아이디\", \"required,equalto:NAME\");\r\n  fromto:DATE_FROM - 등록된 날짜가 DATE_TO의 칼럼의 값 보다 큰지 \r\n  예) this.gfnSetValidation(this.dsList, \"DATE_TO\", \"종료일자,시작일자\", \"required,date,fromto:DATE_FROM\");\r\n  comparebig:NAME - NAME 칼럼의 값보다 큰지 체크 \r\n  예) this.gfnSetValidation(this.dsList, \"ID\", \"아이디\", \"required,comparebig:NAME\");\r\n  comparesmall:NAME - NAME 칼럼의 값보다 작은지 체크 \r\n  예) this.gfnSetValidation(this.dsList, \"ID\", \"아이디\", \"required,comparesmall:NAME\");\r\n  isssn - 공통함수 gfnIsSSN로 주민번호 체크\r\n  isfrn - 공통함수 gfnIsFrnrIdNo로 외국인등록번호 체크\r\n  isbzid - 공통함수 gfnIsBzIdNo로 사업자등록번호 체크\r\n  isfirmid - 공통함수 gfnIsFirmIdNo로 법인등록번호 체크\r\n  iscardno - 공통함수 gfnIsCardNo로 신용카드번호 체크\r\n  isemail - 공통함수 gfnIsEmail로 이메일 체크");
            obj.set_cssclass("sta_WF_Desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","560","1153","298","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("3) Grid와 Component Validation Check");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Button("btnAll","688","1186","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("체크");
            obj.set_cssclass("btn_WF_GridControl");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"957","60","28","140",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"957","60","28","75",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoGubun","560","1186","100","50",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var rdoGubun_innerdataset = new nexacro.NormalDataset("rdoGubun_innerdataset", obj);
            rdoGubun_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">값으로 체크</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">길이로 체크</Col></Row></Rows>");
            obj.set_innerdataset(rdoGubun_innerdataset);
            obj.set_text("값으로 체크");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divVali.form
            obj = new Layout("default","",0,0,this.divVali.form,function(p){});
            this.divVali.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1038,650,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divVali.form.cal","value","dsList2","DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divVali.form.edt01","value","dsList2","EDIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divVali.form.edtMax","value","dsList2","MAX_NUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divVali.form.edtMin","value","dsList2","MIN_NUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divVali.form.edtLegthMin","value","dsList2","LENGTH_MIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divVali.form.edtRange","value","dsList2","RANGE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SampleValidation.xfdl", function() {
        /**
        *  Nexacro Professional Training Couse
        *  @MenuPath   개발가이드 > 표준 및 기본 정의 > 정합성 체크
        *  @FileName 	SampleValidation.xfdl
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


        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        /**
         * @description 화면 onload시 처리내역(필수)
        */
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);
        };

        /**
         * @description 화면 닫힐때 변경사항 체크(입력 화면에서 변경되는 Dataset 체크 필요, 선택)
         * @return {boolean} true(화면 닫음) / false(화면 닫지 않음)
        */
        this.fnClose = function()
        {
        	if (this.gfnDsIsUpdated(this.dsList)) {
        		return false;
        	}
        	else {
        		return true;
        	}
        };


        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/
        /**
         * @description Transaction CallBack 함수(선택)
        */
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        		return;
        	}
        };


        /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        /**
         * @description 입력
        */
        this.fnAdd = function()
        {
        	this.dsList.addRow();
        };

        /**
         * @description 삭제
        */
        this.fnDel = function()
        {
        	this.dsList.deleteRow(this.dsList.rowposition);
        };


        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/


        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/

        this.btn_grdVali_onclick = function(obj,e)
        {
        	// Validation 체크 Rule의 종류
        	// required - 필수 체크
        	// length:7 - 길이가 7자리인지 체크
        	// rangelength:2:3 - 길이가 2 ~ 3 자리인지 체크
        	// maxlength:7 - 길이가 7보다 작은지 체크
        	// minlength:3 - 길이가 3보다 큰지 체크
        	// maxlengthbyte:7 - byte의 길이가 7보다 작은지 체크
        	// minlengthbyte:3 - byte의 길이가 3보다 큰지 체크
        	// digits - 숫자여부 체크
        	// min:7 - 값이 7보다 작은지 체크
        	// max:7 - 값이 7보다 큰지 체크
        	// declimit:3 - 소수점의 자리수가 3자리인지 체크
        	// date - 년월일형태의 날짜가 맞는지 체크
        	// dateym - 년월형태의 날짜가 맞는지 체크
        	// range:40:100 - 값이 40 ~ 100 사이의 값인지 체크
        	// code:1:2:3 - 값이 1,2,3 의 값인지 체크
        	// equalto:NAME - NAME 칼럼의 값과 같은지 체크 예) this.gfnSetValidation(this.dsList, "ID", "아이디", "required,equalto:NAME");
        	// fromto:ID - 등록된 날짜가 ID의 칼럼의 값 보다 큰지 예) this.gfnSetValidation(this.dsList, "NAME", "종료일,시작일", "required,fromto:ID");
        	// comparebig:NAME - NAME 칼럼의 값보다 큰지 체크 예) this.gfnSetValidation(this.dsList, "ID", "아이디", "required,comparebig:NAME");
        	// comparesmall:NAME - NAME 칼럼의 값보다 작은지 체크 예) this.gfnSetValidation(this.dsList, "ID", "아이디", "required,comparesmall:NAME");
        	// isssn - 공통함수 gfnIsSSN로 주민번호 체크
        	// isfrn - 공통함수 gfnIsFrnrIdNo로 외국인등록번호 체크
        	// isbzid - 공통함수 gfnIsBzIdNo로 사업자등록번호 체크
        	// isfirmid - 공통함수 gfnIsFirmIdNo로 법인등록번호 체크
        	// iscardno - 공통함수 gfnIsCardNo로 신용카드번호 체크
        	// isemail - 공통함수 gfnIsEmail로 이메일 체크

        	// 정합성 체크
        	this.gfnClearValidation(this.dsList);

        	this.gfnSetValidation(this.dsList, "ID", this.gfnGetWord("user.id"), "required,length:5");	// 아이디
        	//this.gfnSetValidation(this.dsList, "SSN", this.gfnGetWord("user.jumin"), "required,isssn");	// 주민번호
        	this.gfnSetValidation(this.dsList, "DATE_FROM", this.gfnGetWord("date.start"), "required,date");	// 시작일자
        	this.gfnSetValidation(this.dsList, "DATE_TO", this.gfnGetWord("date.end")+","+this.gfnGetWord("date.start"), "required,date,fromto:DATE_FROM"); // 종료일자,시작일자
        	this.gfnSetValidation(this.dsList, "MAX_NUM",  this.gfnGetWord("value.max"), "required,digits,max:10");  // 최대값
        	this.gfnSetValidation(this.dsList, "DECIMAL",  this.gfnGetWord("value.interest"), "required,digits,declimit:2");  // 금리
        	this.gfnSetValidation(this.dsList, "COMPARE_1",  this.gfnGetWord("value.1st"), "required,digits");	  // 1번째값
        	this.gfnSetValidation(this.dsList, "COMPARE_2", this.gfnGetWord("value.2nd")+","+this.gfnGetWord("value.1st"), "required,digits,comparebig:COMPARE_1");  // 2번째값,1번째값

        	// 수정된 Row가 아닌 전체 Row에 대해 Validation check
         	if (this.gfnValidation(this.dsList, "A") == false) return;

        	alert("Validation이 통과 되었습니다.");
        };

        this.btn_compVali_onclick = function(obj,e)
        {
        	if (this.dsList2.rowcount == 0) {
        		this.dsList2.addRow();
        	}
        	// 정합성 체크
        	this.gfnClearValidation(this.dsList2);
        	this.gfnSetValidation(this.dsList2, "DATE", "필수(날짜)", "required,date");
        	this.gfnSetValidation(this.dsList2, "EDIT", "필수(Edit)", "required");
        	this.gfnSetValidation(this.dsList2, "MAX_NUM", "최대값100", "required,digits,max:100");
        	this.gfnSetValidation(this.dsList2, "MIN_NUM", "최소값10", "required,digits,min:10");
        	this.gfnSetValidation(this.dsList2, "LENGTH_MIN", "최소길이3", "required,minlength:3");
        	this.gfnSetValidation(this.dsList2, "RANGE", "범위(1~5)", "required,digits,range:1:5");
        	// 수정된 Row만 Validation check
         	if (this.gfnValidation(this.dsList2, "U") == false) return;

        	alert("Validation이 통과 되었습니다.");
        };

        this.btnAll_onclick = function(obj,e)
        {
        	if (this.dsList2.rowcount == 0) {
        		this.dsList2.addRow();
        	}

        	// 정합성 체크 시작

        	// 1번째 Dataset에 Validation check Rule 추가
        	this.gfnClearValidation(this.dsList);
        	this.gfnSetValidation(this.dsList, "ID", "아이디", "required,length:5");
        	this.gfnSetValidation(this.dsList, "SSN", this.gfnGetWord("user.jumin"), "required,isssn");	// 주민번호
        	this.gfnSetValidation(this.dsList, "DATE_FROM", "시작일자", "required,date");
        	this.gfnSetValidation(this.dsList, "DATE_TO", "종료일자,시작일자", "required,date,fromto:DATE_FROM");
        	this.gfnSetValidation(this.dsList, "MAX_NUM", "최대값", "required,digits,max:10");
        	this.gfnSetValidation(this.dsList, "DECIMAL", "금리", "required,digits,declimit:2");
        	this.gfnSetValidation(this.dsList, "COMPARE_1", "1번째값", "required,digits");
        	this.gfnSetValidation(this.dsList, "COMPARE_2", "2번째값,1번째값", "required,digits,comparebig:COMPARE_1");

        	// 2번째 Dataset에 Validation check Rule 추가
        	this.gfnClearValidation(this.dsList2);
        	this.gfnSetValidation(this.dsList2, "DATE", "필수(날짜)", "required,date");
        	this.gfnSetValidation(this.dsList2, "EDIT", "필수(Edit)", "required");

        	// 동적으로 Validation check Rule 변경
        	if (this.rdoGubun.value == 1) {
        		this.gfnSetValidation(this.dsList2, "MAX_NUM", "최대값100", "required,digits,max:100");
        		this.gfnSetValidation(this.dsList2, "MIN_NUM", "최소값10", "required,digits,min:10");
        	}
        	else {
        		this.gfnSetValidation(this.dsList2, "LENGTH_MIN", "최소길이3", "required,minlength:3");
        	}

        	// 동적으로 Validation check Rule 삭제 가능
        	this.gfnSetValidation(this.dsList2, "RANGE", "범위(1~5)", "required,digits,range:1:5");
        	//this.gfnRemoveValidation(this.dsList2, "RANGE");

        	// 여러개의 Dataset에 대해 Validation 가능
        	// 수정된 Row가 아닌 전체 Row에 대해 Validation check
         	if (this.gfnValidation(this.dsList, this.dsList2, "A") == false) return;

        	alert("Validation이 통과 되었습니다.");
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnGrdCheck.addEventHandler("onclick",this.btn_grdVali_onclick,this);
            this.btnDivCheck.addEventHandler("onclick",this.btn_compVali_onclick,this);
            this.sta03.addEventHandler("onclick",this.sta03_onclick,this);
            this.btnAll.addEventHandler("onclick",this.btnAll_onclick,this);
            this.btnAdd.addEventHandler("onclick",this.fnAdd,this);
            this.btnDel.addEventHandler("onclick",this.fnDel,this);
        };
        this.loadIncludeScript("SampleValidation.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
