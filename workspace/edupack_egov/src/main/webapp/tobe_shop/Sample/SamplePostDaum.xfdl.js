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
            this.set_titletext("우편번호 검색 (Daum 연동)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta11","20","282","83","28",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBasAddr","265","282","448","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_maxlength("200");
            obj.set_cssclass("readonly");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_detl_addr","718","282",null,"28","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_maxlength("200");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSculZip","133","282","92","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearchPost","230","282","30","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_Find");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("webPost","226","312","284","258",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","10","0","221","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("우편번호 검색 (Daum 연동)");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","10","35",null,"210","10",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("1.화면에 Daum의 우편번호 페이지를 호출 할 수 있도록 WebBrowser 컴포넌트를 생성한다.\r\n2.찾기 버튼 클릭시 공통함수를 호출한다. this.gfnPostSearch(this.webPost);\r\n3.WebBrowser의 onusernotify함수에서 e.userdata로 넘어온 값을 \":::\"구분자로 잘라서 값을 넣어준다.\r\n   array[1]=>구우편번호 앞 3자리\r\n   array[2]=>구우편번호 뒷 3자리\r\n   array[3]=>신규우편번호\r\n   array[4]=>도로명주소\r\n   array[5]=>지번주소\r\n   array[6]=>조합형 주소여부에 따른 주소");
            obj.set_cssclass("sta_WF_Desc");
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
        this.registerScript("SamplePostDaum.xfdl", function() {
        /**
        *  Nexacro Professional Training Couse
        *  @MenuPath    개발가이드 > 컴포넌트 및 연동 > 우편번호 검색 (Daum 연동)
        *  @FileName 	SamplePostDaum.xfdl
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
        	this.gfnPostSearchDaum(this.webPost);
        };

        /**
         * @description 우편번호 선택 시 호출
        */
        this.webPost_onusernotify = function(obj,e)
        {
        	var strPost = e.userdata;
        	trace("strPost ==> " + strPost);
        	// e.userdata==>OK!!!:::서울특별시 송파구 백제고분로36가길 9, 101 (석촌동, 스카이타워):::서울특별시 송파구 백제고분로36가길 9:::(석촌동, 스카이타워):::9, Baekjegobun-ro 36ga-gil, Songpa-gu, Seoul:::서울특별시 송파구 석촌동 58-33 스카이타워:::05614:::101
        	if (strPost.indexOf("OK!!!:::") == 0)
        	{
        		/*
        		 //e.userdata ==>(식별자 ::: 구우편번호 앞 3자리 ::: 구우편번호 뒷 3자리 :::  신규우편번호 ::: 도로명주소 ::: 지번 주소 ::: 조합형 주소여부에 따른 주소)
        		 */
        		var aAddr = strPost.split(":::");

        		trace("onusernotify -------------------------------------------");
        		trace("array[1]=>구우편번호 앞 3자리          ==> " +	aAddr[1] );
        		trace("array[2]=>구우편번호 뒷 3자리          ==> " +	aAddr[2] );
        		trace("array[3]=>신규우편번호                  ==> " + aAddr[3] );
        		trace("array[4]=>도로명주소                    ==> " +	aAddr[4] );
        		trace("array[5]=>지번주소                      ==> " +	aAddr[5] );
        		trace("array[6]=>조합형 주소여부에 따른 주소	==> " +	aAddr[6] );
        		trace("-------------------------------------------------------");

        		this.edtSculZip.set_value(aAddr[3]);	// 신규 우편번호
        		this.edtBasAddr.set_value(aAddr[6]);	// 조합형 주소여부에 따른 주소
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnSearchPost.addEventHandler("onclick",this.btn_searchPost_onclick,this);
            this.webPost.addEventHandler("onusernotify",this.webPost_onusernotify,this);
        };
        this.loadIncludeScript("SamplePostDaum.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
