(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_MultiCombo");
            this.set_titletext("Component-Checkbox");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMultiCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">Basil Rivera</Col></Row><Row><Col id=\"code\">Clayton Chandler</Col></Row><Row><Col id=\"code\">Constance Trevino</Col></Row><Row><Col id=\"code\">Raymond Lara</Col></Row><Row><Col id=\"code\">Hayfa Rodgers</Col></Row><Row><Col id=\"code\">Vance Love</Col></Row><Row><Col id=\"code\">Adena Pruitt</Col></Row><Row><Col id=\"code\">Colleen Solis</Col></Row><Row><Col id=\"code\">Benedict O&apos;connor</Col></Row><Row><Col id=\"code\">Hayes Melendez</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCounttextformat", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">You have selected [#] items.</Col></Row><Row><Col id=\"code\">You have selected [#] items from [*] items.</Col></Row><Row><Col id=\"code\">You have selected [#] items.</Col></Row><Row><Col id=\"code\">[#] / [*]</Col></Row><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGrid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">A</Col><Col id=\"Column1\">A-0</Col><Col id=\"Column2\">Basil Rivera</Col></Row><Row><Col id=\"Column0\">B</Col><Col id=\"Column1\">B-0</Col><Col id=\"Column2\">Clayton Chandler</Col></Row><Row><Col id=\"Column0\">A</Col><Col id=\"Column1\">A-1</Col><Col id=\"Column2\">Constance Trevino</Col></Row><Row><Col id=\"Column0\">B</Col><Col id=\"Column1\">B-1</Col><Col id=\"Column2\">Raymond Lara</Col></Row><Row><Col id=\"Column0\">A</Col><Col id=\"Column1\">A-2</Col><Col id=\"Column2\">Hayfa Rodgers</Col></Row><Row><Col id=\"Column0\">B</Col><Col id=\"Column1\">B-2</Col><Col id=\"Column2\">Vance Love</Col></Row><Row><Col id=\"Column0\">B</Col><Col id=\"Column1\">B-3</Col><Col id=\"Column2\">Adena Pruitt</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">A</Col><Col id=\"data\">A</Col></Row><Row><Col id=\"code\">B</Col><Col id=\"data\">B</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static08","10","10","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("MultiCombo");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_result",null,"49","280","341","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_value("MultiCombo \n--------------------------------------\n*컴포넌트는 여러 아이템 목록 중에서 한 개 이상의 값을 선택하기 위한 용도로 사용하는 컴포넌트입니다.\n*Combo 컴포넌트와 비슷하지만 여러 개 값을 선택할 수 있고 edittype 속성값에 따라 선택한 값을 다양한 형태로 표현할 수 있습니다.");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00",null,"400","280","265","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsMultiCombo");
            obj.set_autofittype("col");
            obj.set_autosizingtype("none");
            obj.set_positionstep("-1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"code\"/></Band><Band id=\"body\"><Cell text=\"bind:code\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_01",null,"15","140","30","150",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("description");
            obj.set_cssclass("sta_WF_TypeTitle");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_set_index","25","580","270","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("set_index(\"0, 4, 5\")");
            this.addChild(obj.name, obj);

            obj = new Button("btn_set_index2","25","625","270","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("set_index(\"-1\")");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00","10","50","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Property");
            obj.set_cssclass("sta_WF_TypeTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","16","50","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Method");
            obj.set_cssclass("sta_WF_TypeTitle");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"8","135","35","10",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("reload");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new MultiCombo("mcbText","25","135","405","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_edittype("text");
            obj.set_innerdataset("dsMultiCombo");
            obj.set_codecolumn("code");
            obj.set_datacolumn("code");
            obj.set_text("Basil Rivera,Clayton Chandler,Constance Trevino");
            obj.set_value("Basil Rivera,Clayton Chandler,Constance Trevino");
            obj.set_index("0,1,2");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","25","180","178","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("singletag");
            this.addChild(obj.name, obj);

            obj = new MultiCombo("mcbSingletag","25","200","405","50",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_edittype("singletag");
            obj.set_innerdataset("dsMultiCombo");
            obj.set_codecolumn("code");
            obj.set_datacolumn("code");
            obj.set_buttonsize("40");
            obj.set_text("Basil Rivera,Clayton Chandler,Constance Trevino");
            obj.set_value("Basil Rivera,Clayton Chandler,Constance Trevino");
            obj.set_index("0,1,2");
            this.addChild(obj.name, obj);

            obj = new MultiCombo("mcbMultitag","440","135","260","180",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_edittype("multitag");
            obj.set_innerdataset("dsMultiCombo");
            obj.set_codecolumn("code");
            obj.set_datacolumn("code");
            obj.set_buttonsize("40");
            obj.set_text("Basil Rivera,Clayton Chandler,Constance Trevino");
            obj.set_value("Basil Rivera,Clayton Chandler,Constance Trevino");
            obj.set_index("0,1,2");
            this.addChild(obj.name, obj);

            obj = new MultiCombo("mcbCount","25","275","405","40",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_edittype("count");
            obj.set_innerdataset("dsMultiCombo");
            obj.set_codecolumn("code");
            obj.set_datacolumn("code");
            obj.set_text("Basil Rivera,Clayton Chandler,Constance Trevino");
            obj.set_value("Basil Rivera,Clayton Chandler,Constance Trevino");
            obj.set_index("0,1,2");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","440","115","260","20",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("multitag");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","25","115","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("text");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","25","254","178","20",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("count");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","25","348","363","116",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_innerdataset("dsCounttextformat");
            obj.set_codecolumn("code");
            obj.set_datacolumn("code");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","25","318","178","25",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("counttextformat");
            obj.set_font("bold 14px/normal \"Verdana\",\"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_showselectallcheckbox","25","535","270","40",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("showselectallcheckbox(true)");
            this.addChild(obj.name, obj);

            obj = new MultiCombo("mcbSelectAll","300","535","405","40",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_edittype("text");
            obj.set_innerdataset("dsMultiCombo");
            obj.set_codecolumn("code");
            obj.set_datacolumn("code");
            obj.set_text("MultiCombo00");
            this.addChild(obj.name, obj);

            obj = new Button("btn_textseparator","25","490","55","40",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("가");
            this.addChild(obj.name, obj);

            obj = new MultiCombo("mcbTextseparator","300","490","405","40",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_edittype("text");
            obj.set_innerdataset("dsMultiCombo");
            obj.set_codecolumn("code");
            obj.set_datacolumn("code");
            obj.set_text("Basil Rivera,Clayton Chandler,Constance Trevino");
            obj.set_value("Basil Rivera,Clayton Chandler,Constance Trevino");
            obj.set_index("0,1,2");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00","25","465","178","25",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("textseparator");
            obj.set_font("bold 14px/normal \"Verdana\",\"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_textseparator00","79","490","55","40",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("&");
            this.addChild(obj.name, obj);

            obj = new Button("btn_textseparator00_00","133","490","55","40",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("@");
            this.addChild(obj.name, obj);

            obj = new Button("btn_textseparator00_00_00","187","490","55","40",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text(";");
            this.addChild(obj.name, obj);

            obj = new Button("btn_textseparator00_00_00_00","241","490","55","40",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text(",");
            this.addChild(obj.name, obj);

            obj = new MultiCombo("mcbIndex","300","580","405","85",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_edittype("multitag");
            obj.set_innerdataset("dsMultiCombo");
            obj.set_codecolumn("code");
            obj.set_datacolumn("code");
            obj.set_buttonsize("40");
            obj.set_text("");
            obj.set_value("");
            this.addChild(obj.name, obj);

            obj = new MultiCombo("MultiCombo00","25","80","545","120",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_edittype("multitag");
            obj.set_innerdataset("dsMultiCombo");
            obj.set_codecolumn("code");
            obj.set_datacolumn("code");
            obj.set_positionstep("1");
            obj.set_buttonsize("40");
            obj.set_text("Basil Rivera,Clayton Chandler,Constance Trevino");
            obj.set_value("Basil Rivera,Clayton Chandler,Constance Trevino");
            obj.set_index("0,1,2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_setSelect","25","207","270","40",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("setSelect(0, true)");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_setSelect0","300","207","270","40",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("setSelect(0, false)");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_setSelectRange","25","297","270","40",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("setSelectRange(1, 6, true)");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_setSelectItems","25","252","270","40",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("setSelectItems([5, 3, 1], true)");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_setSelectItems0","300","252","270","40",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("setSelectItems([5, 3, 1], false)");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_setSelectRange0","300","297","270","40",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("setSelectRange(1, 6, false)");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clearSelect","300","387","270","40",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("clearSelect()");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_selectAll","25","342","270","40",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("selectAll()");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_getSelectedCount","25","387","270","40",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("getSelectedCount");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_getSelectedItems00","300","342","270","40",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("getSelectedItems");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","15","434","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("Grid");
            obj.set_cssclass("sta_WF_TypeTitle");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","25","474","545","191",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_positionstep("1");
            obj.set_binddataset("dsGrid");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"182\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell row=\"1\" displaytype=\"multicombocontrol\" edittype=\"multicombo\" multicombodataset=\"dsCombo\" multicombocodecol=\"code\" multicombodatacol=\"data\"/><Cell row=\"1\" col=\"1\"/><Cell row=\"1\" col=\"2\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_01","25","85","178","25",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("edittype");
            obj.set_font("bold 14px/normal \"Verdana\",\"Malgun Gothic\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,700,this,function(p){});
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
        this.registerScript("Comp_MultiCombo.xfdl", function() {
        this.CheckBoxSet00_canitemchange = function(obj,e)
        {
        	var strRtn = "";
        	strRtn += "obj : " + obj.name;
        	strRtn += "\ne.eventid : " + e.eventid;
        	strRtn += "\n--------------------------------------";
        	strRtn += "\ne.postindex : " + e.postindex;
        	strRtn += "\ne.postvalue : " + e.postvalue;
        	strRtn += "\ne.posttext : " + e.posttext;
        	strRtn += "\n--------------------------------------";
        	strRtn += "\ne.preindex : " + e.preindex;
        	strRtn += "\ne.prevalue : " + e.prevalue;
        	strRtn += "\ne.pretext : " + e.pretext;

        	this.txt_result.set_value(strRtn);
        };

        this.Button_onclick = function(obj,e)
        {

        	var strTxt = obj.text;
        	var strDes = "";

        	switch(strTxt) {
        		case 'showselectallcheckbox(true)':
        			this.mcbSelectAll.set_showselectallcheckbox(true);
        			strDes = "아이템 리스트 상단에 아이템 전체를 선택 또는 선택해제하는 체크박스의 표시 여부를 설정하는 속성입니다.\n";
        			strDes += "멀티콤보를 클릭하면 SELECT ALL 이 추가된 것을 확인할 수 있습니다. ";
        			obj.set_text('showselectallcheckbox(false)')
        			break;
        		case 'showselectallcheckbox(false)':
        			this.mcbSelectAll.set_showselectallcheckbox(false);
        			strDes = "아이템 리스트 상단에 아이템 전체를 선택 또는 선택해제하는 체크박스의 표시 여부를 설정하는 속성입니다.\n";
        			strDes += "멀티콤보를 클릭하면 SELECT ALL 이 삭제된 것을 확인할 수 있습니다. ";
        			obj.set_text('showselectallcheckbox(true)')
        			break;
        		case 'set_index("0, 4, 5")':
        			this.mcbIndex.set_index("0, 4, 5");
        			strDes = "MultiCombo 컴포넌트의 아이템 중 선택된 아이템의 인덱스를 갖는 속성입니다.";
        			break;
        		case 'set_index("-1")':
        			this.mcbIndex.set_index("-1");
        			strDes = "MultiCombo 컴포넌트의 아이템 중 선택된 아이템의 인덱스를 갖는 속성입니다.";
        			break;

        		case 'setSelect(0, true)':
        			this.MultiCombo00.clearSelect();
        			this.MultiCombo00.setSelect(0, true);
        			strDes = 'MultiCombo 컴포넌트에서 특정 아이템의 선택상태를 설정하는 메서드입니다.';
        			strDes += '\ntrue 설정 시 아이템이 선택상태로 설정됩니다';
        			break;
        		case 'setSelect(0, false)':
        			this.MultiCombo00.setSelect(0, false);
        			strDes = 'MultiCombo 컴포넌트에서 여러 개의 아이템을 선택하는 메서드입니다.';
        			strDes += '\nfalse 설정 시 아이템의 선택상태가 해제됩니다.';
        			break;
        		case 'setSelectItems([5, 3, 1], true)':
        			this.MultiCombo00.clearSelect();
        			this.MultiCombo00.setSelectItems([5, 3, 1], true);
        			strDes = 'MultiCombo 컴포넌트에서 여러 개의 아이템을 선택하는 메서드입니다.';
        			strDes += '\ntrue 설정 시 아이템이 선택상태로 설정됩니다';

        			break;
        		case 'setSelectItems([5, 3, 1], false)':
        			this.MultiCombo00.setSelectItems([5, 3, 1], false);
        			strDes = 'MultiCombo 컴포넌트에서 여러 개의 아이템을 선택하는 메서드입니다.';
        			strDes += '\nfalse 설정 시 아이템이 선택상태가 해제됩니다';
        			break;
        		case 'setSelectRange(1, 6, true)':
        			this.MultiCombo00.clearSelect();
        			this.MultiCombo00.setSelectRange(1, 6, true);
        			strDes = 'MultiCombo 컴포넌트에서 지정된 인덱스 범위의 아이템 영역을 선택하는 메서드입니다.';
        			strDes += '\ntrue 설정 시 아이템이 선택상태로 설정됩니다';
        			break;
        		case 'setSelectRange(1, 6, false)':
        			this.MultiCombo00.setSelectRange(1, 6, false);
        			strDes = 'MultiCombo 컴포넌트에서 지정된 인덱스 범위의 아이템 영역을 선택하는 메서드입니다.';
        			strDes += '\nfalse 설정 시 아이템이 선택상태가 해제됩니다';
        			break;
        		case 'selectAll()':
        			this.MultiCombo00.selectAll();
        			strDes = 'MultiCombo 컴포넌트에서 아이템을 모두 선택하는 메서드입니다.';
        			break;
        		case 'clearSelect()':
        			this.MultiCombo00.clearSelect();
        			strDes = 'MultiCombo 컴포넌트에서 선택된 아이템의 선택상태를 모두 해제하는 메서드입니다.';
        			break;
        		case 'getSelectedCount':
        			strDes = this.MultiCombo00.getSelectedCount();
        			strDes += '\nMultiCombo 컴포넌트의 아이템 중 선택상태인 아이템의 개수를 반환하는 메서드입니다.';
        			break;
        		case 'getSelectedItems':
        			strDes = this.MultiCombo00.getSelectedItems();
        			strDes += '\nMultiCombo 컴포넌트의 아이템 중 선택상태인 아이템의 인덱스를 배열로 반환하는 메서드입니다.';
        			break;
        		default:
        	}

        	var strRtn = "";
        	strRtn += strTxt;
        	strRtn += "\n--------------------------------------";
        	strRtn += "\n" + strDes;
        	this.txt_result.set_value(strRtn);
        };

        this.Button00_onclick = function(obj,e)
        {
        	this.reload();
        };


        this.Radio00_onitemchanged = function(obj,e)
        {
        	this.mcbCount.set_counttextformat(e.postvalue);

        	var strRtn = "counttextformat"
        	strRtn += "\n--------------------------------------";
        	strRtn += '\nMultiCombo 컴포넌트의 edittype 속성값이 "count"일 때 선택된 아이템 개수를 표시할 텍스트를 설정하는 속성입니다.';

        	this.txt_result.set_value(strRtn);
        };

        this.MultiCombo_onitemchanged = function(obj,e)
        {
        	var strRtn = "";
        	strRtn += "** onitemchanged Event start **";
        	strRtn += "\nedittype    : " + obj.edittype;
        	strRtn += "\ne.postindex    : " + e.postindex;
        	strRtn += "\ne.posttext    : " + e.posttext;
        	strRtn += "\ne.postvalue    : " + e.postvalue;
        	strRtn += "\n--------------------------------------";
        	strRtn += "\ne.preindex    : " + e.preindex;
        	strRtn += "\ne.pretext    : " + e.pretext;
        	strRtn += "\ne.prevalue    : " + e.prevalue;

        	this.txt_result.set_value(strRtn);
        };

        this.fn_textseparator = function(obj,e)
        {
        	this.mcbTextseparator.set_textseparator(obj.text);

        	var strRtn = "";
        	strRtn += "textseparator";
        	strRtn += "\n--------------------------------------";
        	strRtn += "\n구분자 : " + obj.text;
        	strRtn += '\nMultiCombo 컴포넌트에서 2개 이상의 text 속성값 설정 시 구분자로 사용할 값을 설정하는 속성입니다.';


        	this.txt_result.set_value(strRtn);
        };





        this.Grid01_onheadvaluechanged = function(obj,e)
        {

        	if(!e.newvalue) {
        		this.dsGrid.filter("");
        		return;
        	}

        	var array = (e.newvalue).split(",");
        	var filterString = "";

        	if(array) {
        		filterString = array.map(function(item) {
        			return "'" + item + "' == Column0";
        		}).join("||");

        		this.dsGrid.filter(filterString);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static08.addEventHandler("onclick",this.Static08_onclick,this);
            this.txt_result.addEventHandler("onchanged",this.txt_result_onchanged,this);
            this.btn_set_index.addEventHandler("onclick",this.Button_onclick,this);
            this.btn_set_index2.addEventHandler("onclick",this.Button_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.mcbText.addEventHandler("onitemchanged",this.MultiCombo_onitemchanged,this);
            this.mcbSingletag.addEventHandler("onitemchanged",this.MultiCombo_onitemchanged,this);
            this.mcbMultitag.addEventHandler("onitemchanged",this.MultiCombo_onitemchanged,this);
            this.mcbCount.addEventHandler("onitemchanged",this.MultiCombo_onitemchanged,this);
            this.Radio00.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
            this.btn_showselectallcheckbox.addEventHandler("onclick",this.Button_onclick,this);
            this.mcbSelectAll.addEventHandler("onitemchanged",this.MultiCombo_onitemchanged,this);
            this.btn_textseparator.addEventHandler("onclick",this.fn_textseparator,this);
            this.mcbTextseparator.addEventHandler("onitemchanged",this.MultiCombo_onitemchanged,this);
            this.btn_textseparator00.addEventHandler("onclick",this.fn_textseparator,this);
            this.btn_textseparator00_00.addEventHandler("onclick",this.fn_textseparator,this);
            this.btn_textseparator00_00_00.addEventHandler("onclick",this.fn_textseparator,this);
            this.btn_textseparator00_00_00_00.addEventHandler("onclick",this.fn_textseparator,this);
            this.mcbIndex.addEventHandler("onitemchanged",this.MultiCombo_onitemchanged,this);
            this.MultiCombo00.addEventHandler("onitemchanged",this.MultiCombo_onitemchanged,this);
            this.btn_setSelect.addEventHandler("onclick",this.Button_onclick,this);
            this.btn_setSelect0.addEventHandler("onclick",this.Button_onclick,this);
            this.btn_setSelectRange.addEventHandler("onclick",this.Button_onclick,this);
            this.btn_setSelectItems.addEventHandler("onclick",this.Button_onclick,this);
            this.btn_setSelectItems0.addEventHandler("onclick",this.Button_onclick,this);
            this.btn_setSelectRange0.addEventHandler("onclick",this.Button_onclick,this);
            this.btn_clearSelect.addEventHandler("onclick",this.Button_onclick,this);
            this.btn_selectAll.addEventHandler("onclick",this.Button_onclick,this);
            this.btn_getSelectedCount.addEventHandler("onclick",this.Button_onclick,this);
            this.btn_getSelectedItems00.addEventHandler("onclick",this.Button_onclick,this);
            this.Grid01.addEventHandler("onheadvaluechanged",this.Grid01_onheadvaluechanged,this);
        };
        this.loadIncludeScript("Comp_MultiCombo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
