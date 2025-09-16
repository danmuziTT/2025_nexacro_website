(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QuickCode_Pop_DeptSearch");
            if (Form == this.constructor)
            {
                this._setFormPosition(300,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new TranAction("TranAction_DeptSearch", this);
            obj.set_serviceid("svcDeptCode");
            obj.set_serviceurl("EduUrl::select_dept_code.jsp");
            obj.set_async("true");
            obj.set_outputdatasets("view_dept.form.viewdataset=out_dept");
            obj.set_targetview("QuickCode_Pop_DeptSearch (Form)");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","10","10","193","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Department Search");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);

            obj = new View("view_dept","10","50",null,null,"10","60",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_viewdataset("viewdataset");
            this.addChild(obj.name, obj);


            obj = new Dataset("viewdataset", this.view_dept.form);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"80\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"80\"/></ColumnInfo><Rows><Row/></Rows>");
            this.view_dept.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","0",null,null,"0","0",null,null,null,null,this.view_dept.form);
            obj.set_binddataset("viewdataset");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\" band=\"body\"/><Column size=\"150\" band=\"body\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\" band=\"body\"/><Row size=\"0\" band=\"summ\"/></Rows><Band id=\"head\"><Cell id=\"cell_DEPT_CD\" col=\"0\" row=\"0\" text=\"Dept Code\"/><Cell id=\"cell_DEPT_NAME\" col=\"1\" row=\"0\" text=\"Dept Name\"/></Band><Band id=\"body\"><Cell id=\"cell_DEPT_CD\" col=\"0\" row=\"0\" text=\"bind:DEPT_CD\" displaytype=\"normal\" edittype=\"none\"/><Cell id=\"cell_DEPT_NAME\" col=\"1\" row=\"0\" text=\"bind:DEPT_NAME\" displaytype=\"normal\" edittype=\"none\"/></Band><Band id=\"summary\"><Cell id=\"cell_DEPT_CD\" col=\"0\" row=\"0\" text=\"\"/><Cell id=\"cell_DEPT_NAME\" col=\"1\" row=\"0\" text=\"\"/></Band></Format></Formats>");
            this.view_dept.addChild(obj.name, obj);

            obj = new View("view_btn","10",null,null,"40","10","10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("View00");
            obj.set_viewdataset("viewdataset");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok","56.5","4","80","30",null,null,null,null,null,null,this.view_btn.form);
            obj.set_text("OK");
            obj.set_cssclass("btn_WF_POP_OK");
            this.view_btn.addChild(obj.name, obj);

            obj = new Button("btn_cancel","141.5","4","80","30",null,null,null,null,null,null,this.view_btn.form);
            obj.set_text("Cancel");
            this.view_btn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.view_dept.form
            obj = new Layout("default","",0,0,this.view_dept.form,function(p){});
            this.view_dept.form.addLayout(obj.name, obj);

            //-- Default Layout : this.view_btn.form
            obj = new Layout("default","",0,0,this.view_btn.form,function(p){});
            this.view_btn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",300,400,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information
            this._setTriggerInfo([
            {
                "triggertype":"Form Init",
                "triggerview":"QuickCode_Pop_DeptSearch",
                "triggerobj":"QuickCode_Pop_DeptSearch",
                "targetaction":"TranAction_DeptSearch",
                "condition":""
            }
            ]);
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("QuickCode_Svc_Pop_DeptSearch.xfdl", function() {
        this.view_btn_btn_ok_onclick = function(obj,e)
        {
        	var nRow = this.view_dept.form.viewdataset.rowposition;
        	var sRtn  = this.view_dept.form.viewdataset.getColumn(nRow, "DEPT_CD") + "|";
        	    sRtn += this.view_dept.form.viewdataset.getColumn(nRow, "DEPT_NAME");
        	this.close(sRtn);
        };


        this.view_btn_btn_cancel_onclick = function(obj,e)
        {
        	this.close();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.view_btn.form.btn_ok.addEventHandler("onclick",this.view_btn_btn_ok_onclick,this);
            this.view_btn.form.btn_cancel.addEventHandler("onclick",this.view_btn_btn_cancel_onclick,this);
        };
        this.loadIncludeScript("QuickCode_Svc_Pop_DeptSearch.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
