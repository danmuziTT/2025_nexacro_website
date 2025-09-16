(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("smp_stamp");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta00","0","0","600","400",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("sta00");
            obj.set_background("yellow");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","50","25","500","350",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("sta01");
            obj.set_positionstep("1");
            obj.set_background("pink");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","50","0","500","400",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("sta02");
            obj.set_positionstep("2");
            obj.set_background("green");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",600,400,this,function(p){});
            obj.set_stepcount("3");
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
        this.loadIncludeScript("smp_stamp.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
