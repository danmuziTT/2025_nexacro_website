(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Top");
            this.set_titletext("상단 선택탭");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,150);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00","0",null,null,"50","0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrollbartype("none");
            obj.set_cssclass("div_TF_button");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Discount","0","0","33.3%",null,null,"0",null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("세일중 ! ");
            obj.set_cssclass("top_Button");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_Mypage",null,"0","33.3%",null,"0","0",null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("마이페이지");
            obj.set_cssclass("top_Button");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_Sell","33.44%","0","33.3%",null,null,"0",null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("SHOP");
            obj.set_cssclass("top_Button");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta00","40.78%","0",null,"100","40.70%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("url(\'imagerc::logoKu.png\') no-repeat center center /contain");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00_00",null,"28","50","50","195",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("TF_miniBtn");
            obj.set_background("url(\'theme::blue/images/like.png\') no-repeat center center /contain");
            this.addChild(obj.name, obj);

            obj = new Button("btn00",null,"28","50","50","btn00_00_00:15",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("TF_miniBtn");
            obj.set_background("url(\'theme::blue/images/cart.png\') no-repeat center center /contain");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","btn00_00_00:20","28","169","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Button("btn_login","10","0","60","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("로그인");
            obj.set_cssclass("TF_miniBtn");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btn00_00_00_00_00","84","0","80","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("회원가입");
            obj.set_cssclass("TF_miniBtn");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div01_00","btn00_00_00:0","28","195","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_visible("false");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","110","5","78","40",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("0");
            obj.set_text("로그아웃");
            obj.set_cssclass("TF_miniBtn");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("sta00","11","10","88","31",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("1");
            obj.set_text("sta00");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("btn01",null,"29","140","54","btn00:30",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("판매자센터");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn02","9","5","101","91",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_background("url(\'theme::blue/images/bell.png\') no-repeat center center /contain");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01_00.form
            obj = new Layout("default","",0,0,this.Div01_00.form,function(p){});
            this.Div01_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,150,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Top.xfdl", function() {
        /**************************************************************************
        * include 영역
        **************************************************************************/

        /**************************************************************************
        * FORM 변수 선언 영역 (fv)
        **************************************************************************

        /**************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        **************************************************************************/
        this.Form_Top_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);
        	//화면변환 변수
        	this.objApp = nexacro.getApplication();

        	//var nHeight = this.getLayoutInfo(this.getCurrentLayoutID(), "height");
        	//this.parent.parent.fnMainPageOnLoad(nHeight); //오류
        // 	var memRole = this.objApp.gdsUserInfo.getColumn(0, "ROLE");
        // 	if(memRole == 0){
        // 		this.btn01.set_visible(true);
        // 	}

        	if(this.objApp.gdsUserInfo.rowcount > 0){
        		this.Div01_00.set_visible(true);
        		this.Div01.set_visible(false);
        		this.Div01_00.form.sta00.set_text(this.objApp.gdsUserInfo.getColumn(0,"USER_NAME") + " 님")
        		this.Div01_00.form.sta00.set_font("bold 15px Verdana");
        		this.btn01.set_visible(true);
        	}
        };

        /**************************************************************************
        * CRUD 및 TRANSACTION 서비스 호출 처리
        **************************************************************************/

        /**************************************************************************
        * CALLBACK 콜백 처리부분(Transaction, Popup)
        **************************************************************************/

        /**************************************************************************
        * 사용자 FUNCTION 영역
        **************************************************************************/

        this.send_urlInfo = function(divUrl)
        {
        	var objFrame = this.parent.parent.frames[1];
        	objFrame.form.Div01.set_async(false);
        	objFrame.form.fv_setUrl(divUrl);

        };

        this.loginSuccess = function(){
        	var CF = new ChildFrame();
           var strName = "chf";
           var nLeft = 0;
           var nTop = 0;
           var nWidth = 500;
           var nHeight = 300;
           var nRight = null;
           var nBottom = null;
           var strUrl = "form::logout_popup.xfdl"; // 복사한 경우에는 Generate 필수

            CF.init(strName, nLeft, nTop, nWidth, nHeight, nRight, nBottom, strUrl);
           CF.set_titlebarheight("40px");
           CF.set_openalign("center middle");
           CF.showModal(this.getOwnerFrame(),"", this, "");

        }
        /**************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        **************************************************************************/

        this.sta00_onclick = function(obj,e) //메인 로고 클릭
        {
        	this.send_urlInfo("form::Form_shopMain.xfdl")
        };

        this.Div00_btn_Sell_onclick = function(obj,e)
        { //판매중
        	this.send_urlInfo("form::Form_viewProducts.xfdl");
        };

        this.Div00_btn_Discount_onclick = function(obj,e)
        { //할인
        	this.send_urlInfo("form::Form_viewProSale.xfdl")
        };

        this.Div00_btn_Mypage_onclick = function(obj,e)
        { //마이페이지
        	var loginValid = this.objApp.gdsUserInfo.getColumn(0, "USER_ID");

        	if (!loginValid) {  // undefined, null, 빈 문자열 모두 체크
        		this.send_urlInfo("form::Form_Login.xfdl");
        		return;
        	}
        	this.send_urlInfo("userInfo::User_myPage.xfdl");
        };

        this.btn_login_onclick = function(obj,e)
        {
        	this.send_urlInfo("form::Form_Login.xfdl")
        };

        this.btn00_00_00_00_00_onclick = function(obj,e)
        {
        	this.send_urlInfo("form::Form_register.xfdl")
        };

        this.btn00_onclick = function(obj,e)
        {
        	var loginValid = this.objApp.gdsUserInfo.getColumn(0, "USER_ID");

        	if (!loginValid) {  // undefined, null, 빈 문자열 모두 체크
        		this.send_urlInfo("form::Form_Login.xfdl");
        		return;
        	}
        	this.send_urlInfo("userInfo::User_cart.xfdl")
        };

        this.btn00_00_00_onclick = function(obj,e)
        {
        	var loginValid = this.objApp.gdsUserInfo.getColumn(0, "USER_ID");

        	if (!loginValid) {  // undefined, null, 빈 문자열 모두 체크
        		this.send_urlInfo("form::Form_Login.xfdl");
        		return;
        	}
        	this.send_urlInfo("userInfo::User_likeIt.xfdl")
        };

        this.Div01_00_btn00_onclick = function(obj,e) //로그아웃
        {
        	this.Div01_00.set_visible(false);
        	this.Div01.set_visible(true);
        	this.btn01.set_visible(false);
        	this.objApp.gdsUserInfo.clear();
        	this.objApp.gdsUserLike.clear();
        	this.objApp.gdsUserCart.clear();
        	this.loginSuccess();
        };

        this.btn01_onclick = function(obj,e)
        {
        	this.send_urlInfo("form::Form_shopMain.xfdl");
        	this.parent.parent.set_separatesize("50,0,*");
        	this.parent.parent.TopMainFrame.set_formurl("sellerInfo::frame_top.xfdl");
        };

        this.btn03_onclick = function(obj,e)
        {
        	this.objApp.av_TopFrame.form.Div01.set_visible(false);
        };

        this.btn02_onclick = function(obj,e)
        {
        	this.send_urlInfo("form::form_alert.xfdl")
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Top_onload,this);
            this.Div00.form.btn_Discount.addEventHandler("onclick",this.Div00_btn_Discount_onclick,this);
            this.Div00.form.btn_Mypage.addEventHandler("onclick",this.Div00_btn_Mypage_onclick,this);
            this.Div00.form.btn_Sell.addEventHandler("onclick",this.Div00_btn_Sell_onclick,this);
            this.sta00.addEventHandler("onclick",this.sta00_onclick,this);
            this.btn00_00_00.addEventHandler("onclick",this.btn00_00_00_onclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.Div01.form.btn_login.addEventHandler("onclick",this.btn_login_onclick,this);
            this.Div01.form.btn00_00_00_00_00.addEventHandler("onclick",this.btn00_00_00_00_00_onclick,this);
            this.Div01_00.form.btn00.addEventHandler("onclick",this.Div01_00_btn00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
        };
        this.loadIncludeScript("Form_Top.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
