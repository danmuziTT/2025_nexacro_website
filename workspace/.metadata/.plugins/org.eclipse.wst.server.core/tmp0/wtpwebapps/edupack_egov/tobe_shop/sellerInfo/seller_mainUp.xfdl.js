(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("seller_mainUp");
            this.set_titletext("판매자센터 상단 네비게이터");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,150);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00","0",null,null,"70","0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_TF_button");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","0","0","24.61%","70",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("btn00");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta00","41.56%","0","215","80",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("url(\'imagerc::tobe_sellerCenter.png\') no-repeat center center /contain");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,150,this,function(p){});
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
            this.sta00.addEventHandler("onclick",this.sta00_onclick,this);
        };
        this.loadIncludeScript("seller_mainUp.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
