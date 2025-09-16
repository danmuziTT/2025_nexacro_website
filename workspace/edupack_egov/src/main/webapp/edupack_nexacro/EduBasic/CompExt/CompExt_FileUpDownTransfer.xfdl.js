(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FileUpDown");
            this.set_titletext("New Form");
            this.set_border("");
            this.set_background("");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUpload", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTH\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"FiLE_SIZE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDownload", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTH\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"FiLE_SIZE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("fileUpTrans", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("fileDownTrans", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("fileDialog", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","10","371","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("FileDownload");
            obj.set_positionstep("0");
            obj.set_cssclass("sta_WF_LabelTxt12");
            this.addChild(obj.name, obj);

            obj = new Static("Static56","10","73","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("FileUpload");
            obj.set_positionstep("0");
            obj.set_cssclass("sta_WF_LabelTxt12");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"73","69","28","87",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("delete");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFileUpload","10","106",null,"210","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsUpload");
            obj.set_autofittype("col");
            obj.set_nodatatext("You can attach files by dragging them.");
            obj.set_positionstep("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"42\" band=\"left\"/><Column size=\"152\"/><Column size=\"320\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"0\"/><Cell col=\"1\" text=\"FILE_NAME\"/><Cell col=\"2\" text=\"FILE_URL\"/><Cell col=\"3\" text=\"SIZE\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:FILE_NAME\" displaytype=\"normal\" edittype=\"none\" treelevel=\"bind:DEPTH\"/><Cell col=\"2\" text=\"bind:FILE_PATH\"/><Cell col=\"3\" treelevel=\"bind:DEPTH\" text=\"bind:FiLE_SIZE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"73","69","28","14",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("upload");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFileDownload","10","404",null,"240","10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsDownload");
            obj.set_autofittype("col");
            obj.set_positionstep("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\" band=\"left\"/><Column size=\"152\"/><Column size=\"320\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"0\"/><Cell col=\"1\" text=\"FILE_NAME\"/><Cell col=\"2\" text=\"FILE_URL\"/><Cell col=\"3\" text=\"SIZE\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:FILE_NAME\" displaytype=\"normal\" edittype=\"none\" treelevel=\"bind:DEPTH\"/><Cell col=\"2\" text=\"bind:FILE_PATH\"/><Cell col=\"3\" treelevel=\"bind:DEPTH\" text=\"bind:FiLE_SIZE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnDonwload",null,"371","106","28","12",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("All DownLoad");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"371","106","28","124",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Get List");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"73","69","28","161",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("add");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","10","40","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text(" Basic Usage");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","10","0","316","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("File Upload / Download Transfer");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1038,650,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("New Form");
                p.set_border("");
                p.set_background("");

                p.Static02.set_taborder("0");
                p.Static02.set_text("FileDownload");
                p.Static02.set_positionstep("0");
                p.Static02.set_cssclass("sta_WF_LabelTxt12");
                p.Static02.move("10","371","250","28",null,null);

                p.Static56.set_taborder("1");
                p.Static56.set_text("FileUpload");
                p.Static56.set_positionstep("0");
                p.Static56.set_cssclass("sta_WF_LabelTxt12");
                p.Static56.move("10","73","250","28",null,null);

                p.btnDel.set_taborder("2");
                p.btnDel.set_text("delete");
                p.btnDel.set_positionstep("0");
                p.btnDel.move(null,"73","69","28","87",null);

                p.grdFileUpload.set_taborder("3");
                p.grdFileUpload.set_binddataset("dsUpload");
                p.grdFileUpload.set_autofittype("col");
                p.grdFileUpload.set_nodatatext("You can attach files by dragging them.");
                p.grdFileUpload.set_positionstep("0");
                p.grdFileUpload.move("10","106",null,"210","10",null);

                p.btnSave.set_taborder("4");
                p.btnSave.set_text("upload");
                p.btnSave.set_positionstep("0");
                p.btnSave.move(null,"73","69","28","14",null);

                p.grdFileDownload.set_taborder("5");
                p.grdFileDownload.set_binddataset("dsDownload");
                p.grdFileDownload.set_autofittype("col");
                p.grdFileDownload.set_positionstep("0");
                p.grdFileDownload.move("10","404",null,"240","10",null);

                p.btnDonwload.set_taborder("6");
                p.btnDonwload.set_text("All DownLoad");
                p.btnDonwload.set_positionstep("0");
                p.btnDonwload.set_cssclass("btn_WF_basic01");
                p.btnDonwload.move(null,"371","106","28","12",null);

                p.btnSearch.set_taborder("7");
                p.btnSearch.set_text("Get List");
                p.btnSearch.set_positionstep("0");
                p.btnSearch.move(null,"371","106","28","124",null);

                p.btnAdd.set_taborder("8");
                p.btnAdd.set_text("add");
                p.btnAdd.move(null,"73","69","28","161",null);

                p.Static03.set_taborder("9");
                p.Static03.set_text(" Basic Usage");
                p.Static03.set_cssclass("sta_WF_TitleType1");
                p.Static03.move("10","40","250","28",null,null);

                p.sta00.set_taborder("10");
                p.sta00.set_text("File Upload / Download Transfer");
                p.sta00.set_cssclass("sta_WF_TitleMain");
                p.sta00.move("10","0","316","28",null,null);
            	}
            );
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","",480,1050,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static02.set_text("FileDownload");
                p.Static02.move("20","592","220","40",null,null);

                p.Static56.move("20","144","220","40",null,null);

                p.btnDel.move(null,"194","90","46","115",null);

                p.grdFileUpload.set_cssclass("grd_WF_FileUpload");
                p.grdFileUpload.move("20","247",null,"320","20",null);

                p.btnSave.move(null,"194","90","46","20",null);

                p.grdFileDownload.set_cssclass("grd_WF_FileDownload");
                p.grdFileDownload.move("20","697",null,"320","20",null);

                p.btnDonwload.move(null,"644","126","46","20",null);

                p.btnSearch.move(null,"644","150","46","151",null);

                p.btnAdd.move(null,"194","90","46","210",null);
            	}
            );
            obj.set_mobileorientation("portrait");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CompExt_FileUpDownTransfer.xfdl", function() {
        this.uploadPath = "/upload";	//upload folder name

        this.fnAddFileList = function(objFileList)
        {
        	var vFile, strId;

        	for (var i=0; i<objFileList.length; i++)
        	{
        		var sFileName = objFileList[i].filename;
        		var nIdx = this.fileUpTrans.addFile(sFileName, objFileList[i]);

        		var nRow = this.dsUpload.addRow();
        		this.dsUpload.setColumn(nRow, "FILE_NAME", sFileName);

        	}
        }

        this.fnUploadFile = function()
        {
        	//file upload
        	var sURL = "EduUrl::fileUpload.jsp?PATH="+this.uploadPath;
        	this.fileUpTrans.upload(sURL);
        }

        this.fnDownloadFile = function(i)
        {
        	this.fileDownTrans.clearPostDataList();

        	this.fileDownTrans.set_downloadfilename(this.dsDownload.getColumn(i, "FILE_NAME"));	//runtime 전용 프로퍼티

        	this.fileDownTrans.setPostData(
        		"filepath",
        		this.dsDownload.getColumn(i, "FILE_URL")
        	);
        	this.fileDownTrans.setPostData(
        		"filename",
        		this.dsDownload.getColumn(i, "FILE_NAME")
        	);
        	this.fileDownTrans.setPostData(
        		"filefolder",
        		"fileSample"
        	);

        	this.fileDownTrans.download("EduUrl::fileDownTransferSingle.jsp");
        }

        this.fnDownloadFileAll = function()
        {
        	this.fileDownTrans.clearPostDataList();

        	var arrNameList = new Array();

        	for(var i=0; i < this.dsDownload.getRowCount(); i++)
        	{
        		//fileDownload_postdataAll.jsp -> request.getParameter("filenamelist");
        		if(this.dsDownload.getColumn(i, "CHK") == 1)
        			arrNameList.push(this.dsDownload.getColumn(i, "FILE_NAME"));
        	}

        	this.fileDownTrans.set_downloadfilename("fileSample.zip");	//runtime 전용 프로퍼티

        // 	this.fileDownTrans.setPostData(
        // 		"filefolder",
        // 		"fileSample"
        // 	);

        	this.fileDownTrans.setPostData(
        		"filenamelist",
        		arrNameList
        	);

        	this.fileDownTrans.download("EduUrl::fileDownTransferMulti.jsp?filefolder=" + "fileSample");
        }

        this.fnGetFileSize = function(filesize)
        {
        	var sOutput = filesize + " bytes";
        	for (var aMultiples = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], nMultiple = 0, nApprox = filesize / 1024; nApprox > 1; nApprox /= 1024, nMultiple++)
        	{
        		sOutput = nApprox.toFixed(3) + " " + aMultiples[nMultiple];
        	}
        	return sOutput;
        };

        this.fnCallbackTransaction = function(svcId, errCode, errMsg)
        {
        	trace(errCode + " ========= " + errMsg);

        	if(svcId == "list")
        	{
        		this.dsDownload.set_enableevent(false);

        		this.dsDownload.addColumn("CHK", "STRING", 255);

        		for(var i=0; i<this.dsDownload.getRowCount(); i++)
        		{
        			this.dsDownload.setColumn(i, "CHK", 0);
        			this.dsDownload.setColumn(i,"FiLE_SIZE",this.fnGetFileSize(this.dsDownload.getColumn(i,"FiLE_SIZE")));
        		}

        		this.dsDownload.set_enableevent(true);
        	}
        };

        this.btnAdd_onclick = function(obj,e)
        {
        	//file dialog open
        	this.fileDialog.open('fileselect', FileDialog.MULTILOAD);

        };

        this.btnDel_onclick = function(obj,e)
        {
        	//selected file delete
        	var chk = this.grdFileUpload.getCellPropertyValue(0, 0, "text");
        	var length = this.dsUpload.rowcount;

        	if(chk == 1){
        		//전체삭제
        		for(var i=0; i<length; i++)
        		{
        			this.dsUpload.deleteRow((this.dsUpload.rowcount-1));

        			var objFileList = this.fileUpTrans.filelist[(this.dsUpload.rowcount-1)];		//selected file search
        			this.fileUpTrans.removeFile(objFileList);			//filelist remove
        		}
        	}
        	else{
        		//단건삭제
        		var nRow = this.dsUpload.rowposition;
        		this.dsUpload.deleteRow(nRow);

        		var objFileList = this.fileUpTrans.filelist[nRow];	//selected file search
        		this.fileUpTrans.removeFile(objFileList);			//filelist remove
        	}
        };


        /**
         * @description 파일 전송
        */
        this.btnSave_onclick = function(obj,e)
        {
        	//file upload 실행
        	this.setWaitCursor(true);
        	this.fnUploadFile();
        };

        this.btnSearch_onclick = function(obj,e)
        {
        	//search attach file list
        	trace(this.serverURL + "fileDownload_servlet_list_XML.jsp");
        	trace("filefolder="+this.uploadPath);
        	this.transaction("list"
        	                ,"EduUrl::fileDownTransferFileList.jsp"
        					,""
        					,"dsDownload=dsList"
        					,"filefolder="+this.uploadPath
        					,"fnCallbackTransaction");
        };

        this.btnDonwload_onclick = function(obj,e)
        {
        	if(this.dsDownload.getCaseCount("CHK == '1'") < 1)
        	{
        		alert("You must select 1 item.");
        	}
        	else
        	{
        		if(this.dsDownload.getCaseCount("CHK == '1'") > 1)
        		{
        			this.fnDownloadFileAll();
        		}
        		else
        		{
        			var nRow = this.dsDownload.filterRow("CHK", 1);
        			this.fnDownloadFile(nRow);
        		}
        	}
        };

        /**
         * @description 파일업로드 그리드 셀 더블클릭 이벤트
        */


        /**
         * @description 파일업로드 그리드 마우스 드랍 이벤트
        */
        this.grdFileUpload_ondrop = function(obj,e)
        {
        	if(e.datatype == "file")
        	{
        		this.fnAddFileList(e.filelist);
        	}
        };





        /**
         * @description 파일다운로드 닫았을 때 이벤트
        */
        this.fileDialog_onclose = function(obj,e)
        {

        	this.fnAddFileList(e.virtualfiles);
        	//this.grdFileUpload.setFocus();
        };

        this.fileList_onsuccess = function(obj, e)
        {
        	//getFileSize() call --> reason : 9
        	if (e.reason == 9)
        	{
        		var nRowIdx = this.dsUpload.addRow();
        		this.dsUpload.setColumn(nRowIdx, "FILE_NAME", obj.filename);
        		this.dsUpload.setColumn(nRowIdx, "FiLE_SIZE", this.fnGetFileSize(e.filesize));
        		this.dsUpload.setColumn(nRowIdx, "FILE_PATH", obj.fullpath);
        	}
        }

        /**
         * @description error
        */
        this.fileList_onerror = function(obj, e)
        {
        	trace("errortype: "+e.errortype);
        	trace("errormsg: "+e.errormsg);
        	trace("statuscode: "+e.statuscode);
        }

        /**
         * @description success
        */
        this.fileUpTrans_onsuccess = function(obj,e)
        {
        	this.setWaitCursor(false);
        	var objCallDs = e.datasets[0];

        	trace(e.datasets[0].saveXML());
        	for(var i=0; i<objCallDs.getRowCount(); i++)
        	{
        		var nRow = this.dsUpload.findRow("FILE_NAME", objCallDs.getColumn(i,"FILE_NAME"))
        		if(nRow > -1){
        			this.dsUpload.setColumn(nRow, "FILE_PATH",objCallDs.getColumn(i,"FILE_PATH"));
        			this.dsUpload.setColumn(nRow, "FiLE_SIZE",objCallDs.getColumn(i,"FiLE_SIZE"));
        		}
        	}

        	alert("success");
        };


        /**
         * @description error
        */
        this.fileUpTrans_onerror = function(obj,e)
        {
        	this.setWaitCursor(false);
        	alert(e.errortype + ">>" + e.errormsg);
        };


        /**
         * @description All Check
        */
        this.grdFileDownload_onheadclick = function(obj,e)
        {
        	if(e.col == 0)
        	{
        		var chk = obj.getCellPropertyValue(e.row, e.cell, "text");

        		if(chk == 0)
        		{
        			obj.setCellProperty("head", e.cell, "text", 1);

        			for(var i=0; i<this.dsDownload.rowcount; i++)
        			{
        				this.dsDownload.setColumn(i, "CHK", 1);
        			}
        		}
        		else
        		{
        			obj.setCellProperty("head", e.cell, "text", 0);

        			for(var i=0; i<this.dsDownload.rowcount; i++)
        			{
        				this.dsDownload.setColumn(i, "CHK", 0);
        			}
        		}
        	}
        };

        /**
         * @description
        */
        this.grdFileDownload_oncelldblclick = function(obj,e)
        {
        	this.fnDownloadFile(e.row);
        };

        /**
         * @description onsuccess
        */
        this.fileDownTrans_onsuccess = function(obj,e)
        {
        	trace(e.targetfullpath);
        };

        /**
         * @description onerror
        */
        this.fileDownTrans_onerror = function(obj,e)
        {
        	trace("error : " + e.errormsg);
        };

        this.btn00_onclick = function(obj,e)
        {
        	this.fileDialog.open('fileselect', FileDialog.MULTILOAD);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnDel.addEventHandler("onclick",this.btnDel_onclick,this);
            this.grdFileUpload.addEventHandler("ondrop",this.grdFileUpload_ondrop,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.grdFileDownload.addEventHandler("oncelldblclick",this.grdFileDownload_oncelldblclick,this);
            this.grdFileDownload.addEventHandler("onheadclick",this.grdFileDownload_onheadclick,this);
            this.btnDonwload.addEventHandler("onclick",this.btnDonwload_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.fileUpTrans.addEventHandler("onerror",this.fileUpTrans_onerror,this);
            this.fileUpTrans.addEventHandler("onsuccess",this.fileUpTrans_onsuccess,this);
            this.fileDownTrans.addEventHandler("onsuccess",this.fileDownTrans_onsuccess,this);
            this.fileDownTrans.addEventHandler("onerror",this.fileDownTrans_onerror,this);
            this.fileDialog.addEventHandler("onclose",this.fileDialog_onclose,this);
        };
        this.loadIncludeScript("CompExt_FileUpDownTransfer.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
