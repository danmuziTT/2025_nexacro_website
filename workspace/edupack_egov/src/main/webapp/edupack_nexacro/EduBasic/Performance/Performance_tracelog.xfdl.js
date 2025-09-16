(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Performance_tracelog");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("trace","10","60","155","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("tralog 기록");
            this.addChild(obj.name, obj);

            obj = new Static("st_title","10","0","193","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("tracelog");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1038,650,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Performance_tracelog.xfdl", function() {

        this.tracelog_onclick = function(obj,e)
        {
        	nexacro.getApplication().trace("trace log1");
        	trace("trace log2");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.trace.addEventHandler("onclick",this.tracelog_onclick,this);
        };
        this.loadIncludeScript("Performance_tracelog.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
