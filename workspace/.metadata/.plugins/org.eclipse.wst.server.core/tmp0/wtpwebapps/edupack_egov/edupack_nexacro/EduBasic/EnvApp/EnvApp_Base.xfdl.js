(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("EnvApp_Base");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static03","10","40","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text(" Environment Variable");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","169","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text(" Environment Cookies");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","10","40","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text(" Application Variables");
            obj.set_cssclass("sta_WF_TitleType1");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","10","298","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text(" Environment HTTP Header");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","310","60","523","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("var objApp = nexacro.getApplication();\r\nobjApp.gvVariable1;");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_varGet","20","73","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Get");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","310","73","523","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("nexacro.getEnvironmentVariable(\"evVariable1\");");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_var1","110","73","190","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_var2","20","106","190","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_value("Nexacro");
            obj.set_text("Nexacro");
            this.addChild(obj.name, obj);

            obj = new Button("btn_varSet","220","106","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Set");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","310","106","523","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("nexacro.setEnvironmentVariable(\"evVariable1\", \"Nexacro\");");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cookieGet","20","202","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Get");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","310","200","523","28",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("nexacro.getCookieVariable(\"evCookie1\");");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cookie1","110","200","190","28",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cookie2","20","235","190","28",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_value("Nexacro");
            obj.set_text("Nexacro");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cookieSet","220","240","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Set");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","310","240","523","28",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("nexacro.setCookieVariable(\"evCookie1\", \"Nexacro\");");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_httpGet","20","331","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Get");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","310","330","523","28",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("nexacro.getHTTPHeaderVariable(\"evHttpHeader1\");");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_http1","110","330","190","28",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_http2","20","364","190","28",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_value("Nexacro");
            obj.set_text("Nexacro");
            this.addChild(obj.name, obj);

            obj = new Button("btn_httpSet","220","370","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("Set");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","310","370","523","28",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("nexacro.setHTTPHeaderVariable(\"evHttpHeader1\", \"Nexacro\");");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_appVar","20","73","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("Get");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_appVar","110","73","190","28",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_readonly("true");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","10","142","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text(" Application Datasets");
            obj.set_cssclass("sta_WF_TitleType1");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_appDs","20","175","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("Get");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_ds","110","175","260","98",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_positionstep("1");
            obj.set_autofittype("col");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","380","165","523","40",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("var objApp = nexacro.getApplication();\r\nobjApp.gdsDataset;");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","8","427","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text(" Environment Script");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_envScript","20","460","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("Call");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_envScript","110","460","190","28",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","310","452","523","38",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("var objEnv = nexacro.getEnvironment();\r\nobjEnv.envScript();");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","10","316","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text(" Application Script ");
            obj.set_cssclass("sta_WF_TitleType1");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","310","339","523","40",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("var objApp = nexacro.getApplication();\r\nobjApp.appScript();");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_appScript","20","349","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("Call");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_appScript","110","349","190","28",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_readonly("true");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","10","0","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("Environment & Application");
            obj.set_cssclass("sta_WF_TitleMain");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1038,650,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("New Form");

                p.Static03.set_taborder("0");
                p.Static03.set_text(" Environment Variable");
                p.Static03.set_cssclass("sta_WF_TitleType1");
                p.Static03.move("10","40","250","28",null,null);

                p.Static01.set_taborder("1");
                p.Static01.set_text(" Environment Cookies");
                p.Static01.set_cssclass("sta_WF_TitleType1");
                p.Static01.move("10","169","250","28",null,null);

                p.Static04.set_taborder("2");
                p.Static04.set_text(" Application Variables");
                p.Static04.set_cssclass("sta_WF_TitleType1");
                p.Static04.set_positionstep("1");
                p.Static04.move("10","40","250","28",null,null);

                p.Static05.set_taborder("3");
                p.Static05.set_text(" Environment HTTP Header");
                p.Static05.set_cssclass("sta_WF_TitleType1");
                p.Static05.move("10","298","250","28",null,null);

                p.Static08.set_taborder("4");
                p.Static08.set_text("var objApp = nexacro.getApplication();\r\nobjApp.gvVariable1;");
                p.Static08.set_positionstep("1");
                p.Static08.move("310","60","523","40",null,null);

                p.btn_varGet.set_taborder("5");
                p.btn_varGet.set_text("Get");
                p.btn_varGet.move("20","73","80","28",null,null);

                p.Static00.set_taborder("6");
                p.Static00.set_text("nexacro.getEnvironmentVariable(\"evVariable1\");");
                p.Static00.set_positionstep("0");
                p.Static00.move("310","73","523","28",null,null);

                p.edt_var1.set_taborder("7");
                p.edt_var1.set_readonly("true");
                p.edt_var1.move("110","73","190","28",null,null);

                p.edt_var2.set_taborder("8");
                p.edt_var2.set_value("Nexacro");
                p.edt_var2.move("20","106","190","28",null,null);

                p.btn_varSet.set_taborder("9");
                p.btn_varSet.set_text("Set");
                p.btn_varSet.move("220","106","80","28",null,null);

                p.Static17.set_taborder("10");
                p.Static17.set_text("nexacro.setEnvironmentVariable(\"evVariable1\", \"Nexacro\");");
                p.Static17.set_positionstep("0");
                p.Static17.move("310","106","523","28",null,null);

                p.btn_cookieGet.set_taborder("11");
                p.btn_cookieGet.set_text("Get");
                p.btn_cookieGet.move("20","202","80","28",null,null);

                p.Static02.set_taborder("12");
                p.Static02.set_text("nexacro.getCookieVariable(\"evCookie1\");");
                p.Static02.set_positionstep("0");
                p.Static02.move("310","200","523","28",null,null);

                p.edt_cookie1.set_taborder("13");
                p.edt_cookie1.set_readonly("true");
                p.edt_cookie1.move("110","200","190","28",null,null);

                p.edt_cookie2.set_taborder("14");
                p.edt_cookie2.set_value("Nexacro");
                p.edt_cookie2.move("20","235","190","28",null,null);

                p.btn_cookieSet.set_taborder("15");
                p.btn_cookieSet.set_text("Set");
                p.btn_cookieSet.move("220","240","80","28",null,null);

                p.Static18.set_taborder("16");
                p.Static18.set_text("nexacro.setCookieVariable(\"evCookie1\", \"Nexacro\");");
                p.Static18.set_positionstep("0");
                p.Static18.move("310","240","523","28",null,null);

                p.btn_httpGet.set_taborder("17");
                p.btn_httpGet.set_text("Get");
                p.btn_httpGet.move("20","331","80","28",null,null);

                p.Static19.set_taborder("18");
                p.Static19.set_text("nexacro.getHTTPHeaderVariable(\"evHttpHeader1\");");
                p.Static19.set_positionstep("0");
                p.Static19.move("310","330","523","28",null,null);

                p.edt_http1.set_taborder("19");
                p.edt_http1.set_readonly("true");
                p.edt_http1.move("110","330","190","28",null,null);

                p.edt_http2.set_taborder("20");
                p.edt_http2.set_value("Nexacro");
                p.edt_http2.move("20","364","190","28",null,null);

                p.btn_httpSet.set_taborder("21");
                p.btn_httpSet.set_text("Set");
                p.btn_httpSet.move("220","370","80","28",null,null);

                p.Static20.set_taborder("22");
                p.Static20.set_text("nexacro.setHTTPHeaderVariable(\"evHttpHeader1\", \"Nexacro\");");
                p.Static20.set_positionstep("0");
                p.Static20.move("310","370","523","28",null,null);

                p.btn_appVar.set_taborder("23");
                p.btn_appVar.set_text("Get");
                p.btn_appVar.set_positionstep("1");
                p.btn_appVar.move("20","73","80","28",null,null);

                p.edt_appVar.set_taborder("24");
                p.edt_appVar.set_readonly("true");
                p.edt_appVar.set_positionstep("1");
                p.edt_appVar.move("110","73","190","28",null,null);

                p.Static07.set_taborder("25");
                p.Static07.set_text(" Application Datasets");
                p.Static07.set_cssclass("sta_WF_TitleType1");
                p.Static07.set_positionstep("1");
                p.Static07.move("10","142","250","28",null,null);

                p.btn_appDs.set_taborder("26");
                p.btn_appDs.set_text("Get");
                p.btn_appDs.set_positionstep("1");
                p.btn_appDs.move("20","175","80","28",null,null);

                p.grd_ds.set_taborder("27");
                p.grd_ds.set_positionstep("1");
                p.grd_ds.set_autofittype("col");
                p.grd_ds.move("110","175","260","98",null,null);

                p.Static21.set_taborder("28");
                p.Static21.set_text("var objApp = nexacro.getApplication();\r\nobjApp.gdsDataset;");
                p.Static21.set_positionstep("1");
                p.Static21.move("380","165","523","40",null,null);

                p.Static22.set_taborder("29");
                p.Static22.set_text(" Environment Script");
                p.Static22.set_cssclass("sta_WF_TitleType1");
                p.Static22.move("8","427","250","28",null,null);

                p.btn_envScript.set_taborder("30");
                p.btn_envScript.set_text("Call");
                p.btn_envScript.move("20","460","80","28",null,null);

                p.edt_envScript.set_taborder("31");
                p.edt_envScript.set_readonly("true");
                p.edt_envScript.move("110","460","190","28",null,null);

                p.Static23.set_taborder("32");
                p.Static23.set_text("var objEnv = nexacro.getEnvironment();\r\nobjEnv.envScript();");
                p.Static23.set_positionstep("0");
                p.Static23.move("310","452","523","38",null,null);

                p.Static24.set_taborder("33");
                p.Static24.set_text(" Application Script ");
                p.Static24.set_cssclass("sta_WF_TitleType1");
                p.Static24.set_positionstep("1");
                p.Static24.move("10","316","250","28",null,null);

                p.Static25.set_taborder("34");
                p.Static25.set_text("var objApp = nexacro.getApplication();\r\nobjApp.appScript();");
                p.Static25.set_positionstep("1");
                p.Static25.move("310","339","523","40",null,null);

                p.btn_appScript.set_taborder("35");
                p.btn_appScript.set_text("Call");
                p.btn_appScript.set_positionstep("1");
                p.btn_appScript.move("20","349","80","28",null,null);

                p.edt_appScript.set_taborder("36");
                p.edt_appScript.set_readonly("true");
                p.edt_appScript.set_positionstep("1");
                p.edt_appScript.move("110","349","190","28",null,null);

                p.Static00_00_00.set_taborder("37");
                p.Static00_00_00.set_text("Environment & Application");
                p.Static00_00_00.set_cssclass("sta_WF_TitleMain");
                p.Static00_00_00.set_positionstep("-1");
                p.Static00_00_00.move("10","0","250","28",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("2");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","screen_phone",480,768,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.edt_var2.move("20","122","170","24",null,null);

                p.btn_varSet.move("195","122","60","24",null,null);

                p.Static17.move("20","149","417","13",null,null);

                p.Static01.move("10","190","250","24",null,null);

                p.Static05.move("10","340","250","24",null,null);

                p.btn_cookieGet.move("20","214","60","24",null,null);

                p.Static02.move("20","242","278","13",null,null);

                p.edt_cookie2.move("20","272","170","24",null,null);

                p.btn_cookieSet.move("195","272","60","24",null,null);

                p.btn_httpGet.move("20","364","60","24",null,null);

                p.edt_cookie1.move("85","216","170","24",null,null);

                p.Static18.move("21","300","403","13",null,null);

                p.Static19.move("21","391","296","13",null,null);

                p.edt_http1.move("85","364","170","24",null,null);

                p.edt_http2.move("20","422","170","24",null,null);

                p.btn_httpSet.move("195","422","60","24",null,null);

                p.Static20.move("21","451","421","13",null,null);

                p.Static22.move("8","490","250","24",null,null);

                p.btn_envScript.move("20","514","60","24",null,null);

                p.edt_envScript.move("85","514","170","24",null,null);

                p.Static23.move("21","542","253","26",null,null);

                p.Static00.move("20","92","292","13",null,null);

                p.Static08.move("21","92","243","26",null,null);

                p.Static25.move("20","213","243","26",null,null);

                p.Static21.move("21","342","243","26",null,null);

                p.Static07.move("10","288","250","24",null,null);

                p.btn_appDs.move("20","314","60","24",null,null);

                p.grd_ds.move("21","391","270","125",null,null);

                p.Static24.move("10","160","250","24",null,null);

                p.btn_appScript.move("20","186","60","24",null,null);

                p.edt_appScript.move("85","186","170","24",null,null);

                p.btn_varGet.move("20","64","60","24",null,null);

                p.Static04.move("10","40","250","24",null,null);

                p.btn_appVar.move("20","66","60","24",null,null);

                p.edt_appVar.move("85","66","170","24",null,null);
            	}
            );
            obj.set_mobileorientation("portrait");
            obj.set_stepcount("2");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("EnvApp_Base.xfdl", function() {
        /* Environment Variable *******************************************************/
        this.btn_varGet_onclick = function(obj,e)
        {
        	var sRtn = nexacro.getEnvironmentVariable("evVariable1");
        	this.edt_var1.set_value(sRtn);
        };

        this.btn_varSet_onclick = function(obj,e)
        {
        	var sValue = this.edt_var2.value;
        	nexacro.setEnvironmentVariable("evVariable1", sValue);
        };

        /* Environment Cookies *********************************************************/
        this.btn_cookieGet_onclick = function(obj,e)
        {
        	var sRtn = nexacro.getCookieVariable("evCookie1");
        	this.edt_cookie1.set_value(sRtn);
        };

        this.btn_cookieSet_onclick = function(obj,e)
        {
        	var sValue = this.edt_cookie2.value;
        	nexacro.setCookieVariable("evCookie1", sValue);
        };

        /* Environment HTTP Header ****************************************************/
        this.btn_httpGet_onclick = function(obj,e)
        {
        	var sRtn = nexacro.getHTTPHeaderVariable("evHttpHeader1");
        	this.edt_http1.set_value(sRtn);
        };

        this.btn_httpSet_onclick = function(obj,e)
        {
        	var sValue = this.edt_http2.value;
        	nexacro.setHTTPHeaderVariable("evHttpHeader1", sValue);
        };

        /* Environment Script **********************************************************/
        this.btn_envScript_onclick = function(obj,e)
        {
        	var objEnv = nexacro.getEnvironment();
        	var sRtn = objEnv.envScript();
        	this.edt_envScript.set_value(sRtn);
        };

        /* AppVariables **********************************************************/
        this.btn_appVar_onclick = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	this.edt_appVar.set_value(objApp.gvVariable1);
        };

        this.btn_appScript_onclick = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	var sRtn = objApp.appScript();
        	this.edt_appScript.set_value(sRtn);
        };

        this.btn_appDs_onclick = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	this.grd_ds.set_binddataset(objApp.gdsDataset);
        	this.grd_ds.createFormat();

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_varGet.addEventHandler("onclick",this.btn_varGet_onclick,this);
            this.btn_varSet.addEventHandler("onclick",this.btn_varSet_onclick,this);
            this.btn_cookieGet.addEventHandler("onclick",this.btn_cookieGet_onclick,this);
            this.btn_cookieSet.addEventHandler("onclick",this.btn_cookieSet_onclick,this);
            this.btn_httpGet.addEventHandler("onclick",this.btn_httpGet_onclick,this);
            this.btn_httpSet.addEventHandler("onclick",this.btn_httpSet_onclick,this);
            this.btn_appVar.addEventHandler("onclick",this.btn_appVar_onclick,this);
            this.btn_appDs.addEventHandler("onclick",this.btn_appDs_onclick,this);
            this.btn_envScript.addEventHandler("onclick",this.btn_envScript_onclick,this);
            this.btn_appScript.addEventHandler("onclick",this.btn_appScript_onclick,this);
        };
        this.loadIncludeScript("EnvApp_Base.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
