(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SampleGridSum");
            this.set_titletext("그리드 합계 & supress & AutoSize");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSample", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">warm</Col><Col id=\"Column2\">red</Col><Col id=\"Column3\">1</Col></Row><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">warm</Col><Col id=\"Column2\">yellow</Col><Col id=\"Column3\">1200</Col></Row><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">cool</Col><Col id=\"Column2\">blue</Col><Col id=\"Column3\">3</Col></Row><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">cool</Col><Col id=\"Column2\">navy</Col><Col id=\"Column3\">4</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">acid</Col><Col id=\"Column2\">lemon</Col><Col id=\"Column3\">5</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">acid</Col><Col id=\"Column2\">orange</Col><Col id=\"Column3\">1600</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">sweet</Col><Col id=\"Column2\">test</Col><Col id=\"Column3\">7</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">sweet</Col><Col id=\"Column2\">strawberry</Col><Col id=\"Column3\">8</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">sweet</Col><Col id=\"Column2\">banana</Col><Col id=\"Column3\">9</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSample00", this);
            obj.set_keystring("G:Column0");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">warm</Col><Col id=\"Column2\">red</Col><Col id=\"Column3\">1</Col></Row><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">warm</Col><Col id=\"Column2\">yellow</Col><Col id=\"Column3\">1200</Col></Row><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">cool</Col><Col id=\"Column2\">blue</Col><Col id=\"Column3\">3</Col></Row><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">cool</Col><Col id=\"Column2\">navy</Col><Col id=\"Column3\">4</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">acid</Col><Col id=\"Column2\">lemon</Col><Col id=\"Column3\">5</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">acid</Col><Col id=\"Column2\">orange</Col><Col id=\"Column3\">1600</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">sweet</Col><Col id=\"Column2\">test</Col><Col id=\"Column3\">7</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">sweet</Col><Col id=\"Column2\">strawberry</Col><Col id=\"Column3\">8</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">sweet</Col><Col id=\"Column2\">banana</Col><Col id=\"Column3\">9</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSize", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">가</Col><Col id=\"Column1\">band 속성값이 &quot;body&quot;인 Row 의 높이가 자동조절됩니다.</Col><Col id=\"Column2\">red</Col><Col id=\"Column3\">1</Col></Row><Row><Col id=\"Column0\">가나</Col><Col id=\"Column1\">band 속성값이 &quot;body&quot;인 Row 의 높이가 자동조절됩니다.&#10;Row 중 가장 높이가 큰 Row에 맞게 모든 Row의 높이가 설정됩니다.&#10;</Col><Col id=\"Column2\">yellow</Col><Col id=\"Column3\">2</Col></Row><Row><Col id=\"Column0\">가나다</Col><Col id=\"Column1\">band 속성값이 &quot;body&quot;인 Row 의 높이가 자동조절됩니다.&#10;Row 중 가장 높이가 큰 Row에 맞게 모든 Row의 높이가 설정됩니다.&#10;band 속성값이 &quot;head&quot;, &quot;summary&quot; 인 Row 의 높이는 자동조절하지 않고, 디자인 시 설정한 크기로 유지합니다.&#10;</Col><Col id=\"Column2\">blue</Col><Col id=\"Column3\">3</Col></Row><Row><Col id=\"Column0\">가나다라</Col><Col id=\"Column1\">band 속성값이 &quot;body&quot;인 Row 의 높이가 자동조절됩니다.&#10;Row 중 가장 높이가 큰 Row에 맞게 모든 Row의 높이가 설정됩니다.&#10;band 속성값이 &quot;head&quot;, &quot;summary&quot; 인 Row 의 높이는 자동조절하지 않고, 디자인 시 설정한 크기로 유지합니다.&#10;&#10;band 속성값이 &quot;body&quot;인 Column 의 너비가 자동조절됩니다.&#10;각 Column 별로 가장 너비가 큰 Cell 에 맞게 Column의 너비가 따로 설정됩니다.&#10;band 속성값이 &quot;left&quot;, &quot;right&quot; 인 Column 의 너비는 자동조절하지 않고, 디자인 시 설정한 크기로 유지합니다.</Col><Col id=\"Column2\">navy</Col><Col id=\"Column3\">4</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","10","125","258","28",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("1) Suppress");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","158","283","418",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsSample");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:Column1\" suppress=\"2\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","303","125","218","28",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("2) 소계,합계");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","303","158","352","418",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsSample00");
            obj.set_autofittype("col");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/><Row size=\"32\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"rowLevel\"/><Cell col=\"1\" text=\"Column0\"/><Cell col=\"2\" text=\"Column1\"/><Cell col=\"3\" text=\"Column2\"/><Cell col=\"4\" text=\"Column3\"/></Band><Band id=\"body\"><Cell text=\"expr:dataset.getRowLevel(currow)\"/><Cell col=\"1\" text=\"bind:Column0\" suppress=\"1\"/><Cell col=\"2\" text=\"bind:Column1\" suppress=\"2\"/><Cell col=\"3\" text=\"expr:dataset.getRowLevel(currow) == 0 ? Column2 : &apos;소계&apos;\"/><Cell col=\"4\" text=\"bind:Column3\" displaytype=\"number\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" colspan=\"3\" text=\"합계\" textAlign=\"right\"/><Cell col=\"4\" text=\"expr:dataset.getSum(&apos;Column3&apos;)\" displaytype=\"number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","10","0","311","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("그리드 합계 & supress & AutoSize");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","10","35",null,"80","10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("1. Suppress - 그리드의 row값이 같을 경우 하나의 값으로 표현해주는 기능\r\r\n2. 소계, 합계 - 그리드 소계, 합계 처리 샘플\r\n3. Auto Size - Grid Column, Row Auto Size 설정 샘플");
            obj.set_cssclass("sta_WF_Desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","10","601","278","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("3) Auto Size");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","10","636",null,"162","10",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("dsSize");
            obj.set_autosizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"칼럼0\"/><Cell col=\"1\" text=\"칼럼2\"/><Cell col=\"2\" text=\"칼럼3\" autosizecol=\"limitmin\"/><Cell col=\"3\" text=\"칼럼1\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column2\"/><Cell col=\"2\" text=\"bind:Column3\" autosizecol=\"limitmin\"/><Cell col=\"3\" text=\"bind:Column1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd01","10","803",null,"322","10",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("dsSize");
            obj.set_autosizingtype("both");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"칼럼0\"/><Cell col=\"1\" text=\"칼럼1\"/><Cell col=\"2\" text=\"칼럼2\"/><Cell col=\"3\" text=\"칼럼3\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02","665","158","352","418",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("dsSample00");
            obj.set_autofittype("col");
            obj.set_selecttype("row");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/><Row size=\"32\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"rowLevel\"/><Cell col=\"1\" text=\"Column0\"/><Cell col=\"2\" text=\"Column1\"/><Cell col=\"3\" text=\"Column2\"/><Cell col=\"4\" text=\"Column3\"/></Band><Band id=\"body\"><Cell text=\"expr:dataset.getRowLevel(currow)\"/><Cell col=\"1\" text=\"bind:Column0\" suppress=\"1\"/><Cell col=\"2\" text=\"bind:Column1\" suppress=\"2\"/><Cell col=\"3\" text=\"expr:dataset.getRowLevel(currow) == 0 ? Column2 : &apos;소계&apos;\"/><Cell col=\"4\" text=\"bind:Column3\" displaytype=\"number\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" colspan=\"3\" text=\"합계\" textAlign=\"right\"/><Cell col=\"4\" text=\"expr:dataset.getSum(&apos;Column3&apos;)\" displaytype=\"number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnSubRowHidden","665","125","157","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("소계 ROW 표시안하기");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","165","118","76","33",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1038,650,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SampleGridSum.xfdl", function() {
        /**
        *  Nexacro Professional Training Couse
        *  @MenuPath    개발가이드 > 표준 및 기본 정의 > 그리드 합계 & supress & AutoSize
        *  @FileName 	SampleGridSum.xfdl
        *  @Creator 	TOBESOFT Education
        *  @CreateDate 	2023/01/03
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2023/01/03      		 TOBESOFT Education	 	  	최초 생성
        *******************************************************************************
        */


        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);
        };

        this.btn00_onclick = function(obj,e)
        {
        	this.dsSample.set_rowposition(3);
        	this.alert(this.dsSample.getColumn(this.dsSample.rowposition, "Column2"))
        };

        this.sta01_onclick = function(obj,e)
        {

        };

        this.btnSubRowHidden_onclick = function(obj,e)
        {
        	var objGrid = this.Grid02;
        	var objDsList = this.Grid02.getBindDataset();

        	objGrid.set_enableredraw(false);

        	//소계부분 높이 조정하기(1px)
        	for(var i = 0 ; i < objGrid.rowcount ; i++)
        	{
        		if(objDsList.getRowLevel(i) == 1)
        		{
        			//trace(i + ">" + objDsList.getRowLevel(i))
        			objGrid.setRealRowSize(i, 1);
        		}
        	}

        	//소계부분 line 숨기기
        	var sExpr = "expr:dataset.getRowLevel(currow+1) == 1 ? 'Cell_WF_NoBorder_Bottom' : ''";
        	objGrid.setCellProperty("body",0, "cssclass", sExpr);
        	objGrid.setCellProperty("body",1, "cssclass", sExpr);
        	objGrid.setCellProperty("body",2, "cssclass", sExpr);
        	objGrid.setCellProperty("body",3, "cssclass", sExpr);
        	objGrid.setCellProperty("body",4, "cssclass", sExpr);

        	objGrid.set_enableredraw(true);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnSubRowHidden.addEventHandler("onclick",this.btnSubRowHidden_onclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
        };
        this.loadIncludeScript("SampleGridSum.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
