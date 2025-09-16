(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frameTop");
            this.set_titletext("frameTop");
            this.set_scrolltype("none");
            this.set_scrollbartype("none");
            this.set_background("#f3f5f6");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,50);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMenu", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new XPush("XPush00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staBg","0","0",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_TF_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnPre",null,"13","24","24","351",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_visible("true");
            obj.set_cssclass("btn_TF_Prev");
            this.addChild(obj.name, obj);

            obj = new Button("btnNex",null,"13","24","24","327",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_visible("true");
            obj.set_cssclass("btn_TF_Next");
            this.addChild(obj.name, obj);

            obj = new Static("staName",null,"15","120","20","90",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("교육사업팀 홍길동");
            obj.set_cssclass("sta_TF_UserInfo");
            this.addChild(obj.name, obj);

            obj = new Button("btnLogOut",null,"15","80","20","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.getSetter("uWord").set("frame.logOut");
            obj.set_cssclass("btn_TF_Logout");
            obj.set_text("로그아웃");
            this.addChild(obj.name, obj);

            obj = new Div("divTopBtn","210","14",null,"22","408",null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","370","-4","120","26",null,null,null,null,null,null,this.divTopBtn.form);
            obj.set_taborder("0");
            obj.set_text("btn00");
            this.divTopBtn.addChild(obj.name, obj);

            obj = new Static("staLogo","0","0","248","50",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_Main_Logo");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnNotice",null,"13","24","24","218",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_TF_PushN");
            this.addChild(obj.name, obj);

            obj = new Static("staPushCount",null,"6","18","14","210",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("3");
            obj.set_cssclass("sta_TF_PushCount");
            this.addChild(obj.name, obj);

            obj = new TextArea("taLog","210","5","350","45",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTopBtn.form
            obj = new Layout("default","",0,0,this.divTopBtn.form,function(p){});
            this.divTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1300,50,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FrameTop.xfdl", function() {
        /**
        *  Nexacro Professional Training Couse
        *  @MenuPath    Frame > FrameTop
        *  @FileName    FrameTop.xfdl
        *  @Creator    TOBESOFT Education
        *  @CreateDate    2022/12/22
        *  @Desction    Top 메뉴 화면
        ************** 소스 수정 이력 ***********************************************
        *  date                Modifier                Description
        *******************************************************************************
        *  2022/12/22             TOBESOFT Education            최초 생성
        *******************************************************************************
        */




        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.fvObjApp       = this.gfnGetApplication();
        this.fvTopBtnPrefix = "TOP_";

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        /**
         * @description 화면 onload시 처리내역(필수)
        */
        this.form_onload = function(obj,e)
        {
           this.divTopBtn.form.set_scrollbartype("none");

           //XPush Message 송/수신을 위한 Layout세팅

           if ((nexacro._OS == "Android" || nexacro._OS == "iOS") && (nexacro._Browser == "Runtime"))
           {
              this.XPush00.set_layouturl("%USERAPP%XPushUrl/XPush_Message_Layout.xml");
           } else
           {
              this.XPush00.set_layouturl("XPushUrl::XPush_Message_Layout.xml");
           }
        };

        this.fn_XPushStart = function()
        {
           this.XPush00.set_projectid("TOBE_EDU");
           this.taLog.set_value("projectid : [" + this.XPush00.projectid + "]\nprotocol version : [" + this.XPush00.protocolversion + "]");
           this.XPush00.set_protocolversion(3);
           this.taLog.set_value("projectid : [" + this.XPush00.projectid + "]\nprotocol version : [" + this.XPush00.protocolversion + "]");
           this.XPush00.set_iplist("tcp://localhost:50001, http://localhost:50000");

           /*
            * connection 성공, 실패는 event 에서 발생
            */
           this.XPush00.connect("User01", "..."); //비번은 의미없음
        }
        /**
         * @description 화면 onsize시 처리
        */
        this.form_onsize = function(obj,e)
        {
           this.fnRedrawBtn();
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/
        /**
         * @description 메세지 콜백
        */
        this.fnMsgCallback = function (strId, strVal)
        {
           if(strId == "confirm.logout"){
              if(strVal){
                  this.fvObjApp.gvLogOut = "Y";
                 this.fvObjApp.exit();
              }
              else{
                 this.fvObjApp.gvLogOut = "N";
              }
           }
        };

        /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
         * 로그인 사용자 세팅
         * @return
         * @example
         *
         * @memberOf
         */
        this.fnSetName = function()
        {
           var sNameCol = "USER_NAME";
           // 다국어 처리
           var sNowLang = nexacro.getEnvironmentVariable("evLanguage");
           if (sNowLang != "KO") {
              sNameCol = sNameCol+sNowLang;
           }

           var sName  = this.fvObjApp.gdsUserInfo.getColumn(0, sNameCol);
           this.staName.set_text("교육사업팀 " + sName);   //다국어 처리 안함
        };

        /**
         * menu tab 버튼 첫번째 index 가져오는 함수
         * @public
         * @return
         * @example
         * @memberOf
         */
        this.fnGetFirstTabIndex = function ()
        {
           for(var i=0; i<this.dsMenu.rowcount;i++)
           {
              var objID   = this.dsMenu.getColumn(i, this.FRAME_MENUCOLUMNS.menuId);
              var objBtn  = this.fnFindObj(this.fvTopBtnPrefix + objID);
              if(0 <= objBtn.left) {
                 return i;
              }
           }
           return -1;
        };

        /**
         * 버튼 첫번째 이동 함수
         * @public
         * @return
         * @example
         * @memberOf
         */
        this.fnMoveFirst = function (nMoveIdx)
        {
           var nIndex;
           var objID;
           var objBtn;
           var tabFirstObj;

           nIndex = this.fnGetFirstTabIndex();
           if (nIndex < 0){
              return;
           }

           if (nMoveIdx < 0) {
              return;
           }
           if (nMoveIdx >= this.dsMenu.rowcount) {
              return;
           }

           objID = this.dsMenu.getColumn(nIndex, this.FRAME_MENUCOLUMNS.menuId);
           var tabFirstObj = this.fnFindObj(this.fvTopBtnPrefix + objID);

           objID = this.dsMenu.getColumn(nMoveIdx, this.FRAME_MENUCOLUMNS.menuId);
           objBtn = this.fnFindObj(this.fvTopBtnPrefix + objID);

           var nShiftPos = objBtn.getOffsetLeft() - tabFirstObj.getOffsetLeft();

           for (var i = 0; i < this.dsMenu.rowcount; i++)
           {
              objID = this.dsMenu.getColumn(i, this.FRAME_MENUCOLUMNS.menuId);
              objBtn = this.fnFindObj(this.fvTopBtnPrefix + objID);
              objBtn.move(objBtn.getOffsetLeft() - nShiftPos, objBtn.getOffsetTop());
           }
        };

        /**
         * 버튼 redraw
         * @public
         * @param
         * @return
         * @example
         * @memberOf
         */
        this.fnRedrawBtn = function ()
        {
           this.fnCheckShowBtnAll();
           this.fnSetSpinBtnShow();
        };

        /**
         * 모든 버튼 체크
         * @public
         * @param
         * @return
         * @example
         * @memberOf
         */
        this.fnCheckShowBtnAll = function ()
        {
           if (this.dsMenu.rowcount == 0) return;

           var tabFirstObj = this.fnFindObj(this.fvTopBtnPrefix + this.dsMenu.getColumn(0, this.FRAME_MENUCOLUMNS.menuId));
           var tabLastObj = this.fnFindObj(this.fvTopBtnPrefix + this.dsMenu.getColumn(this.dsMenu.rowcount - 1, this.FRAME_MENUCOLUMNS.menuId));
           var nLeft = tabFirstObj.getOffsetLeft();
           var nRight = tabLastObj.getOffsetRight();

           if (this.divTopBtn.getOffsetWidth() >= (nRight - nLeft))
           {
              this.fnMoveFirst(0);
              return;
           }
        };

        /**
         * spin 버튼 visible 처리
         * @public
         * @return
         * @example
         * @memberOf
         */
        this.fnSetSpinBtnShow = function ()
        {
           var objBtn;

           if(this.dsMenu.rowcount == 0)
           {
              this.btnPre.set_enable(false);
              this.btnNex.set_enable(false);
              return;
           }

           objBtn = this.fnFindObj(this.fvTopBtnPrefix + this.dsMenu.getColumn(this.dsMenu.rowcount - 1, this.FRAME_MENUCOLUMNS.menuId));

           if(this.divTopBtn.getOffsetWidth() < objBtn.getOffsetRight())
           {
              this.btnNex.set_enable(true);
           }
           else
           {
              this.btnNex.set_enable(false);
           }

           objBtn = this.fnFindObj(this.fvTopBtnPrefix + this.dsMenu.getColumn(0, this.FRAME_MENUCOLUMNS.menuId));

           if(objBtn.getOffsetLeft() < 0)
           {
              this.btnPre.set_enable(true);
           }
           else
           {
              this.btnPre.set_enable(false);
           }
        };

        /**
         * topmenu를 dsMenu로 copy
         * @public
         * @return
         * @example
         * @memberOf
         */
        this.fnLoad = function ()
        {
           this.fvObjApp.gdsMenu.filter(this.FRAME_MENUCOLUMNS.menuLevel + "==0");
           this.dsMenu.copyData(this.fvObjApp.gdsMenu, true);
           this.fvObjApp.gdsMenu.filter("");
           this.fnSetTopMenu();
        };

        /**
         * topmenu세팅
         * @public
         * @return
         * @example
         * @memberOf
         */
        this.fvFirstMenu;

        this.fnSetTopMenu = function ()
        {
           var btnObj;
           for(var i=0; i<this.dsMenu.getRowCount(); i++)
           {
              var strID = this.dsMenu.getColumn(i, this.FRAME_MENUCOLUMNS.menuId);

              // 첫번째 메뉴
              if (i == 0) this.fvFirstMenu = this.fvTopBtnPrefix + strID;

              // 다국어 처리
              var sMenuNameColumn = this.FRAME_MENUCOLUMNS.menuNm;
              var sNowLang        = nexacro.getEnvironmentVariable("evLanguage");
              if (sNowLang != "KO") {
                 sMenuNameColumn = sMenuNameColumn + sNowLang;
              }
              var strName = this.dsMenu.getColumn(i, sMenuNameColumn);
              this.fnCreateTopMenu(strID, strName, i);
           }

           //첫번째 메뉴 선택
           var objFirstMenu = this.divTopBtn.form[this.fvFirstMenu];
           objFirstMenu.click();
           objFirstMenu.setSelectStatus(true);

           this.fnRedrawBtn();
        };



        // Top menu creation
        this.fvMenuLeft = 50;
        this.fnCreateTopMenu = function (strID, strName, index)
        {
           // Creating Top Menu button
           var objBtn = new Button();

           var objSize = nexacro.getTextSize(strName, "bold 15px 'Verdana', 'Malgun Gothic'");
           objBtn.init(this.fvTopBtnPrefix + strID, this.fvMenuLeft, 0, objSize.nx, objSize.ny);
           this.fvMenuLeft = this.fvMenuLeft+ objSize.nx + 80;

           this.divTopBtn.addChild(objBtn.name, objBtn);
           objBtn.set_text(strName);
           objBtn.menuid = strID;
           objBtn.set_cssclass("btn_TF_Menu");
           objBtn.set_textAlign("center");
           objBtn.setEventHandler("onclick", this.Button_onclick, this);
           objBtn.set_visible(true);
           objBtn.show();
        };

        this.fnSetActiveBtn = function (menuId)
        {
           var MenuObj;

           for (var i=0; i<this.dsMenu.getRowCount(); i++)
           {
              MenuObj = this.fnFindObj(this.fvTopBtnPrefix + this.dsMenu.getColumn(i, this.FRAME_MENUCOLUMNS.menuId));

              if (menuId == this.dsMenu.getColumn(i, this.FRAME_MENUCOLUMNS.menuId)){
                 MenuObj.setSelectStatus(true);
                 //MenuObj.set_cssclass("btn_TF_Mnu");
              }
              else {
                 MenuObj.setSelectStatus(false);
                 //MenuObj.set_cssclass("btn_TF_Mnu");
              }
           }
        };

        // button을 반환
        this.fnFindObj = function (strId)
        {
           return this.divTopBtn.form.components[strId];
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        this.btnLogOut_onclick = function(obj,e)
        {
           if(system.navigatorname == "nexacro"){
              var sMsgId = "confirm.logout";         //메세지ID
              var arrArg = "";                  //메세지취환될값 배열[생략가능]
              var sPopId = sMsgId;               //메세지팝업ID[생략가능]   *해당화면에서 메시지 중복사용시 구분되는값을 넣어줘야함
              var sMsgCallback = "fnMsgCallback";      //메세지콜백[생략가능]       * confirm성 메시지를 사용 시 반드시 필요

              // 로그아웃 하시겠습니까?
              this.gfnAlert(sMsgId, arrArg, sPopId, sMsgCallback);
           }
           else{
              window.top.location.reload(true);
           }
        };

        this.Button_onclick = function (obj, e)
        {
           this.fvObjApp.avLeftFrame.form.fnChangeMenu(obj.menuid);
           this.fvObjApp.avLeftMinFrame.form.pdivMenu.form.fnChangeMenu(obj.menuid);
           this.fnSetActiveBtn(obj.menuid);
        };

        this.btnPre_onclick = function(obj,e)
        {
           this.fnMoveFirst(this.fnGetFirstTabIndex() - 1);
           this.fnRedrawBtn();
        };

        this.btnNex_onclick = function(obj,e)
        {
           this.fnMoveFirst(this.fnGetFirstTabIndex() + 1);
           this.fnRedrawBtn();
        };

        /**
         * @description 알림오픈버튼 클릭
        */
        this.btnNotice_onclick = function(obj,e)
        {
           var objTagetForm = this.fvObjApp.avMainFrame.form;
           //업무화면 활성화시 target 변경
           if(this.fvObjApp.avVFrameSet1.separatesize == "40,0,*"){
              objTagetForm = this.fvObjApp.avWorkFrame.getActiveFrame().form;
           }

           var bAni = true;
           //this.btnNotice.u_showYn 으로 표시 여부 제어
           if (this.btnNotice.u_showYn == "Y"){
              this.fnSetNoticeShow(objTagetForm, false, bAni)
           }
           else{
              this.fnSetNoticeShow(objTagetForm, true, bAni)
           }
        };

        /**
         * @description  알림여부에 맞게 알림창 초기화
         * @param  {object} objTargetForm 타겟form
         * @return none
         */
        this.fnInitNoticeShow = function(objTargetForm)
        {
           var objForm = objTargetForm;
           var bShow   = this.fnGetNoticeShow();
           var bAni    = false;
           this.fnSetNoticeShow(objForm, bShow, bAni);
        }

        /**
         * @description  현재알림상태 정보 리턴
         * @param  none
         * @return {boolean} 여부
         */
        this.fnGetNoticeShow = function()
        {
           if (this.btnNotice.u_showYn == "Y"){
              return true;
           }
           return false;
        }


        /**
         * @description  현재알림상태 정보 셋팅
         * @param  {object} objForm 적용form
         * @param  {boolean} bShow 표시여부
         * @param  {boolean} bAni 애니메이션 적용여부
         * @return none
         */
        this.fnSetNoticeShow = function(objForm, bShow, bAni)
        {
           //표시여부 셋팅 및 디자인적용
           if (bShow){
              this.btnNotice.u_showYn = "Y";                           //알림적용여부(u_showYn : 유저프로퍼티로 사용)
              //objForm.divNotice.form.staNotice.set_text("공지사항입니다.");   //알림내용 바꿔야 함
           }
           else{
              this.btnNotice.u_showYn = "N";
           }

           //animation 이용여부에 따른 표시 동작호출
           if (bAni){
              this.fnCreateAniObject(objForm);
              if (bShow){
                 objForm.aniShow.play();
              }
              else{
                 objForm.aniHide.play();
              }
           }
           else{
              if (bShow){
                 objForm.divNotice.set_height(150);
              }
              else{
                 objForm.divNotice.set_height(0);
              }
           }
        }

        this.fnCreateAniObject = function(objForm)
        {
           //animation 미존재시 추가
           if (!objForm.aniShow){
              var objAniShow = new nexacro.Animation("aniShow", objForm);
              objForm.addChild("aniShow", objAniShow);
              objForm.aniShow.addTarget("AniItem01", objForm.divNotice, "height:120");
              objForm.aniShow.setEventHandler("oncomplete"
                                   ,    function(obj,e)
                                      {
                                         //trace("끝1");
                                      }
                                   , objForm);

              objForm.aniShow.set_duration(500);

              var aniObj01 = new nexacro.Animation("aniHide", objForm);
              objForm.addChild("aniHide", aniObj01);
              objForm.aniHide.addTarget("AniItem01", objForm.divNotice, "height:0");
              objForm.aniHide.setEventHandler("oncomplete"
                                   ,    function(obj,e)
                                      {
                                         //trace("끝2");
                                      }
                                   , objForm);
              objForm.aniHide.set_duration(500);
           }
        };

        this.btn00_onclick = function(obj,e)
        {
           this.fn_XPushStart();
        };
        this.XPush00_onsuccess = function(obj,e)
        {
        /*
           alert("XPush00_onsuccess Event\n" +
                 " - eventid: " + e.eventid + "\n" +
                 " - statuscode: " + e.statuscode + "\n" +
                 " - errormsg: " + e.errormsg + "\n" +
                 " - reason: " + e.reason + "\n" +
                 " - action: " + e.action + "\n" +
                 " - serverip: " + e.serverip + "\n" +
                 " - serverport: " + e.serverport + "\n" +
                 " - e.message: " + e.message + "\n" +
                 " - e.command : " + e.command + "\n" +
                 " - e.message : " + e.message + "\n" +
                 " - e.returnvalue : " + e.returnvalue);
        */
           if(e.message != null) {
              this.taLog.set_value( "e.message != null\n" +
                 " - e.message.messagetype: " + e.message.messagetype + "\n" +
                 " - e.message.messagekey: " + e.message.messagekey + "\n" +
                 " - e.message.messageid: " + e.message.messageid + "\n" +
                 " - e.message.returnvalue: " + e.message.returnvalue + "\n" +
                 " - e.message.devicetoken: " + e.message.devicetoken
              )
           }

           if( e.action == 0 ) {
              this.taLog.set_value("connect() success");
              var objApp = nexacro.getApplication();
              this.XPush00.subscribe("9999", "ALL", this, objApp.gdsXpushManage, "append", "fn_push_callback");
           }
           if( e.action == 1 ) {
              this.taLog.set_value("disconnect() success");
           }
           if( e.action == 2) {
              this.taLog.set_value("subscribe() success");
              var ret = this.XPush00.registerTopic("9999", "ALL");
           }
           if( e.action == 3) {
              this.taLog.set_value("unsubscribe() success");
           }
           if( e.action == 4) {
              this.taLog.set_value("requestMessage() success");
           }
           if( e.action == 5) {
              this.taLog.set_value("sendResponse() success");
           }
           if( e.action == 6) {
              this.taLog.set_value("reqisterDevice() success");
           }
           if( e.action == 7) {
              this.taLog.set_value("unreqisterDevice() success");
           }
           if( e.action == 8) {
              this.taLog.set_value("reqisterUser() success");
              this.XPush00.requestMessage("9999", "ALL");
           }
           if( e.action == 9) {
              this.taLog.set_value("unreqisterUser() success");
           }
           if( e.action == 10) {
              this.taLog.set_value("requestMessageCount() success");
              if(e.message.returnvalue != undefined || e.message.returnvalue != null) {
                 var returnvalue = e.message.returnvalue;
                 this.taLog.set_value("length : " + returnvalue.length);
                 for(var i = 0; i < returnvalue.length; i++) {
                    this.taLog.set_value("index:" + i + " : " + returnvalue[i].topictype + " : " + returnvalue[i].topicid + " : " + returnvalue[i].count);
                 }
              }
           }
        };


        // e.statuscode------------------------------------
        // -100 - Push 서버가 “Byec”를 보냈거나 서버와의 규약에 따라 종료되었습니다. (e.action이 -1임)
        // -101 - 타임아웃 처리되었습니다.
        // -200 - Command Auth Error. 현재 선택된 IP에 대해인증에 오류가 발생하였습니다.
        // -201 - iplist 속성에 등록되어 있는 Push 서버로의 접속이 모두 실패했습니다.
        // -202 - 데이터 전송 채널 인증(authentication)에 오류가 발생하였습니다.
        // -300 - 서버로의 접속에 실패했습니다.
        // -301 - 패킷 전송(send/recv) 오류가 발생하였습니다.
        // -302 - 이미 PUSH서버에 접속되어 있습니다.
        // -401 - X-PUSH 서버와 접속해제(disconnect) 요청을 실패했습니다.
        // -501 - X-PUSH 서버로부터 메시지 수신중단(suspend) 요청을 실패했습니다.
        // -601 - X-PUSH 서버로부터 메시지 수신 재시작(resume) 요청을 실패했습니다.
        // -701 - X-PUSH 서버로 topic 등록/등록해제 요청을 실패했습니다.
        // -801 - 메시지 포맷 버전 정보가 일치하지 않습니다.
        // -901 - 신뢰성 메시지에 대한 수신응답 전송에 실패했습니다.
        // -902 - 미수신 메시지 요청을 실패했습니다.
        // -1001 - X-PUSH 서버로 모바일 DeviceToken 정보 등록요청을 실패했습니다.
        // -1002 - X-PUSH 서버로 유저 topic 정보 등록요청(reqisterUser)이 실패했습니다.
        // -1003 - X-PUSH 서버로 유저 topic 정보 등록해제(unregisterUser)요청이 실패했습니다.
        // -1004 - 미수신 메시지 정보요청을 실패했습니다.
        // -1072 - 디바이스 등록(RGST)시 중복된 경우 발생. registerDevice 기등록 정상오류
        // -1092 - registerTopic 기등록 정상오류
        this.XPush00_onerror = function(obj,e)
        {
        //   this.taLog.set_value("");
           this.taLog.set_value(this.taLog.value + "\n" + "XPush00_onerror Event\n" +
                 " - eventid: " + e.eventid + "\n" +
                 " - statuscode: " + e.statuscode + "\n" +
                 " - errormsg: " + e.errormsg + "\n" +
                 " - reason: " + e.reason + "\n" +
                 " - action: " + e.action + "\n" +
                 " - serverip: " + e.serverip + "\n" +
                 " - serverport: " + e.serverport + "\n" +
                 " - e.message: " + e.message + "\n" +
                 " - e.command : " + e.command + "\n" +
                 " - e.message : " + e.message + "\n" +
                 " - e.returnvalue : " + e.returnvalue);
           if(e.message != null) {
              this.taLog.set_value( "e.message != null\n" +
                 " - e.message.messagetype: " + e.message.messagetype + "\n" +
                 " - e.message.messagekey: " + e.message.messagekey + "\n" +
                 " - e.message.messageid: " + e.message.messageid + "\n" +
                 " - e.message.devicetoken: " + e.message.devicetoken
              )
           }

        	if(e.statuscode == -302){
        		var objApp = nexacro.getApplication();
        		this.XPsuh.subscribe("9999", "ALL", objApp.gdsXpushManage, "append", "fn_push_callback");
        	}
        	else if(e.statuscode == -100){
        		this.fn_XPushStart();
        	}


           if( e.action == 0 ) {
              this.taLog.set_value(this.taLog.value + "\n" +  "connect() error");
           }
           if( e.action == 1 ) {
              this.taLog.set_value(this.taLog.value + "\n" + "disconnect() error");
           }
           if( e.action == 2) {
              this.taLog.set_value(this.taLog.value + "\n" + "subscribe() error");
        	  var ret = this.XPush00.registerTopic("9999", "ALL");
           }
           if( e.action == 3) {
              this.taLog.set_value(this.taLog.value + "\n" + "unsubscribe() error");
           }
           if( e.action == 4) {
              this.taLog.set_value(this.taLog.value + "\n" + "requestMessage() error");
           }
           if( e.action == 5) {
              this.taLog.set_value(this.taLog.value + "\n" + "sendResponse() error");
           }
           if( e.action == 6) {
              this.taLog.set_value(this.taLog.value + "\n" + "reqisterDevice() error");
           }
           if( e.action == 7) {
              this.taLog.set_value(this.taLog.value + "\n" + "unreqisterDevice() error");
           }
           if( e.action == 8) {
              this.taLog.set_value(this.taLog.value + "\n" + "reqisterUser() error");
        	  this.XPush00.requestMessage("9999", "ALL");
           }
           if( e.action == 9) {
              this.taLog.set_value(this.taLog.value + "\n" + "unreqisterUser() error");
           }
        };

        this.XPush00_onkeepalive = function(obj,e)
        {
              this.taLog.set_value("KEEP");
        };


        this.fn_push_callback = function(Row, ChangeColumn, AllColumns, Type, ActionType, MessageId)
        {
        	this.staPushCount.set_text(nexacro.getApplication().gdsXpushManage.rowcount);
        	//this.staPushCount.set_text(nexacro.getApplication().gdsXpushManage.getrowcount());

            this.taLog.set_value("XPush00_push_callback\n" +
              " - ActionType : " + ActionType + "\n" +
              " - Row : " + Row + "\n" +
              " - MessageId : " + MessageId + "\n" +
              "\n" +
              nexacro.getApplication().gdsXpushManage.saveXML()
           );


           if(ActionType == "PUSH")
           {
              //trace(this.dsMessage.saveXML());
           }
           if(ActionType == "RELI")
           {
              // 수신 확인 메시지 전송
              this.XPush00.sendResponse(MessageId)
           }
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.staBg.addEventHandler("onclick",this.staBg_onclick,this);
            this.btnPre.addEventHandler("onclick",this.btnPre_onclick,this);
            this.btnNex.addEventHandler("onclick",this.btnNex_onclick,this);
            this.btnLogOut.addEventHandler("onclick",this.btnLogOut_onclick,this);
            this.divTopBtn.addEventHandler("onclick",this.div_Tab_onclick,this);
            this.divTopBtn.form.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btnNotice.addEventHandler("onclick",this.btnNotice_onclick,this);
            this.XPush00.addEventHandler("onerror",this.XPush00_onerror,this);
            this.XPush00.addEventHandler("onkeepalive",this.XPush00_onkeepalive,this);
            this.XPush00.addEventHandler("onsuccess",this.XPush00_onsuccess,this);
        };
        this.loadIncludeScript("FrameTop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
