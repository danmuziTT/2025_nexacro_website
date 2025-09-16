(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_footer");
            this.set_titletext("하단 설명");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,100);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta01","0","0","50%","50%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("sta01");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","sta01:-245","14","490","72",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("사업자등록번호 220-81-62517 | (주) 쿠루쿠루쇼핑\r\n경기도 고양시 일산서구 중앙로 1413, 107호 | 대표이사: 이채영 | 문의전화: 02)760-8088\r\nCOPYRIGHT ⓒ KRKRshop ALL RIGHTS RESERVED.");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","300","16",null,"70","sta00:0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("url(\'imagerc::JZpE7Z3On_y4XBm1Ur_Q35qJTuhxmk0YNcbwaFlj9ag4MBpH9y_YM6s2V49vVxPppoGT53wnzrH-Hi43QVX9JQ.png\') no-repeat center center /contain");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,100,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_footer.xfdl", function() {

        this.Form_footer_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);
        	this.objApp = nexacro.getApplication();

        	var nHeight = this.getLayoutInfo(this.getCurrentLayoutID(), "height");
        	this.parent.parent.fnMainPageOnLoad1(nHeight);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_footer_onload,this);
            this.sta00.addEventHandler("onclick",this.sta00_onclick,this);
        };
        this.loadIncludeScript("Form_footer.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
