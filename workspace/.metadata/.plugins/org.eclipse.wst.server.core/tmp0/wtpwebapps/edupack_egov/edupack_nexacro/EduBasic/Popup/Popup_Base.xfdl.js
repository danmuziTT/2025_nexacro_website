(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Popup_Base");
            this.set_titletext("팝업 기본");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_parent", this);
            obj.set_keystring("");
            obj._setContents("<ColumnInfo><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"FULL_NAME\">Olivia</Col><Col id=\"HIRE_DATE\">20101003</Col><Col id=\"SALARY\">83000</Col><Col id=\"DEPT_CD\">01</Col></Row><Row><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"HIRE_DATE\">20070206</Col><Col id=\"SALARY\">95000</Col><Col id=\"DEPT_CD\">03</Col></Row><Row><Col id=\"FULL_NAME\">Adam</Col><Col id=\"HIRE_DATE\">20010109</Col><Col id=\"SALARY\">88000</Col><Col id=\"DEPT_CD\">01</Col></Row><Row><Col id=\"FULL_NAME\">Ray</Col><Col id=\"HIRE_DATE\">20160202</Col><Col id=\"SALARY\">60000</Col><Col id=\"DEPT_CD\">02</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static03","20","40","147","28",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Parameter");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_param1","157","73","166","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_value("Nexacro");
            obj.set_text("Nexacro");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_param2","157","106","166","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_value("2021");
            obj.set_text("2021");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","73","113","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Param1 - String");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","106","123","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Param2 - Number");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","157","139","480","152",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_parent");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"FULL_NAME\"/><Cell col=\"1\" text=\"DEPT_CD\"/><Cell col=\"2\" text=\"HIRE_DATE\"/><Cell col=\"3\" text=\"SALARY\"/></Band><Band id=\"body\"><Cell text=\"bind:FULL_NAME\" edittype=\"normal\"/><Cell col=\"1\" text=\"bind:DEPT_CD\" edittype=\"normal\"/><Cell col=\"2\" text=\"bind:HIRE_DATE\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:SALARY\" edittype=\"normal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_modal","20","359","168","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Execute(basic)");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20","139","123","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Param3 - Object");
            this.addChild(obj.name, obj);

            obj = new Button("btn_modal2","195","359","168","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Execute(transparent)");
            this.addChild(obj.name, obj);

            obj = new Button("btn_modeless","412","359","168","28",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Execute(basic)");
            this.addChild(obj.name, obj);

            obj = new Button("btn_pdiv","20","481","148","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Execute(basic)");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv00","195","456","455","166",null,null,null,null,null,null,this);
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            obj.set_cssclass("pdiv_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","10","433","113",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_parent");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"80\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"FULL_NAME\"/><Cell col=\"1\" text=\"DEPT_CD\"/><Cell col=\"2\" text=\"HIRE_DATE\"/><Cell col=\"3\" text=\"SALARY\"/></Band><Band id=\"body\"><Cell text=\"bind:FULL_NAME\" edittype=\"normal\"/><Cell col=\"1\" text=\"bind:DEPT_CD\" edittype=\"normal\"/><Cell col=\"2\" text=\"bind:HIRE_DATE\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:SALARY\" edittype=\"normal\"/></Band></Format></Formats>");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Button("btn_close","10","127","114","28",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("1");
            obj.set_text("return String");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Button("btn_close2","134","127","114","28",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("2");
            obj.set_text("return Object");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Static("Static04","20","326","126","28",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Modal");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","412","326","136","28",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Modeless");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","20","448","179","28",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Use PopupDiv");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","10","0","196","28",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Popup");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.PopupDiv00.form
            obj = new Layout("default","",0,0,this.PopupDiv00.form,function(p){});
            this.PopupDiv00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1038,650,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Popup_Base.xfdl", function() {

        this.btn_modal_onclick = function(obj,e)
        {
        	var objChildFrame = new ChildFrame();
        	objChildFrame.init("chf_popup1"
        	                  , 0
        					  , 0
        					  , 500
        					  , 400
        					  , null
        					  , null
        					  , "EduBasic::Popup/Popup_Base_Sub.xfdl");

        	objChildFrame.set_dragmovetype("all");
        	objChildFrame.set_openalign("center middle");
        	objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)")
        	objChildFrame.set_titlebarheight(30);
        	objChildFrame.set_border("1px solid #dbdde7");

        	var objParam = {param1:this.edt_param1.value
        	              , param2:this.edt_param2.value
        				  , param3:this.ds_parent};
        	objChildFrame.showModal(this.getOwnerFrame()
        	                      , objParam
        						  , this
        						  , "fn_popupCallback");
        };

        this.fn_popupCallback = function(strPopupID, strReturn)
        {
        	if(strReturn == undefined){
        		return;
        	}

        	if(strPopupID == "chf_popup1"){
        		this.alert("Return Value: " + strReturn);
        	}
        };

        this.fn_parent = function(pObj)
        {
        	this.ds_parent.copyData(pObj);
        };

        this.btn_modal2_onclick = function(obj,e)
        {
        	var objChildFrame = new ChildFrame();
        	objChildFrame.init("chf_popup2", 0, 0, 600, 400, null, null, "EduBasic::Popup/Popup_Base_Sub2.xfdl");
        	objChildFrame.set_dragmovetype("none");
        	objChildFrame.set_openalign("center middle");
        	objChildFrame.set_showtitlebar(false);
        	objChildFrame.set_background("transparent");
        	objChildFrame.set_overlaycolor("RGBA(38,38,38,0.5)");

        	objChildFrame.showModal(this.getOwnerFrame()
        	                      , {}
        						  , this
        						  , "fn_popupCallback");
        };

        this.btn_modeless_onclick = function(obj,e)
        {
        	var nW = 500;
        	var nH = 400;

        	var objApp = nexacro.getApplication();
        	var nLeft = (objApp.mainframe.width  / 2) - Math.round(nW / 2);
        	var nTop  = (objApp.mainframe.height / 2) - Math.round(nH / 2) ;

        	nLeft = system.clientToScreenX(this, nLeft);
        	nTop  = system.clientToScreenY(this, nTop);

        	var sOpenStyle = "dragmovetype=all"
        //				   + " openalign='center middle'"
        				   + " resizable=true"
        				   + " titletext=Modeless"
        				   + " showtitlebar=true"
        				   + " showstatusbar=false";

        	var objParam = {param1:this.edt_param1.value
        	              , param2:this.edt_param2.value
        				  , param3:this.ds_parent};

        	nexacro.open("chf_popup3"
        			   , "EduBasic::Popup/Popup_Base_Sub.xfdl"
        			   , this.getOwnerFrame()
        			   , objParam
        			   , sOpenStyle
        			   , nLeft
        			   , nTop
        			   , nW
        			   , nH
        			   , this);
        };

        this.btn_pdiv_onclick = function(obj,e)
        {

        	var nX = parseInt(obj.width);
        	var nY = 0; //parseInt(obj.height);
        	this.PopupDiv00.trackPopupByComponent(obj
        	                                    , nX
        										, nY
        										, null
        										, null
        										, "fn_pDivCallback");


        };

        this.fn_pDivCallback = function(objID, rtnValue)
        {
        	if(rtnValue == ""){
        		return;
        	}
        	if(objID == "PopupDiv00")
        	{
        		this.alert("Return Value: " + rtnValue);
        	}
        };

        this.PopupDiv00_btn_close_onclick = function(obj,e)
        {
        	var sName = this.ds_parent.getColumn(this.ds_parent.rowposition, "FULL_NAME");
        	this.PopupDiv00.closePopup(sName);
        };

        this.PopupDiv00_btn_close2_onclick = function(obj,e)
        {
        	this.PopupDiv00.closePopup(this.ds_parent);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_modal.addEventHandler("onclick",this.btn_modal_onclick,this);
            this.btn_modal2.addEventHandler("onclick",this.btn_modal2_onclick,this);
            this.btn_modeless.addEventHandler("onclick",this.btn_modeless_onclick,this);
            this.btn_pdiv.addEventHandler("onclick",this.btn_pdiv_onclick,this);
            this.PopupDiv00.addEventHandler("oncloseup",this.PopupDiv00_oncloseup,this);
            this.PopupDiv00.form.btn_close.addEventHandler("onclick",this.PopupDiv00_btn_close_onclick,this);
            this.PopupDiv00.form.btn_close2.addEventHandler("onclick",this.PopupDiv00_btn_close2_onclick,this);
        };
        this.loadIncludeScript("Popup_Base.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
