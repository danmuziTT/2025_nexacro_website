(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("User_cart");
            this.set_titletext("장바구니");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCartInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"SELECT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_OPTION\" type=\"STRING\" size=\"256\"/><Column id=\"OPTION_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_OP_NUMBER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSendCart", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_OPTION\" type=\"STRING\" size=\"256\"/><Column id=\"OPTION_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_OP_NUMBER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeleteCart", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_OPTION\" type=\"STRING\" size=\"256\"/><Column id=\"OPTION_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_OP_NUMBER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPayPro", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_OPTION\" type=\"STRING\" size=\"256\"/><Column id=\"OPTION_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_OP_NUMBER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","0","71","730","499",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsCartInfo");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"206\"/><Column size=\"255\"/><Column size=\"112\"/><Column size=\"88\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"51\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"checkbox\" text=\"선택\"/><Cell col=\"1\" text=\"상품 제목\"/><Cell col=\"2\" text=\"옵션\"/><Cell col=\"3\" text=\"선택수량\"/><Cell col=\"4\" text=\"바로 주문하기\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:SELECT\"/><Cell col=\"1\" text=\"bind:PRO_NAME\"/><Cell col=\"2\" text=\"bind:OPTION_NAME\"/><Cell col=\"3\" text=\"bind:PRO_OP_NUMBER\" displaytype=\"normal\" edittype=\"normal\"/><Cell col=\"4\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"주문하기\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","0","50%","50%",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("sta00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00","sta00:111","120","159","60",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("상품제목");
            obj.set_cssclass("pro_onePrice");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_00","sta00:111","185","159","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("옵션");
            obj.set_cssclass("pro_onePrice");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_00_00","sta00:111","250","159","60",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("선택수량");
            obj.set_cssclass("pro_onePrice");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_00_01","sta00_01_00:0","120","350","60",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("옵션");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_00_01_00","sta00_01_00_00:0","185","350","60",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("옵션");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin00","sta00_01_00_00_00:-13","250","323","60",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","sta00:102","460","258","74",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("선택품목 삭제하기");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00","sta00:371","460","258","74",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("선택품목 주문하기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,570,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","sta00_01_00_00_01","text","dsCartInfo","PRO_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","sta00_01_00_00_01_00","text","dsCartInfo","OPTION_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Spin00","value","dsCartInfo","PRO_OP_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("User_cart.xfdl", function() {
        /**************************************************************************
        * include 영역
        **************************************************************************/

        /**************************************************************************
        * FORM 변수 선언 영역 (fv)
        **************************************************************************/

        /**************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        **************************************************************************/

        this.User_cart_onload = function(obj,e)
        {
        	this.objApp = nexacro.getApplication();
        	this.dsCartInfo.copyData(this.objApp.gdsUserCart);

        	this.dsSendCart.addRow();
        	this.dsCartInfo.addColumn("SELECT", "STRING");

        	for(var k = 0; k<this.dsCartInfo.rowcount; k++){
        		this.dsCartInfo.setColumn(k,"SELECT", 0);
        	}

        	var nHeight = this.getLayoutInfo(this.getCurrentLayoutID(), "height");
         	this.parent.parent.fnMainPageOnLoad(nHeight);
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
        	if(id =="edtCartNum"){
        		var pCode = this.dsSendCart.getColumn(0,"PRO_CODE"); //물품코드
        		var pOp = this.dsSendCart.getColumn(0,"PRO_OPTION"); //옵션
        		var pNum = this.dsSendCart.getColumn(0,"PRO_OP_NUMBER");

        		for(i=0; i < this.objApp.gdsUserCart.rowcount;i++){
        			if(this.objApp.gdsUserCart.getColumn(i,"PRO_CODE") == pCode){
        				if(this.objApp.gdsUserCart.getColumn(i,"PRO_OPTION") == pOp)
        					this.objApp.gdsUserCart.setColumn(i,"PRO_OP_NUMBER", pNum)
        				}
        			}
        		}

        		if(id =="deleteCart"){
        		var delRow = this.dsDeleteCart.rowcount;
        		for(j = 0; j < delRow; j++){
        			var pCode = this.dsDeleteCart.getColumn(j,"PRO_CODE"); //물품코드
        			var pOp = this.dsDeleteCart.getColumn(j,"PRO_OPTION"); //옵션

        			for(i= this.objApp.gdsUserCart.rowcount -1 ; i >= 0 ;i--){
        				var curPCode = this.objApp.gdsUserCart.getColumn(i,"PRO_CODE");
        				var curPOp = this.objApp.gdsUserCart.getColumn(i,"PRO_OPTION");

        				if(curPCode == pCode && curPOp == pOp){
        					this.objApp.gdsUserCart.deleteRow(i);
        				}
        				}

        			for(var ink = this.dsCartInfo.rowcount - 1; ink >= 0; ink--){ //dsCartInfo 삭제하기
        			var curICode = this.dsCartInfo.getColumn(ink, "PRO_CODE");
        			var curIOp = this.dsCartInfo.getColumn(ink, "PRO_OPTION");

        			if(pCode == curICode && pOp == curIOp){
        				this.dsCartInfo.deleteRow(ink);
        				}
        			}
        		this.dsDeleteCart.deleteRow(j);
        		}
        		alert("삭제가 완료되었습니다");
        		}

        }
        /**************************************************************************
        * 사용자 FUNCTION 영역
        **************************************************************************/

        this.fnSendCart = function (i)
        {
        	this.dsSendCart.setColumn(0,"USER_ID",this.dsCartInfo.getColumn(i,"USER_ID"))
        	this.dsSendCart.setColumn(0,"PRO_CODE",this.dsCartInfo.getColumn(i,"PRO_CODE"))
        	this.dsSendCart.setColumn(0,"PRO_NAME",this.dsCartInfo.getColumn(i,"PRO_NAME"))
        	this.dsSendCart.setColumn(0,"PRO_OPTION",this.dsCartInfo.getColumn(i,"PRO_OPTION"))
        	this.dsSendCart.setColumn(0,"OPTION_NAME",this.dsCartInfo.getColumn(i,"OPTION_NAME"))
        	this.dsSendCart.setColumn(0,"PRO_OP_NUMBER",this.Spin00.value);

        	var strSvcUrl = "edu/edtCartNum.do";  //데이터 수정
        	var inData    = "in_emp=dsSendCart";
        	var outData   = "";
        	var strArg    = "";
        	this.gfnTransaction("edtCartNum", strSvcUrl, inData, outData, strArg, "fn_callback", true);
        };

        /**************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        **************************************************************************/


        this.btn00_onclick = function(obj,e)
        {
        	var nLength = this.dsCartInfo.rowcount;
        	var selectNum = 0
        	for(var i = 0; i < nLength; i++){
        		if(this.dsCartInfo.getColumn(i,"SELECT") == 1){
        			selectNum++ ;

        			 var nRow = this.dsPayPro.addRow(); // 새로운 행 추가

                // 특정 컬럼만 복사
        			this.dsPayPro.setColumn(nRow, "USER_ID", this.dsCartInfo.getColumn(i, "USER_ID"));
        			this.dsPayPro.setColumn(nRow, "PRO_CODE", this.dsCartInfo.getColumn(i, "PRO_CODE"));
        			this.dsPayPro.setColumn(nRow, "PRO_NAME", this.dsCartInfo.getColumn(i, "PRO_NAME"));
        			this.dsPayPro.setColumn(nRow, "PRO_OPTION", this.dsCartInfo.getColumn(i, "PRO_OPTION"));
        			this.dsPayPro.setColumn(nRow, "OPTION_NAME", this.dsCartInfo.getColumn(i, "OPTION_NAME"));
        			this.dsPayPro.setColumn(nRow, "PRO_OP_NUMBER", this.dsCartInfo.getColumn(i, "PRO_OP_NUMBER"));
        		}
        	}
        	if(selectNum == 0){
        		alert("구매하실 물건을 선택해주십시오!");
        		return;
        	}
        	alert("총 "+ selectNum + " 개에 대한 구매를 진행하겠습니다");
        	this.objApp.xmlData = this.dsPayPro.saveXML(); //xml 저장 잘됨
        	this.parent.parent.fv_setUrl("form::Form_buyInfo_copy0.xfdl");
        };

        this.Spin00_canchange = function(obj,e) //gds에 저장 및 데이터 update
        {
        	var i = this.dsCartInfo.rowposition
        	this.fnSendCart(i);
        };


        this.btn01_onclick = function(obj,e)
        {
            var nLength = this.dsCartInfo.rowcount;
            var selectNum = 0;

            for(var i = 0; i < nLength; i++){
                if(this.dsCartInfo.getColumn(i,"SELECT") == 1){
                    selectNum++ ;
                    var newIndex = this.dsDeleteCart.addRow(); // 새 행 추가 후 인덱스 저장
                    this.dsDeleteCart.setColumn(newIndex, "USER_ID", this.dsCartInfo.getColumn(i,"USER_ID"));
                    this.dsDeleteCart.setColumn(newIndex, "PRO_CODE", this.dsCartInfo.getColumn(i,"PRO_CODE"));
                    this.dsDeleteCart.setColumn(newIndex, "PRO_OPTION", this.dsCartInfo.getColumn(i,"PRO_OPTION"));
                }
            }
            if(selectNum == 0){
                alert("삭제하실 물건을 선택해주십시오!");
                return;
            }

            var strSvcUrl = "edu/deleteCart.do";  //데이터 수정
            var inData    = "in_emp=dsDeleteCart";
            var outData   = "";
            var strArg    = "";
            this.gfnTransaction("deleteCart", strSvcUrl, inData, outData, strArg, "fn_callback", true);
        };


        this.dsCartInfo_cancolumnchange = function(obj,e)
        {
        	if(e.columnid == "PRO_OP_NUMBER") {
        		var nOtionNum =  this.objApp.gdsProOption.getColumn(e.row, "OPTION_NUMBER");
        		if(nOtionNum < e.newvalue){
        			alert("현재 최대로 선택 가능한 개수는 "+ nOtionNum +" 개 입니다");
        			return false;
        		}
        	}
        };


        this.Spin00_onchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.User_cart_onload,this);
            this.sta00_01_00.addEventHandler("onclick",this.sta00_01_00_onclick,this);
            this.sta00_01_00_00.addEventHandler("onclick",this.sta00_01_00_onclick,this);
            this.sta00_01_00_00_01.addEventHandler("onclick",this.sta00_01_00_onclick,this);
            this.sta00_01_00_00_01_00.addEventHandler("onclick",this.sta00_01_00_onclick,this);
            this.Spin00.addEventHandler("canchange",this.Spin00_canchange,this);
            this.Spin00.addEventHandler("onchanged",this.Spin00_onchanged,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.btn00_00.addEventHandler("onclick",this.btn00_onclick,this);
            this.dsCartInfo.addEventHandler("cancolumnchange",this.dsCartInfo_cancolumnchange,this);
        };
        this.loadIncludeScript("User_cart.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
