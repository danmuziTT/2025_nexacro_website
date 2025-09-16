(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Mobile_Camera");
            this.set_titletext("DeviceAPI 카메라");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,640);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Camera("objCamera", this);
            obj.set_imageheight("600");
            obj.set_imagewidth("460");
            obj.set_gettype("imagedata");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_camera",null,"10","200","40","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Take a Picture");
            obj.set_cssclass("btn_WF_camera");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_picture","10","50",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","screen_phone",480,640,this,function(p){});
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Mobile_Camera.xfdl", function() {
        //카메라 버튼 선택
        this.btn_camera_onclick = function(obj,e)
        {
        	this.objCamera.takePicture();
        };

        //성공
        this.objCamera_oncapture = function(obj,e)
        {
        	this.img_picture.set_image(e.imagedata);
        };

        //실패
        this.objCamera_onerror = function(obj,e)
        {
        	alert(e.errormsg);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_camera.addEventHandler("onclick",this.btn_camera_onclick,this);
            this.objCamera.addEventHandler("oncapture",this.objCamera_oncapture,this);
            this.objCamera.addEventHandler("onerror",this.objCamera_onerror,this);
        };
        this.loadIncludeScript("Mobile_Camera.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
