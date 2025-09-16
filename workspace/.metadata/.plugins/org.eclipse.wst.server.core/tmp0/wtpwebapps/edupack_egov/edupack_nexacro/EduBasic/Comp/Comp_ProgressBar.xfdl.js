(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_ProgreessBar");
            this.set_titletext("Component-ProgressBar");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static11","10","146","342","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text(" Direction (Prop. direction, smooth)");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","10","40","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text(" Default");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar01","20","212","256","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_min("0");
            obj.set_max("100");
            obj.set_pos("50");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar00","20","73","256","28",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_min("0");
            obj.set_max("100");
            obj.set_pos("50");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","284","73","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Start");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","284","212","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Start");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","20","179","200","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">forward</Col><Col id=\"datacolumn\">forward</Col></Row><Row><Col id=\"codecolumn\">backward</Col><Col id=\"datacolumn\">backward</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_value("forward");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","272","179","78","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("smooth");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static99","10","0","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("ProgressBar");
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
        this.registerScript("Comp_ProgressBar.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.ProgressBar00.set_pos(0);

        	this.setTimer(1, 30);
        };



        this.Form_ontimer = function(obj,e)
        {
        	if(e.timerid == 1)
        	{
        		if(this.ProgressBar00.pos == 100)
        		{
        			this.killTimer(1);
        		}
        		this.ProgressBar00.getNumSetter("pos").postInc();
        	}
        	else if(e.timerid == 2)
        	{
        		if(this.ProgressBar01.pos == 100)
        		{
        			this.killTimer(1);
        		}
        		this.ProgressBar01.getNumSetter("pos").postInc();
        	}
        };

        this.Button01_onclick = function(obj,e)
        {
        	this.ProgressBar01.set_pos(0);
        	this.ProgressBar01.set_direction(this.Radio00.value);
        	this.ProgressBar01.set_smooth(this.CheckBox00.value);
        	this.setTimer(2, 30);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ontimer",this.Form_ontimer,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };
        this.loadIncludeScript("Comp_ProgressBar.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
