(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Mobile_Menu");
            this.set_titletext("모바일메뉴");
            this.set_background("transparent");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_data", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_IMAGE\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_NAME\">TOBESOFT</Col><Col id=\"MENU_IMAGE\">theme://images/img_b_setting.png</Col><Col id=\"MENU_URL\">EduBasic::Mobile/Mobile_TOBESOFT.xfdl</Col><Col id=\"MENU_TYPE\">D</Col></Row><Row><Col id=\"MENU_NAME\">Camera</Col><Col id=\"MENU_IMAGE\">theme://images/img_b_setting.png</Col><Col id=\"MENU_URL\">EduBasic::Mobile/Mobile_Camera.xfdl</Col><Col id=\"MENU_TYPE\">D</Col></Row><Row><Col id=\"MENU_NAME\">Step</Col><Col id=\"MENU_IMAGE\">theme://images/img_b_setting.png</Col><Col id=\"MENU_URL\">EduBasic::Mobile/Mobile_Step.xfdl</Col><Col id=\"MENU_TYPE\">D</Col></Row><Row><Col id=\"MENU_NAME\">MLM</Col><Col id=\"MENU_IMAGE\">theme://images/img_b_setting.png</Col><Col id=\"MENU_URL\">EduBasic::Mobile/Mobile_MLM.xfdl</Col><Col id=\"MENU_TYPE\">F</Col></Row><Row><Col id=\"MENU_IMAGE\">theme://images/img_b_setting.png</Col><Col id=\"MENU_NAME\">DeskTop VS Mobile</Col><Col id=\"MENU_URL\">EduBasic::Mobile/Mobile_MLMvsPhone.xfdl</Col><Col id=\"MENU_TYPE\">D</Col></Row><Row><Col id=\"MENU_IMAGE\">theme://images/img_b_setting.png</Col><Col id=\"MENU_NAME\">Employees_ListView</Col><Col id=\"MENU_URL\">EduBasic::Mobile/Mobile_Employees_ListView.xfdl</Col><Col id=\"MENU_TYPE\">D</Col></Row><Row><Col id=\"MENU_NAME\">ListView</Col><Col id=\"MENU_IMAGE\">theme://images/img_b_setting.png</Col><Col id=\"MENU_URL\">EduBasic::Mobile/Mobile_ListView.xfdl</Col><Col id=\"MENU_TYPE\">D</Col></Row><Row><Col id=\"MENU_IMAGE\">theme://images/img_b_setting.png</Col><Col id=\"MENU_NAME\">Mobile_Component</Col><Col id=\"MENU_URL\">EduBasic::Mobile/Mobile_Component.xfdl</Col><Col id=\"MENU_TYPE\">D</Col></Row><Row><Col id=\"MENU_IMAGE\">theme://images/img_b_setting.png</Col><Col id=\"MENU_NAME\">Main_Icon</Col><Col id=\"MENU_URL\">EduBasic::Mobile/Mobile_Main_IconType.xfdl</Col><Col id=\"MENU_TYPE\">M</Col></Row><Row><Col id=\"MENU_URL\">EduBasic::Mobile/TEMP/Form_Work.xfdl</Col><Col id=\"MENU_IMAGE\">theme://images/img_b_setting.png</Col><Col id=\"MENU_NAME\">Main_Change</Col><Col id=\"MENU_TYPE\">M</Col></Row><Row><Col id=\"MENU_IMAGE\">theme://images/img_b_setting.png</Col><Col id=\"MENU_NAME\">Barcode</Col><Col id=\"MENU_URL\">EduBasic::Mobile/Mobile_Barcode.xfdl</Col><Col id=\"MENU_TYPE\">D</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_top","0","0",null,"90","109",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_MBF_topbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_titlebg","0","0",null,null,"0","0",null,null,null,null,this.div_top.form);
            obj.set_taborder("0");
            obj.set_accessibilityenable("false");
            obj.set_cssclass("sta_mnu_titlebg");
            this.div_top.addChild(obj.name, obj);

            obj = new Button("btn_logout",null,"25","42","40","10",null,null,null,null,null,this.div_top.form);
            obj.set_taborder("1");
            obj.getSetter("uWord").set("frame.logOut");
            obj.set_cssclass("btn_MBF_logout");
            this.div_top.addChild(obj.name, obj);

            obj = new Static("sta_name","10","25",null,"40","62",null,null,null,null,null,this.div_top.form);
            obj.set_taborder("2");
            obj.set_text("<b v=\'true\'>홍길동</b> 님 환영합니다.");
            obj.set_cssclass("sta_mnu_welcome");
            obj.set_usedecorate("true");
            this.div_top.addChild(obj.name, obj);

            obj = new Static("sta_back","div_top:0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_accessibilityenable("false");
            obj.set_cssclass("sta_MBF_rightbg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","381","72","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_cssclass("btn_MBF_close");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_menu","0","90","371",null,null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("grd_MT_mnuPop");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_data");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"231\"/></Columns><Rows><Row size=\"50\"/></Rows><Band id=\"body\"><Cell text=\"bind:MENU_IMAGE\" displaytype=\"imagecontrol\"/><Cell col=\"1\" text=\"bind:MENU_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_top.form
            obj = new Layout("default","",0,0,this.div_top.form,function(p){});
            this.div_top.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","screen_phone",480,768,this,function(p){});
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Mobile_Menu.xfdl", function() {
        this.objApp = nexacro.getApplication();

        //form onload event
        this.Mobile_Menu_onload = function(obj,e)
        {
        	//숨기기
        	//this.ds_data.filter("MENU_TYPE != 'H'");
        	//menu를 url 속성으로 호출 시
        	var sMsg = "<b v='true'>"+  this.objApp.gv_id  + "</b>님 환영합니다."
        	this.div_top.form.sta_name.set_text(sMsg);
        };

        //background click
        this.sta_back_onclick = function(obj,e)
        {
        	this.objApp.av_WorkFrame.form.fn_menuPop(false);
        	//this.parent.parent.fn_menuPop(false);
        };

        //close div
        this.divTop_btn_close_onclick = function(obj,e)
        {
        	this.objApp.av_WorkFrame.form.fn_menuPop(false);
        };

        //open popup
        this.div_top_btn_logout_onclick = function(obj,e)
        {
        	this.objApp.av_WorkFrame.form.fn_popup("Mobile::Moibile_Pop_Confirm.xfdl", "menu");
        };

        //click menu
        this.grd_menu_oncellclick = function(obj,e)
        {
        	var sUrl = this.ds_data.getColumn(e.row, "MENU_URL");
        	//parent 로 접근하거나 application에 등록 된 변수로 접근
        	var sType = this.ds_data.getColumn(e.row, "MENU_TYPE");
        	var sMenu = "pop";
        	if(sType == "D")
        	{
        		sMenu = "pop";
        	}
        	else if(sType == "F")
        	{
        		sMenu = "full";
        	}
        	else	//sType == "M"
        		sMenu = "main";

        	this.objApp.av_WorkFrame.form.fn_action(sUrl, sMenu);


        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Mobile_Menu_onload,this);
            this.div_top.form.btn_logout.addEventHandler("onclick",this.div_top_btn_logout_onclick,this);
            this.sta_back.addEventHandler("onclick",this.sta_back_onclick,this);
            this.btn_close.addEventHandler("onclick",this.divTop_btn_close_onclick,this);
            this.grd_menu.addEventHandler("oncellclick",this.grd_menu_oncellclick,this);
        };
        this.loadIncludeScript("Mobile_Menu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
