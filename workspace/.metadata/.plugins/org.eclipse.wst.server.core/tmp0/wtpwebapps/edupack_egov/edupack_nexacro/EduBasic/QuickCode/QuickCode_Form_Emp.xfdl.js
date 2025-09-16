(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QuickCode_Form_Emp");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_pos", this);
            obj._setContents("<ColumnInfo><Column id=\"POS_CD\" type=\"string\" size=\"32\"/><Column id=\"POS_NAME\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"POS_CD\">04</Col><Col id=\"POS_NAME\">Officer</Col></Row><Row><Col id=\"POS_CD\">03</Col><Col id=\"POS_NAME\">Assistant Manager</Col></Row><Row><Col id=\"POS_CD\">02</Col><Col id=\"POS_NAME\">Division Manager</Col></Row><Row><Col id=\"POS_CD\">01</Col><Col id=\"POS_NAME\">Chairman</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CD\">01</Col><Col id=\"DEPT_NAME\">Accounting Team</Col></Row><Row><Col id=\"DEPT_CD\">02</Col><Col id=\"DEPT_NAME\">HR Team</Col></Row><Row><Col id=\"DEPT_CD\">03</Col><Col id=\"DEPT_NAME\">Sales Team</Col></Row><Row><Col id=\"DEPT_CD\">04</Col><Col id=\"DEPT_NAME\">Design Team</Col></Row><Row><Col id=\"DEPT_CD\">05</Col><Col id=\"DEPT_NAME\">Education Team</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new PopupAction("PopupAction_Dpet", this);
            obj.set_formurl("QuickCode::QuickCode_Pop_DeptSearch.xfdl");
            obj.set_popupstyle("modal");
            obj.set_popupid("popDept");
            obj.set_title("Dept Search");
            obj.set_targetview("QuickCode_Form_Emp (Form)");
            obj.set_popupleft("-1");
            obj.set_popuptop("-1");
            obj.set_popupwidth("300");
            obj.set_popupheight("400");
            this.addChild(obj.name, obj);


            obj = new TranAction("TranAction_Select", this);
            obj.set_serviceid("svcSelect");
            obj.set_serviceurl("EduUrl::select_emp.jsp?sDept=");
            obj.set_outputdatasets("view_list.form.viewdataset=out_emp");
            obj.set_async("true");
            obj.set_targetview("QuickCode_Form_Emp (Form)");
            obj._setContents({
                "model":{
                    "input":[
                        {
                            "name":"view_search:DEPT_CD",
                            "viewid":"view_search",
                            "fieldid":"DEPT_CD",
                            "value":"DEPT_CD"
                        },
                        {
                            "name":"view_search:GENDER",
                            "viewid":"view_search",
                            "fieldid":"GENDER",
                            "value":"GENDER"
                        }
                    ]
                }
            });
            this.addChild(obj.name, obj);


            obj = new TranAction("TranAction_Save", this);
            obj.set_serviceid("svcSave");
            obj.set_serviceurl("EduUrl::save_emp.jsp");
            obj.set_inputdatasets("in_emp=view_detail.form.viewdataset:U");
            obj.set_async("true");
            obj.set_targetview("Form_Emp_QuickCode");
            this.addChild(obj.name, obj);


            obj = new TranAction("TranAction_Code", this);
            obj.set_async("true");
            obj.set_serviceid("svcCode");
            obj.set_serviceurl("EduUrl::select_code.jsp");
            obj.set_outputdatasets("ds_dept=out_dept ds_pos=out_pos");
            obj.set_targetview("QuickCode_Form_Emp");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new View("view_comBtn",null,"10","536","30","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("View00");
            obj.set_viewdataset("viewdataset");
            this.addChild(obj.name, obj);

            obj = new Button("btn_retrieve","154","0","90","30",null,null,null,null,null,null,this.view_comBtn.form);
            obj.set_text("Retrieve");
            obj.set_cssclass("btn_WF_CRUD");
            this.view_comBtn.addChild(obj.name, obj);

            obj = new Button("btn_add","249","0","90","30",null,null,null,null,null,null,this.view_comBtn.form);
            obj.set_text("Add");
            obj.set_cssclass("btn_WF_CRUD");
            this.view_comBtn.addChild(obj.name, obj);

            obj = new Button("btn_delete","344","0","90","30",null,null,null,null,null,null,this.view_comBtn.form);
            obj.set_text("Delete");
            obj.set_cssclass("btn_WF_CRUD");
            this.view_comBtn.addChild(obj.name, obj);

            obj = new Button("btn_save","439","0","90","30",null,null,null,null,null,null,this.view_comBtn.form);
            obj.set_text("Save");
            obj.set_cssclass("btn_WF_CRUD");
            this.view_comBtn.addChild(obj.name, obj);

            obj = new View("view_search","10","50",null,"60","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("View01");
            obj.set_viewdataset("viewdataset");
            obj.set_cssclass("View_WF_Area");
            this.addChild(obj.name, obj);


            obj = new Dataset("viewdataset", this.view_search.form);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"80\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"80\"/><Column id=\"GENDER\" type=\"STRING\" size=\"80\"/></ColumnInfo><Rows><Row/></Rows>");
            this.view_search.addChild(obj.name, obj);

            obj = new Static("st_deptCd_Label","0","14","140","30",null,null,null,null,null,null,this.view_search.form);
            obj.set_text("Department");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.view_search.addChild(obj.name, obj);

            obj = new Edit("edt_deptCd","140","14","60","30",null,null,null,null,null,null,this.view_search.form);
            this.view_search.addChild(obj.name, obj);

            obj = new Button("btn_deptPopupBtn","205","14","30","30",null,null,null,null,null,null,this.view_search.form);
            obj.set_cssclass("btn_WF_Search");
            this.view_search.addChild(obj.name, obj);

            obj = new Edit("edt_deptName","240","14","120","30",null,null,null,null,null,null,this.view_search.form);
            this.view_search.addChild(obj.name, obj);

            obj = new Static("st_gender_Label","365","14","110","30",null,null,null,null,null,null,this.view_search.form);
            obj.set_text("Gender");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.view_search.addChild(obj.name, obj);

            obj = new Radio("rdo_gender","475","14","220","30",null,null,null,null,null,null,this.view_search.form);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("-1");
            obj.set_columncount("-1");
            var view_search_form_rdo_gender_innerdataset = new nexacro.NormalDataset("view_search_form_rdo_gender_innerdataset", obj);
            view_search_form_rdo_gender_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">A</Col><Col id=\"datacolumn\">All</Col></Row><Row><Col id=\"codecolumn\">M</Col><Col id=\"datacolumn\">Male</Col></Row><Row><Col id=\"codecolumn\">W</Col><Col id=\"datacolumn\">Female</Col></Row></Rows>");
            obj.set_innerdataset(view_search_form_rdo_gender_innerdataset);
            obj.set_text("All");
            obj.set_value("A");
            obj.set_index("0");
            this.view_search.addChild(obj.name, obj);

            obj = new Button("btn_resetBtn","890","14","80","30",null,null,null,null,null,null,this.view_search.form);
            obj.set_text("Reset");
            this.view_search.addChild(obj.name, obj);

            obj = new View("view_list","10","115",null,null,"406","10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("View02");
            obj.set_viewdataset("viewdataset");
            this.addChild(obj.name, obj);


            obj = new Dataset("viewdataset", this.view_list.form);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"POS_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/><Column id=\"MEMO\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"EMPL_ID\">AA001</Col><Col id=\"FULL_NAME\">Olivia</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20101003</Col><Col id=\"SALARY\">83000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">ivory</Col></Row><Row><Col id=\"EMPL_ID\">AA002</Col><Col id=\"FULL_NAME\">John</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20051011</Col><Col id=\"SALARY\">76000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">greenyellow</Col></Row><Row><Col id=\"EMPL_ID\">BB001</Col><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"DEPT_CD\">03</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20070206</Col><Col id=\"SALARY\">95000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">aliceblue</Col></Row><Row><Col id=\"EMPL_ID\">BB002</Col><Col id=\"FULL_NAME\">Maia</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20090512</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">ivory</Col></Row><Row><Col id=\"EMPL_ID\">CC001</Col><Col id=\"FULL_NAME\">Adam</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20010109</Col><Col id=\"SALARY\">88000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">greenyellow</Col></Row><Row><Col id=\"EMPL_ID\">DD001</Col><Col id=\"FULL_NAME\">Ray</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20160202</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">lightpink</Col></Row></Rows>");
            this.view_list.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","0",null,null,"0","0",null,null,null,null,this.view_list.form);
            obj.set_binddataset("viewdataset");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/><Row size=\"32\" band=\"summ\"/></Rows><Band id=\"head\"><Cell id=\"cell_EMPL_ID\" text=\"Emp ID\"/><Cell col=\"1\" id=\"cell_FULL_NAME\" text=\"Name\"/><Cell col=\"2\" id=\"cell_DEPT_CD\" text=\"Department\"/><Cell col=\"3\" id=\"cell_POS_CD\" text=\"Position\"/><Cell col=\"4\" id=\"cell_HIRE_DATE\" text=\"Hire Date\"/><Cell col=\"5\" id=\"cell_SALARY\" text=\"Annual Salary\"/><Cell col=\"6\" id=\"cell_GENDER\" text=\"Gender\"/><Cell col=\"7\" id=\"cell_MARRIED\" text=\"Married\"/></Band><Band id=\"body\"><Cell id=\"cell_EMPL_ID\" text=\"bind:EMPL_ID\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"AA-###\" maskedittype=\"string\" textAlign=\"center\"/><Cell col=\"1\" id=\"cell_FULL_NAME\" text=\"bind:FULL_NAME\" displaytype=\"normal\" edittype=\"normal\"/><Cell col=\"2\" id=\"cell_DEPT_CD\" text=\"bind:DEPT_CD\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CD\" combodatacol=\"DEPT_NAME\"/><Cell col=\"3\" id=\"cell_POS_CD\" text=\"bind:POS_CD\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_pos\" combocodecol=\"POS_CD\" combodatacol=\"POS_NAME\"/><Cell col=\"4\" id=\"cell_HIRE_DATE\" text=\"bind:HIRE_DATE\" displaytype=\"calendarcontrol\" edittype=\"date\"/><Cell col=\"5\" id=\"cell_SALARY\" text=\"bind:SALARY\" displaytype=\"number\" edittype=\"mask\"/><Cell col=\"6\" id=\"cell_GENDER\" text=\"expr:comp.parent.parent.parent.fn_gender(GENDER)\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"7\" id=\"cell_MARRIED\" text=\"bind:MARRIED\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/></Band><Band id=\"summary\"><Cell id=\"cell_EMPL_ID\" text=\"\"/><Cell col=\"1\" id=\"cell_FULL_NAME\" text=\"\"/><Cell col=\"2\" id=\"cell_DEPT_CD\" text=\"\"/><Cell col=\"3\" id=\"cell_POS_CD\" text=\"\"/><Cell col=\"4\" id=\"cell_HIRE_DATE\" text=\"\"/><Cell col=\"5\" id=\"cell_SALARY\" text=\"\"/><Cell col=\"6\" id=\"cell_GENDER\" text=\"\"/><Cell col=\"7\" id=\"cell_MARRIED\" text=\"\"/></Band></Format></Formats>");
            this.view_list.addChild(obj.name, obj);

            obj = new View("view_detail",null,"115","390",null,"10","10",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("View03");
            obj.set_viewdataset("viewdataset");
            obj.set_sourceview("view_list");
            this.addChild(obj.name, obj);


            obj = new Dataset("viewdataset", this.view_detail.form);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"POS_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/><Column id=\"MEMO\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row/></Rows>");
            this.view_detail.addChild(obj.name, obj);

            obj = new Static("st_emplId_bg","0","0","390","42",null,null,null,null,null,null,this.view_detail.form);
            obj.set_cssclass("sta_WF_DetailArea");
            this.view_detail.addChild(obj.name, obj);

            obj = new Static("st_emplId_Label","0","0","130","42",null,null,null,null,null,null,this.view_detail.form);
            obj.set_text("Emp ID");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.view_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_emplId","136","6","248","30",null,null,null,null,null,null,this.view_detail.form);
            obj.set_format("AA-###");
            obj.set_type("string");
            this.view_detail.addChild(obj.name, obj);

            obj = new Static("st_fullName_bg","0","41","390","42",null,null,null,null,null,null,this.view_detail.form);
            obj.set_cssclass("sta_WF_DetailArea");
            this.view_detail.addChild(obj.name, obj);

            obj = new Static("st_fullName_Label","0","41","130","42",null,null,null,null,null,null,this.view_detail.form);
            obj.set_text("Name");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.view_detail.addChild(obj.name, obj);

            obj = new Edit("edt_fullName","136","47","248","30",null,null,null,null,null,null,this.view_detail.form);
            this.view_detail.addChild(obj.name, obj);

            obj = new Static("st_deptCd_bg","0","82","390","42",null,null,null,null,null,null,this.view_detail.form);
            obj.set_cssclass("sta_WF_DetailArea");
            this.view_detail.addChild(obj.name, obj);

            obj = new Static("st_deptCd_Label","0","82","130","42",null,null,null,null,null,null,this.view_detail.form);
            obj.set_text("Department");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.view_detail.addChild(obj.name, obj);

            obj = new Combo("cmb_deptCd","136","88","248","30",null,null,null,null,null,null,this.view_detail.form);
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NAME");
            this.view_detail.addChild(obj.name, obj);

            obj = new Static("st_posCd_bg","0","123","390","120",null,null,null,null,null,null,this.view_detail.form);
            obj.set_cssclass("sta_WF_DetailArea");
            this.view_detail.addChild(obj.name, obj);

            obj = new Static("st_posCd_Label","0","123","130","120",null,null,null,null,null,null,this.view_detail.form);
            obj.set_text("Position");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.view_detail.addChild(obj.name, obj);

            obj = new ListBox("lst_posCd","136","129","248","108",null,null,null,null,null,null,this.view_detail.form);
            obj.set_innerdataset("ds_pos");
            obj.set_codecolumn("POS_CD");
            obj.set_datacolumn("POS_NAME");
            this.view_detail.addChild(obj.name, obj);

            obj = new Static("st_hireDate_bg","0","242","390","42",null,null,null,null,null,null,this.view_detail.form);
            obj.set_cssclass("sta_WF_DetailArea");
            this.view_detail.addChild(obj.name, obj);

            obj = new Static("st_hireDate_Label","0","242","130","42",null,null,null,null,null,null,this.view_detail.form);
            obj.set_text("Hire Date");
            obj.set_cssclass("sta_WF_DetailEssential");
            this.view_detail.addChild(obj.name, obj);

            obj = new Calendar("cal_hireDate","136","248","248","30",null,null,null,null,null,null,this.view_detail.form);
            this.view_detail.addChild(obj.name, obj);

            obj = new Static("st_salary_bg","0","283","390","42",null,null,null,null,null,null,this.view_detail.form);
            obj.set_cssclass("sta_WF_DetailArea");
            this.view_detail.addChild(obj.name, obj);

            obj = new Static("st_salary_Label","0","283","130","42",null,null,null,null,null,null,this.view_detail.form);
            obj.set_text("Annual Salary");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.view_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_salary","136","289","248","30",null,null,null,null,null,null,this.view_detail.form);
            obj.set_format("#,###");
            this.view_detail.addChild(obj.name, obj);

            obj = new Static("st_gender_bg","0","324","390","42",null,null,null,null,null,null,this.view_detail.form);
            obj.set_cssclass("sta_WF_DetailArea");
            this.view_detail.addChild(obj.name, obj);

            obj = new Static("st_gender_Label","0","324","130","42",null,null,null,null,null,null,this.view_detail.form);
            obj.set_text("Gender");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.view_detail.addChild(obj.name, obj);

            obj = new Radio("rdo_gender","136","330","248","30",null,null,null,null,null,null,this.view_detail.form);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var view_detail_form_rdo_gender_innerdataset = new nexacro.NormalDataset("view_detail_form_rdo_gender_innerdataset", obj);
            view_detail_form_rdo_gender_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">M</Col><Col id=\"datacolumn\">Male</Col></Row><Row><Col id=\"codecolumn\">W</Col><Col id=\"datacolumn\">Female</Col></Row></Rows>");
            obj.set_innerdataset(view_detail_form_rdo_gender_innerdataset);
            this.view_detail.addChild(obj.name, obj);

            obj = new Static("st_married_bg","0","365","390","42",null,null,null,null,null,null,this.view_detail.form);
            obj.set_cssclass("sta_WF_DetailArea");
            this.view_detail.addChild(obj.name, obj);

            obj = new Static("st_married_Label","0","365","130","42",null,null,null,null,null,null,this.view_detail.form);
            obj.set_text("Married");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.view_detail.addChild(obj.name, obj);

            obj = new CheckBox("chk_married","136","371","248","30",null,null,null,null,null,null,this.view_detail.form);
            this.view_detail.addChild(obj.name, obj);

            obj = new Static("st_memo_bg","0","406","390","160",null,null,null,null,null,null,this.view_detail.form);
            obj.set_cssclass("sta_WF_DetailArea");
            this.view_detail.addChild(obj.name, obj);

            obj = new Static("st_memo_Label","0","406","130","160",null,null,null,null,null,null,this.view_detail.form);
            obj.set_text("Memo");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.view_detail.addChild(obj.name, obj);

            obj = new TextArea("ta_memo","136","412","248","148",null,null,null,null,null,null,this.view_detail.form);
            this.view_detail.addChild(obj.name, obj);

            obj = new Static("st_title","10","8","243","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Employees - QuickCode");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.view_comBtn.form
            obj = new Layout("default","",0,0,this.view_comBtn.form,function(p){});
            this.view_comBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.view_search.form
            obj = new Layout("default","",0,0,this.view_search.form,function(p){});
            this.view_search.form.addLayout(obj.name, obj);

            //-- Default Layout : this.view_list.form
            obj = new Layout("default","",0,0,this.view_list.form,function(p){});
            this.view_list.form.addLayout(obj.name, obj);

            //-- Default Layout : this.view_detail.form
            obj = new Layout("default","",0,0,this.view_detail.form,function(p){});
            this.view_detail.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1000,700,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("bind_edt_deptCd","edt_deptCd","value","viewdataset","DEPT_CD");
            this.view_search.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("bind_edt_deptName","edt_deptName","value","viewdataset","DEPT_NAME");
            this.view_search.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("bind_rdo_gender","rdo_gender","value","viewdataset","GENDER");
            this.view_search.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("bind_msk_emplId","msk_emplId","value","viewdataset","EMPL_ID");
            this.view_detail.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("bind_edt_fullName","edt_fullName","value","viewdataset","FULL_NAME");
            this.view_detail.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("bind_cmb_deptCd","cmb_deptCd","value","viewdataset","DEPT_CD");
            this.view_detail.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("bind_lst_posCd","lst_posCd","value","viewdataset","POS_CD");
            this.view_detail.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("bind_cal_hireDate","cal_hireDate","value","viewdataset","HIRE_DATE");
            this.view_detail.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("bind_msk_salary","msk_salary","value","viewdataset","SALARY");
            this.view_detail.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("bind_rdo_gender","rdo_gender","value","viewdataset","GENDER");
            this.view_detail.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("bind_chk_married","chk_married","value","viewdataset","MARRIED");
            this.view_detail.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("bind_ta_memo","ta_memo","value","viewdataset","MEMO");
            this.view_detail.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information
            this._setTriggerInfo([
            {
                "triggertype":"Form Init",
                "triggerview":"QuickCode_Form_Emp",
                "triggerobj":"QuickCode_Form_Emp",
                "targetaction":"TranAction_Code",
                "condition":""
            },
            {
                "triggertype":"Click",
                "triggerview":"view_search",
                "triggerobj":"btn_deptPopupBtn",
                "targetaction":"PopupAction_Dpet",
                "condition":""
            },
            {
                "triggertype":"Click",
                "triggerview":"view_comBtn",
                "triggerobj":"btn_retrieve",
                "targetaction":"TranAction_Select",
                "condition":""
            },
            {
                "triggertype":"Click",
                "triggerview":"view_comBtn",
                "triggerobj":"btn_save",
                "targetaction":"TranAction_Save",
                "condition":""
            }
            ]);
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("QuickCode_Form_Emp.xfdl", function() {

        this.PopupAction_Dpet_onsuccess = function(obj, e)
        {
        	if(e.userdata.length > 0){
        		var arrRtn = e.userdata.split("|");
        		this.view_search.form.edt_deptCd.set_value(arrRtn[0]);
        		this.view_search.form.edt_deptName.set_value(arrRtn[1]);
        	}
        };

        this.view_comBtn_btn_retrieve_onclick = function(obj,e)
        {
        	this.TranAction_Select.set_serviceurl("EduUrl::select_emp.jsp?sDept="+this.view_search.form.edt_deptCd.value);
        	this.TranAction_Select.run();

        };

        this.view_comBtn_btn_add_onclick = function(obj,e)
        {
        	var nRow = this.view_list.form.viewdataset.addRow();

        };

        this.view_comBtn_btn_delete_onclick = function(obj,e)
        {
        	this.view_list.form.viewdataset.deleteRow(this.view_list.form.viewdataset.rowposition);
        };


        this.view_list_grd_list_onheadclick = function(obj,e)
        {
        	this.cfn_GridSort(obj, e);
        };

        this.view_search_rdo_gender_onitemchanged = function(obj,e)
        {
        	this.fn_setFilter(e.postvalue);
        };

        this.fn_setFilter = function(sValue)
        {
        	if(sValue == "A"){
        		this.view_list.form.viewdataset.filter("");
        	}
        	else{
        		this.view_list.form.viewdataset.filter("GENDER == '" + sValue + "'");
        	}
        }

        this.view_search_btn_resetBtn_onclick = function(obj,e)
        {
        	this.view_search.form.edt_deptCd.set_value("");
        	this.view_search.form.edt_deptName.set_value("");
        	this.view_search.form.rdo_gender.set_value("A");
        	this.fn_setFilter("A");
        };

        //Grid Gender Cell Expr Call
        this.fn_gender = function(sArg)
        {
        	if(sArg == "M"){
        		return "Male";
        	}
        	else{
        		return "Female";
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.view_comBtn.form.btn_retrieve.addEventHandler("onclick",this.view_comBtn_btn_retrieve_onclick,this);
            this.view_comBtn.form.btn_add.addEventHandler("onclick",this.view_comBtn_btn_add_onclick,this);
            this.view_comBtn.form.btn_delete.addEventHandler("onclick",this.view_comBtn_btn_delete_onclick,this);
            this.view_search.form.rdo_gender.addEventHandler("onitemchanged",this.view_search_rdo_gender_onitemchanged,this);
            this.view_search.form.btn_resetBtn.addEventHandler("onclick",this.view_search_btn_resetBtn_onclick,this);
            this.view_list.form.grd_list.addEventHandler("onheadclick",this.view_list_grd_list_onheadclick,this);
            this.PopupAction_Dpet.addEventHandler("onsuccess",this.PopupAction_Dpet_onsuccess,this);
            this.PopupAction_Dpet.addEventHandler("onerror",this.PopupAction_Dpet_onerror,this);
        };
        this.loadIncludeScript("QuickCode_Form_Emp.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
