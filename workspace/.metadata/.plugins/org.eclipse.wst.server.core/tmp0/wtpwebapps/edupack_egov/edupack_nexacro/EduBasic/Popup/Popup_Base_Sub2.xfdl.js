(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Popup_Sub2");
            this.set_titletext("팝업창(투명)");
            this.set_background("transparent");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new ImageViewer("ImageViewer00","0","0","600","320",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_image("url(\'imagerc::NEXACRO.png\')");
            obj.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Static("st_close","530","10","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Close");
            obj.set_font("20px/normal \"Malgun Gothic\"");
            obj.set_color("#f4f4f4");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",600,400,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Popup_Base_Sub2.xfdl", function() {
        this.st_close_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.st_close.addEventHandler("onclick",this.st_close_onclick,this);
        };
        this.loadIncludeScript("Popup_Base_Sub2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
