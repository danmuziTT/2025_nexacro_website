(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CompCom_Event");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_emp", this);
            obj.set_keystring("");
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"POS_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/><Column id=\"MEMO\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"FULL_NAME\">Olivia</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20101003</Col><Col id=\"SALARY\">83000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">ivory</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"EMPL_ID\">AA001</Col></Row><Row><Col id=\"FULL_NAME\">John</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20051011</Col><Col id=\"SALARY\">76000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">greenyellow</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">AA002</Col></Row><Row><Col id=\"FULL_NAME\">Dillon</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20150401</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">lightpink</Col><Col id=\"DEPT_CD\">03</Col><Col id=\"EMPL_ID\">AA003</Col></Row><Row><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20070206</Col><Col id=\"SALARY\">95000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">aliceblue</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">BB001</Col></Row><Row><Col id=\"FULL_NAME\">Maia</Col><Col id=\"POS_CD\">01</Col><Col id=\"HIRE_DATE\">20090512</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">ivory</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"EMPL_ID\">BB002</Col></Row><Row><Col id=\"FULL_NAME\">Adam</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20010109</Col><Col id=\"SALARY\">88000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">greenyellow</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"EMPL_ID\">CC001</Col></Row><Row><Col id=\"FULL_NAME\">Ray</Col><Col id=\"POS_CD\">01</Col><Col id=\"HIRE_DATE\">20160202</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">lightpink</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">CC002</Col></Row><Row><Col id=\"FULL_NAME\">Cameron</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20010303</Col><Col id=\"SALARY\">86000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">aliceblue</Col><Col id=\"DEPT_CD\">03</Col><Col id=\"EMPL_ID\">CC003</Col></Row><Row><Col id=\"FULL_NAME\">Tyler</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20060907</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">lightgray</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"EMPL_ID\">DD001</Col></Row><Row><Col id=\"FULL_NAME\">David</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20010408</Col><Col id=\"SALARY\">45000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">ivory</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"EMPL_ID\">DD002</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CD\">01</Col><Col id=\"DEPT_NAME\">Accounting Team</Col></Row><Row><Col id=\"DEPT_CD\">02</Col><Col id=\"DEPT_NAME\">HR Team</Col></Row><Row><Col id=\"DEPT_CD\">03</Col><Col id=\"DEPT_NAME\">Sales Team</Col></Row><Row><Col id=\"DEPT_CD\">04</Col><Col id=\"DEPT_NAME\">Design Team</Col></Row><Row><Col id=\"DEPT_CD\">05</Col><Col id=\"DEPT_NAME\">Education Team</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","10","288","510","212",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_emp");
            obj.set_enable("true");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"FULL_NAME\"/><Cell col=\"1\" text=\"DEPT_CD\"/><Cell col=\"2\" text=\"HIRE_DATE\"/><Cell col=\"3\" text=\"MARRIED\"/></Band><Band id=\"body\"><Cell text=\"bind:FULL_NAME\" edittype=\"text\"/><Cell col=\"1\" text=\"bind:DEPT_CD\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CD\" combodatacol=\"DEPT_NAME\"/><Cell col=\"2\" text=\"bind:HIRE_DATE\" displaytype=\"date\" edittype=\"date\"/><Cell col=\"3\" text=\"bind:MARRIED\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","10","40","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text(" Components");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","20","73","140","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Edit");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","20","106","140","28",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Combo");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","20","139","140","28",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Calendar");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_event","164","139","166","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_locale("");
            obj.set_value("20210901");
            obj.set_hotkey("");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_log","540","65",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_positionstep("0");
            obj.set_value("event log");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_event","164","106","166","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cmb_event_innerdataset = new nexacro.NormalDataset("cmb_event_innerdataset", obj);
            cmb_event_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">SU</Col><Col id=\"datacolumn\">Sunday</Col></Row><Row><Col id=\"codecolumn\">MO</Col><Col id=\"datacolumn\">Monday</Col></Row><Row><Col id=\"codecolumn\">TU</Col><Col id=\"datacolumn\">Tuesday</Col></Row><Row><Col id=\"codecolumn\">WE</Col><Col id=\"datacolumn\">Wednesday</Col></Row><Row><Col id=\"codecolumn\">TH</Col><Col id=\"datacolumn\">Thursday</Col></Row><Row><Col id=\"codecolumn\">FR</Col><Col id=\"datacolumn\">Friday</Col></Row><Row><Col id=\"codecolumn\">SA</Col><Col id=\"datacolumn\">Saturday</Col></Row></Rows>");
            obj.set_innerdataset(cmb_event_innerdataset);
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_rtn","128","172","132","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            var rdo_rtn_innerdataset = new nexacro.NormalDataset("rdo_rtn_innerdataset", obj);
            rdo_rtn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">true</Col><Col id=\"datacolumn\">true</Col></Row><Row><Col id=\"codecolumn\">false</Col><Col id=\"datacolumn\">false</Col></Row></Rows>");
            obj.set_innerdataset(rdo_rtn_innerdataset);
            obj.set_value("true");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","23","172","136","28",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("return value");
            obj.set_cssclass("sta_WF_LabelTxt12");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_event","164","73","166","28",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("event log");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear","txt_log:-63","65","63","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Clear");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","258","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text(" Dataset");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","22","205","146","28",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Event enable");
            obj.set_cssclass("sta_WF_LabelTxt12");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_enable","128","205","132","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            var rdo_enable_innerdataset = new nexacro.NormalDataset("rdo_enable_innerdataset", obj);
            rdo_enable_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">true</Col><Col id=\"datacolumn\">true</Col></Row><Row><Col id=\"codecolumn\">false</Col><Col id=\"datacolumn\">false</Col></Row></Rows>");
            obj.set_innerdataset(rdo_enable_innerdataset);
            obj.set_value("true");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","10","544","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text(" Event Handler");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_click","16","574","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Click Event");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addEvent","141","574","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Add Event");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","10","0","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("Event");
            obj.set_cssclass("sta_WF_TitleMain");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1038,650,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_event","value","ds_emp","FULL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cmb_event","value","ds_emp","DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cal_event","value","ds_emp","HIRE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CompCom_Event.xfdl", function() {

        this.sLog = this.txt_log.value + "\n";

        this.edt_event_oninput = function(obj,e)
        {
        	this.sLog += "Edit :: oninput \n";
        	this.txt_log.set_value(this.sLog);
        };

        this.edt_event_canchange = function(obj,e)
        {
        	this.sLog += "Edit :: canchange \n";
        	this.txt_log.set_value(this.sLog);

        	return this.rdo_rtn.value;
        };

        this.edt_event_onchanged = function(obj,e)
        {
        	this.sLog += "Edit :: onchanged \n";
        	this.txt_log.set_value(this.sLog);
        };

        this.cmb_event_ondropdown = function(obj,e)
        {
        	this.sLog += "Combo :: ondropdown \n";
        	this.txt_log.set_value(this.sLog);
        };

        this.cmb_event_onitemclick = function(obj,e)
        {
        	this.sLog += "Combo :: onitemclick \n";
        	this.txt_log.set_value(this.sLog);
        };

        this.cmb_event_canitemchange = function(obj,e)
        {
        	this.sLog += "Combo :: canitemchange \n";
        	this.txt_log.set_value(this.sLog);

        	return this.rdo_rtn.value;
        };

        this.cmb_event_onitemchanged = function(obj,e)
        {
        	this.sLog += "Combo :: onitemchanged : " + e.pretext + " >> " + e.posttext + " \n";
        	this.txt_log.set_value(this.sLog);
        };

        this.cmb_event_oncloseup = function(obj,e)
        {
        	this.sLog += "Combo :: oncloseup \n";
        	this.txt_log.set_value(this.sLog);
        };

        this.cal_event_oncloseup = function(obj,e)
        {
        	this.sLog += "Calendar :: oncloseup \n";
        	this.txt_log.set_value(this.sLog);
        };

        this.cal_event_ondayclick = function(obj,e)
        {
        	this.sLog += "Calendar :: ondayclick e.date : " + e.date + "\n";
        	this.txt_log.set_value(this.sLog);
        };

        this.cal_event_oneditclick = function(obj,e)
        {
        	this.sLog += "Calendar :: oneditclick \n";
        	this.txt_log.set_value(this.sLog);
        };



        this.btn_clear_onclick = function(obj,e)
        {
        	this.sLog = "event log \n";
        	this.txt_log.set_value(this.sLog);
        };

        this.ds_emp_cancolumnchange = function(obj,e)
        {
        	this.sLog += "Dataset :: cancolumnchange \n";
        	this.txt_log.set_value(this.sLog);

        	return this.rdo_rtn.value;
        };

        this.ds_emp_oncolumnchanged = function(obj,e)
        {
        	this.sLog += "Dataset :: oncolumnchanged " + e.oldvalue + " >> " + e.newvalue + "\n";
        	this.txt_log.set_value(this.sLog);
        };

        this.ds_emp_canrowposchange = function(obj,e)
        {
        	this.sLog += "Dataset :: canrowposchange \n";
        	this.txt_log.set_value(this.sLog);

        	return this.rdo_rtn.value;
        };

        this.ds_emp_onrowposchanged = function(obj,e)
        {
        	this.sLog += "Dataset :: onrowposchanged " + e.oldrow + " >> " + e.newrow + "\n";
        	this.txt_log.set_value(this.sLog);

        };


        this.rdo_enable_onitemchanged = function(obj,e)
        {
        	this.ds_emp.set_enableevent(obj.value);
        };

        this.btn_click_onclick = function(obj,e)
        {
        	this.alert("Hello nexacro");
        };

        this.btn_addEvent_onclick = function(obj,e)
        {
        	this.btn_click.addEventHandler("onclick", this.fn_addEvent, this);
        };

        this.fn_addEvent = function()
        {
        	this.alert("Add Event - Hello World");
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.cal_event.addEventHandler("oncloseup",this.cal_event_oncloseup,this);
            this.cal_event.addEventHandler("ondayclick",this.cal_event_ondayclick,this);
            this.cal_event.addEventHandler("oneditclick",this.cal_event_oneditclick,this);
            this.cmb_event.addEventHandler("canitemchange",this.cmb_event_canitemchange,this);
            this.cmb_event.addEventHandler("oncloseup",this.cmb_event_oncloseup,this);
            this.cmb_event.addEventHandler("onitemchanged",this.cmb_event_onitemchanged,this);
            this.cmb_event.addEventHandler("onitemclick",this.cmb_event_onitemclick,this);
            this.cmb_event.addEventHandler("ondropdown",this.cmb_event_ondropdown,this);
            this.edt_event.addEventHandler("canchange",this.edt_event_canchange,this);
            this.edt_event.addEventHandler("onchanged",this.edt_event_onchanged,this);
            this.edt_event.addEventHandler("oninput",this.edt_event_oninput,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.rdo_enable.addEventHandler("onitemchanged",this.rdo_enable_onitemchanged,this);
            this.btn_click.addEventHandler("onclick",this.btn_click_onclick,this);
            this.btn_addEvent.addEventHandler("onclick",this.btn_addEvent_onclick,this);
            this.ds_emp.addEventHandler("cancolumnchange",this.ds_emp_cancolumnchange,this);
            this.ds_emp.addEventHandler("canrowposchange",this.ds_emp_canrowposchange,this);
            this.ds_emp.addEventHandler("oncolumnchanged",this.ds_emp_oncolumnchanged,this);
            this.ds_emp.addEventHandler("onrowposchanged",this.ds_emp_onrowposchanged,this);
        };
        this.loadIncludeScript("CompCom_Event.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
