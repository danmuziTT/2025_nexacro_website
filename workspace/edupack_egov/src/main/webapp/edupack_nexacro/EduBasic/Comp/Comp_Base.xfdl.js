(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_Base");
            this.set_titletext("Components");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsData", this);
            obj.set_keystring("");
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"POS_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/><Column id=\"MEMO\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"FULL_NAME\">Olivia</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20101003</Col><Col id=\"SALARY\">83490000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"MEMO\">ivory</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"EMPL_ID\">KR180</Col></Row><Row><Col id=\"FULL_NAME\">John</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20051011</Col><Col id=\"SALARY\">76010000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"MEMO\">greenyellow</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">KR190</Col></Row><Row><Col id=\"FULL_NAME\">Dillon</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20150401</Col><Col id=\"SALARY\">62540000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"MEMO\">lightpink</Col><Col id=\"DEPT_CD\">03</Col><Col id=\"EMPL_ID\">JP110</Col></Row><Row><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20070206</Col><Col id=\"SALARY\">99050000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"MEMO\">aliceblue</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">JP390</Col></Row><Row><Col id=\"FULL_NAME\">Joseph</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20070304</Col><Col id=\"SALARY\">61220000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"MEMO\">lightgray</Col><Col id=\"DEPT_CD\">05</Col><Col id=\"EMPL_ID\">CN300</Col></Row><Row><Col id=\"FULL_NAME\">Maia</Col><Col id=\"POS_CD\">01</Col><Col id=\"HIRE_DATE\">20090512</Col><Col id=\"SALARY\">63030000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"MEMO\">ivory</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"EMPL_ID\">KR310</Col></Row><Row><Col id=\"FULL_NAME\">Adam</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20010109</Col><Col id=\"SALARY\">88450000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"MEMO\">greenyellow</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"EMPL_ID\">KR350</Col></Row><Row><Col id=\"FULL_NAME\">Ray</Col><Col id=\"POS_CD\">01</Col><Col id=\"HIRE_DATE\">20160202</Col><Col id=\"SALARY\">67420000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"MEMO\">lightpink</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">CN160</Col></Row><Row><Col id=\"FULL_NAME\">Cameron</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20010303</Col><Col id=\"SALARY\">86250000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"MEMO\">aliceblue</Col><Col id=\"DEPT_CD\">03</Col><Col id=\"EMPL_ID\">KR260</Col></Row><Row><Col id=\"FULL_NAME\">Aladdin</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20161003</Col><Col id=\"SALARY\">67390000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"MEMO\">lightgray</Col><Col id=\"DEPT_CD\">05</Col><Col id=\"EMPL_ID\">JP140</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CD\">01</Col><Col id=\"DEPT_NAME\">Accounting Team</Col></Row><Row><Col id=\"DEPT_CD\">02</Col><Col id=\"DEPT_NAME\">HR Team</Col></Row><Row><Col id=\"DEPT_CD\">03</Col><Col id=\"DEPT_NAME\">Sales Team</Col></Row><Row><Col id=\"DEPT_CD\">04</Col><Col id=\"DEPT_NAME\">Design Team</Col></Row><Row><Col id=\"DEPT_CD\">05</Col><Col id=\"DEPT_NAME\">Education Team</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ICON\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ENABLE\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"TREE_FLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_ID\">10</Col><Col id=\"MENU_NAME\">Application</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">0</Col></Row><Row><Col id=\"MENU_ID\">1010</Col><Col id=\"MENU_NAME\">Environment</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">EnvApp::EnvApp_Base.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">20</Col><Col id=\"MENU_NAME\">Form</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"FORM_URL\"/><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">1</Col></Row><Row><Col id=\"MENU_ID\">2010</Col><Col id=\"MENU_NAME\">Hello</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">Base::Hello.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">2020</Col><Col id=\"MENU_NAME\">Employees</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"FORM_URL\">Form::Form_Emp.xfdl</Col><Col id=\"MENU_KEY\">Ctrl+E</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">2023</Col><Col id=\"MENU_NAME\">Employees(QuickCode)</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">QuickCode::QuickCode_Form_Emp.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">2030</Col><Col id=\"MENU_NAME\">Organization</Col><Col id=\"FORM_URL\">Form::Form_Organization.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">2040</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_NAME\">Popup</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">Form::Form_Popup.xfdl</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">30</Col><Col id=\"MENU_NAME\">Component</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"FORM_URL\"/><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_ICON\"/><Col id=\"MENU_KEY\">Ctrl+B</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">1</Col></Row><Row><Col id=\"MENU_ID\">3010</Col><Col id=\"MENU_NAME\">List</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">Comp::Comp_Base.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_ICON\"/><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">3020</Col><Col id=\"MENU_NAME\">Base</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\"/><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_ICON\"/><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">1</Col></Row><Row><Col id=\"MENU_ID\">3020010</Col><Col id=\"MENU_NAME\">Button</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">Comp::Comp_Button.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_ICON\">imagerc::img_comp_button.png</Col><Col id=\"MENU_KEY\">Ctrl+C</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">3020020</Col><Col id=\"MENU_NAME\">Calendar</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">Comp::Comp_Calendar.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_ICON\">imagerc::img_comp_cal.png</Col><Col id=\"MENU_KEY\">Ctrl+B</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">3020030</Col><Col id=\"MENU_NAME\">CheckBox</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">Comp::Comp_CheckBox.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_ICON\">imagerc::img_comp_check.png</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">3020040</Col><Col id=\"MENU_NAME\">Combo</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">Comp::Comp_Combo.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_ICON\">imagerc::img_comp_combo.png</Col><Col id=\"MENU_KEY\">Ctrl+G</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">3020050</Col><Col id=\"MENU_NAME\">Dataset</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">Comp::Comp_Dataset.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_ICON\"/><Col id=\"MENU_KEY\"/><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">3020060</Col><Col id=\"MENU_NAME\">Div</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">Comp::Comp_div.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_ICON\"/><Col id=\"MENU_FLAG\">1</Col><Col id=\"MENU_KEY\">Alt+E</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">3020070</Col><Col id=\"MENU_NAME\">Edit</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">Comp::Comp_Edit.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_ICON\">imagerc::img_comp_edit.png</Col><Col id=\"MENU_KEY\"/><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">3020080</Col><Col id=\"MENU_NAME\">Grid</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">Comp::Comp_Grid.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_ICON\">imagerc::img_comp_grid.png</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"MENU_KEY\">Alt+G</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">3020090</Col><Col id=\"MENU_NAME\">Grid Cell</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">Comp::Comp_Grid_Cell.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_ICON\"/><Col id=\"MENU_KEY\"/><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">3020100</Col><Col id=\"MENU_NAME\">ImageViewer</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">Comp::Comp_ImageViewer.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_ICON\">imagerc::img_comp_image.png</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"MENU_KEY\">Ctrl+Shift+G</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">3020110</Col><Col id=\"MENU_NAME\">ListBox</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">Comp::Comp_ListBox.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_ICON\">imagerc::img_comp_list.png</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">3020120</Col><Col id=\"MENU_NAME\">ListView</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">Comp::Comp_ListView.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_ICON\"/><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">3020130</Col><Col id=\"MENU_NAME\">MaskEdit</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">Comp::Comp_MaskEdit.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_ICON\">imagerc::img_comp_mask.png</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">3020140</Col><Col id=\"MENU_NAME\">ProgreeBar</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">Comp::Comp_ProgressBar.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_ICON\">imagerc::img_comp_progress.png</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">3020150</Col><Col id=\"MENU_NAME\">Radio</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">Comp::Comp_Radio.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_ICON\">imagerc::img_comp_radio.png</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">3020160</Col><Col id=\"MENU_NAME\">Spin</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">Comp::Comp_Spin.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_ICON\">imagerc::img_comp_spin.png</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">3020170</Col><Col id=\"MENU_NAME\">Static</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">Comp::Comp_Static.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"MENU_ICON\">imagerc::img_comp_static.png</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">3020180</Col><Col id=\"MENU_NAME\">Tab</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">Comp::Comp_tab.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_ICON\"/><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">3020190</Col><Col id=\"MENU_NAME\">TexaArea</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">Comp::Comp_TextArea.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"MENU_ICON\">imagerc::img_comp_txt.png</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">3030</Col><Col id=\"MENU_NAME\">Extend</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\"/><Col id=\"MENU_ENABLE\">0</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">0</Col></Row><Row><Col id=\"MENU_ID\">3030010</Col><Col id=\"MENU_NAME\">File Up/Download</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">CompExt::CompExt_FileUpDown.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">3030015</Col><Col id=\"MENU_NAME\">File Transfer</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">CompExt::CompExt_FileUpDownTransfer.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">3030020</Col><Col id=\"MENU_NAME\">Sketch</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_ENABLE\">0</Col><Col id=\"FORM_URL\">CompExt::CompExt_Sketch.xfdl</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">3030030</Col><Col id=\"MENU_NAME\">WebBrowser</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">CompExt::CompExt_WebBrowser.xfdl</Col><Col id=\"MENU_ENABLE\">0</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">3030040</Col><Col id=\"MENU_NAME\">Data Object</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_ENABLE\">0</Col><Col id=\"FORM_URL\">CompExt::CompExt_DataObject_twoway.xfdl</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">3030050</Col><Col id=\"MENU_NAME\">Excel Object</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_ENABLE\">0</Col><Col id=\"FORM_URL\">CompExt::CompExt_Excel.xfdl</Col><Col id=\"MENU_FLAG\">0</Col><Col id=\"TREE_FLAG\">0</Col></Row><Row><Col id=\"MENU_ID\">40</Col><Col id=\"MENU_NAME\">Common</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">1</Col></Row><Row><Col id=\"MENU_ID\">4010</Col><Col id=\"MENU_NAME\">Bind</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">CompCom::CompCom_Bind.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">4020</Col><Col id=\"MENU_NAME\">Event</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">CompCom::CompCom_Event.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">4030</Col><Col id=\"MENU_NAME\">Position(Arrange)</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">CompCom::CompCom_Arrange.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">4040</Col><Col id=\"MENU_NAME\">Transaction</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"FORM_URL\">CompCom::CompCom_Transaction.xfdl</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">50</Col><Col id=\"MENU_NAME\">Sample</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"FORM_URL\"/><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">1</Col></Row><Row><Col id=\"MENU_ID\">5010</Col><Col id=\"MENU_NAME\">ArrangeFit</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">Smpl::ArrangeFit.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">5020</Col><Col id=\"MENU_NAME\">ArrangeSplit</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">Smpl::ArrangeSplit.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">5030</Col><Col id=\"MENU_NAME\">Grid Sum</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">Smpl::GridSum.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">5040</Col><Col id=\"MENU_NAME\">Grid Tree</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"FORM_URL\">Smpl::GridTree.xfdl</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">5050</Col><Col id=\"MENU_NAME\">Grid Calendar</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">Smpl::GridCalendar.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static33","159","535",null,"50","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static34","159","428",null,"170","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new PopupMenu("PopupMenu00","266","534","116","83",null,null,null,null,null,null,this);
            obj.set_innerdataset("dsMenu");
            obj.set_captioncolumn("MENU_NAME");
            obj.set_idcolumn("MENU_ID");
            obj.set_levelcolumn("MENU_LEVEL");
            obj.set_iconcolumn("MENU_ICON");
            obj.set_hotkeycolumn("MENU_KEY");
            obj.set_enablecolumn("MENU_ENABLE");
            obj.getSetter("positionstep").set("1");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv00","240","439","340","150",null,null,null,null,null,null,this);
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            obj.getSetter("positionstep").set("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","9","52","100","44",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("0");
            obj.set_text("Button");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabelEn");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Static("Static03","104","52","218","44",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Static("Static05","9","95","100","44",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("2");
            obj.set_text("Edit");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabelEn");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Static("Static06","104","95","218","44",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Static("Static11","9","9","100","44",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("4");
            obj.set_text("Static");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabelEn");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Static("Static12","104","9","218","44",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Button("Button00","116","59","130","28",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("6");
            obj.set_text("Search");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Edit("Edit00","116","102","130","28",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("7");
            obj.set_value("Nexacro");
            obj.set_text("Nexacro");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Static("Static25","116","16","186","28",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("8");
            obj.set_text("Nexacro");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Static("Static03","159","89",null,"50","10",null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","159","138",null,"50","10",null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","159","187",null,"50","10",null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","159","236",null,"100","10",null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","159","40",null,"50","10",null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","159","383",null,"50","10",null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","159","432",null,"50","10",null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","159","334",null,"50","10",null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","159","481",null,"50","10",null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","159","530",null,"45","10",null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","0","250","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("넥사크로 기본 컴포넌트");
            obj.set_cssclass("sta_WF_TitleMain");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","170","100","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Save");
            obj.set_cssclass("btn_WF_Main");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","170","148","180","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_value("Nexacro N");
            obj.set_text("Nexacro N");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","170","197","144","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_value("8307011234567");
            obj.set_type("string");
            obj.set_format("######-#######");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01","324","197","116","28",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_value("12345.88");
            obj.set_format("#,###.00");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","170","246","220","78",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_value("Nexacro N\nHello World\nTextArea Component");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","170","51","160","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Nexacro N");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","170","394","180","28",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Check");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin00","170","443","172","28",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_value("17");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","352","345","200","28",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_value("20170101102030000");
            obj.set_dateformat("yyyy-MM-dd HH:mm:ss");
            obj.set_editformat("yyyy-MM-dd HH:mm:ss");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","170","345","172","28",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_value("20170101");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","170","492","172","28",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("");
            obj.set_image("url(\'theme://images/sta_TF_NexacroN.png\')");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar00","169","538","381","28",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("");
            obj.set_min("0");
            obj.set_max("100");
            obj.set_pos("70");
            this.addChild(obj.name, obj);

            obj = new Static("Static28","159","40",null,"50","10",null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static29","159","89",null,"120","10",null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","159","208",null,"70","10",null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static31","159","277",null,"210","10",null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static32","159","486",null,"50","10",null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","170","51","180","28",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_positionstep("1");
            var Combo00_innerdataset = new nexacro.NormalDataset("Combo00_innerdataset", obj);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">Sunday</Col><Col id=\"codecolumn\">SU</Col></Row><Row><Col id=\"datacolumn\">Monday</Col><Col id=\"codecolumn\">MO</Col></Row><Row><Col id=\"datacolumn\">Tuesday</Col><Col id=\"codecolumn\">TU</Col></Row><Row><Col id=\"datacolumn\">Wednesday</Col><Col id=\"codecolumn\">WE</Col></Row><Row><Col id=\"datacolumn\">Thursday</Col><Col id=\"codecolumn\">TH</Col></Row><Row><Col id=\"datacolumn\">Friday</Col><Col id=\"codecolumn\">FR</Col></Row><Row><Col id=\"datacolumn\">Saturday</Col><Col id=\"codecolumn\">SA</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_text("nexacro platform");
            obj.set_value("10");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new ListBox("ListBox00","170","99","180","101",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_positionstep("1");
            var ListBox00_innerdataset = new nexacro.NormalDataset("ListBox00_innerdataset", obj);
            ListBox00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">Sunday</Col><Col id=\"codecolumn\">SU</Col></Row><Row><Col id=\"datacolumn\">Monday</Col><Col id=\"codecolumn\">MO</Col></Row><Row><Col id=\"datacolumn\">Tuesday</Col><Col id=\"codecolumn\">TU</Col></Row><Row><Col id=\"datacolumn\">Wednesday</Col><Col id=\"codecolumn\">WE</Col></Row><Row><Col id=\"datacolumn\">Thursday</Col><Col id=\"codecolumn\">TH</Col></Row><Row><Col id=\"datacolumn\">Friday</Col><Col id=\"codecolumn\">FR</Col></Row><Row><Col id=\"datacolumn\">Saturday</Col><Col id=\"codecolumn\">SA</Col></Row></Rows>");
            obj.set_innerdataset(ListBox00_innerdataset);
            obj.set_value("TU");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","170","221","472","44",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("4");
            obj.set_positionstep("1");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">Sunday</Col><Col id=\"codecolumn\">SU</Col></Row><Row><Col id=\"datacolumn\">Monday</Col><Col id=\"codecolumn\">MO</Col></Row><Row><Col id=\"datacolumn\">Tuesday</Col><Col id=\"codecolumn\">TU</Col></Row><Row><Col id=\"datacolumn\">Wednesday</Col><Col id=\"codecolumn\">WE</Col></Row><Row><Col id=\"datacolumn\">Thursday</Col><Col id=\"codecolumn\">TH</Col></Row><Row><Col id=\"datacolumn\">Friday</Col><Col id=\"codecolumn\">FR</Col></Row><Row><Col id=\"datacolumn\">Saturday</Col><Col id=\"codecolumn\">SA</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_value("FR");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","170","283","491","199",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_binddataset("dsData");
            obj.set_autosizingtype("");
            obj.set_autofittype("col");
            obj.set_fillareatype("linerow");
            obj.set_positionstep("1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"123\"/><Column size=\"150\"/><Column size=\"128\"/><Column size=\"73\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"성명\"/><Cell col=\"1\" text=\"입사일자\"/><Cell col=\"2\" text=\"급여\"/><Cell col=\"3\" text=\"결혼여부\"/></Band><Band id=\"body\"><Cell text=\"bind:FULL_NAME\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:HIRE_DATE\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:SALARY\" textAlign=\"right\"/><Cell col=\"3\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:MARRIED\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Menu("Menu00","170","497","603","28",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_innerdataset("dsMenu");
            obj.set_captioncolumn("MENU_NAME");
            obj.set_idcolumn("MENU_ID");
            obj.set_levelcolumn("MENU_LEVEL");
            obj.set_enablecolumn("MENU_ENABLE");
            obj.set_hotkeycolumn("MENU_KEY");
            obj.set_iconcolumn("MENU_ICON");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_popMenu","170","546","90","28",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("Click");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","360","51","180","28",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_innerdataset("dsDept");
            obj.set_positionstep("1");
            obj.set_text("nexacro platform");
            obj.set_value("01");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new ListBox("ListBox01","360","99","180","101",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_innerdataset("dsDept");
            obj.set_positionstep("1");
            obj.set_text("HR Team");
            obj.set_value("02");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static35","159","209",null,"220","10",null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static36","159","40",null,"170","10",null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","170","50","390","150",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("Div00");
            obj.set_positionstep("2");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","9","92","110","44",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("Button");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabelEn");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","114","92","248","44",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static11","9","49","110","44",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("Static");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabelEn");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static12","114","49","248","44",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","126","100","130","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("Search");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static25","126","57","186","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("Nexacro");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","10","0","250","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("Contents - Div에 컴포넌트 생성");
            obj.set_cssclass("sta_WF_TitleSub");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","580","50",null,"150","30",null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("Div00");
            obj.set_url("EduBasic::Comp/Comp_Base_Sub.xfdl");
            obj.set_positionstep("2");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","170","220","390","196",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_tabindex("0");
            obj.set_positionstep("2");
            obj.set_cssclass("tab_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("Tabpage1");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static04","9","92","110","44",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("Button");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabelEn");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static03","114","92","248","44",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static11","9","49","110","44",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("Static");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabelEn");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12","114","49","248","44",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button00","126","100","130","28",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("Search");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static25","126","57","186","28",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("Nexacro");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static00","10","0","250","28",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("Contents - Tabpage에 컴포넌트 생성");
            obj.set_cssclass("sta_WF_TitleSub");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("Tabpage2");
            this.Tab00.addChild(obj.name, obj);

            obj = new Button("btn_popDiv","168","438","68","28",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("Click");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab01","580","220",null,"196","30",null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_tabindex("0");
            obj.set_positionstep("2");
            obj.set_cssclass("tab_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab01);
            obj.set_text("Tabpage1");
            obj.set_url("EduBasic::Comp/Comp_Base_Sub.xfdl");
            this.Tab01.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab01);
            obj.set_text("Tabpage2");
            this.Tab01.addChild(obj.name, obj);

            obj = new Static("sta00","10","40","150","50",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_text("Static");
            obj.set_cssclass("sta_WF_DetailLabelEn");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00","10","89","150","50",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_text("Button");
            obj.set_cssclass("sta_WF_DetailLabelEn");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01","10","138","150","50",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_text("Edit");
            obj.set_cssclass("sta_WF_DetailLabelEn");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_02","10","187","150","50",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_text("MaskEdit");
            obj.set_cssclass("sta_WF_DetailLabelEn");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_03","10","236","150","100",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_text("TextArea");
            obj.set_cssclass("sta_WF_DetailLabelEn");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_04","10","334","150","50",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_text("Calendar");
            obj.set_cssclass("sta_WF_DetailLabelEn");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_05","10","383","150","50",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_text("CheckBox");
            obj.set_cssclass("sta_WF_DetailLabelEn");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_06","10","432","150","50",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_text("Spin");
            obj.set_cssclass("sta_WF_DetailLabelEn");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_07","10","481","150","50",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_text("ImageViewer");
            obj.set_cssclass("sta_WF_DetailLabelEn");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_07_00","10","530","150","45",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_text("ProgressBar");
            obj.set_cssclass("sta_WF_DetailLabelEn");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","10","40","150","50",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("Combo");
            obj.set_positionstep("1");
            obj.set_cssclass("sta_WF_DetailLabelEn");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00","10","486","150","50",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("Menu");
            obj.set_positionstep("1");
            obj.set_cssclass("sta_WF_DetailLabelEn");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_01","10","535","150","50",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("PopupMenu");
            obj.set_positionstep("1");
            obj.set_cssclass("sta_WF_DetailLabelEn");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_02","10","40","150","170",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("Div");
            obj.set_positionstep("2");
            obj.set_cssclass("sta_WF_DetailLabelEn");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_03","10","209","150","220",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("Tab");
            obj.set_positionstep("2");
            obj.set_cssclass("sta_WF_DetailLabelEn");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_04","10","428","150","170",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("PopupDiv");
            obj.set_positionstep("2");
            obj.set_cssclass("sta_WF_DetailLabelEn");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_05","10","89","150","120",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("ListBox");
            obj.set_positionstep("1");
            obj.set_cssclass("sta_WF_DetailLabelEn");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_06","10","208","150","70",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("Radio");
            obj.set_positionstep("1");
            obj.set_cssclass("sta_WF_DetailLabelEn");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_07","10","277","150","210",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_text("Grid");
            obj.set_positionstep("1");
            obj.set_cssclass("sta_WF_DetailLabelEn");
            this.addChild(obj.name, obj);

            obj = new Static("Static25_00","320","51","160","28",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("<fs v=\"14\">NEXACRO</fs> <fc v=\"red\">Studio</fc>");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.PopupDiv00.form
            obj = new Layout("default","",0,0,this.PopupDiv00.form,function(p){});
            this.PopupDiv00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage1.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage1.form,function(p){});
            this.Tab00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage2
            obj = new Layout("default","",0,0,this.Tab00.Tabpage2.form,function(p){});
            this.Tab00.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab01.Tabpage1
            obj = new Layout("default","",0,0,this.Tab01.Tabpage1.form,function(p){});
            this.Tab01.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab01.Tabpage2
            obj = new Layout("default","",0,0,this.Tab01.Tabpage2.form,function(p){});
            this.Tab01.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1038,650,this,function(p){});
            obj.set_stepcount("3");
            obj.set_stepindex("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","EduBasic::Comp/Comp_Base_Sub.xfdl");
        };
        
        // User Script
        this.registerScript("Comp_Base.xfdl", function() {

        this.btn_popMenu_onclick = function(obj,e)
        {
        	var nX = parseInt(obj.width);
        	var nY = 0;
        	this.PopupMenu00.trackPopupByComponent(obj, nX, nY);
        };

        this.btn_popDiv_onclick = function(obj,e)
        {
        	var nX = parseInt(obj.width);
        	var nY = 0;
        	this.PopupDiv00.trackPopupByComponent(obj, nX, nY, 340, 150);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Menu00.addEventHandler("onmenuclick",this.Menu00_onmenuclick,this);
            this.btn_popMenu.addEventHandler("onclick",this.btn_popMenu_onclick,this);
            this.btn_popDiv.addEventHandler("onclick",this.btn_popDiv_onclick,this);
        };
        this.loadIncludeScript("Comp_Base.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
