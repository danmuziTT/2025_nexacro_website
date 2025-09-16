(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_MaskEdit");
            this.set_titletext("Component-MaskEdit");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new MaskEdit("MaskEdit12","100","496","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_value("abcd");
            obj.set_type("string");
            obj.set_format("aaaa");
            obj.set_limitbymask("decimal");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","96","73","104","28",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_value("AB123");
            obj.set_type("string");
            obj.set_format("AA-###");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit15","100","595","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_value("ABCD");
            obj.set_type("string");
            obj.set_format("A{AA}A");
            obj.set_limitbymask("decimal");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01","340","73","104","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_value("1200.56");
            obj.set_format("#,###.00");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit14","100","562","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_value("ab12");
            obj.set_type("string");
            obj.set_format("zzzz");
            obj.set_limitbymask("decimal");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit11","100","463","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_value("ABCD");
            obj.set_type("string");
            obj.set_format("AAAA");
            obj.set_limitbymask("decimal");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit10","100","430","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_value("Ab12");
            obj.set_type("string");
            obj.set_format("9999");
            obj.set_limitbymask("decimal");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit09","100","397","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_value("AbCd");
            obj.set_type("string");
            obj.set_format("****");
            obj.set_limitbymask("decimal");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit08","100","364","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_value("1234");
            obj.set_type("string");
            obj.set_format("####");
            obj.set_limitbymask("decimal");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEd1212","20","245","112","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_value("1200.50");
            obj.set_type("number");
            obj.set_format("#,###.00");
            obj.set_limitbymask("decimal");
            obj.set_locale("bg_BG");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEd00","137","245","112","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_value("1200.50");
            obj.set_type("number");
            obj.set_format("#,###.00");
            obj.set_limitbymask("decimal");
            obj.set_locale("ca_ES");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit07","100","331","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_value("Ab3$");
            obj.set_type("string");
            obj.set_format("@@@@");
            obj.set_limitbymask("decimal");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit13","100","529","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_value("AB12");
            obj.set_type("string");
            obj.set_format("ZZZZ");
            obj.set_limitbymask("decimal");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","20","364","70","28",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("####");
            obj.set_cssclass("sta_WF_LabelTxt12");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","20","397","70","28",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("****");
            obj.set_cssclass("sta_WF_LabelTxt12");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","20","430","70","28",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("9999");
            obj.set_cssclass("sta_WF_LabelTxt12");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","20","463","70","28",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("AAAA");
            obj.set_cssclass("sta_WF_LabelTxt12");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","20","496","70","28",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("aaaa");
            obj.set_cssclass("sta_WF_LabelTxt12");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","20","529","70","28",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("ZZZZ");
            obj.set_cssclass("sta_WF_LabelTxt12");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","20","331","70","28",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("@@@@");
            obj.set_cssclass("sta_WF_LabelTxt12");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","20","562","70","28",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("zzzz");
            obj.set_cssclass("sta_WF_LabelTxt12");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","10","40","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text(" Basic Usage");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","73","66","28",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("String");
            obj.set_cssclass("sta_WF_LabelTxt12");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","244","73","86","28",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("Number");
            obj.set_cssclass("sta_WF_LabelTxt12");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","10","298","326","28",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text(" Mask - String Type (Prop. format)");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","20","595","70","28",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("A{AA}A");
            obj.set_cssclass("sta_WF_LabelTxt12");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","210","364","327","28",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("# : Decimal Number(0~9)");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","210","397","327","28",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("* : lower case & upper case");
            this.addChild(obj.name, obj);

            obj = new Static("Static27","210","430","327","28",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("9 : lower case & upper case & decimal number");
            this.addChild(obj.name, obj);

            obj = new Static("Static28","210","463","327","28",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("A : upper case");
            this.addChild(obj.name, obj);

            obj = new Static("Static29","210","496","327","28",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("a : lower case");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","210","529","327","28",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("Z : upper case & decimal number");
            this.addChild(obj.name, obj);

            obj = new Static("Static31","210","562","327","28",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("z : lower case & decimal number");
            this.addChild(obj.name, obj);

            obj = new Static("Static32","210","595","327","28",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("{} : Password -A{AA}A");
            this.addChild(obj.name, obj);

            obj = new Static("Static34","603","298","222","28",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text(" Mask - Number Type");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","10","212","222","28",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text(" Local (Prop. locale)");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Static("Static33","210","331","327","28",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("@ : All ascii Characters");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","10","126","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text(" Password (Prop. format)");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit16","20","159","172","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_value("8203011021121");
            obj.set_type("string");
            obj.set_format("######-{#######}");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit02_00","843","331","122","28",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_value("1200.5");
            obj.set_type("number");
            obj.set_format("#,###.##");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit03_00","843","364","122","28",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_value("1200.5");
            obj.set_type("number");
            obj.set_format("#,###.00");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit05_00","843","430","122","28",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_value("0.0");
            obj.set_type("number");
            obj.set_format("#,##0.0");
            obj.set_limitbymask("none");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit06_00","843","397","122","28",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_value("0.0");
            obj.set_type("number");
            obj.set_format("#,###.#");
            obj.set_limitbymask("decimal");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00","739","397","97","28",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("#,###.#");
            obj.set_cssclass("sta_WF_LabelTxt12");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","739","430","97","28",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("#,##0.0");
            obj.set_cssclass("sta_WF_LabelTxt12");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00","739","364","97","28",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("#,###.00");
            obj.set_cssclass("sta_WF_LabelTxt12");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","739","331","97","28",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("#,###.##");
            obj.set_cssclass("sta_WF_LabelTxt12");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00","613","331","122","28",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("value 1200.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00","613","397","122","28",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("value 0.0");
            this.addChild(obj.name, obj);

            obj = new Static("Static99","10","0","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("MaskEdit");
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("Comp_MaskEdit.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
