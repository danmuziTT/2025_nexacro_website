(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_File");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFile", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"chkYN\" type=\"STRING\" size=\"256\"/><Column id=\"file_id\" type=\"STRING\" size=\"256\"/><Column id=\"file_name\" type=\"STRING\" size=\"256\"/><Column id=\"file_size\" type=\"STRING\" size=\"256\"/><Column id=\"file_type\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDown", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"chkYN\" type=\"STRING\" size=\"256\"/><Column id=\"file_id\" type=\"STRING\" size=\"256\"/><Column id=\"file_name\" type=\"STRING\" size=\"256\"/><Column id=\"file_size\" type=\"STRING\" size=\"256\"/><Column id=\"file_type\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd00","40","42","720","118",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsFile");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"123\"/><Column size=\"123\"/><Column size=\"123\"/><Column size=\"123\"/><Column size=\"71\"/><Column size=\"71\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"file_id\"/><Cell col=\"2\" text=\"file_name\"/><Cell col=\"3\" text=\"file_size\"/><Cell col=\"4\" text=\"file_type\"/><Cell col=\"5\"/><Cell col=\"6\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chkYN\"/><Cell col=\"1\" text=\"bind:file_id\"/><Cell col=\"2\" text=\"bind:file_name\"/><Cell col=\"3\" text=\"bind:file_size\"/><Cell col=\"4\" text=\"bind:file_type\"/><Cell col=\"5\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"다운로드\"/><Cell col=\"6\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","40","184","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("파일 선택");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","170","184","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("파일 업로드");
            this.addChild(obj.name, obj);

            obj = new Button("btn02","300","184","163","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("파일 목록 가져오기");
            this.addChild(obj.name, obj);

            obj = new Button("btn03","473","184","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("전체 다운로드");
            this.addChild(obj.name, obj);

            obj = new Button("btn04","610","184","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("선택다운로드");
            this.addChild(obj.name, obj);

            obj = new Button("btn05","610","224","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("다운2");
            this.addChild(obj.name, obj);

            obj = new Grid("grd01","50","250","440","122",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("dsDown");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"chkYN\"/><Cell col=\"1\" text=\"file_id\"/><Cell col=\"2\" text=\"file_name\"/><Cell col=\"3\" text=\"file_size\"/><Cell col=\"4\" text=\"file_type\"/></Band><Band id=\"body\"><Cell text=\"bind:chkYN\"/><Cell col=\"1\" text=\"bind:file_id\"/><Cell col=\"2\" text=\"bind:file_name\"/><Cell col=\"3\" text=\"bind:file_size\"/><Cell col=\"4\" text=\"bind:file_type\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frm_File.xfdl", function() {

        this.btn00_onclick = function(obj,e)
        {
        	this.FileDialog00.open("파일 선택", 3, "%MYDOCUMENT%");
        };

        this.FileDialog00_onclose = function(obj,e)
        {
        	var objFileList = e.virtualfiles;
        	for(var i=0; i < objFileList.length; i++)
        	{
        		var bExist = this.FileUpTransfer00.existFile(objFileList[i]);

        		if(!bExist){
        			var sFileName = objFileList[i].filename;
        			this.FileUpTransfer00.addFile(sFileName, objFileList[i]);

        			var nRow = this.dsFile.addRow();
        			var sFileType = sFileName.substr(sFileName.lastIndexOf(".")+ 1)
        			this.dsFile.setColumn(nRow, "file_id", sFileName);
        			this.dsFile.setColumn(nRow, "file_name", sFileName);
        			this.dsFile.setColumn(nRow, "file_size", sFileName.length);
        			this.dsFile.setColumn(nRow, "file_type", sFileType);
        		}
        	}
        };

        this.btn01_onclick = function(obj,e)
        {
        	var sUrl = "SvcUrl::edu/uploadFile.do";
        	this.FileUpTransfer00.setPostData("userPath", "nexa_edu");
        	this.FileUpTransfer00.upload(sUrl);
        };


        this.FileUpTransfer00_onsuccess = function(obj,e)
        {
        	var objDs = e.datasets[0];

        	for(var i= 0; i<objDs.rowcount; i++){
        		var nRow = this.dsFile.findRow("file_id", objDs.getColumn(i, "file_id"))
        		this.dsFile.findRow("file_id", objDs.getColumn(i, "file_id"))
        		 this.dsFile.findRow("file_id", objDs.getColumn(i, "file_name"))
        		this.dsFile.findRow("file_id", objDs.getColumn(i, "file_size"))
        	}
        	trace(objDs.saveXML());
        };

        this.btn02_onclick = function(obj,e)
        {
        	this.transaction(
        		"getFileList"
        		 ,"SvcUrl::edu/getFileList.do"
        		 ,""
        		 ,"dsFile = ds_file"
        		 ,"userPath='nexa_edu'"
        		,"fn_callback"
        	);
        };


        this.grd00_oncellclick = function(obj,e)
        {
        	if(e.cell == 4){
        		//다운로드
        		var sUrl = "SvcUrl::edu/downloadFile.do"
        		var sFileId = this.dsFile.getColumn(e.row, "file_id");
        		this.FileDownTransfer00.setPostData("downFileId", sFileId);
        		this.FileDownTransfer00.set_downloadfilename(sFileId); //다운로드 시 받을 이을값/웹브라우저에서 설정된 다운 방식
        		this.FileDownTransfer00.download(sUrl);
        	}
        	else if(e.cell == 5){
        		//삭제
        		var sFileId = this.dsFile.getColumn(e.row, "file_id") //e.row == this.dsFile.rowposition
        		this.transaction(
        		"deleteFile"
        		 ,"SvcUrl::edu/deleteFile.do"
        		 ,""
        		 ,""
        		 ,"userPath='nexa_edu' file_id=" + nexacro.wrapQuote(sFileId)
        		,"fn_callback"
        	);
        	}
        };

        this.fn_callback = function (svcId, errCd, drrMsg)
        {
        	if(svcId =="deleteFile"){
        		//this.this.btn02_onclick();
        		this.dsFile.deleteRow(this.dsFile.rowposition);
        	}

        // 	else if(svcId == "getFileList"){
        // 		this.dsFile.addColumn("chkYN", "STRING");
        // 	}

        };

        this.btn03_onclick = function(obj,e) //전체다운로드 > 압축 후 다윤로드
        {
        	var sUrl = "SvcUrl::edu/downloadFile.do"
        	this.FileDownTransfer00.setPostData("downFileId", ""); //파일 아이디를 하나씩 전달하는 것은 어렵기 때문에 xml 파일 형식으로 전달
        	var sXml = this.dsFile.saveXML();
        	this.FileDownTransfer00.setPostData("downloadDs", encodeURIComponent(encodeURIComponent(sXml)));
        	this.FileDownTransfer00.set_downloadfilename("첨부파일.zip");//다운로드 시 받을 이을값/웹브라우저에서 설정된 다운 방식
        	this.FileDownTransfer00.download(sUrl);
        };

        this.btn04_onclick = function(obj,e) //선택다운로드
        {
        	var nRow = this.dsFile.findRow("chkYN", 1);
        // 	if(nRow == -1){
        // 		//선택한게 없는경우
        // 	}
        	var nCount = this.dsFile.getCaseCount("chkYN == '1'");
        	if(nCount == 0){ //다운X
        	}
        	else if(nCount == 1){ //단건다운
        		var sUrl = "SvcUrl::edu/downloadFile.do"
        		var sFileId = this.dsFile.getColumn(nRow, "file_id");
        		this.FileDownTransfer00.setPostData("downFileId", sFileId);
        		this.FileDownTransfer00.set_downloadfilename(sFileId); //다운로드 시 받을 이을값/웹브라우저에서 설정된 다운 방식
        		this.FileDownTransfer00.download(sUrl);
        	}
        	else{ //zip 다운
        	for(var i = 0; i < this.dsFile.rowcount; i++){
        		if(this.dsFile.getColumn(i, "chkYN") == "1"){
        			var newRow = this.dsDown.addRow();
        			this.dsDown.copyRow(newRow, this.dsFile, i);
        		}
        	}


        	var sUrl = "SvcUrl::edu/downloadFile.do"
        		this.FileDownTransfer00.setPostData("downloadId", ""); //파일 아이디를 하나씩 전달하는 것은 어렵기 때문에 xml 파일 형식으로 전달
        		var sXml = this.dsDown.saveXML();
        		this.FileDownTransfer00.setPostData("downloadDs", encodeURIComponent(encodeURIComponent(sXml)));
        		this.FileDownTransfer00.set_downloadfilename("첨부파일.zip");//다운로드 시 받을 이을값/웹브라우저에서 설정된 다운 방식
        		this.FileDownTransfer00.download(sUrl);
        	}


        // 	var selectedFiles = [];
        // 	 for (var i = 0; i < this.dsFile.rowcount; i++) {
        //         var isChecked = this.dsFile.getColumn(i, "chkYN");
        //
        // 		if (isChecked == "1") {
        //             var sFileId = this.dsFile.getColumn(i, "file_id");
        //             selectedFiles.push(sFileId);
        //         }
        // 		}
        // 		if(selectedFiles.length > 1){ //zip 파일 다운
        // 			var sUrl = "SvcUrl::edu/downloadFile.do"
        // 			this.FileDownTransfer00.setPostData(selectedFiles); //파일 아이디를 하나씩 전달하는 것은 어렵기 때문에 xml 파일 형식으로 전달
        // 			var sXml = this.dsFile.saveXML();
        // 			this.FileDownTransfer00.setPostData("downloadDs", encodeURIComponent(encodeURIComponent(sXml)));
        // 			this.FileDownTransfer00.set_downloadfilename("첨부파일.zip");//다운로드 시 받을 이을값/웹브라우저에서 설정된 다운 방식
        // 			this.FileDownTransfer00.download(sUrl);
        // 		}
        //
        // 		else if (selectedFiles.length == 1){ //단건파일 다운
        // 			var sUrl = "SvcUrl::edu/downloadFile.do"
        // 			var sFileId = this.dsFile.getColumn(e.row, "file_id");
        // 			this.FileDownTransfer00.setPostData("downFileId", sFileId);
        // 			this.FileDownTransfer00.set_downloadfilename(sFileId); //다운로드 시 받을 이을값/웹브라우저에서 설정된 다운 방식
        // 			this.FileDownTransfer00.download(sUrl);
        // 		}
        //
        // 		else {
        // 			alert("선택하신 다운로드 할 파일이 없습니다");
        // 		}
        };

        this.btn05_onclick = function(obj,e)
        {
        	var arrRow = this.dsFile.extractRows("chkYN == '1'");
        	if(arrRow.length == 0){
        		alert("선택하신 다운로드 할 파일이 없습니다");
        	}
        	else if(arrRow.length == 1){
        		var sFileId = this.dsFile.getcolumn(arrRow[0], "file_id");
        	}
        	else{
        		for(i = 0; i < arrRow.length; i++){
        			var newRow = this.dsDown.addRow();
        			this.dsDown.copyRow(newRow, this.dsFile.arrRow[i]);
        		}
        	}
        };

        this.grd00_ondrop = function(obj,e)
        { //드래그 앤 드롭
        	//e.filelist //파일정보 얻어오는 법

        	var objFileList = e.filelist;

        }; //

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.grd00.addEventHandler("oncellclick",this.grd00_oncellclick,this);
            this.grd00.addEventHandler("ondrop",this.grd00_ondrop,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
            this.btn03.addEventHandler("onclick",this.btn03_onclick,this);
            this.btn04.addEventHandler("onclick",this.btn04_onclick,this);
            this.btn05.addEventHandler("onclick",this.btn05_onclick,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
            this.FileDialog00.addEventHandler("onclose",this.FileDialog00_onclose,this);
        };
        this.loadIncludeScript("frm_File.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
