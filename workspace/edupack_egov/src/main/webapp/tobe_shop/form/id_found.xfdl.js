(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_idFound");
            this.set_titletext("아이디 찾기");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,440);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsIdFound", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PHONE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00","0","0","50%","50%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("sta00");
            obj.set_background("pink");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","sta00:-499.969","38","1000","402",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","372","19","257","55",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("아이디 찾기");
            obj.set_cssclass("WF_loginTitle");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta01","163","84","675","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("회원가입했던 이메일과 전화번호로 아이디를 찾을 수 있습니다");
            obj.set_cssclass("WF_loginText");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta02","6%","121","120","60",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("이메일");
            obj.set_cssclass("WF_loginText");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta03","60","191","120","60",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("전화번호");
            obj.set_cssclass("WF_loginText");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_login","100","282","253","68",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("아이디 찾기");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_register",null,"282","253","68","373",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("비밀번호 찾기");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_register00",null,"282","253","68","100",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("로그인하러 가기");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edtEmail","240","151","370","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("register_Edt");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb00","670","152","270","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div00_form_cmb00_innerdataset = new nexacro.NormalDataset("Div00_form_cmb00_innerdataset", obj);
            Div00_form_cmb00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">@naver.com</Col><Col id=\"datacolumn\">naver.com</Col></Row><Row><Col id=\"codecolumn\">@nate.com</Col><Col id=\"datacolumn\">nate.com</Col></Row><Row><Col id=\"codecolumn\">@kakao.com</Col><Col id=\"datacolumn\">kakao.com</Col></Row><Row><Col id=\"codecolumn\">@daum.com</Col><Col id=\"datacolumn\">daum.com</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_cmb00_innerdataset);
            obj.set_text("cmb00");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta07","630","157","24","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("@");
            obj.set_cssclass("WF_loginText");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("mEdt00","240","201","700","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_format("###-####-####");
            obj.set_type("string");
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
        this.registerScript("id_found.xfdl", function() {
        /**************************************************************************
        * include 영역
        **************************************************************************/

        /**************************************************************************
        * FORM 변수 선언 영역 (fv)
        **************************************************************************/

        /**************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        **************************************************************************/

        this.Form_idFound_onload = function(obj,e)
        {
        	//this.gfnFormOnLoad(this);
        	this.objApp = nexacro.getApplication();

        	var nHeight = this.getLayoutInfo(this.getCurrentLayoutID(), "height");
         	this.parent.parent.fnMainPageOnLoad(nHeight);

        };

        /**************************************************************************
        * CRUD 및 TRANSACTION 서비스 호출 처리
        **************************************************************************/

        /**************************************************************************
        * CALLBACK 콜백 처리부분(Transaction, Popup)
        **************************************************************************/

        this.result = "";

        this.fnCallback = function(id, errCd, errMsg){
        	if(errCd <0){
        		alert("에러 : " + errMsg);
        		return;
        	}

        	if(id == "idFound"){
        		if(this.result == 0){
        			alert("아이디 정보가 없습니다! ");
        		}
        		else{
        			alert("고객님의 아이디는 " + this.result +" 입니다.");
        		}
        		this.dsIdFound.deleteRow(0);
        	}
        }
        /**************************************************************************
        * 사용자 FUNCTION 영역
        **************************************************************************/

        this.send_urlInfo = function(divUrl)
        {
        	var objFrame = this.objApp.mainframe.VFrameSet00.UserFrame;
        	objFrame.form.fv_setUrl(divUrl);
        };
        /**************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        **************************************************************************/

        this.Div00_btn_login_onclick = function(obj,e)
        {
        	this.dsIdFound.addRow();
        	var eMail = this.Div00.form.edtEmail.value + this.Div00.form.cmb00.value
        	this.dsIdFound.setColumn(0, "USER_EMAIL", eMail);
        	this.dsIdFound.setColumn(0, "USER_PHONE", this.Div00.form.mEdt00.value);

        	var strSvcUrl = "edu/idFound.do";
        	var inData    = "in_data=dsIdFound";
        	var outData   = "";
        	var strArg    = "";

        	this.gfnTransaction("idFound", strSvcUrl, inData, outData, strArg, "fnCallback", true);

        };

        this.Div00_btn_register_onclick = function(obj,e)
        {
        	var divUrl = "form::Form_pswFound.xfdl";
        	this.send_urlInfo(divUrl);
        };

        this.Div00_btn_register00_onclick = function(obj,e)
        {
        	var divUrl = "form::Form_Login.xfdl";
        	this.send_urlInfo(divUrl)
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_idFound_onload,this);
            this.Div00.form.sta00.addEventHandler("onclick",this.Div00_sta00_onclick,this);
            this.Div00.form.btn_login.addEventHandler("onclick",this.Div00_btn_login_onclick,this);
            this.Div00.form.btn_register.addEventHandler("onclick",this.Div00_btn_register_onclick,this);
            this.Div00.form.btn_register00.addEventHandler("onclick",this.Div00_btn_register00_onclick,this);
        };
        this.loadIncludeScript("id_found.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
