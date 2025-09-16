(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Mobile_Main_IconType");
            this.set_titletext("메인 아이콘 형태");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_full","1440","0","480",null,null,"0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_border("0px none");
            obj.set_cssclass("div_MB_work");
            obj.set_url("EduBasic::Mobile/Mobile_Login.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","0","72",null,null,"0","70",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_border("0px none");
            obj.set_cssclass("div_MB_work");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_home","0",null,"120","70",null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("HOME");
            obj.set_cssclass("btn_ITM_home");
            this.addChild(obj.name, obj);

            obj = new Button("btn_menu","120",null,"120","70",null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("MENU");
            obj.set_cssclass("btn_ITM_menu");
            this.addChild(obj.name, obj);

            obj = new Button("btn_setting","360",null,"120","70",null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Setting");
            obj.set_cssclass("btn_ITM_setting");
            this.addChild(obj.name, obj);

            obj = new Button("btn_mypage","240",null,"120","70",null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("My page");
            obj.set_cssclass("btn_ITM_mypage");
            this.addChild(obj.name, obj);

            obj = new Div("div_main","480","0","480",null,null,"btn_home:0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("div_MBF_topbg");
            obj.set_url("EduBasic::Mobile/Mobile_Main_IconType_sub.xfdl");
            obj.set_visible("false");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Div("div_menu","960","0","480",null,null,"0",null,null,"540",null,this);
            obj.set_taborder("6");
            obj.set_text("div_menu");
            obj.set_visible("false");
            obj.set_url("EduBasic::Mobile/Mobile_Menu.xfdl");
            obj.set_cssclass("div_MBF_topbg");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Div("div_top","0","0",null,"72","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_formscrollbartype("none");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_sub_title","0","0",null,"72","-2",null,null,null,null,null,this.div_top.form);
            obj.set_taborder("0");
            obj.set_text("투비소프트 소개");
            obj.set_cssclass("sta_ITM_tempTitle");
            this.div_top.addChild(obj.name, obj);

            obj = new Button("btn_back","15","16","40","40",null,null,null,null,null,null,this.div_top.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_ITM_back");
            this.div_top.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_full
            obj = new Layout("default","",0,0,this.div_full.form,function(p){});
            this.div_full.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_work
            obj = new Layout("default","",0,0,this.div_work.form,function(p){});
            this.div_work.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_main
            obj = new Layout("default","",0,0,this.div_main.form,function(p){});
            this.div_main.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_menu
            obj = new Layout("default","",0,0,this.div_menu.form,function(p){});
            this.div_menu.form.addLayout(obj.name, obj);

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
            this._addPreloadList("fdl","EduBasic::Mobile/Mobile_Login.xfdl");
            this._addPreloadList("fdl","EduBasic::Mobile/Mobile_Main_IconType_sub.xfdl");
            this._addPreloadList("fdl","EduBasic::Mobile/Mobile_Menu.xfdl");
        };
        
        // User Script
        this.registerScript("Mobile_Main_IconType_copy.xfdl", function() {
        this.objApp = nexacro.getApplication();
        //form onload event
        this.Mobile_Main_IconType_onload = function(obj,e)
        {
        	//TODO 화면로딩 후 처리
        	this.div_full.bringToFront();
        };

        //메뉴선택
        this.btn_menu_onclick = function(obj,e)
        {
        	this.fn_menuPop(true);
        };

        //홈선택
        this.btn_home_onclick = function(obj,e)
        {
        	//this.div_work.set_url("EduBasic::Mobile/Mobile_Main_Sub.xfdl");
        	this.fn_action("EduBasic::Mobile/Mobile_Main_IconType_sub.xfdl" , "sub");

        };

        //change work area
        this.fn_action = function(sUrl , sMenu)
        {
        	//popup 메뉴에서 이동 시 닫힘
        	if(sMenu == "main")
        	{
        		//mainframe > childframe 제어
        		this.objApp.av_WorkFrame.set_formurl(sUrl);
        		return false;
        	}
        	else if(sMenu == "sub")
        	{
        		//div_main 제어 홈화면
        		this.fn_divVisible(false);
        		this.div_main.bringToFront();
        		this.div_main.set_visible(true);
        		return false;
        	}
        	else if(sMenu == "full")	//MLM 쓸때
        	{
        		this.fn_divVisible(false);
        		this.div_full.set_url(sUrl);
        		this.div_full.set_visible(true);
        		this.fn_menuPop(false);
        		return false;

        	}
        	else
        	{
        		//메뉴클릭
        		if(sMenu == "pop")
        		{
        			this.fn_menuPop(false);
        			var nRow = this.div_menu.form.ds_data.findRow("MENU_URL", sUrl);
        			var sName = this.div_menu.form.ds_data.getColumn(nRow, "MENU_NAME");
        			this.div_top.form.sta_sub_title.set_text(sName);
        		}
        		//화면 Icon 클릭
        		this.div_work.bringToFront();
        		this.div_work.set_url(sUrl);
        		this.div_work.set_visible(true);
        		this.div_top.bringToFront();
        		this.div_top.set_visible(true);
        		this.div_main.set_visible(false);
        	}


        }

        //로그인
        this.fn_login = function(sId, sPw)
        {
        	//add global variable
        	nexacro.getApplication().gv_id = sId;
        	this.div_main.bringToFront();
        	this.div_main.set_visible(true);

        	//process div_full --> EduBasic::Mobile/Mobile_Login.xfdl
        	this.div_full.set_visible(false);
        }

        //팝업메뉴
        this.btn_menuPop_onclick = function(obj,e)
        {
        	this.fn_menuPop(true);
        };
        //화면 전체를 덮는 popup 형태 div 컴포넌트
        this.fn_menuPop = function(bFlag)
        {
        	if(bFlag)
        	{
        		this.div_menu.bringToFront();
        		this.div_menu.set_left(0);
        		this.div_menu.set_right(0);
        		//div_menu 에 url 이 셋팅 되어 있어서 onload 이벤트를 다시 호출하기 위해 초기화
        		this.div_menu.set_url("");
        		this.div_menu.set_url("EduBasic::Mobile/Mobile_Menu.xfdl");
        		this.div_menu.set_visible(true);

        	}
        	else
        	{
        		this.div_menu.set_visible(false);
        	}
        }

        //showmodal 팝업
        this.fn_popup = function(sUrl, sType)
        {
        	var objChild = new ChildFrame();
        	var objParam = {};
        	if("menu")
        	{
        		//showmodal popup 확인 창
        		objChild.init("popConfirm", "absolute", 0, 0, 450, 300);
        		var objParam = {msg:"종료하시겠습니까?"};
        	}
        	else
        	{
        		objChild.init("popGrid", "absolute", 0, 0, 300, 103);
        		//var objParam = {msg:"종료하시겠습니까?"};
        	}
        	objChild.set_formurl(sUrl);
        	objChild.set_openalign("center middle");
        	objChild.set_dragmovetype("all");
        	objChild.set_showtitlebar(false);
            objChild.showModal(this.getOwnerFrame()
                             , objParam
                             , this
                             , "fn_callback_pop");
        }
        //Popup Callback
        this.fn_callback_pop = function(sPopupId, sReturn)
        {
        	if(sReturn == undefined){
        		sReturn = "";
        	}
        	if(sPopupId == "popConfirm")
        	{
        		if(sReturn.length > 0){
        			//app 종료

         			if(sReturn == "OK")
        			{
        				this.objApp.exit();
        			}
        		}
        	}
        	else if(sPopupId == "popGrid")
        	{
        		//TODO
        	}
        }
        //뒤로가기
        this.div_top_btn_back_onclick = function(obj,e)
        {
        	//1depth 일 경우. 2depth 일 경우는 조건처리
        	this.fn_action("EduBasic::Mobile/Mobile_Main_IconType_sub.xfdl" , "sub");
        };

        //다른 메인화면 이동
        this.btn_mypage_onclick = function(obj,e)
        {
        	//this.fn_popup("EduBasic::Mobile/Moibile_Pop_Grid.xfdl", "popGrid");
        };

        //안드로이드 디바이스 취소키
        this.Mobile_Main_IconType_ondevicebuttonup = function(obj,e)
        {
        	// MENU(1) CANCEL(2)
        	if (e.button == 2)
        	{
        		// Android단말 취소키 제어
        		if(this.div_full.visible)	//로그인화면
        		{
        			//종료팝업
        			this.fn_popup("EduBasic::Mobile/Moibile_Pop_Confirm.xfdl", "menu");

        		}
        		else if (this.div_menu.visible)
        		{
        			this.div_menu.set_visible(false);
        		}
        		else if (this.div_main.visible)
        		{
        			//종료팝업
        			this.fn_popup("EduBasic::Mobile/Moibile_Pop_Confirm.xfdl", "menu");
        		}
        		else	//work 화면일경우
        		{
        			this.fn_action("EduBasic::Mobile/Mobile_Main_IconType_sub.xfdl" , "sub");
        		}
        	}
        	return false;
        };

        this.fn_divVisible = function(bFlag)
        {
        	if(bFlag)
        	{
        		this.div_full.set_visible(true);
        		this.div_main.set_visible(false);
        		this.div_menu.set_visible(false);
        		this.div_top.set_visible(false);
        		this.div_work.set_visible(false);
        	}
        	else
        	{
        		this.div_full.set_visible(false);
        		this.div_main.set_visible(false);
        		this.div_menu.set_visible(false);
        		this.div_top.set_visible(false);
        		this.div_work.set_visible(false);
        	}
        }
        this.btn_setting_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Mobile_Main_IconType_onload,this);
            this.addEventHandler("ondevicebuttonup",this.Mobile_Main_IconType_ondevicebuttonup,this);
            this.btn_home.addEventHandler("onclick",this.btn_home_onclick,this);
            this.btn_menu.addEventHandler("onclick",this.btn_menu_onclick,this);
            this.btn_setting.addEventHandler("onclick",this.btn_setting_onclick,this);
            this.btn_mypage.addEventHandler("onclick",this.btn_mypage_onclick,this);
            this.div_top.form.btn_back.addEventHandler("onclick",this.div_top_btn_back_onclick,this);
        };
        this.loadIncludeScript("Mobile_Main_IconType_copy.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
