(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("LeftMinFrame");
            this.set_background("#f3f5f6");
            if (Form == this.constructor)
            {
                this._setFormPosition(40,760);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btnMenu","5","40","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_LF_MenuIcon");
            obj.set_text("Menu");
            this.addChild(obj.name, obj);

            obj = new Button("btnMenuChange","10","10","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_LF_Pin");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdivMenu","148","35","248","500",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_url("Frame::FrameLeft.xfdl");
            obj.set_border("0px none,1px solid #3078b4,0px none,0px none");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.pdivMenu
            obj = new Layout("default","",0,0,this.pdivMenu.form,function(p){});
            this.pdivMenu.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame::FrameLeft.xfdl");
        };
        
        // User Script
        this.registerScript("FrameLeftMin.xfdl", function() {
        /**
        *  Nexacro Professional Training Couse
        *  @MenuPath    Frame > FrameLeftMin
        *  @FileName 	FrameLeftMin.xfdl
        *  @Creator 	TOBESOFT Education
        *  @CreateDate 	2022/12/22
        *  @Desction    Left 메뉴 최소화 화면
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2022/12/22      		 TOBESOFT Education	 	  	최초 생성
        *******************************************************************************
        */


        this.fvOpenFlag = true;	// pdiv 첫번째 오픈 여부
        this.fvObjApp = this.gfnGetApplication();
        this.btnMenu_onclick = function(obj,e)
        {

        	var nH = this.fvObjApp.avLeftFrame.getOffsetHeight();
         	this.pdivMenu.set_height(nH);
        // 	this.pdivMenu.form.resetScroll();
        	this.pdivMenu.trackPopupByComponent(this.btnMenuChange, -10, -10);


        	//PopupDiv에 메뉴 보여줄때 Left메뉴에서 선택한 트리 형태로 적용 - 접혔을때 한번만 작용
        	if(this.fvOpenFlag){
        		var nMenuRow = this.fvObjApp.avLeftFrame.form.divLeft.form.grdTree.getBindDataset().rowposition;
        		this.fnTreeStatus(this.pdivMenu.form.divLeft.form.grdTree, nMenuRow);
        		this.pdivMenu.form.btnMenuChange.set_cssclass("btn_LF_Pin");
        		this.fvOpenFlag = false;
        	}

        };

        // left 또는 popupdiv에서 메뉴 선택시 서로 트리의 선택한 상태를 맞쳐주기 위한 함수
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

        this.btnMenuChange_onclick = function(obj,e)
        {
        	//Left 메뉴 고정
        	this.fvObjApp.avHFrameSet.set_separatesize(this.fvObjApp.avLeftOpen);

        	// 팝업메뉴에서 선택된 상태로 Left메뉴 보여주기
        	var nMenuRow = this.pdivMenu.form.divLeft.form.grdTree.getBindDataset().rowposition;
        	this.fnTreeStatus(this.fvObjApp.avLeftFrame.form.divLeft.form.grdTree, nMenuRow);
        	this.fvOpenFlag = true;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onsize",this.Form_onsize,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.btnMenu.addEventHandler("onclick",this.btnMenu_onclick,this);
            this.btnMenuChange.addEventHandler("onclick",this.btnMenuChange_onclick,this);
        };
        this.loadIncludeScript("FrameLeftMin.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
