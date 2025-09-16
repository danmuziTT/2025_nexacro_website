(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_myPage");
            this.set_titletext("마이페이지 (로그인 후 이용가능)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,680);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUpdateUser", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PW\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"USER_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR_MAIN\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR_DETAIL\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR_POST\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("getUserOrder", this);
            obj._setContents("<ColumnInfo><Column id=\"ORDER_NO\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_AMOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("getUserOrderDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"ORDER_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_OPTION\" type=\"STRING\" size=\"256\"/><Column id=\"OPTION_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"OPTION_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserOrder", this);
            obj._setContents("<ColumnInfo><Column id=\"ORDER_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_OPTION\" type=\"STRING\" size=\"256\"/><Column id=\"OPTION_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OPTION_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"OPTION_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("Tab00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_tabposition("top");
            obj.set_tabjustify("true");
            obj.set_selectedtabbuttonheight("60");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("주문내역");
            this.Tab00.addChild(obj.name, obj);

            obj = new ListView("ListView00","0","50",null,"529","0",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsUserOrder");
            obj.set_scrollbartype("none none");
            obj.set_scrolltype("none");
            obj._setContents("<Formats><Format id=\"default\"><Band id=\"body\" width=\"100%\" height=\"150\"><Cell id=\"Cell00\" left=\"148\" top=\"40\" width=\"120\" height=\"30\" text=\"주문번호\" font=\"15px &quot;Malgun Gothic&quot;\" border=\"0px\"/><Cell id=\"Cell01\" left=\"273\" top=\"40\" width=\"200\" height=\"30\" text=\"bind:ORDER_NO\" font=\"15px &quot;Malgun Gothic&quot;\" border=\"0px\"/><Cell id=\"Cell04\" left=\"148\" top=\"75\" width=\"120\" height=\"30\" text=\"상품명\" font=\"15px &quot;Malgun Gothic&quot;\" border=\"0px\"/><Cell id=\"Cell05\" left=\"273\" top=\"75\" width=\"315\" height=\"30\" text=\"bind:PRO_NAME\" font=\"15px &quot;Malgun Gothic&quot;\" border=\"0px\"/><Cell id=\"Cell08\" left=\"148\" top=\"110\" width=\"120\" height=\"30\" text=\"옵션명\" font=\"15px &quot;Malgun Gothic&quot;\" border=\"0px\"/><Cell id=\"Cell09\" left=\"273\" top=\"110\" width=\"315\" height=\"30\" text=\"bind:OPTION_NAME\" font=\"15px &quot;Malgun Gothic&quot;\" border=\"0px\"/><Cell id=\"Cell11\" left=\"598\" top=\"110\" width=\"180\" height=\"30\" text=\"expr:OPTION_NUMBER + &quot; 개&quot;\" font=\"15px &quot;Malgun Gothic&quot;\" border=\"0px\"/><Cell id=\"Cell13\" left=\"818\" top=\"110\" width=\"180\" height=\"30\" text=\"expr:&quot;₩ &quot;+OPTION_PRICE\" font=\"15px &quot;Malgun Gothic&quot;\" border=\"0px\"/><Cell id=\"Cell15\" left=\"10\" top=\"5\" width=\"240\" height=\"30\" text=\"expr:STATUS==&quot;0&quot;?&quot;결제완료&quot;:STATUS==&quot;1&quot;?&quot;배송준비&quot;:STATUS==&quot;2&quot;?&quot;배송접수완료&quot;:STATUS==&quot;3&quot;?&quot;취소접수&quot;:STATUS==&quot;4&quot;?&quot;취소완료&quot;:STATUS==&quot;5&quot;?&quot;교환접수&quot;:&quot;교환완료&quot;\" font=\"15px &quot;Malgun Gothic&quot;\" border=\"0px\"/><Cell id=\"Cell02\" left=\"9\" top=\"35\" width=\"131\" height=\"108\" displaytype=\"imagecontrol\" imagestretch=\"fixaspectratio\" background=\"url(&apos;theme::blue/images/takuhai_daibiki_card.png&apos;) no-repeat center center /contain\"/><Cell id=\"Cell03\" left=\"872\" top=\"8\" width=\"157\" height=\"65\" displaytype=\"buttoncontrol\" border=\"0px\" text=\"교환신청하기\"/><Cell id=\"Cell06\" left=\"1082\" top=\"8\" width=\"157\" height=\"65\" displaytype=\"buttoncontrol\" border=\"0px\" text=\"취소신청하기\"/></Band></Format></Formats>");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta00","3","9","502","29",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("00 님의 주문내역입니다");
            obj.set_font("15px bold Verdana");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("나의 정보");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("sta01_00","0","0","50.00%","54.93%",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("19");
            obj.set_visible("false");
            obj.set_text("");
            obj.set_background("pink");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta00","28","30",null,"60","sta01_00:-100",null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("이름");
            obj.set_cssclass("WF_loginText");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta01","28","94",null,"60","sta01_00:-181",null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("기존 비밀번호");
            obj.set_cssclass("WF_loginText");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta02","28","158",null,"60","sta01_00:-181",null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_text("신규 비밀번호");
            obj.set_cssclass("WF_loginText");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta03","28","sta01_00:-118.01600000000002","201","60",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_text("신규비밀번호 확인");
            obj.set_cssclass("WF_loginText");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta04","28","286",null,"60","sta01_00:-100",null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_text("이메일");
            obj.set_cssclass("WF_loginText");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta05","28","sta01_00:9.98399999999998","72","60",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("5");
            obj.set_text("폰번호");
            obj.set_cssclass("WF_loginText");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta06","28","sta01_00:73.98399999999998","129","60",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("6");
            obj.set_text("기본 주소지");
            obj.set_cssclass("WF_loginText");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn00","sta01_00:-149","542","289","55",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("7");
            obj.set_text("수정된 정보 저장하기");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("edt00","sta01_00:-300","40","890",null,null,"sta01_00:-80",null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("8");
            obj.set_cssclass("register_Edt");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("oldid","sta01_00:-300","104","890","40",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("9");
            obj.set_password("true");
            obj.set_cssclass("register_Edt");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00","sta01_00:-300","168","890","40",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("10");
            obj.set_password("true");
            obj.set_cssclass("register_Edt");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_00","sta01_00:-300","232","890","40",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("11");
            obj.set_password("true");
            obj.set_cssclass("register_Edt");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_00_00","sta01_00:-300","296","890","40",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("12");
            obj.set_password("false");
            obj.set_cssclass("register_Edt");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("edtHomeAdd2","sta01_00:-300","466","890","40",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("13");
            obj.set_cssclass("register_Edt");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("edtZipcode","sta01_00:-300","411","140","40",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("14");
            obj.set_cssclass("register_Edt");
            obj.set_enable("false");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("edtHomeAdd1","sta01_00:-110","410","700","40",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("15");
            obj.set_cssclass("register_Edt");
            obj.set_enable("false");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn01","sta01_00:-160","410","50","40",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("16");
            obj.set_cssclass("register_Edt");
            obj.set_background("url(\'theme::blue/images/searchLogo.png\') no-repeat center center /contain");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new WebBrowser("webPost","1240","370","40","80",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("17");
            obj.set_visible("false");
            obj.set_cssclass("register_Edt");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new MaskEdit("mEdt00","sta01_00:-300","360","890","40",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("18");
            obj.set_format("###-####-####");
            obj.set_type("string");
            obj.set_cssclass("register_Edt");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","50.00%","50%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_visible("false");
            obj.set_text("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Tab00.Tabpage1.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage1.form,function(p){});
            this.Tab00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage2.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage2.form,function(p){});
            this.Tab00.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,680,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","Tab00.Tabpage2.form.edt00_00_00_00_00","value","gdsUserInfo","USER_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","Tab00.Tabpage2.form.mEdt00","value","gdsUserInfo","USER_PHONE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Tab00.Tabpage2.form.edtZipcode","value","gdsUserInfo","ADDR_POST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Tab00.Tabpage2.form.edtHomeAdd1","value","gdsUserInfo","ADDR_MAIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Tab00.Tabpage2.form.edtHomeAdd2","value","gdsUserInfo","ADDR_DETAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Tab00.Tabpage2.form.edt00","value","gdsUserInfo","USER_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("User_myPage.xfdl", function() {
        // /**************************************************************************
        // * include 영역
        // **************************************************************************/
        //
        // /**************************************************************************
        // * FORM 변수 선언 영역 (fv)
        // **************************************************************************/
        //
        // /**************************************************************************
        // * FORM EVENT 영역(onload, onbeforeclose)
        // **************************************************************************/
        //
        this.Form_myPage_onload = function(obj,e) //사이즈 변경
        {
        	//this.gfnFormOnLoad(this);
        	this.objApp = nexacro.getApplication();

        	var user_id = this.objApp.gdsUserInfo.getColumn(0, "USER_ID");
        	this.Tab00.Tabpage1.form.sta00.set_text(this.objApp.gdsUserInfo.getColumn(0, "USER_NAME") +" 님의 주문내역입니다.");

        	var strSvcUrl = "edu/getUserMyOrder.do";
        	var inData    = "";
        	var outData   = "getUserOrder=out_emp";
        	var strArg    = "user_id="+user_id;
        	this.gfnTransaction("getUserMyOrder", strSvcUrl, inData, outData, strArg, "fnCallback", true);
         };
        // /**************************************************************************
        // * CRUD 및 TRANSACTION 서비스 호출 처리
        // **************************************************************************/

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

        		this.Tab00.Tabpage2.form.edtZipcode.set_value(aAddr[3]);	// 신규 우편번호
        		this.Tab00.Tabpage2.form.edtHomeAdd1.set_value(aAddr[4]);	// 도로명주소
        	}
        };
        // /**************************************************************************
        // * CALLBACK 콜백 처리부분(Transaction, Popup)
        // **************************************************************************/
        //
        this.fnCallback = function(id, nErrorCode, sErrorMsg) //트랜젝션 콜백
        {
        	if(nErrorCode < 0){ //오류가 난 경우
        		this.alert("ERROR"+ sErrorMsg);
        		return ;
        	}
        	if(id == "getUserMyOrder"){
        		var user_id = this.objApp.gdsUserInfo.getColumn(0, "USER_ID"); //user_id 문제 X
        		var strSvcUrl = "edu/getUserOrderMyDetail.do";
        		var inData    = "";
        		var outData   = "getUserOrderDetail=out_emp";
        		var strArg    = "user_id="+user_id;
        		this.gfnTransaction("getUserOrderMyDetail", strSvcUrl, inData, outData, strArg, "fnCallback", true);
        	}
        	if(id == "getUserOrderMyDetail"){
        		this.dsUserOrder.copyData(this.getUserOrderDetail);
        		//this.dsUserOrder.addColumn("STATUS");
        		this.dsUserOrder.addColumn("PRO_NAME");
        		this.dsUserOrder.addColumn("OPTION_NAME");

        		for(i = 0; i <this.dsUserOrder.rowcount; i++){
        // 			for(j = 0; j < this.getUserOrderDetail.rowcount; j++){
        // 				if(this.dsUserOrder.getColumn(i, "ORDER_NO") == this.getUserOrderDetail.getColumn(j, "ORDER_NO")){
        // 					this.dsUserOrder.setColumn(i, "STATUS",this.getUserOrder.getColumn(j, "STATUS"));;
        // 				}
        // 			}
        			for(j = 0; j < this.objApp.gdsProInfo.rowcount; j ++){
        				if(this.dsUserOrder.getColumn(i, "PRO_CODE") == this.objApp.gdsProInfo.getColumn(j, "PRO_CODE")){
        					this.dsUserOrder.setColumn(i, "PRO_NAME", this.objApp.gdsProInfo.getColumn(j, "PRO_NAME"));
        				}
        			}
        			for(j = 0; j < this.objApp.gdsProOption.rowcount; j ++){
        				if(this.dsUserOrder.getColumn(i, "PRO_CODE") == this.objApp.gdsProOption.getColumn(j, "PRO_CODE") && this.dsUserOrder.getColumn(i, "PRO_OPTION") == this.objApp.gdsProOption.getColumn(j, "PRO_OPTION")){
        					this.dsUserOrder.setColumn(i, "OPTION_NAME", this.objApp.gdsProOption.getColumn(j, "OPTION_NAME"));
        				}
        			}
        		}

        		//this.dsUpdateUser.copyData(this.objApp.gdsUserInfo);

        		var nSize = this.dsUserOrder.rowcount * 150;
        		this.Tab00.Tabpage1.form.ListView00.set_height(nSize);
        		this.Tab00.set_height(nSize + 110);
        		this.parent.parent.fnMainPageOnLoad(nSize + 120);
        	}

        	if(id == "changeBuyStatus"){
        		alert("교환신청이 완료되었습니다.");
        		return ;
        	}
        	if(id == "cancleBuyStatus"){
        		alert("취소신청이 완료되었습니다.");
        		return ;
        	}
        	if(id =="updateUserData"){
        		alert("업데이트가 완료되었습니다!");
        		this.objApp.gdsUserInfo.setColumn(0,"USER_PW",this.dsUpdateUser.getColumn(0, "USER_PW"));
        		this.objApp.gdsUserInfo.setColumn(0,"USER_NAME",this.dsUpdateUser.getColumn(0, "USER_NAME"));
        		this.objApp.gdsUserInfo.setColumn(0,"USER_EMAIL",this.dsUpdateUser.getColumn(0, "USER_EMAIL"));
        		this.objApp.gdsUserInfo.setColumn(0,"USER_PHONE",this.dsUpdateUser.getColumn(0, "USER_PHONE"));
        		this.objApp.gdsUserInfo.setColumn(0,"ADDR_MAIN",this.dsUpdateUser.getColumn(0, "ADDR_MAIN"));
        		this.objApp.gdsUserInfo.setColumn(0,"ADDR_DETAIL",this.dsUpdateUser.getColumn(0, "ADDR_DETAIL"));
        		this.objApp.gdsUserInfo.setColumn(0,"ADDR_POST",this.dsUpdateUser.getColumn(0, "ADDR_POST"));

        		this.dsUpdateUser.deleteRow(0);
         }
         }
        // /**************************************************************************
        // * 사용자 FUNCTION 영역
        // **************************************************************************/

        this.isEmptyFields = function()
        {
        	this.gfnClearValidation(this.dsUpdateUser);
        	this.gfnSetValidation(this.dsUpdateUser, "USER_PW", "비밀번호", "required");
        	this.gfnSetValidation(this.dsUpdateUser, "USER_NAME", "이름", "required");
        	this.gfnSetValidation(this.dsUpdateUser, "USER_EMAIL", "이메일", "required");
        	this.gfnSetValidation(this.dsUpdateUser, "USER_PHONE", "전화번호", "required");
        	this.gfnSetValidation(this.dsUpdateUser, "ADDR_MAIN", "주소 메인", "required");
        	this.gfnSetValidation(this.dsUpdateUser, "ADDR_DETAIL", "세부 주소", "required");
        	this.gfnSetValidation(this.dsUpdateUser, "ADDR_POST", "우편 번호", "required");
        	// 수정된 Row만 Validation check
         	if (this.gfnValidation(this.dsUpdateUser, "U") == false) return false;
        };
        // /**************************************************************************
        // * 각 COMPONENT 별 EVENT 영역
        // **************************************************************************/
        //
        this.Tab00_onchanged = function(obj,e)
        {
        	var tabValue = e.postindex;
        	var nSize = 0;
        	switch(tabValue){
        		case 0:
        			nSize = this.dsUserOrder.rowcount * 150;
        			this.Tab00.Tabpage1.form.ListView00.set_height(nSize);
        			this.Tab00.set_height(nSize + 110);
        			this.parent.parent.fnMainPageOnLoad(nSize + 110);
        			break ;
        		case 1:
        			nSize = 680
        			this.Tab00.set_height(nSize);
        			this.parent.parent.fnMainPageOnLoad(nSize + 60);
        			break ;
        		default:
        			break ;
        		}
        };

        this.Tab00_Tabpage1_ListView00_oncellclick = function(obj,e) //교환&취소신청하기
        {
        	if(e.cellid == "Cell03"){
        		var po = this.dsUserOrder.rowposition
        		var poSta = this.dsUserOrder.getColumn(po, "STATUS");
        		switch(poSta){
        			case 2:
        				alert("배송접수중이며, 교환신청이 불가합니다");
        				break;
        			case 3:
        				alert("이미 취소신청이 완료되었습니다");
        				break;
        			case 4:
        				alert("취소완료된 주문건입니다");
        				break;
        			case 5:
        				alert("이미 교환신청이 완료되었습니다");
        				break;
        			case 6:
        				alert("이미 교환되었습니다");
        				break;
        			default :
        				this.dsUserOrder.setColumn(po, "STATUS", "5");
        				var strSvcUrl = "edu/changeBuyStatus.do";
        				var inData    = "in_data=dsUserOrder:U";
        				var outData   = "";
        				var strArg    = ""
        				this.gfnTransaction("changeBuyStatus", strSvcUrl, inData, outData, strArg, "fnCallback", true);
        		}
        	}
        	else if(e.cellid == "Cell06"){
        		var po = this.dsUserOrder.rowposition
        		var poSta = this.dsUserOrder.getColumn(po, "STATUS");
        		switch(poSta){
        			case 2:
        				alert("배송접수중이며, 취소신청이 불가합니다");
        				break;
        			case 3:
        				alert("이미 취소신청이 완료되었습니다");
        				break;
        			case 4:
        				alert("취소완료된 주문건입니다");
        				break;
        			case 5:
        				alert("이미 교환신청이 완료되었습니다");
        				break;
        			case 6:
        				alert("이미 교환되었습니다");
        				break;
        			default :
        				this.dsUserOrder.setColumn(po, "STATUS", "3");
        				var strSvcUrl = "edu/cancleBuyStatus.do";
        				var inData    = "in_data=dsUserOrder:U";
        				var outData   = "";
        				var strArg    = ""
        				this.gfnTransaction("cancleBuyStatus", strSvcUrl, inData, outData, strArg, "fnCallback", true);
        		}
        	}
        };

        this.Tab00_Tabpage2_btn00_onclick = function(obj,e)
        {
        	var user_id = this.objApp.gdsUserInfo.getColumn(0, "USER_ID");
        	if(this.Tab00.Tabpage2.form.oldid.value != this.objApp.gdsUserInfo.getColumn(0, "USER_PW")){
        		alert("기존 비밀번호가 일치하지 않습니다!");
        		return ;
        	}
        	if(this.Tab00.Tabpage2.form.edt00_00_00.value != this.Tab00.Tabpage2.form.edt00_00_00_00.value){
        		alert("신규 비밀번호 확인이 일치하지 않습니다! ");
        		return;
        	}

        	this.dsUpdateUser.addRow();
        	this.dsUpdateUser.setColumn(0, "USER_ID", user_id);
        	this.dsUpdateUser.setColumn(0, "USER_NAME", this.Tab00.Tabpage2.form.edt00.value);
        	this.dsUpdateUser.setColumn(0, "USER_PW", this.Tab00.Tabpage2.form.edt00_00_00_00.value);
        	this.dsUpdateUser.setColumn(0, "USER_EMAIL", this.Tab00.Tabpage2.form.edt00_00_00_00_00.value);
        	this.dsUpdateUser.setColumn(0, "USER_PHONE", this.Tab00.Tabpage2.form.mEdt00.value);
        	this.dsUpdateUser.setColumn(0, "ADDR_MAIN", this.Tab00.Tabpage2.form.edtHomeAdd1.value);
        	this.dsUpdateUser.setColumn(0, "ADDR_DETAIL", this.Tab00.Tabpage2.form.edtHomeAdd2.value);
        	this.dsUpdateUser.setColumn(0, "ADDR_POST", this.Tab00.Tabpage2.form.edtZipcode.value);

        		if(this.isEmptyFields() == false){
        		return ;
        	}

        	var strSvcUrl = "edu/updateUserData.do";
        	var inData    = "in_data=dsUpdateUser";
        	var outData   = "";
        	var strArg    = ""
        	this.gfnTransaction("updateUserData", strSvcUrl, inData, outData, strArg, "fnCallback", true);

         };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_myPage_onload,this);
            this.Tab00.addEventHandler("onchanged",this.Tab00_onchanged,this);
            this.Tab00.Tabpage1.form.ListView00.addEventHandler("oncellclick",this.Tab00_Tabpage1_ListView00_oncellclick,this);
            this.Tab00.Tabpage2.form.sta00.addEventHandler("onclick",this.Tab00_Tabpage2_sta00_onclick,this);
            this.Tab00.Tabpage2.form.btn00.addEventHandler("onclick",this.Tab00_Tabpage2_btn00_onclick,this);
            this.Tab00.Tabpage2.form.btn01.addEventHandler("onclick",this.Div00_btn01_onclick,this);
            this.Tab00.Tabpage2.form.webPost.addEventHandler("onusernotify",this.webPost_onusernotify,this);
        };
        this.loadIncludeScript("User_myPage.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
