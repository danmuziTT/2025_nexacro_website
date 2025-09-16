(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form_buyinfo2");
            this.set_titletext("장바구니 > 구매 시 ");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBuyData", this);
            obj._setContents("<ColumnInfo><Column id=\"ORDER_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVE_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVE_PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"DELIVERY_REQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_OPTION\" type=\"STRING\" size=\"256\"/><Column id=\"OPTION_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"OPTION_PRICE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBuyPro", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_OPTION\" type=\"STRING\" size=\"256\"/><Column id=\"OPTION_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_OP_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"OPTION_ADD_PRICE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSendOrder", this);
            obj._setContents("<ColumnInfo><Column id=\"ORDER_NO\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"HOW_TO_PAY\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSendOrderDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"ORDER_NO\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVE_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVE_PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"DELIVERY_REQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_OPTION\" type=\"STRING\" size=\"256\"/><Column id=\"OPTION_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"OPTION_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00","36","40","159","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("이름");
            obj.set_cssclass("pro_onePrice");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00","36","sta00:0","159","60",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("전화번호");
            obj.set_cssclass("pro_onePrice");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","36","sta00_00:0","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("이메일");
            obj.set_cssclass("pro_onePrice");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","0","220",null,"10","580",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("#186146");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","36","sta03:0","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("받는 사람 이름");
            obj.set_cssclass("pro_onePrice");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","36","sta02:70","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("배송지");
            obj.set_cssclass("pro_onePrice");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHomeAdd2","175","415","510","50",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("register_Edt");
            this.addChild(obj.name, obj);

            obj = new Edit("edtZipcode","175","360","130","50",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("register_Edt");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHomeAdd1","355","360","330","50",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("register_Edt");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","305","360","50","50",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("WF_register_addr");
            obj.set_background("url(\'theme::blue/images/searchLogo.png\') no-repeat center center /contain");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("webPost","1210","250","60","80",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00","175","235","510","50",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Static("sta06","36","480","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("요청사항");
            obj.set_cssclass("pro_onePrice");
            this.addChild(obj.name, obj);

            obj = new Edit("edt01","175","480","510","130",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Static("sta04_00","36","300","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("전화번호");
            obj.set_cssclass("pro_onePrice");
            this.addChild(obj.name, obj);

            obj = new Edit("edtZipcode00","175","300","510","50",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("register_Edt");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","785","642","310","57",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("돌아가기");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_00","175","45","510","50",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00","175","105","510","50",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_00","175","165","510","50",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","sta03:0","110",null,"250","10",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_binddataset("dsBuyPro");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"133\"/><Column size=\"201\"/><Column size=\"147\"/><Column size=\"86\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"42\"/></Rows><Band id=\"head\"><Cell text=\"물품명\"/><Cell col=\"1\" text=\"옵션명\"/><Cell col=\"2\" text=\"선택개수\"/><Cell col=\"3\" text=\"가격\"/></Band><Band id=\"body\"><Cell text=\"bind:PRO_NAME\"/><Cell col=\"1\" text=\"bind:OPTION_NAME\"/><Cell col=\"2\" text=\"bind:PRO_OP_NUMBER\"/><Cell col=\"3\" text=\"bind:OPTION_ADD_PRICE\" displaytype=\"number\" maskeditformat=\"###,###\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01","701","45","159","60",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("주문내역");
            obj.set_cssclass("pro_onePrice");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00","240","640","310","57",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("결제하기");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00","700","370","159","60",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("총 결제금액");
            obj.set_cssclass("pro_onePrice");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01","920","370","319","60",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("주문내역");
            obj.set_cssclass("pro_onePrice");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_00","701","438","159","60",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("결제방법");
            obj.set_cssclass("pro_onePrice");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","897","440","363","120",null,null,null,null,null,null,this);
            obj.set_taborder("26");
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
            obj = new BindItem("item4","edt00_00","value","gdsUserInfo","USER_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edt00_00_00","value","gdsUserInfo","USER_PHONE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edt00_00_00_00","value","gdsUserInfo","USER_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Radio00","value","dsSendOrder","HOW_TO_PAY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_buyInfo_copy0.xfdl", function() {
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

        this.form_buyInfo_onload = function(obj,e)
        {
        	//this.gfnFormOnLoad(this);
        	this.objApp = nexacro.getApplication();

        	var nHeight = this.getLayoutInfo(this.getCurrentLayoutID(), "height");
        	this.parent.parent.fnMainPageOnLoad(nHeight);

        	//var xmlData = this.dsPayPro.saveXML();  // dsPayPro를 XML로 변환
        	//alert(this.dsPayPro.saveXML());
            this.dsBuyPro.loadXML(this.objApp.xmlData);

        	this.dsBuyPro.addColumn("OPTION_ADD_PRICE");
        	var total = 0;
        	var addPrice = 0;
        	var price = 0; //물품가
        	var salePer = 0;
        	var rPrice = 0; //row별 가격

        	for(var i = 0; i < this.dsBuyPro.rowcount; i++){
        		var dCode = this.dsBuyPro.getColumn(i,"PRO_CODE");
        		var dOp = this.dsBuyPro.getColumn(i,"PRO_OPTION");
        		var dNum = this.dsBuyPro.getColumn(i, "PRO_OP_NUMBER");

        		for(var j = 0; j < this.objApp.gdsProOption.rowcount; j++){ //옵션명
        			var oCode =  this.objApp.gdsProOption.getColumn(j,"PRO_CODE");
        			var oOp =  this.objApp.gdsProOption.getColumn(j,"PRO_OPTION");
        			if(dCode == oCode && dOp == oOp){
        				this.dsBuyPro.setColumn(i, "OPTION_NAME", this.objApp.gdsProOption.getColumn(j, "OPTION_NAME"));
        				addPrice =  this.objApp.gdsProOption.getColumn(j,"OPTION_ADD_PRICE");
        			}
        		}

        		for(var k = 0; k< this.objApp.gdsProInfo.rowcount; k++){ //물품명
        			var iCode = this.objApp.gdsProInfo.getColumn(k, "PRO_CODE")
        			if(dCode == iCode){
        				this.dsBuyPro.setColumn(i,"PRO_NAME", this.objApp.gdsProInfo.getColumn(k,"PRO_NAME"))
        				salePer = this.objApp.gdsProInfo.getColumn(k,"SALE_PERCENT");
        				price = this.objApp.gdsProInfo.getColumn(k,"HOW_MUCH");
        			}
        		}
        		rPrice = price * (100-salePer) /100 + addPrice;
        		this.dsBuyPro.setColumn(i, "OPTION_ADD_PRICE", rPrice);
        		total = total + rPrice;
        	}
        	this.sta00_01_01.set_text(total);

        	this.dsSendOrder.addRow();
        	this.dsSendOrder.setColumn(0,"TOTAL_AMOUNT", total);
        	//this.dsSendOrderDetail.addRow();
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

        	if(id == "getOrderNo"){ //id 잘 나옴
        		var k = parseInt(this.out_cnt, 10) + 1;
        		var orderNo = "0000000" + k;
        		orderNo = orderNo.slice(-7);

        		this.dsSendOrder.setColumn(0,"ORDER_NO", orderNo);
        		this.dsSendOrder.setColumn(0,"USER_ID", this.objApp.gdsUserInfo.getColumn(0, "USER_ID"));
        		this.dsSendOrder.setColumn(0,"PAY_STATUS", 0);

        		var strSvcUrl = "edu/getUserOrder.do";
        		var inData    = "in_data=dsSendOrder";
        		var outData   = "";
        		var strArg    = "";
        		this.gfnTransaction("getUserOrder", strSvcUrl, inData, outData, strArg, "fn_callback", true);
        	}

        	if(id == "getUserOrder"){
        		var addAll = "( " + this.edtZipcode.value + " ) " + this.edtHomeAdd1.value + " " + this.edtHomeAdd2.value ;

        		for(var i = 0; i< this.dsBuyPro.rowcount; i++){
        			this.dsSendOrderDetail.addRow();
        			var addPrice = parseFloat(this.dsBuyPro.getColumn(i, "OPTION_ADD_PRICE"), 10);
        			var optionNumber = parseInt(this.dsBuyPro.getColumn(i, "PRO_OP_NUMBER"), 10) ;

        			var totalPrice = addPrice * optionNumber;

        			this.dsSendOrderDetail.setColumn(i,"RECEIVE_ADDR", addAll);
        			this.dsSendOrderDetail.setColumn(i,"ORDER_NO", this.dsSendOrder.getColumn(0,"ORDER_NO"));
        			this.dsSendOrderDetail.setColumn(i,"USER_ID", this.objApp.gdsUserInfo.getColumn(0, "USER_ID"));
        			this.dsSendOrderDetail.setColumn(i,"BUYER_NAME", this.objApp.gdsUserInfo.getColumn(0, "USER_NAME"));
        			this.dsSendOrderDetail.setColumn(i,"BUYER_PHONE", this.edt00_00_00.value);
        			this.dsSendOrderDetail.setColumn(i,"RECEIVE_NAME", this.edt00.value);
        			this.dsSendOrderDetail.setColumn(i,"RECEIVE_PHONE", this.edtZipcode00.value);
        			this.dsSendOrderDetail.setColumn(i,"DELIVERY_REQUEST", this.edt01.value);
        			this.dsSendOrderDetail.setColumn(i,"PRO_CODE", this.dsBuyPro.getColumn(i, "PRO_CODE"));
        			this.dsSendOrderDetail.setColumn(i,"PRO_OPTION", this.dsBuyPro.getColumn(i, "PRO_OPTION")); //옵션번호
        			this.dsSendOrderDetail.setColumn(i,"OPTION_NUMBER", this.dsBuyPro.getColumn(i, "PRO_OP_NUMBER")); //선택개수
        			this.dsSendOrderDetail.setColumn(i,"OPTION_PRICE", totalPrice); //옵션별 가격
        			this.dsSendOrderDetail.setColumn(i,"STATUS", 0);
        			}
        			var strSvcUrl = "edu/getUserOrderDetail.do";  //A
        			var inData    = "in_data=dsSendOrderDetail";
        			var outData   = "";
        			var strArg    = "";
        			this.gfnTransaction("getUserOrderDetail", strSvcUrl, inData, outData, strArg, "fn_callback", true);

        	}

        	if(id == "getUserOrderDetail"){
        		this.dsSendOrderDetail.clear();
        		this.dsSendOrder.clear();
        		alert("구매완료");
        		for(var i = 0; i< this.dsBuyPro.rowcount; i++){
        			var rowCode = this.dsBuyPro.getColumn(i, "PRO_CODE");
        			var rowOp = this.dsBuyPro.getColumn(i, "PRO_OPTION");
        			var selOp =  parseInt(this.dsBuyPro.getColumn(i, "PRO_OP_NUMBER"));

        			for(j = this.objApp.gdsUserCart.rowcount-1; j >=0; j--)
        			{
        				if(rowCode == this.objApp.gdsUserCart.getColumn(j, "PRO_CODE") && rowOp == this.objApp.gdsUserCart.getColumn(j, "PRO_OPTION"))
        				{
        					this.objApp.gdsUserCart.deleteRow(j);
        				}
        			}
        			for(var k = 0; k < this.objApp.gdsProOption; k++){
        				if(rowCode == this.objApp.gdsProOption.getColumn(k, "PRO_CODE") && rowOp == this.objApp.gdsProOption.getColumn(k, "PRO_OPTION"))
        				{
        					var oriOpNum = parseInt(this.objApp.gdsProOption.getColumn(k, "OPTION_NUMBER"));
        					this.objApp.gdsProOption.setColumn(k,"OPTION_NUMBER",oriOpNum - selOp);
        				}
        			}
        		}
        	this.parent.parent.fv_setUrl("form::buy_complete.xfdl");
        	}
        }
        /**************************************************************************
        * 사용자 FUNCTION 영역
        **************************************************************************/

        this.isEmptyFields = function()
        {
            if (!this.edt00.value ||
                !this.edtZipcode00.value ||
                !this.edtZipcode.value ||
                !this.edtHomeAdd1.value ||  // 오타 수정 (vlaue → value)
                !this.edtHomeAdd2.value ||
                !this.Radio00.value)
            {
                return false;
            }
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

        		this.edtZipcode.set_value(aAddr[3]);	// 신규 우편번호
        		this.edtHomeAdd1.set_value(aAddr[4]);	// 도로명주소
        	}
        };

        /**************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        **************************************************************************/

        this.btn00_onclick = function(obj,e)
        {
        	alert("결제가 취소되었습니다");
        	this.parent.parent.fv_setUrl("userInfo::User_cart.xfdl");
        };

        this.out_cnt = 0;
        this.btn00_00_onclick = function(obj,e)
        {
        	if(this.isEmptyFields() == false){ // 트랜젝션이 돌지 않아야 함
        		alert("모든 칸에 빈칸이 없어야 합니다!");
        		return ;
        	}

        	var strSvcUrl = "edu/getOrderNo.do";   //주문번호 가져오기
        	var inData    = "";
        	var outData   = "";
        	var strArg    = "";
        	this.gfnTransaction("getOrderNo", strSvcUrl, inData, outData, strArg, "fn_callback", true);
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
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn00_00.addEventHandler("onclick",this.btn00_00_onclick,this);
            this.sta00_01_00.addEventHandler("onclick",this.sta00_01_00_onclick,this);
            this.sta00_01_00_00.addEventHandler("onclick",this.sta00_01_00_onclick,this);
        };
        this.loadIncludeScript("Form_buyInfo_copy0.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
