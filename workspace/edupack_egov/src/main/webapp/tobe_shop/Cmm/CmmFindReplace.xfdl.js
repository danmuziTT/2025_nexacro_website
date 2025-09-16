(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CmmFindReplace");
            this.set_titletext("그리드 찾기/바꾸기");
            this.set_border("0px none");
            if (Form == this.constructor)
            {
                this._setFormPosition(320,320);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds00", this);
            obj._setContents("<ColumnInfo><Column id=\"index\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"displaytype\" type=\"STRING\" size=\"256\"/><Column id=\"edittype\" type=\"STRING\" size=\"256\"/><Column id=\"body\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDirection", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"dataKO\" type=\"STRING\" size=\"256\"/><Column id=\"dataEN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">prev</Col><Col id=\"dataKO\">이전</Col><Col id=\"dataEN\">previous</Col></Row><Row><Col id=\"code\">next</Col><Col id=\"dataKO\">다음</Col><Col id=\"dataEN\">next</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPosition", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"dataKO\" type=\"STRING\" size=\"256\"/><Column id=\"dataEN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">current</Col><Col id=\"dataKO\">현재위치</Col><Col id=\"dataEN\">current</Col></Row><Row><Col id=\"code\">first</Col><Col id=\"dataKO\">처음부터</Col><Col id=\"dataEN\">first</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCondition", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"dataKO\" type=\"STRING\" size=\"256\"/><Column id=\"dataEN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">equal</Col><Col id=\"dataKO\">일치</Col><Col id=\"dataEN\">equal</Col></Row><Row><Col id=\"code\">inclusion</Col><Col id=\"dataKO\">포함</Col><Col id=\"dataEN\">inclusion</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00","10","20","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("대상칼럼");
            obj.getSetter("uWord").set("popup.targetcolumn");
            obj.set_cssclass("sta_WF_LabelTxt");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo00","sta00:-7","20",null,"30","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("ds00");
            obj.set_codecolumn("index");
            obj.set_datacolumn("name");
            obj.set_text("cbo00");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","10","55","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("찾을 문자열");
            obj.getSetter("uWord").set("popup.findstring");
            obj.set_cssclass("sta_WF_LabelTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","10","90","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("바꿀 문자열");
            obj.getSetter("uWord").set("popup.replacestring");
            obj.set_cssclass("sta_WF_LabelTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","10","125","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("찾을 방향");
            obj.getSetter("uWord").set("popup.finddirection");
            obj.set_cssclass("sta_WF_LabelTxt");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo00","sta03:-7","125",null,"30","20",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_direction("vertical");
            obj.set_innerdataset("dsDirection");
            obj.set_codecolumn("code");
            obj.set_datacolumn("dataKO");
            obj.set_text("");
            obj.set_value("prev");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","10","160","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("찾을 위치");
            obj.getSetter("uWord").set("popup.findposition");
            obj.set_cssclass("sta_WF_LabelTxt");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo01","sta04:-7","160",null,"30","20",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_direction("vertical");
            obj.set_innerdataset("dsPosition");
            obj.set_codecolumn("code");
            obj.set_datacolumn("dataKO");
            obj.set_value("current");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta05","10","195","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("찾을 조건");
            obj.getSetter("uWord").set("popup.findcondition");
            obj.set_cssclass("sta_WF_LabelTxt");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo02","sta05:-7","195",null,"30","20",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_direction("vertical");
            obj.set_innerdataset("dsCondition");
            obj.set_codecolumn("code");
            obj.set_datacolumn("dataKO");
            obj.set_value("equal");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk00","123","230",null,"30","15",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("대/소문자구분");
            obj.getSetter("uWord").set("popup.casesensitive");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","13","280","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("찾기");
            obj.getSetter("uWord").set("popup.find");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","88","280","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("바꾸기");
            obj.getSetter("uWord").set("popup.replace");
            this.addChild(obj.name, obj);

            obj = new Button("btn02","163","280","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("모두바꾸기");
            obj.getSetter("uWord").set("popup.allchange");
            this.addChild(obj.name, obj);

            obj = new Button("btn03","238","280","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("닫기");
            obj.getSetter("uWord").set("popup.close");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00","sta01:-7","55",null,"30","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Edit("edt01","sta02:-7","90",null,"30","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",320,320,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CmmFindReplace.xfdl", function() {
        /**
        *  Necacro EduPack
        *  @MenuPath    Cmm > CmmFindReplace.xfdl (공통 그리드 찾기/바꾸기)
        *  @FileName 	CmmFindReplace.xfdl
        *  @Creator 	Education
        *  @CreateDate 	2022.05.01
        *  @Desction    찾기/바꾸기
        ************** 소스 수정 이력 ***************************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2022.05.01     	Education 	                최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.fvGrid="";
        this.fvDs="";
        this.fvSelectRow=0;
        this.fvCellname="";
        this.fvCellindex=0;
        this.fvSelectType="cell";
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this); //초기화[필수]

        // 	var sTitle = this.getOwnerFrame().paramTitle;
        // 	this.set_titletext(sTitle);

        	var sLang = nexacro.getEnvironmentVariable("evLanguage");
        	var sDataString = "data"+sLang;
        	this.rdo00.set_datacolumn(sDataString);
        	this.rdo01.set_datacolumn(sDataString);
        	this.rdo02.set_datacolumn(sDataString);

        	this.fvGrid 	  = this.getOwnerFrame().pvGrid;
        	this.fvDs 		  = this.fvGrid.getBindDataset();
        	this.fvSelectRow  = this.getOwnerFrame().pvStrartRow;
        	this.fvSelectType = this.getOwnerFrame().pvSelectType;
        	this.fvCellindex  = this.getOwnerFrame().pvSelectCell;

        	this.fvGrid.set_selecttype("cell");

        	var bUserHeader = this._gfnGridUserHeaderFlg(this.fvGrid);
        	if( !bUserHeader) {
        		this.fnGetHeadText();
        	}else{
        		this.fnGetUserHeader(this.fvGrid);
        	}
        };

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
         /**
         * @description 그리드의 헤드정보를 받아와 콤보 세팅(userHeader prop 사용)
        */
        this.fnGetUserHeader = function (objGrid)
        {
        	this.ds00.clearData();
        	var nheadcnt = objGrid.getCellCount("head");
        	for( var i=0; i<nheadcnt; i++){
        		var bindcol = objGrid.getCellProperty("head", i, "calendarweekformat");
        		if( this.gfnIsNull(bindcol)) continue;

        		for( var j=0; j<objGrid.getCellCount("body"); j++)
        		{
        			var nCell =0;
        			if( bindcol == objGrid.getCellProperty("body", j,"text")){
        				nCell = j;
        				var columname = objGrid.getCellProperty("body", nCell, "text");

        				var nRow = this.ds00.addRow();
        				this.ds00.setColumn(nRow, "body"		, columname);
        				this.ds00.setColumn(nRow, "index"		, j);
        				this.ds00.setColumn(nRow, "displaytype" , objGrid.getCellProperty("body", j, "displaytype"));
        				this.ds00.setColumn(nRow, "edittype"	, objGrid.getCellProperty("body", j, "edittype"));
        				this.ds00.setColumn(nRow, "name"		, objGrid.getCellProperty("head", i, "text"));
        			}
        		}
        	}
        	// 현재 선택된 셀을 선택하도록
        	// 현재 선택된 셀이 검색/바꾸기에 해당되지 않을 경우 INDEX=0으로 세팅
        	var nTmp = this.ds00.findRow("index", this.fvGrid.currentcell);
        	if( nTmp > -1 ){
        		this.cbo00.set_value(this.ds00.getColumn(nTmp,"index"));
        	}else{
        		this.cbo00.set_index(0);
        	}

        	this.fvCellindex = this.cbo00.value;
        	this.fnSetBtnInfo();
        };

        /**
         * @description 그리드의 헤드정보를 받아와 콤보 세팅
        */
        this.fnGetHeadText = function ()
        {
        	this.ds00.clearData();
        	// 바디의 갯수만큼 디스플레이정보 및 콤보의 정보를 설정한다.
            for(var i=0; i<this.fvGrid.getCellCount("body"); i++)
            {
                if( this.fvGrid.getCellProperty("body", i, "displaytype") != "image" )
                {
        			var sText = this.fvGrid.getCellProperty("body", i, "text");
        			if( sText == "bind:gridCmmcheck") continue; //공통체크박스 제외

        			var sBind;
        			if ( !this.gfnIsNull(sText)){
        				sBind = sText.substr(0, 5);
        			}else {
        				sBind = "";
        			}

        			if (sBind == "bind:")
        			{
        				var nrow = this.ds00.addRow();

        				this.ds00.setColumn(nrow, "body"		, this.fvGrid.getCellProperty("body", i, "text"));
        				this.ds00.setColumn(nrow, "displaytype" , this.fvGrid.getCellProperty("body", i, "displaytype"));
        				this.ds00.setColumn(nrow, "edittype"	, this.fvGrid.getCellProperty("body", i, "edittype"));
        				this.ds00.setColumn(nrow, "index"		, i);
        			}
                }
            }
        	// 바디에 매칭되는 헤더의 타이틀을 설정한다.
            for(var n=0; n<this.fvGrid.getCellCount("Head"); n++)
            {
                var title  = this.fvGrid.getCellProperty("Head", n, "text");
                var col    = this.fvGrid.getCellProperty("Head", n, "col");
                var body   = this.fvGrid.getCellProperty("body", n, "text");


                var nrow = this.ds00.findRow("body", body);
                if( nrow != -1 )
                {
                    //this.ds00.setColumn(nrow, "index",   col);
                    this.ds00.setColumn(nrow, "name" , title);
                }
            }

        	// 현재 선택된 셀을 선택하도록
        	// 현재 선택된 셀이 검색/바꾸기에 해당되지 않을 경우 INDEX=0으로 세팅
        	var nRow = this.ds00.findRow("index", this.fvCellindex);
        	if( nRow > -1 ){
        		this.cbo00.set_value(this.ds00.getColumn(nRow,"index"));
        	}else{
        		this.cbo00.set_index(0);
        	}
        	this.fvCellindex = this.cbo00.value;
        	this.fnSetBtnInfo();
        };

        /**
         * @description 찾기옵션세팅
        */
        this.fnGetFindOption = function()
        {
        	var option = {
        		'direction': this.rdo00.value,
        		'position': this.rdo01.value,
        		'scope': 'col',
        		'condition': this.rdo02.value,
        		'strict': this.chk00.value,
        		'cell': this.cbo00.value,
        	};

        	return option;
        };

        /**
         * @description 각 컬럼 타입별 바꾸기 가능/불가능 설정
        */
        this.fnCheckType = function (val)
        {
        	var arr = ["normal","text","calendarcontrol","date","editcontrol","number","text","textareacontrol"];
        	for( var i=0; i<arr.length; i++){
        		if ( arr[i] == val ){
        			return true;
        		}
        	}
        	return false;
        };

        /**
         * @description 바꾸기
        */
        this.replaceText = function (bAllChg)
        {
        	var findText = this.edt00.value;
        	if ( this.gfnIsNull(findText) )
        	{
        		return;
        	}

        	var grid = this.fvGrid;
        	var option = this.fnGetFindOption();
        	var replaceText = this.edt01.value;
        	if ( this.gfnIsNull(replaceText) )
        	{
        		replaceText = "";
        	}

        	var results = this.gfnReplaceGridText(grid, findText, replaceText, option, bAllChg);

        	var resultCnt = results.length;
        	if ( resultCnt > 0 )
        	{
        		var result;
        		var replaceCnt = 0;
        		for (var i=0; i<resultCnt; i++)
        		{
        			result = results[i];
        			if ( result.replace )
        			{
        				replaceCnt += 1;
        			}
        		}

        		// 모두 바꾸기
        		if ( bAllChg )
        		{
        			if ( resultCnt == replaceCnt )
        			{
        				// 마지막 변경된 셀로 이동
        				this.markGridFindResult(grid, grid._lastReplaceRow, option.cell);
        				this.setFocus();
        				this.gfnAlert("msg.action.success", "", "success");
        				//this.alert("바꾸기 완료");
        			}
        			else
        			{
        // 				var errorCnt = resultCnt - replaceCnt;
        // 				var message = resultCnt + "건 변경 중 " + errorCnt + "건 오류 발생";
        // 				this.alert(message);
        				this.gfnAlert("msg.action.fail", "", "error");
        			}
        		}
        		else
        		{
        			if ( replaceCnt == 0 )
        			{
        				//this.alert(results[0].message);
        				this.gfnAlert("msg.search.nodata", "", "nodata");
        				return;
        			}

        			// 다음 찾기 대상으로 이동
        			findRowCell = this.gfnFindGridText(grid, findText, option);
        			findRow = findRowCell[0];
        			findCell = findRowCell[1];
        			if ( findRow > -1 && findCell > -1 )
        			{
        				this.markGridFindResult(grid, findRow, findCell);
        			}
        			else
        			{
        				// 다음 대상이 없으면 마지막 찾은 셀로 이동
        				this.markGridFindResult(grid, grid.lastReplaceRow, option.cell);
        			}
        			this.setFocus();
        		}
        	}
        	else
        	{
        		this.gfnAlert("msg.search.nodata", "", "nodata");
        		//this.alert("바꾸기할 항목이 없습니다.");
        	}
        };

        /**
         * @description 바꾸기 결과
        */
        this.markGridFindResult = function(grid, findRow, findCell)
        {
        	var dataset = this.fvDs;
        	dataset.set_rowposition(findRow);
        	grid.setCellPos(findCell);
        };

        /**
         * @description 버튼세팅
        */
        this.fnSetBtnInfo = function ()
        {
        	var sDisplaytype = this.fvGrid.getCellProperty("body", this.fvCellindex, "displaytype");

        	if( !this.fnCheckType(sDisplaytype) ){
        		this.btn01.set_enable(false);
        		this.btn02.set_enable(false);
        	}else{
        		this.btn01.set_enable(true);
        		this.btn02.set_enable(true);
        	}
        };
        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
         * @description [닫기]버튼이벤트
        */
        this.btn03_onclick = function(obj,e)
        {
        	this.fvGrid.set_selecttype(this.fvSelectType);
        	this.close();
        };

        /**
         * @description [찾기]버튼이벤트
        */
        this.btn00_onclick = function(obj,e)
        {
        	var txt = this.edt00.value;
        	var option = this.fnGetFindOption();
        	var findRowCell = this.gfnFindGridText(this.fvGrid, txt, option);

        	var findRow = findRowCell[0];
        	var findCell = findRowCell[1];

        	if ( findRow > -1 && findCell > -1 )
        	{
        		this.fvDs.set_rowposition(findRow);
        		this.fvGrid.setCellPos(findCell);
        	}
        	else
        	{
        		this.gfnAlert("msg.search.nodata", "", "nodata");
        		//this.alert("찾기 결과가 없습니다.");
        	}
        };

        /**
         * @description [대상컬럼콤보] 변경이벤트
        */
        this.cbo00_onitemchanged = function(obj,e)
        {
        	this.fvCellindex = e.postvalue;
        	this.fnSetBtnInfo();
        };

        /**
         * @description [바꾸기] 변경이벤트
        */
        this.btn01_onclick = function(obj,e)
        {
        	this.replaceText(false);
        };

        /**
         * @description [모두바꾸기] 변경이벤트
        */
        this.btn02_onclick = function(obj,e)
        {
        	this.replaceText(true);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.cbo00.addEventHandler("onitemchanged",this.cbo00_onitemchanged,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
            this.btn03.addEventHandler("onclick",this.btn03_onclick,this);
        };
        this.loadIncludeScript("CmmFindReplace.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
