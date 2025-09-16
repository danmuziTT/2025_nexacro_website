(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("smp_stamp1");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div00","70","20","600","400",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_url("Work::smp_stamp.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","757","44","142","33",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00","768","137","142","33",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_01","740","247","142","33",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Work::smp_stamp.xfdl");
        };
        
        // User Script
        this.registerScript("smp_stamp1.xfdl", function() {

        this.btn00_onclick = function(obj,e)
        {
        	this.div00.form.stepselector.set_stepindex(0);
        };

        this.btn00_00_onclick = function(obj,e)
        {
        	this.div00.form.stepselector.set_stepindex(1);
        };

        this.btn00_01_onclick = function(obj,e)
        {
        	this.div00.form.stepselector.set_stepindex(2);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn00_00.addEventHandler("onclick",this.btn00_00_onclick,this);
            this.btn00_01.addEventHandler("onclick",this.btn00_01_onclick,this);
        };
        this.loadIncludeScript("smp_stamp1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
