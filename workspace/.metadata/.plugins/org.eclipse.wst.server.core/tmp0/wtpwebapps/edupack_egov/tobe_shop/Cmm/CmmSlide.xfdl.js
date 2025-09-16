(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CmmSlide");
            this.set_titletext("슬라이드");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,130);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divSlide","0","0","400","130",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("stBarBg","20","77","360","15",null,null,null,null,null,null,this.divSlide.form);
            obj.set_taborder("0");
            obj.set_background("#dddddd");
            obj.set_border("0px none");
            this.divSlide.addChild(obj.name, obj);

            obj = new Static("stBar","20","77","250","15",null,null,null,null,null,null,this.divSlide.form);
            obj.set_taborder("1");
            obj.set_background("#31a2de");
            this.divSlide.addChild(obj.name, obj);

            obj = new Static("stTooltip","251","36","56","22",null,null,null,null,null,null,this.divSlide.form);
            obj.set_taborder("2");
            obj.set_text("0");
            this.divSlide.addChild(obj.name, obj);

            obj = new Static("stMin","20","102","40","25",null,null,null,null,null,null,this.divSlide.form);
            obj.set_taborder("3");
            obj.set_text("0");
            this.divSlide.addChild(obj.name, obj);

            obj = new Static("stMax","359","102","26","25",null,null,null,null,null,null,this.divSlide.form);
            obj.set_taborder("4");
            obj.set_text("99");
            this.divSlide.addChild(obj.name, obj);

            obj = new Button("btnBarPoint","252","69","30","30",null,null,null,null,null,null,this.divSlide.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_BarPoint");
            this.divSlide.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSlide.form
            obj = new Layout("default","",0,0,this.divSlide.form,function(p){});
            this.divSlide.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",400,130,this,function(p){});
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CmmSlide.xfdl", function() {
        /**
        *  Necacro EduPack
        *  @MenuPath    CmmM > CmmSlide (공통 슬라이드버튼)
        *  @FileName 	CmmSlide.xfdl
        *  @Creator 	Education
        *  @CreateDate 	2022.05.01
        *  @Desction    공통 슬라이드버튼
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2022.05.01     	Education	        최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.fvValue = -1;
        this.callbackfunc;
        this.callbackfunc2;
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.Form_onload = function(obj,e)
        {
            var objTarget = this.parent;	 //div
        	this.divSlide.max 	= objTarget.max;
        	this.divSlide.lable = this.gfnTrim(objTarget.lable);
            this.callbackfunc = objTarget.callbackfunc;
            this.callbackfunc2 = objTarget.callbackfunc2;

        	this.divSlide.form.btnBarPoint.clickpointx = 0;
        	this.fnMoveBarPoint(0);
        };

         /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/

        this.fnMoveBarPoint = function(nClientX)
        {
            var obj =  this.divSlide;
        	var nMin = 0;
            var nPadding = 5;
        	var nMax = obj.form.stBarBg.getOffsetWidth();
        	var nX = nClientX - obj.form.btnBarPoint.clickpointx;

        	if (nMin > nX)
                nX = nMin;
        	else if (nMax < nX)
                nX = nMax;

        	obj.form.btnBarPoint.move(nX, obj.form.btnBarPoint.getOffsetTop());
        	obj.form.stBar.setOffsetWidth(nX);
        	obj.form.stTooltip.move(nX+nPadding, obj.form.stTooltip.getOffsetTop());
            this.fvValue = nexacro.round((nX-nMin)/((nMax-nMin)/obj.max));
        	obj.form.stTooltip.set_text(this.fvValue + obj.lable);
        }

        this.getValue = function()
        {
            return this.fvValue;
        };

        this.setValue = function(nValue)
        {
            this.divSlide.form.btnBarPoint.clickpointx = 0;
            var obj =  this.divSlide;
        	var nMin = 0;
        	var nMax = obj.form.stBarBg.getOffsetWidth();
            var nX = nexacro.round(nValue*((nMax-nMin)/obj.max)+nMin);
            this.fnMoveBarPoint(nX);
        };

         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/

        this.divSlide_btnBarPoint_ondrag = function(obj,e)
        {
        	obj.clickpointx = e.canvasx;
        	return true;
        };

        this.divSlide_ondragmove = function(obj,e)
        {
        	this.fnMoveBarPoint(e.clientx);
        	if (!this.gfnIsNull(this.callbackfunc2))
        	{
        		this.lookupFunc(this.callbackfunc2).call(this.parent.name, this.fvValue);
        	}
        };

        this.divSlide_stBarBg_onclick = function(obj,e)
        {
            this.divSlide.form.btnBarPoint.clickpointx = 0;
        	this.fnMoveBarPoint(e.clientx);

        	if (!this.gfnIsNull(this.callbackfunc))
        	{
        		this.lookupFunc(this.callbackfunc).call(this.parent.name, this.fvValue);
        	}
        };

        this.divSlide_stBar_onclick = function(obj,e)
        {
            this.divSlide.form.btnBarPoint.clickpointx = 0;
        	this.fnMoveBarPoint(e.clientx);

        	if (!this.gfnIsNull(this.callbackfunc))
        	{
        		this.lookupFunc(this.callbackfunc).call(this.parent.name, this.fvValue);
        	}
        };

        this.divSlide_btnBarPoint_ondrop = function(obj,e)
        {
        	if (!this.gfnIsNull(this.callbackfunc))
        	{
        		this.lookupFunc(this.callbackfunc).call(this.parent.name, this.fvValue);
        	}
        };

        this.divSlide_btnBarPoint_ontouchend = function(obj,e)
        {
        	if (!this.gfnIsNull(this.callbackfunc))
        	{
        		this.lookupFunc(this.callbackfunc).call(this.parent.name, this.fvValue);
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.addEventHandler("ontimer",this.Form_ontimer,this);
            this.divSlide.addEventHandler("ondragmove",this.divSlide_ondragmove,this);
            this.divSlide.form.stBarBg.addEventHandler("onclick",this.divSlide_stBarBg_onclick,this);
            this.divSlide.form.stBar.addEventHandler("onclick",this.divSlide_stBar_onclick,this);
            this.divSlide.form.btnBarPoint.addEventHandler("ondrag",this.divSlide_btnBarPoint_ondrag,this);
            this.divSlide.form.btnBarPoint.addEventHandler("ondrop",this.divSlide_btnBarPoint_ondrop,this);
            this.divSlide.form.btnBarPoint.addEventHandler("ontouchend",this.divSlide_btnBarPoint_ontouchend,this);
        };
        this.loadIncludeScript("CmmSlide.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
