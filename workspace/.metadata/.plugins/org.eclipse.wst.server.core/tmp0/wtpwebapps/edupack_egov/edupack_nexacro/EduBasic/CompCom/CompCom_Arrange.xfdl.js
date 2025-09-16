(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CompCom_Arrange");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_emp", this);
            obj.set_keystring("");
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"POS_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/><Column id=\"MEMO\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"FULL_NAME\">Olivia</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20101003</Col><Col id=\"SALARY\">83000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">ivory</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"EMPL_ID\">AA001</Col></Row><Row><Col id=\"FULL_NAME\">John</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20051011</Col><Col id=\"SALARY\">76000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">greenyellow</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">AA002</Col></Row><Row><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20070206</Col><Col id=\"SALARY\">95000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">aliceblue</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">BB001</Col></Row><Row><Col id=\"FULL_NAME\">Adam</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20010109</Col><Col id=\"SALARY\">88000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">greenyellow</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"EMPL_ID\">CC001</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_retrieve","20","389","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Retrieve");
            obj.set_padding("0px 5px");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add","btn_retrieve:8","389","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Add");
            obj.set_padding("0px 5px");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del","btn_add:8","389","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("Delete");
            obj.set_padding("0px 5px");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","btn_del:8","389","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("Save");
            obj.set_padding("0px 5px");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","10","346","346","28",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text(" Fit To Contents - Text 사이즈에 따라 자동 맞춤");
            obj.set_cssclass("sta_WF_TitleType1");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_fit","360","346","50","28",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("지정");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_fit_re","415","346","50","28",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("해제");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_grip2","712","296","12","11",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_image("URL(\"theme://images/Statusbar_img_grip.png\")");
            obj.set_cursor("nw-resize");
            obj.set_positionstep("1");
            obj.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Div("div_base00","368","79",null,null,"img_grip2:-8","img_grip2:-8",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Div00");
            obj.set_positionstep("1");
            obj.set_background("#ffffff");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","2","2",null,"20.2%","2",null,null,null,null,null,this.div_base00.form);
            obj.set_taborder("3");
            obj.set_text("Comp1");
            this.div_base00.addChild(obj.name, obj);

            obj = new Button("Button00","2","Button03:2","22.2%",null,null,"2",null,null,null,null,this.div_base00.form);
            obj.set_taborder("0");
            obj.set_text("Comp2");
            this.div_base00.addChild(obj.name, obj);

            obj = new Button("Button01","Button00:2","Button03:2","45.81%",null,null,"2",null,null,null,null,this.div_base00.form);
            obj.set_taborder("1");
            obj.set_text("Comp3");
            this.div_base00.addChild(obj.name, obj);

            obj = new Button("Button02","Button01:2","Button03:2",null,null,"2","2",null,null,null,null,this.div_base00.form);
            obj.set_taborder("2");
            obj.set_text("Comp4");
            this.div_base00.addChild(obj.name, obj);

            obj = new Div("div_hor","449","350","412","290",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("btn_baseR","150","35","60","50",null,null,null,null,null,null,this.div_hor.form);
            obj.set_taborder("0");
            obj.set_background("khaki");
            obj.set_font("normal normal 10pt \"Verdana\"");
            obj.set_positionstep("0");
            obj.set_text("BASE");
            obj.set_border("1px solid #9c9c9c , 1px solid #9c9c9c , 1px solid #9c9c9c , 2px solid red");
            this.div_hor.addChild(obj.name, obj);

            obj = new Button("Button00",null,"35","60","50","btn_baseR:10",null,null,null,null,null,this.div_hor.form);
            obj.set_taborder("1");
            obj.set_border("1px solid #9c9c9c , 2px solid blue , 1px solid #9c9c9c , 1px solid #9c9c9c");
            obj.set_positionstep("0");
            obj.set_text("Move");
            this.div_hor.addChild(obj.name, obj);

            obj = new Button("Button01","10","35",null,"50","btn_baseR:80",null,null,null,null,null,this.div_hor.form);
            obj.set_taborder("2");
            obj.set_border("1px solid #9c9c9c , 2px solid blue , 1px solid #9c9c9c , 1px solid #9c9c9c");
            obj.set_positionstep("0");
            obj.set_text("Resize");
            this.div_hor.addChild(obj.name, obj);

            obj = new Static("Static02","10","5","390","28",null,null,null,null,null,null,this.div_hor.form);
            obj.set_taborder("3");
            obj.set_text("기준 Comp의 Left 좌표를 컴포넌트의 Right에 상대좌표 지정");
            obj.set_cssclass("sta_WF_LabelTxt12");
            this.div_hor.addChild(obj.name, obj);

            obj = new Button("btn_baseL","200","196","60","50",null,null,null,null,null,null,this.div_hor.form);
            obj.set_taborder("4");
            obj.set_background("khaki");
            obj.set_font("normal normal 10pt \"Verdana\"");
            obj.set_positionstep("0");
            obj.set_text("BASE");
            obj.set_border("1px solid #9c9c9c , 2px solid red , 1px solid #9c9c9c , 1px solid #9c9c9c");
            this.div_hor.addChild(obj.name, obj);

            obj = new Button("Button21","btn_baseL:80","196",null,"50","10",null,null,null,null,null,this.div_hor.form);
            obj.set_taborder("5");
            obj.set_border("1px solid #9c9c9c , 1px solid #9c9c9c , 1px solid #9c9c9c , 2px solid blue");
            obj.set_positionstep("0");
            obj.set_text("Resize");
            this.div_hor.addChild(obj.name, obj);

            obj = new Button("Button22","btn_baseL:10","196","60","50",null,null,null,null,null,null,this.div_hor.form);
            obj.set_taborder("6");
            obj.set_border("1px solid #9c9c9c , 1px solid #9c9c9c , 1px solid #9c9c9c , 2px solid blue");
            obj.set_positionstep("0");
            obj.set_text("Move");
            this.div_hor.addChild(obj.name, obj);

            obj = new Static("Static00","8","253","396","30",null,null,null,null,null,null,this.div_hor.form);
            obj.set_taborder("7");
            obj.set_text("기준 Comp의 Right 좌표를 컴포넌트의 Left에 상대좌표 지정");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_LabelTxt12");
            this.div_hor.addChild(obj.name, obj);

            obj = new Div("div_ver","21","350","412","290",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("btn_baseB","10","115","90","30",null,null,null,null,null,null,this.div_ver.form);
            obj.set_taborder("0");
            obj.set_background("khaki");
            obj.set_font("normal normal 10pt \"Verdana\"");
            obj.set_positionstep("0");
            obj.set_text("기준 Comp");
            obj.set_border("2px solid red , 1px solid #9c9c9c , 1px solid #9c9c9c");
            this.div_ver.addChild(obj.name, obj);

            obj = new Button("Button17","10",null,"90","30",null,"btn_baseB:10",null,null,null,null,this.div_ver.form);
            obj.set_taborder("1");
            obj.set_border("1px solid #9c9c9c , 1px solid #9c9c9c , 2px solid blue");
            obj.set_positionstep("0");
            obj.set_text("Move");
            this.div_ver.addChild(obj.name, obj);

            obj = new Button("Button18","10","35","90",null,null,"btn_baseB:50",null,null,null,null,this.div_ver.form);
            obj.set_taborder("2");
            obj.set_border("1px solid #9c9c9c , 1px solid #9c9c9c , 2px solid blue");
            obj.set_positionstep("0");
            obj.set_text("Resize");
            this.div_ver.addChild(obj.name, obj);

            obj = new Button("btn_baseT","299","145","90","30",null,null,null,null,null,null,this.div_ver.form);
            obj.set_taborder("3");
            obj.set_background("khaki");
            obj.set_font("normal normal 10pt \"Verdana\"");
            obj.set_positionstep("0");
            obj.set_text("기준 Comp");
            obj.set_border("1px solid #9c9c9c , 1px solid #9c9c9c , 2px solid red");
            this.div_ver.addChild(obj.name, obj);

            obj = new Button("Button19","299","btn_baseT:50","90",null,null,"33",null,null,null,null,this.div_ver.form);
            obj.set_taborder("4");
            obj.set_border("2px solid blue , 1px solid #9c9c9c , 1px solid #9c9c9c");
            obj.set_positionstep("0");
            obj.set_text("Resize");
            this.div_ver.addChild(obj.name, obj);

            obj = new Button("Button20","299","btn_baseT:10","90","30",null,null,null,null,null,null,this.div_ver.form);
            obj.set_taborder("5");
            obj.set_border("2px solid blue , 1px solid #9c9c9c , 1px solid #9c9c9c");
            obj.set_positionstep("0");
            obj.set_text("Move");
            this.div_ver.addChild(obj.name, obj);

            obj = new Static("Static02","10","5","376","28",null,null,null,null,null,null,this.div_ver.form);
            obj.set_taborder("6");
            obj.set_text("기준 Comp의 Top 좌표를 컴포넌트의 Bottom에 상대좌표 지정");
            obj.set_wordWrap("english");
            obj.set_cssclass("sta_WF_LabelTxt12");
            this.div_ver.addChild(obj.name, obj);

            obj = new Static("Static00","18","258","376","28",null,null,null,null,null,null,this.div_ver.form);
            obj.set_taborder("7");
            obj.set_text("기준 Comp의 Bottom 좌표를 컴포넌트의 Top에 상대좌표 지정");
            obj.set_wordWrap("english");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_LabelTxt12");
            this.div_ver.addChild(obj.name, obj);

            obj = new ImageViewer("img_grip1","162","207","12","11",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_image("URL(\"theme://images/Statusbar_img_grip.png\")");
            obj.set_cursor("nw-resize");
            obj.set_positionstep("1");
            obj.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","10","40","270","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text(" Component Position - Resize");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","316","230","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("컴포넌트 기준 상대좌표 ");
            obj.set_cssclass("sta_WF_TitleType1");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_baseSize","20","85",null,null,"img_grip1:-8","img_grip1:-8",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("khaki");
            obj.set_font("normal normal 10pt \"Verdana\"");
            obj.set_text("BASE");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button08","btn_baseSize:10","86","btn_baseSize:50.00%","btn_baseSize:50.00%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("w: 50%\r\nh: 50%");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","15","46","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("컴포넌트 사이즈에 따라 크기를 비율로 지정");
            obj.set_cssclass("sta_WF_TitleType1");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_grip","445","281","12","11",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_image("URL(\"theme://images/Statusbar_img_grip.png\")");
            obj.set_cursor("nw-resize");
            obj.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Button("btn_start","199","316","43","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("실행");
            this.addChild(obj.name, obj);

            obj = new Button("btn_stop","247","316","43","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Stop");
            this.addChild(obj.name, obj);

            obj = new Div("div_base","20","73",null,null,"img_grip:-8","img_grip:-7",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","10","10","120","51",null,null,null,null,null,null,this.div_base.form);
            obj.set_taborder("0");
            obj.set_text("Left Top");
            obj.set_border("2px solid blue,1px solid #9c9c9c,1px solid #9c9c9c,2px solid blue");
            this.div_base.addChild(obj.name, obj);

            obj = new Button("Button01",null,"10","120","51","10",null,null,null,null,null,this.div_base.form);
            obj.set_taborder("1");
            obj.set_text("Right Top");
            obj.set_border("2px solid blue,2px solid blue,1px solid #9c9c9c,1px solid #9c9c9c");
            this.div_base.addChild(obj.name, obj);

            obj = new Button("Button02","10",null,"120","50",null,"10",null,null,null,null,this.div_base.form);
            obj.set_taborder("2");
            obj.set_text("Left Bottom");
            obj.set_border("1px solid #9c9c9c,1px solid #9c9c9c,2px solid blue,2px solid blue");
            this.div_base.addChild(obj.name, obj);

            obj = new Button("Button03",null,null,"120","50","10","10",null,null,null,null,this.div_base.form);
            obj.set_taborder("3");
            obj.set_text("Right Bottom");
            obj.set_border("1px solid #9c9c9c,2px solid blue,2px solid blue,1px solid #9c9c9c");
            this.div_base.addChild(obj.name, obj);

            obj = new Button("Button04","10","80",null,null,"10","80",null,null,null,null,this.div_base.form);
            obj.set_taborder("4");
            obj.set_text("Left Top Right Bottom");
            obj.set_border("2px solid blue");
            this.div_base.addChild(obj.name, obj);

            obj = new Static("Static00_00","10","0","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("Position");
            obj.set_cssclass("sta_WF_TitleMain");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_base00.form
            obj = new Layout("default","",0,0,this.div_base00.form,function(p){});
            this.div_base00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_hor.form
            obj = new Layout("default","",0,0,this.div_hor.form,function(p){});
            this.div_hor.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_ver.form
            obj = new Layout("default","",0,0,this.div_ver.form,function(p){});
            this.div_ver.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_base.form
            obj = new Layout("default","",0,0,this.div_base.form,function(p){});
            this.div_base.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1038,650,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("2");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CompCom_Arrange.xfdl", function() {

        //드래그 드롭 처리
        this.obj_ondrag = function(obj,e)
        {
        	return true;
        };

        // 드래그시 좌표 조정
        this.obj_onlbuttondown = function(obj,e)
        {
        	obj.nX = e.clientx;
        	obj.nY = e.clienty;
        };

        this.Form_ondragmove = function(obj,e)
        {
        	e.sourceobject.move(e.clientx-e.sourceobject.nX, e.clienty-e.sourceobject.nY);
        	this.resetScroll();
        };

        //
        this.btn_start_onclick = function(obj,e)
        {
        	this.setTimer(1, 50);
        };

        this.btn_stop_onclick = function(obj,e)
        {
        	this.killTimer(1);
        };

        this.Form_ontimer = function(obj,e)
        {
        	if(e.timerid == 1){
        		var arrObj = new Array();
        		arrObj[0] = this.div_hor.form.btn_baseR;
        		arrObj[1] = this.div_hor.form.btn_baseL;
        		arrObj[2] = this.div_ver.form.btn_baseB;
        		arrObj[3] = this.div_ver.form.btn_baseT;
        		this.fn_move(arrObj);
        	}
        };

        this.nCnt = 0;
        this.sFlag = "A";
        this.fn_move = function(arrObj)
        {
        	if(this.nCnt == 100){
        		this.sFlag = "B";
        	}
        	else if(this.nCnt == 0){
        		this.sFlag = "A";
        	}

        	if(this.sFlag == "A"){
        		arrObj[0].move(parseInt(arrObj[0].left)+1, parseInt(arrObj[0].top)  );
        		arrObj[1].move(parseInt(arrObj[1].left)-1, parseInt(arrObj[1].top)  );
        		arrObj[2].move(parseInt(arrObj[2].left)  , parseInt(arrObj[2].top)+1);
        		arrObj[3].move(parseInt(arrObj[3].left)  , parseInt(arrObj[3].top)-1);
        		this.nCnt ++;
        	}
        	else{
        		arrObj[0].move(parseInt(arrObj[0].left)-1, parseInt(arrObj[0].top)  );
        		arrObj[1].move(parseInt(arrObj[1].left)+1, parseInt(arrObj[1].top)  );
        		arrObj[2].move(parseInt(arrObj[2].left)  , parseInt(arrObj[2].top)-1);
        		arrObj[3].move(parseInt(arrObj[3].left)  , parseInt(arrObj[3].top)+1);
        		this.nCnt--;
        	}
        	this.div_hor.form.resetScroll();
        	this.div_ver.form.resetScroll();

        }

        this.btn_fit_onclick = function(obj,e)
        {
        	this.btn_retrieve.set_fittocontents("width");
        	this.btn_add.set_fittocontents("width");
        	this.btn_del.set_fittocontents("width");
        	this.btn_save.set_fittocontents("width");
        };

        this.btn_fit_re_onclick = function(obj,e)
        {
        	this.btn_retrieve.set_fittocontents("none");
        	this.btn_add.set_fittocontents("none");
        	this.btn_del.set_fittocontents("none");
        	this.btn_save.set_fittocontents("none");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ondragmove",this.Form_ondragmove,this);
            this.addEventHandler("ontimer",this.Form_ontimer,this);
            this.btn_retrieve.addEventHandler("onclick",this.Button02_onclick,this);
            this.btn_fit.addEventHandler("onclick",this.btn_fit_onclick,this);
            this.btn_fit_re.addEventHandler("onclick",this.btn_fit_re_onclick,this);
            this.img_grip2.addEventHandler("ondrag",this.obj_ondrag,this);
            this.img_grip2.addEventHandler("onlbuttondown",this.obj_onlbuttondown,this);
            this.div_hor.addEventHandler("ondragmove",this.div_arrange_ondragmove,this);
            this.div_hor.form.btn_baseR.addEventHandler("ondrag",this.obj_ondrag,this);
            this.div_hor.form.btn_baseR.addEventHandler("onlbuttondown",this.obj_onlbuttondown,this);
            this.div_hor.form.btn_baseL.addEventHandler("ondrag",this.obj_ondrag,this);
            this.div_hor.form.btn_baseL.addEventHandler("onlbuttondown",this.obj_onlbuttondown,this);
            this.div_ver.addEventHandler("ondragmove",this.div_arrange_ondragmove,this);
            this.div_ver.form.btn_baseB.addEventHandler("ondrag",this.obj_ondrag,this);
            this.div_ver.form.btn_baseB.addEventHandler("onlbuttondown",this.obj_onlbuttondown,this);
            this.div_ver.form.btn_baseT.addEventHandler("ondrag",this.obj_ondrag,this);
            this.div_ver.form.btn_baseT.addEventHandler("onlbuttondown",this.obj_onlbuttondown,this);
            this.img_grip1.addEventHandler("ondrag",this.obj_ondrag,this);
            this.img_grip1.addEventHandler("onlbuttondown",this.obj_onlbuttondown,this);
            this.img_grip.addEventHandler("ondrag",this.obj_ondrag,this);
            this.img_grip.addEventHandler("onlbuttondown",this.obj_onlbuttondown,this);
            this.btn_start.addEventHandler("onclick",this.btn_start_onclick,this);
            this.btn_stop.addEventHandler("onclick",this.btn_stop_onclick,this);
        };
        this.loadIncludeScript("CompCom_Arrange.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
