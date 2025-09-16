(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("seller_logoutPopup");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta00","75","69","251","23",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("스마트스토어로 이동합니다");
            obj.set_font("20px Verdana");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","0","153","200",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("이동하기");
            obj.set_borderRadius("0px");
            obj.set_font("15px Verdana");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00","200","153","200",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("판매자센터로 돌아가기");
            obj.set_borderRadius("0px");
            obj.set_font("15px verdana");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",400,200,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("seller_logoutPopup.xfdl", function() {
        this.objApp = nexacro.getApplication()

        this.btn00_onclick = function(obj,e)
        {
        // 		alert(this.objApp.av_TopFrame.form.name);
        // 	this.objApp.av_TopFrame.form.Div01.set_visible(false);
        // 	this.objApp.av_TopFrame.form.Div01_00.set_visible(true);
        //
        	//k.form.btn02.set_visible(false);
        	//this.parent.parent.parent.UserFrame.set_formurl("form::Form_shopMain.xfdl")
        	this.parent.parent.parent.set_separatesize("150,*,0");
        	this.parent.parent.parent.TopMainFrame.set_formurl("form::Form_Top.xfdl");


        	this.close();
        };

        this.btn00_00_onclick = function(obj,e)
        {
        	this.close();
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.sta00.addEventHandler("onclick",this.sta00_onclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn00_00.addEventHandler("onclick",this.btn00_00_onclick,this);
        };
        this.loadIncludeScript("seller_logoutPopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
