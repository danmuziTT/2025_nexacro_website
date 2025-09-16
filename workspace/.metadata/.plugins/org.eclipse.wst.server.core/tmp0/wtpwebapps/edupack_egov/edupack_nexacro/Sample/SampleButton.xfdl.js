(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SampleButton");
            this.set_titletext("Slide & Toggle Button");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta_01","510","232","240","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("2) 토글 버튼 Toggle Button");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Div("divToggle","520","282","76","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_url("Cmm::CmmToggle.xfdl");
            obj.getSetter("callbackfunc").set("divToggle_onitemchanged");
            obj.getSetter("onText").set("On");
            obj.getSetter("offText").set("Off");
            this.addChild(obj.name, obj);

            obj = new Button("btnGet","520","355","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("get");
            this.addChild(obj.name, obj);

            obj = new Button("btnSet","625","355","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("set");
            this.addChild(obj.name, obj);

            obj = new Div("divSlide","10","272","400","150",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div00");
            obj.set_url("Cmm::CmmSlide.xfdl");
            obj.getSetter("max").set("99");
            obj.getSetter("lable").set("년");
            obj.getSetter("callbackfunc").set("divSlide_onvaluechanged");
            obj.getSetter("callbackfunc2").set("divSlide_onvaluechange");
            this.addChild(obj.name, obj);

            obj = new Button("btnGetSilde","17","440","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("get");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetSilde","122","440","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("set");
            this.addChild(obj.name, obj);

            obj = new Edit("edtValue","227","440","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_value("50");
            obj.set_inputtype("digit");
            obj.set_text("50");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","10","35",null,"190","10",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("1. Slide Button 사용방법\r\r\n  1) Div를 추가하고 url 속성에 \"Cmm::CmmSlide.xfdl\" 을 적용한다.\r\r\n  2) Div에 User Property 를 추가한다.\r\r\n    - label: 값의 단위\r\n    - max: slide max 값\r\n\r\n2. Toggle Button\r\r\n  1) div를 추가한url 속성에 \"Cmm::CmmToggle.xfdl\"  를 적용한다.");
            obj.set_cssclass("sta_WF_Desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","232","188","35",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("1) 슬라이드 Slide");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk00","516","464","85","40",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("chk_WF_Toggle");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","10","0","221","35",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("슬라이드 / 토글 버튼");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_00","510","420","240","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("2-1) 토글 버튼 CheckBox 응용");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divToggle
            obj = new Layout("default","",0,0,this.divToggle.form,function(p){});
            this.divToggle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSlide
            obj = new Layout("default","",0,0,this.divSlide.form,function(p){});
            this.divSlide.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1038,650,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Cmm::CmmToggle.xfdl");
            this._addPreloadList("fdl","Cmm::CmmSlide.xfdl");
        };
        
        // User Script
        this.registerScript("SampleButton.xfdl", function() {
        /**
        *  Nexacro Professional Training Couse
        *  @MenuPath    개발가이드 > 컴포넌트 연동 > Slide & Toggle Button
        *  @FileName 	SampleButton.xfdl
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
            this.gfnFormOnLoad(obj);
        };

         /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        this.divToggle_onitemchanged = function(obj, value)
        {
        	trace(obj + " , "+ value);
        };

        this.divSlide_onvaluechange = function(obj, value)
        {
        	trace("divSlide_onvaluechange "+ obj + " , "+ value);
        };

        this.divSlide_onvaluechanged = function(obj, value)
        {
        	trace("divSlide_onvaluechanged "+ obj + " , "+ value);
        };

         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/

        this.btnGet_onclick = function(obj,e)
        {
        	alert(this.divToggle.form.getValue());
        };

        this.btnSet_onclick = function(obj,e)
        {
        	this.divToggle.form.setValue(!this.divToggle.form.getValue());
        };

        this.btnGetSilde_onclick = function(obj,e)
        {
        	alert(this.divSlide.form.getValue());
        };

        this.btnSetSilde_onclick = function(obj,e)
        {
        	this.divSlide.form.setValue(this.edtValue.value);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.addEventHandler("ontimer",this.Form_ontimer,this);
            this.btnGet.addEventHandler("onclick",this.btnGet_onclick,this);
            this.btnSet.addEventHandler("onclick",this.btnSet_onclick,this);
            this.btnGetSilde.addEventHandler("onclick",this.btnGetSilde_onclick,this);
            this.btnSetSilde.addEventHandler("onclick",this.btnSetSilde_onclick,this);
        };
        this.loadIncludeScript("SampleButton.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
