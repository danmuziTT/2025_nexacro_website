(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SampleWebBrowserScroll");
            this.set_titletext("Web Browsser Scroll");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_document", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"idx\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"description\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new WebBrowser("webBrowResult","10","143",null,null,"10","24",null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn00",null,"110","120","28","15",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("10개추가");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","10","0","331","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Web Browsser Scroll");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","10","35",null,"70","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("1.WebBrowser에 innerHtml을 추가한다.\r\n2.html body의 height를 구해서 WebBrowser의 Height를 늘려주어 스크롤을 제거한다.");
            obj.set_cssclass("sta_WF_Desc");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SampleWebBrowserScroll.xfdl", function() {
        /**
        *  Nexacro Professional Training Couse
        *  @MenuPath    개발가이드 > 표준 및 기본 정의 > SampleWebBrowserScroll
        *  @FileName 	SampleWebBrowserScroll.xfdl
        *  @Creator 	TOBESOFT Education
        *  @CreateDate 	2023/01/03
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2023/01/03      		 TOBESOFT Education	 	  	최초 생성
        *******************************************************************************
        */


        this.SampleWebBrowserScroll_onload = function(obj, e)
        {
            var sUrl = this.gfnGetServerUrl() + "web/inner.html";
        	this.webBrowResult.set_url(sUrl);
        }

        this.fn_search = function(nIdx)
        {
        	//this.ds_document.clearData();
        	for(var i=0; i<nIdx; i++)
        	{
        	    var nRow = this.ds_document.addRow();
        		this.ds_document.setColumn(nRow,"title", nRow + " : 제목");
        		this.ds_document.setColumn(nRow,"description", "설명입니다. ");
        	}

        	var strTmp;
        	var strHtml = "<table  width='100%'   border='0' cellpadding='1' cellspacing='1'>";

        	for (var i = 0; i < this.ds_document.rowcount; i++) {
        		var strTmp;

        		strTmp = this.ds_document.getColumn(i,"description");
        		strTmp = nexacro.replaceAll(strTmp, String.fromCharCode(20),'@');
        		strTmp = nexacro.replaceAll(strTmp, String.fromCharCode(32), "&nbsp;")
        		strTmp = nexacro.replaceAll(nexacro.replaceAll(strTmp, String.fromCharCode(9), "&nbsp;&nbsp;&nbsp;&nbsp;"), String.fromCharCode(32), "&nbsp;");
        		if(String(strTmp) == 'undefined') strTmp = "";

        		strHtml += "<tr>";
        		strHtml += "<td  height='25' align=center bgcolor=#ededed>Title</td>";
        		strHtml += "<td  height='25' align=center bgcolor=#ededed>Description</td>";
        		strHtml += "</tr>";
        		strHtml += "<tr>";
        		strHtml += "<td  height='31' valign='center' border=0><strong><font size=3>&nbsp;" + this.ds_document.getColumn(i,"title")  + "</font></strong></td>";
        		strHtml += "<td  height='31' colspan=2 align=left><table width=100% cellpadding='2' cellspacing='1' bkcolor='#f3f3f3'><td><font size='2'>"  + nexacro.replaceAll(strTmp, String.fromCharCode(10),'<br>') + "</font></td></tr></table></td>";
        		strHtml += "</tr>";
        	}
        	strHtml += "</table>";

        	// 웹브라우져 document Body 객체 가져오는 법
        	//this.doc = this.webBrowResult.getProperty("document"); // html 전용 script
        	this.docBody = this.webBrowResult.getProperty("document").getProperty("body");
        	this.docEle = this.webBrowResult.getProperty("document").getProperty("documentElement");

        	// 웹브라우져 document Body 변경 처리
        	//this.doc.handle.body.innerHTML = strHtml;	// html 전용 script
        	this.docBody.setProperty("innerHTML", strHtml);
        	//trace("strHtml===" + strHtml);

        	// document Body의 크기를 가지고 웹브라우져 size 변경 처리
        	//var nHeight = this.doc.handle.body.offsetHeight;	// html 전용 script
        	var nHeight;
        	// 런타임 접속
        	if (system.navigatorname == "nexacro")
        	{
        		nHeight = this.docBody.getProperty("offsetHeight");
        		trace("nHeight===" + nHeight);
        		this.webBrowResult.setOffsetHeight(nHeight+40);
        	}
        	// 웹브라우져 접속
        	else {
        		nHeight = this.docBody.getProperty("offsetHeight");
        		trace("nHeight===" + nHeight);
        		this.webBrowResult.setOffsetHeight(nHeight+20);
        	}
        	this.resetScroll();
        }

        this.webBrowResult_onloadcompleted = function(obj, e)
        {

        }

        this.webBrowResult_onusernotify = function(obj, e)
        {

        }

        this.btn00_onclick = function(obj,e)
        {
        	this.fn_search(10);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SampleWebBrowserScroll_onload,this);
            this.webBrowResult.addEventHandler("onloadcompleted",this.webBrowResult_onloadcompleted,this);
            this.webBrowResult.addEventHandler("onusernotify",this.webBrowResult_onusernotify,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
        };
        this.loadIncludeScript("SampleWebBrowserScroll.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
