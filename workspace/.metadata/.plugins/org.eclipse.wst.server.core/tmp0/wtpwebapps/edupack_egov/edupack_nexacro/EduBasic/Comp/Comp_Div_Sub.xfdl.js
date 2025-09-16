(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_Cont_Div_Sub");
            this.set_titletext("Component-Div Sub");
            if (Form == this.constructor)
            {
                this._setFormPosition(420,390);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_sub", this);
            obj.set_keystring("");
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"FULL_NAME\">Maia</Col><Col id=\"HIRE_DATE\">20101003</Col><Col id=\"SALARY\">83000</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"EMPL_ID\">XX100</Col></Row><Row><Col id=\"FULL_NAME\">Ray</Col><Col id=\"HIRE_DATE\">20051011</Col><Col id=\"SALARY\">76000</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">YY200</Col></Row><Row><Col id=\"FULL_NAME\">Jack</Col><Col id=\"HIRE_DATE\">20070206</Col><Col id=\"SALARY\">95000</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">ZZ300</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","18","306","254","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("this.parent.parent.edt_text.value;");
            this.addChild(obj.name, obj);

            obj = new Button("btn_divBtn","18","339","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Get");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_text","btn_divBtn:10","342","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","10","10",null,"152","11",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_sub");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Name\"/><Cell col=\"1\" text=\"Hire Date\"/><Cell col=\"2\" text=\"Salary\"/></Band><Band id=\"body\"><Cell text=\"bind:FULL_NAME\"/><Cell col=\"1\" text=\"bind:HIRE_DATE\"/><Cell col=\"2\" text=\"bind:SALARY\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","10","167","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Name");
            obj.set_background("");
            obj.set_padding("");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name",null,"167","162","28","166",null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_hireDate",null,"200","162","28","166",null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","200","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Hire Date");
            obj.set_background("");
            obj.set_padding("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","8","273","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Div에서 Form 컴포넌트 접근");
            obj.set_cssclass("sta_WF_TitleType1");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",420,390,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_name","value","ds_sub","FULL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cal_hireDate","value","ds_sub","HIRE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Comp_Div_Sub.xfdl", function() {
        this.btn_divBtn_onclick = function(obj,e)
        {
        	var sRtn = this.parent.parent.edt_text.value;
        	this.edt_text.set_value(sRtn);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_divBtn.addEventHandler("onclick",this.btn_divBtn_onclick,this);
        };
        this.loadIncludeScript("Comp_Div_Sub.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
