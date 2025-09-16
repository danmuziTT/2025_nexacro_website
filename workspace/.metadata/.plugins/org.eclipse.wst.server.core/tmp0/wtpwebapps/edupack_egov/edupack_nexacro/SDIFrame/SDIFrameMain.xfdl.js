(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FrameSDI");
            this.set_titletext("FrameSDI");
            this.set_background("#f3f5f6");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,790);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divFrameTop","0","0",null,"80","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_url("SDIFrame::SDIFrameTop.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divFrameLeft","10","90","230",null,null,"10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_url("SDIFrame::SDIFrameLeft.xfdl");
            obj.set_text("");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Div("divFrameWork","divFrameLeft:10","90",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #d3dce1");
            obj.set_url("SDIFrame::SDIFrameMainForm.xfdl");
            obj.set_async("false");
            this.addChild(obj.name, obj);

            obj = new Div("divNotice",null,null,"300","120","10","10",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrollbartype("none");
            obj.set_cssclass("div_MF_Notice");
            this.addChild(obj.name, obj);

            obj = new Static("staNotice","65","30",null,null,"10","10",null,null,null,null,this.divNotice.form);
            obj.set_taborder("0");
            obj.set_textAlign("left");
            obj.set_verticalAlign("top");
            obj.set_text("공지사항 입니다.\r\n\r\n열심히 합시다");
            this.divNotice.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"7","15","15","10",null,null,null,null,null,this.divNotice.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_MF_Close");
            this.divNotice.addChild(obj.name, obj);

            obj = new Static("sta00","10","20","48","48",null,null,null,null,null,null,this.divNotice.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_MF_Notice");
            this.divNotice.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divFrameTop
            obj = new Layout("default","",0,0,this.divFrameTop.form,function(p){});
            this.divFrameTop.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFrameLeft
            obj = new Layout("default","",0,0,this.divFrameLeft.form,function(p){});
            this.divFrameLeft.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFrameWork
            obj = new Layout("default","",0,0,this.divFrameWork.form,function(p){});
            this.divFrameWork.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divNotice.form
            obj = new Layout("default","",0,0,this.divNotice.form,function(p){});
            this.divNotice.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1300,790,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","SDIFrame::SDIFrameTop.xfdl");
            this._addPreloadList("fdl","SDIFrame::SDIFrameLeft.xfdl");
            this._addPreloadList("fdl","SDIFrame::SDIFrameMainForm.xfdl");
        };
        
        // User Script
        this.registerScript("SDIFrameMain.xfdl", function() {
        /**
        *  Nexacro Professional Training Couse
        *  @MenuPath    SIDFrame > SDIFrameMain
        *  @FileName 	SDIFrameMain.xfdl
        *  @Creator 	TOBESOFT Education
        *  @CreateDate 	2022/12/22
        *  @Desction    SDI Main Form
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2022/12/22      		 TOBESOFT Education	 	  	최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.fvObjApp = nexacro.getApplication();
        this.fvTop  = this.divFrameTop;
        this.fvLeft = this.divFrameLeft;
        this.fvWork = this.divFrameWork;


        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        this.FrameSDI_oninit = function(obj,e)
        {
        	this.divFrameLeft.set_width(0);
        	this.divFrameWork.set_left("divFrameLeft:-1");

        	// 알림창 숨기기
        	this.divNotice.set_height(0);

        };

        this.form_onload = function(obj,e)
        {
        	this.fvObjApp.avWorkFrame = this.fvObjApp.mainframe.WorkFrame.form.divFrameWork;

        	// 다국어 처리 START
        	this.gfnInitLang(this.divFrameLeft.form);
        	this.divFrameLeft.form.fnChangeLang();

        	// Top Frame Argument Setting
        	this.divFrameTop.form.fnLoad();
        	this.divFrameTop.form.fnSetName();

        	// Left Frmae 메뉴 검색용 Dataset
        	this.divFrameLeft.form.fnGlobalMenuCopy();

        	if (system.navigatorname != "nexacro"){
        		var hash = MyHistory.getLocationHash();
        		var data ;
        		trace("Main: " + hash + " : " + data);

         		if(this.gfnIsNull(hash)){
         			var sHash 	= "MainPage";
         			var oData	= {};
         			MyHistory.setLocationHash(sHash, oData);
         		}

        		if (hash){
        			data = MyHistory.getData(hash);
        		}

        		this.onChangeHistory(hash, data);
        	}
        };

        this.onChangeHistory = function(hash, data)
        {
        	trace("SDIFrameMain onChangeHistory >>>>>> " + hash + " : " + data);

        	// Hash Id 를 확인하여 필요한 처리를 진행한다.
        	var temp = hash.split(":");
        	var type = temp[0];

        	if (type == "menu"){
        		this.fnSetDivSize("Form");
        		var sMenuId	= temp[1];
        		//var oArg	= data.objArg
        		var oArg	= data.oArg;

        		if (this.gfnIsNull(sMenuId)) return;
        		if (this.gfnIsNull(oArg	  )) oArg = {};

        		var oObj = {
        						sMenuId : temp[1],
        						oArgs 	 : oArg
        				   };

        		//페이지 이동시 Left메뉴도 변경(마이메뉴는 제외)
        		this.divFrameLeft.form.fnCopyMenu(oArg.topmenuid);
        		var nRow = this.divFrameLeft.form.dsMenu.findRow("MENU_ID", sMenuId);
        		this.fnTreeStatus(this.divFrameLeft.form.divLeft.form.grdTree, nRow);

        		this.gfnCallSDI(oObj);

        	}
        }

        this.fnTreeStatus = function(objGrid, nRow)
        {
        	var objDs = objGrid.getBindDataset();
            var nRoot = 0;

        	objGrid.set_treeinitstatus("collapse,null");
            for(var i=nRow; i>0; i--){
                if(objGrid.isTreeRootRow(i, true)){
                    nRoot = i;
                }
        		if(objDs.getColumn(i, "MENU_LEVEL") == "1")	break;
            }

            for(var j=nRoot; j<=nRow; j++){
        		if(!objGrid.isTreeLeafRow(j)){
        			objGrid.setTreeStatus(objGrid.getTreeRow(j),true);
        		}
            }
        	objDs.set_rowposition(nRow);

        }

        this.fnSetDivSize = function(sFlag)
        {
        	if(sFlag == "Main"){
        		if(this.divFrameLeft.width > 0){
        			this.divFrameLeft.set_width(0);
        			this.divFrameWork.set_left("divFrameLeft:-1");
        			this.divFrameWork.set_url("SDIFrame::SDIFrameMainForm.xfdl");
        			this.divFrameWork.setFocus();
        		}
        	}
        	else if(sFlag == "Form"){
        		if(this.divFrameLeft.width == 0){
        			this.divFrameLeft.set_width(230);
        			this.divFrameWork.set_left("divFrameLeft:10");
        		}
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onkeydown",this.frameMainForSDI_onkeydown,this);
            this.addEventHandler("oninit",this.FrameSDI_oninit,this);
            this.divNotice.form.btnClose.addEventHandler("onclick",this.divNotice_btnClose_onclick,this);
        };
        this.loadIncludeScript("SDIFrameMain.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
