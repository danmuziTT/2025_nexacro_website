(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Hello");
            this.set_titletext("New Form");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00","60","77","250","73",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Hello World");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","66","47","240","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Desktop Screen");
            obj.set_font("normal bold 14px \"Arial\"");
            obj.set_color("red");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1038,650,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("New Form");
                p.set_scrolltype("none");

                p.Button00.set_taborder("0");
                p.Button00.set_text("Hello World");
                p.Button00.move("60","77","250","73",null,null);

                p.Static00.set_taborder("1");
                p.Static00.set_text("Desktop Screen");
                p.Static00.set_font("normal bold 14px \"Arial\"");
                p.Static00.set_color("red");
                p.Static00.move("66","47","240","30",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","screen_phone",480,768,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_text("Phone Screen");
                p.Static00.move("176","77","120","30",null,null);

                p.Button00.move("170","107","160","93",null,null);
            	}
            );
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Hello.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.alert("Hello World");
        	trace("log Hello World");
        };

        this.fnClose = function()
        {

        	return false;

        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onbeforeclose",this.Hello_onbeforeclose,this);
            this.addEventHandler("onclose",this.Hello_onclose,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("Form_Hello.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
