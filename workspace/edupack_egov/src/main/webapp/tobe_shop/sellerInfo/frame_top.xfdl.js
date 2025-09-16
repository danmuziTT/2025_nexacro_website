(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frame_top");
            this.set_titletext("New Form");
            this.set_background("#6bd177");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,50);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_URL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","3","210","45",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("url(\'theme::blue/images/sellerLogo.png\') no-repeat center center /contain");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","230","8",null,"32","170",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Button("btn00",null,"8","129","32","12",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("스토어로");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,50,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frame_top.xfdl", function() {
        this.frame_top_onload = function(obj,e)
        	{
        		var objApp = nexacro.getApplication();
        		objApp.gdsSellerMenu.filter("MENU_LEVEL =='0'"); //어플리케이션 내에 있는 데이터를 사용하기 위해 쓰는 코드

        		this.dsMenu.copyData(objApp.gdsSellerMenu, true);
        		trace(this.dsMenu);
        		objApp.gdsSellerMenu.filter("");

        		this.fnCreateMenu();
        };


        	this.fnCreateMenu = function()
        	{
        		var sName = "";
        		var sId = "";
        		var nTop = 0 ;
        		var nLeft = 0;
        		var nWidth = 120;
        		var nHeight = '100%';
        		trace(this.dsMenu.rowcount);
        		for(var a = 0; a<this.dsMenu.rowcount; a++)
        		{
        			sName = this.dsMenu.getColumn(a, "MENU_NAME");
        			sId = this.dsMenu.getColumn(a, "MENU_ID");
        			nWidth = nexacro.getTextSize(sName, "bold 15px 'Verdana'").nx; //텍스트 크기를 계산해 리턴값이 object로 나옴 (가로, 세로길이 계산 가능)

        			var objBtn = new Button("btnMenu"+a, nLeft, nTop, nWidth, nHeight);
        			this.Div00.addChild(objBtn.name, objBtn);

        			objBtn.uMenuId = sId;
        			objBtn.set_text(sName);
        			objBtn.set_cssclass("btn_TF_Menu");

        			objBtn.addEventHandler("onclick",this.fnMenuClick, this)
        			objBtn.show();

        			nLeft += nWidth +140;
        		}
        	}

        	this.fnMenuClick = function(obj,e){
        		//alert(obj.name + " : " +obj.text + " : " + obj.uMenuId);
        		var objApp = nexacro.getApplication();
        		objApp.gdsSellerMenu.filter("MENU_ID.substring(0,2) =='" +obj.uMenuId + "'");
        	}


        this.btn00_onclick = function(obj,e) //팝업창 나타나게
        {
        	var CF = new ChildFrame();
           var strName = "chf";
           var nLeft = 0;
           var nTop = 0;
           var nWidth = 450;
           var nHeight = 250;
           var nRight = null;
           var nBottom = null;
           var strUrl = "sellerForm::seller_logoutPopup.xfdl"; // 복사한 경우에는 Generate 필수
           CF.set_showtitlebar(false);

           CF.init(strName, nLeft, nTop, nWidth, nHeight, nRight, nBottom, strUrl);
           CF.set_openalign("center middle");
           CF.showModal(this.getOwnerFrame(),"", this, "");

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frame_top_onload,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
        };
        this.loadIncludeScript("frame_top.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
