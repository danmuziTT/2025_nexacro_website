(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("par_dataup");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset1", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LIKE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID\">1</Col><Col id=\"NAME\">이지원</Col><Col id=\"LIKE\">도란</Col></Row><Row><Col id=\"ID\">2</Col><Col id=\"NAME\">한국희</Col><Col id=\"LIKE\">긴토키</Col></Row><Row><Col id=\"ID\">3</Col><Col id=\"NAME\">이은서</Col><Col id=\"LIKE\">빅터발렌타인</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Edit("Edit1","90","107","140","26",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit2","270","107","310","26",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","86","159","489","291",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("Dataset1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"158\"/><Column size=\"158\"/><Column size=\"158\"/></Columns><Rows><Row size=\"37\" band=\"head\"/><Row size=\"37\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"NAME\"/><Cell col=\"2\" text=\"LIKE\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\"/><Cell col=\"1\" text=\"bind:NAME\"/><Cell col=\"2\" text=\"bind:LIKE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","90","50","137","39",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("조회");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Edit1","value","Dataset1","NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Edit2","value","Dataset1","LIKE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("par_dataup.xfdl", function() {

        this.btn00_onclick = function(obj,e)
        {
        	var CF = new ChildFrame();
           var strName = "chf";
           var nLeft = 0;
           var nTop = 0;
           var nWidth = 400;
           var nHeight = 400;
           var nRight = null;
           var nBottom = null;
           var strUrl = "Work::par_dataPopup.xfdl"; // 복사한 경우에는 Generate 필수

           var objParam = {param1:this.Edit1.value		//param1,2,3 >> 임의로 정해주는 값
        					, param2:this.Edit2.value
        					, param3:this.Dataset1 };

           CF.init(strName, nLeft, nTop, nWidth, nHeight, nRight, nBottom, strUrl);
           CF.set_openalign("center middle");

           CF.showModal(this.getOwnerFrame(), objParam, this, "fn_popupCallback");
        };

        this.fn_popupCallback = function(id, rtn){ //팝업에는 들어가는input이 2개
        	if(!this.gfnIsNull(rtn)){
        		var arrRtn = rtn.split(":");
        		this.Edit1.set_value(arrRtn[0]);
        		this.Edit2.set_value(arrRtn[1]);
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
        };
        this.loadIncludeScript("par_dataup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
