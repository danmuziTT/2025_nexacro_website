(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("jour1301");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMember", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"USER_BIRTH\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NICK\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PW\" type=\"STRING\" size=\"256\"/><Column id=\"USER_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR_MAIN\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR_DETAIL\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR_POST\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd00","53","30","817","180",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsMember");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"USER_NAME\"/><Cell col=\"1\" text=\"USER_BIRTH\"/><Cell col=\"2\" text=\"USER_PHONE\"/><Cell col=\"3\" text=\"USER_GRADE\"/><Cell col=\"4\" text=\"USER_ID\"/><Cell col=\"5\" text=\"USER_PW\"/><Cell col=\"6\" text=\"USER_EMAIL\"/><Cell col=\"7\" text=\"ADDR_MAIN\"/><Cell col=\"8\" text=\"ADDR_DETAIL\"/><Cell col=\"9\" text=\"ADDR_POST\"/></Band><Band id=\"body\"><Cell text=\"bind:USER_NAME\"/><Cell col=\"1\" text=\"bind:USER_BIRTH\"/><Cell col=\"2\" text=\"bind:USER_PHONE\"/><Cell col=\"3\" text=\"bind:USER_GRADE\"/><Cell col=\"4\" text=\"bind:USER_ID\"/><Cell col=\"5\" text=\"bind:USER_PW\"/><Cell col=\"6\" text=\"bind:USER_EMAIL\"/><Cell col=\"7\" text=\"bind:ADDR_MAIN\"/><Cell col=\"8\" text=\"bind:ADDR_DETAIL\"/><Cell col=\"9\" text=\"bind:ADDR_POST\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","880","30","151","67",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ins","880","121","151","67",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("입력");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del","1060","30","151","67",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","1060","121","151","67",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Div("div00","40","253","793","365",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("div00");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","70","48","120","26",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("아이디");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt_Name","142","46","160","30",null,null,null,null,null,null,this.div00.form);
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

            obj = new Static("sta01_00_00_00","312","112","120","26",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_text("이메일");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta01_00_00_00_00","327","50","120","26",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_text("성별");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta01_00_00_00_01","312","166","120","26",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_text("휴대폰");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta01_00_00_00_01_00","316","213","120","26",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_text("주소");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_00","142","112","160","33",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_password("true");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00","142","167","160","29",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            this.div00.addChild(obj.name, obj);

            obj = new Calendar("cal00","142","216","160","29",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("11");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtUserEmail","367","112","105","29",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("12");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt_zip","367","213","95","29",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("13");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt_addrAll","362","255","390","29",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("14");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmbUserEmail","509","115","166","29",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("15");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_cmbUserEmail_innerdataset = new nexacro.NormalDataset("div00_form_cmbUserEmail_innerdataset", obj);
            div00_form_cmbUserEmail_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">daum.com</Col><Col id=\"datacolumn\">daum.com</Col></Row><Row><Col id=\"codecolumn\">naver.com</Col><Col id=\"datacolumn\">naver.com</Col></Row><Row><Col id=\"codecolumn\">gmail.com</Col><Col id=\"datacolumn\">gmail.com</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_cmbUserEmail_innerdataset);
            obj.set_value("");
            obj.set_index("-1");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta02","479","119","38","21",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("16");
            obj.set_text("@");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btn00","682","116","87","26",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("17");
            obj.set_text("중복확인");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt_addr","512","213","233","29",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("18");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btn01","448","213","64","29",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("19");
            obj.set_text("검색");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("msk00","367","164","225","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("20");
            obj.set_type("string");
            obj.set_format("###-####-####");
            this.div00.addChild(obj.name, obj);

            obj = new Radio("rdo00","381","41","386","47",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("21");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_rdo00_innerdataset = new nexacro.NormalDataset("div00_form_rdo00_innerdataset", obj);
            div00_form_rdo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">남자</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">여자</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">기타</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_rdo00_innerdataset);
            this.div00.addChild(obj.name, obj);

            obj = new WebBrowser("webPost","860","261","332","346",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_enable("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div00.form.edt00_00","value","dsMember","USER_PW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div00.form.edt00_00_00","value","dsMember","USER_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div00.form.cal00","value","dsMember","USER_BIRTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div00.form.msk00","value","dsMember","USER_PHONE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div00.form.edt_Name","value","dsMember","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div00.form.rdo00","value","dsMember","USER_GRADE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div00.form.edt_addr","value","dsMember","ADDR_MAIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div00.form.edt_zip","value","dsMember","ADDR_POST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div00.form.edt_addrAll","value","dsMember","ADDR_DETAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("jour1301.xfdl", function() {
        /**
        *	회원 리스트 조회 및 관리(수정, 삭제, 저장)
        *	@MenuPath C:\EduPack\workspace\edupack_egov\src\main\edupack_nexacro\Work
        *	@FileName jour1301.xfdl
        *	@Creator 동홍길
        *	@CreateDate 2025/01/16
        *	@Desction 해당 폼 정보 설명
        ******************소스 수정 이력**********************************************
        *	date		Modifier	Description
        ********************************************************************************
        *	2025/01/16		동홍길		최초 생성
        *
        *
        */

        /**************************************************************************
        * include 영역
        **************************************************************************/

        /**************************************************************************
        * FORM 변수 선언 영역 (fv)
        **************************************************************************/

        /**************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        **************************************************************************/
        this.jour1301_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);
        };

        /**************************************************************************
        * CRUD 및 TRANSACTION 서비스 호출 처리
        **************************************************************************/

        /**************************************************************************
        * CALLBACK 콜백 처리부분(Transaction, Popup)
        **************************************************************************/
        //콜백함수
        this.fnCallback = function (id, nErrorCode, nErrorMsg)
        {
        	if(nErrorCode<0){
        		this.alert("ERROR!  " + nErrorMsg);
        		return;
        	}

        	switch(id) {
        	case "selectMember":
        		this.gfnAlert("msg.action.success");
        		break;
        	default:
        	}
        };

        /**************************************************************************
        * 사용자 FUNCTION 영역
        **************************************************************************/

        /**************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        **************************************************************************/

        //조회
        this.btn_search_onclick = function(obj,e)
        {
        	var strSvcUrl = "edu/selectMember.do";
        	var inData    = "";
        	var outData   = "dsMember=out_emp";
        	var strArg    = "";

        	this.gfnTransaction("selectMember", strSvcUrl, inData, outData, strArg, "fnCallback", true);
        };

        //데이터 저장
        this.btn_ins_onclick = function(obj,e)
        {
        	this.dsMember.addRow();
        };

        //데이터열 삭제
        this.btn_del_onclick = function(obj,e)
        {
        	this.dsMember.deleteRow(this.dsMember.rowposition);
        };

        //데이터 서버에 저장
        this.btn_save_onclick = function(obj,e)
        {
        	var strSvcUrl = "edu/saveMemberAll.do";
        	var inData    = "dsMember=dsMember:U";
        	var outData   = "";
        	var strArg    = "";

        	this.gfnTransaction("save", strSvcUrl, inData, outData, strArg, "fnCallback", true);
        };

        //이메일 저장
        this.div00_btn00_onclick = function(obj,e)
        {
        	var sEmail = this.div00.form.edtUserEmail.value + "@" + this.div00.form.cmbUserEmail.value;
        	this.dsMember.setColumn(this.dsMember.rowposition, "USER_EMAIL", sEmail);
        };

        //주소지 검색 (외부 API)
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
        	this.div00.form.edt_zip.set_value(arrAdd[3]);
        	this.div00.form.edt_addr.set_value(arrAdd[4]);
        	this.div00.form.edt_addrAll.set_value("(" + arrAdd[3] + ") " + arrAdd[4]);
        	}
        };

        this.div00_rdo00_onitemchanged = function(obj,e)
        {
        	trace(this.div00.form.rdo00.value); //클릭값 안들어감
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.jour1301_onload,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_ins.addEventHandler("onclick",this.btn_ins_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.div00.form.sta00.addEventHandler("onclick",this.div00_sta00_onclick,this);
            this.div00.form.edt_Name.addEventHandler("onchanged",this.div00_edt_Name_onchanged,this);
            this.div00.form.btn00.addEventHandler("onclick",this.div00_btn00_onclick,this);
            this.div00.form.btn01.addEventHandler("onclick",this.div00_btn01_onclick,this);
            this.div00.form.rdo00.addEventHandler("onitemchanged",this.div00_rdo00_onitemchanged,this);
            this.webPost.addEventHandler("onusernotify",this.webPost_onusernotify,this);
        };
        this.loadIncludeScript("jour1301.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
