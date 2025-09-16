(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Popup_Sub");
            this.set_titletext("팝업창");
            if (Form == this.constructor)
            {
                this._setFormPosition(500,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_child", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","150","152","340","122",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","150","86","166","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","150","119","166","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","20","53","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Parameter");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_rtn_string","20","327","104","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("String");
            this.addChild(obj.name, obj);

            obj = new Button("btn_rtn_obj","129","327","104","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Dataset");
            this.addChild(obj.name, obj);

            obj = new Button("btn_rtn_obj2","238","327","104","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Dataset 2");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","20","294","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Return");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","20","10","196","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Popup");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","86","113","28",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Param1 - String");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","119","123","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Param2 - Number");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20","152","123","28",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Param3 - Object");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",500,400,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Popup_Base_Sub.xfdl", function() {
        this.form_onload = function(obj,e)
        {
        	var strParam1 = this.parent.param1;
        	var strParam2 = this.parent.param2;
        	var objParam  = this.parent.param3;

        	this.Edit00.set_value(strParam1);
        	this.Edit01.set_value(strParam2);

        	this.ds_child.copyData(objParam);
        	this.Grid00.set_binddataset("ds_child");
        	this.Grid00.createFormat();

        	this.Grid00.setCellProperty("body", 0, "edittype", "normal");
        	this.Grid00.setCellProperty("body", 1, "edittype", "normal");
        	this.Grid00.setCellProperty("body", 2, "edittype", "normal");
        	this.Grid00.setCellProperty("body", 3, "edittype", "normal");

        };

        this.btn_rtn_string_onclick = function(obj,e)
        {
        	var strReturn = this.Edit00.value;
        	this.close(strReturn);
        };

        this.btn_rtn_obj_onclick = function(obj,e)
        {
        	this.opener.fn_parent(this.ds_child);
        	this.close();
        };

        this.btn_rtn_obj2_onclick = function(obj,e)
        {
        	this.opener.ds_parent.clearData();
        	var nRow = this.opener.ds_parent.addRow();
        	this.opener.ds_parent.copyRow(nRow, this.ds_child, this.ds_child.rowposition);
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_rtn_string.addEventHandler("onclick",this.btn_rtn_string_onclick,this);
            this.btn_rtn_obj.addEventHandler("onclick",this.btn_rtn_obj_onclick,this);
            this.btn_rtn_obj2.addEventHandler("onclick",this.btn_rtn_obj2_onclick,this);
        };
        this.loadIncludeScript("Popup_Base_Sub.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
