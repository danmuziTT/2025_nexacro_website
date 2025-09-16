(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("productManage");
            this.set_titletext("상품관리하기");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsProInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"SELECT_TF\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_NAME_EN\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_IMG\" type=\"STRING\" size=\"256\"/><Column id=\"SERVER_IMG\" type=\"STRING\" size=\"256\"/><Column id=\"SALE_PERCENT\" type=\"STRING\" size=\"256\"/><Column id=\"HOW_MUCH\" type=\"STRING\" size=\"256\"/><Column id=\"LIKE_NUMBER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","0","105",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsProInfo");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"240\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"41\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"상품코드\"/><Cell col=\"2\" text=\"카테고리\"/><Cell col=\"3\" text=\"상품명\"/><Cell col=\"4\" text=\"대표 이미지\"/><Cell col=\"5\" text=\"할인율\"/><Cell col=\"6\" text=\"가격\"/><Cell col=\"7\" text=\"좋아요 수\"/><Cell col=\"8\" text=\"품목관리\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:SELECT_TF\"/><Cell col=\"1\" text=\"bind:PRO_CODE\"/><Cell col=\"2\" text=\"bind:PRO_KIND\"/><Cell col=\"3\" text=\"bind:PRO_NAME\"/><Cell col=\"4\" text=\"bind:PRO_IMG\"/><Cell col=\"5\" text=\"bind:SALE_PERCENT\"/><Cell col=\"6\" text=\"bind:HOW_MUCH\"/><Cell col=\"7\" text=\"bind:LIKE_NUMBER\"/><Cell col=\"8\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","9","2","310","49",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("현재 업로드 되어있는 상품들을 관리할 수 있는 창 입니다");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","720","64","130","33",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("선택품목 삭제");
            obj.set_font("14px/normal \"verdana\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00","9","61","461","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","466","61","54","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_borderRadius("0px");
            obj.set_cssclass("TF_miniBtn");
            obj.set_background("url(\'theme::blue/images/btn_WF_Grdexpand.png\') no-repeat center center /50% 70%");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00","860","64","130","33",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("변경사항 저장");
            obj.set_font("14px/normal \"verdana\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn02","780","30","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("전체선택");
            obj.set_font("14px/normal \"verdana\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn02_00","890","30","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("선택해제");
            obj.set_font("14px/normal \"verdana\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,650,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("productManage.xfdl", function() {
        /**************************************************************************
        * include 영역
        **************************************************************************/

        /**************************************************************************
        * FORM 변수 선언 영역 (fv)
        **************************************************************************/

        /**************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        **************************************************************************/

        this.productManage_onload = function(obj,e)
        {
        	this.objApp = nexacro.getApplication();

        	this.dsProInfo.copyData(this.objApp.gdsProInfo);
        	this.dsProInfo.addColumn("SELECT_TF", "INT");
        	for(var i = 0; i < this.dsProInfo.rowcount; i++){ //함수 돌아감.setColumn이 안됨
        		this.dsProInfo.setColumn(i,"SELECT_TF", "0");
        	}
        };
        /**************************************************************************
        * CRUD 및 TRANSACTION 서비스 호출 처리s
        **************************************************************************/

        /**************************************************************************
        * CALLBACK 콜백 처리부분(Transaction, Popup)
        **************************************************************************/

        this.fnCallback = function(id, nErrorCode, sErrorMsg){
        	if(nErrorCode < 0){ //오류가 난 경우
        		this.alert("ERROR"+ sErrorMsg);
        		return ;
        	}

        	if(id == "saveProData"){
        		this.objApp.gdsProInfo.clearData();
        		this.objApp.gdsProInfo.copyData(this.dsProInfo);
        		alert("저장이 완료되었습니다!")
        	}
        };
        /**************************************************************************
        * 사용자 FUNCTION 영역
        **************************************************************************/

        this.fn_popupCallback = function(id, rtn){ //팝업에는 들어가는input이 2개
        	this.dsProInfo.copyData(this.objApp.gdsProInfo);
        	}
        /**************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        **************************************************************************/

        this.Grid00_oncelldblclick = function(obj,e) //셀 정보에 맞춰 상세정보 나오게 하기 (클릭 후 데이터 수정)
        {
        	this.pDbCData = this.dsProInfo.rowposition;
        	var CF = new ChildFrame();
           var strName = "chf";
           var nLeft = 0;
           var nTop = 0;
           var nWidth = 700;
           var nHeight = 300;
           var nRight = null;
           var nBottom = null;
           var strUrl = "sellerForm::manageProduct_edit.xfdl";

            CF.init(strName, nLeft, nTop, nWidth, nHeight, nRight, nBottom, strUrl);
           CF.set_openalign("center middle");

           objParam = {param1:this.dsProInfo.getColumn(this.dsProInfo.rowposition,"PRO_CODE")};

           CF.showModal(this.getOwnerFrame(), objParam, this, "fn_popupCallback");
        };

        this.btn01_onclick = function(obj,e) //데이터 검색
        {
        	var search_data = this.edt00.value;
        	if (search_data === "")
        	{
        		this.dsProInfo.filter("");
        	}
        	else {
        		this.dsProInfo.filter("PRO_NAME.indexOf('" + search_data + "') !== -1");
        	}
        };

        this.btn02_onclick = function(obj,e) //데이터 전체선택
        {
        	for(var i = 0; i < this.dsProInfo.rowcount; i++){
        		this.dsProInfo.setColumn(i,"SELECT_TF", "1");
        	}
        };

        this.btn02_00_onclick = function(obj,e) //데이터 선택해제
        {
        	for(var i = 0; i < this.dsProInfo.rowcount; i++){
        		this.dsProInfo.setColumn(i,"SELECT_TF", "0");
        	}
        };

        this.Grid00_oncellclick = function(obj,e)
        {
        	if(obj.getCellProperty('body', e.cell,'text') == "삭제"){
        		this.dsProInfo.deleteRow(e.row);
        	}
        };

        this.btn00_00_onclick = function(obj,e)
        {
        	var strSvcUrl = "edu/saveProData.do";
        	var inData    = "in_data=dsProInfo:U";
        	var outData   = "";
        	var strArg    = "";
        	this.gfnTransaction("saveProData", strSvcUrl, inData, outData, strArg, "fnCallback", true);
        };

        this.btn00_onclick = function(obj,e)
        {
        	for(i = this.dsProInfo.rowcount-1; i >=0; i--){
        		if(this.dsProInfo.getColumn(i,"SELECT_TF") == 1){
        			this.dsProInfo.deleteRow(i);
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.productManage_onload,this);
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.btn00_00.addEventHandler("onclick",this.btn00_00_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
            this.btn02_00.addEventHandler("onclick",this.btn02_00_onclick,this);
        };
        this.loadIncludeScript("productManage.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
