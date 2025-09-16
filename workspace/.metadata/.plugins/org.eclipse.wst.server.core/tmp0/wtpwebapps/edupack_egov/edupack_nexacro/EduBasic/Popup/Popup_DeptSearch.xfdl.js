(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Pop_EmpSearch");
            this.set_titletext("부서 조회 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(300,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CD\">01</Col><Col id=\"DEPT_NAME\">Accounting</Col></Row><Row><Col id=\"DEPT_CD\">02</Col><Col id=\"DEPT_NAME\">HR</Col></Row><Row><Col id=\"DEPT_CD\">03</Col><Col id=\"DEPT_NAME\">Sales</Col></Row><Row><Col id=\"DEPT_CD\">04</Col><Col id=\"DEPT_NAME\">Design</Col></Row><Row><Col id=\"DEPT_CD\">05</Col><Col id=\"DEPT_NAME\">Education</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","10","10","193","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Department Search");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","10","50",null,"301","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_dept");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"185\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"Dept Code\"/><Cell col=\"1\" text=\"Dept Name\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_CD\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:DEPT_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok","64",null,"80","30",null,"10",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("OK");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","154",null,"80","30",null,"10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Cancel");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",300,400,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Popup_DeptSearch.xfdl", function() {
        this.Form_onload = function(obj,e)
        {
        	this.fn_deptSearch();
        };


        this.fn_deptSearch = function(obj,e)
        {
        	this.transaction("dept_search"
        				    ,"EduUrl::select_dept_code.jsp"
        					,""
        					,"ds_dept=out_dept"
        					,""
        					,"fn_callback");
        };

        this.fn_callback = function(svcID, errCD, errMSG)
        {
        	if(errCD < 0){
        		this.alert("Error: " + errMSG);
        	}
        }

        this.fn_ok = function()
        {
        	var sRtn =  this.ds_dept.getColumn(this.ds_dept.rowposition, "DEPT_CD") + "|";
        	    sRtn += this.ds_dept.getColumn(this.ds_dept.rowposition, "DEPT_NAME");
        	this.close(sRtn);
        }

        this.fn_cancel = function(obj,e)
        {
        	this.close();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.grd_list.addEventHandler("oncelldblclick",this.fn_ok,this);
            this.btn_ok.addEventHandler("onclick",this.fn_ok,this);
            this.btn_cancel.addEventHandler("onclick",this.fn_cancel,this);
        };
        this.loadIncludeScript("Popup_DeptSearch.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
