(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_register");
            this.set_titletext("회원가입하기");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,780);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsRegister", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PW\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"USER_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR_MAIN\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR_DETAIL\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR_POST\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ROLE\" type=\"INT\" size=\"256\"/><Column id=\"USER_PW_CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta02","0","0","50%","50%",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("sta02");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","sta02:-270","80","541","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("보다 더 많은 즐거움을 위한 회원가입을 해주세요!");
            obj.set_cssclass("WF_loginText");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","sta02:-600",null,null,"657","3.13%","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","30","10","200","60",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("아이디");
            obj.set_cssclass("WF_loginText");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta02","30","sta00:0","200","60",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("이메일");
            obj.set_cssclass("WF_loginText");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta01","30","sta02:0","200","60",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("비밀번호");
            obj.set_cssclass("WF_loginText");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta03","30","sta01:0","200","60",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("비밀번호 확인");
            obj.set_cssclass("WF_loginText");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta04","30","sta03:5","200","60",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("이름");
            obj.set_cssclass("WF_loginText");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta05","30","sta04:0","200","60",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("전화번호");
            obj.set_cssclass("WF_loginText");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta06","30","sta05:0","200","60",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("주소");
            obj.set_cssclass("WF_loginText");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edtHomeAdd2","199","435","900","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_cssclass("register_Edt");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn00","359","edtHomeAdd2:72","482",null,null,"43",null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("회원가입하기");
            obj.set_cssclass("WF_register_Btn");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edtId","199","15","700","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("register_Edt");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edtEmail","199","75","401","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_cssclass("register_Edt");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edtPsw","199","135","900","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_password("true");
            obj.set_cssclass("register_Edt");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edtPswCheck","199","195","900","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_password("true");
            obj.set_cssclass("register_Edt");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edtName","199","259","900","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_cssclass("register_Edt");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("mEdtPhone","199","320","900","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_type("string");
            obj.set_format("###-####-####");
            obj.set_cssclass("register_Edt");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edtZipcode","199","380","140","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_cssclass("register_Edt");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edtHomeAdd1","389","380","710","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_cssclass("register_Edt");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn01","339","380","50","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_cssclass("WF_register_addr");
            obj.set_background("url(\'theme::blue/images/searchLogo.png\') no-repeat center center /contain");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta06_00","30","sta06:-5","200","60",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_text("상세주소");
            obj.set_cssclass("WF_loginText");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb00","648","75","251","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div00_form_cmb00_innerdataset = new nexacro.NormalDataset("Div00_form_cmb00_innerdataset", obj);
            Div00_form_cmb00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">@naver.com</Col><Col id=\"datacolumn\">naver.com</Col></Row><Row><Col id=\"codecolumn\">@nate.com</Col><Col id=\"datacolumn\">nate.com</Col></Row><Row><Col id=\"codecolumn\">@kakao.com</Col><Col id=\"datacolumn\">kakao.com</Col></Row><Row><Col id=\"codecolumn\">@daum.com</Col><Col id=\"datacolumn\">daum.com</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_cmb00_innerdataset);
            obj.set_text("cmb00");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta07","610","86","24","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_text("@");
            obj.set_cssclass("WF_loginText");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn02","907","15","188","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_text("아이디 중복확인");
            obj.set_cssclass("WF_register_Btn");
            this.Div00.addChild(obj.name, obj);

            obj = new WebBrowser("webPost","1119","405","60","80",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn02_00","906","75","188","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_text("이메일 적용하기");
            obj.set_cssclass("WF_register_Btn");
            this.Div00.addChild(obj.name, obj);

            obj = new Radio("Radio00","199","493","900","47",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_font("20px \"Verdana\"");
            var Div00_form_Radio00_innerdataset = new nexacro.NormalDataset("Div00_form_Radio00_innerdataset", obj);
            Div00_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">판매자</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">구매자</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Radio00_innerdataset);
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta06_00_00","20","sta06_00:3","169","60",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_text("역할");
            obj.set_cssclass("WF_loginText");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta00","sta02:-118","10","240","55",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("환영합니다");
            obj.set_cssclass("WF_loginTitle");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,780,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.Radio00","value","dsRegister","ROLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.edtId","value","dsRegister","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.edtPsw","value","dsRegister","USER_PW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.edtName","value","dsRegister","USER_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00.form.mEdtPhone","value","dsRegister","USER_PHONE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div00.form.edtZipcode","value","dsRegister","ADDR_POST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div00.form.edtHomeAdd2","value","dsRegister","ADDR_DETAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Div00.form.Radio00","acceptvaluetype","dsRegister","ROLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","Div00.form.edtPswCheck","value","dsRegister","USER_PW_CHK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","Div00.form.edtHomeAdd1","value","dsRegister","ADDR_MAIN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_register.xfdl", function() {
        /**************************************************************************
        * include 영역
        **************************************************************************/

        /**************************************************************************
        * FORM 변수 선언 영역 (fv)
        **************************************************************************/

        /**************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        **************************************************************************/

        var duplicateCertivicate = 0;
        this.Form_register_onload = function(obj,e) //alert 안 걸림
        {
        	/*this.gfnFormOnLoad(this);
        	this.objApp = nexacro.getApplication();

        	var objFrame = this.parent.parent.frames[1];
        	//var nHeight = this.getLayoutInfo(this.getCurrentLayoutID(), "height");
         	this.objFrame.form.fnMainPageOnLoad(nHeight); */

        	var nHeight = this.getLayoutInfo(this.getCurrentLayoutID(), "height");
         	this.parent.parent.fnMainPageOnLoad(nHeight);

        	this.dsRegister.addRow(); //데이터 로컬에 저장
        	this.duplicateCertivicate = 0;
        };

        //우편번호 나오고 받는 코드
        this.webPost_onusernotify = function(obj,e)
        {
        	var strPost = e.userdata;
        	trace("strPost ==> " + strPost);
        	// e.userdata==>OK!!!:::서울특별시 송파구 백제고분로36가길 9, 101 (석촌동, 스카이타워):::서울특별시 송파구 백제고분로36가길 9:::(석촌동, 스카이타워):::9, Baekjegobun-ro 36ga-gil, Songpa-gu, Seoul:::서울특별시 송파구 석촌동 58-33 스카이타워:::05614:::101
        	if (strPost.indexOf("OK!!!:::") == 0)
        	{
        		/*
        		 //e.userdata ==>(식별자 ::: 구우편번호 앞 3자리 ::: 구우편번호 뒷 3자리 :::  신규우편번호 ::: 도로명주소 ::: 지번 주소 ::: 조합형 주소여부에 따른 주소)
        		 */
        		var aAddr = strPost.split(":::");

        		/* trace("onusernotify -------------------------------------------");
        		trace("array[1]=>구우편번호 앞 3자리          ==> " +	aAddr[1] );
        		trace("array[2]=>구우편번호 뒷 3자리          ==> " +	aAddr[2] );
        		trace("array[3]=>신규우편번호                  ==> " + aAddr[3] );
        		trace("array[4]=>도로명주소                    ==> " +	aAddr[4] );
        		trace("array[5]=>지번주소                      ==> " +	aAddr[5] );
        		trace("array[6]=>조합형 주소여부에 따른 주소	==> " +	aAddr[6] );
        		trace("-------------------------------------------------------"); */

        		this.Div00.form.edtZipcode.set_value(aAddr[3]);	// 신규 우편번호
        		this.Div00.form.edtHomeAdd1.set_value(aAddr[4]);	// 도로명주소
        	}
        };


        /**************************************************************************
        * CRUD 및 TRANSACTION 서비스 호출 처리
        **************************************************************************/

        /**************************************************************************
        * CALLBACK 콜백 처리부분(Transaction, Popup)
        **************************************************************************/

        this.fn_callback = function(id, errCd, errMsg){
        	if(errCd <0){
        		alert("에러 : " + errMsg);
        		return;
        	}
        	if(id == "saveUser"){
        		alert("회원가입이 완료되었습니다!");

        		//url 변경
        		this.dsRegister.clear();
        		var divUrl = "form::Form_registerOK.xfdl";
        		this.parent.parent.fv_setUrl(divUrl);
        		//this.objApp.mainframe.VFrameSet00.UserFrame.form.fv_setUrl(divUrl);
        	}
        }
        /**************************************************************************
        * 사용자 FUNCTION 영역
        **************************************************************************/

        //공백확인영역
        this.isEmptyFields = function()
        {
        	this.gfnClearValidation(this.dsRegister);
        	this.gfnSetValidation(this.dsRegister, "USER_ID", "필수(아이디)", "required");
        	this.gfnSetValidation(this.dsRegister, "USER_PW", "비밀번호", "required");
        	this.gfnSetValidation(this.dsRegister, "USER_PW_CHK", "비밀번호 중복확인", "required");
        	this.gfnSetValidation(this.dsRegister, "USER_NAME", "이름", "required");
        	this.gfnSetValidation(this.dsRegister, "USER_EMAIL", "이메일", "required");
        	this.gfnSetValidation(this.dsRegister, "USER_PHONE", "전화번호", "required");
        	this.gfnSetValidation(this.dsRegister, "ADDR_MAIN", "주소 메인", "required");
        	this.gfnSetValidation(this.dsRegister, "ADDR_DETAIL", "세부 주소", "required");
        	this.gfnSetValidation(this.dsRegister, "ADDR_POST", "우편 번호", "required");
        	this.gfnSetValidation(this.dsRegister, "ROLE", "역할", "required");
        	// 수정된 Row만 Validation check
         	if (this.gfnValidation(this.dsRegister, "A") == false) return false;
        };


        this.fn_Duplicate = function (id, nErrorCode, sErrorMsg)
        {
        	trace(this.out_cnt);
        	if(nErrorCode < 0){ //오류가 난 경우
        		this.alert("ERROR "+ sErrorMsg);
        	}
        	if(this.out_cnt > 0){ //아이디가 중복될 경우
        		alert("사용할 수 없는 아이디 입니다");
        	}
        	else{
        		alert("사용할 수 있는 아이디 입니다");
        		this.duplicateCertivicate = 1;
        	}
        };
        /**************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        **************************************************************************/
        this.Div00_btn00_onclick = function(obj,e)
        {
        	if(this.duplicateCertivicate == 0) //아이디가 중복이라면
        	{
        		alert("아이디 중복체크를 해야합니다!");
        		return ;
        	}

        	if(this.isEmptyFields() == false){
        		return ;
        	}

        	//저장 매커니즘
        	if(this.Div00.form.edtPsw.value != this.Div00.form.edtPswCheck.value){
        		alert("비밀번호가 일치하지 않습니다!");
        		return ;
        	}

        // 	if(this.isEmptyFields() == false){ // 트랜젝션이 돌지 않아야 함
        // 		alert("모든 칸에 빈칸이 없어야 합니다!");
        // 		return ;
        // 	}


        	//트랜젝션
        	var strSvcUrl = "edu/saveUser.do";
        	var inData    = "saveUserData=dsRegister:U";
        	var outData   = "";
        	var strArg    = "";
        	this.gfnTransaction("saveUser", strSvcUrl, inData, outData, strArg, "fn_callback", true);


        	//this.objApp.mainframe.VFrameSet00.UserFrame.form.fv_setUrl(divUrl);

        };

        this.Div00_btn01_onclick = function(obj,e)
        {
        	this.gfnPostSearchDaum(this.Div00.form.webPost);
        };

        //이메일 저장 매커니즘
        this.Div00_btn02_00_onclick = function(obj,e)
        {
        	var sEmail = this.Div00.form.edtEmail.value + this.Div00.form.cmb00.value;
        	this.dsRegister.setColumn(this.dsRegister.rowposition, "USER_EMAIL", sEmail);
        	alert("적용되었습니다");
        };


        this.out_cnt = 0;
        this.Div00_btn02_onclick = function(obj,e) //중복체크
        {
        	if(this.Div00.form.edtId.value == null){
        	alert("아이디 칸을 비워둘 수 없습니다! ");
        	return;
        	}

        	var strSvcUrl = "edu/getIdChk.do";
        	var inData    = "";
        	var outData   = "";
        	var strArg    = "idRegister="+this.Div00.form.edtId.value;

        	this.gfnTransaction("getIdChk", strSvcUrl, inData, outData, strArg, "fn_Duplicate", true);
        };



        this.Div00_edtId_canchange = function(obj,e)
        {
        	this.duplicateCertivicate = 0; // 아이디 변경이 있습니다
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_register_onload,this);
            this.sta01.addEventHandler("onclick",this.sta01_onclick,this);
            this.Div00.form.btn00.addEventHandler("onclick",this.Div00_btn00_onclick,this);
            this.Div00.form.edtId.addEventHandler("canchange",this.Div00_edtId_canchange,this);
            this.Div00.form.edtZipcode.addEventHandler("onchanged",this.Div00_edtZipcode_onchanged,this);
            this.Div00.form.btn01.addEventHandler("onclick",this.Div00_btn01_onclick,this);
            this.Div00.form.btn02.addEventHandler("onclick",this.Div00_btn02_onclick,this);
            this.Div00.form.webPost.addEventHandler("onusernotify",this.webPost_onusernotify,this);
            this.Div00.form.btn02_00.addEventHandler("onclick",this.Div00_btn02_00_onclick,this);
            this.Div00.form.Radio00.addEventHandler("onitemchanged",this.Div00_Radio00_onitemchanged,this);
            this.sta00.addEventHandler("onclick",this.Div00_sta00_onclick,this);
        };
        this.loadIncludeScript("Form_register.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
