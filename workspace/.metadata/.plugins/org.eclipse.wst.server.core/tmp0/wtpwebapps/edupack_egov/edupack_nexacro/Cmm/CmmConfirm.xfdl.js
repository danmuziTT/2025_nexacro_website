(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CmmConfirm");
            this.set_titletext("확인창");
            if (Form == this.constructor)
            {
                this._setFormPosition(390,180);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staMsgContent","80","30","290","80",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Static00");
            obj.set_cssclass("sta_POP_Contents");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Button("btnOk","180",null,"90","30",null,"20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.getSetter("uWord").set("popup.ok");
            obj.set_cssclass("btn_POP_Ok");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancle","280",null,"90","30",null,"20",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("취소");
            obj.getSetter("uWord").set("popup.cancel");
            obj.set_cssclass("btn_POP_Cancel");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","2","30","80","80",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_POP_Question");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","0","160","100","100",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_POP_Error");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","130","160","100","100",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_POP_Warning");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",390,180,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CmmConfirm.xfdl", function() {
        /**
        *  Nexacro Professional Training Couse
        *  @MenuPath    Confirm
        *  @FileName 	CmmConfirm.xfdl
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

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        //	this.gfnFormOnLoad(this); //초기화[필수]

        	var sContents = this.getOwnerFrame().paramContents;
        	this.fnMsgSetting(sContents);
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
        * @description 메세지설정
        */
        this.fnMsgSetting = function (sMsgContent)
        {
         	this.staMsgContent.set_text(sMsgContent);
        };

        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        /**
        * @description 확인버튼
        */
        this.btnOk_onclick = function(obj,e)
        {
        	this.close(true);
        };

        /**
        * @description 취소버튼
        */
        this.btnCancle_onclick = function(obj,e)
        {
        	this.close(false);
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);
            this.btnCancle.addEventHandler("onclick",this.btnCancle_onclick,this);
        };
        this.loadIncludeScript("CmmConfirm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
