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
            obj = new Div("Div00","0",null,null,"70","0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrollbartype("none");
            obj.set_cssclass("div_TF_button");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Discount","0","0","33.3%","70",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("세일중 ! ");
            obj.set_cssclass("top_Button");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_Mypage",null,"0","33.3%","70","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("마이페이지");
            obj.set_cssclass("top_Button");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_Sell","33.44%","0","33.3%","70",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("SHOP");
            obj.set_cssclass("top_Button");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta00","41.64%","0","215","80",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("url(\'theme::blue/images/Logo.png\') no-repeat center center /contain");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00_00",null,"15","50","50","195",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("TF_miniBtn");
            obj.set_background("url(\'theme::blue/images/like.png\') no-repeat center center /contain");
            this.addChild(obj.name, obj);

            obj = new Button("btn00",null,"15","50","50","260",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("TF_miniBtn");
            obj.set_background("url(\'theme::blue/images/cart.png\') no-repeat center center /contain");
            this.addChild(obj.name, obj);

            obj = new Button("btn_login",null,"15","60","50","120",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("로그인");
            obj.set_cssclass("TF_miniBtn");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00_00_00_00",null,"15","80","50","25",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("회원가입");
            obj.set_cssclass("TF_miniBtn");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

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
        **************************************************************************/

        //폼 크기 변경
        this.fn_moveFrame = function(i){
        	switch(i) { //0>메인화면, 1>판매, 2>세일, 3>마이페이지(단, 로그인 안 되어있으면 로그인창으로 이동)
        	case 0:
        		this.objApp.mainframe.VFrameSet00.HFrameSet00.set_separatesize("0,*,0,0,0,0");
        		break;
        	case 1:
        		this.objApp.mainframe.VFrameSet00.HFrameSet00.set_separatesize("200,0,*,0,0,0");
        		break;
        	case 2:
        		this.objApp.mainframe.VFrameSet00.HFrameSet00.set_separatesize("200,0,0,*,0,0");
        		break;
        	case 3:
        		this.objApp.mainframe.VFrameSet00.HFrameSet00.set_separatesize("0,0,0,0,*,0");
        		break;
        	default:
        	}
        }

        //formUrl 변경fn 함수
        this.fn_changeForm = function(formPath) {
            var objChildFrame = this.objApp.mainframe.VFrameSet00.HFrameSet00.changeFrame; // 대상 ChildFrame

            // 새로운 Form 생성 및 로드
            this.objChildFrame.set_formurl(formPath);
        	this.objChildFrame.set_separatesize("0,0,0,0,0,*");
        }

        /**************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        **************************************************************************/
        this.Form_Top_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);
        	//화면변환 변수
        	this.objApp = nexacro.getApplication();
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

        /**************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        **************************************************************************/





        this.sta00_onclick = function(obj,e)
        {
        	this.moveInt = 0;
        	this.fn_moveFrame(this.moveInt);
        };

        this.Div00_btn_Sell_onclick = function(obj,e)
        {
        	this.moveInt = 1;
        	this.fn_moveFrame(this.moveInt);
        };

        this.Div00_btn_Discount_onclick = function(obj,e)
        {
        	this.moveInt = 2;
        	this.fn_moveFrame(this.moveInt);
        };

        this.Div00_btn_Mypage_onclick = function(obj,e)
        {
        	this.moveInt = 3;
        	this.fn_moveFrame(this.moveInt);
        };

        this.btn_login_onclick = function(obj,e)
        {
        	 var targetFormPath = "service::Form_Login.xfdl"; // 변경할 폼 경로
            this.fn_changeForm(targetFormPath);
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
            this.btn_login.addEventHandler("onclick",this.btn_login_onclick,this);
        };
        this.loadIncludeScript("Form_Top.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
