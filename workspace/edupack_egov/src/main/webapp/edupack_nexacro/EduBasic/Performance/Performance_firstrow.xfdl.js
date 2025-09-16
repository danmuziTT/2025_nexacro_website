(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("test");
            this.set_titletext("firstrow");
            this.getSetter("classname").set("test");
            this.getSetter("style").set("background:antiquewhite;");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj.set_preload("true");
            obj.getSetter("firenextcount").set("1000");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_progressload("true");
            obj._setContents("<ColumnInfo><Column id=\"col_0\" type=\"STRING\" size=\"256\"/><Column id=\"col_1\" type=\"INT\" size=\"256\"/><Column id=\"col_2\" type=\"FLOAT\" size=\"256\"/><Column id=\"col_3\" type=\"DATE\" size=\"256\"/><Column id=\"col_4\" type=\"TIME\" size=\"256\"/><Column id=\"col_5\" type=\"DATETIME\" size=\"256\"/><Column id=\"col_6\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_log", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"TIME\" type=\"STRING\" size=\"256\"/><Column id=\"MES\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_Separated","1.00%","8.83%","23.00%","4.00%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Separated");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","1.00%","23.33%",null,"29.67%","1.00%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.getSetter("useinputpanel").set("false");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"col_0\"/><Cell col=\"2\" text=\"col_1\"/><Cell col=\"3\" text=\"col_2\"/><Cell col=\"4\" text=\"col_3\"/><Cell col=\"5\" text=\"col_4\"/><Cell col=\"6\" text=\"col_5\"/><Cell col=\"7\" text=\"col_6\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:col_0\"/><Cell col=\"2\" text=\"bind:col_1\"/><Cell col=\"3\" text=\"bind:col_2\"/><Cell col=\"4\" text=\"bind:col_3\"/><Cell col=\"5\" text=\"bind:col_4\"/><Cell col=\"6\" text=\"bind:col_5\"/><Cell col=\"7\" text=\"bind:col_6\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_NonSeparated","26.00%","8.83%","23.00%","4.00%",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("NonSeparated");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","1%","53.5%",null,null,"1%","1%",null,null,null,null,this);
            obj.set_taborder("3");
            obj.getSetter("useinputpanel").set("false");
            obj.set_binddataset("ds_log");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"127\"/><Column size=\"341\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"TIME\"/><Cell col=\"1\" text=\"MES\"/></Band><Band id=\"body\"><Cell text=\"bind:TIME\"/><Cell col=\"1\" text=\"bind:MES\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cls","50.00%","8.83%","23.00%","4.00%",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Clear");
            this.addChild(obj.name, obj);

            obj = new Static("st_first","1.00%","13.83%","23.00%","4.00%",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("First");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_first","26.00%","13.83%","23.00%","4.00%",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_value("20");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Static("st_total","50.00%","13.83%","23.00%","4.00%",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Total");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_total","74.00%","13.83%",null,"4.00%","1.00%",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_value("1000");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Static("st_next","1.00%","18.83%","23.00%","4.00%",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Next");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_next","26.00%","18.83%","23.00%","4.00%",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_value("100");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Static("st_sleep","50.00%","18.83%","23.00%","4.00%",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Sleep");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_sleep","74.00%","18.83%",null,"4.00%","1.00%",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_value("10");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","10","0","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("firstrow");
            obj.set_cssclass("sta_WF_TitleMain");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","Dataset00");
        };
        
        // User Script
        this.registerScript("Performance_firstrow.xfdl", function() {

        this.fn_logout = function(mes){
        	var	idx = this.ds_log.addRow();
        	this.ds_log.setColumn(idx,"MES",mes);
        	var	objDate = new Date

        	var strVal = new String(objDate.getHours());
        	var strTime = strVal.padLeft(2,'0') ;
        	strTime += ':';

        	strVal = new String(objDate.getMinutes());
        	strTime += strVal.padLeft(2,'0') ;
        	strTime += ':';

        	strVal = new String(objDate.getSeconds());
        	strTime += strVal.padLeft(2,'0') ;
        	strTime += '.';

        	strVal = new String(objDate.getMilliseconds());
        	strTime += strVal.padLeft(3,'0') ;

        	this.ds_log.setColumn(idx,"TIME",strTime);
        }


        this.btn_Separated_onclick = function(obj,  e)
        {
        	var	first = this.edt_first.value ;
        	var	next = this.edt_next.value ;
        	var	total = this.edt_total.value ;
        	var	sleep = this.edt_sleep.value ;
        //	this.Dataset00.set_firefirstcount(first);
        //	this.Dataset00.set_firenextcount(next);
        	var strUrl = "http://172.10.11.14:8088/edusys/jspSample/Firstrow.jsp?First="+first+"&Next="+next+"&Count="+total+"&Sleep="+sleep;
        trace(strUrl);
        	var inDs = "";
        	var outDs = "Dataset00=ds_output";
        	this.fn_logout("Separated FirstRow is start.");
        	this.transaction("Separated", strUrl, inDs, outDs, "", "fn_callback", true, 0);
        }

        this.btn_NonSeparated_onclick = function(obj,  e)
        {
        	var	first = this.edt_first.value ;
        	var	next = this.edt_next.value ;
        	var	total = this.edt_total.value ;
        	var	sleep = this.edt_sleep.value ;
        	this.Dataset00.set_firefirstcount(first);
        	this.Dataset00.set_firenextcount(next);
        	var strUrl2 = "EduUrl::Normal.jsp?Count="+total+"&Sleep="+sleep;
        	var inDs2 = "";
        	var outDs2 = "Dataset00=ds_output";
        	this.fn_logout("Non Separated FirstRow is start.");
        	this.transaction("NonSeparated", strUrl2, inDs2, outDs2, "", "fn_callback", true, 0);

        }

        this.fn_callback = function(strSvcID, nErrorCode, strErrorMag)
        {
        //	application.set_usewaitcursor(true);
        	this.fn_logout("ID:"+strSvcID+",Ecode:"+nErrorCode+",Mes:"+strErrorMag);
        	this.fn_logout("total count: " + this.Dataset00.rowcount);
        }


        this.Dataset00_onload = function(obj, e)
        {
        	this.fn_logout("Obj:"+obj.name+",Event:"+e.eventid+",Reason:"+e.reason);
        }


        this.btn_cls_onclick = function(obj,  e)
        {
        	this.ds_log.clearData();
        	this.Dataset00.clearData();
        }


        this.btn_exit_onclick = function(obj,  e)
        {
        	application.exit();
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.test_onload,this);
            this.btn_Separated.addEventHandler("onclick",this.btn_Separated_onclick,this);
            this.btn_NonSeparated.addEventHandler("onclick",this.btn_NonSeparated_onclick,this);
            this.btn_cls.addEventHandler("onclick",this.btn_cls_onclick,this);
            this.Dataset00.addEventHandler("onload",this.Dataset00_onload,this);
            this.Dataset00.addEventHandler("onvaluechanged",this.Dataset00_onvaluechanged,this);
        };
        this.loadIncludeScript("Performance_firstrow.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
