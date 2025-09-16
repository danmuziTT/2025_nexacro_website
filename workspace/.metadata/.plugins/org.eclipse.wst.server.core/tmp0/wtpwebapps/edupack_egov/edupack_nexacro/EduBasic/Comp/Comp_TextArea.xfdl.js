(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_TextArea");
            this.set_titletext("Component-TextArea");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static04","10","40","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text(" Basic Usage");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea05","20","365","216","78",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_value("Nexacro \ntobesoft");
            obj.set_inputfilter("digit");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea02","241","503","216","78",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_value("auto select");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","20","503","216","78",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_value("ABCD");
            obj.set_autoskip("true");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","20","73","216","88",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_value("TextArea Component\nNexacro\nHello World");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea03","20","219","216","78",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_value("Nexacro\nTextArea \n123 890");
            obj.set_inputtype("english,digit");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea04","246","219","216","78",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_value("12345\n1,200.34\n-1,200.34");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","468","680","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text(" Max Length / Auto Skip / Auto Select (Prop. maxlength, autoskip, autoselect)");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","186","490","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text(" Input Type - english & digit / number (Prop. inputtype)");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","10","332","348","28",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("  Input Filter - digit (Prop. inputfilter)");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Static("Static99","10","0","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("TextArea");
            obj.set_cssclass("sta_WF_TitleMain");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1038,650,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("Comp_TextArea.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
