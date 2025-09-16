(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CmmWebpage");
            this.set_titletext("팝업 웹페이지 연결");
            if (Form == this.constructor)
            {
                this._setFormPosition(900,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btnClose","48%",null,"100","30",null,"10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("close");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("web00","10","10",null,null,"10","50",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",900,700,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CmmWebpage.xfdl", function() {
        /**
        *  Necacro EduPack
        *  @MenuPath    Cmm > 팝업웹페이지
        *  @FileName 	CmmWebpage.xfdl
        *  @Creator 	Education
        *  @CreateDate 	2022.05.01
        *  @Desction    html view
        ************** 소스 수정 이력 ***********************************************
        *  date          	Modifier                Description
        *******************************************************************************
        *  2022.05.01     	Education 	           	최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);
        	var sUrl = this.getOwnerFrame().paramUrl;
        	trace("paramUrl : " + sUrl);

        	//webBrowser url 세팅
        	if (!this.gfnIsNull(sUrl)) {
        		this.web00.set_url(sUrl);
        	}
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

         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
         * @description popup close
        */
        this.btnClose_onclick = function(obj,e)
        {
        	var rtnVal;

        	rtnVal = JSON.stringify({aaa:"tobesoft", bbb:"투비소프트"});

        	this.gfnClosePopup(rtnVal);
        	//this.close();
        };

        this.web00_onloadcompleted = function(obj,e)
        {
        	trace("web00_onloadcompleted");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.web00.addEventHandler("onloadcompleted",this.web00_onloadcompleted,this);
        };
        this.loadIncludeScript("CmmWebpage.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
