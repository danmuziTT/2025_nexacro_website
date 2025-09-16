(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frameWorkTitle");
            this.set_scrolltype("none");
            this.set_titletext("frameWorkTitle");
            if (Form == this.constructor)
            {
                this._setFormPosition(1048,38);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btnMyMenu","10","4","17","26",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_Mymnu");
            this.addChild(obj.name, obj);

            obj = new Button("btnSel",null,"5","50","28","285",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"5","50","28","230",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("입력");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnSav",null,"5","50","28","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"5","50","28","175",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnExl",null,"5","50","28","120",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnPrt",null,"5","50","28","65",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("출력");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","31","5","560","26",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("HOME > 1 DEPTH MENU 01 > 2 depth menu 01 > Template 03");
            this.addChild(obj.name, obj);
            // Layout Functions
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
        this.registerScript("FrameWorkTitle.xfdl", function() {
        /**
        *  Nexacro Professional Training Couse
        *  @MenuPath    Frame > FrameWorkTitle
        *  @FileName 	FrameWorkTitle.xfdl
        *  @Creator 	TOBESOFT Education
        *  @CreateDate 	2022/12/22
        *  @Desction    업무화면 공통 타이틀
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2022/12/22      		 TOBESOFT Education	 	  	최초 생성
        *******************************************************************************
        */



        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.objApp 		= this.gfnGetApplication();
        this.fvMenuId 		= "";
        this.fvObjArray 	= new Array();
        this.fvObjArray[0] 	= "btnSel";  //조회
        this.fvObjArray[1] 	= "btnAdd";  //등록
        this.fvObjArray[2] 	= "btnDel";  //삭제
        this.fvObjArray[3] 	= "btnSav";  //저장
        this.fvObjArray[4] 	= "btnExl";  //엑셀
        this.fvObjArray[5] 	= "btnPrt";  //인쇄

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        /**
         * @description 화면 온로드
        */
        this.form_onload = function(obj,e)
        {
        	var sTitle = this.getOwnerFrame().arguments["menuPath"];
        	this.staTitle.set_text(sTitle);

        	this.fvMenuId = this.getOwnerFrame().arguments["menuId"];
        	this.fnSetMyMenuBtn();


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
         * @description 마이메뉴버튼 텍스트바꾸기<br>
        	즐겨찾기되어있는 화면 -> ★ <br>
        	즐겨찾기가안되있는화면 -> ☆
        */
        this.fnSetMyMenuBtn = function ()
        {
        	var objDs = this.objApp.gdsMyMenu;
        	var nRow = objDs.findRow("MENU_ID", this.fvMenuId);

        	if( nRow < 0 ){
        		this.btnMyMenu.set_cssclass("btn_WF_Mymnu");
        	}
        	else{
        		this.btnMyMenu.set_cssclass("btn_WF_MymnuS");
        	}
        };

        /**
         * @description  폼권한에 따른 공통버튼 visible처리(6자리)
        */
        this.fnSetAuthBtn = function(sAuth)
        {
        	var nRigth = 10; //right기준값
        	var nGap = 2;    //버튼사이 폭
        	for (var i = 0; i < 6; i++)
        	{
        		if(sAuth.substr(i,1) == "Y"){

        			var sObj = this[this.fvObjArray[i]];
        			sObj.set_visible(true);

        			//=================글자크기에 맞게 버튼 폭을 변경하려면 주석 해제==========
        			//var arr = nexacro.getTextSize(sObj.text, sObj);
        			//sObj.set_width(arr.nx + 30);
        			//===============================================================================
        		}else{
        			var sObj = this[this.fvObjArray[i]];
        			sObj.set_visible(false);
        		}
        	}

        	for(var i = 5; i > -1; i--) {
        		var sObj = this[this.fvObjArray[i]];
        		if (sObj.visible){
        			sObj.move(null, 15, sObj.getOffsetWidth(), sObj.getOffsetHeight(), nRigth);
        			nRigth = nRigth + nexacro.toNumber(nGap) + nexacro.toNumber(sObj.getOffsetWidth());
        		}
        	}
        };


        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
         * @description  즐겨찾기버튼 클릭 이벤트
        */
        this.btnMyMenu_onclick = function(obj,e)
        {
        	var bIsMymenu=false;
        	var sBtnCss = this.btnMyMenu.cssclass;
        	if( sBtnCss == "btn_WF_MymnuS") bIsMymenu = true;

        	var objDs     = this.objApp.gdsMyMenu;
        	var objMenuDs = this.objApp.gdsMenu;

        	objDs.set_enableevent(false);
        	this.objApp.avLeftFrame.form.divLeft.form.grdMyMenu.set_enableredraw(false);

        	if( bIsMymenu ) {
        		//즐겨찾기해제
        		var nRow = objDs.findRow("MENU_ID",this.fvMenuId);
        		if( nRow > -1 ) objDs.deleteRow(nRow);
        	}
        	else{
        		//즐겨찾기추가
        		var nRow = objMenuDs.findRow("MENU_ID", this.fvMenuId);
        		var nNewRow =  objDs.addRow();
        		objDs.copyRow(nNewRow, objMenuDs, nRow);
        	}

        	objDs.set_enableevent(true);
        	this.objApp.avLeftFrame.form.divLeft.form.grdMyMenu.set_enableredraw(true);
        	nexacro.setPrivateProfile("gdsMyMenu", objDs.saveXML());
        	this.fnSetMyMenuBtn();
        };

        /**
         * @description  공통버튼클릭이벤트
        */
        this.fnBtnClick = function(obj,e)
        {
        	//this.parent.divWork.fn_comBtnClick(obj, e);
        	var sName = String(obj.name).substr(3,3);

            switch(sName) {
            case "Sel":
        	    this.parent.parent.divWork.form.fnSearch();
            	break;
            case "Add":
            	 this.parent.parent.divWork.form.fnAdd();
            	break;
            case "Sav":
            	 this.parent.parent.divWork.form.fnSave();
            	break;
            case "Del":
            	 this.parent.parent.divWork.form.fnDel();
            	break;
            case "Exl":
            	 this.parent.parent.divWork.form.fnExcel();
            	break;
            case "Prt":
            	 this.parent.parent.divWork.form.fnPrint();
            	break;
            default:
            }

        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnMyMenu.addEventHandler("onclick",this.btnMyMenu_onclick,this);
            this.btnSel.addEventHandler("onclick",this.fnBtnClick,this);
            this.btnAdd.addEventHandler("onclick",this.fnBtnClick,this);
            this.btnSav.addEventHandler("onclick",this.fnBtnClick,this);
            this.btnDel.addEventHandler("onclick",this.fnBtnClick,this);
            this.btnExl.addEventHandler("onclick",this.fnBtnClick,this);
            this.btnPrt.addEventHandler("onclick",this.fnBtnClick,this);
        };
        this.loadIncludeScript("FrameWorkTitle.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
