(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Exe2_Sample_Popup");
            this.set_titletext("Sample Emp Popup");
            this.set_border("1px solid #9c9c9c");
            if (Form == this.constructor)
            {
                this._setFormPosition(380,300);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"CORP_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CODE\">KR10</Col><Col id=\"DEPT_NAME\">Education(KR)</Col><Col id=\"CORP_CODE\">KR</Col></Row><Row><Col id=\"DEPT_CODE\">KR20</Col><Col id=\"DEPT_NAME\">Marketing(KR)</Col><Col id=\"CORP_CODE\">KR</Col></Row><Row><Col id=\"DEPT_CODE\">KR30</Col><Col id=\"DEPT_NAME\">Sales(KR)</Col><Col id=\"CORP_CODE\">KR</Col></Row><Row><Col id=\"DEPT_CODE\">JP10</Col><Col id=\"DEPT_NAME\">Education(JP)</Col><Col id=\"CORP_CODE\">JP</Col></Row><Row><Col id=\"DEPT_CODE\">JP20</Col><Col id=\"DEPT_NAME\">Sales(JP)</Col><Col id=\"CORP_CODE\">JP</Col></Row><Row><Col id=\"DEPT_CODE\">CN10</Col><Col id=\"DEPT_NAME\">Education(CN)</Col><Col id=\"CORP_CODE\">CN</Col></Row><Row><Col id=\"DEPT_CODE\">CN20</Col><Col id=\"DEPT_NAME\">Marketing(CN)</Col><Col id=\"CORP_CODE\">CN</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pop", this);
            obj.set_keystring("a");
            obj._setContents("<ColumnInfo><Column id=\"CORP_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"CORP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR10</Col><Col id=\"FULL_NAME\">Melon</Col><Col id=\"EMPL_ID\">AA010</Col><Col id=\"CORP_NAME\">Korea Corp.</Col><Col id=\"DEPT_NAME\">Education(KR)</Col></Row><Row><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR30</Col><Col id=\"FULL_NAME\">Elsa</Col><Col id=\"EMPL_ID\">BB010</Col><Col id=\"CORP_NAME\">Korea Corp.</Col><Col id=\"DEPT_NAME\">Sales(KR)</Col></Row><Row><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR30</Col><Col id=\"FULL_NAME\">Bts</Col><Col id=\"EMPL_ID\">AA110</Col><Col id=\"CORP_NAME\">Korea Corp.</Col><Col id=\"DEPT_NAME\">Sales(KR)</Col></Row><Row><Col id=\"CORP_CODE\">CN</Col><Col id=\"DEPT_CODE\">CN20</Col><Col id=\"FULL_NAME\">Ted </Col><Col id=\"EMPL_ID\">BB201</Col><Col id=\"CORP_NAME\">China Corp.</Col><Col id=\"DEPT_NAME\">Marketing(CN)</Col></Row><Row><Col id=\"CORP_CODE\">JP</Col><Col id=\"DEPT_CODE\">JP10</Col><Col id=\"FULL_NAME\">Diana</Col><Col id=\"EMPL_ID\">CC220</Col><Col id=\"CORP_NAME\">Japen Corp.</Col><Col id=\"DEPT_NAME\">Education(JP)</Col></Row><Row><Col id=\"CORP_CODE\">CN</Col><Col id=\"DEPT_CODE\">CN10</Col><Col id=\"FULL_NAME\">Issac</Col><Col id=\"EMPL_ID\">DD221</Col><Col id=\"CORP_NAME\">China Corp.</Col><Col id=\"DEPT_NAME\">Education(CN)</Col></Row><Row><Col id=\"CORP_CODE\">CN</Col><Col id=\"DEPT_CODE\">CN20</Col><Col id=\"FULL_NAME\">Henry </Col><Col id=\"EMPL_ID\">BB405</Col><Col id=\"CORP_NAME\">China Corp.</Col><Col id=\"DEPT_NAME\">Marketing(CN)</Col></Row><Row><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR10</Col><Col id=\"FULL_NAME\">Kate </Col><Col id=\"EMPL_ID\">BB203</Col><Col id=\"CORP_NAME\">Korea Corp.</Col><Col id=\"DEPT_NAME\">Education(KR)</Col></Row><Row><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR20</Col><Col id=\"FULL_NAME\">Twice</Col><Col id=\"EMPL_ID\">AA560</Col><Col id=\"CORP_NAME\">Korea Corp.</Col><Col id=\"DEPT_NAME\">Marketing(KR)</Col></Row><Row><Col id=\"CORP_CODE\">JP</Col><Col id=\"DEPT_CODE\">JP20</Col><Col id=\"FULL_NAME\">Dennis </Col><Col id=\"EMPL_ID\">AA700</Col><Col id=\"CORP_NAME\">Japen Corp.</Col><Col id=\"DEPT_NAME\">Sales(JP)</Col></Row><Row><Col id=\"CORP_CODE\">CN</Col><Col id=\"DEPT_CODE\">CN10</Col><Col id=\"FULL_NAME\">Max </Col><Col id=\"EMPL_ID\">CC600</Col><Col id=\"CORP_NAME\">China Corp.</Col><Col id=\"DEPT_NAME\">Education(CN)</Col></Row><Row><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR10</Col><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"EMPL_ID\">DD300</Col><Col id=\"CORP_NAME\">Korea Corp.</Col><Col id=\"DEPT_NAME\">Education(KR)</Col></Row><Row><Col id=\"CORP_CODE\">KR</Col><Col id=\"DEPT_CODE\">KR10</Col><Col id=\"FULL_NAME\">Adam</Col><Col id=\"EMPL_ID\">DD200</Col><Col id=\"CORP_NAME\">Korea Corp.</Col><Col id=\"DEPT_NAME\">Education(KR)</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_corp", this);
            obj._setContents("<ColumnInfo><Column id=\"CORP_CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CORP_NAME\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"CORP_CODE\">KR</Col><Col id=\"CORP_NAME\">Korea Corp.</Col></Row><Row><Col id=\"CORP_CODE\">JP</Col><Col id=\"CORP_NAME\">Japen Corp.</Col></Row><Row><Col id=\"CORP_CODE\">CN</Col><Col id=\"CORP_NAME\">China Corp.</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_confirm","106","254","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Confirm");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","196","254","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Cancel");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","50",null,"194","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_pop");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"Name\"/><Cell col=\"1\" text=\"ID\"/><Cell col=\"2\" text=\"Dept\"/></Band><Band id=\"body\"><Cell text=\"bind:FULL_NAME\"/><Cell col=\"1\" text=\"bind:EMPL_ID\"/><Cell col=\"2\" text=\"bind:DEPT_NAME\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CD\" combodatacol=\"DEPT_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_dept","168","10","153","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPT_CODE");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_corp","10","10","153","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_corp");
            obj.set_codecolumn("CORP_CODE");
            obj.set_datacolumn("CORP_NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",380,300,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Exe_Sample_Popup.xfdl", function() {
        this.Form_onload = function(obj,e)
        {
            var sCorp = this.parent.pCorp;
            var sDept = this.parent.pDept;
            trace(sCorp + " : " + sDept);
            this.cmb_corp.set_value(sCorp);
            this.cmb_dept.set_value(sDept);
        };

        this.cmb_dept_onitemchanged = function(obj,e)
        {
            this.ds_pop.filter("DEPT_CODE == '" + e.postvalue + "'");
            this.ds_pop.set_rowposition(0);
        };

        this.btn_confirm_onclick = function(obj,e)
        {
            var sID   = this.ds_pop.getColumn(this.ds_pop.rowposition, "EMPL_ID");
            var sName = this.ds_pop.getColumn(this.ds_pop.rowposition, "FULL_NAME");
            this.close(sID+":"+sName);
        };

        this.btn_cancel_onclick = function(obj,e)
        {
        	this.close("");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.btn_confirm.addEventHandler("onclick",this.btn_confirm_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.cmb_dept.addEventHandler("onitemchanged",this.cmb_dept_onitemchanged,this);
        };
        this.loadIncludeScript("Exe_Sample_Popup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
