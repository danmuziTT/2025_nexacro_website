(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Exe2_Chap3_Div_PopupDiv");
            this.set_titletext("Exe2_Chap3_Div_PopupDiv");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset1", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_NAME\">Education</Col><Col id=\"FULL_NAME\">John </Col><Col id=\"EMPL_ID\">KR101</Col></Row><Row><Col id=\"DEPT_NAME\">Education</Col><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"EMPL_ID\">KR102</Col></Row><Row><Col id=\"DEPT_NAME\">Education</Col><Col id=\"FULL_NAME\">Adam</Col><Col id=\"EMPL_ID\">KR103</Col></Row><Row><Col id=\"DEPT_NAME\">Education</Col><Col id=\"FULL_NAME\">Melon</Col><Col id=\"EMPL_ID\">KR104</Col></Row><Row><Col id=\"DEPT_NAME\">Education</Col><Col id=\"FULL_NAME\">Kate </Col><Col id=\"EMPL_ID\">KR105</Col></Row><Row><Col id=\"DEPT_NAME\">Sales</Col><Col id=\"FULL_NAME\">Bts</Col><Col id=\"EMPL_ID\">KR106</Col></Row><Row><Col id=\"DEPT_NAME\">Sales</Col><Col id=\"FULL_NAME\">Andrew </Col><Col id=\"EMPL_ID\">KR107</Col></Row><Row><Col id=\"DEPT_NAME\">Sales</Col><Col id=\"FULL_NAME\">Belle</Col><Col id=\"EMPL_ID\">KR108</Col></Row><Row><Col id=\"DEPT_NAME\">Sales</Col><Col id=\"FULL_NAME\">Elsa</Col><Col id=\"EMPL_ID\">KR109</Col></Row><Row><Col id=\"DEPT_NAME\">Marketing</Col><Col id=\"FULL_NAME\">Kein </Col><Col id=\"EMPL_ID\">KR110</Col></Row><Row><Col id=\"DEPT_NAME\">Marketing</Col><Col id=\"FULL_NAME\">Ivy</Col><Col id=\"EMPL_ID\">KR111</Col></Row><Row><Col id=\"DEPT_NAME\">Marketing</Col><Col id=\"FULL_NAME\">Kara</Col><Col id=\"EMPL_ID\">KR112</Col></Row><Row><Col id=\"DEPT_NAME\">Marketing</Col><Col id=\"FULL_NAME\">Twice</Col><Col id=\"EMPL_ID\">KR113</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static06","10","10","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Exercise - Div / PopupDiv");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","10","40","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Exe 1 - PopupDiv1");
            obj.set_cssclass("sta_WF_TypeTitle");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv1","590","10","400","250",null,null,null,null,null,null,this);
            obj.set_text("PopupDiv00");
            obj.set_border("1px solid darkgray");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","40","378","161",null,null,null,null,null,null,this.PopupDiv1.form);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset1");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"36\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\"/></Rows><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:DEPT_NAME\"/><Cell col=\"2\" text=\"bind:FULL_NAME\"/><Cell col=\"3\" text=\"bind:EMPL_ID\"/></Band></Format></Formats>");
            this.PopupDiv1.addChild(obj.name, obj);

            obj = new Button("btn_Exe1_Close","10","211","100","30",null,null,null,null,null,null,this.PopupDiv1.form);
            obj.set_taborder("1");
            obj.set_text("Exe1_Close");
            this.PopupDiv1.addChild(obj.name, obj);

            obj = new Static("Static02","10","10","81","30",null,null,null,null,null,null,this.PopupDiv1.form);
            obj.set_taborder("2");
            obj.set_text("Contents");
            this.PopupDiv1.addChild(obj.name, obj);

            obj = new Button("btn_Exe1_1","10","110","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("1_1");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept","80","110","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_displaynulltext("Dept");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","210","110","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_displaynulltext("Name");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_id","320","110","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_displaynulltext("ID");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv2","590","270","400","250",null,null,null,null,null,null,this);
            obj.set_url("Exe2::Exe2_Chap3_Div_PopupDiv_Sub.xfdl");
            obj.set_text("");
            obj.set_border("1px solid darkgray");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe2_1","10","230","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("2_1");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept2","80","230","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_displaynulltext("Dept");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name2","210","230","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_displaynulltext("Name");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_id2","320","230","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_displaynulltext("ID");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","170","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Exe 2 - PopupDiv2");
            obj.set_cssclass("sta_WF_TypeTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","290","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Exe 3 - PopupDiv3");
            obj.set_cssclass("sta_WF_TypeTitle");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_from","10","350","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_positionstep("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_popuptype("none");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_to","183","350","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_positionstep("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_popuptype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","166","350","10","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("~");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv3","15","403","430","280",null,null,null,null,null,null,this);
            obj.getSetter("positionstep").set("0");
            obj.set_border("1px solid #919396");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_from","10","10","200","220",null,null,null,null,null,null,this.PopupDiv3.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_type("monthonly");
            obj.set_value("");
            this.PopupDiv3.addChild(obj.name, obj);

            obj = new Calendar("cal_to","220","10","200","220",null,null,null,null,null,null,this.PopupDiv3.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_type("monthonly");
            this.PopupDiv3.addChild(obj.name, obj);

            obj = new Button("btn_confirm","130","240","80","30",null,null,null,null,null,null,this.PopupDiv3.form);
            obj.set_taborder("3");
            obj.set_text("Confirm");
            obj.getSetter("uWord").set("popup.ok");
            this.PopupDiv3.addChild(obj.name, obj);

            obj = new Button("btn_cancel","220","240","80","30",null,null,null,null,null,null,this.PopupDiv3.form);
            obj.set_taborder("2");
            obj.set_text("Cancel");
            obj.getSetter("uWord").set("popup.cancel");
            this.PopupDiv3.addChild(obj.name, obj);

            obj = new Static("Static03","10","70","406","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Contents로 구성된 PopupDiv1을 버튼 하단에 오픈. ");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","10","200","407","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Linked Form으로 구성된 PopupDiv2을 버튼 하단에 오픈. ");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","10","320","408","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("PopupDiv를 이용하여 기간 달력 기능 구현. ");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.PopupDiv1.form
            obj = new Layout("default","",0,0,this.PopupDiv1.form,function(p){});
            this.PopupDiv1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.PopupDiv2
            obj = new Layout("default","",0,0,this.PopupDiv2.form,function(p){});
            this.PopupDiv2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.PopupDiv3.form
            obj = new Layout("default","",0,0,this.PopupDiv3.form,function(p){});
            this.PopupDiv3.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1000,700,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Exe2::Exe2_Chap3_Div_PopupDiv_Sub.xfdl");
        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.PopupDiv1.form.btn_Exe1_Close.addEventHandler("onclick",this.PopupDiv1_btn_Exe1_Close_onclick,this);
            this.btn_Exe1_1.addEventHandler("onclick",this.btn_Exe1_1_onclick,this);
            this.PopupDiv2.addEventHandler("oncloseup",this.PopupDiv2_oncloseup,this);
            this.btn_Exe2_1.addEventHandler("onclick",this.btn_Exe2_1_onclick,this);
            this.cal_from.addEventHandler("ondropdown",this.cal_from_ondropdown,this);
            this.cal_to.addEventHandler("ondropdown",this.cal_from_ondropdown,this);
            this.PopupDiv3.addEventHandler("oncloseup",this.PopupDiv3_oncloseup,this);
            this.PopupDiv3.form.btn_confirm.addEventHandler("onclick",this.PopupDiv3_btn_confirm_onclick,this);
            this.PopupDiv3.form.btn_cancel.addEventHandler("onclick",this.PopupDiv3_btn_cancel_onclick,this);
        };
        this.loadIncludeScript("Exe_Chap3_Div_PopupDiv.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
