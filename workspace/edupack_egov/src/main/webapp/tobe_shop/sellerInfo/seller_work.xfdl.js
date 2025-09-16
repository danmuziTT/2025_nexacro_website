(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("seller_work");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta_Title","10","11","253","19",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Static00");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","0","50",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_work
            obj = new Layout("default","",0,0,this.div_work.form,function(p){});
            this.div_work.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1000,700,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("seller_work.xfdl", function() {

        this.fv_menuId = "";


        this.Form_Work_onload = function(obj,e)
        {
        	var objCF = this.getOwnerFrame();

        	this.fv_menuId = objCF.param.MENU_ID;
        	var sMenuName = objCF.param.MENU_NAME;
        	var sFormUrl = objCF.param.FORM_URL;

        	this.sta_Title.set_text(sMenuName);
        	this.div_work.set_url(sFormUrl);

        	var nRow = nexacro.getApplication().gdsSellerMenu.findRow("MENU_ID", this.fv_menuId);

        };

        this.Form_Work_onactivate = function(obj,e)
        {
           var sId = this.getOwnerFrame().name; //MENU_ID 잘 잡아줌
        	nexacro.getApplication().av_frameMdi.form.fnTabFocus(sId);//에러 1

           };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Work_onload,this);
            this.addEventHandler("onactivate",this.Form_Work_onactivate,this);
        };
        this.loadIncludeScript("seller_work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
