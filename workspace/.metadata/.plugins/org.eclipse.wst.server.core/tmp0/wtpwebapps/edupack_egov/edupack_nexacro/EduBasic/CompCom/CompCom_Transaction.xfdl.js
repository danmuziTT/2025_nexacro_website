(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CompCom_Transaction");
            this.set_titletext("CompCom_Transaction");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_emp", this);
            obj.set_keystring("");
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"POS_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/><Column id=\"MEMO\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"EMPL_ID\">AA001</Col><Col id=\"FULL_NAME\">Olivia</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20101003</Col><Col id=\"SALARY\">83000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">ivory</Col></Row><Row><Col id=\"EMPL_ID\">AA002</Col><Col id=\"FULL_NAME\">John</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20051011</Col><Col id=\"SALARY\">76000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">greenyellow</Col></Row><Row><Col id=\"EMPL_ID\">BB001</Col><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"DEPT_CD\">03</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20070206</Col><Col id=\"SALARY\">95000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">aliceblue</Col></Row><Row><Col id=\"EMPL_ID\">BB002</Col><Col id=\"FULL_NAME\">Maia</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20090512</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">ivory</Col></Row><Row><Col id=\"EMPL_ID\">CC001</Col><Col id=\"FULL_NAME\">Adam</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20010109</Col><Col id=\"SALARY\">88000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">greenyellow</Col></Row><Row><Col id=\"EMPL_ID\">DD001</Col><Col id=\"FULL_NAME\">Ray</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20160202</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">lightpink</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_list","10","106",null,null,"10","40",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_emp");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"EMPL_ID\"/><Cell col=\"2\" text=\"FULL_NAME\"/><Cell col=\"3\" text=\"DEPT_CD\"/><Cell col=\"4\" text=\"POS_CD\"/><Cell col=\"5\" text=\"HIRE_DATE\"/><Cell col=\"6\" text=\"SALARY\"/><Cell col=\"7\" text=\"GENDER\"/><Cell col=\"8\" text=\"MARRIED\"/><Cell col=\"9\" text=\"MEMO\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" edittype=\"normal\"/><Cell col=\"1\" text=\"bind:EMPL_ID\" edittype=\"normal\"/><Cell col=\"2\" text=\"bind:FULL_NAME\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:DEPT_CD\" edittype=\"normal\"/><Cell col=\"4\" text=\"bind:POS_CD\" edittype=\"normal\"/><Cell col=\"5\" text=\"bind:HIRE_DATE\" edittype=\"normal\"/><Cell col=\"6\" text=\"bind:SALARY\" edittype=\"normal\"/><Cell col=\"7\" text=\"bind:GENDER\" edittype=\"normal\"/><Cell col=\"8\" text=\"bind:MARRIED\" edittype=\"normal\"/><Cell col=\"9\" text=\"bind:MEMO\" edittype=\"normal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_label","10","40","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Data Type");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_type","16","73","460","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("1");
            obj.set_fittocontents("width");
            var rdo_type_innerdataset = new nexacro.NormalDataset("rdo_type_innerdataset", obj);
            rdo_type_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">XML</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">Binary(only NRE)</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">SSV</Col></Row><Row><Col id=\"datacolumn\">JSON</Col><Col id=\"codecolumn\">3</Col></Row></Rows>");
            obj.set_innerdataset(rdo_type_innerdataset);
            obj.set_text("XML");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"73","94","28","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Save");
            this.addChild(obj.name, obj);

            obj = new Button("btn_retrieve",null,"73","94","28","109",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Retrieve");
            this.addChild(obj.name, obj);

            obj = new Static("sta_label00","10","40","330","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div, Tab 안에 포함된 Dataset 전달");
            obj.set_cssclass("sta_WF_TitleType1");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","10","73","480",null,null,"40",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_positionstep("1");
            obj.set_url("EduBasic::CompCom/CompCom_Transaction_Sub1.xfdl");
            obj.set_cssclass("div_WF_Area");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","510","73",null,null,"10","40",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_tabindex("0");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("Tabpage1");
            obj.set_url("EduBasic::CompCom/CompCom_Transaction_Sub2.xfdl");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("Tabpage2");
            this.Tab00.addChild(obj.name, obj);

            obj = new Button("btn_retrieveSub",null,"40","94","28","109",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Retrieve");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_saveSub",null,"40","94","28","10",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Save");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear",null,"73","94","28","208",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Clear");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clearSub",null,"40","94","28","208",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Clear");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","10","0","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Transaction");
            obj.set_cssclass("sta_WF_TitleMain");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage1
            obj = new Layout("default","",0,0,this.Tab00.Tabpage1.form,function(p){});
            this.Tab00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage2
            obj = new Layout("default","",0,0,this.Tab00.Tabpage2.form,function(p){});
            this.Tab00.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1038,650,this,function(p){});
            obj.set_stepcount("2");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","EduBasic::CompCom/CompCom_Transaction_Sub1.xfdl");
            this._addPreloadList("fdl","EduBasic::CompCom/CompCom_Transaction_Sub2.xfdl");
        };
        
        // User Script
        this.registerScript("CompCom_Transaction.xfdl", function() {

        this.btn_clear_onclick = function(obj,e)
        {
        	this.ds_emp.clearData();
        };

        this.btn_retrieve_onclick = function(obj,e)
        {
        	var sDataType = this.rdo_type.value;	// 0:XML, 1:Binary, 2:SSV, 3:JSON

        	var sUrl = "EduUrl::select_emp.jsp";
        	if(sDataType == "1"){
        		sUrl = "EduUrl::select_emp_bin.jsp";
        	}
        	else if(sDataType == "2"){
        		sUrl = "EduUrl::select_emp_ssv.jsp";
        	}
        	else if(sDataType == "3"){
        		sUrl = "EduUrl::select_emp_json.jsp";
        	}

        	var sSvcId = "svcSelect";
        	var sInDs = "";
        	var sOutDs = "ds_emp=out_emp";
        	var sParam = "";
        	var sCallback = "fn_callback";
        	var bAsync = true;

        	this.transaction(sSvcId, sUrl, sInDs, sOutDs, sParam, sCallback, bAsync, sDataType);
        };


        this.btn_save_onclick = function(obj,e)
        {
        	var sDataType = this.rdo_type.value;	// 0:XML, 1:Binary, 2:SSV, 3:JSON

        	var sUrl = "EduUrl::save_emp.jsp";
        	if(sDataType == "1"){
        		sUrl = "EduUrl::save_emp_bin.jsp";
        	}
        	else if(sDataType == "2"){
        		sUrl = "EduUrl::save_emp_ssv.jsp";
        	}
        	else if(sDataType == "3"){
        		sUrl = "EduUrl::save_emp_json.jsp";
        	}

        	var sSvcId = "svcSave";
        	var sInDs = "in_emp=ds_emp:u";
        	var sOutDs = "";
        	var sParam = "";
        	var sCallback = "fn_callback";
        	var bAsync = true;

        	this.transaction(sSvcId, sUrl, sInDs, sOutDs, sParam, sCallback, bAsync, sDataType);
        };

        this.btn_retrieveSub_onclick = function(obj,e)
        {
        	this.transaction("svcSelectSub"
        					,"EduUrl::select_emp_dept.jsp"
        					,""
        					,"this.Div00.form.ds_sub1=out_emp this.Tab00.Tabpage1.form.ds_sub2=out_dept" //div_list.form.ds_emp
        					,""
        					,"fn_callback");
        };

        this.btn_saveSub_onclick = function(obj,e)
        {
        	this.transaction("svcSaveSub"
        					,"EduUrl::save_emp_dept.jsp"
        					,"in_emp=this.Div00.form.ds_sub1:u in_dept=this.Tab00.Tabpage1.form.ds_sub2:u"
        					,""
        					,""
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
        		this.alert("Save Success");
        	}
        	else if(svcID == "svcSelectSub"){
        		this.alert("Select Success");
        	}
        	else if(svcID == "svcSaveSub"){
        		this.alert("Save Success");
        	}
        }



        this.btn_clearSub_onclick = function(obj,e)
        {
        	this.Div00.form.ds_sub1.clearData();
        	this.Tab00.Tabpage1.form.ds_sub2.clearData();

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.addEventHandler("ontimer",this.Form_Emp_ontimer,this);
            this.grd_list.addEventHandler("onheadclick",this.grd_list_onheadclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_retrieve.addEventHandler("onclick",this.btn_retrieve_onclick,this);
            this.btn_retrieveSub.addEventHandler("onclick",this.btn_retrieveSub_onclick,this);
            this.btn_saveSub.addEventHandler("onclick",this.btn_saveSub_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_clearSub.addEventHandler("onclick",this.btn_clearSub_onclick,this);
            this.ds_emp.addEventHandler("cancolumnchange",this.ds_emp_cancolumnchange,this);
            this.ds_emp.addEventHandler("onrowsetchanged",this.ds_emp_onrowsetchanged,this);
            this.ds_emp.addEventHandler("onrowposchanged",this.ds_emp_onrowposchanged,this);
        };
        this.loadIncludeScript("CompCom_Transaction.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
