(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Exe_Form");
            this.set_titletext("Exe_Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset1", this);
            obj.set_keystring("");
            obj._setContents("<ColumnInfo><Column id=\"Count\" type=\"INT\" size=\"256\"/><Column id=\"Price\" type=\"INT\" size=\"256\"/><Column id=\"Amt\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Count\">100</Col><Col id=\"Price\">2000</Col><Col id=\"Amt\">200000</Col></Row><Row><Col id=\"Count\">200</Col><Col id=\"Price\">3000</Col><Col id=\"Amt\">600000</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static06","10","8","250","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Expr->Dataset Bind");
            obj.set_cssclass("sta_WF_TitleMain");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","60","272","279",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"Count\"/><Cell col=\"1\" text=\"Price\"/><Cell col=\"2\" text=\"Amt\"/></Band><Band id=\"body\"><Cell text=\"bind:Count\" edittype=\"mask\" maskeditformat=\"#,###\" displaytype=\"number\" color=\"black\"/><Cell col=\"1\" text=\"bind:Price\" edittype=\"mask\" maskeditformat=\"#,###\" displaytype=\"number\" color=\"black\"/><Cell col=\"2\" text=\"expr:Count * Price\" displaytype=\"number\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","419","60","272","279",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("Dataset1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"Count\"/><Cell col=\"1\" text=\"Price\"/><Cell col=\"2\" text=\"Amt\"/></Band><Band id=\"body\"><Cell text=\"bind:Count\" edittype=\"normal\" color=\"black\"/><Cell col=\"1\" text=\"bind:Price\" edittype=\"normal\" color=\"black\"/><Cell col=\"2\" text=\"bind:Amt\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","296","149","108","31",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("추가");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,700,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Performance_expr_datasetbind.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.Dataset1.addRow();
        };

        this.Dataset1_onvaluechanged = function(obj,e)
        {
        	if(e.columnid == "Count")
        	{
        		this.Dataset1.set_enableevent(false);
        		this.Dataset1.setColumn(e.row,"Amt", this.Dataset1.getColumn(e.row,"Price") * e.newvalue);
        		this.Dataset1.set_enableevent(true);
        	} else if(e.columnid == "Price")
        	{
        		this.Dataset1.set_enableevent(false);
        		this.Dataset1.setColumn(e.row,"Amt", this.Dataset1.getColumn(e.row,"Count") * e.newvalue);
        		this.Dataset1.set_enableevent(true);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Dataset1.addEventHandler("onvaluechanged",this.Dataset1_onvaluechanged,this);
        };
        this.loadIncludeScript("Performance_expr_datasetbind.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
