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
                this._setFormPosition(1280,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00","10.94%","8.77%","1000","470",null,null,null,null,null,null,this);
            obj.set_taborder("0");
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

            obj = new Button("btn_login","200","291","253","68",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("로그인하기");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_register",null,"291","253","68","200",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("회원가입하기");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("gotoSeller","265","391","470","60",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("판매자센터로 이동하기");
            obj.set_cssclass("WF_loginSellerCenter");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,570,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
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
        this.Div00_btn_register_onclick = function(obj,e)
        {
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.form.sta00.addEventHandler("onclick",this.Div00_sta00_onclick,this);
            this.Div00.form.btn_register.addEventHandler("onclick",this.Div00_btn_register_onclick,this);
        };
        this.loadIncludeScript("Form_Login.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
