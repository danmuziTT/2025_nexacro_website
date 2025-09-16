(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_Cont_Tab");
            this.set_titletext("Component-Tab");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_emp", this);
            obj.set_keystring("");
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"POS_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/><Column id=\"MEMO\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"FULL_NAME\">Olivia</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20101003</Col><Col id=\"SALARY\">83000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">ivory</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"EMPL_ID\">AA001</Col></Row><Row><Col id=\"FULL_NAME\">John</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20051011</Col><Col id=\"SALARY\">76000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">greenyellow</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">AA002</Col></Row><Row><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20070206</Col><Col id=\"SALARY\">95000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">aliceblue</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">BB001</Col></Row><Row><Col id=\"FULL_NAME\">Adam</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20010109</Col><Col id=\"SALARY\">88000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">greenyellow</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"EMPL_ID\">CC001</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_fmBtn","20","536","90","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Get");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","501","340","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("this.Tab00.Tabpage1.form.edt_text.value;");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_text","115","536","160","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_value("Form Edit");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","530","440","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Tabpage 구조");
            obj.set_cssclass("sta_WF_TitleType1");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","10","468","290","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text(" Form에서 Tabpage 컴포넌트 접근");
            obj.set_cssclass("sta_WF_TitleType1");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","10","73","480","360",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("TabPage1");
            this.Tab00.addChild(obj.name, obj);

            obj = new Button("btn_tabBtn","20","288","90","28",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("Get");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_text","115","288","156","28",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("1");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("Grid01","10","10",null,"152","10",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_binddataset("ds_emp");
            obj.set_autofittype("col");
            obj.getSetter("onchanged").set("Common_onchanged");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Name\"/><Cell col=\"1\" text=\"Hire Date\"/><Cell col=\"2\" text=\"Salary\"/></Band><Band id=\"body\"><Cell text=\"bind:FULL_NAME\"/><Cell col=\"1\" text=\"bind:HIRE_DATE\"/><Cell col=\"2\" text=\"bind:SALARY\"/></Band></Format></Formats>");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static08","10","167","80","28",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("Name");
            obj.set_background("");
            obj.set_padding("");
            obj.getSetter("onchanged").set("Common_onchanged");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit00",null,"167","132","28","254",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("4");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01","254","167","80","28",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("Hire Date");
            obj.set_background("");
            obj.set_padding("");
            obj.getSetter("onchanged").set("Common_onchanged");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("Calendar00",null,"167","132","28","10",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("6");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static03","10","222","290","28",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text(" TabPage에서 Form 컴포넌트 접근");
            obj.set_cssclass("sta_WF_TitleType1");
            obj.set_positionstep("0");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static00","20","255","175","28",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("this.edt_form.value;");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("TabPage2");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tab("Tab02","530","470","480","170",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab02);
            obj.set_text("Tabpage1");
            this.Tab02.addChild(obj.name, obj);

            obj = new Button("btn_tab","10","7","311","28",null,null,null,null,null,null,this.Tab02.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text(" 1. Tabpage Color Change > Yellow");
            obj.set_textAlign("left");
            this.Tab02.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_form","10","40","311","28",null,null,null,null,null,null,this.Tab02.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text(" 2. Tabpage Form Color Change -> Pink");
            obj.set_textAlign("left");
            this.Tab02.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_size","10","73","311","28",null,null,null,null,null,null,this.Tab02.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text(" 3. Tabpage Form Size");
            obj.set_textAlign("left");
            this.Tab02.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab02);
            obj.set_text("Tabpage2");
            this.Tab02.addChild(obj.name, obj);

            obj = new Tab("Tab01","530","73","480","360",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab01);
            obj.set_text("TabPage1");
            obj.set_url("EduBasic::Comp/Comp_Tab_Sub.xfdl");
            this.Tab01.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab01);
            obj.set_text("TabPage2");
            this.Tab01.addChild(obj.name, obj);

            obj = new Static("Static02_00","10","40","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text(" Contents Form - Tab00");
            obj.set_cssclass("sta_WF_TitleType1");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","530","40","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text(" Linked Form - Tab01");
            obj.set_cssclass("sta_WF_TitleType1");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static99","10","0","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Tab");
            obj.set_cssclass("sta_WF_TitleMain");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Tab00.Tabpage1.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage1.form,function(p){});
            this.Tab00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage2
            obj = new Layout("default","",0,0,this.Tab00.Tabpage2.form,function(p){});
            this.Tab00.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab02.Tabpage1.form
            obj = new Layout("default","",0,0,this.Tab02.Tabpage1.form,function(p){});
            this.Tab02.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab02.Tabpage2
            obj = new Layout("default","",0,0,this.Tab02.Tabpage2.form,function(p){});
            this.Tab02.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab01.Tabpage1
            obj = new Layout("default","",0,0,this.Tab01.Tabpage1.form,function(p){});
            this.Tab01.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab01.Tabpage2
            obj = new Layout("default","",0,0,this.Tab01.Tabpage2.form,function(p){});
            this.Tab01.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1038,650,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Tab00.Tabpage1.form.Edit00","value","ds_emp","FULL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Tab00.Tabpage1.form.Calendar00","value","ds_emp","HIRE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","EduBasic::Comp/Comp_Tab_Sub.xfdl");
        };
        
        // User Script
        this.registerScript("Comp_Tab.xfdl", function() {


        // Form Comp--> Tab Comp
        this.btn_fmBtn_onclick = function(obj,e)
        {
        	var sRtn = this.Tab01.Tabpage1.form.Edit00.value;
        	this.edt_text.set_value(sRtn);
        };

        // Tabpage--> Form Comp
        this.Tab00_Tabpage1_btn_tabBtn_onclick = function(obj,e)
        {
        	var sRtn = this.edt_text.value;
        	this.Tab00.Tabpage1.form.edt_text.set_value(sRtn);
        };


        this.Tab02_Tabpage1_btn_tab_onclick = function(obj,e)
        {
        	this.Tab02.Tabpage1.set_background("yellow");
        };

        this.Tab02_Tabpage1_btn_form_onclick = function(obj,e)
        {
        	this.Tab02.Tabpage1.form.set_background("pink");
        };

        this.Tab02_Tabpage1_btn_size_onclick = function(obj,e)
        {
        	this.Tab02.Tabpage1.form.set_width(360);
        	this.Tab02.Tabpage1.form.set_height(120);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_fmBtn.addEventHandler("onclick",this.btn_fmBtn_onclick,this);
            this.Tab00.addEventHandler("onchanged",this.Tab00_onchanged,this);
            this.Tab00.Tabpage1.form.btn_tabBtn.addEventHandler("onclick",this.Tab00_Tabpage1_btn_tabBtn_onclick,this);
            this.Tab00.Tabpage1.form.Static08.addEventHandler("onclick",this.Static_onclick,this);
            this.Tab00.Tabpage1.form.Edit00.addEventHandler("onchanged",this.Common_onchanged,this);
            this.Tab00.Tabpage1.form.Static01.addEventHandler("onclick",this.Static_onclick,this);
            this.Tab00.Tabpage1.form.Calendar00.addEventHandler("onchanged",this.Common_onchanged,this);
            this.Tab02.Tabpage1.form.btn_tab.addEventHandler("onclick",this.Tab02_Tabpage1_btn_tab_onclick,this);
            this.Tab02.Tabpage1.form.btn_form.addEventHandler("onclick",this.Tab02_Tabpage1_btn_form_onclick,this);
            this.Tab02.Tabpage1.form.btn_size.addEventHandler("onclick",this.Tab02_Tabpage1_btn_size_onclick,this);
            this.Tab01.addEventHandler("onchanged",this.Tab00_onchanged,this);
        };
        this.loadIncludeScript("Comp_Tab.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
