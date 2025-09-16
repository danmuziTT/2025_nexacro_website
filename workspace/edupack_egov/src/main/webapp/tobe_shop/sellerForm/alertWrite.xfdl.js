(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("alertWrite");
            this.set_titletext("공지사항");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsAnno", this);
            obj._setContents("<ColumnInfo><Column id=\"ALERT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL\" type=\"STRING\" size=\"256\"/><Column id=\"WRITER\" type=\"STRING\" size=\"256\"/><Column id=\"DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta01","0","0","64.00%","52.31%",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staLine","50","87",null,"3","50",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#3f6267");
            this.addChild(obj.name, obj);

            obj = new Static("staAnno","60","40","80","23",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("공지사항");
            obj.set_font("normal 700 20px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnWrite","sta01:-10","30","101","42",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("작성");
            obj.set_cssclass("Check");
            obj.set_font("normal 15px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("divAnno","sta01:-225","110","550","440",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_border("1px solid black");
            obj.set_text("");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","30","39","40","23",null,null,null,null,null,null,this.divAnno.form);
            obj.set_taborder("0");
            obj.set_text("제목");
            obj.set_font("normal 20px/normal \"Arial\"");
            this.divAnno.addChild(obj.name, obj);

            obj = new Edit("Edit00","120","30","400","40",null,null,null,null,null,null,this.divAnno.form);
            obj.set_taborder("1");
            this.divAnno.addChild(obj.name, obj);

            obj = new Static("staText","30","110","40","23",null,null,null,null,null,null,this.divAnno.form);
            obj.set_taborder("2");
            obj.set_text("내용");
            obj.set_font("normal 20px/normal \"Arial\"");
            this.divAnno.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","120","100","400","309",null,null,null,null,null,null,this.divAnno.form);
            obj.set_taborder("3");
            this.divAnno.addChild(obj.name, obj);

            obj = new Grid("grdAnno","sta01:-620","110","370","440",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_border("1px solid black");
            obj.set_binddataset("dsAnno");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"57\"/><Column size=\"205\"/><Column size=\"105\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"제목\"/><Cell col=\"2\" text=\"작성자\"/></Band><Band id=\"body\"><Cell text=\"bind:ALERT_NO\"/><Cell col=\"1\" text=\"bind:TITLE\"/><Cell col=\"2\" text=\"bind:WRITER\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnFin","sta01:232","30","101","42",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("저장");
            obj.set_cssclass("Check");
            obj.set_font("normal 15px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete","sta01:111","30","101","42",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("삭제");
            obj.set_cssclass("Check");
            obj.set_font("normal 15px/normal \"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divAnno.form
            obj = new Layout("default","",0,0,this.divAnno.form,function(p){});
            this.divAnno.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1000,650,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divAnno.form.Edit00","value","dsAnno","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divAnno.form.TextArea00","value","dsAnno","DETAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("alertWrite.xfdl", function() {
        /**************************************************************************
        * include 영역
        **************************************************************************/

        /**************************************************************************
        * FORM 변수 선언 영역 (fv)
        **************************************************************************/

        /**************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        **************************************************************************/

        this.alertWrite_onload = function(obj,e)
        {
        	this.objApp = nexacro.getApplication();

        	var user_id = this.objApp.gdsUserInfo.getColumn(0, "USER_ID");
        	var strSvcUrl = "edu/getAlertData.do"; //s_order
        	var inData    = "";
        	var outData   = "dsAnno=out_emp";
        	var strArg    = "user_id="+user_id;
        	this.gfnTransaction("getAlertData", strSvcUrl, inData, outData, strArg, "fnCallback", true);

        };
        /**************************************************************************
        * CRUD 및 TRANSACTION 서비스 호출 처리
        **************************************************************************/

        /**************************************************************************
        * CALLBACK 콜백 처리부분(Transaction, Popup)
        **************************************************************************/

        this.fnCallback = function(id, nErrorCode, sErrorMsg)
        {
        	if(nErrorCode < 0){ //오류가 난 경우
        		this.alert("ERROR"+ sErrorMsg);
        		return ;
        	}

        	if(id == "getAlertData"){
        		return ;
        	}

        	if(id =="saveAlertData"){
        		alert("저장이 완료되었습니다");
        	}
        }
        /**************************************************************************
        * 사용자 FUNCTION 영역
        **************************************************************************/


        this.fnToday = function()
        {
            var objDate = new nexacro.Date();
            var yyyy = objDate.getFullYear(); // 연도
            var mm = (objDate.getMonth() + 1).toString().padStart(2, "0"); // 월
            var dd = objDate.getDate().toString().padStart(2, "0"); // 일

            var sToday = yyyy + "-" + mm + "-" + dd; // 'yyyy-MM-dd' 형식으로 날짜 생성
            return sToday; // 문자열로 반환
        }
        /**************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        **************************************************************************/

        this.btnWrite_onclick = function(obj,e)
        {
        	this.dsAnno.addRow();
        	this.dsAnno.addColumn("ALERT_NO")
        	var dateN = this.fnToday();
        	var nRow = this.dsAnno.rowcount -1;
        	this.dsAnno.setColumn(nRow,"WRITER", this.objApp.gdsUserInfo.getColumn(0,"USER_ID"));
        	this.dsAnno.setColumn(nRow,"DATE", dateN); // 날짜 이상하게 나옴
        	this.dsAnno.setColumn(nRow,"ALERT_NO", nRow + 1);
        };

        this.btnDelete_onclick = function(obj,e)
        {
        	var inK = this.dsAnno.rowposition;
        	this.dsAnno.deleteRow(inK);
        };

        this.btnFin_onclick = function(obj,e)
        {
        	var strSvcUrl = "edu/saveAlertData.do";
        	var inData    = "in_data=dsAnno:U";
        	var outData   = "";
        	var strArg    = "";
        	this.gfnTransaction("saveAlertData", strSvcUrl, inData, outData, strArg, "fnCallback", true);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.alertWrite_onload,this);
            this.btnWrite.addEventHandler("onclick",this.btnWrite_onclick,this);
            this.grdAnno.addEventHandler("oncellclick",this.grdAnno_oncellclick,this);
            this.btnFin.addEventHandler("onclick",this.btnFin_onclick,this);
            this.btnDelete.addEventHandler("onclick",this.btnDelete_onclick,this);
        };
        this.loadIncludeScript("alertWrite.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
