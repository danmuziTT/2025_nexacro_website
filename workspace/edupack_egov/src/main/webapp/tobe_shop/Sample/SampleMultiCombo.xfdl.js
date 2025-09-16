(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SampleMultiCombo");
            this.set_titletext("멀티콤보");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList00", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">01</Col><Col id=\"name\">AAAA</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"name\">BBBB</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"name\">CCCC</Col></Row><Row><Col id=\"code\">04</Col><Col id=\"name\">DDDD</Col></Row><Row><Col id=\"code\">05</Col><Col id=\"name\">EEEE</Col></Row><Row><Col id=\"code\">06</Col><Col id=\"name\">FFFF</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList01", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"INT\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">01</Col><Col id=\"name\">AAAA</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"name\">BBBB</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"name\">CCCC</Col></Row><Row><Col id=\"code\">04</Col><Col id=\"name\">DDDD</Col></Row><Row><Col id=\"code\">05</Col><Col id=\"name\">EEEE</Col></Row><Row><Col id=\"code\">06</Col><Col id=\"name\">FFFF</Col></Row><Row><Col id=\"code\">08</Col><Col id=\"name\">GGGG</Col></Row><Row><Col id=\"code\">09</Col><Col id=\"name\">HHHH</Col></Row><Row><Col id=\"code\">10</Col><Col id=\"name\">IIII</Col></Row><Row><Col id=\"code\">11</Col><Col id=\"name\">JJJJ</Col></Row><Row><Col id=\"code\">12</Col><Col id=\"name\">KKKK</Col></Row><Row><Col id=\"code\">13</Col><Col id=\"name\">LLLL</Col></Row><Row><Col id=\"code\">14</Col><Col id=\"name\">NNNN</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList02", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/><Column id=\"_checkcolumn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">01</Col><Col id=\"NM\">AAAA</Col></Row><Row><Col id=\"CD\">02</Col><Col id=\"NM\">BBBB</Col></Row><Row><Col id=\"CD\">03</Col><Col id=\"NM\">CCCC</Col></Row><Row><Col id=\"CD\">04</Col><Col id=\"NM\">DDDD</Col></Row><Row><Col id=\"CD\">05</Col><Col id=\"NM\">EEEE</Col></Row><Row><Col id=\"CD\">06</Col><Col id=\"NM\">FFFF</Col></Row><Row><Col id=\"CD\">08</Col><Col id=\"NM\">GGGG</Col></Row><Row><Col id=\"CD\">09</Col><Col id=\"NM\">HHHH</Col></Row><Row><Col id=\"CD\">10</Col><Col id=\"NM\">IIII</Col></Row><Row><Col id=\"CD\">11</Col><Col id=\"NM\">JJJJ</Col></Row><Row><Col id=\"CD\">12</Col><Col id=\"NM\">KKKK</Col></Row><Row><Col id=\"CD\">13</Col><Col id=\"NM\">LLLL</Col></Row><Row><Col id=\"CD\">14</Col><Col id=\"NM\">NNNN</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList03", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/><Column id=\"_checkcolumn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">01</Col><Col id=\"NM\">AAAA</Col></Row><Row><Col id=\"CD\">02</Col><Col id=\"NM\">BBBB</Col></Row><Row><Col id=\"CD\">03</Col><Col id=\"NM\">CCCC</Col></Row><Row><Col id=\"CD\">04</Col><Col id=\"NM\">DDDD</Col></Row><Row><Col id=\"CD\">05</Col><Col id=\"NM\">EEEE</Col></Row><Row><Col id=\"CD\">06</Col><Col id=\"NM\">FFFF</Col></Row><Row><Col id=\"CD\">08</Col><Col id=\"NM\">GGGG</Col></Row><Row><Col id=\"CD\">09</Col><Col id=\"NM\">HHHH</Col></Row><Row><Col id=\"CD\">10</Col><Col id=\"NM\">IIII</Col></Row><Row><Col id=\"CD\">11</Col><Col id=\"NM\">JJJJ</Col></Row><Row><Col id=\"CD\">12</Col><Col id=\"NM\">KKKK</Col></Row><Row><Col id=\"CD\">13</Col><Col id=\"NM\">LLLL</Col></Row><Row><Col id=\"CD\">14</Col><Col id=\"NM\">NNNN</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc","10","35",null,"170","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("멀티콤보 기능을 구현한 샘플이다. 아래와 같이 적용 할 수 있다.\r\n\r\n1. Div를 생성하고 url 속성에 Cmm::CmmMultiCombo.xfdl 를 지정한다.\r\n2. Div 속성창에서 오른쪽 마우스를 클릭하여 \"Add User Property\" 항목을 이용해 User Property를 추가한다.\r\n    - comboinnerdataset : combo bind dataset\r\n   - combodatacolumn : combo text\r\n   - combocodecolumn : combo value");
            obj.set_cssclass("sta_WF_Desc");
            this.addChild(obj.name, obj);

            obj = new Div("divMultCombo","10","268","202","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_url("Cmm::CmmMultiCombo.xfdl");
            obj.getSetter("callbackfunc").set("fnMultComboCallback");
            obj.getSetter("combocodecolumn").set("code");
            obj.getSetter("combodatacolumn").set("name");
            obj.getSetter("comboinnerdataset").set("dsList00");
            this.addChild(obj.name, obj);

            obj = new Button("btnGetValue","10","301","106","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("get Value");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGetValue","121","301","245","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetValue","10","367","106","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("set Value");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSetValue","121","367","245","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Button("btnGetText","10","334","106","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("get Text");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGetText","121","334","245","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Button("btnInit","322","268","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("initialization");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","10","0","221","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("멀티콤보");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","10","235","198","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("1) 멀티콤보 사용방법");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Button("btnRequiredTrue","10","400","106","28",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Required True");
            this.addChild(obj.name, obj);

            obj = new Button("btnRequiredFalse","121","400","106","28",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Required False");
            this.addChild(obj.name, obj);

            obj = new Div("divMultCombo00","499","268","202","28",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Div00");
            obj.set_url("Cmm::CmmMultiCombo.xfdl");
            obj.getSetter("combocodecolumn").set("code");
            obj.getSetter("combodatacolumn").set("name");
            obj.getSetter("comboinnerdataset").set("dsList00");
            obj.getSetter("allcheck").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","499","235","410","28",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("2) 전체선택/해제     userproperty -> allcheck 추가 후 true");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Div("div00","499","301","224","28",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("div00");
            obj.set_url("Cmm::CmmMultiCombo.xfdl");
            obj.getSetter("comboinnerdataset").set("dsList01");
            obj.getSetter("combodatacolumn").set("name");
            obj.getSetter("combocodecolumn").set("code");
            obj.getSetter("allcheck").set("true");
            obj.getSetter("maxcount").set("4");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetData","217","268","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("setData");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMultCombo
            obj = new Layout("default","",0,0,this.divMultCombo.form,function(p){});
            this.divMultCombo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMultCombo00
            obj = new Layout("default","",0,0,this.divMultCombo00.form,function(p){});
            this.divMultCombo00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1038,650,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Cmm::CmmMultiCombo.xfdl");
        };
        
        // User Script
        this.registerScript("SampleMultiCombo.xfdl", function() {
        /**
        *  Nexacro Professional Training Couse
        *  @MenuPath    개발가이드 > 컴포넌트 및 연동 > 멀티콤보
        *  @FileName 	SampleMultiCombo.xfdl
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

        	// 데이타 로딩 후 콤보데이타에 데이타 셋팅
        	this.divMultCombo.form.fnSetDataset(this.dsList00);


        	this.divMultCombo00.form.fnSetDataset(this.dsList00);
        	this.div00.form.fnSetDataset(this.dsList00);
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/
        /**
        * fnMultComboCallbackFunc : 멀티콤보콜백
        * @param  : obj		   - [object]Button
        * @param  : e		   - [string]ClickEventInfo
        * @return : N/A
        * @example :
        */
        this.fnMultComboCallback = function()
        {
        	trace("getText::"+this.divMultCombo.form.getText());
        }

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
        * 멀티콤보데이터가져오기
        * @param  : obj		   - [object]Button
        * @param  : e		   - [string]ClickEventInfo
        * @return : N/A
        * @example :
        */
        this.btnGetValue_onclick = function(obj,e)
        {
        	var sValue = this.divMultCombo.form.getValue();
        	this.edtGetValue.set_value(sValue);
        };

        /**
        * 멀티콤보텍스트가져오기
        * @param  : obj		   - [object]Button
        * @param  : e		   - [string]ClickEventInfo
        * @return : N/A
        * @example :
        */
        this.btnGetText_onclick = function(obj,e)
        {
        	var sText = this.divMultCombo.form.getText();
        	this.edtGetText.set_value(sText);
        };

        /**
        * 멀티콤보 데이터셋 세팅하기
        * @param  : obj		   - [object]Button
        * @param  : e		   - [string]ClickEventInfo
        * @return : N/A
        * @example :
        */
        this.btnSetValue_onclick = function(obj,e)
        {
        	var sValue = this.edtSetValue.value;

        	this.divMultCombo.form.setValue(sValue);
        };

        /**
        * 멀티콤보 필수처리
        * @param  : obj		   - [object]Button
        * @param  : e		   - [string]ClickEventInfo
        * @return : N/A
        * @example :
        */
        this.btnRequiredTrue_onclick = function(obj,e)
        {
        	this.divMultCombo.form.fnSetRequired(true);
        };

        this.btnRequiredFalse_onclick = function(obj,e)
        {
        	this.divMultCombo.form.fnSetRequired(false);
        };

        this.btnSetData_onclick = function(obj,e)
        {
        	// 데이타 로딩 후 콤보데이타에 데이타 셋팅
        	this.divMultCombo.form.fnSetDataset(this.dsList00);
        	this.divMultCombo00.form.fnSetDataset(this.dsList00);
        	this.div00.form.fnSetDataset(this.dsList00);
        };

        /**
        * 멀티콤보 초기화
        * @param  : obj		   - [object]Button
        * @param  : e		   - [string]ClickEventInfo
        * @return : N/A
        * @example :
        */
        this.btnInit_onclick = function(obj,e)
        {
        	this.divMultCombo.form.fnInit();
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnGetValue.addEventHandler("onclick",this.btnGetValue_onclick,this);
            this.btnSetValue.addEventHandler("onclick",this.btnSetValue_onclick,this);
            this.btnGetText.addEventHandler("onclick",this.btnGetText_onclick,this);
            this.btnInit.addEventHandler("onclick",this.btnInit_onclick,this);
            this.btnRequiredTrue.addEventHandler("onclick",this.btnRequiredTrue_onclick,this);
            this.btnRequiredFalse.addEventHandler("onclick",this.btnRequiredFalse_onclick,this);
            this.btnSetData.addEventHandler("onclick",this.btnSetData_onclick,this);
        };
        this.loadIncludeScript("SampleMultiCombo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
