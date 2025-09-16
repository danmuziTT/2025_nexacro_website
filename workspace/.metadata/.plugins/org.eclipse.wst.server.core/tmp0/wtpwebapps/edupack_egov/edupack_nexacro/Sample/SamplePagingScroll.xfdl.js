(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SamplePagingScroll");
            this.set_titletext("스크롤 페이징");
            this.set_cssclass("btn_WF_GrdNext");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"records\" type=\"INT\" size=\"256\"/><Column id=\"page\" type=\"INT\" size=\"256\"/><Column id=\"recordsOffset\" type=\"INT\" size=\"256\"/><Column id=\"pageCount\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPagingInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"totalCount\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListAppend", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta03","10","35",null,"210","10",null,"980",null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("VScroll로 데이터를 가져오는 샘플이다.\r\n\r\n1. this.fvRecords = 20; \t// 조회할 목록 갯수  설정\r\n2. 그리드 VScroll 시 자동 조회 설정\r\n    this.gfnsetGridAppend(this.grdList, this.dsSearch, \"fnSearch\", this.fvRecords, this.btnNext, this.staCnt);\r\n3.  callback에서 data append 처리\r\n    this.gfnAppendGridData(this.grdList, this.dsListAppend);\r\n4. 재조회시에는 그리드 VScroll 시 자동 조회 초기화\r\n    this.gfnResetGridAppend(this.grdList);");
            obj.set_verticalAlign("top");
            obj.set_cssclass("sta_WF_Desc");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","10","290",null,null,"10","50",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"NAME\"/><Cell col=\"2\" text=\"DESCRIPTION\"/><Cell col=\"3\" text=\"USE_YN\"/><Cell col=\"4\" text=\"REG_USER\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\"/><Cell col=\"1\" text=\"bind:NAME\"/><Cell col=\"2\" text=\"bind:DESCRIPTION\"/><Cell col=\"3\" text=\"bind:USE_YN\"/><Cell col=\"4\" text=\"bind:REG_USER\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnNext",null,"252","60","28","90",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text(" 다음");
            obj.getSetter("uWord").set("search");
            obj.set_cssclass("btn_WF_GrdNext");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staCnt",null,"252","81","28","btnNext:10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("총갯수");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("uWord").set("listcount");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","10","0","221","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("스크롤 페이징");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"252","60","28","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("조회");
            obj.getSetter("uWord").set("search");
            obj.set_cssclass("btn_WF_FrmMain");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1038,650,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SamplePagingScroll.xfdl", function() {
        /**
        *  Nexacro Professional Training Couse
        *  @MenuPath    개발가이드 > 표준 및 기본 정의 > 스크롤 페이징
        *  @FileName 	SamplePagingScroll.xfdl
        *  @Creator 	TOBESOFT Education
        *  @CreateDate 	2023/01/03
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2023/01/03      		 TOBESOFT Education	 	  	최초 생성
        *******************************************************************************
        */


        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.fvRecords = 20; 		// 조회할 목록 갯수


        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        /**
         * @description 화면 onload시 처리내역(필수)
        */
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);

            // 그리드 VScroll 시 자동 조회
            this.gfnsetGridAppend(this.grdList, this.dsSearch, "fnSearch", this.fvRecords, this.staCnt, this.btnNext);
        	//this.gfnsetGridAppend(this.grdList, this.dsSearch, "fnSearch", this.fvRecords, this.staCnt);
        	//this.gfnsetGridAppend(this.grdList, this.dsSearch, "fnSearch", this.fvRecords);
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/
        /**
         * @description TRANSACTION콜백 트랜젝션 후, 반드시페이지 메이킹 함수 호출
        */
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
        	switch(svcID)
        	{
        		case "search":
                    // data append 처리
                    this.gfnAppendGridData(this.grdList, this.dsListAppend);
        			break;
        	}
        };

        /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/
        /**
         * @description 조회이벤트
        */
        this.fnSearch = function(obj,e)
        {
         	var strSvcId    = "search";
        	var strSvcUrl   = "selectPagingSample.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsListAppend=dsList dsPagingInfo=dsPagingInfo";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc, 	// transaction의 결과를 받을 Function 이름
        						isAsync); 		// 비동기통신 여부 [생략가능]
        };

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/


        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
         * @description 조회버튼이벤트
        */
        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	// 그리드 VScroll 시 자동 조회 초기화
        	this.gfnResetGridAppend(this.grdList);

        	this.fnSearch(); //조회
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
        };
        this.loadIncludeScript("SamplePagingScroll.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
