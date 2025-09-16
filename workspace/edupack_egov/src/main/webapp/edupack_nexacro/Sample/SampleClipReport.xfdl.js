(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("testClipReport");
            this.set_titletext("Clip Report");
            this.getSetter("classname").set("ClipView");
            if (Form == this.constructor)
            {
                this._setFormPosition(1033,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">01</Col><Col id=\"name\">홍길동</Col><Col id=\"age\">20</Col></Row><Row><Col id=\"id\">02</Col><Col id=\"name\">김길동</Col><Col id=\"age\">20</Col></Row><Row><Col id=\"id\">03</Col><Col id=\"name\">홍길순</Col><Col id=\"age\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new WebBrowser("Webbrowser00","10","85",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_url("http://");
            this.addChild(obj.name, obj);

            obj = new Button("Button01",null,"3","190","28","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("nexacro browser(Runtime)");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","10","0","221","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("ClipReport 연동");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","10","35",null,"40","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("1. ClipReport 연동 샘플");
            obj.set_cssclass("sta_WF_Desc");
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

        };
        
        // User Script
        this.registerScript("SampleClipReport.xfdl", function() {
         this.Button01_onclick = function(obj,  e)
        {
        	this.Webbrowser00.set_url("http://localhost:8017/nexacro/ClipReport4/reportview.jsp");
        }

        this.Webbrowser00_onloadcompleted = function(obj, e)
        {
        	var doc = this.Webbrowser00.getProperty("document");
        	//memo
        	var callType   = doc.callMethod("getElementById", "callType");
        	callType.setProperty("value", "memo");

        	//trace(this.Dataset00.saveXML());

        	var crfName   = doc.callMethod("getElementById", "crfName");
        	crfName.setProperty("value", "nexaMemo");

        	var crfParams = doc.callMethod("getElementById", "crfParams");
        	crfParams.setProperty("value", "DEPARTMENT_ID:100|TEST:한글테스트");

        	var crfDbName = doc.callMethod("getElementById", "crfData");
        	crfDbName.setProperty("value", this.Dataset00.saveXML());

        	if (system.navigatorname == "nexacro")
        	{
        	    doc.callMethod("onload");
        	}
        	else
        	{
        	    this.Webbrowser00.callMethod("onload");
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.ClipView_oninit,this);
            this.Webbrowser00.addEventHandler("onloadcompleted",this.Webbrowser00_onloadcompleted,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };
        this.loadIncludeScript("SampleClipReport.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
