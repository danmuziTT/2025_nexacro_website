(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("XPush_T_Topic");
            this.set_titletext("T_Topic 테이블확인");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_topic", this);
            obj.set_keystring("");
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"INT\" size=\"10\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"50\"/><Column id=\"TOPIC_TYPE\" type=\"STRING\" size=\"10\"/><Column id=\"TOPIC_ID\" type=\"STRING\" size=\"10\"/><Column id=\"REGISTER_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"ACTIVE\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIED_DATE\" type=\"DATE\" size=\"256\"/></ColumnInfo>");
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
            obj.set_text("T_TOPIC");
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
            obj.set_binddataset("ds_topic");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"52\"/><Column size=\"128\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"51\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"User ID\"/><Cell col=\"2\" text=\"Type\"/><Cell col=\"3\" text=\"Topic ID\"/><Cell col=\"4\" text=\"Status\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:USER_ID\"/><Cell col=\"2\" text=\"bind:TOPIC_TYPE\" displaytype=\"combotext\" combodataset=\"gds_topicType\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"3\" text=\"bind:TOPIC_ID\"/><Cell col=\"4\" text=\"bind:ACTIVE\" textAlign=\"center\"/></Band></Format></Formats>");
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

            obj = new Static("Static15_00_00","128","217","240","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("15");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static02","128","12","240","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static01","128","45","240","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static09","128","78","240","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static15","128","111","240","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("8");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.div_detail.addChild(obj.name, obj);

            obj = new Edit("edt_name","133","17","162","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("0");
            this.div_detail.addChild(obj.name, obj);

            obj = new CheckBox("chk_married","133","219","21","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("1");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("staTopicType","9","78","120","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("4");
            obj.set_text("토픽 타입");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("staID","9","12","120","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("6");
            obj.set_text("id");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_table_required");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static12","9","144","120","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("7");
            obj.set_text("등록일시");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_table_required");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("staUserId","9","45","120","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("9");
            obj.set_text("사용자ID");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_table_required");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static03","9","217","120","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("10");
            obj.set_text("사용 여부");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Edit("edt_name00","133","50","162","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("11");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static00_00","9","111","120","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("12");
            obj.set_text("토픽 아이디");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_table_required");
            this.div_detail.addChild(obj.name, obj);

            obj = new Edit("edt_name00_00","133","116","162","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("13");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static15_00","128","144","240","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("14");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.div_detail.addChild(obj.name, obj);

            obj = new Combo("Combo00","133","84","159","22",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("16");
            obj.set_innerdataset("gds_topicType");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static12_00","9","177","120","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("17");
            obj.set_text("수정일시");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_table_required");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static15_00_01","128","177","240","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("18");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","133","149","230","25",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("19");
            obj.set_type("string");
            obj.set_format("####-##-## ##:##:##");
            this.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00","133","182","230","25",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("20");
            obj.set_type("string");
            obj.set_format("####-##-## ##:##:##");
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
            obj = new BindItem("item1","div_detail.form.edt_name00","value","ds_topic","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_detail.form.edt_name00_00","value","ds_topic","TOPIC_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_detail.form.chk_married","value","ds_topic","ACTIVE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_detail.form.edt_name","value","ds_topic","ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_detail.form.Combo00","value","ds_topic","TOPIC_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_detail.form.MaskEdit00","value","ds_topic","REGISTER_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_detail.form.MaskEdit00_00","value","ds_topic","REGISTER_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("XPush_T_Topic.xfdl", function() {

        this.Form_onload = function(obj,e)
        {


        };

        this.btn_add_onclick = function(obj,e)
        {
        	this.ds_topic.addRow();
        	this.ds_topic.setColumn(this.ds_topic.rowposition,"ACTIVE","Y");
        	this.ds_topic.setColumn(this.ds_topic.rowposition,"TOPIC_TYPE","ALL");
        };

        this.btn_retrieve_onclick = function(obj,e)
        {
        	this.transaction("TopicSelect","SvcXpushURL::Service_T_Topic.jsp","","ds_topic=OUTPUT","","fn_call");
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.btn_retrieve.addEventHandler("onclick",this.btn_retrieve_onclick,this);
            this.grd_list.addEventHandler("onheadclick",this.grd_list_onheadclick,this);
            this.div_detail.form.edt_name.addEventHandler("canchange",this.div_detail_edt_name_canchange,this);
            this.div_detail.form.staID.addEventHandler("onclick",this.div_detail_Static10_onclick,this);
            this.div_detail.form.edt_name00.addEventHandler("canchange",this.div_detail_edt_name_canchange,this);
            this.div_detail.form.edt_name00_00.addEventHandler("canchange",this.div_detail_edt_name_canchange,this);
        };
        this.loadIncludeScript("XPush_T_Topic.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
