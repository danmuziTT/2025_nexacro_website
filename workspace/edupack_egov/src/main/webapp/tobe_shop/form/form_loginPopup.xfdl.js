(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form_loginPopup");
            this.set_titletext("로그인 성공");
            if (Form == this.constructor)
            {
                this._setFormPosition(250,150);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta00","20","39","148","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("sta00");
            obj.set_font("16px/normal \"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","173","40","30","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("님");
            obj.set_font("16px/normal \"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","20","69","159","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("환영합니다");
            obj.set_font("16px/normal \"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","48","95","155","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("구매하러가기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",250,150,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("form_loginPopup.xfdl", function() {
        /**************************************************************************
        * include 영역
        **************************************************************************/

        /**************************************************************************
        * FORM 변수 선언 영역 (fv)
        **************************************************************************/

        /**************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        **************************************************************************/

        var sName = 0;
        this.form_loginPopup_onload = function(obj,e) //텍스트 변경 안됨 수정해야됨
        {
        	this.objApp = nexacro.getApplication();

        	this.sName = this.objApp.gdsUserInfo.getColumn(0, "USER_NAME")
        	this.sta00.set_text(this.sName);
        };
        /**************************************************************************
        * CRUD 및 TRANSACTION 서비스 호출 처리
        **************************************************************************/

        /**************************************************************************
        * CALLBACK 콜백 처리부분(Transaction, Popup)
        **************************************************************************/

        this.fnCallback = function(id, nErrorCode, sErrorMsg) //트랜젝션 콜백
        {
        	if(nErrorCode < 0){ //오류가 난 경우
        		this.alert("ERROR"+ sErrorMsg);
        		return ;
        	}

        	if(id=="userInfoCart")
        	{
        		var strSvcUrl = "edu/userInfoLike.do";
        		var inData    = "";
        		var outData   = "gdsUserLike=out_emp";
        		var strArg    = "userId="+this.objApp.gdsUserInfo.getColumn(0, "USER_ID");

        		this.gfnTransaction("userInfoLike", strSvcUrl, inData, outData, strArg, "fnCallback", true);

        	} else if (id=="userInfoLike") {
        		this.close();
        	}
        };
        /**************************************************************************
        * 사용자 FUNCTION 영역
        **************************************************************************/

        /**************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        **************************************************************************/

        this.btn00_onclick = function(obj,e)
        {
        	this.parent.parent.parent.frames[1].form.fv_setUrl("form::Form_shopMain.xfdl")
        	this.parent.parent.parent.frames[0].form.Div01_00.set_visible(true);
        	this.parent.parent.parent.frames[0].form.Div01.set_visible(false);
        	var memRole = this.objApp.gdsUserInfo.getColumn(0, "ROLE");
        	if(memRole == 0){
        		this.parent.parent.parent.frames[0].form.btn01.set_visible(true);
        	}
        	this.parent.parent.parent.frames[0].form.Div01_00.form.sta00.set_text(this.sName + " 님")
        	this.parent.parent.parent.frames[0].form.Div01_00.form.sta00.set_font("bold 15px Verdana");

        	var strSvcUrl = "edu/userInfoCart.do";
        	var inData    = "";
        	var outData   = "gdsUserCart=out_emp";
        	var strArg    = "userId="+this.objApp.gdsUserInfo.getColumn(0, "USER_ID");

        	this.gfnTransaction("userInfoCart", strSvcUrl, inData, outData, strArg, "fnCallback", true);



        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_loginPopup_onload,this);
            this.sta00.addEventHandler("onclick",this.sta00_onclick,this);
            this.sta02.addEventHandler("onclick",this.sta02_onclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
        };
        this.loadIncludeScript("form_loginPopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
