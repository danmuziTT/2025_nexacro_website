(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Moibile_Pop_Confirm");
            this.set_titletext("모바일 확인창");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,251);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btn_cancel","0","181","200","70",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("취소");
            obj.set_cssclass("btn_Pop_cancel");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok","200","181","200","70",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_cssclass("btn_Pop_confirm");
            this.addChild(obj.name, obj);

            obj = new Static("sta_msg","20","80","362","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("종료하시겠습니까?");
            obj.set_cssclass("sta_Pop_question");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","screen_phone",400,251,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Moibile_Pop_Confirm.xfdl", function() {
        //form onload event
        this.Form_onload = function(obj,e)
        {
        	this.fn_msgSetting(this.parent.msg);
        };

        //화면 메시지 설정
        this.fn_msgSetting = function (smsg)
        {
         	this.sta_msg.set_text(smsg);
        };

        //확인버튼
        this.btn_ok_onclick = function(obj,e)
        {
        	var strReturn = "OK";
        	this.close(strReturn);
        };
        //취소버튼
        this.btn_cancel_onclick = function(obj,e)
        {
        	var strReturn = "CANCLE";
        	this.close(strReturn);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btn_ok.addEventHandler("onclick",this.btn_ok_onclick,this);
        };
        this.loadIncludeScript("Moibile_Pop_Confirm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
