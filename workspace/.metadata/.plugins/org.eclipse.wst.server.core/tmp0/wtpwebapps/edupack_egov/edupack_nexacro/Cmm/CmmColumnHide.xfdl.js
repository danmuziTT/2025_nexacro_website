(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CmmColumnHide");
            this.set_titletext("그리드 컬럼숨김");
            if (Form == this.constructor)
            {
                this._setFormPosition(300,415);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFilter", this);
            obj._setContents("<ColumnInfo><Column id=\"columnText\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"columnIndex\" type=\"STRING\" size=\"256\"/><Column id=\"body\" type=\"STRING\" size=\"256\"/><Column id=\"orgSize\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCopy", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdList","15","15",null,"346","15",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsFilter");
            obj.set_autofittype("col");
            obj.getSetter("griduserproperty").set("!sort,!rowfix,!colfix,!filter,!initial");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\" band=\"left\"/><Column size=\"225\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"컬럼선택\" expandchar=\"popup.columnselect\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" text=\"bind:columnText\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnOK","84","372","60","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_tabstop("true");
            obj.getSetter("uWord").set("popup.ok");
            obj.set_cssclass("btn_POP_Btn");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel","149","372","60","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            obj.getSetter("uWord").set("popup.close");
            obj.set_cssclass("btn_POP_Btn");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","15","15","400",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("mediumturquoise");
            obj.set_textAlign("center");
            obj.set_visible("false");
            obj.set_opacity("0.50");
            obj.set_text("15\r\npx");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","0",null,"300","15",null,"0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("salmon");
            obj.set_textAlign("center");
            obj.set_visible("false");
            obj.set_opacity("0.50");
            obj.set_text("15\r\npx");
            this.addChild(obj.name, obj);

            obj = new Static("Static01",null,"15","15","400","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("mediumturquoise");
            obj.set_textAlign("center");
            obj.set_visible("false");
            obj.set_opacity("0.50");
            obj.set_text("15\r\npx");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","0","300","15",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("salmon");
            obj.set_textAlign("center");
            obj.set_visible("false");
            obj.set_opacity("0.50");
            obj.set_text("15\r\npx");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","301","16","339","344",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_visible("false");
            obj._setContents("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",300,415,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CmmColumnHide.xfdl", function() {
        /**
        *  Necacro EduPack
        *  @MenuPath    Cmm > CmmColumnHide
        *  @FileName 	CmmColumnHide.xfdl
        *  @Creator 	Education
        *  @CreateDate 	2022.05.01
        *  @Desction    그리드 컬럼 숨기기/보이기 공통팝업
        ************** 소스 수정 이력 ***************************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2022.05.01     	Education 	           최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
        * FORM 변수 선언 영역
        ************************************************************************************************/
        this.fvTargetGrid; 	  //대상그리드 OBJECT
        this.fvTargetDataset; //대상데이터셋 OBJECT

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);

        // 	var sTitle = this.getOwnerFrame().paramTitle;
        // 	this.set_titletext(sTitle);

        	//초기값 설정
        	this.fvTargetGrid = this.getOwnerFrame().pvGrid;
        	this.fvTargetDataset = this.fvTargetGrid.getBindDataset();
        	this.fnGetHeadText();

        	//compare grid setting
        	this.fnSetGrd();
        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        /************************************************************************************************
        * CALLBACK 콜백 처리부분
        ************************************************************************************************/

        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/
        /**
         * @description 비교그리드 세팅
        */
        this.fnSetGrd = function()
        {
        	this.grd00.set_enableredraw(false);
        	this.grd00.set_formats(this.fvTargetGrid.orgformat2);
        	this.grd00.set_enableredraw(true);
        };

        /**
         * @description 그리드의 헤드정보를 받아와 콤보 세팅
        */
        this.fnGetHeadText = function ()
        {
        	this.grdList.set_enableredraw(false);
        	for( var i=0; i<this.fvTargetGrid.getFormatColCount(); i++)
        	{
        		var columnText = "";//i + "번째 컬럼 ";

        		for (var j=0, len=this.fvTargetGrid.getCellCount("head"); j<len; j++) {
        			var maxHeadRow = 0;
        			var row = this.fvTargetGrid.getCellProperty("head", j, "row");
        			if (maxHeadRow < row) {
        				maxHeadRow = row;
        			}
        			var nRow = parseInt(this.fvTargetGrid.getCellProperty("head", j, "row"));
        			var nCol = parseInt(this.fvTargetGrid.getCellProperty("head",j, "col"));
        			var headText = this.fvTargetGrid.getCellProperty("head", j, "text");
        			if( nRow == maxHeadRow && nCol == i ) columnText += "[" + headText + "]";
        		}

        		var nchk = 1;
        		var columnIndex = i;
        		if( this.fvTargetGrid.getRealColSize(columnIndex) == 0 ) nchk = 0;

        		if( columnText == "[순번]" || columnText == "[상태]" ) continue;
        		if( columnText == "[0]" && this.fvTargetGrid.getCellProperty("Body", i, "text") == "bind:gridCmmcheck" ) continue;
        		var nRow = this.dsFilter.addRow();
        		this.dsFilter.setColumn(nRow, "columnText",  columnText);
        		this.dsFilter.setColumn(nRow, "chk",  		 nchk);
        		this.dsFilter.setColumn(nRow, "columnIndex", columnIndex);
        	}
        	this.grdList.set_enableredraw(true);
        };

        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.btnCancel_onclick = function(obj,e)
        {
        	this.close();
        };

        this.btnOK_onclick = function(obj,e)
        {
        	var nTarget =0;
        	var arr = this.fvTargetGrid.arrprop;
        	for(var n=0; n< arr.length; n++){
        		var tmp = this.fvTargetGrid.arrprop[n];
        		if( tmp == "checkbox" || tmp == "status" || tmp == "no" ){
        			nTarget += 1;
        		}
        	}
        	this.fvTargetGrid.set_enableredraw(false);
        	var nRowCnt = this.dsFilter.getRowCount();
        	for( var i=0; i<nRowCnt; i++)
        	{
        		var nChk    = this.dsFilter.getColumn(i, "chk");
        		var colidx  = nexacro.toNumber(this.dsFilter.getColumn(i, "columnIndex"));
        		var nSize= 0;
        		if(nChk == 1){
        			var orgCol = colidx - nTarget;
        			nSize = this.grd00.getFormatColSize(orgCol);
        		}
        		this.fvTargetGrid.setFormatColProperty(colidx, "size", nSize );
        	}
        	this.fvTargetGrid.set_enableredraw(true);
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
        };
        this.loadIncludeScript("CmmColumnHide.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
