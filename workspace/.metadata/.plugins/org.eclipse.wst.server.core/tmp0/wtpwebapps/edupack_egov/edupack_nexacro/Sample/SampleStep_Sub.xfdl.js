(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SampleStep");
            this.set_titletext("스텝");
            this.set_stepshowtype("always");
            if (Form == this.constructor)
            {
                this._setFormPosition(960,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staBanner0","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("url(\'theme://images/sta_Main_Center.png\') no-repeat center center #143a84");
            this.addChild(obj.name, obj);

            obj = new Static("staBanner2","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_positionstep("2");
            obj.set_background("url(\'theme::edupack_nexacro/images/img_WF_Banner2.png\') no-repeat center center");
            this.addChild(obj.name, obj);

            obj = new Static("staBanner1","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_positionstep("1");
            obj.set_background("url(\'theme::edupack_nexacro/images/img_WF_Banner1.png\') no-repeat center center");
            this.addChild(obj.name, obj);

            obj = new Button("btn02","10","10","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_positionstep("1");
            obj.set_cssclass("btn_WF_ShuttleL");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Button("btn03","10","10","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_ShuttleR");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Button("btn04","10","10","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_positionstep("2");
            obj.set_cssclass("btn_WF_ShuttleL");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","42","10","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_positionstep("1");
            obj.set_cssclass("btn_WF_ShuttleR");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",960,400,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("3");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SampleStep_Sub.xfdl", function() {
        /**
        *  Nexacro Professional Training Couse
        *  @MenuPath    개발가이드 > 컴포넌트 및 연동 > step
        *  @FileName 	SampleStep_Sub.xfdl
        *  @Creator 	TOBESOFT Education
        *  @CreateDate 	2023/01/03
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2023/01/03      		 TOBESOFT Education	 	  	최초 생성
        *******************************************************************************
        */



        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.fvStep = 0;
        this.elapseTime = 2000;

        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        /**
         * @description 화면 onload시 처리내역(필수)
        */
        this.form_onload = function(obj,e)
        {
        	this.stepselector.set_visible(false);
        	this.set_stepshowtype("action");

        	this.setTimer(0, this.elapseTime);
        };

        this.SampleStep_ontimer = function(obj,e)
        {
        	if (e.timerid == 0)
        	{
        		if (this.fvStep == 2) {
        			this.fvStep = 0;
        			this.stepselector.set_stepindex(0);
        		}
        		else {
        			this.stepselector.set_stepindex(++this.fvStep);
        		}
        	}
        };

        this.btnPre_onclick = function(obj,e)
        {
        	this.killTimer(0);
        	this.stepselector.set_stepindex(--this.fvStep);
        };

        this.btnNext_onclick = function(obj,e)
        {
        	this.killTimer(0);
        	this.stepselector.set_stepindex(++this.fvStep);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onstepchanged",this.SampleStep_onstepchanged,this);
            this.addEventHandler("ontimer",this.SampleStep_ontimer,this);
            this.staBanner0.addEventHandler("onclick",this.staBanner0_onclick,this);
            this.staBanner2.addEventHandler("onclick",this.staPlay_onclick,this);
            this.staBanner1.addEventHandler("onclick",this.staSupport_onclick,this);
            this.btn02.addEventHandler("onclick",this.btnPre_onclick,this);
            this.btn03.addEventHandler("onclick",this.btnNext_onclick,this);
            this.btn04.addEventHandler("onclick",this.btnPre_onclick,this);
            this.btn01.addEventHandler("onclick",this.btnNext_onclick,this);
        };
        this.loadIncludeScript("SampleStep_Sub.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
