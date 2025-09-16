(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("XPush_T_Notification");
            this.set_titletext("T_Notification 테이블확인");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Notification", this);
            obj.set_keystring("");
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BUNDLE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MESSAGE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEVICE_TOKEN\" type=\"STRING\" size=\"256\"/><Column id=\"TOPIC_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TOPIC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MESSAGE\" type=\"STRING\" size=\"256\"/><Column id=\"CHECK_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"ERROR_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","10","40",null,"50","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("div_WFSA");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","16","13","46","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("Type");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("st_title","10","5","193","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("T_NOTIFICATION");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_emptitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_retrieve",null,"5","60","30","9",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","10","95",null,null,"396","10",null,null,null,null,this);
            obj.set_taborder("3");
            obj.getSetter("leftbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_binddataset("ds_Notification");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"PROJECT_ID\"/><Cell col=\"2\" text=\"BUNDLE_ID\"/><Cell col=\"3\" text=\"MESSAGE_ID\"/><Cell col=\"4\" text=\"DEVICE_TOKEN\"/><Cell col=\"5\" text=\"TOPIC_TYPE\"/><Cell col=\"6\" text=\"TOPIC_ID\"/><Cell col=\"7\" text=\"MESSAGE\"/><Cell col=\"8\" text=\"CHECK_DATE\"/><Cell col=\"9\" text=\"RESULT\"/><Cell col=\"10\" text=\"ERROR_CODE\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\"/><Cell col=\"1\" text=\"bind:PROJECT_ID\"/><Cell col=\"2\" text=\"bind:BUNDLE_ID\"/><Cell col=\"3\" text=\"bind:MESSAGE_ID\"/><Cell col=\"4\" text=\"bind:DEVICE_TOKEN\"/><Cell col=\"5\" text=\"bind:TOPIC_TYPE\"/><Cell col=\"6\" text=\"bind:TOPIC_ID\"/><Cell col=\"7\" text=\"bind:MESSAGE\"/><Cell col=\"8\" text=\"bind:CHECK_DATE\"/><Cell col=\"9\" text=\"bind:RESULT\"/><Cell col=\"10\" text=\"bind:ERROR_CODE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_detail",null,"95","380",null,"10","10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.getSetter("leftbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_01_00","128","352","240","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("30");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static02_01_01","128","319","240","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("27");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","128","187","240","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("24");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static02_01","128","85","240","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("21");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static02_00","128","19","240","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("18");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static02","128","52","240","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static01","128","117","240","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static09","128","220","240","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static15","128","253","240","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.div_detail.addChild(obj.name, obj);

            obj = new Edit("ed_project_id","133","57","162","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("0");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("staTopicType","9","220","120","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("3");
            obj.set_text("토픽 타입");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("PROJECT_ID","9","52","120","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("5");
            obj.set_text("PROJECT_ID");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_table_required");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static12","9","286","120","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("6");
            obj.set_text("체크일시");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_table_required");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("staUserId","9","117","359","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("8");
            obj.set_text("MESSAGE_ID");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_table_required");
            this.div_detail.addChild(obj.name, obj);

            obj = new Edit("ed_message_id","9","156","359","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("9");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static00_00","9","253","120","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("10");
            obj.set_text("토픽 아이디");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_table_required");
            this.div_detail.addChild(obj.name, obj);

            obj = new Edit("edt_name00_00","133","258","162","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("11");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static15_00","128","286","240","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("12");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.div_detail.addChild(obj.name, obj);

            obj = new Combo("Combo00","133","226","159","22",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("13");
            obj.set_innerdataset("gds_topicType");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","133","291","230","25",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("14");
            obj.set_type("string");
            obj.set_format("####-##-## ##:##:##");
            this.div_detail.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","9","394","360","88",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("15");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("ID","9","19","120","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("16");
            obj.set_text("ID");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_table_required");
            this.div_detail.addChild(obj.name, obj);

            obj = new Edit("ed_id","133","24","162","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("17");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("BUNDLE_ID","9","85","120","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("19");
            obj.set_text("BUNDLE_ID");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_table_required");
            this.div_detail.addChild(obj.name, obj);

            obj = new Edit("ed_boundle_id","133","90","162","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("20");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("DEVICE_TOKEN","9","187","120","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("22");
            obj.set_text("DEVICE_TOKEN");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_table_required");
            this.div_detail.addChild(obj.name, obj);

            obj = new Edit("ed_boundle_id00","133","192","162","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("23");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("BUNDLE_ID00","9","319","120","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("25");
            obj.set_text("결과");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_table_required");
            this.div_detail.addChild(obj.name, obj);

            obj = new Edit("ed_boundle_id01","133","324","162","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("26");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("ERROR_CODE","9","352","120","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("28");
            obj.set_text("ERROR_CODE");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_table_required");
            this.div_detail.addChild(obj.name, obj);

            obj = new Edit("ed_boundle_id01_00","133","357","162","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("29");
            this.div_detail.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_search.form
            obj = new Layout("default","",0,0,this.div_search.form,function(p){});
            this.div_search.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_detail.form
            obj = new Layout("default","",0,0,this.div_detail.form,function(p){});
            this.div_detail.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",800,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_detail.form.ed_id","value","ds_Notification","ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_detail.form.ed_project_id","value","ds_Notification","PROJECT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_detail.form.ed_boundle_id","value","ds_Notification","BUNDLE_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_detail.form.ed_message_id","value","ds_Notification","MESSAGE_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_detail.form.ed_boundle_id00","value","ds_Notification","DEVICE_TOKEN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_detail.form.Combo00","value","ds_Notification","TOPIC_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_detail.form.edt_name00_00","value","ds_Notification","TOPIC_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_detail.form.TextArea00","value","ds_Notification","MESSAGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_detail.form.MaskEdit00","value","ds_Notification","CHECK_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_detail.form.ed_boundle_id01","value","ds_Notification","RESULT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_detail.form.ed_boundle_id01_00","accessibilityaction","ds_Notification","ERROR_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("XPush_T_Notification.xfdl", function() {

        this.Form_onload = function(obj,e)
        {


        };


        this.btn_add_onclick = function(obj,e)
        {
        	this.ds_topic.addRow();
        	this.ds_topic.setColumn(this.ds_topic.rowposition,"ACTIVE","Y");
        	this.ds_topic.setColumn(this.ds_topic.rowposition,"TOPIC_TYPE","ALL");
        };

        this.btn_del_onclick = function(obj,e)
        {

        };

        this.btn_retrieve_onclick = function(obj,e)
        {
        	this.transaction("TopicSelect","SvcXpushURL::Service_T_Notification.jsp","","ds_Notification=OUTPUT","","fn_call");
        };

        this.fn_call = function(svcid, ecd, emsg)
        {

        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.btn_retrieve.addEventHandler("onclick",this.btn_retrieve_onclick,this);
            this.grd_list.addEventHandler("onheadclick",this.grd_list_onheadclick,this);
            this.div_detail.form.ed_project_id.addEventHandler("canchange",this.div_detail_edt_name_canchange,this);
            this.div_detail.form.PROJECT_ID.addEventHandler("onclick",this.div_detail_Static10_onclick,this);
            this.div_detail.form.ed_message_id.addEventHandler("canchange",this.div_detail_edt_name_canchange,this);
            this.div_detail.form.edt_name00_00.addEventHandler("canchange",this.div_detail_edt_name_canchange,this);
            this.div_detail.form.ID.addEventHandler("onclick",this.div_detail_Static10_onclick,this);
            this.div_detail.form.ed_id.addEventHandler("canchange",this.div_detail_edt_name_canchange,this);
            this.div_detail.form.BUNDLE_ID.addEventHandler("onclick",this.div_detail_Static10_onclick,this);
            this.div_detail.form.ed_boundle_id.addEventHandler("canchange",this.div_detail_edt_name_canchange,this);
            this.div_detail.form.DEVICE_TOKEN.addEventHandler("onclick",this.div_detail_Static10_onclick,this);
            this.div_detail.form.ed_boundle_id00.addEventHandler("canchange",this.div_detail_edt_name_canchange,this);
            this.div_detail.form.BUNDLE_ID00.addEventHandler("onclick",this.div_detail_Static10_onclick,this);
            this.div_detail.form.ed_boundle_id01.addEventHandler("canchange",this.div_detail_edt_name_canchange,this);
            this.div_detail.form.ERROR_CODE.addEventHandler("onclick",this.div_detail_Static10_onclick,this);
            this.div_detail.form.ed_boundle_id01_00.addEventHandler("canchange",this.div_detail_edt_name_canchange,this);
        };
        this.loadIncludeScript("XPush_T_Notification.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
