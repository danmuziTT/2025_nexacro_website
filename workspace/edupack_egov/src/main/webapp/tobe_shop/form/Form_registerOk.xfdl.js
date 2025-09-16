(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_registerOk");
            this.set_titletext("회원가입 완료");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta03","0","0","50%","50%",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("sta03");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","sta03:-182","20","364","321",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("url(\'imagerc::party_cracker_kamifubuki.png\') no-repeat center center /cover");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","sta03:-130","370","259","55",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("환영합니다!");
            obj.set_cssclass("WF_loginTitle");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","sta03:-223","445","447","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("\"쿠루쿠루쇼핑\"에 가입이 완료되었습니다");
            obj.set_cssclass("WF_loginText");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","sta03:-122","498","244","56",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("메인화면으로");
            this.addChild(obj.name, obj);
            // Layout Functions
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
        this.registerScript("Form_registerOk.xfdl", function() {
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

        this.btn00_onclick = function(obj,e) //메인으로 이동하기 버튼
        {
        	var divUrl = "form::Form_shopMain.xfdl";
        	this.parent.parent.fv_setUrl(divUrl);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.sta01.addEventHandler("onclick",this.sta01_onclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
        };
        this.loadIncludeScript("Form_registerOk.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
