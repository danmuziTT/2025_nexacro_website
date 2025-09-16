(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Mobile_Main_IconType_sub");
            this.set_titletext("메인서브");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,698);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta_title","0","30","480","105",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_ITM_titlelogo");
            this.addChild(obj.name, obj);

            obj = new Button("btn_intro","20","165","210","170",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("TOBESOFT");
            obj.set_cssclass("btn_ITM_tobeInfor");
            this.addChild(obj.name, obj);

            obj = new Button("btn_camera","250","165","210","170",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("CAMERA");
            obj.set_cssclass("btn_ITM_camera");
            this.addChild(obj.name, obj);

            obj = new Button("btn_component","250","355","210","170",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_ITM_mobile");
            obj.set_text("COMPONENT");
            this.addChild(obj.name, obj);

            obj = new Button("btn_mlm","20","355","210","170",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("MLM");
            obj.set_cssclass("btn_ITM_MLM");
            this.addChild(obj.name, obj);

            obj = new Button("btn_step","20","545","210","170",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("STEP");
            obj.set_cssclass("btn_ITM_step");
            this.addChild(obj.name, obj);

            obj = new Button("btn_listview","250","545","210","170",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("ListView");
            obj.set_cssclass("btn_ITM_listview");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","screen_phone",480,698,this,function(p){});
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Mobile_Main_IconType_sub.xfdl", function() {
        this.objApp = nexacro.getApplication();

        this.btn_iconClick = function(obj,e)
        {
        	//메뉴클릭 시 화면이동
        	var sId = obj.name;
        	var sUrl = "";
        	switch(sId)
        	{
        	case "btn_intro": //홈페이지
        		sUrl = "EduBasic::Mobile/Mobile_TOBESOFT.xfdl";
        		this.objApp.av_WorkFrame.form.fn_action(sUrl);
        		break;
        	case "btn_camera": //카메라
        		sUrl = "EduBasic::Mobile/Mobile_Camera.xfdl";
        		this.objApp.av_WorkFrame.form.fn_action(sUrl);
        		break;
        	case "btn_mlm":	//MLM TODO url 속성 확인
        		sUrl = "EduBasic::Mobile/Mobile_MLM.xfdl";
        		this.objApp.av_WorkFrame.form.fn_action(sUrl, "full");
        		break;
        	case "btn_component": //컴포넌트
        		sUrl = "EduBasic::Mobile/Mobile_Component.xfdl";
        		this.objApp.av_WorkFrame.form.fn_action(sUrl);
        		break;
        	case "btn_step": //Step
        		sUrl = "EduBasic::Mobile/Mobile_Step.xfdl";
        		this.objApp.av_WorkFrame.form.fn_action(sUrl);
        		break;
        	case "btn_listview":	//Listview
        		sUrl = "EduBasic::Mobile/Mobile_Employees_ListView.xfdl";
        		//sUrl = "Mobile::Mobile_ListView.xfdl";
        		this.objApp.av_WorkFrame.form.fn_action(sUrl);
        		break;
        	default:
        		trace("default");
        	}
        	//상단 text 설정
        	this.objApp.av_WorkFrame.form.div_top.form.sta_sub_title.set_text(obj.text);

        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_intro.addEventHandler("onclick",this.btn_iconClick,this);
            this.btn_camera.addEventHandler("onclick",this.btn_iconClick,this);
            this.btn_component.addEventHandler("onclick",this.btn_iconClick,this);
            this.btn_mlm.addEventHandler("onclick",this.btn_iconClick,this);
            this.btn_step.addEventHandler("onclick",this.btn_iconClick,this);
            this.btn_listview.addEventHandler("onclick",this.btn_iconClick,this);
        };
        this.loadIncludeScript("Mobile_Main_IconType_sub.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
