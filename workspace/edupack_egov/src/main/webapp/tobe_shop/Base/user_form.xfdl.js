(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("user_form");
            this.set_titletext("구매자 유저프레임");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div01","220","0",null,null,"0","40",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_url("form::Form_shopMain.xfdl");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","Div01:0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_url("form::Form_footer.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","0","0",null,"530","Div01:0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("skyblue");
            obj.set_url("form::Form_Left.xfdl");
            obj.set_formscrollbartype("none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div01
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div02
            obj = new Layout("default","",0,0,this.Div02.form,function(p){});
            this.Div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,570,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","form::Form_shopMain.xfdl");
            this._addPreloadList("fdl","form::Form_footer.xfdl");
            this._addPreloadList("fdl","form::Form_Left.xfdl");
        };
        
        // User Script
        this.registerScript("user_form.xfdl", function() {
        /**************************************************************************
        * include 영역
        **************************************************************************/

        /**************************************************************************
        * FORM 변수 선언 영역 (fv)
        **************************************************************************/

        this.fv_setUrl = function(formUrl)
        {
        //	  this.Div01.url = formUrl;
        	  this.Div01.set_url(formUrl);
        	  //this.Div01.form.reload(); //강제 url 변경 후 새로고침
        	var size_case = 0; //1이면 화면분할 0 , 0 이면 화면분할X

        	if(formUrl === "form::Form_viewProducts.xfdl" || formUrl === "form::Form_viewProSale.xfdl"){ //상품보기
        		size_case = 1;
        		}
        	else {
        		size_case = 0;
        	}
            this.size_trance(size_case)
        };

        /**************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        **************************************************************************/
        this.user_form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);
        	//화면변환 변수
        	this.objApp = nexacro.getApplication();
        	this.fv_setUrl(this.Div01.url);


        	this.objApp.gdsProInfo.clear();
        	this.objApp.gdsProDetailInfo.clear();
        	this.objApp.gdsProOption.clear();
        	this.objApp.gdsProCategory.clear();

        	var strSvcUrl = "edu/getShopData.do";
        	var inData    = "";
        	var outData   = "gdsProInfo=out_emp";
        	var strArg    = "";
        	this.gfnTransaction("getShopData", strSvcUrl, inData, outData, strArg, "fnCallback", true);

        };
        /**************************************************************************
        * CRUD 및 TRANSACTION 서비스 호출 처리
        **************************************************************************/

        /**************************************************************************
        * CALLBACK 콜백 처리부분(Transaction, Popup)
        **************************************************************************/

        this.fnMainPageOnLoad = function(height) //division 을 늘려주고 줄여주는 기능을 이쪽에서 해주게 됨
        {
        	this.Div01.set_height(height);
        	this.Div01.form.resetScroll();
        	this.resetScroll();
        }

        this.fnMainPageOnLoad1 = function(height) //division 을 늘려주고 줄여주는 기능을 이쪽에서 해주게 됨
        {
        	this.Div00.set_height(height);
        	this.Div00.form.resetScroll();
        	this.resetScroll();
        }

        this.fnMainPageOnLoad2 = function(height) //division 을 늘려주고 줄여주는 기능을 이쪽에서 해주게 됨
        {
        	this.Div02.set_height(height);
        	this.Div02.form.resetScroll();
        	this.resetScroll();
        }

        /**************************************************************************
        * 사용자 FUNCTION 영역
        **************************************************************************/


        this.size_trance = function(i)
        {
        	if(i == 1){
        		this.Div02.set_width(200);  // 사이즈 분할 0
        		this.Div01.set_right(0);
        		this.Div02.set_left(0);
        		this.Div01.set_left(200);
        	}
        	else{
        		this.Div02.set_width(0);  // 사이즈 분할 X
        		this.Div01.set_right(0);
        		this.Div01.set_left(0);
        	}
        	this.Div00.set_height(200)
        };

        this.fnCallback = function(id, nErrorCode, sErrorMsg) //트랜젝션 콜백
        {
        	if(nErrorCode < 0){ //오류가 난 경우
        		this.alert("ERROR"+ sErrorMsg);
        		return ;
        	}
        	if(id == "getShopData"){
        	var strSvcUrl = "edu/getShopDataDetail.do";
        	var inData    = "";
        	var outData   = "gdsProDetailInfo=out_emp";
        	var strArg    = "";
        	this.gfnTransaction("getShopDataDetail", strSvcUrl, inData, outData, strArg, "fnCallback", true);
        	}
        	else if(id == "getShopDataDetail"){
        		var strSvcUrl = "edu/getShopDataOption.do";
        		var inData    = "";
        		var outData   = "gdsProOption=out_emp";
        		var strArg    = "";
        		this.gfnTransaction("getShopDataOption", strSvcUrl, inData, outData, strArg, "fnCallback", true);
        	}
        	else if(id == "getShopDataOption"){
        		var strSvcUrl = "edu/getShopDataCategory.do"; //카테고리 데이터 out
        		var inData    = "";
        		var outData   = "gdsProCategory=out_emp";
        		var strArg    = "";
        		this.gfnTransaction("getShopDataCategory", strSvcUrl, inData, outData, strArg, "fnCallback", true);
        	}
        };
        /**************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************** */

        this.user_form_onsize = function(obj,e)
        {
        	obj.resetScroll();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.user_form_onload,this);
            this.addEventHandler("onsize",this.user_form_onsize,this);
            this.addEventHandler("onstepchanged",this.user_form_onstepchanged,this);
            this.Div01.addEventHandler("onsize",this.Div01_onsize,this);
            this.Div00.addEventHandler("onsize",this.Div00_onsize,this);
            this.Div02.addEventHandler("onsize",this.Div02_onsize,this);
        };
        this.loadIncludeScript("user_form.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
