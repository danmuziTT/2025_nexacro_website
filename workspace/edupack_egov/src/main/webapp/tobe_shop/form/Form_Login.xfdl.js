(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Login");
            this.set_titletext("로그인하기");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,440);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PW\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00","0","0","50%","220",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("sta00");
            obj.set_background("pink");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","sta00:-500","39","1000","402",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","380","19","240","55",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("환영합니다");
            obj.set_cssclass("WF_loginTitle");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta01","254","sta00:10","493","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("보다 더 많은 즐거움을 위해 로그인 해주세요!");
            obj.set_cssclass("WF_loginText");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta02","60","121","120","60",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("아이디");
            obj.set_cssclass("WF_loginText");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta03","60","191","120","60",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("비밀번호");
            obj.set_cssclass("WF_loginText");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt00",null,"141","700","40","60",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt01",null,"211","700","40","60",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_password("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_login","200","272","253","68",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("로그인하기");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_register",null,"272","253","68","200",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("회원가입하기");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta04","171","351","659","43",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("아이디 또는 비밀번호를 잊어버리셨나요? 아이디와 비밀번호 찾으러 가기");
            obj.set_font("bold 20px/normal Verdana");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,440,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.edt00","value","dsSearch","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.edt01","value","dsSearch","USER_PW");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Login.xfdl", function() {
        /**************************************************************************
        * include 영역
        **************************************************************************/

        /**************************************************************************
        * FORM 변수 선언 영역 (fv)
        **************************************************************************/

        /**************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        **************************************************************************/

        this.Form_Login_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);
        	//화면변환 변수
        	this.objApp = nexacro.getApplication();

        	var nHeight = this.getLayoutInfo(this.getCurrentLayoutID(), "height");
         	this.parent.parent.fnMainPageOnLoad(nHeight);

        	this.dsSearch.addRow();
        	this.objApp.gdsUserInfo.addRow();

        };
        /**************************************************************************
        * CRUD 및 TRANSACTION 서비스 호출 처리
        **************************************************************************/

        /**************************************************************************
        * CALLBACK 콜백 처리부분(Transaction, Popup)
        **************************************************************************/

        this.fnCallback = function(id, nErrorCode, sErrorMsg)
        {
        	if(nErrorCode < 0){ //오류가 난 경우
        		this.alert("ERROR"+ sErrorMsg);
        	}
        	if(this.objApp.gdsUserInfo.rowcount == 0){
        		alert("아이디 또는 비밀번호가 다릅니다.");
        	}
        	else{
        		var username = this.objApp.gdsUserInfo.getColumn(0, "USER_NAME");
        		this.loginSuccess(username);
        	}
        };


        /**************************************************************************
        * 사용자 FUNCTION 영역
        **************************************************************************/

        this.send_urlInfo = function(divUrl)
        {
        	var objFrame = this.objApp.mainframe.VFrameSet00.UserFrame;
        	objFrame.form.fv_setUrl(divUrl);
        };


        this.loginSuccess = function(loginName){
        	var CF = new ChildFrame();
           var strName = "chf";
           var nLeft = 0;
           var nTop = 0;
           var nWidth = 250;
           var nHeight = 150;
           var nRight = null;
           var nBottom = null;
           var strUrl = "form::form_loginPopup.xfdl"; // 복사한 경우에는 Generate 필수

            CF.init(strName, nLeft, nTop, nWidth, nHeight, nRight, nBottom, strUrl);
           CF.set_openalign("center middle");
           CF.set_titlebarheight("40px");
           CF.showModal(this.getOwnerFrame(), {loginName:loginName}, this, "");

        }
        /**************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        **************************************************************************/
        this.Div00_btn_register_onclick = function(obj,e) //회원가입하기 버튼
        {
        	var divUrl = "form::Form_register.xfdl";
        	this.send_urlInfo(divUrl)
        };

        this.name = "";
        this.Div00_btn_login_onclick = function(obj,e) //로그인하기 버튼 (로그인정보가 맞으면 메인화면, 안맞으면 틀렸다는 팝업)
        {
        	/*var strSvcUrl = "edu/loginMember.do";
        	var inData    = "loginData=dsSearch:U";
        	var outData   = "";
        	var strArg    = "";

        	this.gfnTransaction("loginMember", strSvcUrl, inData, outData, strArg, "fnCallback", true); */

        	var strSvcUrl = "edu/loginId.do";
        	var inData    = "loginData=dsSearch:U";
        	var outData   = "gdsUserInfo=out_emp";
        	var strArg    = "";

        	this.gfnTransaction("loginId", strSvcUrl, inData, outData, strArg, "fnCallback", true);

        };

        this.Div00_gotoSeller_onclick = function(obj,e) //판매자센터 이동버튼 <판매자센터로 링크 바꿔주기
        { //아이디와 비밀번호가 판매자의 것인지 확인 후 맞으면 이동 (이동만 구현함)
        	var TF_seller = "sellerInfo::seller_mainUp.xfdl"
        	var WF_seller = "sellerInfo::seller_main.xfdl"
        	var manageSize = this.objApp.mainframe.VFrameSet00;
        	manageSize.set_separatesize("150,0,*");
        	manageSize.TopMainFrame.set_formurl(TF_seller);
        };


        this.Div00_sta04_onclick = function(obj,e)
        {
        	var divUrl = "form::id_found.xfdl";
        	this.send_urlInfo(divUrl)
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Login_onload,this);
            this.Div00.form.sta00.addEventHandler("onclick",this.Div00_sta00_onclick,this);
            this.Div00.form.edt00.addEventHandler("onchanged",this.Div00_edt00_onchanged,this);
            this.Div00.form.btn_login.addEventHandler("onclick",this.Div00_btn_login_onclick,this);
            this.Div00.form.btn_register.addEventHandler("onclick",this.Div00_btn_register_onclick,this);
            this.Div00.form.sta04.addEventHandler("onclick",this.Div00_sta04_onclick,this);
        };
        this.loadIncludeScript("Form_Login.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
