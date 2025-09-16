(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Mobile_Barcode");
            this.set_titletext("Barcode");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta11","5","5",null,"60","5",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_box01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt00","5","79",null,"140","5",null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtOutput","5","249","470","122",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_camera",null,"10","200","40","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("QR / Barcode");
            obj.set_cssclass("btn_WF_camera");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","screen_phone",480,768,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("Barcode");

                p.sta11.set_taborder("0");
                p.sta11.set_cssclass("sta_WF_box01");
                p.sta11.set_text("");
                p.sta11.move("5","5",null,"60","5",null);

                p.txt00.set_taborder("1");
                p.txt00.move("5","79",null,"140","5",null);

                p.txtOutput.set_taborder("2");
                p.txtOutput.set_visible("false");
                p.txtOutput.move("5","249","470","122",null,null);

                p.btn_camera.set_taborder("3");
                p.btn_camera.set_text("QR / Barcode");
                p.btn_camera.set_cssclass("btn_WF_camera");
                p.btn_camera.move(null,"10","200","40","10",null);
            	}
            );
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout1","screen_phone",768,480,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_mobileorientation("landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Mobile_Barcode.xfdl", function() {
        this.extComPlugin = null;

        this.frmBarcode_onload = function(obj,e)
        {
        	this.extComPlugin = new nexacro.ExtComPlugin();
        	this.extComPlugin.addEventHandler("on_callback", this.on_extcomplugin_callback, this);
        };

        this.btn_camera_onclick = function(obj,e)
        {
        	var param = {
        					pkgName  : "test",
        					values   : "test",
        					open	 : "Y"
        				};

        	this.extComPlugin.callMethod("barcode", param);
        };


        this.on_extcomplugin_callback = function(obj, e)
        {
        	this.txtOutput.set_value("");
        	this.txtOutput.insertText("\n" + "this.on_callback ::: "+e.svcid);
        	this.txtOutput.insertText("\n" + "this.on_callback ::: "+e.reason);
        	this.txtOutput.insertText("\n" + "this.on_callback ::: "+e.returnvalue);
        	this.txtOutput.insertText("\n" + "this.on_callback ::: "+e.returnvalue.RESULT1);

        	if(e.reason < 0)
        	{
        		return;
        	}

        	var app = nexacro.getApplication();
        	var ret = e.returnvalue;

        	if(e.svcid == "barcode")
        	{
        		this.txt00.set_value(ret);

        		if (ret.indexOf("http") >= 0) {
        			// 안드로이드 런타임일때만 실행가능
        			if (system.osversion.toUpperCase().substr(0,7) == "ANDROID" && system.navigatorname == "nexacro") {
        				system.execBrowser(ret);
        			}
        		}
        	}

        }






        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frmBarcode_onload,this);
            this.btn_camera.addEventHandler("onclick",this.btn_camera_onclick,this);
        };
        this.loadIncludeScript("Mobile_Barcode.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
