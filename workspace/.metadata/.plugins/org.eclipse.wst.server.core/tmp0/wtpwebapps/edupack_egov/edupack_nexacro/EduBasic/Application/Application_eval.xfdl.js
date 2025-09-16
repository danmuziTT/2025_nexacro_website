(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Emp_exe");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("st_title","10","0","540","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("eval");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);

            obj = new Button("btnEval1","20","67","320","33",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("eval함수를 이용하여 object 화 하는 방법 ");
            this.addChild(obj.name, obj);

            obj = new Button("btnEval2","410","67","320","33",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text(" eval 함수를 대체하는 방법 ");
            this.addChild(obj.name, obj);

            obj = new Button("btnEvalFunc2","410","133","320","39",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("함수호출(call)");
            this.addChild(obj.name, obj);

            obj = new Button("btnEvalFunc","20","134","320","39",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("함수호출");
            this.addChild(obj.name, obj);

            obj = new Button("btnEvalFunc3","412","194","320","37",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("함수호출(apply)");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","24","199","314","111",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","24","327","319","106",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("Tabpage1");
            this.Tab00.addChild(obj.name, obj);

            obj = new Button("Button00","13","24","93","37",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("Tabpage2");
            this.Tab00.addChild(obj.name, obj);

            obj = new Button("btnTab","17","446","329","44",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Tabpage");
            this.addChild(obj.name, obj);

            obj = new Button("btnTab2","412","448","320","44",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Tabpage");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Tab00.Tabpage1.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage1.form,function(p){});
            this.Tab00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage2
            obj = new Layout("default","",0,0,this.Tab00.Tabpage2.form,function(p){});
            this.Tab00.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1038,650,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Application_eval.xfdl", function() {

        this.btnEval1_onclick = function(obj,e)
        {
        	var strObj = this.grd_list.name;
        	var objGrid = eval("this." + strObj);
        	trace(objGrid + " : " + typeof objGrid);
        };

        this.btnEval2_onclick = function(obj,e)
        {
        	var sGridID = this.grd_list.name;
        	var objGrid = this.components[sGridID];
        	trace(objGrid + " : " + typeof objGrid);
        };


        this.btnEvalFunc_onclick = function(obj,e)
        {
        	var fn_ID = "fn_FuncCall";
        	eval("this." + fn_ID)(1,2);
        };


        this.btnEvalFunc2_onclick = function(obj,e)
        {
        //String 으로 받은 functionID 를 호출 할 경우
        //agument 의 경우 호출 받는 메소드에서 받는 갯수만큼 넣어주시면 됩니다.
        	var fn_ID = "fn_FuncCall";
        	this[fn_ID].call(null, 1, 2);
        };

        this.btnEvalFunc3_onclick = function(obj,e)
        {

        	var fn_ID = "fn_FuncCall";
        	//this.lookup( fn_ID ).call(null,1,2);
        	this.lookup( fn_ID ).apply(null,[1,2]);	//apply시 값 전달방식이 다름
        };


        this.fn_FuncCall = function(arg, arg1)
        {
        	alert("fn_FuncCall =>" + arg + "==" + arg1);
        }


        this.Form_Emp_exe_onload = function(obj,e)
        {
        	trace("Application_eval");
        };

        this.Button00_onclick = function(obj,e)
        {
        	var arrObj = eval("this.Tab00.Tabpage1.form").all;
        	for(var i=0; i<arrObj.length;i++)
        	{
        	   trace(arrObj[i].name);
        	}
        };



        this.btnTab2_onclick = function(obj,e)
        {
        	var o = new Function("return this.Tab00.Tabpage1.form").call(this);
        	var arrObj = o.all
        	for(var i=0; i<arrObj.length;i++)
        	{
        	   trace(arrObj[i].name);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Emp_exe_onload,this);
            this.btnEval1.addEventHandler("onclick",this.btnEval1_onclick,this);
            this.btnEval2.addEventHandler("onclick",this.btnEval2_onclick,this);
            this.btnEvalFunc2.addEventHandler("onclick",this.btnEvalFunc2_onclick,this);
            this.btnEvalFunc.addEventHandler("onclick",this.btnEvalFunc_onclick,this);
            this.btnEvalFunc3.addEventHandler("onclick",this.btnEvalFunc3_onclick,this);
            this.btnTab.addEventHandler("onclick",this.Button00_onclick,this);
            this.btnTab2.addEventHandler("onclick",this.btnTab2_onclick,this);
        };
        this.loadIncludeScript("Application_eval.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
