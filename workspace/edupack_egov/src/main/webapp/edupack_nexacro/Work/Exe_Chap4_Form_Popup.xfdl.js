(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Exe2_Chap4_Form_Popup");
            this.set_titletext("Exe2_Chap4_Form_Popup");
            this.set_border("1px solid #9c9c9c");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_child", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static06","10","10","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Exercise - Popup");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","10","40","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Exe3");
            obj.set_cssclass("sta_WF_TypeTitle");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe3_2","10","344","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Exe3_2");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe3_4","100","344","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Exe3_4");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit3_1","10","70","180","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_positionstep("0");
            obj.set_text("nexacro");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit3_2","200","70","190","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_positionstep("0");
            obj.set_text("platform");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid3","10","110","380","226",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("Dataset3");
            obj.set_autofittype("col");
            obj.set_positionstep("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"EMPL_ID\"/><Cell col=\"1\" text=\"FULL_NAME\"/><Cell col=\"2\" text=\"DEPT_CD\"/><Cell col=\"3\" text=\"SALARY\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPL_ID\"/><Cell col=\"1\" text=\"bind:FULL_NAME\"/><Cell col=\"2\" text=\"bind:DEPT_CD\"/><Cell col=\"3\" text=\"bind:SALARY\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del","369","343","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add","344","343","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("+");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",400,400,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Exe_Chap4_Form_Popup.xfdl", function() {

        this.Form_onload = function(obj,e)
        {
        	var sParam1 = this.parent.param1;
        	var sParam2 = this.parent.param2;
        	var objParam = this.parent.param3;

        	this.Edit3_1.set_value(sParam1);
        	this.Edit3_2.set_value(sParam2);

        	this.ds_child.copyData(objParam); //받은 데이터를 데이터셋에 카피함
        	this.Grid3.set_binddataset(this.ds_child); //카피안 데이터셋을 바인딩 할 것
        	this.Grid3.createFormat();
        };


        this.btn_Exe3_2_onclick = function(obj,e)
        {
        	var sRtn = this.Edit3_1.value;
        	sRtn += ":" + this.Edit3_2.value;

        	this.close(sRtn);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.btn_Exe3_2.addEventHandler("onclick",this.btn_Exe3_2_onclick,this);
            this.btn_Exe3_4.addEventHandler("onclick",this.btn_Exe3_4_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
        };
        this.loadIncludeScript("Exe_Chap4_Form_Popup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
