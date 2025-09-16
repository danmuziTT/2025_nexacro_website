(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SampleMultiCheckbox");
            this.set_titletext("멀티체크박스");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">01</Col><Col id=\"name\">피카츄</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"name\">라이츄</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"name\">파이리</Col></Row><Row><Col id=\"code\">04</Col><Col id=\"name\">꼬부기</Col></Row><Row><Col id=\"code\">05</Col><Col id=\"name\">버터플</Col></Row><Row><Col id=\"code\">06</Col><Col id=\"name\">야도란</Col></Row><Row><Col id=\"code\">07</Col><Col id=\"name\">피죤투</Col></Row><Row><Col id=\"code\">08</Col><Col id=\"name\">또가스</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">01</Col><Col id=\"name\">피카츄</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"name\">라이츄</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"name\">파이리</Col></Row><Row><Col id=\"code\">04</Col><Col id=\"name\">꼬부기</Col></Row><Row><Col id=\"code\">05</Col><Col id=\"name\">버터플</Col></Row><Row><Col id=\"code\">06</Col><Col id=\"name\">야도란</Col></Row><Row><Col id=\"code\">07</Col><Col id=\"name\">피죤투</Col></Row><Row><Col id=\"code\">08</Col><Col id=\"name\">또가스</Col></Row><Row><Col id=\"code\">09</Col><Col id=\"name\">꼬렛</Col></Row><Row><Col id=\"code\">10</Col><Col id=\"name\">이상해씨</Col></Row><Row><Col id=\"code\">11</Col><Col id=\"name\">이브이</Col></Row><Row><Col id=\"code\">12</Col><Col id=\"name\">유니콘</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divCheckbox","10","215","540","278",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("Cmm::CmmMultiCheckbox.xfdl");
            obj.getSetter("checkboxinnerdataset").set("Dataset00");
            obj.getSetter("truevalue").set("code");
            obj.getSetter("checkboxtextcolumn").set("name");
            obj.getSetter("falsevalue").set("");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","35",null,"170","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("1. Div 생성 후 url 속성을 Cmm::CmmMultiCheckbox.xfdl로 지정한다.\r\n\r\n2. div에 userproperties를 생성한다.\r\n    checkboxinnerdataset << 바인딩할 데이터셋\r\n    checkboxtextcolumn  << 텍스트컬럼\r\n    truevalue  << 체크박스 선택시 value\r\n    falsevalue << 체크박스 미선택시 value");
            obj.set_cssclass("sta_WF_Desc");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetValue","570","248","90","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("setValue");
            this.addChild(obj.name, obj);

            obj = new Button("btnGetValue","570","314","90","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("getValue");
            this.addChild(obj.name, obj);

            obj = new Button("btnInit","570","215","90","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("init");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGetValue","665","314","346","28",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetValue00","570","281","90","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("setValue");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","665","248","346","28",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_enable("false");
            obj.set_value("userproperty사용");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSetValue","665","281","346","28",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_enable("false");
            obj.set_value("this.Dataset01,\"code\",\"name\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnRequiredTrue","665","215","106","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("RequiredTrue");
            this.addChild(obj.name, obj);

            obj = new Button("btnRequiredFalse","776","215","106","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("RequiredFalse");
            this.addChild(obj.name, obj);

            obj = new Button("btnGetText","570","347","90","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("getText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGetValue00","665","347","346","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","10","0","221","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("멀티체크박스");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divCheckbox
            obj = new Layout("default","",0,0,this.divCheckbox.form,function(p){});
            this.divCheckbox.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1038,650,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Cmm::CmmMultiCheckbox.xfdl");
        };
        
        // User Script
        this.registerScript("SampleMultiCheckbox.xfdl", function() {
        /**
        *  Nexacro Professional Training Couse
        *  @MenuPath    개발가이드 > 컴포넌트 및 연동 > 멀티체크박스
        *  @FileName 	SampleMultiCheckbox.xfdl
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
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/

        /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
        * 멀티체크박스 데이터세팅(userporperty)
        * @param  : obj		   - [object]Button
        * @param  : e		   - [string]ClickEventInfo
        * @return : N/A
        * @example :
        */
        this.btnSetValue_onclick = function(obj,e)
        {
        	this.divCheckbox.form.fnSetValue();
        };

        /**
        * 멀티체크박스 데이터세팅
        * @param  : obj		   - [object]Button
        * @param  : e		   - [string]ClickEventInfo
        * @return : N/A
        * @example :
        */
        this.btnSetValue00_onclick = function(obj,e)
        {
        	this.divCheckbox.form.fnSetValue(this.Dataset01, "code", "name");
        };

        /**
        * 초기화
        * @param  : obj		   - [object]Button
        * @param  : e		   - [string]ClickEventInfo
        * @return : N/A
        * @example :
        */
        this.btnInit_onclick = function(obj,e)
        {
        	//체크박스삭제
        	this.divCheckbox.form.fnInit();
        };

        /**
        * 멀티체크박스 데이터가져오기
        * @param  : obj		   - [object]Button
        * @param  : e		   - [string]ClickEventInfo
        * @return : N/A
        * @example :
        */
        this.btnGetValue_onclick = function(obj,e)
        {
        	var sCode = this.divCheckbox.form.fnGetValue();
        	this.edtGetValue.set_value(sCode);
        };

        /**
        * 멀티체크박스 텍스트 가져오기
        * @param  : obj		   - [object]Button
        * @param  : e		   - [string]ClickEventInfo
        * @return : N/A
        * @example :
        */
        this.btnGetText_onclick = function(obj,e)
        {
        	var sCode = this.divCheckbox.form.fnGetText();
        	this.edtGetValue00.set_value(sCode);
        };

        /**
        * 멀티체크박스 필수값 지정
        * @param  : obj		   - [object]Button
        * @param  : e		   - [string]ClickEventInfo
        * @return : N/A
        * @example :
        */
        this.btnRequiredTrue_onclick = function(obj,e)
        {
        	this.divCheckbox.form.fnSetRequired(true);
        };

        /**
        * 멀티체크박스 필수값 해제
        * @param  : obj		   - [object]Button
        * @param  : e		   - [string]ClickEventInfo
        * @return : N/A
        * @example :
        */
        this.btnRequiredFalse_onclick = function(obj,e)
        {
        	this.divCheckbox.form.fnSetRequired(false);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnSetValue.addEventHandler("onclick",this.btnSetValue_onclick,this);
            this.btnGetValue.addEventHandler("onclick",this.btnGetValue_onclick,this);
            this.btnInit.addEventHandler("onclick",this.btnInit_onclick,this);
            this.btnSetValue00.addEventHandler("onclick",this.btnSetValue00_onclick,this);
            this.btnRequiredTrue.addEventHandler("onclick",this.btnRequiredTrue_onclick,this);
            this.btnRequiredFalse.addEventHandler("onclick",this.btnRequiredFalse_onclick,this);
            this.btnGetText.addEventHandler("onclick",this.btnGetText_onclick,this);
        };
        this.loadIncludeScript("SampleMultiCheckbox.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
