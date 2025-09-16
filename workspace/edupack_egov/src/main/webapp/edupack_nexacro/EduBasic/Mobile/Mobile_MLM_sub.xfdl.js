(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Mobile_MLM_sub");
            this.set_titletext("MLM Div sub 화면");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,696);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static02","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_MLM_body");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","30","125","420","338",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_MLM_image");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","0",null,"120","90",null,"25",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Community");
            obj.set_cssclass("btn_MLM_bottomcomm,btn_MLM_cmunity");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","119",null,"123","90",null,"25",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Product Inquiry");
            obj.set_cssclass("btn_MLM_bottomcomm,btn_MLM_inquiry");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","241",null,"120","90",null,"25",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Support");
            obj.set_cssclass("btn_MLM_bottomcomm,btn_MLM_support");
            this.addChild(obj.name, obj);

            obj = new Button("Button05","360",null,"120","90",null,"25",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Product Guide");
            obj.set_cssclass("btn_MLM_bottomcomm,btn_MLM_guide");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","screen_phone",480,696,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("MLM Div sub 화면");

                p.Static02.set_taborder("0");
                p.Static02.set_cssclass("sta_MLM_body");
                p.Static02.move("0","0",null,null,"0","0");

                p.Static03.set_taborder("5");
                p.Static03.set_cssclass("sta_MLM_image");
                p.Static03.move("30","125","420","338",null,null);

                p.Button02.set_taborder("1");
                p.Button02.set_text("Community");
                p.Button02.set_cssclass("btn_MLM_bottomcomm,btn_MLM_cmunity");
                p.Button02.move("0",null,"120","90",null,"25");

                p.Button03.set_taborder("2");
                p.Button03.set_text("Product Inquiry");
                p.Button03.set_cssclass("btn_MLM_bottomcomm,btn_MLM_inquiry");
                p.Button03.move("119",null,"123","90",null,"25");

                p.Button04.set_taborder("3");
                p.Button04.set_text("Support");
                p.Button04.set_cssclass("btn_MLM_bottomcomm,btn_MLM_support");
                p.Button04.move("241",null,"120","90",null,"25");

                p.Button05.set_taborder("4");
                p.Button05.set_text("Product Guide");
                p.Button05.set_cssclass("btn_MLM_bottomcomm,btn_MLM_guide");
                p.Button05.move("360",null,"120","90",null,"25");
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","screen_phone",696,400,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static03.set_text("");
                p.Static03.move("0","30","100%","338",null,null);

                p.Button02.move("20","91","120","70",null,null);

                p.Button03.move("20","232","123","70",null,null);

                p.Button04.move(null,"91","120","70","0",null);

                p.Button05.move(null,"232","120","70","0",null);
            	}
            );
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
            this.Button05.addEventHandler("onclick",this.Button05_onclick,this);
        };
        this.loadIncludeScript("Mobile_MLM_sub.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
