(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SampleTransaction");
            this.set_titletext("화면표준 및 Transaction");
            this.getSetter("classname").set("Work");
            this.getSetter("inheritanceid").set("");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID\"/><Col id=\"NAME\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new ExcelExportObject("xls00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdList","10","116",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj.set_selecttype("row");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"149\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"아이디\" expandchar=\"user.id\"/><Cell col=\"1\" text=\"명칭\" expandchar=\"designation\"/><Cell col=\"2\" text=\"설명\" expandchar=\"description\"/><Cell col=\"3\" text=\"사용여부\" expandchar=\"useflg\"/><Cell col=\"4\" text=\"등록자\" expandchar=\"reguser\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\" edittype=\"normal\"/><Cell col=\"1\" text=\"bind:NAME\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:DESCRIPTION\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:USE_YN\" edittype=\"text\"/><Cell col=\"4\" text=\"bind:REG_USER\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","10","35",null,"46","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("div_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Edit("edtId","106","9","157","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtName","432","9","157","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01","59","9","47","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("ID");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00","363","9","69","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("NAME");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"3","70","28","157",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("입력");
            obj.getSetter("uWord").set("insert");
            obj.set_cssclass("btn_WF_FrmMain");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"3","70","28","84",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("삭제");
            obj.getSetter("uWord").set("delete");
            obj.set_cssclass("btn_WF_FrmMain");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"3","70","28","11",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.getSetter("uWord").set("save");
            obj.set_cssclass("btn_WF_FrmMain");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelEx",null,"86","99","24","113",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Excel export");
            obj.set_cssclass("btn_WF_FrmSub");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelImport",null,"86","100","24","10",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Excel import");
            obj.set_cssclass("btn_WF_FrmSub");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelTitle",null,"86","136","24","215",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Excel export(title)");
            obj.set_cssclass("btn_WF_FrmSub");
            this.addChild(obj.name, obj);

            obj = new Button("btnGridSize","514","86","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("데이타 만큼 그리드 크기 조정");
            obj.set_cssclass("btn_WF_FrmSub");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","10","0","221","35",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("화면표준 및 Transaction");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"3","70","28","230",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("조회");
            obj.getSetter("uWord").set("search");
            obj.set_cssclass("btn_WF_FrmMain");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00","10","81","196","35",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("데이터 목록");
            obj.set_cssclass("sta_WF_TitleSub");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.edtId","value","dsSearch","ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtName","value","dsSearch","NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SampleTransaction.xfdl", function() {
        /**
        *  Nexacro Professional Training Couse
        *  @MenuPath    개발가이드 > 표준 및 기본 정의 > 화면표준 및 Transaction
        *  @FileName 	SampleTransaction.xfdl
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
        this.fvTest   = "aaa";	// form변수 Sample
        this.fvRtnVal = "Okay";	// 팝업에 url Link시 리턴할 form변수 Sample (숫자, 문자열, 불린값, undefined, null 만 가능)

        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        /**
         * @description 화면 onload시 처리내역(필수)
        */
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);
        };

        /**
         * @description 화면 닫힐때 변경사항 체크(입력 화면에서 변경되는 Dataset 체크 필요, 선택)
         * @return {boolean} true(화면 닫음) / false(화면 닫지 않음)
        */
        this.fnClose = function()
        {
        	if (this.gfnDsIsUpdated(this.dsList)) {
        		return false;
        	}
        	else {
        		return true;
        	}
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
        	if(errorCode != 0)
        	{
        		return;
        	}

        	switch(svcID)
        	{
        		case "search":
        			// trace(this.dsList.saveXML());
        			break;

        		case "save":
        			// 저장 되었습니다.
        			this.gfnAlert("msg.save.success");
        			break;
        	}
        };

        /**
         * @description Popup CallBack 함수(선택)
        */
        this.fnPopupCallback = function(strId, strVal)
        {
        	trace(" strId : " + strId + " strVal : " + strVal);
        };


        /**
         * @description import CallBack 함수(선택)
        */
        this.fnImportCallback = function(datasetId)
        {
        	trace("datasetId : " + datasetId + "\n" +this.dsList.saveXML());
        };

        /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/
        /**
         * @description 조회
        */
        this.fnSearch = function ()
        {

         	var strSvcId    = "search";
        	var strSvcUrl   = "transactionSelect.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsList=dsList";
        	var strArg      = "NAME=" + this.gfnNvl(this.divSearch.form.edtName.value,"");
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

        /**
         * @description 입력
        */
        this.fnAdd = function()
        {
        	var nRow = this.dsList.addRow();
        	this.grdList.setFocus();
        	this.grdList.setCellPos(0);
        };

        /**
         * @description 삭제
        */
        this.fnDel = function()
        {
        	this.dsList.deleteRow(this.dsList.rowposition);
        };

        /**
         * @description 저장
        */
        this.fnSave = function()
        {
        	// 변경사항 체크
        	if (this.gfnDsIsUpdated(this.dsList) == false) {
        		// 변경된 내역이 없습니다.
        		this.gfnAlert("msg.save.nochange");
        		return;
        	}

        	// Validation 체크
        	this.gfnClearValidation(this.dsList);
        	this.gfnSetValidation(this.dsList, "ID", "아이디", "required,minlength:5");
         	if (this.gfnValidation(this.dsList, "U") == false) return;

        	var strSvcUrl   = "transactionSave.do";
        	var inData      = "dsList=dsList:U";
        	var outData     = "dsList=dsList";

        	this.gfnTransaction("save", strSvcUrl, inData, outData);
        };

        /**
         * @description 엑셀
        */
        this.fnExcel = function(argGrid)
        {
        	// 대상 Grid 지정
        	var sGridName = argGrid.name + "Excel";

        	if (!this[sGridName])
        	{
        		var objGrid = new Grid("Grid", argGrid.getOffsetLeft(), argGrid.getOffsetTop(), argGrid.getOffsetWidth(), argGrid.getOffsetHeight(), null, null);	// 17 소스
        		//var objGrid = new Grid("Grid", "absolute", argGrid.getOffsetLeft(), argGrid.getOffsetTop(), argGrid.getOffsetWidth(), argGrid.getOffsetHeight(), null, null);	// 14 소스
        		this.addChild(sGridName, objGrid);
        		objGrid.show();
        	}
        	else {
        		var objGrid = this[sGridName];
        	}

        	objGrid.set_visible(false);
            objGrid.set_formats(argGrid.getCurFormatString(false));
            objGrid.set_formatid(argGrid.formatid);
            objGrid.set_binddataset(argGrid.binddataset);
        	var nCellCnt = argGrid.getCellCount("head");

        	// Title
        	var nRow = objGrid.insertContentsRow("head", 0);
        	var nCell = objGrid.mergeContentsCell("head", 0, 0, 0, nCellCnt-1, 0, false);
        	objGrid.setCellProperty("head", nCell, "text", this.gfnGetArgument("menuNm"));
        	objGrid.setCellProperty("Head", nCell, "font", "18");
        	//objGrid.setCellProperty("Head", nCell, "align", "center middle");

        	// Title 밑 1줄 추가
        	var nRow2 = objGrid.insertContentsRow("head", 1);
        	var nCell2 = objGrid.mergeContentsCell("head", 1, 0, 1, nCellCnt-1, 1, false);

        	/**
        	* gfnExcelExport : excel export
        	* @param  : obj		   - [object]Grid Object
        	* @param  : sSheetName - [string]sheet name[생략가능] sheet명 30자까지가능, *?등 특수문자 불가
        	* @param  : sFileName  - [string]file name[생략가능]
        	* @return : N/A
        	* @example : this.gfnExcelExport(this.grid_export, "SheetName","");
        	*/
        	this.gfnExcelExport(objGrid, "*?*?*?*?*?*?*?","");
        };


        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/

        /**
         * @description  excel export(dll) success event
         */
        this.exportExcelObject_onsuccess = function(obj,e)
        {
        	trace("------ExcelExportObject00_onsuccess---------");
         	trace(e.url);

        	system.execShell(e.url);
        }

        /**
         * @description  excel export(dll) error event
         */
        this.exportExcelObject_onerror = function(obj,e)
        {
        	trace("------ExcelExportObject00_onerror---------");
         	trace(e.errortype);
         	trace(e.errormsg);
         	trace(e.statuscode);
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/

        this.btnExcelEx_onclick = function(obj,e)
        {
        	this.fnExcel(this.grdList);
        };

        this.btnExcelImport_onclick = function(obj,e)
        {
        	/**
        	* gfnExcelImport : excel import
        	* @param  : sDataset	- [string] dataset
        	* @param  : sSheet 		- [string] sheet name	  [생략가능 default:Sheet1]
        	* @param  : sHead  		- [string] Head 영역지정 [필수:: from:to]
        	* @param  : sBody  		- [string] body 영역지정 [생략가능default A2]
        	* @param  : sCallback	- [string] callback 함수[callback호출시 필수]
        	* @param  : sImportId 	- [string] import id 	 [callback호출시 필수]
        	* @param  : objForm  	- [object] form object	 [callback호출시 필수]
        	* @return : N/A
        	* @example :this.gfnExcelImportAll("dsList","SheetName","A1:G1","A2","fnImportCallback","import",this);
        	*/
        	this.gfnExcelImport("dsList", "sheet1", "A4", "fnImportCallback", "dsList" , this);
        };


        /**
         * @description  엑셀 익스포트 시 Title 자동 추가
         */
        this.btnExcelTitle_onclick = function(obj,e)
        {
        	// 대상 Grid 지정
        	var objGrid   = this.grdList;
        	var sGridName = objGrid.name + "Excel";

        	if (!this[sGridName])
        	{
        		var objGrid = new Grid("Grid", 0, 0, 0, 0, null, null);
        		this.addChild(sGridName, objGrid);
        		objGrid.show();
        	}
        	else {
        		var objGrid = this[sGridName];
        	}

        	//objGrid.set_visible(false);
            objGrid.set_formats(this.grdList.getCurFormatString(false));
            objGrid.set_formatid(this.grdList.formatid);
            objGrid.set_binddataset(this.grdList.binddataset);
            objGrid.set_visible(false);

        	var nCellCnt = this.grdList.getCellCount("head");

        	// Title
        	var nRow = objGrid.insertContentsRow("head", 0);
        	var nCell = objGrid.mergeContentsCell("head", 0, 0, 0, nCellCnt-1, 0, false);
        	objGrid.setCellProperty("head", nCell, "text", "Excell Test");

        	// Title 밑 1줄 추가
        	var nRow2 = objGrid.insertContentsRow("head", 1);
        	var nCell2 = objGrid.mergeContentsCell("head", 1, 0, 1, nCellCnt-1, 1, false);

        	this.gfnExcelExport(objGrid, "*?*?*?*?*?*?*?","");
        };

        this.btnGridSize_onclick = function(obj,e)
        {
        	var nHeader = this.grdList.getRealRowFullSize("head");
        	var nBody   = this.grdList.getRealRowFullSize("body");
        	var nSum    = this.grdList.getRealRowFullSize("summary");

        	// 그리드 boder 값 추가
        	var nHeight = nHeader + nBody + nSum + 2;

        	// 현재 그리드 크기보다 데이터가 많을때만 크기 조정
        	if (this.grdList.getOffsetHeight() < nHeight) {
        		this.grdList.set_height(nHeight);
        	}

        	this.resetScroll();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnAdd.addEventHandler("onclick",this.fnAdd,this);
            this.btnDel.addEventHandler("onclick",this.fnDel,this);
            this.btnSave.addEventHandler("onclick",this.fnSave,this);
            this.btnExcelEx.addEventHandler("onclick",this.btnExcelEx_onclick,this);
            this.btnExcelImport.addEventHandler("onclick",this.btnExcelImport_onclick,this);
            this.btnExcelTitle.addEventHandler("onclick",this.btnExcelTitle_onclick,this);
            this.btnGridSize.addEventHandler("onclick",this.btnGridSize_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.fnSearch,this);
        };
        this.loadIncludeScript("SampleTransaction.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
