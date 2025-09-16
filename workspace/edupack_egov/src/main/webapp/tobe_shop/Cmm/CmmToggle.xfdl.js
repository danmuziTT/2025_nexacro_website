(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CmmToggle");
            this.set_titletext("토글");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(76,40);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divToggle","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Static("staBG","4","4",null,"30","4",null,null,null,null,null,this.divToggle.form);
            obj.set_taborder("2");
            obj.set_border("1px solid #d9d9d9");
            obj.set_borderRadius("20px");
            obj.set_background("#dddddd");
            this.divToggle.addChild(obj.name, obj);

            obj = new Button("btnOff","4","2","34","34",null,null,null,null,null,null,this.divToggle.form);
            obj.set_taborder("0");
            obj.set_borderRadius("20px");
            obj.set_boxShadow("0px 2px 2px HSLA(0,0%,0%,0.12)");
            this.divToggle.addChild(obj.name, obj);

            obj = new Button("btnOn",null,"2","34","34","4",null,null,null,null,null,this.divToggle.form);
            obj.set_taborder("1");
            obj.set_visible("false");
            obj.set_boxShadow("0px 2px 2px HSLA(0,0%,0%,0.12)");
            obj.set_borderRadius("20px");
            this.divToggle.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divToggle.form
            obj = new Layout("default","",0,0,this.divToggle.form,function(p){});
            this.divToggle.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",76,40,this,function(p){});
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CmmToggle.xfdl", function() {
        /**
        *  Necacro EduPack
        *  @MenuPath    CmmM > CmmToggle (공통 토글버튼)
        *  @FileName 	CmmToggle.xfdl
        *  @Creator 	Education
        *  @CreateDate 	2022.05.01
        *  @Desction    공통 토글버튼
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2022.05.01     	Education 	        최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.fvTouchStartX = -1;
        this.callbackfunc;
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.Form_onload = function(obj,e)
        {
            var objTarget = this.parent;	 // div
        	if (this.gfnIsNull(this.parent.onText) == false)  this.divToggle.form.btnOn.set_text(this.parent.onText);
        	if (this.gfnIsNull(this.parent.offText) == false) this.divToggle.form.btnOff.set_text(this.parent.offText);
            this.callbackfunc = objTarget.callbackfunc;
        };

         /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        this.fnTouchMove = function(startX, endX)
        {
        	var moveX = startX - endX;
        	if(moveX > 10)
        	{
        		this.fnOff();
        	}
            else if (moveX < -10)
        	{
                this.fnOn();
        	}
        }

        this.getValue = function()
        {
            if (this.divToggle.form.btnOff.visible)
            {
                return false;
            }
            else
            {
                return true;
            }
        };

        this.setValue = function(bValue)
        {
            if (bValue)
            {
                this.fnOn();
            }
            else
            {
        		this.fnOff();
            }
        };

        this.fnOn = function()
        {
            this.divToggle.form.btnOff.set_visible(false);
            this.divToggle.form.btnOn.set_visible(true);
        	this.divToggle.form.staBG.set_background("#31a2de");

        	if (!this.gfnIsNull(this.callbackfunc))
        	{
        		this.lookupFunc(this.callbackfunc).call(this.parent.name, true);
        	}
        }

        this.fnOff = function()
        {
            this.divToggle.form.btnOff.set_visible(true);
            this.divToggle.form.btnOn.set_visible(false);
            this.divToggle.form.staBG.set_background("#dddddd");

        	if (!this.gfnIsNull(this.callbackfunc))
        	{
        		this.lookupFunc(this.callbackfunc).call(this.parent.name, false);
        	}
        }

         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/

        this.divToggle_ontouchstart = function(obj,e)
        {
        	if (e.touchinputinfos.length == 1)
                this.fvTouchStartX = e.touchinputinfos[0].screenx;
        	else
                this.fvTouchStartX = -1;
        };

        this.divToggle_ontouchend = function(obj,e)
        {
        	if (this.fvTouchStartX >- 1)
        	{
        		this.fnTouchMove(this.fvTouchStartX, e.touchinputinfos[0].screenx);
        	}
        };

        this.divToggle_onclick = function(obj,e)
        {
        //     if (e.canvasx < obj.getOffsetWidth()/2)
        //     {
        // 		    this.fnOff();
        //     }
        //     else
        //     {
        //        	this.fnOn();
        //     }
        };

        this.divToggle_staBG_onclick = function(obj,e)
        {
            if (e.canvasx < obj.getOffsetWidth()/2)
            {
        		this.fnOff();
            }
            else
            {
               	this.fnOn();
            }
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.addEventHandler("ontimer",this.Form_ontimer,this);
            this.divToggle.addEventHandler("ontouchstart",this.divToggle_ontouchstart,this);
            this.divToggle.addEventHandler("ontouchend",this.divToggle_ontouchend,this);
            this.divToggle.addEventHandler("onclick",this.divToggle_onclick,this);
            this.divToggle.form.staBG.addEventHandler("onclick",this.divToggle_staBG_onclick,this);
        };
        this.loadIncludeScript("CmmToggle.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
