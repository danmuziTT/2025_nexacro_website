(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Emp");
            this.set_titletext("Employees");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_pos", this);
            obj._setContents("<ColumnInfo><Column id=\"POS_CD\" type=\"string\" size=\"32\"/><Column id=\"POS_NAME\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"POS_CD\">04</Col><Col id=\"POS_NAME\">Officer</Col></Row><Row><Col id=\"POS_CD\">03</Col><Col id=\"POS_NAME\">Assistant Manager</Col></Row><Row><Col id=\"POS_CD\">02</Col><Col id=\"POS_NAME\">Division Manager</Col></Row><Row><Col id=\"POS_CD\">01</Col><Col id=\"POS_NAME\">Chairman</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CD\">01</Col><Col id=\"DEPT_NAME\">Accounting Team</Col></Row><Row><Col id=\"DEPT_CD\">02</Col><Col id=\"DEPT_NAME\">HR Team</Col></Row><Row><Col id=\"DEPT_CD\">03</Col><Col id=\"DEPT_NAME\">Sales Team</Col></Row><Row><Col id=\"DEPT_CD\">04</Col><Col id=\"DEPT_NAME\">Design Team</Col></Row><Row><Col id=\"DEPT_CD\">05</Col><Col id=\"DEPT_NAME\">Education Team</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_emp", this);
            obj.set_keystring("");
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"POS_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/><Column id=\"MEMO\" type=\"STRING\" size=\"10\"/><Column id=\"COL_CHK\" type=\"STRING\" size=\"1\"/></ColumnInfo><Rows><Row><Col id=\"EMPL_ID\">AA001</Col><Col id=\"FULL_NAME\">Olivia</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20101003</Col><Col id=\"SALARY\">83000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">ivory</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"EMPL_ID\">AA002</Col><Col id=\"FULL_NAME\">John</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20051011</Col><Col id=\"SALARY\">76000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">greenyellow</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"EMPL_ID\">BB001</Col><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"DEPT_CD\">03</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20070206</Col><Col id=\"SALARY\">95000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">aliceblue</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"EMPL_ID\">BB002</Col><Col id=\"FULL_NAME\">Maia</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20090512</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">ivory</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"EMPL_ID\">CC001</Col><Col id=\"FULL_NAME\">Adam</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20010109</Col><Col id=\"SALARY\">88000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">greenyellow</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"EMPL_ID\">DD001</Col><Col id=\"FULL_NAME\">Ray</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20160202</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">lightpink</Col><Col id=\"COL_CHK\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","10","35",null,"46","10",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("div_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_cd","123","8","78","28",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_dept","201","8","30","28",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_verticalAlign("");
            obj.set_cssclass("btn_WF_Find");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_dept_nm","231","8","144","28",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            this.div_search.addChild(obj.name, obj);

            obj = new Radio("rdo_gender","543","8","192","28",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var div_search_form_rdo_gender_innerdataset = new nexacro.NormalDataset("div_search_form_rdo_gender_innerdataset", obj);
            div_search_form_rdo_gender_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">A</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">M</Col><Col id=\"datacolumn\">남자</Col></Row><Row><Col id=\"codecolumn\">W</Col><Col id=\"datacolumn\">여자</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_rdo_gender_innerdataset);
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04","475","8","68","28",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("성별");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00","0","8","123","28",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("부서코드/부서명");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_retrieve",null,"4","63","26","208",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_FrmMain");
            obj.set_background("#204f75");
            obj.set_border("1px solid #0e2436");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"4","63","26","142",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("입력");
            obj.set_cssclass("btn_WF_FrmMain");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"4","63","26","76",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_FrmMain");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"4","63","26","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_FrmMain");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","10","116",null,null,"400","10",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_emp");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"150\"/><Column size=\"160\"/><Column size=\"140\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"120\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/><Row size=\"28\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"사원번호\"/><Cell col=\"3\" text=\"부서\"/><Cell col=\"4\" text=\"직급\"/><Cell col=\"5\" text=\"입사일\"/><Cell col=\"6\" text=\"급여\"/><Cell col=\"7\" text=\"성별\"/><Cell col=\"8\" text=\"결혼여부\"/><Cell col=\"9\" text=\"비고사항\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\" celltype=\"head\"/><Cell col=\"1\" text=\"bind:FULL_NAME\" edittype=\"text\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:EMPL_ID\" editlimit=\"\" edittype=\"mask\" maskeditformat=\"AA-###\" displaytype=\"mask\" maskedittype=\"string\"/><Cell col=\"3\" text=\"bind:DEPT_CD\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CD\" combodatacol=\"DEPT_NAME\"/><Cell col=\"4\" text=\"bind:POS_CD\" combodataset=\"ds_pos\" combocodecol=\"POS_CD\" combodatacol=\"POS_NAME\" displaytype=\"combocontrol\" edittype=\"combo\"/><Cell col=\"5\" text=\"bind:HIRE_DATE\" displaytype=\"calendarcontrol\" edittype=\"date\" textAlign=\"center\" calendarpopupsize=\"200 220\"/><Cell col=\"6\" text=\"bind:SALARY\" displaytype=\"number\" edittype=\"mask\" textAlign=\"right\" maskeditformat=\"#,###\"/><Cell col=\"7\" text=\"expr:comp.parent.fn_gender(GENDER)\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:MARRIED\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"9\" text=\"bind:MEMO\" edittype=\"normal\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"expr: &quot;Count: &quot; + dataset.getRowCount()\" textAlign=\"right\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\" text=\"expr:dataset.getAvg(&quot;SALARY&quot;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_detail",null,"116","380",null,"10","10",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","137","0","243","38",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("10");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_border("1px solid #e0e2e6");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static01","137","37","243","38",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("11");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static09","137","74","243","38",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("13");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static15","137","111","243","98",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("18");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static17","137","356","243","167",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("20");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static13","137","208","243","38",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("16");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static20","137","245","243","38",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static04","137","282","243","38",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("24");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static07","137","319","243","38",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("26");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.div_detail.addChild(obj.name, obj);

            obj = new Edit("edt_name","147","5","226","28",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_Essential");
            this.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_id","147","42","226","28",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("1");
            obj.set_type("string");
            obj.set_format("AA-###");
            obj.set_cssclass("msk_WF_Essential");
            this.div_detail.addChild(obj.name, obj);

            obj = new Combo("cbo_dept","147","79","226","28",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.div_detail.addChild(obj.name, obj);

            obj = new ListBox("lst_pos","147","116","226","88",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_pos");
            obj.set_codecolumn("POS_CD");
            obj.set_datacolumn("POS_NAME");
            this.div_detail.addChild(obj.name, obj);

            obj = new Radio("rdo_gender","147","213","143","28",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            var div_detail_form_rdo_gender_innerdataset = new nexacro.NormalDataset("div_detail_form_rdo_gender_innerdataset", obj);
            div_detail_form_rdo_gender_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">M</Col><Col id=\"datacolumn\">남자</Col></Row><Row><Col id=\"codecolumn\">W</Col><Col id=\"datacolumn\">여자</Col></Row></Rows>");
            obj.set_innerdataset(div_detail_form_rdo_gender_innerdataset);
            this.div_detail.addChild(obj.name, obj);

            obj = new CheckBox("chk_married","147","250","96","28",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("5");
            this.div_detail.addChild(obj.name, obj);

            obj = new Calendar("cal_date","147","287","226","28",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("6");
            obj.set_cssclass("cal_WF_Essential");
            this.div_detail.addChild(obj.name, obj);

            obj = new TextArea("txt_memo","147","361","226","155",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("9");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static08","0","74","140","38",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("12");
            obj.set_text("부서");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static10","0","0","140","38",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("14");
            obj.set_text("성명");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static12","0","282","140","38",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("15");
            obj.set_text("입사일");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static14","0","111","140","98",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("17");
            obj.set_text("직급");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static16","0","208","140","38",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("19");
            obj.set_text("성별");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static19","0","319","140","38",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("21");
            obj.set_text("급여");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static00","0","37","140","38",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("22");
            obj.set_text("사원번호");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static03","0","245","140","38",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("23");
            obj.set_text("결혼여부");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static05","0","356","140","166",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("25");
            obj.set_text("비고사항");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_salary","147","324","226","28",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("8");
            obj.set_type("number");
            obj.set_format("#,###");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("sta00","10","0","196","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("사원관리");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00","10","81","196","35",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("사원목록");
            obj.set_cssclass("sta_WF_TitleSub");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","grd_list:10","81","196","35",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("상세정보");
            obj.set_cssclass("sta_WF_TitleSub");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_search.form
            obj = new Layout("default","",0,0,this.div_search.form,function(p){});
            this.div_search.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_detail.form
            obj = new Layout("default","",0,0,this.div_detail.form,function(p){});
            this.div_detail.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1038,650,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_detail.form.cbo_dept","value","ds_emp","DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_detail.form.edt_name","value","ds_emp","FULL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_detail.form.msk_id","value","ds_emp","EMPL_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_detail.form.cal_date","value","ds_emp","HIRE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_detail.form.msk_salary","value","ds_emp","SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_detail.form.rdo_gender","value","ds_emp","GENDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_detail.form.chk_married","value","ds_emp","MARRIED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_detail.form.txt_memo","value","ds_emp","MEMO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_detail.form.lst_pos","value","ds_emp","POS_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Emp.xfdl", function() {
        this.Form_onload = function(obj,e)
        {

        };

        this.fn_init = function(obj)
        {
        	//dept code, position code load
        	this.transaction("svcCode"
        			        ,"EduUrl::select_code.jsp"
        					,""
        					,"ds_dept=out_dept ds_pos=out_pos"
        					,""
        					,"fn_callback");

        	//Grid Sort
        	for(var i=0 ; i < this.components.length ; i++)
        	{
        		if(this.components[i] == "[object Grid]")
        		{
        			this.components[i].addEventHandler("onheadclick", this.cfn_GridSort, this);
        		}
        	}
        }

        // Search Area Dept Popup
        this.div_search_btn_dept_onclick = function(obj,e)
        {
        	var objChild = new ChildFrame("popDept", 0, 0, 300, 400);
        	objChild.set_formurl("EduBasic::Popup/Popup_DeptSearch.xfdl");
        	objChild.set_openalign("center middle");
        	objChild.set_dragmovetype("all");

            objChild.showModal(this.getOwnerFrame()
                             , {}
                             , this
                             , "fn_callback_pop");

        };

        // Dept Popup Callback
        this.fn_callback_pop = function(sPopupId, sReturn)
        {
        	if(sReturn == undefined){
        		sReturn = "";
        	}
        	if(sPopupId == "popDept")
        	{
        		if(sReturn.length > 0){
        			var arrRtn = sReturn.split("|");
        			this.div_search.form.edt_dept_cd.set_value(arrRtn[0]);
        			this.div_search.form.edt_dept_nm.set_value(arrRtn[1]);
        		}
        	}
        }

        // Search Area Gender
        this.div_search_rdo_gender_onitemchanged = function(obj,e)
        {
        	this.fn_setFilter(e.postvalue);
        };

        this.fn_setFilter = function(sValue)
        {
        	if(sValue == "A"){
        		this.ds_emp.filter("");
        	}
        	else{
        		this.ds_emp.filter("GENDER == '" + sValue + "'");
        	}
        }

        // Search Area Reset
        this.div_cont_btn_reset_onclick = function(obj,e)
        {
        	this.div_search.form.edt_dept_cd.set_value("");
        	this.div_search.form.edt_dept_nm.set_value("");
        	this.div_search.form.rdo_gender.set_value("A");
        	this.fn_setFilter("A");
        };

        // Retrieve Button
        this.btn_retrieve_onclick = function(obj,e)
        {
        	var sDeptCd = this.div_search.form.edt_dept_cd.value;

        	this.transaction("svcSelect"
        				    ,"EduUrl::select_emp.jsp?sDept="+sDeptCd
        					,""
        					,"ds_emp=out_emp"
        					,""
        					,"fn_callback");
        };

        // Add Button
        this.btn_add_onclick = function(obj,e)
        {
        	this.ds_emp.addRow();
        	this.ds_emp.setColumn(this.ds_emp.rowposition, "HIRE_DATE", this.fn_today());
        };

        // Delete Button
        this.btn_del_onclick = function(obj,e)
        {
        	this.ds_emp.deleteRow(this.ds_emp.rowposition);
        };

        // Save Button
        this.btn_save_onclick = function(obj,e)
        {
        	var sForm  = this.name;
        	var sTitle = nexacro.wrapQuote(this.titletext);
        	this.transaction("svcSave"
        					,"EduUrl::save_emp.jsp"
        					,"in_emp=ds_emp:u"
        					,""
        					,"in_var1="+sTitle+" in_var2="+sForm
        					,"fn_callback");


        };

        this.out_var = "";
        this.fn_callback = function(svcID, errCD, errMSG)
        {
        	if(errCD < 0){
        		this.alert("Error: " + errMSG);
        		return;
        	}
        	if(svcID == "svcSelect"){
        		this.alert("Select Success");
        	}
        	else if(svcID == "svcSave"){
        		this.alert("Save Success" + this.out_var);
        	}
        }

        // Today
        this.fn_today = function()
        {
        	var objDate = new Date();
        	var sToday  = objDate.getFullYear().toString();
        	    sToday += (objDate.getMonth()+1).toString().padLeft(2, "0")
        	    sToday += objDate.getDate().toString().padLeft(2, "0");

        	return sToday;
        }

        // Gender Code --> Name
        this.fn_gender = function(arg)
        {
        	if(arg == "M"){
        		return "Male";
        	}
        	else{
        		return "Female";
        	}
        }

        this.grd_list_onheadclick = function(obj,e)
        {
        	this.fn_GridSort(obj, e);
        };

        this.CONST_NONE_MARK = "";
        this.CONST_ASC_MARK = "↑";
        this.CONST_DESC_MARK = "↓";
        this.CONST_SORT_FLAG = false;
        this.fn_GridSort = function (obj, e)
        {
        	var bindDs = obj.getBindDataset();
        	if (bindDs.rowcount == 0){
        		return false;
        	}

        	var CONST_SORT_MARK = "";
        	var BodyColId = (obj.getCellProperty("body", e.col, "text")).toString().split(":");
        	for (var i = 0; i < obj.getCellCount("head"); i++)
        	{
        		if (obj.getCellText(-1, i) == "undefined") {
        			continue;
        		}

        		var strHeadText = obj.getCellText(-1, i);

        		if (i == e.cell) {
        			if (strHeadText.substr(strHeadText.length - 1) == this.CONST_ASC_MARK) {
        				obj.setCellProperty("head", i, "text", strHeadText.substr(0, strHeadText.length - 1) + this.CONST_DESC_MARK);
        				bindDs.set_keystring("S:-" + BodyColId[1]);
        			}
        			else if (strHeadText.substr(strHeadText.length - 1) == this.CONST_DESC_MARK) {
        				obj.setCellProperty("head", i, "text", strHeadText.substr(0, strHeadText.length - 1) + this.CONST_ASC_MARK);
        				bindDs.set_keystring("S:+" + BodyColId[1]);
        			}
        			else {
        				obj.setCellProperty("head", i, "text", strHeadText + this.CONST_ASC_MARK);
        				bindDs.set_keystring("S:+" + BodyColId[1]);
        			}
        		}
        		else {
        			if (strHeadText.substr(strHeadText.length - 1) == this.CONST_ASC_MARK || strHeadText.substr(strHeadText.length - 1) == this.CONST_DESC_MARK) {
        				obj.setCellProperty("head", i, "text", strHeadText.substr(0, strHeadText.length - 1));
        			}
        		}
        	}
        }

        this.fnClose = function()
        {

        	return false;

        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.addEventHandler("ontimer",this.Form_Emp_ontimer,this);
            this.div_search.form.btn_dept.addEventHandler("onclick",this.div_search_btn_dept_onclick,this);
            this.div_search.form.rdo_gender.addEventHandler("onitemchanged",this.div_search_rdo_gender_onitemchanged,this);
            this.btn_retrieve.addEventHandler("onclick",this.btn_retrieve_onclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.grd_list.addEventHandler("onheadclick",this.grd_list_onheadclick,this);
            this.div_detail.form.Static13.addEventHandler("onclick",this.div_detail_Static13_onclick,this);
            this.div_detail.form.Static04.addEventHandler("onclick",this.Div00_Static04_onclick,this);
            this.div_detail.form.Static07.addEventHandler("onclick",this.Div00_Static07_onclick,this);
            this.div_detail.form.edt_name.addEventHandler("canchange",this.div_detail_edt_name_canchange,this);
            this.div_detail.form.Static10.addEventHandler("onclick",this.div_detail_Static10_onclick,this);
            this.div_detail.form.Static05.addEventHandler("onclick",this.Div00_Static05_onclick,this);
            this.ds_emp.addEventHandler("cancolumnchange",this.ds_emp_cancolumnchange,this);
            this.ds_emp.addEventHandler("onrowsetchanged",this.ds_emp_onrowsetchanged,this);
            this.ds_emp.addEventHandler("onrowposchanged",this.ds_emp_onrowposchanged,this);
            this.ds_emp.addEventHandler("oncolumnchanged",this.ds_emp_oncolumnchanged,this);
        };
        this.loadIncludeScript("Form_Emp.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
