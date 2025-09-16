(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SampleCrossTab");
            this.set_titletext("CrossTab 그리드");
            this.set_stepalign("left top");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPlusFeeTgtAcru", this);
            obj._setContents("<ColumnInfo><Column id=\"tkcgOrgNm\" type=\"STRING\" size=\"256\"/><Column id=\"mrktgOrgNm\" type=\"STRING\" size=\"256\"/><Column id=\"orgId\" type=\"STRING\" size=\"256\"/><Column id=\"orgNm\" type=\"STRING\" size=\"256\"/><Column id=\"rgnDivCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyYm\" type=\"STRING\" size=\"256\"/><Column id=\"npAcruCascnt\" type=\"INT\" size=\"256\"/><Column id=\"npAcruCascntSum\" type=\"INT\" size=\"256\" prop=\"SUM\"/><Column id=\"holiStorOpenRate\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"holiStorOpenRateSum\" type=\"BIGDECIMAL\" size=\"256\" prop=\"SUM\"/></ColumnInfo><Rows><Row><Col id=\"tkcgOrgNm\">홍길동</Col><Col id=\"mrktgOrgNm\">AB</Col><Col id=\"orgId\">000012</Col><Col id=\"rgnDivCd\">AA_000012</Col><Col id=\"orgNm\">마케팅팀</Col><Col id=\"aplyYm\">2018년 01월</Col><Col id=\"npAcruCascntSum\">80</Col><Col id=\"holiStorOpenRateSum\">37.5</Col><Col id=\"npAcruCascnt\">50</Col><Col id=\"holiStorOpenRate\">11.50</Col></Row><Row><Col id=\"tkcgOrgNm\">홍길동</Col><Col id=\"mrktgOrgNm\">AB</Col><Col id=\"orgId\">000012</Col><Col id=\"orgNm\">마케팅팀</Col><Col id=\"rgnDivCd\">AA_000012</Col><Col id=\"aplyYm\">2018년 02월</Col><Col id=\"npAcruCascntSum\">80</Col><Col id=\"holiStorOpenRateSum\">37.5</Col><Col id=\"npAcruCascnt\">20</Col><Col id=\"holiStorOpenRate\">12.50</Col></Row><Row><Col id=\"tkcgOrgNm\">홍길동</Col><Col id=\"mrktgOrgNm\">AB</Col><Col id=\"orgId\">000012</Col><Col id=\"orgNm\">마케팅팀</Col><Col id=\"rgnDivCd\">AA_000012</Col><Col id=\"aplyYm\">2018년 03월</Col><Col id=\"npAcruCascntSum\">80</Col><Col id=\"holiStorOpenRateSum\">37.5</Col><Col id=\"npAcruCascnt\">10</Col><Col id=\"holiStorOpenRate\">13.50</Col></Row><Row><Col id=\"tkcgOrgNm\">길동이</Col><Col id=\"mrktgOrgNm\">AA</Col><Col id=\"orgId\">000011</Col><Col id=\"orgNm\">영업팀</Col><Col id=\"rgnDivCd\">AA_000011</Col><Col id=\"aplyYm\">2018년 01월</Col><Col id=\"npAcruCascntSum\">70</Col><Col id=\"holiStorOpenRateSum\">46.5</Col><Col id=\"npAcruCascnt\">15</Col><Col id=\"holiStorOpenRate\">14.50</Col></Row><Row><Col id=\"tkcgOrgNm\">길동이</Col><Col id=\"mrktgOrgNm\">AA</Col><Col id=\"orgId\">000011</Col><Col id=\"orgNm\">영업팀</Col><Col id=\"rgnDivCd\">AA_000011</Col><Col id=\"aplyYm\">2018년 02월</Col><Col id=\"npAcruCascntSum\">70</Col><Col id=\"holiStorOpenRateSum\">46.5</Col><Col id=\"npAcruCascnt\">25</Col><Col id=\"holiStorOpenRate\">15.50</Col></Row><Row><Col id=\"tkcgOrgNm\">길동이</Col><Col id=\"mrktgOrgNm\">AA</Col><Col id=\"orgId\">000011</Col><Col id=\"orgNm\">영업팀</Col><Col id=\"rgnDivCd\">AA_000011</Col><Col id=\"aplyYm\">2018년 03월</Col><Col id=\"npAcruCascntSum\">70</Col><Col id=\"holiStorOpenRateSum\">46.5</Col><Col id=\"npAcruCascnt\">30</Col><Col id=\"holiStorOpenRate\">16.50</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta02","10","0","221","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("CrossTab 그리드");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPivot","10","597",null,"202","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsPlusFeeTgtAcru");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\" band=\"head\"/><Row size=\"28\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"담당명\"/><Cell col=\"2\" rowspan=\"2\" text=\"마케팅팀명\"/><Cell col=\"3\" rowspan=\"2\" text=\"조직코드\"/><Cell col=\"4\" rowspan=\"2\" text=\"조직코드명\"/><Cell col=\"5\" rowspan=\"2\" text=\"지역구분\"/><Cell col=\"6\" colspan=\"2\" text=\"합계\"/><Cell col=\"8\" colspan=\"2\" text=\"bind:aplyYm\"/><Cell row=\"1\" col=\"6\" text=\"MNP건수\"/><Cell row=\"1\" col=\"7\" text=\"휴일오픈율\"/><Cell row=\"1\" col=\"8\" text=\"MNP건수\"/><Cell row=\"1\" col=\"9\" text=\"휴일오픈율\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:tkcgOrgNm\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:mrktgOrgNm\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:orgId\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:orgNm\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:rgnDivCd\" textAlign=\"center\"/><Cell col=\"6\" displaytype=\"mask\" maskeditformat=\"##0\" text=\"bind:npAcruCascntSum\"/><Cell col=\"7\" text=\"bind:holiStorOpenRateSum\" displaytype=\"mask\" maskeditformat=\"#0.#0\"/><Cell col=\"8\" text=\"bind:npAcruCascnt\" suppressalign=\"middle\" displaytype=\"mask\" maskeditformat=\"##0\"/><Cell col=\"9\" text=\"bind:holiStorOpenRate\" displaytype=\"mask\" maskeditformat=\"#0.#0\"/></Band><Band id=\"summary\"><Cell colspan=\"6\" text=\"합계\"/><Cell col=\"6\" text=\"expr:dataset.getSum(&quot;npAcruCascntSum&quot;)\" textAlign=\"right\" maskeditformat=\"##0\" displaytype=\"mask\"/><Cell col=\"7\" text=\"expr:dataset.getSum(&quot;holiStorOpenRateSum&quot;)\" textAlign=\"right\" maskeditformat=\"#0.#0\" displaytype=\"mask\"/><Cell col=\"8\" text=\"expr:dataset.getSum(&quot;npAcruCascnt&quot;)\" textAlign=\"right\" maskeditformat=\"##0\" displaytype=\"mask\"/><Cell col=\"9\" text=\"expr:dataset.getSum(&quot;holiStorOpenRate&quot;)\" textAlign=\"right\" maskeditformat=\"#0.#0\" displaytype=\"mask\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","10","35",null,"390","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("1. 정렬 컬럼을 지정\r\n  this.dsPlusFeeTgtAcru.set_keystring(\"S:+tkcgOrgNm+mrktgOrgNm+orgId+orgNm+rgnDivCd\");\r\n\r\n2. Group로 묶을 컬럼 ID를 지정\r\n  this.grdPivot.groupkey = \"tkcgOrgNm,mrktgOrgNm,orgId,orgNm,rgnDivCd\";\r\n  this.grdPivot.summarykey = \"tkcgOrgNm,mrktgOrgNm,orgId,orgNm,rgnDivCd\";\r\n\r\n3. PivotTable을 구성하기 위한 PivotColumn ID를 지정\r\n  this.grdPivot.pivotkey = \"aplyYm\";\r\n\r\n4. Pivot 정렬 Column ID을 지정\r\n  this.grdPivot.pivotsortkey = \"aplyYm\";\r\n\r\n5. Pivot Table 초기화\r\n  this.fnInitGrid(this.grdPivot);\r\n\r\n6. Pivot Table 적용\r\n  this.fnReCalcPivot(this.grdPivot);");
            obj.set_cssclass("sta_WF_Desc");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPivot00","10","435",null,"152","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsPlusFeeTgtAcru");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"125\"/><Column size=\"120\"/><Column size=\"140\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"tkcgOrgNm\"/><Cell col=\"1\" text=\"mrktgOrgNm\"/><Cell col=\"2\" text=\"orgId\"/><Cell col=\"3\" text=\"orgNm\"/><Cell col=\"4\" text=\"rgnDivCd\"/><Cell col=\"5\" text=\"aplyYm\"/><Cell col=\"6\" text=\"npAcruCascnt\"/><Cell col=\"7\" text=\"npAcruCascntSum\"/><Cell col=\"8\" text=\"holiStorOpenRate\"/><Cell col=\"9\" text=\"holiStorOpenRateSum\"/></Band><Band id=\"body\"><Cell text=\"bind:tkcgOrgNm\"/><Cell col=\"1\" text=\"bind:mrktgOrgNm\"/><Cell col=\"2\" text=\"bind:orgId\"/><Cell col=\"3\" text=\"bind:orgNm\"/><Cell col=\"4\" text=\"bind:rgnDivCd\"/><Cell col=\"5\" text=\"bind:aplyYm\"/><Cell col=\"6\" text=\"bind:npAcruCascnt\"/><Cell col=\"7\" text=\"bind:npAcruCascntSum\"/><Cell col=\"8\" text=\"bind:holiStorOpenRate\"/><Cell col=\"9\" text=\"bind:holiStorOpenRateSum\"/></Band></Format></Formats>");
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
        this.addIncludeScript("SampleCrossTab.xfdl","Lib::Lib_CrossTab.xjs");
        this.registerScript("SampleCrossTab.xfdl", function() {
        /**
        *  Nexacro Professional Training Couse
        *  @MenuPath    개발가이드 > 표준 및 기본 정의 > CrossTab 그리드
        *  @FileName 	SampleCrossTab.xfdl
        *  @Creator 	TOBESOFT Education
        *  @CreateDate 	2023/01/03
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2023/01/03      		 TOBESOFT Education	 	  	최초 생성
        *******************************************************************************
        */



        this.executeIncludeScript("Lib::Lib_CrossTab.xjs"); /*include "Lib::Lib_CrossTab.xjs"*/;

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        /**
         * @description 화면 onload시 처리내역(필수)
        */
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);

        	var sText  = 		  "1. 정렬 컬럼을 지정";
        		sText += "\n" 	+ "this.dsPlusFeeTgtAcru.set_keystring(\"S:+tkcgOrgNm+mrktgOrgNm+orgId+orgNm+rgnDivCd\");";
        		sText += "\n\n"	+ "2. Group로 묶을 컬럼 ID를 지정";
        		sText += "\n"	+ "this.grdPivot.groupkey	= \"tkcgOrgNm,mrktgOrgNm,orgId,orgNm,rgnDivCd\"\;";
        		sText += "\n"	+ "this.grdPivot.summarykey	= \"tkcgOrgNm,mrktgOrgNm,orgId,orgNm,rgnDivCd\"\;";
        		sText += "\n\n" + "3. PivotTable을 구성하기 위한 PivotColumn ID를 지정";
        		sText += "\n" 	+ "this.grdPivot.pivotkey		= \"aplyYm\"\;";
        		sText += "\n\n"	+ "4. Pivot 정렬 Column ID을 지정";
        		sText += "\n" 	+ "this.grdPivot.pivotsortkey 	= \"aplyYm\"\;";

        		sText += "\n\n"	+ "5. Pivot Table 초기화";
        		sText += "\n" 	+ "this.fnInitGrid(this.grdPivot);";
        		sText += "\n\n"	+ "6. Pivot Table 적용";
         		sText += "\n" 	+ "this.fnReCalcPivot(this.grdPivot);";
        //	this.sta03.set_text(sText);

        	// CrossTab 설정
        	this.dsPlusFeeTgtAcru.set_keystring("S:+tkcgOrgNm+mrktgOrgNm+orgId+orgNm+rgnDivCd"); 	//정렬 Column ID을 지정

        	this.grdPivot.groupkey 	 	= "tkcgOrgNm,mrktgOrgNm,orgId,orgNm,rgnDivCd"; 				//Group으로 묶을 Column ID을 지정
        	this.grdPivot.groupsortkey	= "tkcgOrgNm,mrktgOrgNm,orgId,orgNm,rgnDivCd";
        //	this.grdPivot.summarykey	= "tkcgOrgNm,mrktgOrgNm,orgId,orgNm,rgnDivCd";
        	this.grdPivot.pivotkey 	 	= "aplyYm";  												//PivotTable을 구성하기 위한 PivotColumn ID을 지정
        	this.grdPivot.pivotsortkey 	= "aplyYm";      											//Pivot 정렬 Column ID을 지정

        	this.gfnInitGrid   (this.grdPivot);
        	this.gfnReCalcPivot(this.grdPivot);
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/
        /**
         * @description Transaction CallBack 함수(선택)
        */
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if (errorCode != 0)
        	{
        		return;
        	}

        	switch(svcID)
        	{
        		case "search":
        		break;
        	}
        };

        /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/
         /**
         * @description 조회
        */
        this.fnSearch = function ()
        {

        };

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("SampleCrossTab.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
