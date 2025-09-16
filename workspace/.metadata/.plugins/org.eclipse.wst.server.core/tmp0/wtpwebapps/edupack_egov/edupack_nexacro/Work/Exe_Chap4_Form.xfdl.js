(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Exe2_Chap4_Form");
            this.set_titletext("Exe2_Chap4_Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset1", this);
            obj.set_keystring("");
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"POS_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/><Column id=\"MEMO\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"FULL_NAME\">Olivia</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20101003</Col><Col id=\"SALARY\">83490000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"MEMO\">ivory</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"EMPL_ID\">KR180</Col></Row><Row><Col id=\"FULL_NAME\">John</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20051011</Col><Col id=\"SALARY\">76010000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"MEMO\">greenyellow</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">KR190</Col></Row><Row><Col id=\"FULL_NAME\">Dillon</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20150401</Col><Col id=\"SALARY\">62540000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"MEMO\">lightpink</Col><Col id=\"DEPT_CD\">03</Col><Col id=\"EMPL_ID\">JP110</Col></Row><Row><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20070206</Col><Col id=\"SALARY\">99050000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"MEMO\">aliceblue</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">JP390</Col></Row><Row><Col id=\"FULL_NAME\">Joseph</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20070304</Col><Col id=\"SALARY\">61220000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"MEMO\">lightgray</Col><Col id=\"DEPT_CD\">05</Col><Col id=\"EMPL_ID\">CN300</Col></Row><Row><Col id=\"FULL_NAME\">Maia</Col><Col id=\"POS_CD\">01</Col><Col id=\"HIRE_DATE\">20090512</Col><Col id=\"SALARY\">63030000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"MEMO\">ivory</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"EMPL_ID\">KR310</Col></Row><Row><Col id=\"FULL_NAME\">Adam</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20010109</Col><Col id=\"SALARY\">88450000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"MEMO\">greenyellow</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"EMPL_ID\">KR350</Col></Row><Row><Col id=\"FULL_NAME\">Ray</Col><Col id=\"POS_CD\">01</Col><Col id=\"HIRE_DATE\">20160202</Col><Col id=\"SALARY\">67420000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"MEMO\">lightpink</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">CN160</Col></Row><Row><Col id=\"FULL_NAME\">Cameron</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20010303</Col><Col id=\"SALARY\">86250000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"MEMO\">aliceblue</Col><Col id=\"DEPT_CD\">03</Col><Col id=\"EMPL_ID\">KR260</Col></Row><Row><Col id=\"FULL_NAME\">Aladdin</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20161003</Col><Col id=\"SALARY\">67390000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"MEMO\">lightgray</Col><Col id=\"DEPT_CD\">05</Col><Col id=\"EMPL_ID\">JP140</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset3", this);
            obj.set_keystring("");
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"EMPL_ID\">AA001</Col><Col id=\"FULL_NAME\">Olivia</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"SALARY\">3000</Col></Row><Row><Col id=\"EMPL_ID\">AA002</Col><Col id=\"FULL_NAME\">John</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"SALARY\">6000</Col></Row><Row><Col id=\"EMPL_ID\">BB001</Col><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"DEPT_CD\">03</Col><Col id=\"SALARY\">3000</Col></Row><Row><Col id=\"EMPL_ID\">BB002</Col><Col id=\"FULL_NAME\">Maia</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"SALARY\">4000</Col></Row><Row><Col id=\"EMPL_ID\">CC001</Col><Col id=\"FULL_NAME\">Adam</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"SALARY\">8000</Col></Row><Row><Col id=\"EMPL_ID\">DD001</Col><Col id=\"FULL_NAME\">Ray</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"SALARY\">5000</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static06","10","10","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Exercise - Form");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","10","40","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Exe1");
            obj.set_cssclass("sta_WF_TypeTitle");
            this.addChild(obj.name, obj);

            obj = new Div("Div1","510","50","463","223",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Button("Button1","10","10","80","30",null,null,null,null,null,null,this.Div1.form);
            obj.set_taborder("0");
            obj.set_text("Save");
            this.Div1.addChild(obj.name, obj);

            obj = new Grid("Grid1","10","50","440","162",null,null,null,null,null,null,this.Div1.form);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset1");
            obj.set_autosizingtype("");
            obj.set_autofittype("col");
            obj.set_fillareatype("linerow");
            obj.set_positionstep("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"128\"/><Column size=\"73\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"Name\"/><Cell col=\"1\" text=\"Annual Salary\"/><Cell col=\"2\" text=\"Married\"/></Band><Band id=\"body\"><Cell text=\"bind:FULL_NAME\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:SALARY\" textAlign=\"right\"/><Cell col=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:MARRIED\"/></Band></Format></Formats>");
            this.Div1.addChild(obj.name, obj);

            obj = new Button("btn_Exe1_1","10","70","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("1_1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe1_2","10","110","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("1_2");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","10","160","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Exe2");
            obj.set_cssclass("sta_WF_TypeTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe2_1","10","190","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("2_1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe2_2","10","230","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("2_2");
            this.addChild(obj.name, obj);

            obj = new Static("Static2","280","190","136","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_LabelTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","280","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Exe3");
            obj.set_cssclass("sta_WF_TypeTitle");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit3_1","81","310","180","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_value("Nexacro");
            obj.set_positionstep("0");
            obj.set_text("Nexacro");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit3_2","81","350","180","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_value("Education");
            obj.set_positionstep("0");
            obj.set_text("Education");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","310","63","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Param1");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","10","350","63","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Param2");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe3_1","10","529","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("3_1");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe3_3","10","569","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("3_3");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe3_05","10","609","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("3_5");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","10","390","63","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Param3");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid3","80","390","403","129",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_binddataset("Dataset3");
            obj.set_autofittype("col");
            obj.set_positionstep("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"EMPL_ID\"/><Cell col=\"1\" text=\"FULL_NAME\"/><Cell col=\"2\" text=\"DEPT_CD\"/><Cell col=\"3\" text=\"SALARY\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPL_ID\"/><Cell col=\"1\" text=\"bind:FULL_NAME\"/><Cell col=\"2\" text=\"bind:DEPT_CD\"/><Cell col=\"3\" text=\"bind:SALARY\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","80","70","357","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("폼에 생성되어 있는 오브젝트/컴포넌트 정보를 구하기. ");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","80","110","297","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("컴포넌트ID String 값을 오브젝트로 만들기 ");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","80","190","297","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("타이머를 이용하여 시간 표현 ");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","80","230","297","30",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("타이머 해제 ");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","80","529","840","30",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("모달 팝업창 오픈, 파라메터 전송. 팝업창에서 파라메터 받기. / 3 - 2 모달 팝업창에서 부모창에 리턴값 전송. 부모창에서 리턴값 받기");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","80","569","770","30",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("모달리스 팝업창 오픈, 파라메터 전송.  / 3 – 4 모달리스 팝업창에서 부모창에 ds_child 데이터셋을 전송.");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","80","609","407","30",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("부모창에서 팝업창 오브젝트 접근. ");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div1.form
            obj = new Layout("default","",0,0,this.Div1.form,function(p){});
            this.Div1.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1000,700,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Exe_Chap4_Form.xfdl", function() {
        this.btn_Exe1_1_onclick = function(obj,e)
        {
           // var arrObj = this.components; // Form Components
           // var arrObj = this.objects; // invisible object (dataset)
           // var arrObj = this.all; // all (Form Components + Dataset)
           this.fn_compList(this);

           // 재귀함수
        };

        this.fn_compList = function(pObj)
        {
           var arrObj = this.all;
           for (var i = 0; i < arrObj.length; i++) {

           var sType = arrObj[i].valueOf();
           if (sType == "[Object Div]") {
              this.fn_compList(arrObj[i].form);
              }
              trace(arrObj[i] + " : " + arrObj[i].id);
           }

        };
        this.btn_Exe1_2_onclick = function(obj,e)
        {
           var sGridID = this.Grid3.name;
           trace(sGridID + " : " + typeof sGridID); // string

           var objGrid = this.components[sGridID];
           trace (objGrid + " : " + typeof objGrid);
        };

        this.btn_Exe2_1_onclick = function(obj,e)
        {
           this.setTimer(123, 1000); //타이머 설정
        };

        this.Form_ontimer = function(obj,e)
        {
           if (e.timerid == 123) {
              this.fn_getTime();
           }
        };

        this.fn_getTime = function()
        {
           var objDate = new Date();

           this.Static2.set_text(
           objDate.getHours() + ":"
           + objDate.getMinutes() + ":"
            + objDate.getSeconds());
        };
        this.btn_Exe2_2_onclick = function(obj,e)
        {
           this.killTimer(123);
        };

        this.btn_Exe3_1_onclick = function(obj,e)
        {
           var CF = new ChildFrame();
           var strName = "chf";
           var nLeft = 0;
           var nTop = 0;
           var nWidth = 400;
           var nHeight = 400;
           var nRight = null;
           var nBottom = null;
           var strUrl = "Work::Exe_Chap4_Form_Popup.xfdl"; // 복사한 경우에는 Generate 필수

           var objParam = {param1:this.Edit3_1.value		//param1,2,3 >> 임의로 정해주는 값
        					, param2:this.Edit3_2.value
        					, param3:this.Dataset3 };

           CF.init(strName, nLeft, nTop, nWidth, nHeight, nRight, nBottom, strUrl);
           CF.set_openalign("center middle");

           CF.showModal(this.getOwnerFrame(), objParam, this, "fn_popupCallback");
        };

        this.fn_popupCallback = function(id, rtn){ //팝업에는 들어가는input이 2개
        	if(!this.gfnIsNull(rtn)){
        		var arrRtn = rtn.split(":");
        		this.Edit3_1.set_value(arrRtn[0]);
        		this.Edit3_2.set_value(arrRtn[1]);
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ontimer",this.Form_ontimer,this);
            this.btn_Exe1_1.addEventHandler("onclick",this.btn_Exe1_1_onclick,this);
            this.btn_Exe1_2.addEventHandler("onclick",this.btn_Exe1_2_onclick,this);
            this.btn_Exe2_1.addEventHandler("onclick",this.btn_Exe2_1_onclick,this);
            this.btn_Exe2_2.addEventHandler("onclick",this.btn_Exe2_2_onclick,this);
            this.btn_Exe3_1.addEventHandler("onclick",this.btn_Exe3_1_onclick,this);
            this.btn_Exe3_3.addEventHandler("onclick",this.btn_Exe3_3_onclick,this);
            this.btn_Exe3_05.addEventHandler("onclick",this.btn_Exe3_5_onclick,this);
        };
        this.loadIncludeScript("Exe_Chap4_Form.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
