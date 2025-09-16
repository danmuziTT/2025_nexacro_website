(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CompExt_FileUpDown");
            this.set_titletext("Component - FileUpDown");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_result", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_NAME\" type=\"string\" size=\"32\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"32\"/><Column id=\"FILE_SIZE\" type=\"bigdecimal\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_up", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"32\"/><Column id=\"FILE_SIZE\" type=\"BIGDECIMAL\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static03","10","40","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text(" Basic Usage");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new FileUpload("fup_up","20","73","413","110",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_buttonsize("100");
            obj.set_cssclass("fup_WF_FileUp");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add","438","73","102","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("append Item");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del","438","106","102","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("delete Item");
            this.addChild(obj.name, obj);

            obj = new Button("btn_upload","550","73","140","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("File Upload");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","20","188","520","140",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_result");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"190\"/><Column size=\"190\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"FILENAME\"/><Cell col=\"2\" text=\"FILETYPE\"/><Cell col=\"3\" text=\"FILESIZE\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:FILE_NAME\"/><Cell col=\"2\" text=\"bind:FILE_TYPE\"/><Cell col=\"3\" text=\"bind:FILE_SIZE\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new FileUpload("fup_upM","18","411","520","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_multiselect("true");
            obj.set_buttonsize("100");
            this.addChild(obj.name, obj);

            obj = new Button("btn_uploadM","550","411","140","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("File Upload");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","18","451","520","162",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("ds_up");
            obj.set_autofittype("col");
            obj.set_cssclass("fup_WF_FileUp");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"190\"/><Column size=\"190\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"FILENAME\"/><Cell col=\"2\" text=\"FILETYPE\"/><Cell col=\"3\" text=\"FILESIZE\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:FILE_NAME\"/><Cell col=\"2\" text=\"bind:FILE_TYPE\"/><Cell col=\"3\" text=\"bind:FILE_SIZE\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new FileDownload("fdn_down","545","188","140","28",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("File Download");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","378","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text(" Multi Select");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","10","0","266","28",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("File Upload / Download");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1038,650,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CompExt_FileUpDown.xfdl", function() {
        this.uploadPath = "/upload";	//upload folder name

        this.CompExt_FileUpDown_onload = function(obj,e)
        {

        };

        this.objSubControl = "";
        this.fup_up_onlbuttondown = function(obj,e)
        {
        	this.objSubControl = e.fromreferenceobject;
        };

        this.btn_add_onclick = function(obj,e)
        {
        	this.fup_up.appendItem();
        };

        this.btn_del_onclick = function(obj,e)
        {
        	var idx = this.fup_up.getItemIndex(this.objSubControl);
        	if(idx < 0){
        		idx = this.fup_up.getItemCount()-1;
        	}
        	this.fup_up.deleteItem(idx);

        	if(this.fup_up.getItemCount() == 0){
        		this.fup_up.appendItem();
        	}
        };

        this.btn_upload_onclick = function(obj,e)
        {
        	var sURL = "EduUrl::fileUpload.jsp?PATH="+this.uploadPath;
        	this.fup_up.upload(sURL);
        };

        this.fup_up_onsuccess = function(obj,e)
        {
        	var sXml = e.datasets[0].saveXML();
        	this.ds_result.loadXML(sXml);
        };


        this.fup_upM_onitemchanged = function(obj,e)
        {
        	if(obj.multiselect){
        		this.ds_up.clearData();
        		for(var i=0; i<e.newvalue.length; i++)
        		{
        			sFileName = e.newvalue[i];
        			var idx = this.ds_up.addRow();
        			this.ds_up.setColumn(idx, "FILE_NAME", sFileName);
        		}
        	}
        };

        this.fup_upM_onsuccess = function(obj,e)
        {
        	var sXml = e.datasets[0].saveXML();
        	this.ds_up.loadXML(sXml);
        };

        this.btn_uploadM_onclick = function(obj,e)
        {
        	var sURL = "EduUrl::fileUpload.jsp?PATH="+this.uploadPath;
        	this.fup_upM.upload(sURL);
        };

        this.fdn_down_onclick = function(obj,e)
        {
        	var sFileName = this.ds_result.getColumn(this.ds_result.rowposition, "FILE_NAME");
        	var sURL = "EduUrl::fileDownload.jsp?PATH="+this.uploadPath+"&file=" + sFileName;
        	obj.download(sURL);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.CompExt_FileUpDown_onload,this);
            this.fup_up.addEventHandler("onlbuttondown",this.fup_up_onlbuttondown,this);
            this.fup_up.addEventHandler("onsuccess",this.fup_up_onsuccess,this);
            this.fup_up.addEventHandler("onerror",this.fup_up_onerror,this);
            this.fup_up.addEventHandler("onitemchanged",this.fup_up_onitemchanged,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_upload.addEventHandler("onclick",this.btn_upload_onclick,this);
            this.fup_upM.addEventHandler("onitemchanged",this.fup_upM_onitemchanged,this);
            this.fup_upM.addEventHandler("onsuccess",this.fup_upM_onsuccess,this);
            this.btn_uploadM.addEventHandler("onclick",this.btn_uploadM_onclick,this);
            this.fdn_down.addEventHandler("onclick",this.fdn_down_onclick,this);
            this.fdn_down.addEventHandler("onsuccess",this.fdn_down_onsuccess,this);
        };
        this.loadIncludeScript("CompExt_FileUpDown.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
