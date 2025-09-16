(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_Button");
            this.set_titletext("Component-Button");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00","10","93","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("버튼 컴포넌트");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","10","60","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("기본 사용");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","284","276","28",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("표현식 (속성 - expr)");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Button("Button06","10","317","248","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Dept Name");
            obj.set_expr("expr:\"Current time : \" + comp.parent.fn_getTime()");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","165","93","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("버튼 비활성화");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","10","166","376","28",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("이미지 & 아이콘 표현 (속성 - icon, background)");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","10","390","306","28",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("버튼 상태 표현 (메소드 - setSelectStatus)");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sun","10","423","40","28",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Sun");
            this.addChild(obj.name, obj);

            obj = new Button("btn_mon","55","423","40","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Mon");
            this.addChild(obj.name, obj);

            obj = new Button("btn_tue","100","423","40","28",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Tue");
            this.addChild(obj.name, obj);

            obj = new Button("btn_wed","145","423","40","28",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Wed");
            this.addChild(obj.name, obj);

            obj = new Button("btn_thu","190","423","40","28",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Thu");
            this.addChild(obj.name, obj);

            obj = new Button("btn_fri","235","423","40","28",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Fri");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sat","280","423","40","28",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Sat");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","10","199","90","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Retrieve");
            obj.set_cssclass("btn_WF_RetrieveIcon");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","105","199","90","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("AddRow");
            obj.set_cssclass("btn_WF_InsertIcon");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","200","199","90","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Delete");
            obj.set_cssclass("btn_WF_DeleteIcon");
            this.addChild(obj.name, obj);

            obj = new Button("Button05","295","199","90","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Save");
            obj.set_cssclass("btn_WF_SaveIcon");
            this.addChild(obj.name, obj);

            obj = new Button("Button07","390","199","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_cssclass("btn_WF_PrintIcon");
            this.addChild(obj.name, obj);

            obj = new Button("Button08","425","199","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_SettingIcon");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","10","0","250","35",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("Button - 버튼 컴포넌트");
            obj.set_cssclass("sta_WF_TitleMain");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1038,650,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Comp_Button.xfdl", function() {
        this.fn_getTime = function()
        {
        	var objDate = new Date();
        	var sTime  = objDate.getHours().toString().padLeft(2, "0")   + ":";
        		sTime += objDate.getMinutes().toString().padLeft(2, "0") + ":";
        		sTime += objDate.getSeconds().toString().padLeft(2, "0");

        	return sTime;
        }

        this.fn_status = function(obj,e)
        {
        	var bStatus = obj.getSelectStatus();
        	if(bStatus){
        		obj.setSelectStatus(false);
        	}
        	else{
        		obj.setSelectStatus(true);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button06.addEventHandler("onclick",this.Button06_onclick,this);
            this.btn_sun.addEventHandler("onclick",this.fn_status,this);
            this.btn_mon.addEventHandler("onclick",this.fn_status,this);
            this.btn_tue.addEventHandler("onclick",this.fn_status,this);
            this.btn_wed.addEventHandler("onclick",this.fn_status,this);
            this.btn_thu.addEventHandler("onclick",this.fn_status,this);
            this.btn_fri.addEventHandler("onclick",this.fn_status,this);
            this.btn_sat.addEventHandler("onclick",this.fn_status,this);
        };
        this.loadIncludeScript("Comp_Button.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
