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
            if (Form == this.constructor)
            {
                this._setFormPosition(200,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUM\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"LEVEL\">0</Col><Col id=\"NAME\">현재 판매하는 물품</Col></Row><Row><Col id=\"LEVEL\">1</Col><Col id=\"NAME\">ALL</Col></Row><Row><Col id=\"NAME\">악세서리</Col><Col id=\"LEVEL\">1</Col></Row><Row><Col id=\"NAME\">디지털굿즈</Col><Col id=\"LEVEL\">1</Col></Row><Row><Col id=\"NAME\">홈데코</Col><Col id=\"LEVEL\">1</Col></Row><Row><Col id=\"NAME\">문구</Col><Col id=\"LEVEL\">1</Col></Row><Row><Col id=\"NAME\">리빙</Col><Col id=\"LEVEL\">1</Col></Row><Row><Col id=\"LEVEL\">0</Col><Col id=\"NAME\">할인중인 품목</Col></Row><Row><Col id=\"LEVEL\">1</Col><Col id=\"NAME\">ALL</Col></Row><Row><Col id=\"LEVEL\">1</Col><Col id=\"NAME\">~ 30%</Col></Row><Row><Col id=\"LEVEL\">1</Col><Col id=\"NAME\">~ 50%</Col></Row><Row><Col id=\"LEVEL\">1</Col><Col id=\"NAME\">~ 70%</Col></Row><Row><Col id=\"LEVEL\">1</Col><Col id=\"NAME\">원가 이하</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsMenu");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusebutton("no");
            obj.set_treeusecheckbox("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"199\"/></Columns><Rows><Row size=\"39\"/></Rows><Band id=\"body\"><Cell text=\"bind:NAME\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:LEVEL\" font=\"11px/normal &quot;Malgun Gothic&quot;\" border=\"0px\"/></Band></Format></Formats>");
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
        this.Form_Left_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);
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

        this.Grid00_oncellclick = function(obj,e)
        {
        	//클릭 시 특정 사이트로 이동하는 코드
        	var moveInt = e.cell; //모든 셀 0 나옴. 체크 해야될듯

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
