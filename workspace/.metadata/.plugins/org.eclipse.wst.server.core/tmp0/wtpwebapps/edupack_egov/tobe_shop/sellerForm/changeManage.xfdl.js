(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("changeManage");
            this.set_titletext("교환주문 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUserChange", this);
            obj._setContents("<ColumnInfo><Column id=\"ORDER_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_OPTION\" type=\"STRING\" size=\"256\"/><Column id=\"OPTION_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OPTION_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"OPTION_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOrderDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"ORDER_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_OPTION\" type=\"STRING\" size=\"256\"/><Column id=\"OPTION_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"OPTION_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00","10","0","701","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("구매자가 구매 후 교환 신청한 상품들의 상태를 확인할 수 있습니다. 또한 교환 신청된 상품을 교환접수완료로 변경할 수 있습니다.");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02","0","290",null,"360","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsUserChange");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"190\"/><Column size=\"205\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"주문번호\"/><Cell col=\"2\" text=\"주문자명\"/><Cell col=\"3\" text=\"구매자 전화번호\"/><Cell col=\"4\" text=\"상품명\"/><Cell col=\"5\" text=\"옵션명\"/><Cell col=\"6\" text=\"옵션선택개수\"/><Cell col=\"7\" text=\"옵션선택가격\"/><Cell col=\"8\" text=\"상태\"/></Band><Band id=\"body\"><Cell text=\"expr:currow +1 \"/><Cell col=\"1\" text=\"bind:ORDER_NO\"/><Cell col=\"2\" text=\"bind:BUYER_NAME\"/><Cell col=\"3\" text=\"bind:BUYER_PHONE\" maskedittype=\"string\" maskeditformat=\"expr:dataset.getColumn(currow, &quot;BUYER_PHONE&quot;).length &gt;= 10 ? (dataset.getColumn(currow, &quot;BUYER_PHONE&quot;).substring(0,2) == &apos;02&apos; ? &apos;@@-@@@@-@@@@&apos; : (dataset.getColumn(currow, &quot;BUYER_PHONE&quot;).length == 11?&apos;@@@-@@@@-@@@@&apos;:&apos;@@@-@@@-@@@@&apos; )) : &apos;@@-@@@-@@@@&apos;\" displaytype=\"mask\"/><Cell col=\"4\" text=\"bind:PRO_NAME\"/><Cell col=\"5\" text=\"bind:OPTION_NAME\"/><Cell col=\"6\" text=\"expr:OPTION_NUMBER + &quot; 개&quot;\"/><Cell col=\"7\" text=\"bind:OPTION_PRICE\" textAlign=\"right\" displaytype=\"number\" maskeditformat=\"###,###\"/><Cell col=\"8\" text=\"expr:STATUS==&quot;5&quot;?&quot;교환요청&quot;:&quot;교환접수완료&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","9","125","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("주문번호");
            this.addChild(obj.name, obj);

            obj = new Edit("edt01","139","125","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_01","319","125","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("주문자명");
            this.addChild(obj.name, obj);

            obj = new Edit("edt01_01","449","125","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","836","50","151","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("변경사항 저장");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_01_00","660","125","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("주문자 전화번호");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mEdt00","790","125","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_type("string");
            obj.set_format("###-####-####");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00","9","175","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("상품명");
            this.addChild(obj.name, obj);

            obj = new Edit("edt01_00","139","175","311","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00","469","edt01:20","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("옵션명");
            this.addChild(obj.name, obj);

            obj = new Edit("edt01_00_00","599","175","331","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_01","10","225","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("옵션선택개수");
            this.addChild(obj.name, obj);

            obj = new Edit("edt01_00_01","140","225","139","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_01_00","309","225","120",null,null,"395",null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("옵션가");
            this.addChild(obj.name, obj);

            obj = new Edit("edt01_00_01_00","439","225","139","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_01_00_00","619","225","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("상태");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","702","220","228","53",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">교환신청</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">교환접수완료</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Button("btn02_00_00","646","50","170","40",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("접수완료만 보기");
            this.addChild(obj.name, obj);

            obj = new Button("btn02_00","466","50","170","40",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("교환신청만 보기");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","821","50","10","40",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_background("gray");
            this.addChild(obj.name, obj);

            obj = new Button("btn02_00_00_00","286","50","170","40",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("모두 보기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,650,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt01","value","dsUserChange","ORDER_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt01_01","value","dsUserChange","BUYER_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt01_00","value","dsUserChange","PRO_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt01_00_00","value","dsUserChange","OPTION_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edt01_00_01","value","dsUserChange","OPTION_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edt01_00_01_00","value","dsUserChange","OPTION_PRICE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","mEdt00","value","dsUserChange","BUYER_PHONE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Radio00","value","dsUserChange","STATUS");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("changeManage.xfdl", function() {
        /**************************************************************************
        * include 영역
        **************************************************************************/

        /**************************************************************************
        * FORM 변수 선언 영역 (fv)
        **************************************************************************/

        /**************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        **************************************************************************/

        this.changeManage_onload = function(obj,e)
        {
        	this.objApp = nexacro.getApplication();

        	var strSvcUrl = "edu/useUserOrderDetail.do"; //데이터 서버에 저장
        	var inData    = "";
        	var outData   = "dsOrderDetail=out_emp";
        	var strArg    = "";
        	this.gfnTransaction("useUserOrderDetail", strSvcUrl, inData, outData, strArg, "fn_Callback", true);
        	};
        /**************************************************************************
        * CRUD 및 TRANSACTION 서비스 호출 처리
        **************************************************************************/

        /**************************************************************************
        * CALLBACK 콜백 처리부분(Transaction, Popup)
        **************************************************************************/

        this.fn_Callback = function(id, nErrorCode, sErrorMsg) //트랜젝션 콜백
        {
        	if(nErrorCode < 0){ //오류가 난 경우
        		this.alert("ERROR"+ sErrorMsg);
        		return ;
        	}

        	if(id =="useUserOrderDetail"){
        		this.dsUserChange.clearData();
        		this.dsUserChange.copyData(this.dsOrderDetail);
        		for(i = this.dsUserChange.rowcount-1; i >= 0; i--){
        			var k = this.dsUserChange.getColumn(i, "STATUS");
        				if(k != "5" && k != "6"){
        					this.dsUserChange.deleteRow(i);
        				}
        			}

        			this.dsUserChange.addColumn("PRO_NAME");
        			this.dsUserChange.addColumn("OPTION_NAME");

        for (i = 0; i < this.dsUserChange.rowcount; i++) {
            var dsOpCode = this.dsUserChange.getColumn(i, "PRO_OPTION");
            var dsProCode = this.dsUserChange.getColumn(i, "PRO_CODE");

            var matched = false; // 매칭 여부를 추적하는 변수 추가

            for (j = 0; j < this.objApp.gdsProOption.rowcount; j++) {
                var gdsOp = this.objApp.gdsProOption.getColumn(j, "PRO_OPTION");
                var gdsPro = this.objApp.gdsProOption.getColumn(j, "PRO_CODE");
                var gdsOpName = this.objApp.gdsProOption.getColumn(j, "OPTION_NAME");

                if (dsOpCode == gdsOp && dsProCode == gdsPro) {
                    this.dsUserChange.setColumn(i, "OPTION_NAME", gdsOpName);
                    matched = true; // 매칭되었으므로 true로 설정
                    break; // 매칭된 값이 있으면 더 이상 반복할 필요 없음
                }
            }

            // 매칭되지 않으면 "삭제된 상품입니다" 설정
            if (!matched) {
                this.dsUserChange.setColumn(i, "OPTION_NAME", "삭제된 상품입니다");
            }
        }
        		for (i = 0; i < this.dsUserChange.rowcount; i++) {
            var dsProCode = this.dsUserChange.getColumn(i, "PRO_CODE");

            var matched = false; // 매칭 여부를 추적하는 변수 추가

            for (k = 0; k < this.objApp.gdsProInfo.rowcount; k++) {
                var gdsPro = this.objApp.gdsProInfo.getColumn(k, "PRO_CODE");
                var gdsName = this.objApp.gdsProInfo.getColumn(k, "PRO_NAME");

                if (dsProCode == gdsPro) {
                    this.dsUserChange.setColumn(i, "PRO_NAME", gdsName);
                    matched = true; // 매칭되었으므로 true로 설정
                    break; // 매칭된 값이 있으면 더 이상 반복할 필요 없음
                }
            }

            // 매칭되지 않으면 "삭제된 상품입니다" 설정
            if (!matched) {
                this.dsUserChange.setColumn(i, "PRO_NAME", "삭제된 상품입니다");
        		}
        	}

        }

        		if(id =="SaveChangeData"){ //저장트랜젝션. 수 더하지 말고 변경만 하기
        		this.objApp.gdsProOption.clear();
        		var strSvcUrl = "edu/getShopDataOption.do";
        		var inData    = "";
        		var outData   = "gdsProOption=out_emp";
        		var strArg    = "";
        		this.gfnTransaction("getShopDataOption", strSvcUrl, inData, outData, strArg, "fn_Callback", true);
        		return ;
        	}
        	if(id == "getShopDataOption"){
        		alert("업데이트가 완료되었습니다");
        	}
        }



        /**************************************************************************
        * 사용자 FUNCTION 영역
        **************************************************************************/

        /**************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        **************************************************************************/

        this.btn02_00_onclick = function(obj,e)
        {
        	this.dsUserChange.filter("STATUS =='5'");
        };

        this.btn02_00_00_onclick = function(obj,e)
        {
        	this.dsUserChange.filter("STATUS =='6'");
        };

        this.btn02_00_00_00_onclick = function(obj,e)
        {
        	this.dsUserChange.filter("");
        };

        this.btn00_onclick = function(obj,e) //저장 트랜젝션
        {
        	var strSvcUrl = "edu/SaveChangeData.do"; //데이터 서버에 저장
        	var inData    = "in_data=dsUserChange";
        	var outData   = "";
        	var strArg    = "";
        	this.gfnTransaction("SaveChangeData", strSvcUrl, inData, outData, strArg, "fn_Callback", true);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.changeManage_onload,this);
            this.sta00.addEventHandler("onclick",this.sta00_onclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.sta01_00.addEventHandler("onclick",this.sta01_00_onclick,this);
            this.sta01_00_00.addEventHandler("onclick",this.sta01_00_onclick,this);
            this.sta01_00_01.addEventHandler("onclick",this.sta01_00_onclick,this);
            this.sta01_00_01_00.addEventHandler("onclick",this.sta01_00_onclick,this);
            this.sta01_00_01_00_00.addEventHandler("onclick",this.sta01_00_onclick,this);
            this.btn02_00_00.addEventHandler("onclick",this.btn02_00_00_onclick,this);
            this.btn02_00.addEventHandler("onclick",this.btn02_00_onclick,this);
            this.btn02_00_00_00.addEventHandler("onclick",this.btn02_00_00_00_onclick,this);
        };
        this.loadIncludeScript("changeManage.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
