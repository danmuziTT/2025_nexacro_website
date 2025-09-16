(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ArrangeSpli");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new ImageViewer("img_split","313","151","10","10",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("red");
            obj.set_cursor("move");
            this.addChild(obj.name, obj);

            obj = new Div("div_top","10","50",null,null,"10","img_split:1","50",null,"50",null,this);
            obj.set_taborder("0");
            obj.set_text("Top");
            obj.set_border("1px solid pink");
            this.addChild(obj.name, obj);

            obj = new Div("div_left","10","img_split:1",null,null,"img_split:1","10","100",null,"100",null,this);
            obj.set_taborder("1");
            obj.set_text("Left");
            obj.set_border("1px solid skyblue");
            this.addChild(obj.name, obj);

            obj = new Div("div_right","img_split:1","img_split:1",null,null,"10","10","200",null,"200",null,this);
            obj.set_taborder("2");
            obj.set_text("Right");
            obj.set_border("1px solid gold");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00","10","0","470","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Sample Split Using Arrangement - Red Icon Drag&Drop");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_top
            obj = new Layout("default","",0,0,this.div_top.form,function(p){});
            this.div_top.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_left
            obj = new Layout("default","",0,0,this.div_left.form,function(p){});
            this.div_left.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_right
            obj = new Layout("default","",0,0,this.div_right.form,function(p){});
            this.div_right.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1038,650,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("ArrangeSplit.xfdl", function() {
        this.img_split_ondrag = function(obj,e)
        {
        	return true;
        };

        this.img_split_onlbuttondown = function(obj,e)
        {
        	obj.nX = e.clientx;
        	obj.nY = e.clienty;
        };

        this.CompBase_ArrangeSpli_ondragmove = function(obj,e)
        {
        	var nX = e.clientx - this.img_split.nX;
        	var nY = e.clienty - this.img_split.nY;

        	//최소, 최대 사이즈 제한
        	var nXmin = nexacro.toNumber(this.div_left.getOffsetLeft()) + nexacro.toNumber(this.div_left.minwidth);
        	var nXmax = this.width - this.div_right.minwidth;

        	var nYmin = nexacro.toNumber(this.div_top.getOffsetTop()) + nexacro.toNumber(this.div_top.minheight);
        	var nYmax = this.height - this.div_right.minheight;

        	if(nX > nXmin && nX < nXmax  && nY > nYmin && nY < nYmax)
        	{
        		this.img_split.move(nX, nY);
        		this.resetScroll();
        	}

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ondragmove",this.CompBase_ArrangeSpli_ondragmove,this);
            this.img_split.addEventHandler("ondrag",this.img_split_ondrag,this);
            this.img_split.addEventHandler("onlbuttondown",this.img_split_onlbuttondown,this);
            this.img_split.addEventHandler("ondragmove",this.img_split_ondragmove,this);
        };
        this.loadIncludeScript("ArrangeSplit.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
