(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form_buyInfo");
            this.set_titletext("구매하기 버튼 누르면 나오는 창 ");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBuyDataDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"ORDER_NO\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVE_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVE_PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"DELIVERY_REQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_OPTION\" type=\"STRING\" size=\"256\"/><Column id=\"OPTION_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"OPTION_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBuyData", this);
            obj._setContents("<ColumnInfo><Column id=\"ORDER_NO\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"HOW_TO_PAY\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new ImageViewer("ImageViewer00","700","40","550","330",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("ImageViewer00");
            obj.set_stretch("fixaspectratio");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","36","40","159","60",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("이름");
            obj.set_cssclass("pro_onePrice");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00","36","sta00:0","159","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("전화번호");
            obj.set_cssclass("pro_onePrice");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","36","sta00_00:0","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("이메일");
            obj.set_cssclass("pro_onePrice");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","0","220",null,"10","ImageViewer00:0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("#186146");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","36","sta03:0","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("받는 사람 이름");
            obj.set_cssclass("pro_onePrice");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","36","sta02:70","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("배송지");
            obj.set_cssclass("pro_onePrice");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHomeAdd2","175","415","510","50",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("register_Edt");
            this.addChild(obj.name, obj);

            obj = new Edit("edtZipcode","175","360","130","50",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("register_Edt");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHomeAdd1","355","360","330","50",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("register_Edt");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","305","360","50","50",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("WF_register_addr");
            obj.set_background("url(\'theme::blue/images/searchLogo.png\') no-repeat center center /contain");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("webPost","1200","510","60","80",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00","175","235","510","50",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Static("sta06","36","480","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("요청사항");
            obj.set_cssclass("pro_onePrice");
            this.addChild(obj.name, obj);

            obj = new Edit("edt01","175","480","510","130",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Static("sta05","702","ImageViewer00:5","508","52",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("구매하기 물건 이름");
            obj.set_cssclass("pro_onePrice");
            this.addChild(obj.name, obj);

            obj = new Static("sta07","700","sta05:-2","381","48",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("옵션");
            obj.set_font("20px Verdana");
            obj.set_fittocontents("none");
            this.addChild(obj.name, obj);

            obj = new Static("sta08","700","sta07:10","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("총 결제가격");
            obj.set_cssclass("pro_onePrice");
            this.addChild(obj.name, obj);

            obj = new Static("sta09","sta08:20","sta07:10","250","60",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("sta09");
            obj.set_cssclass("pro_onePrice");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin00","sta07:10","425","159","60",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta04_00","36","300","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("전화번호");
            obj.set_cssclass("pro_onePrice");
            this.addChild(obj.name, obj);

            obj = new Edit("edtZipcode00","175","300","510","50",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("register_Edt");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","58","652","265","57",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("결제하기");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_00","175","45","510","50",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00","175","105","510","50",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_00","175","165","510","50",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00","368","652","265","57",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("뒤로가기");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_00","700","560","159","60",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("결제방법");
            obj.set_cssclass("pro_onePrice");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","900","560","363","120",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_font("18px/normal \"verdana\"");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">무통장입금</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">신용카드</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">애스크로</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt00_00","value","gdsUserInfo","USER_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt00_00_00","value","gdsUserInfo","USER_PHONE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt00_00_00_00","value","gdsUserInfo","USER_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Radio00","value","dsBuyData","HOW_TO_PAY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_buyInfo.xfdl", function() {
        /**************************************************************************
        * include 영역
        **************************************************************************/

        /**************************************************************************
        * FORM 변수 선언 영역 (fv)
        **************************************************************************/

        /**************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        **************************************************************************/

        var code = 0 ;
        var sale = 0;
        var price = 0;
        var addPrice = 0;
        var nOtionNum = 0;

        this.form_buyInfo_onload = function(obj,e)
        {
        	//this.gfnFormOnLoad(this);
        	this.objApp = nexacro.getApplication();

        	var nHeight = this.getLayoutInfo(this.getCurrentLayoutID(), "height");
        	this.parent.parent.fnMainPageOnLoad(nHeight);

        	var row = this.objApp.gdsProInfo.rowposition;

        	var proCode = this.objApp.gdsProInfo.getColumn(row, "PRO_CODE"); //PRO_CODE 열
        	var code = this.objApp.gdsProInfo.getColumn(row, "PRO_NAME"); // PRO_NAME 열
            this.price = this.objApp.gdsProInfo.getColumn(row, "HOW_MUCH"); // HOW_MUCH 열
            this.sale = this.objApp.gdsProInfo.getColumn(row, "SALE_PERCENT"); // SALE_PERCENT 열

        	var row2 = this.objApp.gdsProOption.rowposition;
        	var opCode = this.objApp.gdsProOption.getColumn(row2, "PRO_OPTION");
            var op = this.objApp.gdsProOption.getColumn(row2, "OPTION_NAME"); // OPTION_NAME 열
        	this.addPrice = this.objApp.gdsProOption.getColumn(row2, "OPTION_ADD_PRICE");
        	this.nOtionNum = this.objApp.gdsProOption.getColumn(row2,"OPTION_NUMBER");

        	var img = this.objApp.gdsProInfo.getColumn(row, "SERVER_IMG");
        	if(img != null){
        		this.ImageViewer00.set_image(img);
        		this.ImageViewer00.set_text("");
        	}
        	else{
        		this.ImageViewer00.set_text("이미지 불러오기 실패");
        	}

        	this.sta05.set_text(code);
        	this.sta07.set_text(op);
        	this.sta09.set_text(0);

        	this.dsBuyData.addRow();
        	this.dsBuyData.setColumn(0, "USER_ID", this.objApp.gdsUserInfo.getColumn(0,"USER_ID"));

        	this.dsBuyDataDetail.addRow();
        	this.dsBuyDataDetail.setColumn(0,"USER_ID",this.objApp.gdsUserInfo.getColumn(0,"USER_ID"));
        	this.dsBuyDataDetail.setColumn(0,"BUYER_NAME",this.edt00_00.value);
        	this.dsBuyDataDetail.setColumn(0,"BUYER_PHONE",this.edt00_00_00.value);

        	this.dsBuyDataDetail.setColumn(0,"PRO_CODE",proCode);
        	this.dsBuyDataDetail.setColumn(0,"PRO_OPTION",opCode);
        };
        /**************************************************************************
        * CRUD 및 TRANSACTION 서비스 호출 처리
        **************************************************************************/

        /**************************************************************************
        * CALLBACK 콜백 처리부분(Transaction, Popup)
        **************************************************************************/

        this.fn_callback = function(id, nErrorCode, sErrorMsg)
        {
        	if(nErrorCode <0) {
        		this.alert("error" + sErrorMsg);
        		return;
        	}

        	if(id == "getOrderNo"){ //주문번호
        		var k = parseInt(this.out_cnt, 10) + 1; //out_cnt == 값을 받아오지않음
        		var orderNo = "0000000" + k;
        		orderNo = orderNo.slice(-7);

        		this.dsBuyDataDetail.setColumn(0,"ORDER_NO", orderNo);
        		this.dsBuyData.setColumn(0,"ORDER_NO", "00000"+k);
        		this.dsBuyDataDetail.setColumn(0,"STATUS", 0);
        		this.dsBuyData.setColumn(0,"PAY_STATUS", 0);

        		var strSvcUrl = "edu/getUserOrder.do";
        		var inData    = "in_data=dsBuyData:U";
        		var outData   = "";
        		var strArg    = "";
        		this.gfnTransaction("getUserOrder", strSvcUrl, inData, outData, strArg, "fn_callback", true);
        	}

        	if(id == "getUserOrder"){
        		this.dsBuyDataDetail.setColumn(0,"RECEIVE_NAME", this.edt00.value);
        		this.dsBuyDataDetail.setColumn(0,"RECEIVE_PHONE", this.edtZipcode00.value);
        		this.dsBuyDataDetail.setColumn(0,"DELIVERY_REQUEST", this.edt01.value);
        		this.dsBuyDataDetail.setColumn(0,"STATUS", 0); //A

        		var strSvcUrl = "edu/getUserOneOrderDetail.do";
        		var inData    = "in_data=dsBuyDataDetail";
        		var outData   = "";
        		var strArg    = "";
        		this.gfnTransaction("getUserOneOrderDetail", strSvcUrl, inData, outData, strArg, "fn_callback", true);
        	}
        	if(id == "getUserOneOrderDetail"){
        		this.parent.parent.fv_setUrl("form::buy_complete.xfdl");
        	}
        };
        /**************************************************************************
        * 사용자 FUNCTION 영역
        **************************************************************************/

        this.isEmptyFields = function()
        {
            if (!this.edt00.value ||
        		!this.edt01.value ||
                !this.edtZipcode00.value ||
                !this.edtZipcode.value ||
                !this.edtHomeAdd1.value ||
                !this.edtHomeAdd2.value ||
        		!this.Radio00.value ||
                !this.Spin00.value)
            {
                return false;
            }
        };

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

        		this.edtZipcode.set_value(aAddr[3]);	// 신규 우편번호
        		this.edtHomeAdd1.set_value(aAddr[4]);	// 도로명주소
        	}
        };
        /**************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        **************************************************************************/

        this.Spin00_onchanged = function(obj,e)
        {

        	if(this.Spin00.value > this.nOtionNum){
        		alert("현재 최대로 선택 가능한 개수는 "+ this.nOtionNum +" 개 입니다");
        		this.Spin00.set_value(this.nOtionNum);
        		return ;
        	}
        	var i = this.Spin00.value;
        	var total = 0;

        	if(this.sale != 0){
        		total = ((this.price * (100 - this.sale ) / 100 )+ this.addPrice) * i
        		this.sta09.set_color("red");
        	}
        	else{
        		total = (this.price + this.addPrice) * i
        	}
        	this.sta09.set_text(total);
        	this.dsBuyDataDetail.setColumn(0,"OPTION_NUMBER", i);
        	this.dsBuyDataDetail.setColumn(0,"OPTION_PRICE", total);
        	this.dsBuyData.setColumn(0,"TOTAL_AMOUNT", total);
        };

        this.out_cnt = 0;
        this.btn00_onclick = function(obj,e) //구매하기 트랜젝션
        {

        	if(this.isEmptyFields() == false){ // 트랜젝션이 돌지 않아야 함
        		return ;
        	}
        	var addAll = "( " + this.edtZipcode.value + " ) " + this.edtHomeAdd1.value + " " + this.edtHomeAdd2.value ;
        	this.dsBuyDataDetail.setColumn(0,"RECEIVE_ADDR", addAll);

        	var strSvcUrl = "edu/getOrderNo.do";   //주문번호 가져오기
        	var inData    = "";
        	var outData   = "";
        	var strArg    = "";
        	this.gfnTransaction("getOrderNo", strSvcUrl, inData, outData, strArg, "fn_callback", true);
        };

        this.btn00_00_onclick = function(obj,e)
        {
        	alert("결제가 취소되었습니다");
        	this.parent.parent.fv_setUrl("form::form_viewOne.xfdl");
        };

        this.dsBuyData_cancolumnchange = function(obj,e)
        {
        	if(e.columnid == "OPTION_NUMBER") {
        		var nOtionNum =  this.objApp.gdsProOption.getColumn(e.row, "OPTION_NUMBER");
        		if(nOtionNum < e.newvalue){
        			alert("현재 최대로 선택 가능한 개수는 "+ nOtionNum +" 개 입니다");
        			return false;
        		}
        	}
        };



        this.Div00_btn01_onclick = function(obj,e)
        {
        	this.gfnPostSearchDaum(this.webPost);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_buyInfo_onload,this);
            this.btn01.addEventHandler("onclick",this.Div00_btn01_onclick,this);
            this.webPost.addEventHandler("onusernotify",this.webPost_onusernotify,this);
            this.Spin00.addEventHandler("onchanged",this.Spin00_onchanged,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn00_00.addEventHandler("onclick",this.btn00_00_onclick,this);
            this.sta00_01_00_00.addEventHandler("onclick",this.sta00_01_00_onclick,this);
            this.dsBuyDataDetail.addEventHandler("cancolumnchange",this.dsBuyData_cancolumnchange,this);
        };
        this.loadIncludeScript("Form_buyInfo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
