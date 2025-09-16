(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("login");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds00", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"USER_BIRTH\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_GENDER\" type=\"STRING\" size=\"256\"/><Column id=\"USER_GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NICK\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PW\" type=\"STRING\" size=\"256\"/><Column id=\"USER_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR_MAIN\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR_POST\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div00","173","48","793","565",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","70","48","120","26",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("아이디");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt_Name","262","38","402","44",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta01","70","115","120","26",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_text("비밀번호");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta01_00","70","168","120","26",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("성명");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta01_00_00","70","208","120","26",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("생년월일");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta01_00_00_00","70","288","120","26",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_text("이메일");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta01_00_00_00_00","71","245","120","26",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_text("성별");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta01_00_00_00_01","71","335","120","26",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_text("휴대폰");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta01_00_00_00_01_00","71","385","120","26",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_text("주소");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_00","266","106","402","44",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_password("true");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00","266","169","402","29",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            this.div00.addChild(obj.name, obj);

            obj = new Calendar("cal00","265","219","405","27",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("11");
            this.div00.addChild(obj.name, obj);

            obj = new Radio("rdo00","266","256","409","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("12");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var div00_form_rdo00_innerdataset = new nexacro.NormalDataset("div00_form_rdo00_innerdataset", obj);
            div00_form_rdo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">남성</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">여성</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">기타</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_rdo00_innerdataset);
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtUserEmail","266","292","150","29",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("13");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_00_00_00","262","385","124","29",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("14");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_00_00_00_00","262","431","402","29",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("15");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmbUserEmail","455","292","209","29",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("16");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_cmbUserEmail_innerdataset = new nexacro.NormalDataset("div00_form_cmbUserEmail_innerdataset", obj);
            div00_form_cmbUserEmail_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">daum.com</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">naver.com</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">gmail.com</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_cmbUserEmail_innerdataset);
            obj.set_value("");
            obj.set_index("-1");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta02","428","298","12","14",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("17");
            obj.set_text("@");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btn00","680","291","87","26",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("18");
            obj.set_text("중복확인");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_00_00_00_01","436","385","233","29",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("19");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btn01","383","384","64","27",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("20");
            obj.set_text("검색");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("msk00","263","340","415","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("21");
            obj.set_type("string");
            obj.set_format("###-####-####");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btn02","241","486","139","38",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("22");
            obj.set_text("btn02");
            this.div00.addChild(obj.name, obj);

            obj = new WebBrowser("webPost","990","404","270","204",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","927","76","314","187",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"USER_NAME\"/><Cell col=\"1\" text=\"USER_BIRTH\"/><Cell col=\"2\" text=\"USER_PHONE\"/><Cell col=\"3\" text=\"USER_GENDER\"/><Cell col=\"4\" text=\"USER_GRADE\"/><Cell col=\"5\" text=\"USER_NICK\"/><Cell col=\"6\" text=\"USER_ID\"/><Cell col=\"7\" text=\"USER_PW\"/><Cell col=\"8\" text=\"USER_EMAIL\"/></Band><Band id=\"body\"><Cell text=\"bind:USER_NAME\"/><Cell col=\"1\" text=\"bind:USER_BIRTH\"/><Cell col=\"2\" text=\"bind:USER_PHONE\"/><Cell col=\"3\" text=\"bind:USER_GENDER\"/><Cell col=\"4\" text=\"bind:USER_GRADE\"/><Cell col=\"5\" text=\"bind:USER_NICK\"/><Cell col=\"6\" text=\"bind:USER_ID\"/><Cell col=\"7\" text=\"bind:USER_PW\"/><Cell col=\"8\" text=\"bind:USER_EMAIL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","div00.form.edt00_00","value","ds00","USER_PW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div00.form.edt00_00_00","value","ds00","USER_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div00.form.cal00","value","ds00","USER_BIRTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div00.form.rdo00","value","ds00","USER_GENDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div00.form.msk00","value","ds00","USER_PHONE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div00.form.edt_Name","value","ds00","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div00.form.edt00_00_00_00_00_00_01","accessibilityaction","ds00","ADDR_POST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div00.form.edt00_00_00_00_00_00_00","value","ds00","ADDR_MAIN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("login.xfdl", function() {
        this.div00_btn00_onclick = function(obj,e)
        {
        	var sEmail = this.div00.form.edtUserEmail.value + "@" + this.div00.form.cmbUserEmail.value;
        	this.ds00.setColumn(this.ds00.rowposition, "USER_EMAIL", sEmail);

        };

        this.div00_btn01_onclick = function(obj,e)
        {
        	this.gfnPostSearchDaum(this.webPost);
        };

        this.webPost_onusernotify = function(obj,e)
        {
        	var sPost = e.userdata;

        	if(sPost.indexOf("OK!!!::") == 0){ //like
        		var arrAdd = sPost.split(":::");
        		for(var i = 0; i < arrAdd.length; i++){
        			trace(i + "-->" + arrAdd[i]);
        		}
        	this.div00.form.edt00_00_00_00_00_00_01.set_value(arrAdd[3]);
        	this.div00.form.edt00_00_00_00_00_00_00.set_value(arrAdd[6]);
        	}
        };

        this.login_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);
        	this.ds00.addRow();
        };

        this.div00_btn02_onclick = function(obj,e)
        {
        	var strSvcUrl = "edu/saveMember.do";
        	var inData    = "dsMember=ds00:U";
        	var outData   = "";
        	var strArg    = "";

        	this.gfnTransaction("save", strSvcUrl, inData, outData, strArg, "fnCallback", true);
        };

        this.fnCallback = function (id, nErrorCode, sErrorMsg)
        {
        	if(nErrorCode < 0){ //오류가 난 경우
        		this.alert("ERROR"+ sErrorMsg);
        	}

        	switch(id) {
        	case "save":
        		this.alert("저장되었습니다");
        		break;
        	default:
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.login_onload,this);
            this.div00.form.sta00.addEventHandler("onclick",this.div00_sta00_onclick,this);
            this.div00.form.rdo00.addEventHandler("onitemchanged",this.div00_rdo00_onitemchanged,this);
            this.div00.form.btn00.addEventHandler("onclick",this.div00_btn00_onclick,this);
            this.div00.form.btn01.addEventHandler("onclick",this.div00_btn01_onclick,this);
            this.div00.form.btn02.addEventHandler("onclick",this.div00_btn02_onclick,this);
            this.webPost.addEventHandler("onusernotify",this.webPost_onusernotify,this);
        };
        this.loadIncludeScript("login.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
