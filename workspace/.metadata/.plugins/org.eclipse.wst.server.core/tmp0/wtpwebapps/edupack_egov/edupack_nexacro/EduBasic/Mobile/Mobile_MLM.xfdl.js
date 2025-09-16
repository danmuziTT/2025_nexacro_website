(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Mobile_MLM");
            this.set_titletext("MLM Main");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Mnu", this);
            obj._setContents("<ColumnInfo><Column id=\"mnu_Img\" type=\"STRING\" size=\"256\"/><Column id=\"mnu_Name\" type=\"STRING\" size=\"256\"/><Column id=\"mnu_URL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"mnu_Img\">imagerc::icon_MB_mnuStar_yel.png</Col><Col id=\"mnu_Name\">Club Introduction</Col><Col id=\"mnu_URL\">EduBasic::Mobile/TEMP/Form_clubIntro.xfdl</Col></Row><Row><Col id=\"mnu_Img\">imagerc::icon_MB_mnuStar_yel.png</Col><Col id=\"mnu_Name\">Player Introduction</Col><Col id=\"mnu_URL\">EduBasic::Mobile/TEMP/Form_playerIntro.xfdl</Col></Row><Row><Col id=\"mnu_Img\">imagerc::icon_MB_mnuStar_yel.png</Col><Col id=\"mnu_Name\">Player Registration</Col><Col id=\"mnu_URL\">EduBasic::Mobile/TEMP/Form_playerRegistration.xfdl</Col></Row><Row><Col id=\"mnu_Img\">imagerc::icon_MB_mnuStar_yel.png</Col><Col id=\"mnu_URL\">EduBasic::Mobile/TEMP/Form_playerRegDetail.xfdl</Col><Col id=\"mnu_Name\">Player RegDetail</Col></Row><Row><Col id=\"mnu_Img\">imagerc::icon_MB_mnuStar_yel.png</Col><Col id=\"mnu_Name\">Component</Col><Col id=\"mnu_URL\">EduBasic::Mobile/TEMP/Form_Comp.xfdl</Col></Row><Row><Col id=\"mnu_Img\">imagerc::icon_MB_mnuStar_yel.png</Col><Col id=\"mnu_Name\">Mobile Main</Col><Col id=\"mnu_URL\">EduBasic::Mobile/TEMP/Form_Comp.xfdl</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,"72","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_MLM_titlebg");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","21","100%","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_MLM_ci");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","72",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_url("EduBasic::Mobile/Mobile_MLM_sub.xfdl");
            obj.set_cssclass("div_WF_back");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv00","536","83","250","470",null,null,null,null,null,null,this);
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            obj.set_cssclass("pdiv_MLM_mnu");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","2","2","246","466",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_Mnu");
            obj.set_cssclass("grd_MLM_mnuPop");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"238\"/></Columns><Rows><Row size=\"50\"/></Rows><Band id=\"body\"><Cell text=\"bind:mnu_Img\" displaytype=\"imagecontrol\"/><Cell col=\"1\" text=\"bind:mnu_Name\"/></Band></Format></Formats>");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Button("btn_mnu","30","22","33","29",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_MLM_mnu");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_home",null,"16","40","40","30",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_MLM_home");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.PopupDiv00.form
            obj = new Layout("default","",0,0,this.PopupDiv00.form,function(p){});
            this.PopupDiv00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","screen_phone",480,768,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","EduBasic::Mobile/Mobile_MLM_sub.xfdl");
        };
        
        // User Script
        this.registerScript("Mobile_MLM.xfdl", function() {
        this.objApp = nexacro.getApplication();

        this.btn_home_onclick = function(obj,e)
        {
        	this.objApp.av_WorkFrame.form.fn_action("Mobile::Mobile_Main_IconType_sub.xfdl" , "sub");
        };

        this.btn_mnu_onclick = function(obj,e)
        {
        	this.objApp.av_WorkFrame.form.fn_action("Mobile::Mobile_Main_IconType_sub.xfdl" , "sub");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.PopupDiv00.form.Grid00.addEventHandler("oncellclick",this.PopupDiv00_Grid00_oncellclick,this);
            this.btn_mnu.addEventHandler("onclick",this.btn_mnu_onclick,this);
            this.btn_home.addEventHandler("onclick",this.btn_home_onclick,this);
        };
        this.loadIncludeScript("Mobile_MLM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
