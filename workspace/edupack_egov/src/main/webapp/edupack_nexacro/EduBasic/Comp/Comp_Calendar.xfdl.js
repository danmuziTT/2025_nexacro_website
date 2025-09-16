(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_Calendar");
            this.set_titletext("Component-Calendar");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_day", this);
            obj._setContents("<ColumnInfo><Column id=\"date\" type=\"STRING\" size=\"256\"/><Column id=\"text_color\" type=\"STRING\" size=\"256\"/><Column id=\"back_color\" type=\"STRING\" size=\"256\"/><Column id=\"border_color\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"date\">20221110</Col><Col id=\"text_color\">orange</Col><Col id=\"back_color\"/><Col id=\"border_color\">1px solid red</Col></Row><Row><Col id=\"date\">20221115</Col><Col id=\"text_color\">blue</Col><Col id=\"back_color\">yellow</Col><Col id=\"border_color\">1px solid red</Col></Row><Row><Col id=\"date\">20221120</Col><Col id=\"text_color\">yellow</Col><Col id=\"back_color\">olive</Col><Col id=\"border_color\">2px solid skyblue</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Calendar("Calendar00","10","73","180","28",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_locale("");
            obj.set_value("20170101");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_trailing","10","267","200","220",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_locale("");
            obj.set_value("20210901");
            obj.set_usetrailingday("true");
            obj.set_type("monthonly");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_today","116","73","180","28",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_locale("");
            obj.set_value("20210901");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_lastday","116","106","180","28",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_locale("");
            obj.set_value("20210901");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","223","144","216","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">normal</Col><Col id=\"datacolumn\">normal</Col></Row><Row><Col id=\"codecolumn\">spin</Col><Col id=\"datacolumn\">spin</Col></Row><Row><Col id=\"codecolumn\">monthonly</Col><Col id=\"datacolumn\">month</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_value("normal");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio01","520","73","408","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var Radio01_innerdataset = new nexacro.NormalDataset("Radio01_innerdataset", obj);
            Radio01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">normal</Col><Col id=\"datacolumn\">normal</Col></Row><Row><Col id=\"codecolumn\">center</Col><Col id=\"datacolumn\">center</Col></Row><Row><Col id=\"codecolumn\">none</Col><Col id=\"datacolumn\">none</Col></Row><Row><Col id=\"codecolumn\">system</Col><Col id=\"datacolumn\">system(Mobile)</Col></Row></Rows>");
            obj.set_innerdataset(Radio01_innerdataset);
            obj.set_value("normal");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_popup","520","106","180","28",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_locale("");
            obj.set_value("20210901");
            obj.set_type("normal");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar04","518","202","200","220",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_locale("");
            obj.set_value("20221101");
            obj.set_type("monthonly");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_innerdataset("ds_day");
            obj.set_backgroundcolumn("back_color");
            obj.set_bordercolumn("border_color");
            obj.set_datecolumn("date");
            obj.set_textcolorcolumn("text_color");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","518","427","472","138",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_binddataset("ds_day");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"일자\"/><Cell col=\"1\" colspan=\"3\" text=\"컬러\"/><Cell row=\"1\" col=\"1\" text=\"글자색\"/><Cell row=\"1\" col=\"2\" text=\"배경색\"/><Cell row=\"1\" col=\"3\" text=\"테두리\"/></Band><Band id=\"body\"><Cell text=\"bind:date\" displaytype=\"date\" textAlign=\"center\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"1\" text=\"bind:text_color\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:back_color\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:border_color\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","10","40","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("Basic Usage");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","234","260","28",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("Trailing Day (Prop. usetrailingday)");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","40","202","28",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("Date Calculation");
            obj.set_cssclass("sta_WF_TitleType1");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","10","136","206","30",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("Calendar Type (Prop. type)");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","510","40","384","28",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("Calendar PopupType (Prop. popuptype)");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","510","169","312","28",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text(" Anniversary (Prop. innerdataset)");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_tra","284","240","122","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("-1");
            obj.set_columncount("-1");
            var rdo_tra_innerdataset = new nexacro.NormalDataset("rdo_tra_innerdataset", obj);
            rdo_tra_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">true</Col><Col id=\"datacolumn\">true</Col></Row><Row><Col id=\"codecolumn\">false</Col><Col id=\"datacolumn\">false</Col></Row></Rows>");
            obj.set_innerdataset(rdo_tra_innerdataset);
            obj.set_value("true");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_longformat","122","578","254","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_value("20210901");
            obj.set_locale("ko_KR");
            obj.set_dateformat("LONGDATE");
            obj.set_editformat("SHORTDATE");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_local","20","545","403","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var rdo_local_innerdataset = new nexacro.NormalDataset("rdo_local_innerdataset", obj);
            rdo_local_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">ko_KR</Col><Col id=\"datacolumn\">Korean</Col></Row><Row><Col id=\"codecolumn\">ja_JP</Col><Col id=\"datacolumn\">Japanese</Col></Row><Row><Col id=\"codecolumn\">en_US</Col><Col id=\"datacolumn\">English </Col></Row><Row><Col id=\"datacolumn\">German </Col><Col id=\"codecolumn\">de_DE</Col></Row></Rows>");
            obj.set_innerdataset(rdo_local_innerdataset);
            obj.set_value("ko_KR");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","10","512","408","28",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("Localization (Prop. dateformat, editformat, local)");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","30","578","84","28",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("long date");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","30","614","84","28",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("short date");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_shortformat","122","614","254","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_value("20210901");
            obj.set_locale("ko_KR");
            obj.set_dateformat("SHORTDATE");
            obj.set_editformat("SHORTDATE");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","20","73","84","28",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("Today");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","20","106","84","28",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("Last day");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","10","179","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("Basic Method");
            obj.set_cssclass("sta_WF_TitleType1");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_date","20","212","180","28",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_locale("");
            obj.set_value("20210901");
            obj.set_hotkey("");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("st_year","150","245","170","28",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_year","20","245","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("getYear()");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_month","20","278","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("getMonth()");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_day","20","311","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("getDay()");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_select","150","344","170","28",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_locale("");
            obj.set_value("20210901");
            obj.set_hotkey("");
            obj.set_positionstep("1");
            obj.set_type("spin");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Button("btn_select","20","344","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("setCaretPos()");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("st_month","150","278","170","28",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("st_day","150","311","170","28",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_type","10","171","180","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_locale("");
            obj.set_value("20210901");
            obj.set_type("normal");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","10","0","260","35",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("Calendar");
            obj.set_cssclass("sta_WF_TitleMain");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1038,650,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("2");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Comp_Calendar.xfdl", function() {
        this.Form_onload = function(obj,e)
        {
        	var sToday = this.fn_Today();
        	var sLastDay = this.fn_LastDay(sToday);
        	this.cal_today.set_value(sToday);
        	this.cal_lastday.set_value(sLastDay);
        };

        this.fn_Today = function()
        {
        	var objDate = new Date();
        	var sToday  = objDate.getFullYear().toString();
        	    sToday += (objDate.getMonth()+1).toString().padLeft(2, "0")
        	    sToday += objDate.getDate().toString().padLeft(2, "0");
        	return sToday;
        }

        this.fn_LastDay = function(sDate)
        {
        	var dDate = new Date(parseInt(sDate.substr(0,4)), parseInt(sDate.substr(4,2)), "01");
        	dDate = dDate.addDate(-1);

        	var objDate  = new Date(dDate);
        	var sRtn = objDate.getFullYear()
                     + (objDate.getMonth()+1).toString().padLeft(2, "0")
                     +  objDate.getDate().toString().padLeft(2, "0");
        	return sRtn;
        }

        this.Radio00_onitemchanged = function(obj,e)
        {
        	this.cal_type.set_type(e.postvalue);
        	if(e.postvalue == "monthonly"){
        	}
        	else{
        		this.cal_type.set_width(160);
        		this.cal_type.set_height(25);
        	}

        };

        this.Radio01_onitemchanged = function(obj,e)
        {
        	this.cal_popup.set_popuptype(e.postvalue);
        };

        this.rdo_tra_onitemchanged = function(obj,e)
        {
        	this.cal_trailing.set_usetrailingday(this.rdo_tra.value);
        };

        this.rdo_local_onitemchanged = function(obj,e)
        {
        	this.cal_longformat.set_locale(this.rdo_local.value);
        	this.cal_shortformat.set_locale(this.rdo_local.value);
        };

        this.btn_year_onclick = function(obj,e)
        {
        	this.st_year.set_text(this.cal_date.getYear());
        };

        this.btn_month_onclick = function(obj,e)
        {
        	this.st_month.set_text(this.cal_date.getMonth());
        };

        this.btn_day_onclick = function(obj,e)
        {
        	this.st_day.set_text(this.cal_date.getDay());
        };

        this.btn_select_onclick = function(obj,e)
        {
        	this.cal_select.setFocus();
        	this.cal_select.setCaretPos(10);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.Radio00.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
            this.Radio01.addEventHandler("onitemchanged",this.Radio01_onitemchanged,this);
            this.rdo_tra.addEventHandler("onitemchanged",this.rdo_tra_onitemchanged,this);
            this.rdo_local.addEventHandler("onitemchanged",this.rdo_local_onitemchanged,this);
            this.btn_year.addEventHandler("onclick",this.btn_year_onclick,this);
            this.btn_month.addEventHandler("onclick",this.btn_month_onclick,this);
            this.btn_day.addEventHandler("onclick",this.btn_day_onclick,this);
            this.btn_select.addEventHandler("onclick",this.btn_select_onclick,this);
        };
        this.loadIncludeScript("Comp_Calendar.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
