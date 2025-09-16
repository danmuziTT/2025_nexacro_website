(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("XPush_Provider");
            this.set_titletext("Provider 메시지공급");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTopic", this);
            obj._setContents("<ColumnInfo><Column id=\"Chk\" type=\"STRING\" size=\"256\"/><Column id=\"TOPIC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TOPIC_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TOPIC_ID\">ALL</Col><Col id=\"TOPIC_NAME\">전체</Col></Row><Row><Col id=\"TOPIC_ID\">TOBEEDU01</Col><Col id=\"TOPIC_NAME\">EDU01</Col></Row><Row><Col id=\"TOPIC_ID\">TOBEEDU02</Col><Col id=\"TOPIC_NAME\">EDU02</Col></Row><Row><Col id=\"TOPIC_ID\">TOBEEDU03</Col><Col id=\"TOPIC_NAME\">EDU03</Col></Row><Row><Col id=\"TOPIC_ID\">TOBEEDU04</Col><Col id=\"TOPIC_NAME\">EDU04</Col></Row><Row><Col id=\"TOPIC_ID\">TOBEEDU05</Col><Col id=\"TOPIC_NAME\">EDU05</Col></Row><Row><Col id=\"TOPIC_ID\">TOBEEDU06</Col><Col id=\"TOPIC_NAME\">EDU06</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProvider", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PUSH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TOPIC_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TOPIC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Info", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PROTOCAL_VERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"PROJECT_ID\">TOBE_EDU</Col><Col id=\"PROTOCAL_VERSION\">3</Col><Col id=\"ADDRESS\">tcp://localhost:50001, http://localhost:50001</Col><Col id=\"HTML5\">tcp://172.10.11.14:50001, http://172.10.11.14:50000</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_topicType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1000</Col><Col id=\"NAME\">긴급</Col></Row><Row><Col id=\"CODE\">2000</Col><Col id=\"NAME\">공지사항</Col></Row><Row><Col id=\"CODE\">9999</Col><Col id=\"NAME\">일반 메시지</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_megType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">PUSH</Col><Col id=\"NAME\">실시간 메시지</Col></Row><Row><Col id=\"CODE\">RELI</Col><Col id=\"NAME\">신뢰성 메시지</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new GroupBox("GroupBox00","11","4","782","66",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Project 정보");
            this.addChild(obj.name, obj);

            obj = new Static("staID","20","26","159","27",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Project Name");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_table_required");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_setprojectid","184","27","208","27",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_value("TOBE_EDU");
            obj.set_text("TOBE_EDU");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox00_00_00","11","170","442","228",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("대상 TOPIC");
            this.addChild(obj.name, obj);

            obj = new Grid("gdTopic","19","191","428","200",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsTopic");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"182\"/><Column size=\"190\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Chk\"/><Cell col=\"1\" text=\"TOPIC_ID\"/><Cell col=\"2\" text=\"TOPIC_NAME\"/></Band><Band id=\"body\"><Cell text=\"bind:Chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:TOPIC_ID\"/><Cell col=\"2\" text=\"bind:TOPIC_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox00_00","11","80","782","86",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Topic 정보");
            this.addChild(obj.name, obj);

            obj = new Combo("cmTopicType","185","100","268","26",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_topicType");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("일반 메시지");
            obj.set_value("9999");
            obj.set_index("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","20","100","159","27",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("topic Type");
            obj.set_cssclass("sta_WF_table_required");
            this.addChild(obj.name, obj);

            obj = new TextArea("taMSG","460","220","333","300",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_displaynulltext("전송할 메시지를 입력해주세요.");
            this.addChild(obj.name, obj);

            obj = new Button("btnSend","460","524","333","71",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("메시지 발송");
            this.addChild(obj.name, obj);

            obj = new Edit("edCode","623","179","57","26",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_value("100");
            obj.set_text("100");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","460","179","159","27",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Code");
            obj.set_cssclass("sta_WF_table_required");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_Flag","466","104","304","20",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("긴급여부<-- 안드로이드 폰에서 사용");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_01","20","131","159","27",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("메시지 종류");
            obj.set_cssclass("sta_WF_table_required");
            this.addChild(obj.name, obj);

            obj = new Combo("cmPushType","185","131","268","26",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_innerdataset("ds_megType");
            obj.set_text("일반메시지");
            obj.set_value("PUSH");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new TextArea("taLog","11","401","440","194",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edit_setprojectid","value","ds_Info","PROJECT_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("XPush_Provider.xfdl", function() {





        this.Form_onload = function(obj,e)
        {

        };


        this.btnSend_onclick = function(obj,e)
        {
        	if(this.confirm("메시지를 전송하시겠습니까"))
        	{


        		if(this.dsTopic.getCaseCount("Chk == '1'") == 0)

        		{
        			this.alert("대상 TOPIC를 1개 이상 선택해주세요.");
        			return;
        		}
        		if(this.edCode.value == "")
        		{

        			this.alert("메시지 코드를 입력해주세요");
        			this.edCode.setFocus();
        			return;
        		}

        		if(this.taMSG.text == "")
        		{

        			this.alert("전송할 메시지를 입력해주세요");
        			this.taMSG.setFocus();
        			return;
        		}

        		this.dsProvider.clearData();
        		for(var i=0;i<this.dsTopic.getRowCount();i++)
        		{
        			if(this.dsTopic.getColumn(i,"Chk") == "1")
        			{

        				this.dsProvider.addRow();
        				this.dsProvider.setColumn(this.dsProvider.rowposition,"PROJECT_ID",this.edit_setprojectid.value);
        				this.dsProvider.setColumn(this.dsProvider.rowposition,"PUSH_TYPE",this.cmPushType.value);
        				this.dsProvider.setColumn(this.dsProvider.rowposition,"TOPIC_TYPE",this.cmTopicType.value);
        				this.dsProvider.setColumn(this.dsProvider.rowposition,"TOPIC_ID",this.dsTopic.getColumn(i,"TOPIC_ID"));
        				this.dsProvider.setColumn(this.dsProvider.rowposition,"CODE",this.edCode.value);
        				this.dsProvider.setColumn(this.dsProvider.rowposition,"MSG",this.taMSG.text);
        			}
        		}

        		this.transaction("SendMsg","SvcXpushURL::Service_XPush.jsp","in_Provider=dsProvider:U","","argPUSH_TYPE=" + nexacro.wrapQuote(this.cmPushType.value) + " argPUSH_MSG=" + this.taMSG.text,"fn_callback");
        	}

        };

        this.fn_callback = function(svcid, ecd, emsg)
        {
        	if(ecd >= 0)
        	{
        		this.alert("메시지를 정상적으로 발송하였습니다.");
        	} else {
        		this.alert("메시지 전달실패 : " + emsg);
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.addEventHandler("ontimer",this.Form_Emp_ontimer,this);
            this.staID.addEventHandler("onclick",this.div_detail_Static10_onclick,this);
            this.btnSend.addEventHandler("onclick",this.btnSend_onclick,this);
        };
        this.loadIncludeScript("XPush_Provider.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
