(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_generateButton");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds00", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"TEXT\" type=\"STRING\" size=\"256\"/><Column id=\"FN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID\">btn1</Col><Col id=\"TEXT\">메일</Col><Col id=\"FN_NAME\">fn_goToMail</Col><Col id=\"GUBUN\">A</Col></Row><Row><Col id=\"ID\">btn2</Col><Col id=\"TEXT\">카페</Col><Col id=\"FN_NAME\">fn_goToCafe</Col><Col id=\"GUBUN\">B</Col></Row><Row><Col id=\"ID\">btn3</Col><Col id=\"TEXT\">블로그</Col><Col id=\"FN_NAME\">fn_goToBlog</Col><Col id=\"GUBUN\">B</Col></Row><Row><Col id=\"ID\">btn4</Col><Col id=\"TEXT\">스토어</Col><Col id=\"FN_NAME\">fn_goToStore</Col><Col id=\"GUBUN\">A</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn00","55","15","110","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("create");
            this.addChild(obj.name, obj);

            obj = new Div("div00","180","15","1024","150",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("pink");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","55","115","110","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("filter_B");
            this.addChild(obj.name, obj);

            obj = new Button("btn02","55","165","110","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("delete");
            this.addChild(obj.name, obj);

            obj = new Button("btn01_00","55","65","110","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("filter_A");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frm_generateButton.xfdl", function() {

        this.btn00_onclick = function(obj,e)
        {
        	this.fn_CreateButton();
        };

        this.fn_CreateButton = function ()
        {
        	var sName = "";
        	var sfnText = "";
        	var sfnName = ""
        	var vLeft = 10;
        	var vTop = 5;
        	var vWidth = 200;
        	var vHeight = 50;

        	for(var i = 0 ; i < this.ds00.rowcount; i ++)
        	{
        		sName = this.ds00.getColumn(i, "ID"); //데이터셋의 i 번째에 있는 ID 값 가져오기
        		sfnText = this.ds00.getColumn(i, "TEXT");
        		sfnName = this.ds00.getColumn(i, "FN_NAME");

        		//오브젝트 생성하기
        		var objButton = new Button(sName, vLeft, vTop, vWidth, vHeight);
        		this.div00.addChild(sName, objButton);
        		objButton.set_text(sfnText);
        		objButton.show();

        		vLeft += vWidth + 20;


        		//objButton.addEventHandler("onclick", this[sfnName], this.div00.form);
        		objButton.addEventHandler("onclick", this.fn_click, this.div00.form);
        	}
        };


        this.fn_click = function()
        {
        	//this.alert("CLICK");

        };

        this.fn_goToCafe = function()
        {
        	this.alert("goto cafe");
        };
        this.fn_goToMail = function()
        {
        	this.alert("goto Mail");
        };

        this.fn_goToBlog = function()
        {
        	this.alert("goto Blog");
        };

        this.fn_goToStore = function()
        {
        	this.alert("goto Store");
        };




        this.btn01_onclick = function(obj,e){
        	this.ds00.filter("GUBUN == 'B'"); //특정 데이터를 필터링하기
        }

        this.btn02_onclick = function(obj,e)
        {

        };

        this.btn01_00_onclick = function(obj,e)
        {
        	this.ds00.filter("GUBUN == 'A'"); //특정 데이터를 필터링하기
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
            this.btn01_00.addEventHandler("onclick",this.btn01_00_onclick,this);
        };
        this.loadIncludeScript("frm_generateButton.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
