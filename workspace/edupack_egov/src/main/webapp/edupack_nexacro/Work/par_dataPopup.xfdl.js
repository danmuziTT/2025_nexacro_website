(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("par_dataPopup");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_child", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Edit("edt00","187","43","147","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_00","187","104","147","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","40","52","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("이름");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00","40","104","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("최애");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","24","154","352","366",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("Dataset1");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","100","534","200","36",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",400,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("par_dataPopup.xfdl", function() {
        this.Form_onload = function(obj,e)
        {
        	var sParam1 = this.parent.param1;
        	var sParam2 = this.parent.param2;
        	var objParam = this.parent.param3;

        	this.edt00.set_value(sParam1);
        	this.edt00_00.set_value(sParam2);

        	this.ds_child.copyData(objParam); //받은 데이터를 데이터셋에 카피함
        	this.grd00.set_binddataset("ds_child"); //카피안 데이터셋을 바인딩 할 것
        	this.grd00.createFormat();
        };

        this.btn00_onclick = function(obj,e)
        {
        		var sRtn = this.edt00.value;
        		sRtn += ":" + this.edt00_00.value;

        	this.close(sRtn);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
        };
        this.loadIncludeScript("par_dataPopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
