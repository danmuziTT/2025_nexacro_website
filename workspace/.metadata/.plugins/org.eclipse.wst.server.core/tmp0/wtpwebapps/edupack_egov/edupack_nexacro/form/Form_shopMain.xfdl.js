(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("shop_main");
            this.set_titletext("메인 화면");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_sale","8.59%",null,"270","400",null,"20",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("0px none");
            obj.set_formscrollbartype("none none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("saleImg","-1","30","269","281",null,null,null,null,null,null,this.div_sale.form);
            obj.set_taborder("0");
            obj.set_background("url(\'theme::blue/images/sell.png\') repeat-y center top /contain");
            obj.set_border("0px none");
            this.div_sale.addChild(obj.name, obj);

            obj = new Static("sta00","7","saleImg:35","257","23",null,null,null,null,null,null,this.div_sale.form);
            obj.set_taborder("1");
            obj.set_text("현재 할인하는 상품 보고가기");
            obj.set_cssclass("WF_mainExplain");
            obj.set_border("0px none");
            this.div_sale.addChild(obj.name, obj);

            obj = new Div("div_product","39.45%",null,"270","400",null,"20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_border("0px none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","8","0","254","310",null,null,null,null,null,null,this.div_product.form);
            obj.set_taborder("0");
            obj.set_background("url(\'theme::blue/images/pro.png\') no-repeat center center /cover");
            obj.set_border("0px none");
            this.div_product.addChild(obj.name, obj);

            obj = new Static("sta01","75","346","120","23",null,null,null,null,null,null,this.div_product.form);
            obj.set_taborder("1");
            obj.set_text("소품보러가기");
            obj.set_cssclass("WF_mainExplain");
            obj.set_border("0px none");
            this.div_product.addChild(obj.name, obj);

            obj = new Div("div_Lucky","70.31%",null,"270","400",null,"20",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_border("0px none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","0","254","310",null,null,null,null,null,null,this.div_Lucky.form);
            obj.set_taborder("0");
            obj.set_background("url(\'theme::blue/images/random.png\') no-repeat center center /cover");
            obj.set_border("0px none");
            this.div_Lucky.addChild(obj.name, obj);

            obj = new Static("sta01","37","346","197","23",null,null,null,null,null,null,this.div_Lucky.form);
            obj.set_taborder("1");
            obj.set_cssclass("WF_mainExplain");
            obj.set_text("행운의 소품을 뽑아봐!");
            obj.set_border("0px none");
            this.div_Lucky.addChild(obj.name, obj);

            obj = new Static("sta00","12.89%","25","950","45",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("오늘의 아이템과 잇템을 골라주는 투비쇼핑에 오신것을 환영합니다");
            obj.set_cssclass("WF_mainWelcome");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_sale.form
            obj = new Layout("default","",0,0,this.div_sale.form,function(p){});
            this.div_sale.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_product.form
            obj = new Layout("default","",0,0,this.div_product.form,function(p){});
            this.div_product.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_Lucky.form
            obj = new Layout("default","",0,0,this.div_Lucky.form,function(p){});
            this.div_Lucky.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,570,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_shopMain.xfdl", function() {
        /**************************************************************************
        * include 영역
        **************************************************************************/

        /**************************************************************************
        * FORM 변수 선언 영역 (fv)
        **************************************************************************/

        /**************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        **************************************************************************/
        this.shop_main_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);

        	//화면변환 변수
        	this.objApp = nexacro.getApplication();
        };
        /**************************************************************************
        * CRUD 및 TRANSACTION 서비스 호출 처리
        **************************************************************************/

        /**************************************************************************
        * CALLBACK 콜백 처리부분(Transaction, Popup)
        **************************************************************************/

        this.fn_shopsize = function(i)
        {
        	switch(i) {
        	case 0: //세일품목
        		this.objApp.mainframe.VFrameSet00.HFrameSet00.set_separatesize("200,0,*,0,0,0");
        		break;
        	case 1: //전체품목
        		this.objApp.mainframe.VFrameSet00.HFrameSet00.set_separatesize("200,0,0,*,0,0");
        		break;
        	case 2: //랜덤으로 하나의 물품 세부정보를 보여주는 코드 (수정할 것)
        		alert(i);
        		break;
        	default:
        	}
        };

        /**************************************************************************
        * 사용자 FUNCTION 영역
        **************************************************************************/

        /**************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        **************************************************************************/

        //세일하기 Div 클릭 시 사이트 크기 변환
        this.div_sale_onlbuttondown = function(obj,e)
        {
        	var moveInt = 0;
        	this.fn_shopsize(moveInt);
        };

        this.div_product_onlbuttondown = function(obj,e)
        {
        	var moveInt = 1;
        	this.fn_shopsize(moveInt);
        };

        this.div_Lucky_onlbuttondown = function(obj,e)
        {
        	var moveInt = 2;
        	this.fn_shopsize(moveInt);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.shop_main_onload,this);
            this.div_sale.addEventHandler("onlbuttondown",this.div_sale_onlbuttondown,this);
            this.div_product.addEventHandler("onlbuttondown",this.div_product_onlbuttondown,this);
            this.div_Lucky.addEventHandler("onlbuttondown",this.div_Lucky_onlbuttondown,this);
            this.sta00.addEventHandler("onclick",this.sta00_onclick,this);
        };
        this.loadIncludeScript("Form_shopMain.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
