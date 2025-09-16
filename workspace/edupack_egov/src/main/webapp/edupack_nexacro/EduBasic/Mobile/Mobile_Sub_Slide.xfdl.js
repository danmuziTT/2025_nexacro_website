(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Mobile_Sub_Slide");
            this.set_titletext("슬라이드");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,130);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_slide","0","0","400","130",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("sta_barBg","20","83","360","5",null,null,null,null,null,null,this.div_slide.form);
            obj.set_taborder("0");
            obj.set_border("0px none");
            obj.set_background("#dddddd");
            this.div_slide.addChild(obj.name, obj);

            obj = new Static("sta_bar","20","83","250","5",null,null,null,null,null,null,this.div_slide.form);
            obj.set_taborder("1");
            obj.set_background("green");
            this.div_slide.addChild(obj.name, obj);

            obj = new Static("sta_text","251","36","56","22",null,null,null,null,null,null,this.div_slide.form);
            obj.set_taborder("2");
            obj.set_text("0");
            this.div_slide.addChild(obj.name, obj);

            obj = new Static("st_min","20","102","40","25",null,null,null,null,null,null,this.div_slide.form);
            obj.set_taborder("3");
            obj.set_text("0");
            this.div_slide.addChild(obj.name, obj);

            obj = new Static("stMax","359","102","26","25",null,null,null,null,null,null,this.div_slide.form);
            obj.set_taborder("4");
            obj.set_text("99");
            this.div_slide.addChild(obj.name, obj);

            obj = new Button("btn_point","252","69","30","30",null,null,null,null,null,null,this.div_slide.form);
            obj.set_taborder("5");
            this.div_slide.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_slide.form
            obj = new Layout("default","",0,0,this.div_slide.form,function(p){});
            this.div_slide.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","screen_phone",400,130,this,function(p){});
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Mobile_Sub_Slide.xfdl", function() {
        //form 변수
        this.fvValue = -1;
        this.fvMax = 99; //0~99 표시시
        this.fvLable = "%" //문자열 추가시

        //onload event
        this.Form_onload = function(obj,e)
        {
        	this.div_slide.max 	= this.fvMax;
        	this.div_slide.form.btn_point.clickpointx = 0;
        	this.fnMove(0);
        };

        //이동
        this.fnMove = function(nClientX)
        {
            var obj =  this.div_slide;
        	var nMin = 0;
            var nPadding = 5;
        	var nMax = obj.form.sta_barBg.getOffsetWidth();
        	var nX = nClientX - obj.form.btn_point.clickpointx;

        	if (nMin > nX)
                nX = nMin;
        	else if (nMax < nX)
                nX = nMax;

        	obj.form.btn_point.move(nX, obj.form.btn_point.getOffsetTop());
        	obj.form.sta_bar.setOffsetWidth(nX);
        	obj.form.sta_text.move(nX+nPadding, obj.form.sta_text.getOffsetTop());
            this.fvValue = nexacro.round((nX-nMin)/((nMax-nMin)/obj.max));
        	obj.form.sta_text.set_text(this.fvValue + this.fvLable);
        }

        //ondrag event
        this.div_slide_btn_point_ondrag = function(obj,e)
        {
        	obj.clickpointx = e.canvasx;
        	return true;
        };

        //ondragmove event
        this.div_slide_ondragmove = function(obj,e)
        {
        	this.fnMove(e.clientx);
        }

        //바탕라인 클릭 시
        this.div_slide_sta_barBg_onclick = function(obj,e)
        {
        	this.div_slide.form.btn_point.clickpointx = 0;
        	this.fnMove(e.clientx);
        };

        //색상라인 클릭 시
        this.div_slide_sta_bar_onclick = function(obj,e)
        {
        	this.div_slide.form.btn_point.clickpointx = 0;
        	this.fnMove(e.clientx);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.addEventHandler("ontimer",this.Form_ontimer,this);
            this.div_slide.addEventHandler("ondragmove",this.div_slide_ondragmove,this);
            this.div_slide.form.sta_barBg.addEventHandler("onclick",this.div_slide_sta_barBg_onclick,this);
            this.div_slide.form.sta_bar.addEventHandler("onclick",this.div_slide_sta_bar_onclick,this);
            this.div_slide.form.btn_point.addEventHandler("ondrag",this.div_slide_btn_point_ondrag,this);
        };
        this.loadIncludeScript("Mobile_Sub_Slide.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
