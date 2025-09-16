(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_CheckBox");
            this.set_titletext("Component-Checkbox");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_data", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col></Row><Row><Col id=\"Column0\">0</Col></Row><Row><Col id=\"Column0\">true</Col></Row><Row><Col id=\"Column0\">false</Col></Row><Row><Col id=\"Column0\">Y</Col></Row><Row><Col id=\"Column0\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static07","10","40","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Basic Usage");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","20","73","160","28",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Marital Status");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox03","172","579","152","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Position-Right  ");
            obj.set_iconPosition("right");
            obj.set_textAlign("");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox04","324","579","152","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Position-Top");
            obj.set_iconPosition("top");
            obj.set_textAlign("center");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox05","476","579","152","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Position-Bottom");
            obj.set_iconPosition("bottom");
            obj.set_textAlign("center");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox02","20","579","152","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Position-Left");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","20","179","158","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("true \'Y\' / false \'N\'");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_value("Y");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","10","146","436","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("True/False Value (Prop. truevalue / falsevalue)");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","10","546","380","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Icon Position (Prop. iconPosition)");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","20","285","300","212",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("ds_data");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"data\"/><Cell col=\"1\" text=\"default\"/><Cell col=\"2\" text=\"true Y / false N\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:Column0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:Column0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxtruevalue=\"Y\" checkboxfalsevalue=\"N\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox06","335","280","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Default");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox06_00","335","313","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("true Y / false N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.addChild(obj.name, obj);

            obj = new Static("sta_default","184","70","206","28",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("※ default value: true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_value","364","146","206","28",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("※ value: Y");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00","10","252","326","28",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Default vs TrueValue / FalseValue");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","0","250","35",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("CheckBox");
            obj.set_cssclass("sta_WF_TitleMain");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1038,650,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","CheckBox06","value","ds_data","Column0");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","CheckBox06_00","value","ds_data","Column0");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Comp_CheckBox.xfdl", function() {

        this.CheckBox01_onchanged = function(obj,e)
        {
        	this.sta_value.set_text("※ value: " + obj.value);
        };

        this.CheckBox00_onchanged = function(obj,e)
        {
        	this.sta_default.set_text("※ default value: " + obj.value);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.CheckBox00.addEventHandler("onchanged",this.CheckBox00_onchanged,this);
            this.CheckBox01.addEventHandler("onchanged",this.CheckBox01_onchanged,this);
        };
        this.loadIncludeScript("Comp_CheckBox.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
