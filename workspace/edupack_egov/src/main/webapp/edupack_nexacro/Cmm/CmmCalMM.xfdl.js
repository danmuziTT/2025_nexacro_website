(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CmmCalMM");
            this.set_titletext("월 달력");
            if (Form == this.constructor)
            {
                this._setFormPosition(96,28);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Calendar("calYM","0","0","100%","28",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM");
            obj.set_editformat("yyyy-MM");
            obj.set_popuptype("none");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdvCal","0","31","187","206",null,null,null,null,null,null,this);
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            obj.set_cssclass("pdv_WF_MonthCalBg");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","30","187","167",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_PdvCalbg");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0",null,"30","0",null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("0");
            obj.set_text("월 선택");
            obj.getSetter("uWord").set("popup.monthselect");
            obj.set_cssclass("sta_POP_Title");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btnBefore","9","38","21","21",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_ShuttleL");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btnPdvClose",null,"5","21","21","10",null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_POP_Close");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btnNext",null,"38","21","21","9",null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_ShuttleR");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Static("staYYYY","0","38",null,"21","0",null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("2");
            obj.set_text("9999");
            obj.set_cssclass("sta_WF_PdvCalYYYY");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn1","9","65","40","40",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("3");
            obj.set_text("01");
            obj.set_cssclass("btn_WF_CRUD");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn2","52","65","40","40",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("3");
            obj.set_text("02");
            obj.set_cssclass("btn_WF_CRUD");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn3","95","65","40","40",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("3");
            obj.set_text("03");
            obj.set_cssclass("btn_WF_CRUD");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn4","138","65","40","40",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("3");
            obj.set_text("04");
            obj.set_cssclass("btn_WF_CRUD");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn5","9","108","40","40",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("3");
            obj.set_text("05");
            obj.set_cssclass("btn_WF_CRUD");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn6","52","108","40","40",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("3");
            obj.set_text("06");
            obj.set_cssclass("btn_WF_CRUD");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn7","95","108","40","40",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("3");
            obj.set_text("07");
            obj.set_cssclass("btn_WF_CRUD");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn8","138","108","40","40",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("3");
            obj.set_text("08");
            obj.set_cssclass("btn_WF_CRUD");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn9","9","151","40","40",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("3");
            obj.set_text("09");
            obj.set_cssclass("btn_WF_CRUD");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn10","52","151","40","40",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("btn_WF_CRUD");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn11","95","151","40","40",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("3");
            obj.set_text("11");
            obj.set_cssclass("btn_WF_CRUD");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn12","138","151","40","40",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("3");
            obj.set_text("12");
            obj.set_cssclass("btn_WF_CRUD");
            this.pdvCal.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.pdvCal.form
            obj = new Layout("default","",0,0,this.pdvCal.form,function(p){});
            this.pdvCal.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",96,28,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CmmCalMM.xfdl", function() {
        /**
        *  Necacro EduPack
        *  @MenuPath    Cmm > CmmCalMM (공통 월달력)
        *  @FileName 	CmmCalMM.xfdl
        *  @Creator 	Education
        *  @CreateDate 	2022.05.01
        *  @Desction    월달력
        ************** 소스 수정 이력 ***************************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2022.05.01     	Education 	                최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.fvToday;

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	//this.gfnFormOnLoad(this);//초기화[필수]

        	this.fvToday = this.gfnGetDate(); //오늘날자세팅
        	this.fnInit();
        };
        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        /************************************************************************************************
         * CALLBACK 콜백 처리부분
         ************************************************************************************************/

         /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
        * @description 달력초기화
        */
        this.fnInit = function()
        {
        	//요구사항에 따라 오늘날짜 3개월 등등 지정 현재 디폴트="";
        	this.calYM.set_value("");
        };

        /**
        * @description  컴포넌트 날짜 값 호출
        */
        this.fnGetValue = function()
        {
        	var rtn = this.calYM.value.substr(0,6);
        	return rtn;
        };

        /**
        * @description   컴포넌트 날짜 값 셋팅
        */
        this.fnSetValue = function(sDate)
        {
        	this.calYM.set_value(sDate);
        };

        /**
        * @description    컴포넌트 enable 셋팅
        */
        this.fnSetEnable = function(bValue)
        {
        	this.calYM.set_enable(bValue);
        };

        /**
        * @description    컴포넌트 Readonly 셋팅
        */
        this.fnSetReadonly = function(bValue)
        {
        	this.calYM.set_readonly(bValue);
        };

        /**
        * @description    컴포넌트 필수 css 셋팅
        */
        this.fnSetEssential = function(bValue)
        {
        	//CSS Class가있는 경우 클래스설정 임시로 노란표시
        	if(bValue){
        		this.calYM.set_background("yellow");
        	}else{
        		this.calYM.set_background("");
        	}
        };

         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
        * @description   Calendar_ondropdown 이벤트 시 popDiv컴포넌트 띄우기
        */
        this.calYM_ondropdown = function(obj,e)
        {
        	var sDate = this.calYM.value;
        	if( this.gfnIsNull(sDate) ) sDate = this.fvToday;

        	this.pdvCal.form.staYYYY.set_text(sDate.substr(0,4));
        /*
        	var oForm = this.parent.parent;
        	var nTop = 0;
        	// 상단 팝업
        	if (oForm.getOffsetHeight() < (this.parent.getOffsetBottom() + this.pdvCal.getOffsetHeight())) {
        		nTop = -1 * (this.pdvCal.getOffsetHeight() + 1);
        	}
        	else {
        		nTop = this.parent.getOffsetHeight();
        	}

        	var nLeft = 0;
        	// 우측 정렬
        	if (oForm.getOffsetWidth() < (this.parent.getOffsetRight() + this.pdvCal.getOffsetWidth()) ) {
        		nLeft = this.parent.getOffsetWidth() - this.pdvCal.getOffsetWidth();
        	}
        	else {
        		nLeft = 0;
        	}

        	this.pdvCal.trackPopupByComponent(this,nLeft,nTop);
        */
        	//Div 안에 넣을 경우 팝업 위치 이상해서 수정
        	this.pdvCal.trackPopupByComponent(this.calYM, 0, obj.height);

        };

        /**
        * @description   월달력 popDiv컴포넌트 닫기
        */
        this.pdvCal_btnPdvCancle_onclick = function(obj,e)
        {
        	this.pdvCal.closePopup();
        };

        /**
        * @description   이전 년도 버튼 클릭
        */
        this.pdvCal_btnBefore_onclick = function(obj,e)
        {
        	var sDate =nexacro.toNumber( this.pdvCal.form.staYYYY.text);
        	this.pdvCal.form.staYYYY.set_text(sDate - 1 );

        };

        /**
        * @description  다음년도 버튼 클릭
        */
        this.pdvCal_btnNext_onclick = function(obj,e)
        {
        	var sDate =nexacro.toNumber( this.pdvCal.form.staYYYY.text);
        	this.pdvCal.form.staYYYY.set_text(sDate + 1 );
        };

        /**
        * @description  월 버튼 클릭
        */
        this.pdvCal_btn1_onclick = function(obj,e)
        {
        	var rtn = this.pdvCal.form.staYYYY.text + obj.text;
        	this.calYM.set_value(rtn);
        	this.pdvCal.closePopup();
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.calYM.addEventHandler("ondropdown",this.calYM_ondropdown,this);
            this.pdvCal.form.btnBefore.addEventHandler("onclick",this.pdvCal_btnBefore_onclick,this);
            this.pdvCal.form.btnPdvClose.addEventHandler("onclick",this.pdvCal_btnPdvCancle_onclick,this);
            this.pdvCal.form.btnNext.addEventHandler("onclick",this.pdvCal_btnNext_onclick,this);
            this.pdvCal.form.btn1.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.pdvCal.form.btn2.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.pdvCal.form.btn3.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.pdvCal.form.btn4.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.pdvCal.form.btn5.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.pdvCal.form.btn6.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.pdvCal.form.btn7.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.pdvCal.form.btn8.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.pdvCal.form.btn9.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.pdvCal.form.btn10.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.pdvCal.form.btn11.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.pdvCal.form.btn12.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
        };
        this.loadIncludeScript("CmmCalMM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
