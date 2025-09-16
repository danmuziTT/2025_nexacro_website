(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Exe2_Chap1_Dataset");
            this.set_titletext("Exe2_Chap1_Dataset");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset1", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"BONUS\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/><Column id=\"E_MAIL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">John </Col><Col id=\"EMPL_ID\">KR010</Col><Col id=\"HIRE_DATE\">20120304</Col><Col id=\"SALARY\">6000</Col><Col id=\"BONUS\">300</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"E_MAIL\">John@nexacro.com</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"EMPL_ID\">KR020</Col><Col id=\"HIRE_DATE\">20160602</Col><Col id=\"SALARY\">6000</Col><Col id=\"BONUS\">200</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"E_MAIL\">Jackson@nexacro.com</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Adam</Col><Col id=\"EMPL_ID\">KR030</Col><Col id=\"HIRE_DATE\">20030805</Col><Col id=\"SALARY\">3000</Col><Col id=\"BONUS\">50</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"E_MAIL\">Adamr@nexacro.com</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Melon</Col><Col id=\"EMPL_ID\">KR040</Col><Col id=\"HIRE_DATE\">20071001</Col><Col id=\"SALARY\">9000</Col><Col id=\"BONUS\">1000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"E_MAIL\">Melon@nexacro.com</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Kein </Col><Col id=\"EMPL_ID\">KR110</Col><Col id=\"HIRE_DATE\">20180201</Col><Col id=\"SALARY\">1000</Col><Col id=\"BONUS\">100</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"E_MAIL\">Kein@nexacro.com</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Kara</Col><Col id=\"EMPL_ID\">KR120</Col><Col id=\"HIRE_DATE\">20171020</Col><Col id=\"SALARY\"/><Col id=\"BONUS\"/><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"E_MAIL\">Ivy@nexacro.com</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Twice</Col><Col id=\"EMPL_ID\">KR130</Col><Col id=\"HIRE_DATE\">20130102</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"E_MAIL\">Kara@nexacro.com</Col><Col id=\"SALARY\"/><Col id=\"BONUS\"/></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Bts</Col><Col id=\"EMPL_ID\">KR210</Col><Col id=\"HIRE_DATE\">20091021</Col><Col id=\"SALARY\">1000</Col><Col id=\"BONUS\">500</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"E_MAIL\">Bts@nexacro.com</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Andrew </Col><Col id=\"EMPL_ID\">KR220</Col><Col id=\"HIRE_DATE\">20110928</Col><Col id=\"SALARY\">8000</Col><Col id=\"BONUS\">30</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"E_MAIL\">Andrew@nexacro.com</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Belle</Col><Col id=\"EMPL_ID\">KR230</Col><Col id=\"HIRE_DATE\">20161120</Col><Col id=\"SALARY\">6000</Col><Col id=\"BONUS\">50</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"E_MAIL\">Belle@nexacro.com</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset4", this);
            obj.set_keystring("");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">John</Col><Col id=\"EMPL_ID\">KR010</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">M</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Melon</Col><Col id=\"EMPL_ID\">KR040</Col><Col id=\"SALARY\">9000</Col><Col id=\"GENDER\">W</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Kara</Col><Col id=\"EMPL_ID\">KR120</Col><Col id=\"SALARY\"/><Col id=\"GENDER\">W</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Twice</Col><Col id=\"EMPL_ID\">KR130</Col><Col id=\"GENDER\">W</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Bts</Col><Col id=\"EMPL_ID\">KR210</Col><Col id=\"SALARY\">1000</Col><Col id=\"GENDER\">M</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Andrew</Col><Col id=\"EMPL_ID\">KR220</Col><Col id=\"SALARY\">8000</Col><Col id=\"GENDER\">M</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset5", this);
            obj.set_keystring("");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset6", this);
            obj.set_keystring("");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">John</Col><Col id=\"EMPL_ID\">KR010</Col><Col id=\"SALARY\">6000</Col><Col id=\"GENDER\">M</Col></Row><Row><Col id=\"DEPT_CODE\">K10</Col><Col id=\"FULL_NAME\">Melon</Col><Col id=\"EMPL_ID\">KR040</Col><Col id=\"SALARY\">9000</Col><Col id=\"GENDER\">W</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Kara</Col><Col id=\"EMPL_ID\">KR120</Col><Col id=\"SALARY\"/><Col id=\"GENDER\">W</Col></Row><Row><Col id=\"DEPT_CODE\">K20</Col><Col id=\"FULL_NAME\">Twice</Col><Col id=\"EMPL_ID\">KR130</Col><Col id=\"GENDER\">W</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Bts</Col><Col id=\"EMPL_ID\">KR210</Col><Col id=\"SALARY\">1000</Col><Col id=\"GENDER\">M</Col></Row><Row><Col id=\"DEPT_CODE\">K30</Col><Col id=\"FULL_NAME\">Andrew</Col><Col id=\"EMPL_ID\">KR220</Col><Col id=\"SALARY\">8000</Col><Col id=\"GENDER\">M</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid1","10","70",null,"226","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset1");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"DEPT_CODE\"/><Cell col=\"1\" text=\"FULL_NAME\"/><Cell col=\"2\" text=\"EMPL_ID\"/><Cell col=\"3\" text=\"HIRE_DATE\"/><Cell col=\"4\" text=\"SALARY\"/><Cell col=\"5\" text=\"BONUS\"/><Cell col=\"6\" text=\"GENDER\"/><Cell col=\"7\" text=\"MARRIED\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_CODE\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:FULL_NAME\"/><Cell col=\"2\" text=\"bind:EMPL_ID\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:HIRE_DATE\"/><Cell col=\"4\" text=\"bind:SALARY\"/><Cell col=\"5\" text=\"bind:BONUS\"/><Cell col=\"6\" text=\"bind:GENDER\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:MARRIED\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","10","10","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Exercise2 - Dataset");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","10","40","350","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Exe1, Exe2, Exe3 Base Data - Dataset1");
            obj.set_cssclass("sta_WF_TypeTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid6","10","70","980","317",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("Dataset6");
            obj.set_positionstep("2");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"104\"/><Column size=\"104\"/><Column size=\"104\"/><Column size=\"104\"/><Column size=\"104\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"EMPL_ID\"/><Cell col=\"1\" text=\"FULL_NAME\"/><Cell col=\"2\" text=\"DEPT_CODE\"/><Cell col=\"3\" text=\"SALARY\"/><Cell col=\"4\" text=\"GENDER\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPL_ID\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:FULL_NAME\" edittype=\"normal\"/><Cell col=\"2\" text=\"bind:DEPT_CODE\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:SALARY\"/><Cell col=\"4\" text=\"bind:GENDER\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe3_Filter","510","627","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Filter");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe1_1","10","427","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("1_1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe1_2","10","467","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("1_2");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","10","40","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Exe4 Base Data - Dataset4");
            obj.set_cssclass("sta_WF_TypeTitle");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid4","10","70","480","226",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("Dataset4");
            obj.set_positionstep("1");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"51\"/><Column size=\"104\"/><Column size=\"104\"/><Column size=\"104\"/><Column size=\"104\"/><Column size=\"104\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"Row\"/><Cell col=\"1\" text=\"EMPL_ID\"/><Cell col=\"2\" text=\"FULL_NAME\"/><Cell col=\"3\" text=\"DEPT_CODE\"/><Cell col=\"4\" text=\"SALARY\"/><Cell col=\"5\" text=\"GENDER\"/></Band><Band id=\"body\"><Cell text=\"expr:currow\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:EMPL_ID\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:FULL_NAME\"/><Cell col=\"3\" text=\"bind:DEPT_CODE\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:SALARY\"/><Cell col=\"5\" text=\"bind:GENDER\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe4_1","15","427","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("4_1");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe4_2","15","467","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("4_2");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe4_3","15","507","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("4_3");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe4_4","15","547","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("4_4");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe4_5","15","587","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("4_5");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe4_Check","15","627","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Check");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe3_1","510","427","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("3_1");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe3_2","510","467","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("3_2");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe3_3","510","507","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("3_3");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe3_4","510","547","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("3_4");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe3_05","510","587","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("3_5");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe2_1","10","547","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("2_1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe2_2","10","587","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("2_2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe2_3","10","627","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("2_3");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid5","510","70",null,"317","10",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_binddataset("Dataset5");
            obj.set_positionstep("1");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","510","40","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("Exe5 Base Data - Dataset5");
            obj.set_cssclass("sta_WF_TypeTitle");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe5_1","510","427","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("5_1");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe5_2","510","467","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("5_2");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe5_3","510","507","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("5_3");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe5_4","510","547","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("5_4");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","40","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("Exe6 Base Data - Dataset6");
            obj.set_cssclass("sta_WF_TypeTitle");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe6_3","10","505","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("6_3");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe6_5","10","545","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("6_5");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","397","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("Exe1");
            obj.set_cssclass("sta_WF_LabelTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","10","517","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("Exe2");
            obj.set_cssclass("sta_WF_LabelTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","510","397","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("Exe3");
            obj.set_cssclass("sta_WF_LabelTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","80","427","398","30",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("데이터셋의 컬럼(Column) 개수와 레코드(Row) 개수, 컬럼명(Column ID)을 구하기. ");
            obj.set_wordWrap("english");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","80","467","398","30",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("컬럼추가 - ID가 “COL_CHK”인 STRING 컬럼을 추가. ");
            obj.set_wordWrap("english");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","80","587","398","30",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("복합조건 - 부서코드가 “K10”이고 급여가 5,000 이하인 사원 구하기.");
            obj.set_wordWrap("english");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","80","547","398","30",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("단일조건 - 사원번호가 “KR120”인 사원의 성명 구하기.");
            obj.set_wordWrap("english");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","80","627","398","30",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("부서가 “K10”인 사원 목록 구하기. ");
            obj.set_wordWrap("english");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","580","427","378","30",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("남성과 여성의 평균 급여 계산. ");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","580","467","378","30",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("급여와 보너스를 합친 금액의 평균 금액 계산. ");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","580","507","378","30",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("입사일을 기준으로 내림차순 정렬. ");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","580","547","378","30",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("남성이고 미혼인 데이터만 필터하여 표현. ");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","580","587","378","30",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("원본 레코드 개수와 필터해서 보이는 레코드의 개수 비교.");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","80","427","393","30",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("최상위에 새로운 Row를 삽입하고 Row 상태값을 확인.");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","80","467","393","30",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("두번째 Row의 성명 컬럼을 “Nexacro”로 변경하고 레코드 상태값 확인.  ");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","80","507","393","30",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("변경되기 전과 후의 성명 데이터 확인.");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","80","547","393","30",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("Row Index가 3, 4, 5인 레코드를 멀티 삭제. ");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","80","587","393","30",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("삭제한 레코드 개수와 삭제한 성명 데이터 구하기 ");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","80","627","393","30",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("데이터 변경여부 체크.");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtRtn1","10","301","980","86",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","580","427","385","30",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("Dataset4를 Dataset5로 복사. ");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","580","467","385","30",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("Exe4에서 입력, 수정한 정보 모두 복사.");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","580","507","385","30",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("Dataset4에서 사원번호(EMPL_ID)가 “KR040”인 Row만 Dataset5에 복사. ");
            obj.set_positionstep("1");
            obj.set_wordWrap("english");
            this.addChild(obj.name, obj);

            obj = new Static("Static27","580","547","385","30",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("사원번호가 “KR210”인 Row 중 성명과 사원번호 컬럼만 Dataset5에 복사. ");
            obj.set_positionstep("1");
            obj.set_wordWrap("english");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtRtn2","10","301","480","86",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_positionstep("1");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static28","80","505","464","30",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("데이터를 변경하는 스크립트를 작성 후 실행하여 이벤트 발생 순서 확인. ");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static29","80","545","344","30",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("데이터 변경시 이벤트 발생 멈추기 ");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00","10","397","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("Exe4");
            obj.set_cssclass("sta_WF_LabelTxt");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00","510","397","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("Exe5");
            obj.set_cssclass("sta_WF_LabelTxt");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00","10","397","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("Exe6");
            obj.set_cssclass("sta_WF_LabelTxt");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static17_00","580","627","378","30",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("성명에 영문 “e” 가 포함되어 있는 데이터만 필터\r\n( 대소문자 구별 없이)");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_00_00","10","425","800","72",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("6-1 Dataset6의 cancolumnchange, oncolumnchanged 이벤트에 함수 생성.\r\n6-2 각각의 함수에 trace() 또는 alert()을 이용하여 로그를 확인\r\n6-3 데이터를 변경하는 스크립트를 작성 후 실행하여 이벤트 발생 순서 확인.");
            obj.set_cssclass("sta_WF_LabelTxt");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,700,this,function(p){});
            obj.set_stepcount("3");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Exe_Chap1_Dataset.xfdl", function() {

        this.btn_Exe1_1_onclick = function(obj,e)
        {
           let nColCnt = this.Dataset1.getColCount();
           let nRowCnt = this.Dataset1.getRowCount();

           let sColIds = "";
           for (var i = 0; i < nColCnt; i++) {
              let sColId = this.Dataset1.getColID(i);
              let objCol = this.Dataset1.getColumnInfo(i);
              //sColIds += "[" + i + "]" + sColId + "\n"; // 각 항목의 id와 순번 출력 ex. [0]DEPT_CODE
              sColIds += "id: " + objCol.id + ", type: " + objCol.type + ", size: " + objCol.size + "\n";
              // 각 항목의 id, 타입, 크기 출력 ex. id: DEPT_CODE, type: STRING, size: 10
           }
           this.txtRtn1.set_value(sColIds);

           let sColId = this.Dataset1.getColID(0);
           let sColumn = this.Dataset1.getColumn(0, "DEPT_CODE");
        //    this.txtRtn1.set_value("colCnt: " + nColCnt
        //                   + "\n rowCnt: " + nRowCnt
        //                   + "\n sColId: " + sColId
        //                   + "\n sColumn: " + sColumn); // txtRtn1의 value 값에 속성을 주겠다
        };

        this.btn_Exe1_2_onclick = function(obj,e)
        {
           this.Dataset1.addColumn("COL_CHK", "STRING", 1); // string 타입의 크기 1의 COL_CHK 추가, 여기서 [1]은 생략 가능
        };

        this.btn_Exe2_1_onclick = function(obj,e)
        {
        //    var nRow = this.Dataset1.findRow("EMPL_ID", "KR120"); // 사원 번호가 KR120인 사원 찾기
        //    var sName = this.Dataset1.getColumn(nRow, "FULL_NAME"); // nRow번째 row의 이름 구하기

           var sName = this.Dataset1.lookup("EMPL_ID", "KR120", "FULL_NAME"); // "EMPL_ID"가 "KR120"인 사람의 "FULL_NAME" 가져오기
           this.txtRtn1.set_value(sName);
           trace(sName);
        };

        this.btn_Exe2_2_onclick = function(obj,e)
        {
           var nRow = this.Dataset1.findRowExpr("DEPT_CODE == 'K10' && SALARY <= 5000"); // = 대입 == 비교 === 타입까지 비교
           var sName = this.Dataset1.getColumn(nRow, "FULL_NAME"); // nRow번째 row의 이름 구하기
           this.txtRtn1.set_value(sName);
           trace(sName);

        };

        this.btn_Exe2_3_onclick = function(obj,e)
        {
           var sText = "";
           var arrRow = this.Dataset1.extractRows("DEPT_CODE == 'K10'");
           for (var i = 0; i < arrRow.length; i++) {
              var sName = this.Dataset1.getColumn(arrRow[i], "FULL_NAME"); // arrRow 배열의 i번째 이름 가져오기
              trace(sName);
              sText += sName + "\n";
           }
           this.txtRtn1.set_value(sText);
        };
        // 평균 구하기
        this.btn_Exe3_1_onclick = function(obj,e)
        {
           var nAvgM = nexacro.round(this.Dataset1.getCaseAvg("GENDER == 'M'", "SALARY"), 2);
           // nexacro.round(@, 2) 소수점 2째 반올림
           var nAvgW = this.Dataset1.getCaseAvg("GENDER == 'W'", "SALARY");
           var nAvgW2 = this.Dataset1.getCaseAvg("GENDER == 'W'", "SALARY",0, -1, false);
           trace("nAvgM: " + nAvgM + ", nAvgW: " + nAvgW + ", nAvgW2: " + nAvgW2);
           this.txtRtn1.set_value("nAvgM: " + nAvgM + ", nAvgW: " + nAvgW + ", nAvgW2: " + nAvgW2);
        };

        this.btn_Exe3_2_onclick = function(obj,e)
        {
           var nAvg = this.Dataset1.getAvg("SALARY + BONUS"); // SALARY 값 + BONUS 값
           this.txtRtn1.set_value(nAvg);
        };
        // 입사일 기준 내림차순
        this.btn_Exe3_3_onclick = function(obj,e)
        {
           this.Dataset1.set_keystring("S: -HIRE_DATE");
        };

        this.btn_Exe3_4_onclick = function(obj,e)
        {
           this.Dataset1.filter("GENDER == 'M' && MARRIED == '0'");
        };

        this.btn_Exe3_5_onclick = function(obj,e)
        {
           var nRow = this.Dataset1.getRowCount();
           var nRowNF = this.Dataset1.getRowCountNF();
           // 필터링 O: nRow, 필터링 x: nRowNF
           this.txtRtn1.set_value("nRow: " + nRow + ", nRowNF: " + nRowNF);
        };

        this.btn_Exe3_Filter_onclick = function(obj,e)
        {
        //   this.Dataset1.filter("FULL_NAME.indexOf('e') > -1");
           // FULL_NAME에서 e 존재하는 값 찾기, 만약 값이 없으면 -1

           var sText = "E";
           // toUpperCase(): 소문자를 대문자로 바꿔줌 (대소문자 구별 X)
           this.Dataset1.filter("FULL_NAME.toUpperCase().indexOf('" + sText.toUpperCase() + "') > -1");
        };

        this.btn_Exe4_1_onclick = function(obj,e)
        {
           var nRow = this.Dataset4.insertRow(0); // 0번째에 row 추가, 최하위에 추가하는 건 addRow()
           var nType = this.Dataset4.getRowType(nRow);

           this.txtRtn2.set_value("insert --> " + nType);
        };

        this.btn_Exe4_2_onclick = function(obj,e)
        {
           this.Dataset4.setColumn(1, "FULL_NAME", "Nexacro");
           var nType = this.Dataset4.getRowType(1);
           this.txtRtn2.set_value("update --> " + nType);
        };

        this.btn_Exe4_3_onclick = function(obj,e)
        {
           var sName = this.Dataset4.getColumn(1, "FULL_NAME");
           var sOrgName = this.Dataset4.getOrgColumn(1, "FULL_NAME");
           this.txtRtn2.set_value("FULL_NAME --> " + sName // 바뀐 이름
                          + ", ORG_FULL_NAME --> " + sOrgName   // 기존 이름
           );

        };

        this.btn_Exe4_4_onclick = function(obj,e)
        {
           var arrRow = this.Grid4.getSelectedDatasetRows(); // 현재 선택된 배열의 row와 반응
           // deleteRow() -> 하나의 row 삭제, deleteMultiRows() -> 배열에 있는 row 모두 삭제
           this.Dataset4.deleteMultiRows(arrRow);
        };

        this.btn_Exe4_5_onclick = function(obj,e)
        {
           var nDelRowCnt = this.Dataset4.getDeletedRowCount();
           var sText = "";
           for (var i = 0; i < nDelRowCnt; i++) {
              var sDelName = this.Dataset4.getDeletedColumn(i, "FULL_NAME");
              sText += sDelName + "\n";
           }

           this.txtRtn2.set_value("del Name -> " + sText);
        };

        this.btn_Exe4_Check_onclick = function(obj,e)
        {
           // 값 삭제 시
           var nDelRowCnt = this.Dataset4.getDeletedRowCount();
           if (nDelRowCnt > 0) {
              this.alert("삭제된 값이 있습니다");
              return;
           }
           // 값을 추가, 수정 시
           for (var i = 0; i < this.Dataset4.rowcount; i++) {
              var nRowType = this.Dataset4.getRowType(i);
              if (nRowType == 2 || nRowType == 4) {
                 this.alert("변경된 값이 있습니다.");
                 return;
              }
           }
        };

        this.btn_Exe5_1_onclick = function(obj,e)
        {
           this.Dataset5.copyData(this.Dataset4, true);
           this.Grid5.createFormat();
        };

        this.btn_Exe5_2_onclick = function(obj,e)
        {
           this.Dataset5.assign(this.Dataset4);
           this.Grid5.createFormat();
        };

        this.btn00_onclick = function(obj,e)
        {
           this.Dataset4.filter("DEPT_CODE == 'K10'");
        };

        this.btn_Exe5_3_onclick = function(obj,e)
        {
           var nToRow = this.Dataset5.addRow();
           var nFromRow = this.Dataset4.findRow("EMPL_ID", "KR040");
           this.Dataset5.copyRow(nToRow, this.Dataset4, nFromRow);
        };

        this.btn_Exe5_4_onclick = function(obj,e)
        {
           var nToRow = this.Dataset5.addRow();
           var sCol = "FULL_NAME = FULL_NAME, EMPL_ID = EMPL_ID";
           var nFromRow = this.Dataset4.findRow("EMPL_ID", "KR040");
           this.Dataset5.copyRow(nToRow, this.Dataset4, nFromRow, sCol);
        };


        this.Dataset6_cancolumnchange = function(obj,e)
        {
           this.alert("Dataset6_cancolumnchange");
           var nCnt = this.Dataset6.findRowExpr("FULL_NAME == '" + e.newvalue + "'");
           if (nCnt > -1) {
              this.alert("중복된 이름입니다.");
              return false;   // 값이 변경되지 않음 (oncolumnchanged 실행 x)
           }
        };

        this.Dataset6_oncolumnchanged = function(obj,e)
        {
           this.alert("Dataset6_oncolumnchanged");
        };

        this.btn_Exe6_3_onclick = function(obj,e)
        {
           this.Dataset6.setColumn(0, "FULL_NAME", "Tom");
        };

        this.btn_Exe6_5_onclick = function(obj,e)
        {
           this.Dataset6.set_enableevent(false); // 이벤트를 잠깐 멈춤
           for (var i = 0; i < this.Dataset6.rowcount; i++) {
              this.Dataset6.setColumn(i, "FULL_NAME", "NAME" + i);
           }
           this.Dataset6.set_enableevent(true); // 이벤트 다시 실행
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_Exe3_Filter.addEventHandler("onclick",this.btn_Exe3_Filter_onclick,this);
            this.btn_Exe1_1.addEventHandler("onclick",this.btn_Exe1_1_onclick,this);
            this.btn_Exe1_2.addEventHandler("onclick",this.btn_Exe1_2_onclick,this);
            this.btn_Exe4_1.addEventHandler("onclick",this.btn_Exe4_1_onclick,this);
            this.btn_Exe4_2.addEventHandler("onclick",this.btn_Exe4_2_onclick,this);
            this.btn_Exe4_3.addEventHandler("onclick",this.btn_Exe4_3_onclick,this);
            this.btn_Exe4_4.addEventHandler("onclick",this.btn_Exe4_4_onclick,this);
            this.btn_Exe4_5.addEventHandler("onclick",this.btn_Exe4_5_onclick,this);
            this.btn_Exe4_Check.addEventHandler("onclick",this.btn_Exe4_Check_onclick,this);
            this.btn_Exe3_1.addEventHandler("onclick",this.btn_Exe3_1_onclick,this);
            this.btn_Exe3_2.addEventHandler("onclick",this.btn_Exe3_2_onclick,this);
            this.btn_Exe3_3.addEventHandler("onclick",this.btn_Exe3_3_onclick,this);
            this.btn_Exe3_4.addEventHandler("onclick",this.btn_Exe3_4_onclick,this);
            this.btn_Exe3_05.addEventHandler("onclick",this.btn_Exe3_5_onclick,this);
            this.btn_Exe2_1.addEventHandler("onclick",this.btn_Exe2_1_onclick,this);
            this.btn_Exe2_2.addEventHandler("onclick",this.btn_Exe2_2_onclick,this);
            this.btn_Exe2_3.addEventHandler("onclick",this.btn_Exe2_3_onclick,this);
            this.btn_Exe5_1.addEventHandler("onclick",this.btn_Exe5_1_onclick,this);
            this.btn_Exe5_2.addEventHandler("onclick",this.btn_Exe5_2_onclick,this);
            this.btn_Exe5_3.addEventHandler("onclick",this.btn_Exe5_3_onclick,this);
            this.btn_Exe5_4.addEventHandler("onclick",this.btn_Exe5_4_onclick,this);
            this.btn_Exe6_3.addEventHandler("onclick",this.btn_Exe6_3_onclick,this);
            this.btn_Exe6_5.addEventHandler("onclick",this.btn_Exe6_5_onclick,this);
            this.Dataset6.addEventHandler("cancolumnchange",this.Dataset6_cancolumnchange,this);
            this.Dataset6.addEventHandler("oncolumnchanged",this.Dataset6_oncolumnchanged,this);
        };
        this.loadIncludeScript("Exe_Chap1_Dataset.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
