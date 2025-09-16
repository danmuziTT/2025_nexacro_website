(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("div");
            this.set_titletext("div_async");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("st_title","10","0","193","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","13","50","800",null,null,"10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_async("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","862","138","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("set_url 실행");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","860","72","124","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("async=true");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00","860","105","124","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("async=false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

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
        this.registerScript("Performance_div_async.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.Div00.set_url("EduBasic::Performance/Performance_div_async_sub.xfdl");
            trace("main");

        };

        this.Button01_onclick = function(obj,e)
        {
        	this.Div00.set_text("aync=true");
        	this.Div00.set_async(true);
        	this.Div00.set_url("");
        };

        this.Button01_00_onclick = function(obj,e)
        {
        	this.Div00.set_text("aync=false");
        	this.Div00.set_async(false);
        	this.Div00.set_url("");
        };


        this.Form_Emp_onload = function(obj,e)
        {
        //	trace("main load");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ontimer",this.Form_Emp_ontimer,this);
            this.addEventHandler("onload",this.Form_Emp_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button01_00.addEventHandler("onclick",this.Button01_00_onclick,this);
        };
        this.loadIncludeScript("Performance_div_async.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
