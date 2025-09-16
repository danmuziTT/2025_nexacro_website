(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SampleSplitter");
            this.set_titletext("Splitter");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Category\" type=\"STRING\" size=\"256\"/><Column id=\"Region\" type=\"String\" size=\"256\"/><Column id=\"Rep\" type=\"String\" size=\"256\"/><Column id=\"Item\" type=\"String\" size=\"256\"/><Column id=\"Units\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"UnitCost\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Region\">East</Col><Col id=\"Rep\">Jones</Col><Col id=\"Item\">Pencil</Col><Col id=\"Units\">95</Col><Col id=\"UnitCost\">1</Col><Col id=\"Category\">Main</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Kivell</Col><Col id=\"Item\">Binder</Col><Col id=\"Units\">50</Col><Col id=\"UnitCost\">19</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Jardine</Col><Col id=\"Item\">Pencil</Col><Col id=\"Units\">36</Col><Col id=\"UnitCost\">4</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Gill</Col><Col id=\"Item\">Pen</Col><Col id=\"Units\">27</Col><Col id=\"UnitCost\">19</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">West</Col><Col id=\"Rep\">Sorvino</Col><Col id=\"Item\">Pencil</Col><Col id=\"Units\">56</Col><Col id=\"UnitCost\">2</Col><Col id=\"Category\">Main</Col></Row><Row><Col id=\"Region\">East</Col><Col id=\"Rep\">Jones</Col><Col id=\"Item\">Binder</Col><Col id=\"Units\">60</Col><Col id=\"UnitCost\">4</Col><Col id=\"Category\">Main</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Andrews</Col><Col id=\"Item\">Pencil</Col><Col id=\"Units\">75</Col><Col id=\"UnitCost\">1</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Jardine</Col><Col id=\"Item\">Pencil</Col><Col id=\"Units\">90</Col><Col id=\"UnitCost\">4</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">West</Col><Col id=\"Rep\">Thompson</Col><Col id=\"Item\">Pencil</Col><Col id=\"Units\">32</Col><Col id=\"UnitCost\">1</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">East</Col><Col id=\"Rep\">Jones</Col><Col id=\"Item\">Binder</Col><Col id=\"Units\">60</Col><Col id=\"UnitCost\">8</Col><Col id=\"Category\">Main</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Morgan</Col><Col id=\"Item\">Pencil</Col><Col id=\"Units\">90</Col><Col id=\"UnitCost\">4</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">East</Col><Col id=\"Rep\">Howard</Col><Col id=\"Item\">Binder</Col><Col id=\"Units\">29</Col><Col id=\"UnitCost\">1</Col><Col id=\"Category\">Main</Col></Row><Row><Col id=\"Region\">East</Col><Col id=\"Rep\">Parent</Col><Col id=\"Item\">Binder</Col><Col id=\"Units\">81</Col><Col id=\"UnitCost\">19</Col><Col id=\"Category\">Main</Col></Row><Row><Col id=\"Region\">East</Col><Col id=\"Rep\">Jones</Col><Col id=\"Item\">Pencil</Col><Col id=\"Units\">35</Col><Col id=\"UnitCost\">4</Col><Col id=\"Category\">Main</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Smith</Col><Col id=\"Item\">Desk</Col><Col id=\"Units\">2</Col><Col id=\"UnitCost\">125</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">East</Col><Col id=\"Rep\">Jones</Col><Col id=\"Item\">Pen Set</Col><Col id=\"Units\">16</Col><Col id=\"UnitCost\">15</Col><Col id=\"Category\">Main</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Morgan</Col><Col id=\"Item\">Binder</Col><Col id=\"Units\">28</Col><Col id=\"UnitCost\">8</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">East</Col><Col id=\"Rep\">Jones</Col><Col id=\"Item\">Pen</Col><Col id=\"Units\">64</Col><Col id=\"UnitCost\">8</Col><Col id=\"Category\">Main</Col></Row><Row><Col id=\"Region\">East</Col><Col id=\"Rep\">Parent</Col><Col id=\"Item\">Pen</Col><Col id=\"Units\">15</Col><Col id=\"UnitCost\">19</Col><Col id=\"Category\">Main</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Kivell</Col><Col id=\"Item\">Pen Set</Col><Col id=\"Units\">96</Col><Col id=\"UnitCost\">4</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Smith</Col><Col id=\"Item\">Pencil</Col><Col id=\"Units\">67</Col><Col id=\"UnitCost\">1.29</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">East</Col><Col id=\"Rep\">Parent</Col><Col id=\"Item\">Pen Set</Col><Col id=\"Units\">74</Col><Col id=\"UnitCost\">15</Col><Col id=\"Category\">Main</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Gill</Col><Col id=\"Item\">Binder</Col><Col id=\"Units\">46</Col><Col id=\"UnitCost\">8</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Smith</Col><Col id=\"Item\">Binder</Col><Col id=\"Units\">87</Col><Col id=\"UnitCost\">15</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">East</Col><Col id=\"Rep\">Jones</Col><Col id=\"Item\">Binder</Col><Col id=\"Units\">4</Col><Col id=\"UnitCost\">4</Col><Col id=\"Category\">Main</Col></Row><Row><Col id=\"Region\">West</Col><Col id=\"Rep\">Sorvino</Col><Col id=\"Item\">Binder</Col><Col id=\"Units\">7</Col><Col id=\"UnitCost\">19</Col><Col id=\"Category\">Main</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Jardine</Col><Col id=\"Item\">Pen Set</Col><Col id=\"Units\">50</Col><Col id=\"UnitCost\">4</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Andrews</Col><Col id=\"Item\">Pencil</Col><Col id=\"Units\">66</Col><Col id=\"UnitCost\">1</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">East</Col><Col id=\"Rep\">Howard</Col><Col id=\"Item\">Pen</Col><Col id=\"Units\">96</Col><Col id=\"UnitCost\">4</Col><Col id=\"Category\">Main</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Gill</Col><Col id=\"Item\">Pencil</Col><Col id=\"Units\">53</Col><Col id=\"UnitCost\">1.29</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Gill</Col><Col id=\"Item\">Binder</Col><Col id=\"Units\">80</Col><Col id=\"UnitCost\">8</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Kivell</Col><Col id=\"Item\">Desk</Col><Col id=\"Units\">5</Col><Col id=\"UnitCost\">125</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">East</Col><Col id=\"Rep\">Jones</Col><Col id=\"Item\">Pen Set</Col><Col id=\"Units\">62</Col><Col id=\"UnitCost\">4</Col><Col id=\"Category\">Main</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Morgan</Col><Col id=\"Item\">Pen Set</Col><Col id=\"Units\">55</Col><Col id=\"UnitCost\">12.49</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Kivell</Col><Col id=\"Item\">Pen Set</Col><Col id=\"Units\">42</Col><Col id=\"UnitCost\">23.95</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">West</Col><Col id=\"Rep\">Sorvino</Col><Col id=\"Item\">Desk</Col><Col id=\"Units\">3</Col><Col id=\"UnitCost\">275</Col><Col id=\"Category\">Main</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Gill</Col><Col id=\"Item\">Pencil</Col><Col id=\"Units\">7</Col><Col id=\"UnitCost\">1.29</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">West</Col><Col id=\"Rep\">Sorvino</Col><Col id=\"Item\">Pen</Col><Col id=\"Units\">76</Col><Col id=\"UnitCost\">1</Col><Col id=\"Category\">Main</Col></Row><Row><Col id=\"Region\">West</Col><Col id=\"Rep\">Thompson</Col><Col id=\"Item\">Binder</Col><Col id=\"Units\">57</Col><Col id=\"UnitCost\">19</Col><Col id=\"Category\">Main</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Andrews</Col><Col id=\"Item\">Pencil</Col><Col id=\"Units\">14</Col><Col id=\"UnitCost\">1.29</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Jardine</Col><Col id=\"Item\">Binder</Col><Col id=\"Units\">11</Col><Col id=\"UnitCost\">4</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Jardine</Col><Col id=\"Item\">Binder</Col><Col id=\"Units\">94</Col><Col id=\"UnitCost\">19</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Region\">Central</Col><Col id=\"Rep\">Andrews</Col><Col id=\"Item\">Binder</Col><Col id=\"Units\">28</Col><Col id=\"UnitCost\">4</Col><Col id=\"Category\">Sub</Col></Row><Row><Col id=\"Category\">Sub</Col><Col id=\"Region\">Central</Col><Col id=\"Rep\">Jardine</Col><Col id=\"Item\">Pencil</Col><Col id=\"Units\">90</Col><Col id=\"UnitCost\">4</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc","10","35",null,"152","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Splitter 기능 적용방법\r\n1. Splitter 컴포넌트 추가\r\n2. type 속성 확인(vertical, horizontal)\r\n3. form onload 이벤트에서 Splitter 초기화\r\n   - Splittter.addItem() 메소드로 item 적용\r\n   - Splittter.addSplitter() 메소드로 최대, 최소 position 기준 컴포넌트 세팅");
            obj.set_cssclass("sta_WF_Desc");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","10","0","221","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Splitter");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);

            obj = new Splitter("Splitter00","10","342",null,"10","10",null,null,null,null,null,this);
            obj.getSetter("taborder").set("2");
            obj.getSetter("type").set("vertical");
            obj.getSetter("background").set("#dddddd");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","10","207",null,"130","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"Category\"/><Cell col=\"1\" text=\"Region\"/><Cell col=\"2\" text=\"Rep\"/><Cell col=\"3\" text=\"Item\"/><Cell col=\"4\" text=\"Units\"/><Cell col=\"5\" text=\"UnitCost\"/></Band><Band id=\"body\"><Cell text=\"bind:Category\"/><Cell col=\"1\" text=\"bind:Region\"/><Cell col=\"2\" text=\"bind:Rep\"/><Cell col=\"3\" text=\"bind:Item\"/><Cell col=\"4\" text=\"bind:Units\"/><Cell col=\"5\" text=\"bind:UnitCost\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd01","10","357",null,"161","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"Category\"/><Cell col=\"1\" text=\"Region\"/><Cell col=\"2\" text=\"Rep\"/><Cell col=\"3\" text=\"Item\"/><Cell col=\"4\" text=\"Units\"/><Cell col=\"5\" text=\"UnitCost\"/></Band><Band id=\"body\"><Cell text=\"bind:Category\"/><Cell col=\"1\" text=\"bind:Region\"/><Cell col=\"2\" text=\"bind:Rep\"/><Cell col=\"3\" text=\"bind:Item\"/><Cell col=\"4\" text=\"bind:Units\"/><Cell col=\"5\" text=\"bind:UnitCost\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Splitter("Splitter01","486","528","10","212",null,null,null,null,null,null,this);
            obj.getSetter("taborder").set("5");
            obj.getSetter("max").set("1000");
            obj.getSetter("cssclass").set("spl_WF_H");
            obj.getSetter("min").set("15");
            obj.getSetter("background").set("#dddddd");
            this.addChild(obj.name, obj);

            obj = new Div("div00","10","528",null,"212","557",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("div00");
            obj.set_background("antiquewhite");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","359","12","100","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("btn00");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btn01","359","45","100","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("btn00");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btn02","358","78","100","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_text("btn00");
            this.div00.addChild(obj.name, obj);

            obj = new Grid("grd01","10","10","341","162",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"Category\"/><Cell col=\"1\" text=\"Region\"/><Cell col=\"2\" text=\"Rep\"/><Cell col=\"3\" text=\"Item\"/></Band><Band id=\"body\"><Cell text=\"bind:Category\"/><Cell col=\"1\" text=\"bind:Region\"/><Cell col=\"2\" text=\"bind:Rep\"/><Cell col=\"3\" text=\"bind:Item\"/></Band></Format></Formats>");
            this.div00.addChild(obj.name, obj);

            obj = new Grid("grd02","501","528",null,"212","7",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"Category\"/><Cell col=\"1\" text=\"Region\"/><Cell col=\"2\" text=\"Rep\"/><Cell col=\"3\" text=\"Item\"/><Cell col=\"4\" text=\"Units\"/><Cell col=\"5\" text=\"UnitCost\"/></Band><Band id=\"body\"><Cell text=\"bind:Category\"/><Cell col=\"1\" text=\"bind:Region\"/><Cell col=\"2\" text=\"bind:Rep\"/><Cell col=\"3\" text=\"bind:Item\"/><Cell col=\"4\" text=\"bind:Units\"/><Cell col=\"5\" text=\"bind:UnitCost\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd03","10","750","307","211",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"Category1\"/><Cell col=\"1\" text=\"Region\"/><Cell col=\"2\" text=\"Rep\"/><Cell col=\"3\" text=\"Item\"/><Cell col=\"4\" text=\"Units\"/><Cell col=\"5\" text=\"UnitCost\"/></Band><Band id=\"body\"><Cell text=\"bind:Category\"/><Cell col=\"1\" text=\"bind:Region\"/><Cell col=\"2\" text=\"bind:Rep\"/><Cell col=\"3\" text=\"bind:Item\"/><Cell col=\"4\" text=\"bind:Units\"/><Cell col=\"5\" text=\"bind:UnitCost\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Splitter("Splitter02","322","750","10","211",null,null,null,null,null,null,this);
            obj.getSetter("taborder").set("9");
            obj.getSetter("cssclass").set("spl_WF_H");
            obj.getSetter("min").set("15");
            obj.getSetter("max").set("1000");
            obj.getSetter("background").set("#dddddd");
            this.addChild(obj.name, obj);

            obj = new Grid("grd04","337","750","374","211",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"Category2\"/><Cell col=\"1\" text=\"Region\"/><Cell col=\"2\" text=\"Rep\"/><Cell col=\"3\" text=\"Item\"/><Cell col=\"4\" text=\"Units\"/><Cell col=\"5\" text=\"UnitCost\"/></Band><Band id=\"body\"><Cell text=\"bind:Category\"/><Cell col=\"1\" text=\"bind:Region\"/><Cell col=\"2\" text=\"bind:Rep\"/><Cell col=\"3\" text=\"bind:Item\"/><Cell col=\"4\" text=\"bind:Units\"/><Cell col=\"5\" text=\"bind:UnitCost\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Splitter("Splitter03","716","750","10","211",null,null,null,null,null,null,this);
            obj.getSetter("taborder").set("11");
            obj.getSetter("max").set("1000");
            obj.getSetter("cssclass").set("spl_WF_H");
            obj.getSetter("min").set("-1");
            obj.getSetter("background").set("#dddddd");
            this.addChild(obj.name, obj);

            obj = new Grid("grd05",null,"750","299","211","8",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"Category3\"/><Cell col=\"1\" text=\"Region\"/><Cell col=\"2\" text=\"Rep\"/><Cell col=\"3\" text=\"Item\"/><Cell col=\"4\" text=\"Units\"/><Cell col=\"5\" text=\"UnitCost\"/></Band><Band id=\"body\"><Cell text=\"bind:Category\"/><Cell col=\"1\" text=\"bind:Region\"/><Cell col=\"2\" text=\"bind:Rep\"/><Cell col=\"3\" text=\"bind:Item\"/><Cell col=\"4\" text=\"bind:Units\"/><Cell col=\"5\" text=\"bind:UnitCost\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1038,650,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SampleSplitter.xfdl", function() {
        /**
        *  Nexacro Professional Training Couse
        *  @MenuPath    개발가이드 > 컴포넌트 및 연동 > Splitter
        *  @FileName 	SampleSplitter.xfdl
        *  @Creator 	TOBESOFT Education
        *  @CreateDate 	2023/01/03
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2023/01/03      		 TOBESOFT Education	 	  	최초 생성
        *******************************************************************************
        */


        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        /**
         * @description 화면 onload시 처리내역(필수)
        */
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);

        	//Splitter item 적용
        	this.Splitter00.addItem([{componentid:"grd00", offset:5, position:"top"}, {componentid:"grd01", offset:5, position:"bottom"}]);
        	this.Splitter01.addItem([{componentid:"div00", offset:5, position:"left"}, {componentid:"grd02", offset:5, position:"right"}]);

        	//Splitter 최소, 최대 position 기준 컴포넌트 적용
        	//순서 : top, bottom, left, right
        	this.Splitter00.addSplitter(this.stc, this.Splitter01, null, null);

        	this.Splitter02.addItem([{componentid:"grd03", offset:5, position:"left"}, {componentid:"grd04", offset:5, position:"right"}]);
        	this.Splitter03.addItem([{componentid:"grd04", offset:5, position:"left"}, {componentid:"grd05", offset:5, position:"right"}]);

        	this.Splitter02.addSplitter(null, null, null, this.Splitter03);
        	this.Splitter03.addSplitter(null, null, this.Splitter02, null);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("SampleSplitter.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
