(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("newProduct");
            this.set_titletext("새 상품 올리기");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCategory", this);
            obj._setContents("<ColumnInfo><Column id=\"CATEGORY_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORY_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORY_SUM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNewProInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"PRO_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_NAME_EN\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_IMG\" type=\"STRING\" size=\"256\"/><Column id=\"SERVER_IMG\" type=\"STRING\" size=\"256\"/><Column id=\"SALE_PERCENT\" type=\"STRING\" size=\"256\"/><Column id=\"HOW_MUCH\" type=\"STRING\" size=\"256\"/><Column id=\"LIKE_NUMBER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNewProOp", this);
            obj._setContents("<ColumnInfo><Column id=\"PRO_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_OPTION\" type=\"STRING\" size=\"256\"/><Column id=\"OPTION_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OPTION_NUMBER\" type=\"INT\" size=\"256\"/><Column id=\"OPTION_ADD_PRICE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNewProDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"PRO_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"UPLOAD_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog00", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00","9","2","310","49",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("새로운 물품의 데이터를 올릴 수 있습니다");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","15","51","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("상품명");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00","15","101","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("상품명 (영문)");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","0","255","1000","10",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("gray");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","560","200","100","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">할인적용</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">할인없음</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Edit("edt00","670","208","280","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","910","208","40","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("%");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00","15","200","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("판매가");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","1","260","110","60",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("옵션");
            this.addChild(obj.name, obj);

            obj = new Static("sta05","80","260","150","60",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("총 판매 가능 개수 0 개");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","9","310","570","173",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("dsNewProOp");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"240\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"옵션코드\"/><Cell col=\"1\" text=\"옵션명\"/><Cell col=\"2\" text=\"옵션별 수량\"/><Cell col=\"3\" text=\"옵션가\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:OPTION_NAME\"/><Cell col=\"2\" text=\"bind:OPTION_NUMBER\"/><Cell col=\"3\" text=\"bind:OPTION_ADD_PRICE\" displaytype=\"number\" maskeditformat=\"###,###\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_01","15","151","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("상품 카테고리");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb00","129","159","380","35",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_innerdataset("dsCategory");
            obj.set_codecolumn("CATEGORY_ID");
            obj.set_datacolumn("CATEGORY_NAME");
            obj.set_text("cmb00");
            this.addChild(obj.name, obj);

            obj = new Edit("edt01","129","208","380","35",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Edit("edt02","129","59","515","35",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Edit("edt02_00","129","109","515","35",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Edit("edt03","584","335","392","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new Static("sta06","585","307","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("옵션명");
            this.addChild(obj.name, obj);

            obj = new Static("sta07","584","365","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("옵션별 판매수량");
            this.addChild(obj.name, obj);

            obj = new Edit("edt04","583","395","237","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            this.addChild(obj.name, obj);

            obj = new Static("sta07_00","585","425","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("옵션별 추가금");
            this.addChild(obj.name, obj);

            obj = new Edit("edt04_00","584","455","236","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","840","383","120","45",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("옵션추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00","840","438","120","45",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("옵션삭제");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","670","20","278","141",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("ImageViewer00");
            obj.set_stretch("fixaspectratio");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","673","168","115","25",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("이미지 업로드");
            obj.set_font("14px/normal \"verdana\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn02","830","168","115","25",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("이미지 삭제");
            obj.set_font("14px/normal \"verdana\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn03","322","744","356","46",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("물품 업로드 하기");
            this.addChild(obj.name, obj);

            obj = new WebView("webEditor","15","500","970","230",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt03","value","dsNewProOp","OPTION_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt04","value","dsNewProOp","OPTION_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt04_00","value","dsNewProOp","OPTION_ADD_PRICE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt00","value","dsNewProInfo","SALE_PERCENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edt02","value","dsNewProInfo","PRO_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edt02_00","value","dsNewProInfo","PRO_NAME_EN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edt01","value","dsNewProInfo","HOW_MUCH");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("newProduct.xfdl", function() {
        /**************************************************************************
        * include 영역
        **************************************************************************/

        /**************************************************************************
        * FORM 변수 선언 영역 (fv)
        **************************************************************************/

        /**************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        **************************************************************************/

        var i = 0;
        this.newProduct_onload = function(obj,e)
        {
        	this.objApp = nexacro.getApplication();

        	this.dsCategory.copyData(this.objApp.gdsProCategory);
        	for(var i = this.dsCategory.rowcount-1; i >= 0 ; i --)
        	{
        		if(this.dsCategory.getColumn(i, "LEVEL") == 0){
        			this.dsCategory.deleteRow(i);
        		}
        		else if(this.dsCategory.getColumn(i, "CATEGORY_NAME") == "ALL"){
        			this.dsCategory.deleteRow(i);
        		}
        	}

            var ds = this.objApp.gdsProInfo;
            var rowCount = ds.getRowCount();
            var maxCode = 0;

            for (var i = 0; i < rowCount; i++) {
                var code = ds.getColumn(i, "PRO_CODE");
                if (code) {
                    var num = parseInt(code, 10); // 숫자로 변환
                    if (!isNaN(num) && num > maxCode) {
                        maxCode = num;
                    }
                }
            }

            var newCode = maxCode + 1;
            var formattedCode = (newCode < 10) ? "000" + newCode : "00" + newCode;

            // ✅ 신규 상품 정보 추가
            this.dsNewProInfo.addRow();
            this.dsNewProInfo.setColumn(0, "PRO_CODE", formattedCode);
        	this.dsNewProInfo.setColumn(0, "LIKE_NUMBER", 0);


        	var sUrl = this.gfnGetServerUrl() + "smartEditor/SmartEditor2.html";
        	this.webEditor.set_url(sUrl);

        	this.dsNewProDetail.addRow();
        	this.dsNewProDetail.setColumn(0,"PRO_CODE", formattedCode);
        };

        /**************************************************************************
        * CRUD 및 TRANSACTION 서비스 호출 처리
        **************************************************************************/

        /**************************************************************************
        * CALLBACK 콜백 처리부분(Transaction, Popup)
        **************************************************************************/

        /**************************************************************************
        * 사용자 FUNCTION 영역
        **************************************************************************/

        this.fnUploadImage = function()
        {
        	this.FileUpTransfer00.setPostData("profile", "profile");
        	this.FileUpTransfer00.setPostData("userPath", "nexa_edu\\profile_image");
        	this.FileUpTransfer00.upload("SvcUrl::edu/uploadFile.do");
        }


        this.fn_callback = function(id, nErrorCode, sErrorMsg)
        {
        	if(nErrorCode <0) {
        		this.alert("error" + sErrorMsg);
        		return;
        	}

        	if(id == "saveNewData"){
        		var strSvcUrl = "edu/saveNewOption.do";
        		var inData    = "in_emp=dsNewProOp";
        		var outData   = "";
        		var strArg    = "";
        		this.gfnTransaction("saveNewOption", strSvcUrl, inData, outData, strArg, "fn_callback", true);
        	}

        	if(id == "saveNewOption"){
        		var strSvcUrl = "edu/saveNewDetail.do";
        		var inData    = "in_emp=dsNewProDetail:u";
        		var outData   = "";
        		var strArg    = "";
        		this.gfnTransaction("saveNewDetail", strSvcUrl, inData, outData, strArg, "fn_callback", true);
        	}

        	if(id == "saveNewDetail"){
        		this.addGds();
        		alert("업로드된 데이터 저장이 완료되었습니다!");
        // 		this.dsNewProInfo.clear();
        // 		this.dsNewProOp.clear();
        // 		this.dsNewProDetail.clear();
        //
        // 		this.dsNewProInfo.addRow();
        // 		this.dsNewProOp.addRow();
        // 		this.dsNewProDetail.addRow();
        	}
        };

        this.isEmptyFields = function()
        {
        	this.gfnClearValidation(this.dsNewProInfo);
        	this.gfnSetValidation(this.dsNewProInfo, "PRO_CODE", "물품코드", "required");
        	this.gfnSetValidation(this.dsNewProInfo, "PRO_NAME", "물품이름", "required");
        	this.gfnSetValidation(this.dsNewProInfo, "PRO_KIND", "물품카테고리", "required");
        	this.gfnSetValidation(this.dsNewProInfo, "PRO_NAME_EN", "물품영어이름", "required");
        	this.gfnSetValidation(this.dsNewProInfo, "SALE_PERCENT", "할인율", "required");
        	this.gfnSetValidation(this.dsNewProInfo, "HOW_MUCH", "가격", "required");
        	this.gfnSetValidation(this.dsNewProInfo, "LIKE_NUMBER", "좋아요개수", "required");

        	this.gfnClearValidation(this.dsNewProOp);
        	this.gfnSetValidation(this.dsNewProOp, "PRO_CODE", "물품코드", "required");
        	this.gfnSetValidation(this.dsNewProOp, "PRO_OPTION", "물품옵션", "required");
        	this.gfnSetValidation(this.dsNewProOp, "OPTION_NAME", "옵션명", "required");
        	this.gfnSetValidation(this.dsNewProOp, "OPTION_NUMBER", "옵션별 수량", "required");
        	this.gfnSetValidation(this.dsNewProOp, "OPTION_ADD_PRICE", "옵션별 추가금", "required");

        	// 수정된 Row만 Validation check
         	if (this.gfnValidation(this.dsNewProOp, "U") == false || this.gfnValidation(this.dsProInfo, "U") == false) return false;
        };

        this.addGds = function(){
        	var gdsInfo = this.objApp.gdsProInfo.rowcount;
        	var gdsDetail = this.objApp.gdsProDetailInfo.rowcount;

        	for(var i = 0; i < this.dsNewProOp.rowcount; i++){
        		this.objApp.gdsProOption.addRow();
        		var gdsOP = this.objApp.gdsProOption.rowcount;
        		this.objApp.gdsProOption.setColumn(gdsOP, "PRO_CODE", this.dsNewProOp.getColumn(i, "PRO_CODE"));
        		this.objApp.gdsProOption.setColumn(gdsOP, "PRO_OPTION", this.dsNewProOp.getColumn(i, "PRO_OPTION"));
        		this.objApp.gdsProOption.setColumn(gdsOP, "OPTION_NAME", this.dsNewProOp.getColumn(i, "OPTION_NAME"));
        		this.objApp.gdsProOption.setColumn(gdsOP, "OPTION_NUMBER", this.dsNewProOp.getColumn(i, "OPTION_NUMBER"));
        		this.objApp.gdsProOption.setColumn(gdsOP, "OPTION_ADD_PRICE", this.dsNewProOp.getColumn(i, "OPTION_ADD_PRICE"));
        	}

        	this.objApp.gdsProInfo.addRow();
        	this.objApp.gdsProInfo.setColumn(gdsInfo, "PRO_CODE", this.dsNewProInfo.getColumn(0, "PRO_CODE"));
        	this.objApp.gdsProInfo.setColumn(gdsInfo, "PRO_NAME", this.dsNewProInfo.getColumn(0, "PRO_NAME"));
        	this.objApp.gdsProInfo.setColumn(gdsInfo, "PRO_KIND", this.dsNewProInfo.getColumn(0, "PRO_KIND"));
        	this.objApp.gdsProInfo.setColumn(gdsInfo, "PRO_NAME_EN", this.dsNewProInfo.getColumn(0, "PRO_NAME_EN"));
        	this.objApp.gdsProInfo.setColumn(gdsInfo, "PRO_IMG", this.dsNewProInfo.getColumn(0, "PRO_IMG"));
        	this.objApp.gdsProInfo.setColumn(gdsInfo, "SERVER_IMG", this.dsNewProInfo.getColumn(0, "SERVER_IMG"));
        	this.objApp.gdsProInfo.setColumn(gdsInfo, "SALE_PERCENT", this.dsNewProInfo.getColumn(0, "SALE_PERCENT"));
        	this.objApp.gdsProInfo.setColumn(gdsInfo, "HOW_MUCH", this.dsNewProInfo.getColumn(0, "HOW_MUCH"));
        	this.objApp.gdsProInfo.setColumn(gdsInfo, "LIKE_NUMBER", this.dsNewProInfo.getColumn(0, "LIKE_NUMBER"));

        	this.objApp.gdsProDetailInfo.addRow();
        	this.objApp.gdsProDetailInfo.setColumn(gdsDetail, "PRO_CODE", this.dsNewProDetail.getColumn(0, "PRO_CODE"));
        	this.objApp.gdsProDetailInfo.setColumn(gdsDetail, "DETAIL_INFO", this.dsNewProDetail.getColumn(0, "DETAIL_INFO"));
        }
        /**************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        **************************************************************************/

        this.Radio00_onitemchanged = function(obj,e)
        {
        	if(this.Radio00.value == 0){
        		this.edt00.set_enable(true);
        	}
        	else{
        		this.edt00.set_enable(false);
        		this.edt00.set_value("0");
        	}
        };


        this.btn00_onclick = function(obj,e)
        {
        	var k = this.dsNewProOp.rowcount
        	this.dsNewProOp.addRow();
        	this.dsNewProOp.setColumn(k, "PRO_CODE", this.dsNewProInfo.getColumn(0, "PRO_CODE"));
        	this.dsNewProOp.setColumn(k , "PRO_OPTION", k+1);
        	this.dsNewProOp.setColumn(k, "OPTION_NUMBER", 0);
        };

        this.btn00_00_onclick = function(obj,e) //옵션 데이터 삭제
        {
        	this.dsNewProOp.deleteRow(this.dsNewProOp.rowposition);
        };

        this.cmb00_onitemchanged = function(obj,e)
        {
        	var i = this.cmb00.value;
        	this.dsNewProInfo.setColumn(0, "PRO_KIND", i);
        };

        this.btn03_onclick = function(obj,e) //데이터 무결성 테스트 후 트랜젝션
        {

        // 	if(this.isEmptyFields() == false){ // 트랜젝션이 돌지 않아야 함
        // 		return ;
        // 	}

        	this.webEditor.callScript("document.getElementById('editorGetBtn').click()");
        	var sEditorData = this.webEditor.callScript("document.getElementById('ir1').value");
         	this.dsNewProDetail.setColumn(0, "DETAIL_INFO", sEditorData) //html 데이터로 받을 거 (수정 해야됨)

        	if(this.FileUpTransfer00.filelist.length == 0){
        	alert("이미지를 채워야 합니다!");
        	return ;
        	}

         	if(this.FileUpTransfer00.filelist.length > 0){ //이미지가 데이터에 있다면
         		this.fnUploadImage();
         	}
        };



        this.btn01_onclick = function(obj,e) //이미지 업로드
        {
        	this.ImageViewer00.set_text("");
        	this.FileDialog00.open("이미지 선택", FileDialog.LOAD, "%MYDOCUMENT%");
        };

        this.newProduct_onclose = function(obj,e) //이미지 선택 후d onclose 시 나오는 이벤트
        {
        	this.FileUpTransfer00.clearFileList();
        	var sProfile = e.virtualfiles[0].filename;
        	this.FileUpTransfer00.addFile(sProfile, e.virtualfiles[0]);

        	if(nexacro._Browser=="Runtime"){
        		this.ImageViewer00.set_image("URL('file://"+e.virtualfiles[0].fullpath+"')");
        		this.ImageViewer00.set_text("");

        	}
        	else{
        		if( /\.(jpe?g|png|gif)$/i.test(e.virtualfiles[0].filename) ){
        			var reader = new FileReader();
        			reader.targetForm = this;
        			reader.addEventListener("load", function () {
        				this.targetForm.ImageViewer00.set_image(this.result);
        				this.ImageViewer00.set_text("");
        										}, false);
        			reader.readAsDataURL(e.virtualfiles[0]._handle);
        		}
        	}
        };

        this.FileUpTransfer00_onsuccess = function(obj,e)
        {
        	var serverUrl = this.gfnGetServerUrl();
        	var sImageUrl = serverUrl + "upload_file/nexa_edu/profile_image/";

        	this.dsNewProInfo.setColumn(0, "PRO_IMG", e.datasets[0].getColumn(0, "file_id"));

        	sImageUrl = sImageUrl + this.dsNewProInfo.getColumn(0, "PRO_IMG");
        	this.dsNewProInfo.setColumn(0, "SERVER_IMG", sImageUrl);
        // 	this.dsFile.addRow();
        // 	this.dsFile.setColumn(0, "FILE_ID", e.datasets[0].getColumn(0, "file_id"));
        // 	this.dsFile.setColumn(0, "FILE_NAME" , e.datasets[0].getColumn(0, "file_name"));
        // 	this.dsFile.setColumn(0, "FILE_TYPE" , e.datasets[0].getColumn(0, "file_type"));
        // 	this.dsFile.setColumn(0, "FILE_SIZE" , e.datasets[0].getColumn(0, "file_size"));
        	this.fn_saveEmp();
        };

        this.btn02_onclick = function(obj,e) //업로드 한 이미지 삭제
        {
        	this.ImageViewer00.set_image("");
        	this.ImageViewer00.set_text("");
        };


        this.fn_saveEmp = function()
        {
        	var strSvcUrl = "edu/saveNewData.do";  //새 데이터 올리기
        	var inData    = "in_emp=dsNewProInfo:u";
        	var outData   = "";
        	var strArg    = "";
        	this.gfnTransaction("saveNewData", strSvcUrl, inData, outData, strArg, "fn_callback", true);
        };


        this.Grid00_oncellposchanged = function(obj,e)
        {
        	var sum = 0;
        	for(var a = 0; a < this.dsNewProOp.rowcount; a++){
        		var k = this.dsNewProOp.getColumn(a, "OPTION_NUMBER");
        		k = (k && typeof k === "string") ? k.trim() : k;  // 앞뒤 공백 제거
        		sum += Number(k) || 0;
        	}

        	if(sum == 0){
        		this.sta05.set_text("총 판매 가능 개수 0 개");
        	}
        	else{
        		this.sta05.set_text("총 판매 가능 개수 " + sum + " 개");
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.newProduct_onload,this);
            this.addEventHandler("onclose",this.newProduct_onclose,this);
            this.sta00.addEventHandler("onclick",this.sta00_onclick,this);
            this.sta01_00.addEventHandler("onclick",this.sta01_00_onclick,this);
            this.sta02.addEventHandler("onclick",this.sta02_onclick,this);
            this.Radio00.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
            this.sta01_00_00.addEventHandler("onclick",this.sta01_00_onclick,this);
            this.Grid00.addEventHandler("oncellposchanged",this.Grid00_oncellposchanged,this);
            this.sta01_00_01.addEventHandler("onclick",this.sta01_00_onclick,this);
            this.cmb00.addEventHandler("onitemchanged",this.cmb00_onitemchanged,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn00_00.addEventHandler("onclick",this.btn00_00_onclick,this);
            this.ImageViewer00.addEventHandler("onclick",this.ImageViewer00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
            this.btn03.addEventHandler("onclick",this.btn03_onclick,this);
            this.webEditor.addEventHandler("onusernotify",this.webEditor_onusernotify,this);
            this.FileDialog00.addEventHandler("onclose",this.newProduct_onclose,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
        };
        this.loadIncludeScript("newProduct.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
