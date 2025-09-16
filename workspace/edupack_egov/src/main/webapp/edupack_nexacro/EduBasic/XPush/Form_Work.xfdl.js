(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMessage", this);
            obj._setContents("<ColumnInfo><Column id=\"TOPIC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_01\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_02\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new XPush("XPush00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_projectID_protocolversion_check","19","39","981","68",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("프로젝트 아이디, 프로토콜 버전 확인");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_setprojectid","20","117","727","77",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_value("red_project");
            obj.set_text("red_project");
            this.addChild(obj.name, obj);

            obj = new Button("btn_setprojectid","768","117","231","77",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("프로젝트 아이디 세팅");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_setprotocolversion","20","207","727","77",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_value("3");
            obj.set_text("3");
            this.addChild(obj.name, obj);

            obj = new Button("btn_setprotocolversion","768","207","231","77",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("프로토콜 버전 세팅");
            this.addChild(obj.name, obj);

            obj = new Edit("loginUserID","170","317","580","77",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_value("20200101");
            obj.set_text("20200101");
            this.addChild(obj.name, obj);

            obj = new Edit("IpPort","170","407","580","77",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_value("192.168.1.8:10081");
            obj.set_text("192.168.1.8:10081");
            this.addChild(obj.name, obj);

            obj = new Button("btn_connect","768","317","112","163",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("xpush 연결 접속");
            this.addChild(obj.name, obj);

            obj = new Button("btn_disconnect","888","317","112","163",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("xpush 연결 종료");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","24","328","131","59",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("User ID\r\n(개인 사번)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","24","418","131","59",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Address:Port\r\n(172.10.12.24:10081)");
            this.addChild(obj.name, obj);

            obj = new Edit("topicTYPE","170","507","829","77",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_value("NOTI");
            obj.set_text("NOTI");
            this.addChild(obj.name, obj);

            obj = new Edit("topicID","170","597","829","77",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_value("20200101");
            obj.set_text("20200101");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","24","518","131","59",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("topic Type");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","24","608","131","59",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("topic id");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","18","491","981","5",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_background("black");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","18","681","981","5",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_background("black");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ADDF","139","696","112","81",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("토픽 등록");
            this.addChild(obj.name, obj);

            obj = new Button("btn_DELF","258","696","112","81",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("토픽 삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_REQD","384","696","112","81",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("미수신 메시지 요청");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ADUI","510","696","112","81",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("사용자 등록");
            this.addChild(obj.name, obj);

            obj = new Button("btn_UNUI","634","696","112","81",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("사용자 삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_MSGC","764","696","112","81",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("미수신 메시지 개수");
            this.addChild(obj.name, obj);

            obj = new Button("btn_RGST","888","696","112","81",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("디바이스 등록");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01","20","787","727","77",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_value("message ID");
            obj.set_text("message ID");
            this.addChild(obj.name, obj);

            obj = new Button("btn_RECT","768","787","231","77",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("수신 확인 메시지");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","21","904","979","101",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_binddataset("dsMessage");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"TOPIC_ID\"/><Cell col=\"1\" text=\"DATA_01\"/><Cell col=\"2\" text=\"DATA_02\"/></Band><Band id=\"body\"><Cell text=\"bind:TOPIC_ID\"/><Cell col=\"1\" text=\"bind:DATA_01\"/><Cell col=\"2\" text=\"bind:DATA_02\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","18","881","981","5",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_background("black");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","18","1021","981","5",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_background("black");
            this.addChild(obj.name, obj);

            obj = new Edit("UserID","20","1067","220","77",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_value("user01");
            obj.set_text("user01");
            this.addChild(obj.name, obj);

            obj = new Edit("ProjectID","270","1067","220","77",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_value("red_project");
            obj.set_text("red_project");
            this.addChild(obj.name, obj);

            obj = new Edit("TopicType","530","1067","220","77",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_value("NOTI");
            obj.set_text("NOTI");
            this.addChild(obj.name, obj);

            obj = new Edit("TopicId","780","1067","220","77",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_value("ALL");
            obj.set_text("ALL");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","24","1018","131","59",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("User ID");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","274","1018","131","59",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("project ID");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00","534","1018","131","59",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("Topic Type");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00_00","784","1018","131","59",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("Topic ID");
            this.addChild(obj.name, obj);

            obj = new Button("btn_admin_ADUI","18","1157","312","77",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("관리자 사용자 등록");
            this.addChild(obj.name, obj);

            obj = new Button("btn_admin_UNUI","348","1157","312","77",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("관리자 사용자 삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_admin_MSGC","678","1157","312","77",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("관리자 미수신 메시지 갯수 조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layout","19","696","112","81",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("레이아웃등록");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","18","301","981","5",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_background("black");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","screen_desktop",800,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Work.xfdl", function() {

        this.btn_projectID_protocolversion_check_onclick = function(obj,e)
        {
        	alert("projectid : [" + this.XPush00.projectid + "]\nprotocol version : [" + this.XPush00.protocolversion + "]");
        };

        this.btn_setprojectid_onclick = function(obj,e)
        {
        	this.XPush00.set_projectid(this.edit_setprojectid.value);
        	alert("projectid : [" + this.XPush00.projectid + "]\nprotocol version : [" + this.XPush00.protocolversion + "]");
        };

        this.btn_setprotocolversion_onclick = function(obj,e)
        {
        	this.XPush00.set_protocolversion(this.edit_setprotocolversion.value);
        	alert("projectid : [" + this.XPush00.projectid + "]\nprotocol version : [" + this.XPush00.protocolversion + "]");
        };

        this.btn_connect_onclick = function(obj,e)
        {
        	//this.XPush00.set_iplist("172.10.12.24:10081");
        	//this.XPush00.set_iplist("172.10.12.24:10081, 59.10.169.66:10081");
        	//this.XPush00.set_iplist("tcp://172.10.12.24:10081");
        	//this.XPush00.set_iplist("tcps://172.10.12.24:10081");
        	//this.XPush00.set_iplist("http://172.10.12.24:10081");
        	//this.XPush00.set_iplist("https://172.10.12.24:10081");
        	this.XPush00.set_iplist( this.IpPort.value )

        	/*
        	 * connection 성공, 실패는 event 에서 발생
        	 */
        	this.XPush00.connect(this.loginUserID.value, "...");
        };

        this.btn_disconnect_onclick = function(obj,e)
        {
        	this.XPush00.disconnect();
        };



        this.XPush00_onkeepalive = function(obj,e)
        {
        	trace("KEEP");
        };

        this.XPush00.set_iplist( this.IpPort.value )

        	/*
        	 * connection 성공, 실패는 event 에서 발생
        	 */
        	this.XPush00.connect(this.loginUserID.value, "..."); //비번은 의미없음



        // e.action---------------------------------------------------------------------------
        // XPushAction.AUTH (0) 	- connect()					: 연결 접속
        // XPushAction.BYEC (1) 	- disconnect()				: 연결 종료
        // XPushAction.ADDF (2) 	- subscribe()				: 토픽 등록
        // XPushAction.DELF (3) 	- unsubscribe()				: 토픽 삭제
        // XPushAction.REQD (4) 	- requestMessage()			: 미수신메시지 요청
        // XPushAction.RECT (5) 	- sendResponse()			: 수신확인 메시지
        // XPushAction.RGST (6) 	- reqisterDevice()			: 모바일 토큰 등록
        // XPushAction.UNRG (7) 	- unreqisterDevice()		: 모바일 토큰 삭제
        // XPushAction.ADUI (8) 	- reqisterUser()			: 사용자 등록 추가
        // XPushAction.UNUI (9) 	- unreqisterUser()			: 사용자 등록 삭제
        // XPushAction.MSGC (10)	- requestMessageCount()		: 미수신 메시지 개수 요청
        this.XPush00_onsuccess = function(obj,e)
        {
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
        	if(e.message != null) {
        		alert( "e.message != null\n" +
        			" - e.message.messagetype: " + e.message.messagetype + "\n" +
        			" - e.message.messagekey: " + e.message.messagekey + "\n" +
        			" - e.message.messageid: " + e.message.messageid + "\n" +
        			" - e.message.returnvalue: " + e.message.returnvalue + "\n" +
        			" - e.message.devicetoken: " + e.message.devicetoken
        		)
        	}

        	if( e.action == 0 ) {
        		alert("connect() success");

        	}
        	if( e.action == 1 ) {
        		alert("disconnect() success");
        	}
        	if( e.action == 2) {
        		alert("subscribe() success");
        	}
        	if( e.action == 3) {
        		alert("unsubscribe() success");
        	}
        	if( e.action == 4) {
        		alert("requestMessage() success");
        	}
        	if( e.action == 5) {
        		alert("sendResponse() success");
        	}
        	if( e.action == 6) {
        		alert("reqisterDevice() success");
        	}
        	if( e.action == 7) {
        		alert("unreqisterDevice() success");
        	}
        	if( e.action == 8) {
        		alert("reqisterUser() success");
        	}
        	if( e.action == 9) {
        		alert("unreqisterUser() success");
        	}
        	if( e.action == 10) {
        		alert("requestMessageCount() success");
        		if(e.message.returnvalue != undefined || e.message.returnvalue != null) {
        			var returnvalue = e.message.returnvalue;
        			alert("length : " + returnvalue.length);
        			for(var i = 0; i < returnvalue.length; i++) {
        				alert("index:" + i + " : " + returnvalue[i].topictype + " : " + returnvalue[i].topicid + " : " + returnvalue[i].count);
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
        	alert("XPush00_onerror Event\n" +
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
        		alert( "e.message != null\n" +
        			" - e.message.messagetype: " + e.message.messagetype + "\n" +
        			" - e.message.messagekey: " + e.message.messagekey + "\n" +
        			" - e.message.messageid: " + e.message.messageid + "\n" +
        			" - e.message.devicetoken: " + e.message.devicetoken
        		)
        	}

        	if( e.action == 0 ) {
        		alert("connect() error");
        	}
        	if( e.action == 1 ) {
        		alert("disconnect() error");
        	}
        	if( e.action == 2) {
        		alert("subscribe() error");
        	}
        	if( e.action == 3) {
        		alert("unsubscribe() error");
        	}
        	if( e.action == 4) {
        		alert("requestMessage() error");
        	}
        	if( e.action == 5) {
        		alert("sendResponse() error");
        	}
        	if( e.action == 6) {
        		alert("reqisterDevice() error");
        	}
        	if( e.action == 7) {
        		alert("unreqisterDevice() error");
        	}
        	if( e.action == 8) {
        		alert("reqisterUser() error");
        	}
        	if( e.action == 9) {
        		alert("unreqisterUser() error");
        	}
        };

        this.btn_layout_onclick = function(obj,e)
        {
        	if (nexacro._OS == "Android" || nexacro._OS == "iOS")
        	{
        		this.XPush00.set_layouturl("%USERAPP%pushUrl/push_message_layout.xml");
        	}else
        	{
        		this.XPush00.set_layouturl("pushUrl::push_message_layout.xml");
        	}
        };

        this.btn_ADDF_onclick = function(obj,e)
        {
        	var topic_type = this.topicTYPE.value;
        	var topic_id = this.topicID.value;


        	this.XPush00.subscribe(topic_type, topic_id, this, this.dsMessage, "append", "fn_push_callback")
        };


        this.fn_push_callback = function(Row, ChangeColumn, AllColumns, Type, ActionType, MessageId)
        {
        	this.taLog.set_value("XPush00_push_callback\n" +
        		" - ActionType : " + ActionType + "\n" +
        		" - Row : " + Row + "\n" +
        		" - MessageId : " + MessageId + "\n" +
        		"\n" +
        		nexacro.getApplication().gdsXpushManage.saveXML()
        	);

        	trace(this.dsMessage.saveXML());

        	if(ActionType == "PUSH")
        	{

        	}
        	if(ActionType == "RELI")
        	{
        		// 수신 확인 메시지 전송
        		this.XPush00.sendResponse(MessageId)
        	}
        }

        this.btn_DELF_onclick = function(obj,e)
        {
        	var topic_type = this.topicTYPE.value;
        	var topic_id = this.topicID.value;

        	this.XPush00.unsubscribe(topic_type, topic_id, this, this.dsMessage, "append", "fn_push_callback");
        };

        this.btn_REQD_onclick = function(obj,e)
        {
        	this.XPush00.requestMessage(this.topicTYPE.value, this.topicID.value);
        };

        this.btn_ADUI_onclick = function(obj,e)
        {
        	var ret = this.XPush00.registerTopic(this.topicTYPE.value, this.topicID.value);
        };

        this.btn_UNUI_onclick = function(obj,e)
        {
        	this.XPush00.unregisterTopic(this.topicTYPE.value, this.topicID.value);
        };

        this.btn_MSGC_onclick = function(obj,e)
        {
        	this.XPush00.requestMessageCount(this.topicTYPE.value, this.topicID.value);
        };

        this.btn_RGST_onclick = function(obj,e)
        {
        	alert("deviceID : [" +  system.notificationtoken + "]");
        	this.XPush00.registerDevice();
        };

        this.btn_admin_ADUI_onclick = function(obj,e)
        {
        	var set_projectID = this.ProjectID.value;

        	if (set_projectID) {
        		var ret = this.XPush00.registerTopicWithUserID (this.TopicType.value, this.TopicId.value, this.UserID.value, set_projectID);
        	}else {
        		var ret = this.XPush00.registerTopicWithUserID (this.TopicType.value, this.TopicId.value, this.UserID.value);
        	}
        };

        this.btn_admin_UNUI_onclick = function(obj,e)
        {
        	var set_projectID = this.ProjectID.value;

        	if (set_projectID) {
        		var ret = this.XPush00.unregisterTopicWithUserID (this.TopicType.value, this.TopicId.value, this.UserID.value, set_projectID);
        	}else {
        		var ret = this.XPush00.unregisterTopicWithUserID (this.TopicType.value, this.TopicId.value, this.UserID.value);
        	}
        };

        this.btn_admin_MSGC_onclick = function(obj,e)
        {
        	var set_projectID = this.ProjectID.value;

        	if (set_projectID){
        		this.XPush00.requestMessageCountWithUserID (this.TopicType.value, this.TopicId.value, this.UserID.value, set_projectID);
        	}else {
        		this.XPush00.requestMessageCountWithUserID (this.TopicType.value, this.TopicId.value, this.UserID.value);
        	}
        };

        this.Form_Work_onload = function(obj,e)
        {
        	if (nexacro._OS == "Android" || nexacro._OS == "iOS")
        	{
        		this.XPush00.set_layouturl("%USERAPP%XPushUrl/XPush_Message_Layout.xml");
        	}else
        	{
        		this.XPush00.set_layouturl("XPushUrl::XPush_Message_Layout.xml");
        	}
        };

        this.btn_RECT_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Work_onload,this);
            this.btn_projectID_protocolversion_check.addEventHandler("onclick",this.btn_projectID_protocolversion_check_onclick,this);
            this.btn_setprojectid.addEventHandler("onclick",this.btn_setprojectid_onclick,this);
            this.btn_setprotocolversion.addEventHandler("onclick",this.btn_setprotocolversion_onclick,this);
            this.btn_connect.addEventHandler("onclick",this.btn_connect_onclick,this);
            this.btn_disconnect.addEventHandler("onclick",this.btn_disconnect_onclick,this);
            this.btn_ADDF.addEventHandler("onclick",this.btn_ADDF_onclick,this);
            this.btn_DELF.addEventHandler("onclick",this.btn_DELF_onclick,this);
            this.btn_REQD.addEventHandler("onclick",this.btn_REQD_onclick,this);
            this.btn_ADUI.addEventHandler("onclick",this.btn_ADUI_onclick,this);
            this.btn_UNUI.addEventHandler("onclick",this.btn_UNUI_onclick,this);
            this.btn_MSGC.addEventHandler("onclick",this.btn_MSGC_onclick,this);
            this.btn_RGST.addEventHandler("onclick",this.btn_RGST_onclick,this);
            this.btn_RECT.addEventHandler("onclick",this.btn_RECT_onclick,this);
            this.btn_admin_ADUI.addEventHandler("onclick",this.btn_admin_ADUI_onclick,this);
            this.btn_admin_UNUI.addEventHandler("onclick",this.btn_admin_UNUI_onclick,this);
            this.btn_admin_MSGC.addEventHandler("onclick",this.btn_admin_MSGC_onclick,this);
            this.btn_layout.addEventHandler("onclick",this.btn_layout_onclick,this);
            this.XPush00.addEventHandler("onerror",this.XPush00_onerror,this);
            this.XPush00.addEventHandler("onkeepalive",this.XPush00_onkeepalive,this);
            this.XPush00.addEventHandler("onsuccess",this.XPush00_onsuccess,this);
        };
        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
