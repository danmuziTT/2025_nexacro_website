(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("LeftFrame");
            this.set_titletext("frameLeft");
            this.set_background("#f3f5f6");
            if (Form == this.constructor)
            {
                this._setFormPosition(248,760);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMenu", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MENU_GROUP\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_PID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"INT\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME_EN\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_NO\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPdivMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_GROUP\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_PID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"INT\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME_EN\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_NO\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new PopupDiv("pdivMenuSearch","264","58","200","213",null,null,null,null,null,null,this);
            obj.set_text("pdiv00");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMenuSearch","0","30",null,"183","0",null,null,null,null,null,this.pdivMenuSearch.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("dsPdivMenu");
            obj.set_cssclass("grd_LF_Detail");
            obj.set_nodatatext("no data");
            obj.set_scrollbardecbuttonsize("0");
            obj.set_scrollbarincbuttonsize("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"211\"/></Columns><Rows><Row size=\"26\"/></Rows><Band id=\"body\"><Cell text=\"bind:MENU_NAME\" textAlign=\"left\" padding=\"0px 0px 0px 5px\"/></Band></Format></Formats>");
            this.pdivMenuSearch.addChild(obj.name, obj);

            obj = new Edit("edtMenuSearch","0","0",null,"26","0",null,null,null,null,null,this.pdivMenuSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("edt_LF_Search");
            obj.set_displaynulltext("메뉴를 검색하세요");
            obj.set_autoselect("true");
            this.pdivMenuSearch.addChild(obj.name, obj);

            obj = new Button("btnMenuSearch",null,"4","21","21","5",null,null,null,null,null,this.pdivMenuSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_LF_Search");
            this.pdivMenuSearch.addChild(obj.name, obj);

            obj = new Div("divLeft","10","39","230",null,null,"10",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("div00");
            obj.set_cssclass("div_LF_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTree","0","10",null,null,"0","0",null,null,null,null,this.divLeft.form);
            obj.set_treeinitstatus("collapse,null");
            obj.set_cssclass("grd_LF_Tree");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_binddataset("dsMenu");
            obj.set_treeuseline("false");
            obj.set_treeuseimage("false");
            obj.set_taborder("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"208\"/></Columns><Rows><Row size=\"32\"/></Rows><Band id=\"body\"><Cell edittype=\"tree\" text=\"bind:MENU_NAME\" treestartlevel=\"1\" treelevel=\"bind:MENU_LEVEL\" tooltiptext=\"bind:MENU_NAME\" textAlign=\"left\" displaytype=\"treeitemcontrol\" cssclass=\"expr:MENU_LEVEL == 1 ? &quot;cell_LF_Lev0&quot; : &quot;cell_LF_Lev1&quot;\"/></Band></Format><Format id=\"mymenu\"><Columns><Column size=\"48\"/></Columns><Rows><Row size=\"30\"/></Rows><Band id=\"body\"><Cell text=\"bind:MENU_NAME\"/></Band></Format></Formats>");
            this.divLeft.addChild(obj.name, obj);

            obj = new Grid("grdMyMenu","0","10",null,null,"0","0",null,null,null,null,this.divLeft.form);
            obj.set_treeinitstatus("collapse,null");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_cellsizingtype("col");
            obj.set_binddataset("gdsMyMenu");
            obj.set_treeuseline("false");
            obj.set_treeuseimage("false");
            obj.set_taborder("1");
            obj.set_visible("false");
            obj.set_cssclass("grd_LF_Tree");
            obj.set_border("0px none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"208\"/></Columns><Rows><Row size=\"30\"/></Rows><Band id=\"body\"><Cell text=\"bind:MENU_NAME\" tooltiptext=\"bind:MENU_NAME\" textAlign=\"left\" padding=\"0px 0px 0px 10px\"/></Band></Format></Formats>");
            this.divLeft.addChild(obj.name, obj);

            obj = new Button("btnMyMenu","92","10","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_visible("true");
            obj.set_cssclass("btn_LF_MymenuIcon");
            obj.set_text("MyMenu");
            this.addChild(obj.name, obj);

            obj = new Button("btnOpenMenuFind","190","16","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_LF_Find");
            this.addChild(obj.name, obj);

            obj = new Button("btnMenu","10","10","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_LF_MenuIcon");
            obj.set_text("Menu");
            this.addChild(obj.name, obj);

            obj = new Button("btnMenuChange","218","16","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_LF_Change");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.pdivMenuSearch.form
            obj = new Layout("default","",0,0,this.pdivMenuSearch.form,function(p){});
            this.pdivMenuSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divLeft.form
            obj = new Layout("default","",0,0,this.divLeft.form,function(p){});
            this.divLeft.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FrameLeft.xfdl", function() {
        /**
        *  Nexacro Professional Training Couse
        *  @MenuPath    Frame > FrameLeft
        *  @FileName 	FrameLeft.xfdl
        *  @Creator 	TOBESOFT Education
        *  @CreateDate 	2022/12/22
        *  @Desction    Left 메뉴
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2022/12/22      		 TOBESOFT Education	 	  	최초 생성
        *******************************************************************************
        */


        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.fvObjApp = this.gfnGetApplication();

        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        /**
         * @description 화면 onload시 처리내역(필수)
        */
        this.form_onload = function(obj,e)
        {
        	this.set_scrollbartype("none")
        	this.btnMenu.setSelectStatus(true);

        	var sGdsMyMenuXML = nexacro.getPrivateProfile("gdsMyMenu");
        	if( !this.gfnIsNull(sGdsMyMenuXML)) {
        		this.fvObjApp.gdsMyMenu.loadXML(sGdsMyMenuXML);
        	}
        };

        /**
         * @description 다국어 처리
        */
        this.fnChangeLang = function()
        {
        	// 다국어 처리
        	var sNowLang = nexacro.getEnvironmentVariable("evLanguage");
        	if (sNowLang != "KO") {
        		this.grdTree.setCellProperty("Body", 0, "text", "bind:MENU_NAME_"+sNowLang);
        		this.grdTree.setCellProperty("Body", 0, "tooltiptext", "bind:MENU_NAME_"+sNowLang);

        		this.grdMyMenu.setCellProperty("Body", 0, "text", "bind:MENU_NAME_"+sNowLang);

        		this.pdivMenuSearch.form.edtMenuSearch.set_displaynulltext("Search the menu.");
        		this.pdivMenuSearch.form.grdMenuSearch.setCellProperty("Body", 0, "text", "bind:MENU_NAME_"+sNowLang);

        	}
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/

        /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
         * @description 상단 top메뉴 변경시 left메뉴 변경 처리
        */
        this.fnChangeMenu = function (topMenuId)
        {
        	// Left Frame 닫혀있을 경우 펼침
        	var sCssClass = "";
        	if(this.fvObjApp.avHFrameSet.separatesize == this.fvObjApp.avLeftClose)
        	{
        		this.fvObjApp.avHFrameSet.set_separatesize(this.fvObjApp.avLeftOpen);
        		if(this.fvObjApp.avLeftMinFrame.form.pdivMenu.isPopup())	this.fvObjApp.avLeftMinFrame.form.pdivMenu.closePopup();
        	}


        	var filterExpr = this.FRAME_MENUCOLUMNS.groupId + " == " + nexacro.wrapQuote(topMenuId) + " && " + this.FRAME_MENUCOLUMNS.menuLevel + "!=0 && USE_YN=='Y'";

        	this.fvObjApp.gdsMenu.set_enableevent(false);
        	this.dsMenu.set_enableevent(false);
        	this.fvObjApp.gdsMenu.filter(filterExpr);
        	this.dsMenu.copyData(this.fvObjApp.gdsMenu, true);
        	this.fvObjApp.gdsMenu.filter("");
        	this.fvObjApp.gdsMenu.set_enableevent(true);
        	this.dsMenu.set_enableevent(true);
        };

         /**
         * @description FORM오픈 [공통함수호출]
        */
        this.fnFormOpen = function (objDs,nTargetRow,objArg)
        {
        	if( this.gfnIsNull(objDs) ) return;
        	if( this.gfnIsNull(nTargetRow) ) return;

        	var oObj = {
        		ds    : objDs,  			// 메뉴 dataset
        		nRow  : nTargetRow,      	// 선택된
        		oArgs : objArg       		// 넘길 argument
        	};
        	this.gfnCall(oObj);
        };

        /**
         * @description 글로벌 데이터셋 메뉴 카피
        */
        this.fnGlobalMenuCopy = function ()
        {
        	this.fvObjApp.gdsMenu.filter("MENU_URL.length > 0 && USE_YN=='Y'");
        	this.dsPdivMenu.copyData(this.fvObjApp.gdsMenu, true);
        	this.fvObjApp.gdsMenu.filter("");

        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
         * @description 트리클릭이벤트
        */
        this.grdTree_oncellclick = function(obj,e)
        {
        	// Tree 이미지 클릭시 리턴
        	if(e.clickitem == "treeitembutton") return;

        	var nRow = obj.getTreeRow(e.row);
        	// true 는 false 로 false 는 true 로 변경
        	var nStat = obj.getTreeStatus(nRow)^1;

        	// 자식이 없으면
        	if(nStat != 2) obj.setTreeStatus(nRow ,nStat);

        	// 해당 Tree만 펼치고 나머지는 닫는다.
        	this.fnExceptSelfCollapse(obj, e.row);


        	// Click시 해당 메뉴 호출
        	var objDs = obj.getBindDataset();
        	var sMenuUrl = objDs.getColumn(e.row, "MENU_URL");
        	if(this.gfnIsNull(sMenuUrl) == false){
        		// 메뉴 화면 호출
        		this.fnFormOpen(objDs, e.row);
        		if(this.parent.name == "pdivMenu"){
        			this.fvObjApp.avLeftMinFrame.form.pdivMenu.closePopup();
        		}
        	}

        };

        // PopupDiv 메뉴에서 메뉴 선택시 left에도 동일하게 표현해주기 위한 함수
        this.fnPopupCall = function(obj, e)
        {
        	obj = this.divLeft.form.grdTree;

        	// Tree 이미지 클릭시 리턴
        	if(e.clickitem == "treeitembutton") return;

        	var nRow = obj.getTreeRow(e.row);
        	trace(nRow + " : " + e.row);
        	// true 는 false 로 false 는 true 로 변경
        	var nStat = obj.getTreeStatus(nRow)^1;

        	// 자식이 없으면
        	if(nStat != 2) obj.setTreeStatus(nRow ,nStat);

        	var objDs = obj.getBindDataset();
        	trace(objDs.saveXML());
        	objDs.set_rowposition(e.row);

        	// 해당 Tree만 펼치고 나머지는 닫는다.
        	this.fnExceptSelfCollapse(obj, e.row);

        }

        this.grdMyMenu_oncellclick = function(obj,e)
        {
        	// Click시 해당 메뉴 호출
        	var objDs = obj.getBindDataset();
        	var sMenuId = objDs.getColumn(e.row, "MENU_ID");
        	if(this.gfnIsNull(sMenuId) == false){
        		// 메뉴 화면 호출
        		this.fnFormOpen(objDs, e.row);
        	}
        };

        /**
         * @description  메뉴/마이메뉴 버튼 중 메뉴버튼 클릭
        */
        this.btnMenu_onclick = function(obj,e)
        {
        	this.divLeft.form.grdTree.set_visible(true);
        	this.divLeft.form.grdMyMenu.set_visible(false);

        	this.btnMenu.setSelectStatus(true);
        	this.btnMyMenu.setSelectStatus(false);
        };

        /**
         * @description  메뉴/마이메뉴 버튼 중 마이메뉴버튼 클릭
        */
        this.btnMyMenu_onclick = function(obj,e)
        {
        	this.divLeft.form.grdTree.set_visible(false);
        	this.divLeft.form.grdMyMenu.set_visible(true);

        	this.btnMenu.setSelectStatus(false);
        	this.btnMyMenu.setSelectStatus(true);
        };

        /**
         * @description  tree 메뉴에서 선택한 Row의 Root를 제외한 collapse 처리
        */
        this.fnExceptSelfCollapse = function(obj, erow)
        {
        	obj.set_enableredraw(false);
        	obj.set_enableevent(false);

        	var strTreePath = obj.getTreePath(erow);

        	var bRet;
        	//선택한 행 하단 startlevel collapse 처리
        	for (var i = erow+1; i < obj.getBindDataset().rowcount; i++) {
        		bRet = obj.isTreeLeafRow(i);
        		//자식이 있다면
        		if (!bRet) {
        			if (obj.getTreePath(i).indexOf(strTreePath) > -1) {
        				obj.setTreeStatus(obj.getTreeRow(i), true);
        				strTreePath = obj.getTreePath(i);
        			}
        			else {
        				obj.setTreeStatus(obj.getTreeRow(i), false);
        			}
        		}
        	}

        	//선택한 행 상단 startlevel collapse 처리
        	for (var i = erow; i >= 0; --i) {
        		bRet = obj.isTreeLeafRow(i);
        		//자식이 있다면
        		if (!bRet) {
        			if (strTreePath.indexOf(obj.getTreePath(i)) > -1 ){
        				// Do nothing..
        			}
        			else {
        				obj.setTreeStatus(obj.getTreeRow(i) ,false);
        			}
        		}
        	}

        	obj.set_enableevent(true);
        	obj.set_enableredraw(true);
        }





        this.edtMenuSearch_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13) {
        		var sNm = obj.value;
        		this.fnSearchMenu(sNm);
        	}
        };

        //메뉴 검색 pdiv 오픈
        this.btnOpenMenuFind_onclick = function(obj,e)
        {
        	this.pdivMenuSearch.set_width(this.divLeft.getOffsetWidth());
        	this.pdivMenuSearch.trackPopupByComponent(this.divLeft.form.grdTree, 0, 0);
        	this.pdivMenuSearch.form.edtMenuSearch.setFocus();
        };


        this.btnMenuSearch_onclick = function(obj,e)
        {
        	var sNm = this.pdivMenuSearch.form.edtMenuSearch.value;
        	this.fnSearchMenu(sNm);
        };

        /**
         * @description 메뉴검색 팝업DIV 띄우기
        */
        this.fnSearchMenu = function(sNm)
        {
        	if(this.gfnIsNull(sNm)) return;
        	sNm = sNm.trim();

        	this.dsPdivMenu.set_enableevent(false);
        	this.pdivMenuSearch.form.grdMenuSearch.set_enableredraw(false);

        	this.dsPdivMenu.filter("");
        	sNm = sNm.toLowerCase();
        	this.dsPdivMenu.filter("MENU_NAME.toLowerCase().indexOf('"+sNm+"') > -1 || MENU_NAME_EN.toLowerCase().indexOf('"+sNm+"') > -1");

        	this.dsPdivMenu.set_enableevent(true);
        	this.pdivMenuSearch.form.grdMenuSearch.set_enableredraw(true);

        //	this.pdivMenuSearch.trackPopupByComponent(this.edtMenuSearch, 0, this.edtMenuSearch.getOffsetHeight());

        	if(this.dsPdivMenu.rowcount > 0){
        		this.pdivMenuSearch.form.grdMenuSearch.setFocus();
        		this.pdivMenuSearch.form.grdMenuSearch.selectCell(0,0,true);
        	}
        	else{
        		this.pdivMenuSearch.form.edtMenuSearch.setFocus();
        	}

        };
        this.pdivMenuSearch_grdMenuSearch_oncellclick = function(obj,e)
        {
        	if( e.row > -1){
        		this.fnFormOpen(this.dsPdivMenu, e.row);
        		this.pdivMenuSearch.closePopup();
        	}
        };

        this.pdivMenuSearch_grdMenuSearch_onkeydown = function(obj,e)
        {
        	if( e.keycode == 13 ) {
        		if( obj.currentrow > -1 ) {
        			this.fnFormOpen(this.dsPdivMenu, obj.currentrow);
        			this.pdivMenuSearch.closePopup();
        		}
        	}
        };

        this.btnMenuChange_onclick = function(obj,e)
        {
        	if(this.fvObjApp.avHFrameSet.separatesize == this.fvObjApp.avLeftOpen){
        		this.fvObjApp.avHFrameSet.set_separatesize(this.fvObjApp.avLeftClose);
        		this.fvObjApp.avLeftMinFrame.form.fvOpenFlag = true;

        	}
        	else{
        		// Left 고정할경우 PopupDiv 트리 형태로 Left 트리를 변경
        		var nMenuRow = this.fvObjApp.avLeftMinFrame.form.pdivMenu.form.divLeft.form.grdTree.getBindDataset().rowposition;
        		this.fvObjApp.avLeftMinFrame.form.fnTreeStatus(this.fvObjApp.avLeftFrame.form.divLeft.form.grdTree, nMenuRow);
        		this.fvObjApp.avHFrameSet.set_separatesize(this.fvObjApp.avLeftOpen);

        	}

        	if(this.fvObjApp.avLeftMinFrame.form.pdivMenu.isPopup())	this.fvObjApp.avLeftMinFrame.form.pdivMenu.closePopup();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onsize",this.Form_onsize,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.pdivMenuSearch.form.grdMenuSearch.addEventHandler("oncellclick",this.pdivMenuSearch_grdMenuSearch_oncellclick,this);
            this.pdivMenuSearch.form.grdMenuSearch.addEventHandler("onkeydown",this.pdivMenuSearch_grdMenuSearch_onkeydown,this);
            this.pdivMenuSearch.form.edtMenuSearch.addEventHandler("onkeydown",this.edtMenuSearch_onkeydown,this);
            this.pdivMenuSearch.form.btnMenuSearch.addEventHandler("onclick",this.btnMenuSearch_onclick,this);
            this.divLeft.form.grdTree.addEventHandler("oncellclick",this.grdTree_oncellclick,this);
            this.divLeft.form.grdMyMenu.addEventHandler("oncellclick",this.grdMyMenu_oncellclick,this);
            this.btnMyMenu.addEventHandler("onclick",this.btnMyMenu_onclick,this);
            this.btnOpenMenuFind.addEventHandler("onclick",this.btnOpenMenuFind_onclick,this);
            this.btnMenu.addEventHandler("onclick",this.btnMenu_onclick,this);
            this.btnMenuChange.addEventHandler("onclick",this.btnMenuChange_onclick,this);
        };
        this.loadIncludeScript("FrameLeft.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
