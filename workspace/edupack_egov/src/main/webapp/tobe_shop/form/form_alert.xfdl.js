(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form_alert");
            this.set_titletext("공지사항");
            if (Form == this.constructor)
            {
                this._setFormPosition(1240,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsAlert", this);
            obj._setContents("<ColumnInfo><Column id=\"ALERT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL\" type=\"STRING\" size=\"256\"/><Column id=\"WRITER\" type=\"STRING\" size=\"256\"/><Column id=\"DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new ListView("ListView00","0","100",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsAlert");
            obj.set_bandexpandtype("accordion");
            obj.set_bandinitstatus("collapse");
            obj.set_scrolltype("none");
            obj._setContents("<Formats><Format id=\"default\"><Band id=\"body\" width=\"100%\" height=\"80\" expandbartype=\"true\"><Cell id=\"Cell01\" left=\"10\" top=\"0\" width=\"180\" height=\"60\" text=\"제목: \" border=\"0px none\" font=\"20px &quot;Malgun Gothic&quot;\"/><Cell id=\"Cell03\" left=\"220\" top=\"0\" width=\"580\" height=\"60\" text=\"bind:TITLE\" border=\"0px none\" font=\"20px &quot;Malgun Gothic&quot;\"/><Cell id=\"Cell07\" left=\"820\" top=\"0\" width=\"190\" height=\"60\" text=\"bind:WRITER\" border=\"0px none\" font=\"20px &quot;Malgun Gothic&quot;\"/><Cell id=\"Cell09\" left=\"1010\" top=\"0\" height=\"60\" text=\"bind:DATE\" border=\"0px none\" font=\"20px &quot;Malgun Gothic&quot;\" displaytype=\"calendarcontrol\" width=\"220\"/></Band><Band id=\"detail\" width=\"100%\" height=\"200\"><Cell id=\"Cell00\" left=\"10\" top=\"10\" width=\"100\" height=\"30\" text=\"작성자\" border=\"0px none\" font=\"20px &quot;Malgun Gothic&quot;\"/><Cell id=\"Cell01\" left=\"130\" top=\"10\" width=\"200\" height=\"30\" text=\"bind:WRITER\" border=\"0px none\" font=\"20px &quot;Malgun Gothic&quot;\"/><Cell id=\"Cell02\" left=\"440\" top=\"10\" width=\"100\" height=\"30\" text=\"작성날짜\" border=\"0px none\" font=\"20px &quot;Malgun Gothic&quot;\"/><Cell id=\"Cell03\" left=\"560\" top=\"3\" width=\"200\" height=\"45\" text=\"bind:DATE\" displaytype=\"calendarcontrol\" border=\"0px none\" font=\"20px &quot;Malgun Gothic&quot;\"/><Cell id=\"Cell04\" left=\"120\" top=\"55\" width=\"1100\" height=\"135\" text=\"bind:DETAIL\" border=\"1px solid\" font=\"20px &quot;Malgun Gothic&quot;\" wordWrap=\"char\"/><Cell id=\"Cell05\" left=\"10\" top=\"55\" width=\"100\" height=\"30\" text=\"내용\" border=\"0px none\" font=\"20px &quot;Malgun Gothic&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staLine","50","80",null,"3","50",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#3f6267");
            this.addChild(obj.name, obj);

            obj = new Static("staAnno","60","40","80","23",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("공지사항");
            obj.set_font("normal 700 20px/normal \"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1240,570,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("form_alert.xfdl", function() {
        /**************************************************************************
        * include 영역
        **************************************************************************/

        /**************************************************************************
        * FORM 변수 선언 영역 (fv)
        **************************************************************************/

        /**************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        **************************************************************************/

        this.form_alert_onload = function(obj,e)
        {
        	 this.objApp = nexacro.getApplication();

        	 var strSvcUrl = "edu/getAlertDataSite.do"; //s_order
        	var inData    = "";
        	var outData   = "dsAlert=out_emp";
        	var strArg    = ""
        	this.gfnTransaction("getAlertDataSite", strSvcUrl, inData, outData, strArg, "fnCallback", true);

        };

        /**************************************************************************
        * CRUD 및 TRANSACTION 서비스 호출 처리
        **************************************************************************/

        /**************************************************************************
        * CALLBACK 콜백 처리부분(Transaction, Popup)
        **************************************************************************/

        var num = 0;
        this.fnCallback = function(id, nErrorCode, sErrorMsg)
        {
        	if(nErrorCode < 0){ //오류가 난 경우
        		this.alert("ERROR"+ sErrorMsg);
        		return ;
        	}
        	if(id =="getAlertDataSite")
        		this.num = this.dsAlert.rowcount;
        		this.ListView00.set_height(this.num * 80 + 10);
        		this.parent.parent.fnMainPageOnLoad(this.num * 80 + 100 + 10);
        		return ;
        	}
        /**************************************************************************
        * 사용자 FUNCTION 영역
        **************************************************************************/

        /**************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        **************************************************************************/

        this.ListView00_onbandstatuschanged = function(obj,e)
        {
        	 var openCount = 0;

            // ListView의 전체 행에 대해 반복
            for (var i = 0; i < this.num; i++) {
                // 각 행의 detail 상태 확인
        		var bBandExpand = this.ListView00.getBandExpandStatus(i);
                if (bBandExpand ==true) {
                    openCount++;  // detail이 열려있으면 카운트 증가
                }
            }

        	this.ListView00.set_height(80 * this.num + 200 * openCount + 10);
        	this.parent.parent.fnMainPageOnLoad(100 + 80 * this.num + 200 * openCount + 10)
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_alert_onload,this);
            this.ListView00.addEventHandler("onbandstatuschanged",this.ListView00_onbandstatuschanged,this);
        };
        this.loadIncludeScript("form_alert.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
