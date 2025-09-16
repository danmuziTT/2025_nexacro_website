(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Mobile_Component");
            this.set_titletext("모바일컴포넌트");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,728);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_emp", this);
            obj.set_keystring("");
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"POS_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/><Column id=\"MEMO\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"FULL_NAME\">Olivia</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20101003</Col><Col id=\"SALARY\">83000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">ivory</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"EMPL_ID\">AA001</Col></Row><Row><Col id=\"FULL_NAME\">John</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20051011</Col><Col id=\"SALARY\">76000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">greenyellow</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">AA002</Col></Row><Row><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20070206</Col><Col id=\"SALARY\">95000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">aliceblue</Col><Col id=\"DEPT_CD\">03</Col><Col id=\"EMPL_ID\">BB001</Col></Row><Row><Col id=\"FULL_NAME\">Maia</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20090512</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">ivory</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"EMPL_ID\">BB002</Col></Row><Row><Col id=\"FULL_NAME\">Adam</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20010109</Col><Col id=\"SALARY\">88000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">greenyellow</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"EMPL_ID\">CC001</Col></Row><Row><Col id=\"FULL_NAME\">Ray</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20160202</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">lightpink</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">DD001</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CD\">01</Col><Col id=\"DEPT_NAME\">Accounting Team</Col></Row><Row><Col id=\"DEPT_CD\">02</Col><Col id=\"DEPT_NAME\">HR Team</Col></Row><Row><Col id=\"DEPT_CD\">03</Col><Col id=\"DEPT_NAME\">Sales Team</Col></Row><Row><Col id=\"DEPT_CD\">04</Col><Col id=\"DEPT_NAME\">Design Team</Col></Row><Row><Col id=\"DEPT_CD\">05</Col><Col id=\"DEPT_NAME\">Education Team</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_slide","40","187","400","130",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("EduBasic::Mobile/Mobile_Sub_Slide.xfdl");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_toggle",null,"67","106","47","187",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("토글");
            obj.set_cssclass("chk_WF_onoff");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_basic","20","435","140","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NAME");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_test","170","435","140","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_popuptype("none");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_center","320","435","140","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_popuptype("center");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_basic","20","552","140","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy.MM.dd");
            obj.set_editformat("yyyy.MM.dd");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_test","170","552","140","50",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_popuptype("center");
            obj.set_dateformat("yyyy.MM.dd");
            obj.set_editformat("yyyy.MM.dd");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_sys","320","552","140","50",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_popuptype("system");
            obj.set_dateformat("yyyy.MM.dd");
            obj.set_editformat("yyyy.MM.dd");
            this.addChild(obj.name, obj);

            obj = new Static("st_title01","10","135","400","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Slidebar(Div - Linked form)");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_MBF_subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","10","10","400","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Toggle Switch(Checkbox)");
            obj.set_cssclass("sta_MBF_subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_title02","10","337","400","40",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("popuptype (property)");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_MBF_subtitle");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_slide
            obj = new Layout("default","",0,0,this.div_slide.form,function(p){});
            this.div_slide.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","screen_phone",480,728,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("모바일컴포넌트");

                p.div_slide.set_taborder("0");
                p.div_slide.set_text("Div00");
                p.div_slide.set_url("EduBasic::Mobile/Mobile_Sub_Slide.xfdl");
                p.div_slide.set_formscrollbartype("none");
                p.div_slide.move("40","187","400","130",null,null);

                p.chk_toggle.set_taborder("1");
                p.chk_toggle.set_text("토글");
                p.chk_toggle.set_cssclass("chk_WF_onoff");
                p.chk_toggle.set_value("true");
                p.chk_toggle.move(null,"67","106","47","187",null);

                p.cbo_basic.set_taborder("2");
                p.cbo_basic.set_innerdataset("ds_dept");
                p.cbo_basic.set_codecolumn("DEPT_CD");
                p.cbo_basic.set_datacolumn("DEPT_NAME");
                p.cbo_basic.move("20","435","140","50",null,null);

                p.cbo_test.set_taborder("3");
                p.cbo_test.set_innerdataset("ds_dept");
                p.cbo_test.set_codecolumn("DEPT_CD");
                p.cbo_test.set_datacolumn("DEPT_NAME");
                p.cbo_test.set_popuptype("none");
                p.cbo_test.move("170","435","140","50",null,null);

                p.cbo_center.set_taborder("4");
                p.cbo_center.set_innerdataset("ds_dept");
                p.cbo_center.set_codecolumn("DEPT_CD");
                p.cbo_center.set_datacolumn("DEPT_NAME");
                p.cbo_center.set_popuptype("center");
                p.cbo_center.move("320","435","140","50",null,null);

                p.cal_basic.set_taborder("5");
                p.cal_basic.set_dateformat("yyyy.MM.dd");
                p.cal_basic.set_editformat("yyyy.MM.dd");
                p.cal_basic.move("20","552","140","50",null,null);

                p.cal_test.set_taborder("6");
                p.cal_test.set_popuptype("center");
                p.cal_test.set_dateformat("yyyy.MM.dd");
                p.cal_test.set_editformat("yyyy.MM.dd");
                p.cal_test.move("170","552","140","50",null,null);

                p.cal_sys.set_taborder("7");
                p.cal_sys.set_popuptype("system");
                p.cal_sys.set_dateformat("yyyy.MM.dd");
                p.cal_sys.set_editformat("yyyy.MM.dd");
                p.cal_sys.move("320","552","140","50",null,null);

                p.st_title01.set_taborder("8");
                p.st_title01.set_text("Slidebar(Div - Linked form)");
                p.st_title01.getSetter("leftbase").set("");
                p.st_title01.getSetter("topbase").set("");
                p.st_title01.getSetter("bottombase").set("");
                p.st_title01.getSetter("rightbase").set("");
                p.st_title01.getSetter("widthbase").set("");
                p.st_title01.getSetter("heightbase").set("");
                p.st_title01.set_cssclass("sta_MBF_subtitle");
                p.st_title01.move("10","135","400","40",null,null);

                p.Static06.set_taborder("9");
                p.Static06.set_text("Toggle Switch(Checkbox)");
                p.Static06.set_cssclass("sta_MBF_subtitle");
                p.Static06.move("10","10","400","40",null,null);

                p.st_title02.set_taborder("10");
                p.st_title02.set_text("popuptype (property)");
                p.st_title02.getSetter("leftbase").set("");
                p.st_title02.getSetter("topbase").set("");
                p.st_title02.getSetter("bottombase").set("");
                p.st_title02.getSetter("rightbase").set("");
                p.st_title02.getSetter("widthbase").set("");
                p.st_title02.getSetter("heightbase").set("");
                p.st_title02.set_cssclass("sta_MBF_subtitle");
                p.st_title02.move("10","337","400","40",null,null);
            	}
            );
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("default0","screen_phone",480,728,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cal_sys","value","ds_emp","HIRE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cal_basic","value","ds_emp","HIRE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cal_test","value","ds_emp","HIRE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","EduBasic::Mobile/Mobile_Sub_Slide.xfdl");
        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div_slide.addEventHandler("ondragmove",this.div_slide_ondragmove,this);
            this.chk_toggle.addEventHandler("onchanged",this.CheckBox00_onchanged,this);
            this.chk_toggle.addEventHandler("onclick",this.CheckBox00_onclick,this);
            this.ds_emp.addEventHandler("cancolumnchange",this.ds_emp_cancolumnchange,this);
            this.ds_emp.addEventHandler("onrowsetchanged",this.ds_emp_onrowsetchanged,this);
            this.ds_emp.addEventHandler("onrowposchanged",this.ds_emp_onrowposchanged,this);
        };
        this.loadIncludeScript("Mobile_Component.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
