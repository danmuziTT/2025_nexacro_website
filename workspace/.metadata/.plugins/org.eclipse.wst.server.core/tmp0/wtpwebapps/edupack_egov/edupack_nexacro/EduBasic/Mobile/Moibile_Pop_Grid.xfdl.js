(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Moibile_Pop_Grid");
            this.set_titletext("모바일 확인창");
            if (Form == this.constructor)
            {
                this._setFormPosition(300,103);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_data", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_IMAGE\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_IMAGE\">Images::img_b_setting.png</Col><Col id=\"MENU_NAME\">Old 화면</Col><Col id=\"MENU_URL\">Mobile::Mobile_Main.xfdl</Col></Row><Row><Col id=\"MENU_NAME\">Icon 화면</Col><Col id=\"MENU_IMAGE\">Images::img_b_setting.png</Col><Col id=\"MENU_URL\">Mobile::Mobile_Main_IconType.xfdl</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_menu","0","0","300","103",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("grd_MT_mnuPop");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_data");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"231\"/></Columns><Rows><Row size=\"50\"/></Rows><Band id=\"body\"><Cell text=\"bind:MENU_IMAGE\" displaytype=\"imagecontrol\"/><Cell col=\"1\" text=\"bind:MENU_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","screen_phone",300,103,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Moibile_Pop_Grid.xfdl", function() {
        this.objApp = nexacro.getApplication();
        //form onload event
        this.Form_onload = function(obj,e)
        {
        	//TODO
        };

        this.grd_menu_oncellclick = function(obj,e)
        {
        	var sUrl = this.ds_data.getColumn(e.row, "MENU_URL");
        	this.objApp.av_WorkFrame.set_formurl("");
        	this.objApp.av_WorkFrame.set_formurl(sUrl);
        	this.close("", sUrl);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.grd_menu.addEventHandler("oncellclick",this.grd_menu_oncellclick,this);
        };
        this.loadIncludeScript("Moibile_Pop_Grid.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
