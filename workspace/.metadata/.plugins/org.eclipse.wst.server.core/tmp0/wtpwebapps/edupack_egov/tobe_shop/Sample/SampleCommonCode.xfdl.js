(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SampleCommonCode");
            this.set_titletext("공통코드");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_pos", this);
            obj._setContents("<ColumnInfo><Column id=\"GROUP\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_area", this);
            obj._setContents("<ColumnInfo><Column id=\"GROUP\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gender", this);
            obj._setContents("<ColumnInfo><Column id=\"GROUP\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_hobby", this);
            obj._setContents("<ColumnInfo><Column id=\"GROUP\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_list","10","320","456",null,null,"10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("gdsComCode");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"72\"/><Column size=\"150\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"GROUP_CODE\"/><Cell col=\"1\" text=\"GROUP_NAME\"/><Cell col=\"2\" text=\"CODE\"/><Cell col=\"3\" text=\"CODE_NAME\"/></Band><Band id=\"body\"><Cell text=\"bind:GROUP_CODE\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:GROUP_NAME\" suppress=\"1\"/><Cell col=\"2\" text=\"bind:CODE\"/><Cell col=\"3\" text=\"bind:CODE_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","0",null,"100.00%","10",null,"-280",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_guide1");
            obj.set_visible("false");
            obj.set_text("h10");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10",null,null,"10","0","-280",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("false");
            obj.set_text("h10");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","810","312","180","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_pos");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NAME");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","658","491","367","139",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_hobby");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"193\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"CODE\"/><Cell col=\"1\" text=\"CODE_NAME\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE\"/><Cell col=\"1\" text=\"bind:CODE_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","662","461","155","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("취미코드 - User Code");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","474","345","176","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("데이터셋 ID로 가져오기");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","662","312","126","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("직급코드 - Default");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","662","345","126","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("성별코드 - \"전체\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","474","411","56","28",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Clear");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","810","345","180","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_innerdataset("ds_gender");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NAME");
            obj.set_rowcount("1");
            obj.set_border("1px solid #cccccc");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","658","378","367","70",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","10","10","156","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("지역코드 - \"선택하세요\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","168","10","180","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_area");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NAME");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta02","10","0","221","35",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("공통코드");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","10","35",null,"250","10",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("공통코드 가져오기\r\n방식 1 : gdsComCode 에서 가져오기 - this.gfnGetCommonCode(arrCode) 호출\r\n방식 2: 서비스 호출하여 가져오기 - this.gfnSearchCode(arrCode) 호출\r\n\r\n배열(arrCode)에 조회할 공통코드 정보를 추가 후 함수를 호출 \r\n    codeGroup : 공통코드 구분코드\r\n    obj : 공통코드 적용할 component or dataset        \r\n    first  : 첫번째 row에 추가할 값                    \r\n        0: 전체(ALL) 표현 - 코드값은 \"ALL\"                    \r\n        1: 선택하세요 표현 - 코드값은 \"\"\r\n        2: 사용자 지정 코드/명을 \":\" 구분자로 지정");
            obj.set_cssclass("sta_WF_Desc");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","474","312","176","28",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("컴포넌트 ID로 가져오기");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","474","378","176","28",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("서비스 호출하여 가져오기");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_00","10","285","221","35",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("공통코드 목록");
            obj.set_cssclass("sta_WF_TitleSub");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1038,650,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SampleCommonCode.xfdl", function() {
        /**
        *  Nexacro Professional Training Couse
        *  @MenuPath    개발가이드 > 표준 및 기본 정의 > 공통코드
        *  @FileName 	SampleCommonCode.xfdl
        *  @Creator 	TOBESOFT Education
        *  @CreateDate 	2023/01/03
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2023/01/03      		 TOBESOFT Education	 	  	최초 생성
        *******************************************************************************
        */



        this.Form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);
        };

        this.btn00_onclick = function(obj,e)
        {
        	this.grd_list.set_binddataset("gdsComCode");
        	var arrCode = new Array();
        	arrCode.push({codeGroup:"A001", obj:this.Combo00});
        	arrCode.push({codeGroup:"C001", obj:this.Radio00           , first:"0"});
        	arrCode.push({codeGroup:"B001", obj:this.Div00.form.Combo00, first:"1"});
        	arrCode.push({codeGroup:"F001", obj:this.ds_hobby          , first:"2:AAA:NEXACRO"});
            this.gfnGetCommonCode(arrCode);
        };

        this.Button00_onclick = function(obj,e)
        {
        	this.grd_list.set_binddataset("gdsComCode");
            var arrCode = new Array();
        	arrCode.push({codeGroup:"A001", obj:this.ds_pos});
        	arrCode.push({codeGroup:"C001", obj:this.ds_gender, first:"0"});
        	arrCode.push({codeGroup:"B001", obj:this.ds_area, first:"1"});
        	arrCode.push({codeGroup:"F001", obj:this.ds_hobby, first:"2:AAA:NEXACRO"});

            this.gfnGetCommonCode(arrCode);
        };

        this.fn_callback = function()
        {
            this.alert("공통코드 조회 후 처리");
        }


        this.Button01_onclick = function(obj,e)
        {
        	this.Combo00.set_index(-1);
        	this.Radio00.set_index(-1);
        	this.Div00.form.Combo00.set_index(-1);

            this.ds_pos.clear();
            this.ds_area.clear();
            this.ds_gender.clear();
            this.ds_hobby.clear();

        };


        this.btn01_onclick = function(obj,e)
        {
        	this.grd_list.set_binddataset("gdsTemp");
        	var arrCode = new Array();
        	arrCode.push({codeGroup:"A001", obj:this.ds_pos});
        	arrCode.push({codeGroup:"C001", obj:this.ds_gender, first:"0"});
            this.gfnSearchCode(arrCode, "fn_callback");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.addEventHandler("ontimer",this.Form_Emp_ontimer,this);
            this.grd_list.addEventHandler("onheadclick",this.grd_list_onheadclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
        };
        this.loadIncludeScript("SampleCommonCode.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
