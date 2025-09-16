(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SampleExtCommon");
            this.set_titletext("extCommon dll");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btnLoad","10","158","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("extCommon dll load");
            this.addChild(obj.name, obj);

            obj = new Button("btnUnLoad","10","476","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("UnLoad");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","10","0","261","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("extCommon dll");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","10","50",null,"40","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Desc");
            obj.set_text("확장 컴포넌트 dll 을 사용하는 방법이다. (NRE에서만 사용 가능)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","125","328","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("1) extCommon 파일 load");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","443","278","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("4) extCommon 파일 unLoad");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMsg","10","264","214","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.getSetter("_ms_clear").set("true");
            obj.set_value("안녕하세요~~ 반갑습니다.");
            obj.set_text("안녕하세요~~ 반갑습니다.");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","10","337","328","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("3) web Browser 문서모드를 11로 지정");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetRegi","10","370","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("레지스트리 등록");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","10","231","328","28",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("2) 시스템 메시지 출력");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Button("btnMessage","229","264","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("시스템 메시지 출력");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("web00","302","360","668","148",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1038,650,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SampleExtCommon.xfdl", function() {
        /**
        *  Nexacro Professional Training Couse
        *  @MenuPath    개발가이드 > 컴포넌트 및 연동 > extCommon dll
        *  @FileName 	SampleExtCommon.xfdl
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
        this.extComm;

        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
            var sUrl = this.gfnGetServerUrl() + "web/documentType.html";
        	this.web00.set_url(sUrl);
        };

        this.btnLoad_onclick = function(obj,e)
        {
        	this.extComm = this.gfnGetExtCommon();
        	alert("ExtCommon dll load가 완료되었습니다.");
        };

        this.btnMessage_onclick = function(obj,e)
        {
        	if (this.gfnIsNull(this.extComm)) {
        		alert("ExtCommon dll load가 되지 않았습니다.");
        		return;
        	}
        	this.extComm._ext_messagebox(this.edtMsg.value);
        };

        this.btnSetRegi_onclick = function(obj,e)
        {
        	if (this.gfnIsNull(this.extComm)) {
        		alert("ExtCommon dll load가 되지 않았습니다.");
        		return;
        	}

        	// 레지스트리 설정 위치
        	// 32 BIT
        	// "\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Internet Explorer\Main\FeatureControl\FEATURE_BROWSER_EMULATION\"
        	// 64 BIT
        	// "\HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Microsoft\Internet Explorer\Main\FeatureControl\FEATURE_BROWSER_EMULATION\"

        	// HKEY_LOCAL_MACHINE로 만으로도 안되면 HKEY_CURRENT_USER 이것도 해주면 됨...
        	var strKey = "HKEY_LOCAL_MACHINE";
        	//var strKey = "HKEY_CURRENT_USER";
        	var strName = "nexacro.exe";
        	var strValue = 11001;	// ie 11 edge로 지정
        	/*
        	 * ie 7  : 7000
        	 * ie 9  : 9000
        	 * ie 10 : 10000 / 10001
        	 * ie 11 : 11000 / 11001 edge
        	 * 참고 http://msdn.microsoft.com/en-us/library/ee330730%28VS.85%29.aspx#browser_emulation
        	 */

        	// OS 체크
        	var rtn = this.extComm._ext_getSystemDir("PROGRAMS");
        	trace(rtn);
        	// 32 BIT 설정
        	if (rtn.indexOf("x86") == -1) {
        		var strPath32 = "SOFTWARE\\Microsoft\\Internet Explorer\\Main\\FeatureControl\\FEATURE_BROWSER_EMULATION";
        		this.extComm._ext_setRegValue(strKey,strPath32,strName,strValue);
        	}
        	// 64 BIT 설정
        	else {
        		var strPath64 = "SOFTWARE\\WOW6432Node\\Microsoft\\Internet Explorer\\Main\\FeatureControl\\FEATURE_BROWSER_EMULATION";
        		this.extComm._ext_setRegValue(strKey,strPath64,strName,strValue);
        	}
        };

        //
        // this.btnUnLoad_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        // {
        // 	if (this.gfnIsNull(this.extComm)) {
        // 		alert("ExtCommon dll load가 되지 않았습니다.");
        // 		return;
        // 	}
        //
        // 	this.gfnCloseExtCommon();
        // 	alert("ExtCommon dll load가 해제되었습니다.");
        // };

        ///////////////2020.01.13 update//////////////////

        // ExtCommon 모듈 객체를 this.extComm에 받음
        this.btnLoad_onclick = function(obj,e)
        {
            this.extComm = this.gfnGetExtCommon();
            alert("ExtCommon dll load가 완료되었습니다.");
        };

        // ExtCommon 모듈 객체를 언로드 하면 this.extComm = null로 세팅해야 함
        this.btnUnLoad_onclick = function(obj,e)
        {
            if (this.gfnIsNull(this.extComm)) {
                alert("ExtCommon dll load가 되지 않았습니다.");
                return;
            }

            this.gfnCloseExtCommon();

            // [RP-87707] extCommon dll  해제 후, extCommon dll 모듈 사용 시 죽는 현상 발생
            this.extComm = null;

            alert("ExtCommon dll load가 해제되었습니다.");
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnLoad.addEventHandler("onclick",this.btnLoad_onclick,this);
            this.btnUnLoad.addEventHandler("onclick",this.btnUnLoad_onclick,this);
            this.btnSetRegi.addEventHandler("onclick",this.btnSetRegi_onclick,this);
            this.btnMessage.addEventHandler("onclick",this.btnMessage_onclick,this);
        };
        this.loadIncludeScript("SampleExtCommon.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
