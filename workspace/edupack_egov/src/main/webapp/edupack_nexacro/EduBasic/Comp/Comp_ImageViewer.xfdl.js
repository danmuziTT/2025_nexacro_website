(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_ImageViewer");
            this.set_titletext("Component-ImageViewer");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static07","10","40","270","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text(" Basic Usage (Prop. image)");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","30","106","203","58",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_image("url(\'theme://images/sta_TF_NexacroN.png\')");
            obj.set_border("1px solid gray");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","305","242","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text(" Stretch (Prop. stretch)");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","30","73","410","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Theme Image - theme://images/sta_TF_NexacroN.png");
            obj.set_cssclass("sta_WF_LabelTxt12");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","30","189","335","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Image Resource - imagerc::img_nexacro.png");
            obj.set_cssclass("sta_WF_LabelTxt12");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01","30","222","203","58",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_image("url(\'imagerc::img_nexacro.png\')");
            obj.set_background("#143a84");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","30","338","204","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">none</Col><Col id=\"datacolumn\">none</Col></Row><Row><Col id=\"codecolumn\">fit</Col><Col id=\"datacolumn\">fit</Col></Row><Row><Col id=\"codecolumn\">fixaspectratio</Col><Col id=\"datacolumn\">ratio</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_value("none");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer02","30","371","233","118",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_image("url(\'theme://images/sta_TF_NexacroN.png\')");
            obj.set_border("1px solid gray");
            this.addChild(obj.name, obj);

            obj = new Static("Static99","10","0","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("ImageViewer");
            obj.set_cssclass("sta_WF_TitleMain");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1038,650,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Button01","text","gds_dept","DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Comp_ImageViewer.xfdl", function() {

        this.Radio00_onitemchanged = function(obj,e)
        {
        	this.ImageViewer02.set_stretch(e.postvalue);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Radio00.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
        };
        this.loadIncludeScript("Comp_ImageViewer.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
