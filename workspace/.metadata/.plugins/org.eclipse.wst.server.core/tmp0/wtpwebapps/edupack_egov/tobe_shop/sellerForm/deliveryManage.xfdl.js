(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("deliveryManage");
            this.set_titletext("베송관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDelivery", this);
            obj._setContents("<ColumnInfo><Column id=\"ORDER_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DELIVERY_COMPANY\" type=\"STRING\" size=\"256\"/><Column id=\"DELIVERY_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"DELIVERY_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"EXPEXT_DATE\" type=\"DATE\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSellDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"ORDER_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVE_PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVE_ADDR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00","9","2","543","49",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("구매자가 구매한 물품들을 확인하고 관리할 수 있습니다. 또한 결제 상태를 확인, 변경할 수 있습니다.");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00","120","61","660","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","776","61","54","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_borderRadius("0px");
            obj.set_cssclass("TF_miniBtn");
            obj.set_background("url(\'theme::blue/images/btn_WF_Grdexpand.png\') no-repeat center center /50% 70%");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","9","125","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("주문번호");
            this.addChild(obj.name, obj);

            obj = new Edit("edt01","139","125","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00","9","155","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("수취인명");
            this.addChild(obj.name, obj);

            obj = new Edit("edt01_00","139","155","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_01","319","125","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("주문자명");
            this.addChild(obj.name, obj);

            obj = new Edit("edt01_01","449","125","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_02","319","155","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("수취인 전화번호");
            this.addChild(obj.name, obj);

            obj = new Edit("edt01_02","449","155","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_03","610","125","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("배송주소");
            this.addChild(obj.name, obj);

            obj = new Edit("edt01_03","679","125","311","80",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_03_00","9","240","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("배송상태");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","79","230","280","50",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">배송준비</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">배송접수 완료</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">배송중</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">배송완료</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","0","290","570","360",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_binddataset("dsSellDetail");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"102\"/><Column size=\"225\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"주문번호\"/><Cell col=\"1\" text=\"구매자명\"/><Cell col=\"2\" text=\"수취인명\"/><Cell col=\"3\" text=\"수취인 전화번호\"/><Cell col=\"4\" text=\"배송지\"/></Band><Band id=\"body\"><Cell text=\"bind:ORDER_NO\"/><Cell col=\"1\" text=\"bind:BUYER_NAME\"/><Cell col=\"2\" text=\"bind:RECEIVE_NAME\"/><Cell col=\"3\" text=\"bind:RECEIVE_PHONE\"/><Cell col=\"4\" text=\"bind:RECEIVE_ADDR\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","840","56","151","40",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("변경사항 저장");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_02_00","410","240","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("배송완료예상날짜");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01_00","570","290","429","360",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_binddataset("dsDelivery");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"57\"/><Column size=\"91\"/><Column size=\"95\"/><Column size=\"86\"/><Column size=\"97\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"주문번호\"/><Cell col=\"1\" text=\"배송회사\"/><Cell col=\"2\" text=\"송장번호\"/><Cell col=\"3\" text=\"배송상태\"/><Cell col=\"4\" text=\"예상날짜\"/></Band><Band id=\"body\"><Cell text=\"bind:ORDER_NO\"/><Cell col=\"1\" text=\"bind:DELIVERY_COMPANY\"/><Cell col=\"2\" text=\"bind:DELIVERY_NUMBER\" displaytype=\"normal\" maskeditformat=\"####-####\"/><Cell col=\"3\" text=\"bind:DELIVERY_STATUS\"/><Cell col=\"4\" text=\"bind:EXPEXT_DATE\" maskeditformat=\"####/##/##\" displaytype=\"date\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00","10","190","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("배송회사");
            this.addChild(obj.name, obj);

            obj = new Edit("edt01_00_00","140","190","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_01","319","190","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("송장번호");
            this.addChild(obj.name, obj);

            obj = new Edit("edt01_00_01","450","190","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","540","240","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","19","62","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("주문번호로 검색");
            this.addChild(obj.name, obj);

            obj = new Button("btn02","790","250","181","32",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("모두보기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,650,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt01","value","dsSellDetail","ORDER_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt01_00","value","dsSellDetail","RECEIVE_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt01_01","value","dsSellDetail","BUYER_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt01_02","value","dsSellDetail","RECEIVE_PHONE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edt01_03","value","dsSellDetail","RECEIVE_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edt01_00_00","value","dsDelivery","DELIVERY_COMPANY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edt01_00_01","value","dsDelivery","DELIVERY_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Radio00","value","dsDelivery","DELIVERY_STATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Calendar00","value","dsDelivery","EXPEXT_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("deliveryManage.xfdl", function() {
        /**************************************************************************
        * include 영역
        **************************************************************************/

        /**************************************************************************
        * FORM 변수 선언 영역 (fv)
        **************************************************************************/

        /**************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        **************************************************************************/

        this.deliveryManage_onload = function(obj,e)
        {
        	var strSvcUrl = "edu/getSellDetail.do"; //s_order_detail
        	var inData    = "";
        	var outData   = "dsSellDetail=out_emp";
        	var strArg    = "";
        	this.gfnTransaction("getSellDetail", strSvcUrl, inData, outData, strArg, "fnCallback", true);

        };
        /**************************************************************************
        * CRUD 및 TRANSACTION 서비스 호출 처리
        **************************************************************************/

        /**************************************************************************
        * CALLBACK 콜백 처리부분(Transaction, Popup)
        **************************************************************************/

        this.fnCallback = function(id, nErrorCode, sErrorMsg)
        {
        	if(nErrorCode < 0){ //오류가 난 경우
        		this.alert("ERROR"+ sErrorMsg);
        		return ;
        	}
        	if(id == "getSellDetail"){
        		var strSvcUrl = "edu/getDeliveryData.do"; //s_order_detail
        		var inData    = "";
        		var outData   = "dsDelivery=out_emp";
        		var strArg    = "";
        		this.gfnTransaction("getDeliveryData", strSvcUrl, inData, outData, strArg, "fnCallback", true);
        	}

        if(id == "getDeliveryData"){
            var sellRowCount = this.dsSellDetail.rowcount;
            var deliveryRowCount = this.dsDelivery.rowcount;
            var inDelData = sellRowCount - deliveryRowCount;

            // 부족한 개수만큼 dsDelivery에 행 추가
            while (inDelData-- > 0) {
                this.dsDelivery.addRow();
            }

            var orderCount = {};
            // sellRowCount 만큼 순회하며 주문번호 카운트
            for (var i = 0; i < sellRowCount; i++) {
                var orderNo = this.dsSellDetail.getColumn(i, "ORDER_NO");
                orderCount[orderNo] = (orderCount[orderNo] || 0) + 1;
            }

            var existingCount = {};
            // 기존 dsDelivery에서 이미 배정된 주문번호 카운트
            for (var k = 0; k < this.dsDelivery.rowcount; k++) {
                var existingOrderNo = this.dsDelivery.getColumn(k, "ORDER_NO");
                if (existingOrderNo) {
                    existingCount[existingOrderNo] = (existingCount[existingOrderNo] || 0) + 1;
                }
            }

            var sellIndex = 0;
            // dsDelivery에 주문번호를 배정하면서 중복을 방지
            for (var k = 0; k < this.dsDelivery.rowcount; k++) {
                if (!this.dsDelivery.getColumn(k, "ORDER_NO")) { // 주문번호가 비어있을 경우에만 처리
                    while (sellIndex < sellRowCount) {
                        var orderNoToSet = this.dsSellDetail.getColumn(sellIndex++, "ORDER_NO");
                        // 기존에 배정된 수가, 해당 주문번호의 총 수보다 적을 경우에만 배정
                        if ((existingCount[orderNoToSet] || 0) < 1) {
                            // 주문번호가 기존에 이미 배정된 개수보다 적으면 배정 (중복 방지)
                            this.dsDelivery.setColumn(k, "ORDER_NO", orderNoToSet);
                            existingCount[orderNoToSet] = 1;  // 해당 주문번호는 이제 배정되었으므로 1로 설정
                            break;
                        }
                    }
                }
            }
        	for (var k = this.dsDelivery.rowcount - 1; k >= 0; k--) {
                if (!this.dsDelivery.getColumn(k, "ORDER_NO")) { // 주문번호가 비어있다면
                    this.dsDelivery.deleteRow(k); // 해당 행 삭제
                }
            }
        }


        	if(id == "saveDeliveryData"){
        		alert("데이터가 저장되었습니다");
        	}
        };
        /**************************************************************************
        * 사용자 FUNCTION 영역
        **************************************************************************/

        /**************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        **************************************************************************/

        this.btn00_onclick = function(obj,e) //저장데이터 트랜젝션
        {
        for (var i = this.dsDelivery.rowcount - 1; i >= 0; i--) {
            // 각 열이 비어있는지 체크
            if (
                !this.dsDelivery.getColumn(i, "DELIVERY_COMPANY") ||
                !this.dsDelivery.getColumn(i, "DELIVERY_NUMBER") ||
                !this.dsDelivery.getColumn(i, "DELIVERY_STATUS") ||
                !this.dsDelivery.getColumn(i, "EXPEXT_DATE")
            ) {
                // 비어있는 열 삭제
                this.dsDelivery.deleteRow(i);
            }
        }

        	var strSvcUrl = "edu/saveDeliveryData.do"; //s_order_detail
        	var inData    = "in_data = dsDelivery:U";
        	var outData   = "";
        	var strArg    = "";
        	this.gfnTransaction("saveDeliveryData", strSvcUrl, inData, outData, strArg, "fnCallback", true);

        };

        // this.Calendar00_onchanged = function(obj:nexacro.Calendar,e:nexacro.ChangeEventInfo)
        // {
        // 	trace(this.Calendar00.value);
        // 	var row = this.dsSellDetail.rowposition;
        // 	var row2 = this.dsDelivery.rowposition;
        // 	this.dsDelivery.setColumn(row2,"ORDER_NO",this.dsSellDetail.getColumn(row,"ORDER_NO"))
        //
        // 	this.dsDelivery.setColumn(row2,"EXPEXT_DATE",this.Calendar00.value)
        // };

        this.btn01_onclick = function(obj,e)
        {
        	var search_data = this.edt00.value;
        	if (search_data === "")
        	{
        		this.dsSellDetail.filter("");
        		this.dsDelivery.filter("");
        	}
        	else {
        		this.dsSellDetail.filter("ORDER_NO.indexOf('" + search_data + "') !== -1");
        		this.dsDelivery.filter("ORDER_NO.indexOf('" + search_data + "') !== -1");
        	}
        };


        this.Grid01_oncellclick = function(obj,e)
        {
        	var orderN = this.dsSellDetail.getColumn(e.row, "ORDER_NO");
        // 	for(var k = 0; k < this.dsDelivery.rowcount; k++){
        // 		if(this.dsDelivery.getColumn(k, "ORDER_NO") == orderN){
        // 			this.dsDelivery.set_rowposition(k);
        // 			return;
        // 		}
        // 	}

           this.dsDelivery.filter("ORDER_NO =='" + orderN + "'");
           this.dsSellDetail.filter("ORDER_NO =='" + orderN + "'");
        };


        this.btn02_onclick = function(obj,e)
        {
        	 this.dsSellDetail.filter("")
        	 this.dsDelivery.filter("")
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.deliveryManage_onload,this);
            this.sta00.addEventHandler("onclick",this.sta00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.sta01_02.addEventHandler("onclick",this.sta01_02_onclick,this);
            this.Radio00.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
            this.Grid01.addEventHandler("oncellclick",this.Grid01_oncellclick,this);
            this.Grid01.addEventHandler("onclick",this.Grid01_onclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.sta01_02_00.addEventHandler("onclick",this.sta01_02_onclick,this);
            this.Calendar00.addEventHandler("onchanged",this.Calendar00_onchanged,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
        };
        this.loadIncludeScript("deliveryManage.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
