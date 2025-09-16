(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_CheckBoxSet");
            this.set_titletext("Component-Checkbox");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCheckBoxSet", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/><Column id=\"readonly\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"data\">apple</Col><Col id=\"readonly\">0</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">banana</Col><Col id=\"readonly\">0</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"data\">orange</Col><Col id=\"readonly\">0</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"data\">kiwi</Col><Col id=\"readonly\">0</Col></Row><Row><Col id=\"code\">5</Col><Col id=\"data\">peach</Col><Col id=\"readonly\">0</Col></Row><Row><Col id=\"data\">mango</Col><Col id=\"code\">6</Col><Col id=\"readonly\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDescription", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"DescKor\" type=\"STRING\" size=\"256\"/><Column id=\"DescEng\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static08","10","10","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("CheckBoxSet");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new CheckBoxSet("CheckBoxSet00","6","40","984","66",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("dsCheckBoxSet");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_readonlycolumn("readonly");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_result",null,"157","410","290","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_value("CheckBoxSet\n\n* 여러 아이템 목록 중에서 한 개 이상의 값을 선택하기 위한 용도로 사용하는 컴포넌트입니다. \n* 각 아이템은 CheckBox 컴포넌트와 비슷하며 아이템의 배치 등의 동작은 Radio 컴포넌트와 비슷합니다.");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00",null,"470","410","170","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsCheckBoxSet");
            obj.set_autofittype("col");
            obj.set_autosizingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"43\"/><Column size=\"90\"/><Column size=\"74\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"code\"/><Cell col=\"1\" text=\"data\"/><Cell col=\"2\" text=\"readonly\"/></Band><Band id=\"body\"><Cell text=\"bind:code\"/><Cell col=\"1\" text=\"bind:data\"/><Cell col=\"2\" text=\"bind:readonly\" cssclass=\"expr:readonly==&quot;0&quot;?&quot;&quot;:&quot;cell_style1&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_01",null,"116","410","30","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("description");
            obj.set_cssclass("sta_WF_TypeTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","5","131","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Dataset Binding");
            obj.set_cssclass("sta_WF_TypeTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_readonly","7","166","270","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("readonly(1,3, true)");
            this.addChild(obj.name, obj);

            obj = new Button("btn_readonly01","282","166","270","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("readonly(1,3, false)");
            this.addChild(obj.name, obj);

            obj = new Button("btn_set_index","7","246","270","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("set_index(\"0, 4, 5\")");
            this.addChild(obj.name, obj);

            obj = new Button("btn_set_index2","282","246","270","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("set_index(\"-1\")");
            this.addChild(obj.name, obj);

            obj = new Button("btn_setSelect","7","416","270","40",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("setSelect(0, true)");
            this.addChild(obj.name, obj);

            obj = new Button("btn_setSelect0","282","416","270","40",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("setSelect(0, false)");
            this.addChild(obj.name, obj);

            obj = new Button("btn_setSelectRange","7","506","270","40",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("setSelectRange(1, 6, true)");
            this.addChild(obj.name, obj);

            obj = new Button("btn_setSelectItems","7","461","270","40",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("setSelectItems([5, 3, 1], true)");
            this.addChild(obj.name, obj);

            obj = new Button("btn_setSelectItems0","282","461","270","40",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("setSelectItems([5, 3, 1], false)");
            this.addChild(obj.name, obj);

            obj = new Button("btn_setSelectRange0","282","506","270","40",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("setSelectRange(1, 6, false)");
            this.addChild(obj.name, obj);

            obj = new Button("btn_set_rowcount","7","291","270","40",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("set_rowcount(2)");
            this.addChild(obj.name, obj);

            obj = new Button("btn_set_columncount","282","291","270","40",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("set_columncount(2)");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00","5","211","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("Property");
            obj.set_cssclass("sta_WF_TypeTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","3","381","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("Method");
            obj.set_cssclass("sta_WF_TypeTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_set_fittocontents","282","336","270","40",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("set_fittocontents(\"width\")");
            this.addChild(obj.name, obj);

            obj = new Button("btn_set_direction","7","336","270","40",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("set_direction(\"vertical\")");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clearSelect","282","551","270","40",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("clearSelect()");
            this.addChild(obj.name, obj);

            obj = new Button("btn_selectAll","7","551","270","40",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("selectAll()");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","417","126","135","35",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("reload");
            this.addChild(obj.name, obj);

            obj = new Button("btn_getSelectedCount","7","596","270","40",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("getSelectedCount");
            this.addChild(obj.name, obj);

            obj = new Button("btn_getSelectedItems00","282","596","270","40",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("getSelectedItems");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,700,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Comp_CheckBoxSet.xfdl", function() {
        this.CheckBoxSet00_canitemchange = function(obj,e)
        {
        	var strRtn = "";
        	strRtn += "obj : " + obj.name;
        	strRtn += "\ne.eventid : " + e.eventid;
        	strRtn += "\n---------------------------------------------";
        	strRtn += "\ne.postindex : " + e.postindex;
        	strRtn += "\ne.postvalue : " + e.postvalue;
        	strRtn += "\ne.posttext : " + e.posttext;
        	strRtn += "\n---------------------------------------------";
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
        		case 'readonly(1,3, true)':
        			this.dsCheckBoxSet.setColumn(1, "readonly", "1");
        			this.dsCheckBoxSet.setColumn(3, "readonly", "1");
        			strDes = "CheckBoxSet 컴포넌트에서 아이템 readonly 여부 설정 시 사용될 Column의 값이 true인 경우에는 모든 아이템이 readonly로 처리됩니다";
        			strDes += '\n > false로 처리되는 값  : - 0, -0, "0", "-0", "false", "NaN", 빈 값, Null';
        			break;
        		case 'readonly(1,3, false)':
        			this.dsCheckBoxSet.setColumn(1, "readonly", "0");
        			this.dsCheckBoxSet.setColumn(3, "readonly", "0");
        			strDes = "CheckBoxSet 컴포넌트에서 아이템 readonly 여부 설정 시 사용될 Column의 값이 true인 경우에는 모든 아이템이 readonly로 처리됩니다";
        			strDes += '\n > false로 처리되는 값  : - 0, -0, "0", "-0", "false", "NaN", 빈 값, Null';
        			break;
        		case 'set_index("0, 4, 5")':
        			this.CheckBoxSet00.set_index("0, 4, 5");
        			strDes = "CheckBoxSet 컴포넌트의 아이템 중 선택된 아이템의 인덱스를 갖는 속성입니다.";
        			strDes += "\n선택할 아이템의 인덱스를 1개 이상 콤마(,) 구분자를 사용해 설정합니다.";
        			strDes += "\n인덱스는 0부터 시작하며 (아이템개수 - 1)까지 설정할 수 있습니다.";
        			break;
        		case 'set_index("-1")':
        			this.CheckBoxSet00.set_index("-1");
        			strDes = '속성값을 "-1"로 설정하면 선택된 아이템이 없는 상태가 됩니다.';
        			break;
        		case 'set_rowcount(2)':
        		case 'set_rowcount(0)':
        			var index = nexacro.toNumber(strTxt.slice(-2, strTxt.length-1));
        			this.CheckBoxSet00.set_columncount(0);
        			this.CheckBoxSet00.set_rowcount(index);
        			obj.set_text("set_rowcount("+ (index==0?2:0) + ")");
        			strDes = 'CheckBoxSet 컴포넌트에서 한 행에 표시되는 아이템 개수를 설정하는 속성입니다.';
        			strDes += '\nrowcount 속성값이 1 이상이고 direction 속성값을 "vertical"으로 설정했을 때 columncount 속성값은 무시합니다. ';
        			strDes += '\n또한 rowcount 속성값이 1 이상이고 columncount 속성값이 0 또는 -1로 설정했을 때 columncount 속성값은 무시합니다.';
        			break;
        		case 'set_columncount(2)':
        		case 'set_columncount(0)':
        			var index = nexacro.toNumber(strTxt.slice(-2, strTxt.length-1));
        			this.CheckBoxSet00.set_rowcount(1);
        			this.CheckBoxSet00.set_columncount(index);
        			obj.set_text("set_columncount("+ (index==0?2:0) + ")");
        			strDes = 'CheckBoxSet 컴포넌트에서 한 열에 표시되는 아이템 개수를 설정하는 속성입니다.';
        			strDes += '\ncolumncount 속성값이 1 이상이고 direction 속성값을 "horizontal"으로 설정했을 때 rowcount 속성값은 무시합니다.';
        			strDes += '\n또한 columncount 속성값이 1 이상이고 rowcount 속성값이 0 또는 -1로 설정했을 때 rowcount 속성값은 무시합니다.';
        			break;
        		case 'set_direction("vertical")':
        		case 'set_direction("horizontal")':
        			var strGubun = strTxt.substring(strTxt.search('"')+1, strTxt.length - 2);
        			this.CheckBoxSet00.set_direction(strGubun);
        			strGubun = strGubun=="vertical"?"horizontal":"vertical";
        			obj.set_text('set_direction("'+strGubun +'")');
        			strDes = 'CheckBoxSet 컴포넌트에서 아이템이 표시되는 방향을 설정하는 속성입니다.';
        			break;
        		case 'set_fittocontents("width")':
        		case 'set_fittocontents("none")':
        			var strGubun = strTxt.substring(strTxt.search('"')+1, strTxt.length - 2);
        			this.CheckBoxSet00.set_fittocontents(strGubun);
        			strGubun = strGubun=="width"?"none":"width";
        			obj.set_text('set_fittocontents("'+strGubun +'")');
        			strDes = 'CheckBoxSet 의 내부 컨텐츠영역이 컨텐츠 내용에 맞게 자동조정되는 영역을 설정하는 속성입니다.';
        			break;
        		case 'setSelect(0, true)':
        			this.CheckBoxSet00.clearSelect();
        			this.CheckBoxSet00.setSelect(0, true);
        			strDes = 'CheckBoxSet 컴포넌트에서 특정 아이템의 선택상태를 설정하는 메서드입니다.';
        			strDes += '\ntrue 설정 시 아이템이 선택상태로 설정됩니다';
        			break;
        		case 'setSelect(0, false)':
        			this.CheckBoxSet00.setSelect(0, false);
        			strDes = 'CheckBoxSet 컴포넌트에서 여러 개의 아이템을 선택하는 메서드입니다.';
        			strDes += '\nfalse 설정 시 아이템의 선택상태가 해제됩니다.';
        			break;
        		case 'setSelectItems([5, 3, 1], true)':
        			this.CheckBoxSet00.clearSelect();
        			this.CheckBoxSet00.setSelectItems([5, 3, 1], true);
        			strDes = 'CheckBoxSet 컴포넌트에서 여러 개의 아이템을 선택하는 메서드입니다.';
        			strDes += '\ntrue 설정 시 아이템이 선택상태로 설정됩니다';

        			break;
        		case 'setSelectItems([5, 3, 1], false)':
        			this.CheckBoxSet00.setSelectItems([5, 3, 1], false);
        			strDes = 'CheckBoxSet 컴포넌트에서 여러 개의 아이템을 선택하는 메서드입니다.';
        			strDes += '\nfalse 설정 시 아이템이 선택상태가 해제됩니다';
        			break;
        		case 'setSelectRange(1, 6, true)':
        			this.CheckBoxSet00.clearSelect();
        			this.CheckBoxSet00.setSelectRange(1, 6, true);
        			strDes = 'CheckBoxSet 컴포넌트에서 지정된 인덱스 범위의 아이템 영역을 선택하는 메서드입니다.';
        			strDes += '\ntrue 설정 시 아이템이 선택상태로 설정됩니다';
        			break;
        		case 'setSelectRange(1, 6, false)':
        			this.CheckBoxSet00.setSelectRange(1, 6, false);
        			strDes = 'CheckBoxSet 컴포넌트에서 지정된 인덱스 범위의 아이템 영역을 선택하는 메서드입니다.';
        			strDes += '\nfalse 설정 시 아이템이 선택상태가 해제됩니다';
        			break;
        		case 'selectAll()':
        			this.CheckBoxSet00.selectAll();
        			strDes = 'CheckBoxSet 컴포넌트에서 아이템을 모두 선택하는 메서드입니다.';
        			break;
        		case 'clearSelect()':
        			this.CheckBoxSet00.clearSelect();
        			strDes = 'CheckBoxSet 컴포넌트에서 선택된 아이템의 선택상태를 모두 해제하는 메서드입니다.';
        			break;
        		case 'getSelectedCount':
        			strDes = this.CheckBoxSet00.getSelectedCount();
        			strDes += '\nCheckBoxSet 컴포넌트의 아이템 중 선택상태인 아이템의 개수를 반환하는 메서드입니다.';
        			break;
        		case 'getSelectedItems':
        			strDes = this.CheckBoxSet00.getSelectedItems();
        			strDes += '\nCheckBoxSet 컴포넌트의 아이템 중 선택상태인 아이템의 인덱스를 배열로 반환하는 메서드입니다.';
        			break;
        		default:
        	}

        	var strRtn = "";
        	strRtn += strTxt;
        	strRtn += "\n---------------------------------------------";
        	strRtn += "\n" + strDes;
        	this.txt_result.set_value(strRtn);
        };

        this.Button00_onclick = function(obj,e)
        {
        	this.reload();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static08.addEventHandler("onclick",this.Static08_onclick,this);
            this.CheckBoxSet00.addEventHandler("canitemchange",this.CheckBoxSet00_canitemchange,this);
            this.btn_readonly.addEventHandler("onclick",this.Button_onclick,this);
            this.btn_readonly01.addEventHandler("onclick",this.Button_onclick,this);
            this.btn_set_index.addEventHandler("onclick",this.Button_onclick,this);
            this.btn_set_index2.addEventHandler("onclick",this.Button_onclick,this);
            this.btn_setSelect.addEventHandler("onclick",this.Button_onclick,this);
            this.btn_setSelect0.addEventHandler("onclick",this.Button_onclick,this);
            this.btn_setSelectRange.addEventHandler("onclick",this.Button_onclick,this);
            this.btn_setSelectItems.addEventHandler("onclick",this.Button_onclick,this);
            this.btn_setSelectItems0.addEventHandler("onclick",this.Button_onclick,this);
            this.btn_setSelectRange0.addEventHandler("onclick",this.Button_onclick,this);
            this.btn_set_rowcount.addEventHandler("onclick",this.Button_onclick,this);
            this.btn_set_columncount.addEventHandler("onclick",this.Button_onclick,this);
            this.btn_set_fittocontents.addEventHandler("onclick",this.Button_onclick,this);
            this.btn_set_direction.addEventHandler("onclick",this.Button_onclick,this);
            this.btn_clearSelect.addEventHandler("onclick",this.Button_onclick,this);
            this.btn_selectAll.addEventHandler("onclick",this.Button_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.btn_getSelectedCount.addEventHandler("onclick",this.Button_onclick,this);
            this.btn_getSelectedItems00.addEventHandler("onclick",this.Button_onclick,this);
        };
        this.loadIncludeScript("Comp_CheckBoxSet.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
