(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_Grid");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_emp", this);
            obj.set_keystring("");
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"POS_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/><Column id=\"MEMO\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"FULL_NAME\">Olivia</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20101003</Col><Col id=\"SALARY\">83000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">ivory</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"EMPL_ID\">AA001</Col></Row><Row><Col id=\"FULL_NAME\">John</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20051011</Col><Col id=\"SALARY\">76000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">greenyellow</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">AA002</Col></Row><Row><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20070206</Col><Col id=\"SALARY\">95000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">aliceblue</Col><Col id=\"DEPT_CD\">03</Col><Col id=\"EMPL_ID\">BB001</Col></Row><Row><Col id=\"FULL_NAME\">Maia</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20090512</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">ivory</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"EMPL_ID\">BB002</Col></Row><Row><Col id=\"FULL_NAME\">Adam</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20010109</Col><Col id=\"SALARY\">88000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">greenyellow</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"EMPL_ID\">CC001</Col></Row><Row><Col id=\"FULL_NAME\">Ray</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20160202</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">lightpink</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">DD001</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CD\">01</Col><Col id=\"DEPT_NAME\">Accounting Team</Col></Row><Row><Col id=\"DEPT_CD\">02</Col><Col id=\"DEPT_NAME\">HR Team</Col></Row><Row><Col id=\"DEPT_CD\">03</Col><Col id=\"DEPT_NAME\">Sales Team</Col></Row><Row><Col id=\"DEPT_CD\">04</Col><Col id=\"DEPT_NAME\">Design Team</Col></Row><Row><Col id=\"DEPT_CD\">05</Col><Col id=\"DEPT_NAME\">Education Team</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","10","70",null,"242","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_emp");
            obj.set_enable("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"Empl ID\"/><Cell col=\"1\" text=\"Empl Name\"/><Cell col=\"2\" text=\"Dept Code\"/><Cell col=\"3\" text=\"Hire Date\"/><Cell col=\"4\" text=\"Annual Salary\"/><Cell col=\"5\" text=\"Gender\"/><Cell col=\"6\" text=\"Married\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPL_ID\"/><Cell col=\"1\" text=\"bind:FULL_NAME\"/><Cell col=\"2\" text=\"bind:DEPT_CD\"/><Cell col=\"3\" text=\"bind:HIRE_DATE\"/><Cell col=\"4\" text=\"bind:SALARY\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:GENDER\"/><Cell col=\"6\" text=\"bind:MARRIED\"/></Band><Band id=\"summary\"><Cell text=\"Sum.\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\" text=\"expr:dataset.getSum(&quot;SALARY&quot;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"5\"/><Cell col=\"6\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","10","70","770","276",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_binddataset("ds_emp");
            obj.set_enable("true");
            obj.set_positionstep("1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"48\"/><Column size=\"80\"/><Column size=\"100\" band=\"right\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"left band\" cssclass=\"grd_fix_left\" background=\"#f6edc5\"/><Cell col=\"2\" colspan=\"8\" text=\"body band\"/><Cell col=\"10\" text=\"right band\" background=\"#f8d2e3\"/><Cell row=\"1\" text=\"No\" cssclass=\"grd_fix_left\" background=\"#f6edc5\"/><Cell row=\"1\" col=\"1\" text=\"Name\" cssclass=\"grd_fix_left\" background=\"#f6edc5\"/><Cell row=\"1\" col=\"2\" text=\"Empl ID\"/><Cell row=\"1\" col=\"3\" text=\"Dept Code\"/><Cell row=\"1\" col=\"4\" text=\"Dept Name\"/><Cell row=\"1\" col=\"5\" text=\"Position\"/><Cell row=\"1\" col=\"6\" text=\"Hire Date\"/><Cell row=\"1\" col=\"7\" text=\"Gender\"/><Cell row=\"1\" col=\"8\" text=\"Memo\"/><Cell row=\"1\" col=\"9\" text=\"Married\"/><Cell row=\"1\" col=\"10\" text=\"Salary\" background=\"#f8d2e3\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" cssclass=\"grd_fix_left\"/><Cell col=\"1\" text=\"bind:FULL_NAME\" cssclass=\"grd_fix_left\"/><Cell col=\"2\" text=\"bind:EMPL_ID\"/><Cell col=\"3\" text=\"bind:DEPT_CD\"/><Cell col=\"4\" text=\"bind:DEPT_CD\" displaytype=\"combotext\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CD\" combodatacol=\"DEPT_NAME\"/><Cell col=\"5\" text=\"bind:POS_CD\"/><Cell col=\"6\" text=\"bind:HIRE_DATE\"/><Cell col=\"7\" text=\"bind:GENDER\"/><Cell col=\"8\" text=\"bind:MEMO\"/><Cell col=\"9\" text=\"bind:MARRIED\"/><Cell col=\"10\" text=\"bind:SALARY\" cssclass=\"grd_fix_right\" textAlign=\"right\"/></Band></Format><Format id=\"format1\"><Columns><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"32\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"Empl ID\"/><Cell col=\"1\" text=\"Name\"/><Cell col=\"2\" text=\"Dept Code\"/><Cell col=\"3\" text=\"Hire Date\"/><Cell col=\"4\" text=\"Annual Salary\"/><Cell col=\"5\" text=\"Gender\"/><Cell col=\"6\" text=\"Married\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPL_ID\"/><Cell col=\"1\" text=\"bind:FULL_NAME\"/><Cell col=\"2\" text=\"bind:DEPT_CD\"/><Cell col=\"3\" text=\"bind:HIRE_DATE\"/><Cell col=\"4\" text=\"bind:SALARY\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:GENDER\"/><Cell col=\"6\" text=\"bind:MARRIED\"/></Band><Band id=\"summary\"><Cell colspan=\"4\" text=\"Avg.\"/><Cell col=\"4\" text=\"expr:dataset.getAvg(&quot;SALARY&quot;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"5\"/><Cell col=\"6\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_cellSize","20","426","279","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Cell Size (Prop. cellsizingtype)");
            obj.set_textPadding("0px 0px 0px 10px");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_cellMove","20","393","293","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Cell Moving (Prop. cellmovingtype)");
            obj.set_textPadding("0px 0px 0px 10px");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_autoFit","20","360","289","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Column Auto Fit (Prop. autofittype)");
            obj.set_padding("");
            obj.set_textPadding("0px 0px 0px 10px");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_autoSizeBand","49","611","272","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("1");
            obj.set_enable("true");
            var rdo_autoSizeBand_innerdataset = new nexacro.NormalDataset("rdo_autoSizeBand_innerdataset", obj);
            rdo_autoSizeBand_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">body</Col><Col id=\"datacolumn\">body</Col></Row><Row><Col id=\"codecolumn\">head</Col><Col id=\"datacolumn\">head</Col></Row><Row><Col id=\"codecolumn\">allband</Col><Col id=\"datacolumn\">allband</Col></Row></Rows>");
            obj.set_innerdataset(rdo_autoSizeBand_innerdataset);
            obj.set_value("body");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_cellSize","49","459","160","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("1");
            obj.set_enable("false");
            var rdo_cellSize_innerdataset = new nexacro.NormalDataset("rdo_cellSize_innerdataset", obj);
            rdo_cellSize_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">col</Col><Col id=\"datacolumn\">col</Col></Row><Row><Col id=\"codecolumn\">row</Col><Col id=\"datacolumn\">row</Col></Row><Row><Col id=\"codecolumn\">both</Col><Col id=\"datacolumn\">both</Col></Row></Rows>");
            obj.set_innerdataset(rdo_cellSize_innerdataset);
            obj.set_value("col");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_selectType","459","512","114","120",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("true");
            var rdo_selectType_innerdataset = new nexacro.NormalDataset("rdo_selectType_innerdataset", obj);
            rdo_selectType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">row</Col><Col id=\"datacolumn\">row</Col></Row><Row><Col id=\"codecolumn\">multirow</Col><Col id=\"datacolumn\">multirow</Col></Row><Row><Col id=\"codecolumn\">cell</Col><Col id=\"datacolumn\">cell</Col></Row><Row><Col id=\"codecolumn\">area</Col><Col id=\"datacolumn\">area</Col></Row><Row><Col id=\"codecolumn\">multiarea</Col><Col id=\"datacolumn\">multiarea</Col></Row></Rows>");
            obj.set_innerdataset(rdo_selectType_innerdataset);
            obj.set_value("row");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_autoSize","49","535","272","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("1");
            obj.set_enable("true");
            var rdo_autoSize_innerdataset = new nexacro.NormalDataset("rdo_autoSize_innerdataset", obj);
            rdo_autoSize_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">none</Col><Col id=\"datacolumn\">none</Col></Row><Row><Col id=\"codecolumn\">col</Col><Col id=\"datacolumn\">col</Col></Row><Row><Col id=\"codecolumn\">row</Col><Col id=\"datacolumn\">row</Col></Row><Row><Col id=\"codecolumn\">both</Col><Col id=\"datacolumn\">both</Col></Row></Rows>");
            obj.set_innerdataset(rdo_autoSize_innerdataset);
            obj.set_value("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","502","283","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Auto Size Type (Prop. autosizingtype)");
            obj.set_cssclass("sta_WF_LabelTxt12");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","447","393","261","28",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("No Data Text (Prop. nodatatext)");
            obj.set_cssclass("sta_WF_LabelTxt12");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","447","479","251","28",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("Select Type (Prop. selecttype)");
            obj.set_cssclass("sta_WF_LabelTxt12");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_noData","459","426","140","28",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_value("No Data...");
            this.addChild(obj.name, obj);

            obj = new Button("btn_apply","604","426","78","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Apply");
            this.addChild(obj.name, obj);

            obj = new Button("btn_reset","687","426","78","28",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("reset");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","10","40","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text(" Default");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","327","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text(" Base Properties");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","40","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text(" Column Fix");
            obj.set_cssclass("sta_WF_TitleType1");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_sum","444","360","318","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Summary Top (Prop. summarytype)");
            obj.set_textPadding("0px 0px 0px 10px");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","10","381","280","28",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text(" Grid Format (Prop. formatid)");
            obj.set_cssclass("sta_WF_TitleType1");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_format","22","414","72","28",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Format");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_default","99","414","72","28",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Default");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("st_result","604","545","226","100",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Button("btn_select","604","512","146","28",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Get Selected");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","20","578","350","28",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("Auto Size Band (Prop. autosizebandtype)");
            obj.set_cssclass("sta_WF_LabelTxt12");
            this.addChild(obj.name, obj);

            obj = new Static("Static99","10","0","250","43",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("Grid");
            obj.set_cssclass("sta_WF_TitleMain");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1038,650,this,function(p){});
            obj.set_stepcount("2");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Comp_Grid.xfdl", function() {
        // Auto Fit -
        this.chk_autoFit_onclick = function(obj,e)
        {
        	if(obj.value){
        		this.Grid00.set_autofittype("col");
        	}
        	else{
        		this.Grid00.set_autofittype("none");
        	}
        };

        this.chk_cellMove_onclick = function(obj,e)
        {
        	if(obj.value){
        		this.Grid00.set_cellmovingtype("col");
        	}
        	else{
        		this.Grid00.set_cellmovingtype("none");
        	}
        };

        this.chk_cellSize_onclick = function(obj,e)
        {
        	if(obj.value){
        		this.rdo_cellSize.set_enable(true);
        		this.Grid00.set_cellsizingtype("col")
        	}
        	else{
        		this.rdo_cellSize.set_enable(false);
        		this.Grid00.set_cellsizingtype("none")
        	}
        };

        this.rdo_cellSize_onitemchanged = function(obj,e)
        {
        	this.Grid00.set_cellsizingtype(e.postvalue);
        };

        this.rdo_autoSize_onitemchanged = function(obj,e)
        {
        	this.Grid00.set_autosizingtype(e.postvalue);
        };

        this.rdo_autoSizeBand_onitemchanged = function(obj,e)
        {
        	this.Grid00.set_autosizebandtype(e.postvalue);
        };

        this.btn_apply_onclick = function(obj,e)
        {
        	this.ds_emp.deleteAll();
        	this.Grid00.set_nodatatext(this.edt_noData.value);
        };

        this.btn_reset_onclick = function(obj,e)
        {
        	this.ds_emp.reset();
        };

        this.rdo_selectType_onitemchanged = function(obj,e)
        {
        	this.Grid00.set_selecttype(e.postvalue);
        };

        this.btn_select_onclick = function(obj,e)
        {
        	this.st_result.set_text("");
        	this.st_result.set_fittocontents("none");

        	var sRtn = "";
        	if(this.rdo_selectType.value == "multirow"){
        		var arrRow = this.Grid00.getSelectedDatasetRows();
        		for(var i=0; i<arrRow.length; i++){
        			sRtn += "Selected Row Index: " + arrRow[i] + "\n";
        		}
        	}
        	else if(this.rdo_selectType.value == "area" || this.rdo_selectType.value == "multiarea"){
        		sRtn   = "Start = row: " + this.Grid00.selectstartrow + ", Column: " + this.Grid00.selectstartcol;
        		sRtn += "\n";
        		sRtn += "End   = row: " + this.Grid00.selectendrow + ", Column: " + this.Grid00.selectendcol;
        	}
        	this.st_result.set_text(sRtn);
        	this.st_result.set_fittocontents("height");
        };

        this.chk_sum_onclick = function(obj,e)
        {
        	if(obj.value){
        		this.Grid00.set_summarytype("top");
        	}
        	else{
        		this.Grid00.set_summarytype("default");
        	}
        };

        this.btn_format_onclick = function(obj,e)
        {
        	this.Grid01.set_formatid("format1");
        };

        this.btn_default_onclick = function(obj,e)
        {
        	this.Grid01.set_formatid("default");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.chk_cellSize.addEventHandler("onclick",this.chk_cellSize_onclick,this);
            this.chk_cellMove.addEventHandler("onclick",this.chk_cellMove_onclick,this);
            this.chk_autoFit.addEventHandler("onclick",this.chk_autoFit_onclick,this);
            this.rdo_autoSizeBand.addEventHandler("onitemchanged",this.rdo_autoSizeBand_onitemchanged,this);
            this.rdo_cellSize.addEventHandler("onitemchanged",this.rdo_cellSize_onitemchanged,this);
            this.rdo_selectType.addEventHandler("onitemchanged",this.rdo_selectType_onitemchanged,this);
            this.rdo_autoSize.addEventHandler("onitemchanged",this.rdo_autoSize_onitemchanged,this);
            this.btn_apply.addEventHandler("onclick",this.btn_apply_onclick,this);
            this.btn_reset.addEventHandler("onclick",this.btn_reset_onclick,this);
            this.chk_sum.addEventHandler("onclick",this.chk_sum_onclick,this);
            this.btn_format.addEventHandler("onclick",this.btn_format_onclick,this);
            this.btn_default.addEventHandler("onclick",this.btn_default_onclick,this);
            this.btn_select.addEventHandler("onclick",this.btn_select_onclick,this);
            this.ds_emp.addEventHandler("cancolumnchange",this.ds_emp_cancolumnchange,this);
            this.ds_emp.addEventHandler("onrowsetchanged",this.ds_emp_onrowsetchanged,this);
            this.ds_emp.addEventHandler("onrowposchanged",this.ds_emp_onrowposchanged,this);
        };
        this.loadIncludeScript("Comp_Grid.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
