(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Mobile_Login");
            this.set_titletext("로그인");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_Login_bg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_logo","0","40",null,"75","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_Login_logo");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","50","169","60","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_Login_ID");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","50","249","60","60",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_Login_pass");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_id","115","169","315","60",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("edt_Login_ID");
            obj.set_value("TOBESOFT");
            obj.set_text("TOBESOFT");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_pw","115","249","315","60",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("edt_Login_ID");
            obj.set_password("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_save","50","329","179","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Remember me");
            obj.set_cssclass("chk_Login_idsave");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_login","110","410","260","60",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Login");
            obj.set_cssclass("btn_Login_login");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",480,768,this,function(p){});
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Mobile_Login.xfdl", function() {
        this.objApp = nexacro.getApplication();
        //로그인 버튼 선택
        this.btn_login_onclick = function(obj,e)
        {
        	var sId = this.edt_id.value;
        	var sPw = this.edt_pw.value;
        	//화면이동
        trace(this.objApp.av_WorkFrame.form.name);
        	this.objApp.av_WorkFrame.form.fn_login(sId, sPw);
        /*	this.parent.parent.fn_login(sId, sPw);*/
        	//TODO transaction
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_login.addEventHandler("onclick",this.btn_login_onclick,this);
        };
        this.loadIncludeScript("Mobile_Login.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
