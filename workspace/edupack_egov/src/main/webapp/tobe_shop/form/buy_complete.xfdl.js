(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("buy_complete");
            this.set_titletext("구매 완료 폼");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta02","0","0","50%","50%",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("sta02");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","sta02:-236","27","473","413",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("transparent");
            obj.set_border("0px solid");
            obj.set_fittocontents("none");
            obj.set_stretch("fixaspectratio");
            obj.set_imagealign("center middle");
            obj.set_image("url(\'theme::blue/images/takuhai_daibiki_card.png\')");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","sta02:-107","450","215","80",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text(" 결제가 완료되었습니다");
            obj.set_font("20px Verdana");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","sta02:-117","ImageViewer00:85","235","74",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("이용해주셔서 감사합니다.");
            obj.set_font("20px Verdana");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","110","sta02:266","456","64",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("메인화면으로");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00","sta02:74","626","456","64",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("마이페이지로");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("buy_complete.xfdl", function() {

        /**************************************************************************
        * include 영역
        **************************************************************************/

        /**************************************************************************
        * FORM 변수 선언 영역 (fv)
        **************************************************************************/

        /**************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        **************************************************************************/

        this.buy_complete_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);
        	this.objApp = nexacro.getApplication();

        	var nHeight = this.getLayoutInfo(this.getCurrentLayoutID(), "height");
        	this.parent.parent.fnMainPageOnLoad(nHeight);
        };

        /**************************************************************************
        * CRUD 및 TRANSACTION 서비스 호출 처리
        **************************************************************************/

        /**************************************************************************
        * CALLBACK 콜백 처리부분(Transaction, Popup)
        **************************************************************************/

        /**************************************************************************
        * 사용자 FUNCTION 영역
        **************************************************************************/

        /**************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        **************************************************************************/


        this.btn00_00_onclick = function(obj,e)
        {
        	this.parent.parent.fv_setUrl("userInfo::User_myPage.xfdl");
        };


        this.btn00_onclick = function(obj,e)
        {
        	this.parent.parent.fv_setUrl("form::Form_shopMain.xfdl");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.buy_complete_onload,this);
            this.sta00.addEventHandler("onclick",this.sta00_onclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn00_00.addEventHandler("onclick",this.btn00_00_onclick,this);
        };
        this.loadIncludeScript("buy_complete.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
