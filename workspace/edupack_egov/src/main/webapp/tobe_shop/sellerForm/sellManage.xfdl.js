(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sellManage");
            this.set_titletext("판매된 물품관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBuyInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ORDER_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_AMOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBuyDetail", this);
            obj.set_enableevent("true");
            obj._setContents("<ColumnInfo><Column id=\"ORDER_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_OPTION\" type=\"STRING\" size=\"256\"/><Column id=\"OPTION_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"OPTION_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OPTION_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPayInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"ORDER_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"HOW_TO_PAY\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_TIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00","9","2","543","49",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("구매자가 구매한 물품들을 확인하고 관리할 수 있습니다. 또한 결제 상태를 확인, 변경할 수 있습니다.");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00","110","61","670","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","776","61","54","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_borderRadius("0px");
            obj.set_cssclass("TF_miniBtn");
            obj.set_background("url(\'theme::blue/images/btn_WF_Grdexpand.png\') no-repeat center center /50% 70%");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","0","300","529","350",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_binddataset("dsPayInfo");
            obj.set_scrolltype("both");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"88\"/><Column size=\"111\"/><Column size=\"122\"/><Column size=\"104\"/><Column size=\"101\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"주문번호\"/><Cell col=\"1\" text=\"총 결제금액\"/><Cell col=\"2\" text=\"결제방법\"/><Cell col=\"3\" text=\"결제상태\"/><Cell col=\"4\" text=\"결제시간\"/></Band><Band id=\"body\"><Cell text=\"bind:ORDER_NO\"/><Cell col=\"1\" text=\"bind:PAY_AMOUNT\" displaytype=\"number\" textAlign=\"right\" maskeditformat=\"###,###\"/><Cell col=\"2\" text=\"expr:HOW_TO_PAY==&quot;0&quot;?&quot;무통장입금&quot;:HOW_TO_PAY==&quot;1&quot;?&quot;카드&quot;:&quot;애스크로&quot;\"/><Cell col=\"3\" text=\"expr:PAY_STATUS==&quot;0&quot;?&quot;미결제&quot;:PAY_STATUS==&quot;1&quot;?&quot;결제완료&quot;:&quot;&quot;\"/><Cell col=\"4\" text=\"bind:PAY_TIME\" displaytype=\"date\" calendardateformat=\"yyyy-MM-ddhh:mm:ss\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","Grid01:0","300",null,"350","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsBuyDetail");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"135\"/><Column size=\"280\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"물품명\"/><Cell col=\"1\" text=\"상품옵션\"/><Cell col=\"2\" text=\"주문수량\"/><Cell col=\"3\" text=\"주문가격\"/></Band><Band id=\"body\"><Cell text=\"bind:PRO_NAME\"/><Cell col=\"1\" text=\"bind:OPTION_NAME\"/><Cell col=\"2\" text=\"expr:OPTION_NUMBER + &quot; 개&quot;\" textAlign=\"right\"/><Cell col=\"3\" text=\"bind:OPTION_PRICE\" textAlign=\"right\" displaytype=\"number\" maskeditformat=\"###,###\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","9","125","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("주문번호");
            this.addChild(obj.name, obj);

            obj = new Edit("edt01","139","125","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00","9","155","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("상품옵션");
            this.addChild(obj.name, obj);

            obj = new Edit("edt01_00","139","155","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_01","319","125","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("주문수량");
            this.addChild(obj.name, obj);

            obj = new Edit("edt01_01","449","125","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_02","319","155","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("옵션결재가");
            this.addChild(obj.name, obj);

            obj = new Edit("edt01_02","449","155","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_03","10","195","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("구매자 ID");
            this.addChild(obj.name, obj);

            obj = new Edit("edt01_03","140","195","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_03_00","9","240","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("결제 상태");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","79","230","280","50",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">미결제(확인불가)</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">결제완료</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Static("sta01_03_00_00","319","195","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("결제방법");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00_00","389","185","280","50",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enableevent("false");
            var Radio00_00_innerdataset = new nexacro.NormalDataset("Radio00_00_innerdataset", obj);
            Radio00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">무통장입금</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">카드</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">애스크로</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Button("btn00","840","61","151","40",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("변경사항 저장");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_02_00","320","240","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("결제시간");
            this.addChild(obj.name, obj);

            obj = new Edit("edt01_02_00","450","240","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio01","731","130","249","90",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Radio01_innerdataset = new nexacro.NormalDataset("Radio01_innerdataset", obj);
            Radio01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">결제완료</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">배송준비</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">배송접수완료</Col></Row></Rows>");
            obj.set_innerdataset(Radio01_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Static("sta02","640","125","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("주문상태");
            this.addChild(obj.name, obj);

            obj = new Button("btn02","790","250","181","32",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("모두보기");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","10","71","120","14",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("주문번호로 찾기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,650,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt01","value","dsBuyInfo","ORDER_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt01_03","value","dsBuyInfo","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt01_00","value","dsBuyDetail","OPTION_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt01_02","value","dsBuyDetail","OPTION_PRICE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edt01_01","value","dsBuyDetail","OPTION_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Radio00_00","value","dsPayInfo","HOW_TO_PAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Radio00","value","dsPayInfo","PAY_STATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edt01_02_00","value","dsPayInfo","PAY_TIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Radio01","value","dsBuyDetail","STATUS");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sellManage.xfdl", function() {
        /**************************************************************************
        * include 영역
        **************************************************************************/

        /**************************************************************************
        * FORM 변수 선언 영역 (fv)
        **************************************************************************/

        /**************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        **************************************************************************/



        this.sellManage_onload = function(obj,e)
        {
        	this.objApp = nexacro.getApplication();
        	var strSvcUrl = "edu/getBuyData.do"; //s_order
        	var inData    = "";
        	var outData   = "dsBuyInfo=out_emp";
        	var strArg    = "";
        	this.gfnTransaction("getBuyData", strSvcUrl, inData, outData, strArg, "fnCallback", true);
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
        	if(id == "getBuyData"){ //s_order_detail
        		var strSvcUrl = "edu/getBuyDetail.do";
        		var inData    = "";
        		var outData   = "dsBuyDetail=out_emp";
        		var strArg    = "";
        		this.gfnTransaction("getBuyDetail", strSvcUrl, inData, outData, strArg, "fnCallback", true);
        	}
        	if(id == "getBuyDetail"){ //s_pay_detail
        		var strSvcUrl = "edu/getPayData.do";
        		var inData    = "";
        		var outData   = "dsPayInfo=out_emp";
        		var strArg    = "";
        		this.gfnTransaction("getPayData", strSvcUrl, inData, outData, strArg, "fnCallback", true);
        	}
        	if(id == "getPayData"){ //데이터 들어가도록 수정

        		for (var i = 0; i < this.dsBuyDetail.rowcount; i++) {
        			this.dsBuyDetail.addColumn("OPTION_NAME", "STRING");
        			var nPro = this.dsBuyDetail.getColumn(i, "PRO_CODE");
        			var nProOp = this.dsBuyDetail.getColumn(i, "PRO_OPTION");
        			//alert(nPro + " " + nProOp); //옵션코드 번호 잘 잡힘

                // gdsProOption에서 PRO_CODE, PRO_OPTION이 일치하는 값을 찾아서 옵션명 업데이트
        			for (var j = 0; j < this.objApp.gdsProOption.rowcount; j++) {
        				if (this.objApp.gdsProOption.getColumn(j, "PRO_CODE") == nPro &&
        					this.objApp.gdsProOption.getColumn(j, "PRO_OPTION") == nProOp) {
        					this.dsBuyDetail.setColumn(i, "OPTION_NAME", this.objApp.gdsProOption.getColumn(j, "OPTION_NAME"));
        				}
        			}

                // gdsProInfo에서 PRO_CODE에 해당하는 PRO_NAME을 찾아서 업데이트
                for (var k = 0; k < this.objApp.gdsProInfo.rowcount; k++) {
        			this.dsBuyDetail.addColumn("PRO_NAME", "STRING");
                    if (this.objApp.gdsProInfo.getColumn(k, "PRO_CODE") == nPro) {
                        this.dsBuyDetail.setColumn(i, "PRO_NAME", this.objApp.gdsProInfo.getColumn(k, "PRO_NAME"));
        				}
        			}
        		}
        	}

        	if(id =="savePayStatus"){ //결제 데이터 저장 후 준비정보 저장
        		var strSvcUrl = "edu/saveBuyStatus.do";
        		var inData    = "in_data=dsBuyDetail";
        		var outData   = "";
        		var strArg    = "";
        		this.gfnTransaction("saveBuyStatus", strSvcUrl, inData, outData, strArg, "fnCallback", true);
        	}
        	if(id == "savePayStatus"){
        		alert("저장이 완료되었습니다");
        	}
        };
        /**************************************************************************
        * 사용자 FUNCTION 영역
        **************************************************************************/

        /**************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        **************************************************************************/

        this.btn01_onclick = function(obj,e)
        {
        	var search_data = this.edt00.value;
        	if (search_data === "")
        	{
        		this.dsBuyDetail.filter("");
        		this.dsPayInfo.filter("");
        	}
        	else {
        		this.dsBuyDetail.filter("ORDER_NO.indexOf('" + search_data + "') !== -1");
        		this.dsPayInfo.filter("ORDER_NO.indexOf('" + search_data + "') !== -1");
        	}
        };

        this.btn00_onclick = function(obj,e) //변경데이터 트랜젝션 (저장/update)
        {
        	var strSvcUrl = "edu/savePayStatus.do";
        	var inData    = "in_data=dsPayInfo";
        	var outData   = "";
        	var strArg    = "";
        	this.gfnTransaction("savePayStatus", strSvcUrl, inData, outData, strArg, "fnCallback", true);
        };

        this.Grid00_00_oncellclick = function(obj,e) //옵션상품 클릭 시 주문번호 row focus
        {
           var rowIndex = e.row; // 클릭된 셀의 row index 가져오기
           var orderNo = this.dsBuyDetail.getColumn(rowIndex, "ORDER_NO");
           this.dsPayInfo.filter("ORDER_NO =='" + orderNo + "'");


        	for(i = 0; i < this.dsPayInfo.rowcount; i++){ //물품리스트 0으로 고정
        		if(this.dsPayInfo.getColumn(i, "ORDER_NO") == orderNo)
        		{
        			this.dsPayInfo.set_rowposition(i);
        		}
        	}

        	 var orderNo = this.dsPayInfo.getColumn(rowIndex, "ORDER_NO");
        	for(i = 0; i < this.dsBuyInfo.rowcount; i++){
        		if(this.dsBuyInfo.getColumn(i, "ORDER_NO") == orderNo)
        		{
        			this.dsBuyInfo.set_rowposition(i);
        		}
        	}
        };

        this.btn02_onclick = function(obj,e)
        {
        	 this.dsPayInfo.filter("")
        	 this.dsBuyDetail.filter("")
        };

        this.Grid01_oncellclick = function(obj,e)
        {
        	var rowIndex = e.row; // 클릭된 셀의 row index 가져오기
            var orderNo = this.dsPayInfo.getColumn(rowIndex, "ORDER_NO");
            this.dsBuyDetail.filter("ORDER_NO =='" + orderNo + "'");

        	for(i = 0; i < this.dsBuyDetail.rowcount; i++){ //물품리스트 0으로 고정
        		if(this.dsBuyDetail.getColumn(i, "ORDER_NO") == orderNo)
        		{
        			this.dsBuyDetail.set_rowposition(i);
        		}
        	}

        	 var orderNo = this.dsPayInfo.getColumn(rowIndex, "ORDER_NO");
        	for(i = 0; i < this.dsBuyInfo.rowcount; i++){
        		if(this.dsBuyInfo.getColumn(i, "ORDER_NO") == orderNo)
        		{
        			this.dsBuyInfo.set_rowposition(i);
        		}
        	}
        };




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.sellManage_onload,this);
            this.sta00.addEventHandler("onclick",this.sta00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.Grid01.addEventHandler("oncellclick",this.Grid01_oncellclick,this);
            this.Grid00_00.addEventHandler("oncellclick",this.Grid00_00_oncellclick,this);
            this.sta01_02.addEventHandler("onclick",this.sta01_02_onclick,this);
            this.Radio00_00.addEventHandler("onitemchanged",this.Radio00_00_onitemchanged,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.sta01_02_00.addEventHandler("onclick",this.sta01_02_onclick,this);
            this.sta02.addEventHandler("onclick",this.sta02_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
        };
        this.loadIncludeScript("sellManage.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
