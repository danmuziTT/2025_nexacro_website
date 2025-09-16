(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("XPush_Manager");
            this.set_titletext("XPush_Manager");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUser", this);
            obj._setContents("<ColumnInfo><Column id=\"Chk\" type=\"STRING\" size=\"256\"/><Column id=\"UserID\" type=\"STRING\" size=\"256\"/><Column id=\"UserName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"UserID\">User01</Col><Col id=\"UserName\">사용자1</Col></Row><Row><Col id=\"UserID\">User02</Col><Col id=\"UserName\">사용자2</Col></Row><Row><Col id=\"UserID\">User03</Col><Col id=\"UserName\">사용자3</Col></Row><Row><Col id=\"UserID\">User04</Col><Col id=\"UserName\">사용자4</Col></Row><Row><Col id=\"UserID\">User05</Col><Col id=\"UserName\">사용자5</Col></Row><Row><Col id=\"UserID\">User06</Col><Col id=\"UserName\">사용자6</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new XPush("XPush00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new GroupBox("GroupBox00","11","4","782","206",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Project 정보");
            this.addChild(obj.name, obj);

            obj = new Static("staID","20","56","159","27",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Project Name");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_table_required");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_setprojectid","184","57","208","27",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_value("TOBE_EDU");
            obj.set_text("TOBE_EDU");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_setprotocolversion","184","86","208","27",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_value("3");
            obj.set_text("3");
            this.addChild(obj.name, obj);

            obj = new Static("staID00","20","86","159","27",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Protocal Version");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_table_required");
            this.addChild(obj.name, obj);

            obj = new Button("btn_setprojectid","396","57","57","27",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("설정");
            this.addChild(obj.name, obj);

            obj = new Button("btn_setprotocolversion","396","86","57","27",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("설정");
            this.addChild(obj.name, obj);

            obj = new Button("btn_projectID_protocolversion_check","20","23","765","27",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("프로젝트 아이디, 프로토콜 버전 확인");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","117","159","38",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Address:Port\r\n(172.10.12.24:10081)");
            obj.set_cssclass("sta_WF_table_required");
            this.addChild(obj.name, obj);

            obj = new Edit("IpPort","184","117","516","38",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_value("tcp://172.10.11.145:10081, http://172.10.11.145:10081");
            obj.set_text("tcp://172.10.11.145:10081, http://172.10.11.145:10081");
            this.addChild(obj.name, obj);

            obj = new Button("btn_connect","458","159","119","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("xpush 연결 접속");
            this.addChild(obj.name, obj);

            obj = new Button("btn_disconnect","581","159","119","28",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("xpush 연결 종료");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox00_00_00","11","300","442","200",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Push Message 받기");
            this.addChild(obj.name, obj);

            obj = new Grid("gdUser",null,null,null,null,null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_binddataset("dsUser");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"선택\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"1\" text=\"UserID\"/><Cell col=\"2\" text=\"UserName\"/></Band><Band id=\"body\"><Cell text=\"bind:Chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:UserID\"/><Cell col=\"2\" text=\"bind:UserName\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_admin_ADUI","460","320","312","77",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("관리자 사용자 등록");
            this.addChild(obj.name, obj);

            obj = new Button("btn_admin_UNUI","460","404","312","77",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("관리자 사용자 삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_admin_MSGC","458","490","312","77",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("관리자 미수신 메시지 갯수 조회");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox00_00","11","200","782","90",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Topic 정보");
            this.addChild(obj.name, obj);

            obj = new Combo("TopicType","185","220","268","26",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_innerdataset("gds_topicType");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("일반 메시지");
            obj.set_value("9999");
            obj.set_index("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","20","220","159","27",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("topic Type");
            obj.set_cssclass("sta_WF_table_required");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03","20","159","159","27",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("User ID (관리자 사번)");
            obj.set_cssclass("sta_WF_table_required");
            this.addChild(obj.name, obj);

            obj = new Edit("loginUserID","184","159","269","27",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_value("admin");
            obj.set_text("admin");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_ALL","460","223","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("ALL");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","20","253","159","27",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("topic id");
            obj.set_cssclass("sta_WF_table_required");
            this.addChild(obj.name, obj);

            obj = new Edit("TopicId","184","253","208","27",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_value("TOBEEDU01");
            obj.set_text("TOBEEDU01");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","21","321","427","172",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_binddataset("dsUser");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"66\"/><Column size=\"141\"/><Column size=\"199\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Chk\"/><Cell col=\"1\" text=\"UserID\"/><Cell col=\"2\" text=\"UserName\"/></Band><Band id=\"body\"><Cell text=\"bind:Chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:UserID\"/><Cell col=\"2\" text=\"bind:UserName\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new TextArea("taLog","11","504","440","90",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edit_setprojectid","value","gds_Info","PROJECT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edit_setprotocolversion","value","gds_Info","PROTOCAL_VERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","IpPort","value","gds_Info","ADDRESS");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("XPush_Manager.xfdl", function() {
        this.btn_projectID_protocolversion_check_onclick = function(obj,e)
        {
        	alert("projectid : [" + this.XPush00.projectid + "]\nprotocol version : [" + this.XPush00.protocolversion + "]");
        };

        this.btn_setprojectid_onclick = function(obj,e)
        {
        	this.XPush00.set_projectid(this.edit_setprojectid.value);
        	this.taLog.set_value("projectid : [" + this.XPush00.projectid + "]\nprotocol version : [" + this.XPush00.protocolversion + "]");
        };

        this.btn_setprotocolversion_onclick = function(obj,e)
        {
        	this.XPush00.set_protocolversion(this.edit_setprotocolversion.value);
        	this.taLog.set_value("projectid : [" + this.XPush00.projectid + "]\nprotocol version : [" + this.XPush00.protocolversion + "]");
        };

        this.Form_onload = function(obj,e)
        {
        	//XPush Message 송/수신을 위한 Layout세팅
        	if (nexacro._OS == "Android" || nexacro._OS == "iOS")
        	{
        		this.XPush00.set_layouturl("%USERAPP%XPushUrl/XPush_Message_Layout.xml");
        	}else
        	{
        		this.XPush00.set_layouturl("XPushUrl::XPush_Message_Layout.xml");
        	}
        };

        this.btn_connect_onclick = function(obj,e)
        {
        	//this.XPush00.set_iplist("172.10.12.24:50001");
        	//this.XPush00.set_iplist("172.10.12.24:50001, 59.10.169.66:50001");
        	//this.XPush00.set_iplist("tcp://172.10.12.24:50001");
        	//this.XPush00.set_iplist("tcps://172.10.12.24:50001");
        	//this.XPush00.set_iplist("http://172.10.12.24:50001");
        	//this.XPush00.set_iplist("https://172.10.12.24:50001");
        	this.XPush00.set_iplist( this.IpPort.value )

        	/*
        	 * connection 성공, 실패는 event 에서 발생
        	 */
        	this.XPush00.connect(this.loginUserID.value, "..."); //비번은 의미없음
        };

        this.btn_disconnect_onclick = function(obj,e)
        {
        	this.XPush00.disconnect();
        };


        this.fn_push_callback = function(Row, ChangeColumn, AllColumns, Type, ActionType, MessageId)
        {
        	this.taLog.set_value("XPush00_push_callback\n" +
        		" - ActionType : " + ActionType + "\n" +
        		" - Row : " + Row + "\n" +
        		" - MessageId : " + MessageId + "\n" +
        		"\n" +
        		this.dsMessage.saveXML()
        	);



        	if(ActionType == "PUSH")
        	{

        	}
        	if(ActionType == "RELI")
        	{
        		// 수신 확인 메시지 전송
        		this.XPush00.sendResponse(MessageId)
        	}
        }

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
        	}
        	if( e.action == 1 ) {
        		this.taLog.set_value("disconnect() success");
        	}
        	if( e.action == 2) {
        		this.taLog.set_value("subscribe() success");
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
        	this.taLog.set_value("XPush00_onerror Event\n" +
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

        	if( e.action == 0 ) {
        		this.taLog.set_value("connect() error");
        	}
        	if( e.action == 1 ) {
        		this.taLog.set_value("disconnect() error");
        	}
        	if( e.action == 2) {
        		this.taLog.set_value("subscribe() error");
        	}
        	if( e.action == 3) {
        		this.taLog.set_value("unsubscribe() error");
        	}
        	if( e.action == 4) {
        		this.taLog.set_value("requestMessage() error");
        	}
        	if( e.action == 5) {
        		this.taLog.set_value("sendResponse() error");
        	}
        	if( e.action == 6) {
        		this.taLog.set_value("reqisterDevice() error");
        	}
        	if( e.action == 7) {
        		this.taLog.set_value("unreqisterDevice() error");
        	}
        	if( e.action == 8) {
        		this.taLog.set_value("reqisterUser() error");
        	}
        	if( e.action == 9) {
        		this.taLog.set_value("unreqisterUser() error");
        	}
        };

        this.XPush00_onkeepalive = function(obj,e)
        {
        		trace("KEEP");
        };


        this.btn_admin_ADUI_onclick = function(obj,e)
        {
        	var set_projectID = this.edit_setprojectid.value;

        	if (set_projectID) {
        		for(var i=0;i<this.dsUser.getRowCount();i++)
        		{
        			if(this.dsUser.getColumn(i,"Chk")  == "1")
        			{
        				if(this.chk_ALL.value == true)
        				{
        					var ret = this.XPush00.registerTopicWithUserID (this.TopicType.value, "ALL", this.dsUser.getColumn(i,"UserID"), set_projectID);
        				}
        				   var ret = this.XPush00.registerTopicWithUserID (this.TopicType.value, this.TopicId.value, this.dsUser.getColumn(i,"UserID"), set_projectID);
        			}

        		}

        	}else {
        		for(var i=0;i<this.dsUser.getRowCount();i++)
        		{
        			if(this.dsUser.getColumn(i,"Chk")  == "1")
        			{
        				if(this.chk_ALL.value == true)
        				{
        					var ret = this.XPush00.registerTopicWithUserID (this.TopicType.value, "ALL", this.dsUser.getColumn(i,"UserID"));
        				}
        					var ret = this.XPush00.registerTopicWithUserID (this.TopicType.value, this.TopicId.value, this.dsUser.getColumn(i,"UserID"));

        			}
        		}
        	}
        };

        this.btn_admin_UNUI_onclick = function(obj,e)
        {
        	var set_projectID = this.edit_setprojectid.value;

        	if (set_projectID) {
        		for(var i=0;i<this.dsUser.getRowCount();i++)
        		{
        			if(this.dsUser.getColumn(i,"Chk")  == "1")
        			{
        				if(this.chk_ALL.value == true)
        				{
        					var ret = this.XPush00.unregisterTopicWithUserID (this.TopicType.value,"ALL", this.dsUser.getColumn(i,"UserID"),set_projectID);
        				}

        				var ret = this.XPush00.unregisterTopicWithUserID (this.TopicType.value, this.TopicId.value, this.dsUser.getColumn(i,"UserID"),set_projectID);
        			}
        		}

        	}else {
        		for(var i=0;i<this.dsUser.getRowCount();i++)
        		{
        			if(this.dsUser.getColumn(i,"Chk")  == "1")
        			{
        				if(this.chk_ALL.value == true)
        				{
        					var ret = this.XPush00.unregisterTopicWithUserID (this.TopicType.value,"ALL", this.dsUser.getColumn(i,"UserID"));
        				}

        				var ret = this.XPush00.unregisterTopicWithUserID (this.TopicType.value, this.TopicId.value, this.dsUser.getColumn(i,"UserID"));
        			}
        		}

        	}
        };

        this.btn_admin_MSGC_onclick = function(obj,e)
        {
        	var set_projectID = this.edit_setprojectid.value;

        	if (set_projectID){
        		for(var i=0;i<this.dsUser.getRowCount();i++)
        		{
        			if(this.dsUser.getColumn(i,"Chk")  == "1")
        			{
        				if(this.chk_ALL.value == true)
        				{
        					this.XPush00.requestMessageCountWithUserID (this.TopicType.value, "ALL", this.dsUser.getColumn(i,"UserID"), set_projectID);
        				}
        				this.XPush00.requestMessageCountWithUserID (this.TopicType.value, this.TopicId.value, this.dsUser.getColumn(i,"UserID"), set_projectID);
        			}
        		}

        	}else {
        		for(var i=0;i<this.dsUser.getRowCount();i++)
        		{
        			if(this.dsUser.getColumn(i,"Chk")  == "1")
        			{
        				if(this.chk_ALL.value == true)
        				{
        					this.XPush00.requestMessageCountWithUserID (this.TopicType.value, "ALL", this.dsUser.getColumn(i,"UserID"));
        				}
        				this.XPush00.requestMessageCountWithUserID (this.TopicType.value, this.TopicId.value, this.dsUser.getColumn(i,"UserID"));
        			}
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.addEventHandler("ontimer",this.Form_Emp_ontimer,this);
            this.staID.addEventHandler("onclick",this.div_detail_Static10_onclick,this);
            this.staID00.addEventHandler("onclick",this.div_detail_Static10_onclick,this);
            this.btn_setprojectid.addEventHandler("onclick",this.btn_setprojectid_onclick,this);
            this.btn_setprotocolversion.addEventHandler("onclick",this.btn_setprotocolversion_onclick,this);
            this.btn_projectID_protocolversion_check.addEventHandler("onclick",this.btn_projectID_protocolversion_check_onclick,this);
            this.btn_connect.addEventHandler("onclick",this.btn_connect_onclick,this);
            this.btn_disconnect.addEventHandler("onclick",this.btn_disconnect_onclick,this);
            this.btn_admin_ADUI.addEventHandler("onclick",this.btn_admin_ADUI_onclick,this);
            this.btn_admin_UNUI.addEventHandler("onclick",this.btn_admin_UNUI_onclick,this);
            this.btn_admin_MSGC.addEventHandler("onclick",this.btn_admin_MSGC_onclick,this);
            this.Static00_03.addEventHandler("onclick",this.Static00_onclick,this);
            this.XPush00.addEventHandler("onsuccess",this.XPush00_onsuccess,this);
            this.XPush00.addEventHandler("onerror",this.XPush00_onerror,this);
            this.XPush00.addEventHandler("onkeepalive",this.XPush00_onkeepalive,this);
        };
        this.loadIncludeScript("XPush_Manager.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
