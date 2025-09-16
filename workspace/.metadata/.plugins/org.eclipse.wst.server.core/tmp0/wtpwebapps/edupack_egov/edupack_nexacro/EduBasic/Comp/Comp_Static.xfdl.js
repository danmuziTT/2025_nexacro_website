(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_Static");
            this.set_titletext("Component-Static");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static02","10","146","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text(" Expr (Prop. expr)");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","12","252","292","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text(" Decorate (Prop. usedecorate)");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","40","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text(" Basic Usage");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","20","318","466","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("TOBESOFT <fc v=\'red\'>Nexacro</fc>");
            obj.set_expr("");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_padding("0px 0px 0px 5px");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","20","351","466","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("<ff v=\'Consolas\'>TOBESOFT Nexacro</ff>");
            obj.set_expr("");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_padding("0px 0px 0px 5px");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","20","384","466","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("TOBESOFT<b v=\'true\'>Nexacro</b>");
            obj.set_expr("");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_padding("0px 0px 0px 5px");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","179","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("nexacro platform");
            obj.set_expr("expr:\"Current time : \" + comp.parent.fn_getTime()");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_padding("0px 0px 0px 5px");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","20","285","466","28",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("TOBESOFT<fs v=\'16\'> Nexacro</fs>");
            obj.set_expr("");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_padding("0px 0px 0px 5px");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","20","417","466","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("<i v=\'true\'>TOBESOFT Nexacro </i>");
            obj.set_expr("");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_padding("0px 0px 0px 5px");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","20","450","466","28",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("<u v=\'true\'>TOBESOFT Nexacro</u>");
            obj.set_expr("");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_padding("0px 0px 0px 5px");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","20","73","160","28",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Nexacro");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_padding("0px 0px 0px 5px");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","20","483","466","28",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("<s v=\'true\'>TOBESOFT Nexacro</s>");
            obj.set_expr("");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_padding("0px 0px 0px 5px");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","20","516","466","28",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("<l v=\'http://www.tobesoft.com\'>Page Link</l>");
            obj.set_expr("");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_padding("0px 0px 0px 5px");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","190","73","170","68",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Static Component\r\nNexacro \r\nHello World");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_padding("0px 0px 0px 5px");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","20","549","466","28",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Phone Call <l v=\'tel:010-1234-5678\'> Phone Call </l>");
            obj.set_expr("");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_padding("0px 0px 0px 5px");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","20","582","466","28",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Send Mail <l v=\'mailto:help@tobesoft.com\'> Mail </l>");
            obj.set_expr("");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_padding("0px 0px 0px 5px");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","501","285","204","28",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("TOBESOFT<fs v=\'16\'> Nexacro</fs>");
            obj.set_expr("");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","501","318","204","28",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("TOBESOFT <fc v=\'red\'>Nexacro</fc>");
            obj.set_expr("");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","501","351","204","28",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("<ff v=\'Consolas\'>TOBESOFT Nexacro</ff>");
            obj.set_expr("");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","501","384","204","28",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("TOBESOFT<b v=\'true\'>Nexacro</b>");
            obj.set_expr("");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","501","417","204","28",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("<i v=\'true\'>TOBESOFT Nexacro </i>");
            obj.set_expr("");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","501","450","204","28",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("<u v=\'true\'>TOBESOFT Nexacro</u>");
            obj.set_expr("");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static27","501","483","204","28",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("<s v=\'true\'>TOBESOFT Nexacro</s>");
            obj.set_expr("");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static28","501","516","204","28",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("<l v=\'http://www.tobesoft.com\'>Page Link</l>");
            obj.set_expr("");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static29","501","549","204","28",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("<l v=\'tel:010-1234-5678\'> Phone Call </l>");
            obj.set_expr("");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","501","582","204","28",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("<l v=\'mailto:help@tobesoft.com\'> Send Mail </l>");
            obj.set_expr("");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static99","10","0","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("Static");
            obj.set_cssclass("sta_WF_TitleMain");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1038,650,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Button01","text","gds_dept","DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Comp_Static.xfdl", function() {

        this.fn_getTime = function()
        {
        	var objDate = new Date();
        	var sTime  = objDate.getHours().toString().padLeft(2, "0")   + ":";
        		sTime += objDate.getMinutes().toString().padLeft(2, "0") + ":";
        		sTime += objDate.getSeconds().toString().padLeft(2, "0");

        	return sTime;
        }




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("Comp_Static.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
