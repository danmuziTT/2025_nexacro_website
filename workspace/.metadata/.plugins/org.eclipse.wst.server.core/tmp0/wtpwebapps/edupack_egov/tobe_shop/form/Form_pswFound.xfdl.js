(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_PswFound");
            this.set_titletext("비번 찾기");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,530);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPswFound", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PHONE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00","0","0","50%","50%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("sta00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","sta00:-499.969","44","1000","486",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","348","4","305","65",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("비밀번호 찾기");
            obj.set_cssclass("WF_loginTitle");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta01","154","sta00:20","692","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("이메일과 아이디, 전화번호를 통해 비밀번호를 찾을 수 있습니다");
            obj.set_cssclass("WF_loginText");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta02","60","121","120","60",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("아이디");
            obj.set_cssclass("WF_loginText");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt00",null,"141","700","40","70",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta02_00","6.00%","177","120","60",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("이메일");
            obj.set_cssclass("WF_loginText");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta03","50","247","120","60",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("전화번호");
            obj.set_cssclass("WF_loginText");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_login","100","339","253","68",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("아이디 찾기");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_register",null,"339","253","68","373",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("비밀번호 찾기");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_register00",null,"339","253","68","100",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("로그인하러 가기");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edtEmail","230","197","370","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_cssclass("register_Edt");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb00","660","198","270","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div00_form_cmb00_innerdataset = new nexacro.NormalDataset("Div00_form_cmb00_innerdataset", obj);
            Div00_form_cmb00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">@naver.com</Col><Col id=\"datacolumn\">naver.com</Col></Row><Row><Col id=\"codecolumn\">@nate.com</Col><Col id=\"datacolumn\">nate.com</Col></Row><Row><Col id=\"codecolumn\">@kakao.com</Col><Col id=\"datacolumn\">kakao.com</Col></Row><Row><Col id=\"codecolumn\">@daum.com</Col><Col id=\"datacolumn\">daum.com</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_cmb00_innerdataset);
            obj.set_text("cmb00");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta07","620","203","24","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("@");
            obj.set_cssclass("WF_loginText");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("mEdt00","230","257","700","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_format("###-####-####");
            obj.set_type("string");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,530,this,function(p){});
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
        this.registerScript("Form_pswFound.xfdl", function() {
        /**************************************************************************
        * include 영역
        **************************************************************************/

        /**************************************************************************
        * FORM 변수 선언 영역 (fv)
        **************************************************************************/

        /**************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        **************************************************************************/

        this.Form_PswFound_onload = function(obj,e)
        {
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

        	if(id == "pswFound"){
        		if(this.result == 0){
        			alert("비밀번호 정보가 일치하지 않습니다!");
        		}
        		else{
        			alert("고객님의 비밀번호는 " + this.result +" 입니다.");
        		}
        		this.dsPswFound.deleteRow(0);
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


        this.Div00_btn_register_onclick = function(obj,e)
        {
        	this.dsPswFound.addRow();
        	var eMail = this.Div00.form.edtEmail.value + this.Div00.form.cmb00.value;
        	this.dsPswFound.setColumn(0, "USER_ID", this.Div00.form.edt00.value);
        	this.dsPswFound.setColumn(0, "USER_EMAIL", eMail);
        	this.dsPswFound.setColumn(0, "USER_PHONE", this.Div00.form.mEdt00.value);

        	var strSvcUrl = "edu/pswFound.do";
        	var inData    = "in_data=dsPswFound";
        	var outData   = "";
        	var strArg    = "";

        	this.gfnTransaction("pswFound", strSvcUrl, inData, outData, strArg, "fnCallback", true);

        };

        this.Div00_btn_register00_onclick = function(obj,e)
        {
        	var divUrl = "form::Form_Login.xfdl";
        	this.send_urlInfo(divUrl)
        };

        this.Div00_btn_login_onclick = function(obj,e)
        {
        	var divUrl = "form::id_found.xfdl";
        	this.send_urlInfo(divUrl)
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_PswFound_onload,this);
            this.Div00.form.sta00.addEventHandler("onclick",this.Div00_sta00_onclick,this);
            this.Div00.form.edt00.addEventHandler("onchanged",this.Div00_edt00_onchanged,this);
            this.Div00.form.btn_login.addEventHandler("onclick",this.Div00_btn_login_onclick,this);
            this.Div00.form.btn_register.addEventHandler("onclick",this.Div00_btn_register_onclick,this);
            this.Div00.form.btn_register00.addEventHandler("onclick",this.Div00_btn_register00_onclick,this);
        };
        this.loadIncludeScript("Form_pswFound.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
