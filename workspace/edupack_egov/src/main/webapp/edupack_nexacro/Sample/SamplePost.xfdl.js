(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SamplePost");
            this.set_titletext("우편번호 검색(행정안전부 연동)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta11","18","292","113","28",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_WF_DeatilLabel");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBasAddr","265","292","448","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_maxlength("200");
            obj.set_cssclass("readonly");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_detl_addr","718","292",null,"28","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_maxlength("200");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSculZip","133","292","92","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearchPost","230","292","30","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_Find");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","10","0","261","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("우편번호 검색 (행정안전부 연동)");
            obj.set_cssclass("sta_WF_FrmTitle");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","10","50",null,"210","10",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("1.화면에 행정안전부의 페이지를 호출 할 수 있도록 WebBrowser를 올려 놓는다.(본 화면에서는 webPost라는 아이디로 올려놓음 visible false)\r\n2.찾기버튼 클릭시 행정안전부 팝업을 호출한다. this.gfnPostSearch(obj);\r\n3. fnPostCallBack에서 넘어온 배열을 화면에 셋팅한다.\r\nthis.fnPostCallBack = function(sName, aAddr)\r\narray[1]=>주소1\r\narray[2]=>주소2\r\narray[3]=>상세주소\r\narray[4]=>우편번호\r\n4. this.fnPostCallBack = function(sName, aAddr) 으로 리턴값 처리한다.");
            obj.set_cssclass("sta_WF_Description");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item17","edt_detl_addr","value","ds_list","DETL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SamplePost.xfdl", function() {
        /**
        *  Nexacro Professional Training Couse
        *  @MenuPath    개발가이드 > 컴포넌트 및 연동 > 우편번호 검색(행정안전부 연동)
        *  @FileName 	SamplePost.xfdl
        *  @Creator 	TOBESOFT Education
        *  @CreateDate 	2023/01/03
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2023/01/03      		 TOBESOFT Education	 	  	최초 생성
        *******************************************************************************
        */



        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
         * @description 우편번호 찾기 팝업 호출
        */
        this.btn_searchPost_onclick = function(obj,e)
        {
        	this.gfnPostSearch(obj);
        };

        /**
         * @description 우편번호 CallBack 함수(선택)
        */
        this.fnPostCallBack = function(sName, aAddr)
        {
        	if (sName == "btnSearchPost") {
        		trace("onusernotify ----------------------------");
        		trace("array[1]=>주소1          ==> " +	aAddr[1] );
        		trace("array[2]=>주소2          ==> " +	aAddr[2] );
        		trace("array[3]=>상세주소      ==> " + aAddr[3] );
        		trace("array[4]=>우편번호      ==> " +	aAddr[4] );
        		trace("-----------------------------------------");

        		this.edtSculZip.set_value(aAddr[4]);	        // 우편번호
        		this.edtBasAddr.set_value(aAddr[1]+aAddr[2]);	// 주소
        		this.edt_detl_addr.set_value(aAddr[3]);	    	// 상세 주소
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnSearchPost.addEventHandler("onclick",this.btn_searchPost_onclick,this);
        };
        this.loadIncludeScript("SamplePost.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
