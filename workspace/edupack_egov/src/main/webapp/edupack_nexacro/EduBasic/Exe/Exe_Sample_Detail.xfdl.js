(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Exe2_Sample_Detail");
            this.set_titletext("Exe2_Sample_Detail");
            this.set_border("1px solid #9c9c9c");
            if (Form == this.constructor)
            {
                this._setFormPosition(450,220);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"CORP_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CODE\">KR10</Col><Col id=\"DEPT_NAME\">Education(KR)</Col><Col id=\"CORP_CODE\">KR</Col></Row><Row><Col id=\"DEPT_CODE\">KR20</Col><Col id=\"DEPT_NAME\">Marketing(KR)</Col><Col id=\"CORP_CODE\">KR</Col></Row><Row><Col id=\"DEPT_CODE\">KR30</Col><Col id=\"DEPT_NAME\">Sales(KR)</Col><Col id=\"CORP_CODE\">KR</Col></Row><Row><Col id=\"DEPT_CODE\">JP10</Col><Col id=\"DEPT_NAME\">Education(JP)</Col><Col id=\"CORP_CODE\">JP</Col></Row><Row><Col id=\"DEPT_CODE\">JP20</Col><Col id=\"DEPT_NAME\">Sales(JP)</Col><Col id=\"CORP_CODE\">JP</Col></Row><Row><Col id=\"DEPT_CODE\">CN10</Col><Col id=\"DEPT_NAME\">Education(CN)</Col><Col id=\"CORP_CODE\">CN</Col></Row><Row><Col id=\"DEPT_CODE\">CN20</Col><Col id=\"DEPT_NAME\">Marketing(CN)</Col><Col id=\"CORP_CODE\">CN</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pop", this);
            obj.set_keystring("a");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pos", this);
            obj._setContents("<ColumnInfo><Column id=\"POS_CODE\" type=\"string\" size=\"32\"/><Column id=\"POS_NAME\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"POS_CODE\">10</Col><Col id=\"POS_NAME\">Manager</Col></Row><Row><Col id=\"POS_CODE\">20</Col><Col id=\"POS_NAME\">Staff</Col></Row><Row><Col id=\"POS_CODE\">30</Col><Col id=\"POS_NAME\">Intern</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new ImageViewer("ImageViewer00","10","10","168","188",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_image("URL(\"imagerc::img_emp20.png\")");
            obj.set_stretch("fixaspectratio");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","195","10","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Name");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","195","50","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Dept");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","195","90","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Position");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","195","130","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Phone No");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","195","170","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("E Mail");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","277","10","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_border("0px none");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_dept","277","50","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPT_CODE");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_buttonsize("0 0");
            obj.set_border("0px none");
            obj.set_readonly("true");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_pos","277","90","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_innerdataset("ds_pos");
            obj.set_codecolumn("POS_CODE");
            obj.set_datacolumn("POS_NAME");
            obj.set_buttonsize("0 0");
            obj.set_border("0px none");
            obj.set_readonly("true");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mail","277","170","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_border("0px none");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_phone","277","130","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_border("0px none");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",450,220,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","ImageViewer00","image","ds_pop","IMG_URL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_name","value","ds_pop","FULL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cmb_dept","value","ds_pop","DEPT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","cmb_pos","value","ds_pop","POS_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edt_mail","value","ds_pop","E_MAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edt_phone","value","ds_pop","PHONE_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Exe_Sample_Detail.xfdl", function() {

        this.Form_onload = function(obj,e)
        {
        	var objDs = this.parent.param1;
            var nRow  = this.parent.parma2;
            this.ds_pop.copyData(objDs);
            this.ds_pop.set_rowposition(nRow);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
        };
        this.loadIncludeScript("Exe_Sample_Detail.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
