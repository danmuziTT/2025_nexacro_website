(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_Grid_Cell");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_expr", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"WEDD_DAY\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"EMPL_ID\">AA001</Col><Col id=\"WEDD_DAY\">20090512</Col><Col id=\"SALARY\">43030000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"FULL_NAME\">Olivia</Col></Row><Row><Col id=\"EMPL_ID\">AA002</Col><Col id=\"WEDD_DAY\"/><Col id=\"SALARY\">86250000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"FULL_NAME\">John</Col></Row><Row><Col id=\"EMPL_ID\">BB010</Col><Col id=\"WEDD_DAY\"/><Col id=\"SALARY\">50520000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"FULL_NAME\">Dillon</Col></Row><Row><Col id=\"EMPL_ID\">BB020</Col><Col id=\"WEDD_DAY\">20010303</Col><Col id=\"SALARY\">68420000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"FULL_NAME\">Jackson</Col></Row><Row><Col id=\"EMPL_ID\">CC010</Col><Col id=\"WEDD_DAY\">20071205</Col><Col id=\"SALARY\">107390000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"FULL_NAME\">Joseph</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CD\">01</Col><Col id=\"DEPT_NAME\">Accounting Team</Col></Row><Row><Col id=\"DEPT_CD\">02</Col><Col id=\"DEPT_NAME\">HR Team</Col></Row><Row><Col id=\"DEPT_CD\">03</Col><Col id=\"DEPT_NAME\">Sales Team</Col></Row><Row><Col id=\"DEPT_CD\">04</Col><Col id=\"DEPT_NAME\">Design Team</Col></Row><Row><Col id=\"DEPT_CD\">05</Col><Col id=\"DEPT_NAME\">Education Team</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data", this);
            obj.set_keystring("");
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"POS_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/><Column id=\"MEMO\" type=\"STRING\" size=\"10\"/><Column id=\"IMAGE\" type=\"STRING\" size=\"256\"/><Column id=\"PERCENT\" type=\"STRING\" size=\"256\"/><Column id=\"DECORATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"FULL_NAME\">Olivia</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20101003</Col><Col id=\"SALARY\">83000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">ivory</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"EMPL_ID\">AA001</Col><Col id=\"IMAGE\">imagerc::img_na_korea.png</Col><Col id=\"PERCENT\">20</Col><Col id=\"DECORATE\">&lt;fs v=&apos;14&apos;&gt; nexacro&lt;/fs&gt; platform</Col></Row><Row><Col id=\"FULL_NAME\">John</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20051011</Col><Col id=\"SALARY\">76000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">greenyellow</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">AA002</Col><Col id=\"IMAGE\">imagerc::img_na_canada.png</Col><Col id=\"PERCENT\">40</Col><Col id=\"DECORATE\">&lt;fc v=&apos;red&apos;&gt; nexacro&lt;/fc&gt; platform</Col></Row><Row><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20070206</Col><Col id=\"SALARY\">95000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">aliceblue</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">BB001</Col><Col id=\"IMAGE\">imagerc::img_na_usa.png</Col><Col id=\"PERCENT\">70</Col><Col id=\"DECORATE\">&lt;b v=&apos;true&apos;&gt; nexacro&lt;/b&gt; platform </Col></Row><Row><Col id=\"FULL_NAME\">Maia</Col><Col id=\"POS_CD\">01</Col><Col id=\"HIRE_DATE\">20090512</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">ivory</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"EMPL_ID\">BB002</Col><Col id=\"IMAGE\">imagerc::img_na_korea.png</Col><Col id=\"PERCENT\">100</Col><Col id=\"DECORATE\">&lt;u v=&apos;true&apos;&gt; nexacro&lt;/u&gt; platform </Col></Row><Row><Col id=\"FULL_NAME\">Adam</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20010109</Col><Col id=\"SALARY\">88000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">greenyellow</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"EMPL_ID\">CC001</Col><Col id=\"IMAGE\">imagerc::img_na_canada.png</Col><Col id=\"PERCENT\">90</Col><Col id=\"DECORATE\">&lt;s v=&apos;true&apos;&gt; nexacro &lt;/s&gt; platform</Col></Row><Row><Col id=\"FULL_NAME\">Ray</Col><Col id=\"POS_CD\">01</Col><Col id=\"HIRE_DATE\">20160202</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">lightpink</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">CC002</Col><Col id=\"IMAGE\">imagerc::img_na_china.png</Col><Col id=\"PERCENT\">30</Col><Col id=\"DECORATE\">&lt;l v=&apos;tel:010-1234-5678&apos;&gt; Phone Call &lt;/l&gt;</Col></Row><Row><Col id=\"FULL_NAME\">Cameron</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20010303</Col><Col id=\"SALARY\">86000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">aliceblue</Col><Col id=\"DEPT_CD\">03</Col><Col id=\"EMPL_ID\">CC003</Col><Col id=\"IMAGE\">imagerc::img_na_usa.png</Col><Col id=\"PERCENT\">50</Col><Col id=\"DECORATE\">&lt;l v=&apos;mailto:help@tobesoft.com&apos;&gt; Send Mail &lt;/l&gt;</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ICON\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ENABLE\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"TREE_FLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_ID\">10</Col><Col id=\"MENU_NAME\">Application</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">0</Col></Row><Row><Col id=\"MENU_ID\">1010</Col><Col id=\"MENU_NAME\">Environment</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">EnvApp::EnvApp_Base.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">20</Col><Col id=\"MENU_NAME\">Form</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"FORM_URL\"/><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">1</Col></Row><Row><Col id=\"MENU_ID\">2010</Col><Col id=\"MENU_NAME\">Hello</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">Base::Hello.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">2020</Col><Col id=\"MENU_NAME\">Employees</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"FORM_URL\">Form::Form_Emp.xfdl</Col><Col id=\"MENU_KEY\">Ctrl+E</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">2023</Col><Col id=\"MENU_NAME\">Employees(QuickCode)</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">QuickCode::QuickCode_Form_Emp.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">2030</Col><Col id=\"MENU_NAME\">Organization</Col><Col id=\"FORM_URL\">Form::Form_Organization.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">2040</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_NAME\">Popup</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">Form::Form_Popup.xfdl</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">30</Col><Col id=\"MENU_NAME\">Component</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"FORM_URL\"/><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_ICON\"/><Col id=\"MENU_KEY\">Ctrl+B</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">1</Col></Row><Row><Col id=\"MENU_ID\">3010</Col><Col id=\"MENU_NAME\">List</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">Comp::Comp_Base.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_ICON\"/><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">3020</Col><Col id=\"MENU_NAME\">Base</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\"/><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_ICON\"/><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">1</Col></Row><Row><Col id=\"MENU_ID\">3020010</Col><Col id=\"MENU_NAME\">Button</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">Comp::Comp_Button.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_ICON\">imagerc::img_comp_button.png</Col><Col id=\"MENU_KEY\">Ctrl+C</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">3020020</Col><Col id=\"MENU_NAME\">Calendar</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">Comp::Comp_Calendar.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_ICON\">imagerc::img_comp_cal.png</Col><Col id=\"MENU_KEY\">Ctrl+B</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">3020030</Col><Col id=\"MENU_NAME\">CheckBox</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">Comp::Comp_CheckBox.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_ICON\">imagerc::img_comp_check.png</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">3020040</Col><Col id=\"MENU_NAME\">Combo</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">Comp::Comp_Combo.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_ICON\">imagerc::img_comp_combo.png</Col><Col id=\"MENU_KEY\">Ctrl+G</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">3020050</Col><Col id=\"MENU_NAME\">Dataset</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">Comp::Comp_Dataset.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_ICON\"/><Col id=\"MENU_KEY\"/><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">3020060</Col><Col id=\"MENU_NAME\">Div</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">Comp::Comp_div.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_ICON\"/><Col id=\"MENU_FLAG\">1</Col><Col id=\"MENU_KEY\">Alt+E</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">3020070</Col><Col id=\"MENU_NAME\">Edit</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">Comp::Comp_Edit.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_ICON\">imagerc::img_comp_edit.png</Col><Col id=\"MENU_KEY\"/><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">3020080</Col><Col id=\"MENU_NAME\">Grid</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">Comp::Comp_Grid.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_ICON\">imagerc::img_comp_grid.png</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"MENU_KEY\">Alt+G</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">3020090</Col><Col id=\"MENU_NAME\">Grid Cell</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">Comp::Comp_Grid_Cell.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_ICON\"/><Col id=\"MENU_KEY\"/><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">3020100</Col><Col id=\"MENU_NAME\">ImageViewer</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">Comp::Comp_ImageViewer.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_ICON\">imagerc::img_comp_image.png</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"MENU_KEY\">Ctrl+Shift+G</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">3020110</Col><Col id=\"MENU_NAME\">ListBox</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">Comp::Comp_ListBox.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_ICON\">imagerc::img_comp_list.png</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">3020120</Col><Col id=\"MENU_NAME\">ListView</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">Comp::Comp_ListView.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_ICON\"/><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">3020130</Col><Col id=\"MENU_NAME\">MaskEdit</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">Comp::Comp_MaskEdit.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_ICON\">imagerc::img_comp_mask.png</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">3020140</Col><Col id=\"MENU_NAME\">ProgreeBar</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">Comp::Comp_ProgressBar.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_ICON\">imagerc::img_comp_progress.png</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">3020150</Col><Col id=\"MENU_NAME\">Radio</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">Comp::Comp_Radio.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_ICON\">imagerc::img_comp_radio.png</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">3020160</Col><Col id=\"MENU_NAME\">Spin</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">Comp::Comp_Spin.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_ICON\">imagerc::img_comp_spin.png</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">3020170</Col><Col id=\"MENU_NAME\">Static</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">Comp::Comp_Static.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"MENU_ICON\">imagerc::img_comp_static.png</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">3020180</Col><Col id=\"MENU_NAME\">Tab</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">Comp::Comp_tab.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_ICON\"/><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">3020190</Col><Col id=\"MENU_NAME\">TexaArea</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">Comp::Comp_TextArea.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"MENU_ICON\">imagerc::img_comp_txt.png</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">3030</Col><Col id=\"MENU_NAME\">Extend</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\"/><Col id=\"MENU_ENABLE\">0</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">0</Col></Row><Row><Col id=\"MENU_ID\">3030010</Col><Col id=\"MENU_NAME\">File Up/Download</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">CompExt::CompExt_FileUpDown.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">3030015</Col><Col id=\"MENU_NAME\">File Transfer</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">CompExt::CompExt_FileUpDownTransfer.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">3030020</Col><Col id=\"MENU_NAME\">Sketch</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_ENABLE\">0</Col><Col id=\"FORM_URL\">CompExt::CompExt_Sketch.xfdl</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">3030030</Col><Col id=\"MENU_NAME\">WebBrowser</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">CompExt::CompExt_WebBrowser.xfdl</Col><Col id=\"MENU_ENABLE\">0</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">3030040</Col><Col id=\"MENU_NAME\">Data Object</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_ENABLE\">0</Col><Col id=\"FORM_URL\">CompExt::CompExt_DataObject_twoway.xfdl</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">3030050</Col><Col id=\"MENU_NAME\">Excel Object</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_ENABLE\">0</Col><Col id=\"FORM_URL\">CompExt::CompExt_Excel.xfdl</Col><Col id=\"MENU_FLAG\">0</Col><Col id=\"TREE_FLAG\">0</Col></Row><Row><Col id=\"MENU_ID\">40</Col><Col id=\"MENU_NAME\">Common</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">1</Col></Row><Row><Col id=\"MENU_ID\">4010</Col><Col id=\"MENU_NAME\">Bind</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">CompCom::CompCom_Bind.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">4020</Col><Col id=\"MENU_NAME\">Event</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">CompCom::CompCom_Event.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">4030</Col><Col id=\"MENU_NAME\">Position(Arrange)</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">CompCom::CompCom_Arrange.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">4040</Col><Col id=\"MENU_NAME\">Transaction</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"FORM_URL\">CompCom::CompCom_Transaction.xfdl</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">50</Col><Col id=\"MENU_NAME\">Sample</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"FORM_URL\"/><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">1</Col></Row><Row><Col id=\"MENU_ID\">5010</Col><Col id=\"MENU_NAME\">ArrangeFit</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">Smpl::ArrangeFit.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">5020</Col><Col id=\"MENU_NAME\">ArrangeSplit</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">Smpl::ArrangeSplit.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">5030</Col><Col id=\"MENU_NAME\">Grid Sum</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">Smpl::GridSum.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">5040</Col><Col id=\"MENU_NAME\">Grid Tree</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"FORM_URL\">Smpl::GridTree.xfdl</Col><Col id=\"TREE_FLAG\">2</Col></Row><Row><Col id=\"MENU_ID\">5050</Col><Col id=\"MENU_NAME\">Grid Calendar</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">Smpl::GridCalendar.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col><Col id=\"TREE_FLAG\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","10","70",null,"260","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_data");
            obj.set_enable("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"70\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"60\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"text\"/><Cell col=\"1\" text=\"mask\"/><Cell col=\"2\" text=\"decoratetext\"/><Cell col=\"3\" text=\"number\"/><Cell col=\"4\" text=\"currency\"/><Cell col=\"5\" text=\"combotext\"/><Cell col=\"6\" text=\"date\"/><Cell col=\"7\" text=\"checkbox&#13;&#10;control\"/><Cell col=\"8\" text=\"button&#13;&#10;control\"/><Cell col=\"9\" text=\"progressbar&#13;&#10;control\"/><Cell col=\"10\" text=\"image&#13;&#10;control\"/><Cell col=\"11\" text=\"none\"/></Band><Band id=\"body\"><Cell text=\"bind:FULL_NAME\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:EMPL_ID\" maskedittype=\"string\" maskeditformat=\"AA-###\" displaytype=\"mask\"/><Cell col=\"2\" text=\"bind:DECORATE\" displaytype=\"decoratetext\" progressbarsmooth=\"true\"/><Cell col=\"3\" text=\"bind:SALARY\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"4\" text=\"bind:SALARY\" displaytype=\"currency\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:DEPT_CD\" displaytype=\"combotext\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CD\" combodatacol=\"DEPT_NAME\"/><Cell col=\"6\" text=\"bind:HIRE_DATE\" displaytype=\"date\"/><Cell col=\"7\" text=\"bind:MARRIED\" displaytype=\"checkboxcontrol\" checkboxsize=\"18\"/><Cell col=\"8\" text=\"bind:FULL_NAME\" displaytype=\"buttoncontrol\" checkboxsize=\"18\"/><Cell col=\"9\" text=\"bind:PERCENT\" displaytype=\"progressbarcontrol\" progressbarsmooth=\"true\"/><Cell col=\"10\" text=\"bind:IMAGE\" displaytype=\"imagecontrol\" imagestretch=\"fixaspectratio\"/><Cell col=\"11\" text=\"bind:FULL_NAME\" displaytype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","10","388",null,"250","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_data");
            obj.set_enable("true");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"none\"/><Cell col=\"1\" text=\"readonly\"/><Cell col=\"2\" text=\"text\"/><Cell col=\"3\" text=\"textarea\"/><Cell col=\"4\" text=\"mask&#13;&#10;(string)\"/><Cell col=\"5\" text=\"mask&#13;&#10;(number)\"/><Cell col=\"6\" text=\"combo\"/><Cell col=\"7\" text=\"date\"/><Cell col=\"8\" text=\"checkbox\"/><Cell col=\"9\" text=\"button\"/></Band><Band id=\"body\"><Cell text=\"bind:FULL_NAME\"/><Cell col=\"1\" text=\"bind:FULL_NAME\" displaytype=\"normal\" edittype=\"readonly\"/><Cell col=\"2\" text=\"bind:FULL_NAME\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:FULL_NAME\" edittype=\"textarea\"/><Cell col=\"4\" text=\"bind:EMPL_ID\" mask=\"AA-###\" edittype=\"mask\" displaytype=\"mask\" maskeditformat=\"AA-###\" maskedittype=\"string\"/><Cell col=\"5\" text=\"bind:SALARY\" displaytype=\"number\" edittype=\"mask\" mask=\"#,###\" textAlign=\"right\" maskeditformat=\"#,###\"/><Cell col=\"6\" text=\"bind:DEPT_CD\" displaytype=\"combotext\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CD\" combodatacol=\"DEPT_NAME\" edittype=\"combo\"/><Cell col=\"7\" text=\"bind:HIRE_DATE\" displaytype=\"date\" edittype=\"date\"/><Cell col=\"8\" text=\"bind:MARRIED\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxsize=\"18\"/><Cell col=\"9\" text=\"Click\" displaytype=\"buttoncontrol\" edittype=\"button\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_control",null,"40","140","28","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Control Display");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid04","10","70","300","260",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_positionstep("1");
            obj.set_binddataset("dsMenu");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"30\"/></Rows><Band id=\"body\"><Cell text=\"bind:MENU_NAME\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:MENU_LEVEL\" border=\"0px none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02","320","70",null,"260","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_data");
            obj.set_enable("true");
            obj.set_positionstep("1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"107\"/><Column size=\"130\"/><Column size=\"30\"/><Column size=\"50\"/><Column size=\"30\"/><Column size=\"60\"/><Column size=\"71\"/><Column size=\"84\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Empl ID\"/><Cell col=\"1\" text=\"Empl Name\"/><Cell col=\"2\" colspan=\"4\" text=\"Gender\"/><Cell col=\"6\" text=\"Male\"/><Cell col=\"7\" text=\"Female\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPL_ID\" edittype=\"mask\" expandshow=\"show\" expandsize=\"24\" displaytype=\"mask\" maskedittype=\"string\" maskeditformat=\"AA-###\"/><Cell col=\"1\" text=\"bind:FULL_NAME\" edittype=\"text\"/><Cell col=\"2\" colspan=\"4\"><Cell displaytype=\"imagecontrol\" text=\"expr:GENDER == &quot;M&quot; ? &quot;imagerc::img_radio_s.png&quot; : &quot;imagerc::img_radio_n.png&quot;\" imagestretch=\"none\" verticalAlign=\"\" expr=\"\" checkboxsize=\"18\"/><Cell col=\"1\" text=\"Male\"/><Cell col=\"2\" text=\"expr:GENDER == &quot;M&quot; ? &quot;imagerc::img_radio_n.png&quot; : &quot;imagerc::img_radio_s.png&quot;\" displaytype=\"imagecontrol\"/><Cell col=\"3\" text=\"Female\"/></Cell><Cell col=\"6\" text=\"bind:GENDER\" displaytype=\"radioitemcontrol\" edittype=\"radioitem\" radioitemcodevalue=\"M\"/><Cell col=\"7\" text=\"bind:GENDER\" displaytype=\"radioitemcontrol\" edittype=\"radioitem\" radioitemcodevalue=\"W\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid03","10","388",null,"250","10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_expr");
            obj.set_enable("true");
            obj.set_autofittype("col");
            obj.set_positionstep("1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"[ ID ] Name\"/><Cell col=\"2\" colspan=\"2\" text=\"Salary\"/><Cell col=\"4\" rowspan=\"2\" text=\"Gender\"/><Cell col=\"5\" rowspan=\"2\" text=\"Married\"/><Cell col=\"6\" rowspan=\"2\" text=\"Wedding Day\"/><Cell row=\"1\" col=\"2\" text=\"Annual\"/><Cell row=\"1\" col=\"3\" text=\"Monthly\"/></Band><Band id=\"body\"><Cell text=\"expr:(dataset.rowposition == currow ? &quot;☞&quot; : currow+1)\" textAlign=\"center\"/><Cell col=\"1\" text=\"expr:&quot;[ &quot; + EMPL_ID + &quot; ] &quot; +FULL_NAME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:SALARY\" textAlign=\"right\" cssclass=\"expr:SALARY &gt; 60000000 ? &quot;cell_style1&quot; : &quot;&quot;\"/><Cell col=\"3\" text=\"expr:nexacro.round(SALARY/12)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"4\" text=\"expr:comp.parent.fn_gender(GENDER)\"/><Cell col=\"5\" text=\"bind:MARRIED\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxsize=\"16\"/><Cell col=\"6\" text=\"bind:WEDD_DAY\" displaytype=\"date\" edittype=\"expr:(MARRIED == &quot;1&quot; ? &quot;date&quot; : &quot;none&quot;)\" calendardisplaynulltype=\"none\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"expr:&quot;Total Count: &quot; + dataset.getRowCount()\"/><Cell col=\"2\" text=\"expr:comp.parent.ds_expr.getAvg(&quot;SALARY&quot;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"3\" text=\"\" displaytype=\"number\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","10","40","160","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text(" Display Type");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","355","138","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text(" Edit Type");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","40","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text(" Tree / Expand");
            obj.set_cssclass("sta_WF_TitleType1");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","10","355","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text(" Expression");
            obj.set_cssclass("sta_WF_TitleType1");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static99","10","0","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Grid - Cell");
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
        this.registerScript("Comp_Grid_Cell.xfdl", function() {

        this.chk_control_onclick = function(obj,e)
        {
        	if(obj.value){
        		this.Grid00.setCellProperty("body", 5, "displaytype", "combocontrol");
        		this.Grid00.setCellProperty("body", 6, "displaytype", "calendarcontrol");
        	}
        	else{
        		this.Grid00.setCellProperty("body", 5, "displaytype", "combotext");
        		this.Grid00.setCellProperty("body", 6, "displaytype", "date");
        	}
        };

        this.Grid02_onexpandup = function(obj,e)
        {
        	var nLeft = system.clientToScreenX(this, 10);
        	var nTop  = system.clientToScreenY(this, 10);

        	var objChild = new ChildFrame("popEmp", nLeft, nTop, 400, 400);
        	objChild.set_formurl("EduBasic::Popup/Popup_EmpSearch.xfdl");
        	objChild.set_openalign("center middle");
        	objChild.set_dragmovetype("all");

            objChild.showModal(this.getOwnerFrame()
                             , {}
                             , this
                             , "fn_callback_pop");

        };

        this.fn_callback_pop = function(sPopupId, sReturn)
        {
        	if(sReturn == undefined){
        		sReturn = "";
        	}
        	if(sPopupId == "popEmp")
        	{
        		if(sReturn.length > 0){
        			var arrRtn = sReturn.split("|");
        			this.ds_data.setColumn(this.ds_data.rowposition, "EMPL_ID", arrRtn[0]);
        			this.ds_data.setColumn(this.ds_data.rowposition, "FULL_NAME", arrRtn[1]);
        		}
        	}
        }


        this.fn_gender = function(sArg)
        {
        	if(sArg == "M"){
        		return "Male";
        	}
        	else{
        		return "Female";
        	}
        }


        this.Grid02_oncellclick = function(obj,e)
        {
        	if(e.cell == 2){
        		var objDs = obj.getBindDataset();
        		var sValue = objDs.getColumn(e.row, "GENDER");
        		if(e.col == 2 && sValue == "W"){
        			objDs.setColumn(e.row, "GENDER", "M");
        		}
        		else if(e.col == 4 && sValue == "M"){
        			objDs.setColumn(e.row, "GENDER", "W");
        		}
        	}

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.chk_control.addEventHandler("onclick",this.chk_control_onclick,this);
            this.Grid02.addEventHandler("onexpandup",this.Grid02_onexpandup,this);
            this.Grid02.addEventHandler("oncellclick",this.Grid02_oncellclick,this);
            this.Static07.addEventHandler("onclick",this.Static07_onclick,this);
        };
        this.loadIncludeScript("Comp_Grid_Cell.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
