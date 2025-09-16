(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_imgScroll");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,140);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta00","0","0",null,"140","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("url(\'imagerc::1.png\') no-repeat center center");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00","0","0",null,"140","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_positionstep("1");
            obj.set_background("url(\'imagerc::2.png\') no-repeat center center");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","0","0",null,"140","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_positionstep("4");
            obj.set_background("url(\'imagerc::3.png\') no-repeat center center");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00","0","0",null,"140","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_positionstep("2");
            obj.set_background("url(\'imagerc::40.png\') no-repeat center center");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_01","0","0",null,"140","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_positionstep("3");
            obj.set_background("url(\'imagerc::5.png\') no-repeat center center");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,140,this,function(p){});
            obj.set_stepcount("5");
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
        this.loadIncludeScript("Form_imgScroll.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
