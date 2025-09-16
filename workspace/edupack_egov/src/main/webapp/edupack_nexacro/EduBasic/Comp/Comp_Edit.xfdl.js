(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_Edit");
            this.set_titletext("Component-Edit");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static01","10","212","665","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text(" Max Length / Auto Skip / Auto Select (Prop. maxlength, autoskip, autoselect)");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","10","419","355","28",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text(" Input Filter (Prop. inputfilter - digit)");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","10","331","495","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text(" Input Type (Prop. inputtype - english & digit / number)");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02","20","245","170","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_value("ABCD");
            obj.set_maxlength("4");
            obj.set_autoskip("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_auto","Edit02:5","245","170","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_value("Auto Select");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit05","20","452","166","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_value("Nexacro");
            obj.set_inputfilter("digit");
            obj.set_text("Nexacro");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03","20","366","170","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_value("Nexacro");
            obj.set_inputtype("english,digit");
            obj.set_text("Nexacro");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit04","Edit03:5","366","170","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_value("-1,234.55");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","20","73","170","28",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_value("nexacro platform");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_pass","20","278","271","28",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Password Type (Prop. password)");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","10","40","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text(" Basic Usage");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit06","20","538","166","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_inputmode("upper");
            obj.set_inputtype("english");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","505","395","28",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text(" Input Mode (Prop. inputmode - Upper Only)");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","10","126","272","28",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text(" Read Only (Prop. readonly)");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit07","20","159","170","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_value("nexacro platform");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static99","10","0","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Edit");
            obj.set_cssclass("sta_WF_TitleMain");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1038,650,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Button01","text","gds_dept","DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Comp_Edit.xfdl", function() {

        this.chk_pass_onclick = function(obj,e)
        {
        	this.edt_auto.set_password(obj.value);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.chk_pass.addEventHandler("onclick",this.chk_pass_onclick,this);
            this.chk_pass.addEventHandler("onchanged",this.chk_pass_onchanged,this);
        };
        this.loadIncludeScript("Comp_Edit.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
