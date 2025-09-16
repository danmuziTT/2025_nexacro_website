(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Left");
            this.set_titletext("좌단 선택탭");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(200,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSendOpData", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("gdsProCategory");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusebutton("no");
            obj.set_treeusecheckbox("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"199\"/></Columns><Rows><Row size=\"44\"/></Rows><Band id=\"body\"><Cell text=\"expr:CATEGORY_NAME + &quot; ( &quot; + CATEGORY_SUM + &quot; ) &quot;\" displaytype=\"treeitemcontrol\" treelevel=\"bind:LEVEL\" edittype=\"tree\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",200,570,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Left.xfdl", function() {

        /**************************************************************************
        * include 영역
        **************************************************************************/

        /**************************************************************************
        * FORM 변수 선언 영역 (fv)
        **************************************************************************/

        /**************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        **************************************************************************/
        this.Form_Left_onload = function(obj,e) //판매중인 데이터 나오게 하기
        {
        	//this.gfnFormOnLoad(this);
        	this.objApp = nexacro.getApplication();

        	var nHeight = this.getLayoutInfo(this.getCurrentLayoutID(), "height");
        	this.parent.parent.fnMainPageOnLoad2(nHeight);
        };

        /**************************************************************************
        * CRUD 및 TRANSACTION 서비스 호출 처리
        **************************************************************************/

        /**************************************************************************
        * CALLBACK 콜백 처리부분(Transaction, Popup)
        **************************************************************************/

        /**************************************************************************
        * 사용자 FUNCTION 영역
        **************************************************************************/

        /**************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        **************************************************************************/

        var moveCode = 0;
        this.Grid00_oncellclick = function(obj,e) //좌단 선택시 새로운 div 나오게 해야됨
        {
        	this.moveCode = this.objApp.gdsProCategory.getColumn(e.row, "CATEGORY_ID"); //좌단 선택 시 맞는 카테고리id 를 가져옴
        	this.objApp.mainframe.VFrameSet00.UserFrame.form
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Left_onload,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
        };
        this.loadIncludeScript("Form_Left.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
