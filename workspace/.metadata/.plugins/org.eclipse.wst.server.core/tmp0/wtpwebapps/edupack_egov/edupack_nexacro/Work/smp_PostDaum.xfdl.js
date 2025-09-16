(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("smp_PostDaum");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Edit("edtPost","20","29","160","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAddr","240","29","340","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","190","29","38","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("web00","83","90","328","180",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("smp_PostDaum.xfdl", function() {

        this.smp_PostDaum_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);
        };


        this.btn00_onclick = function(obj,e)
        {
        	this.gfnPostSearchDaum(this.web00);
        };

        //웹에 넥사크로로 값을 전달하는 이벤트
        this.web00_onusernotify = function(obj,e)
        {
        		trace(e.userdata);
        	var sPost = e.userdata;

        	if(sPost.indexOf("OK!!!::") == 0){ //like
        		var arrAdd = sPost.split(":::");
        		for(var i = 0; i < arrAdd.length; i++){
        			trace(i + "-->" + arrAdd[i]);
        		}
        	this.edtPost.set_value(arrAdd[3]);
        	this.edtAddr.set_value(arrAdd[6]);
        	}

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.smp_PostDaum_onload,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.web00.addEventHandler("onusernotify",this.web00_onusernotify,this);
        };
        this.loadIncludeScript("smp_PostDaum.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
