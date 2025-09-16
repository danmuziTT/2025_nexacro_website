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
            this.set_titletext("데이터 수정하기");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,740);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCategory", this);
            obj._setContents("<ColumnInfo><Column id=\"CATEGORY_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORY_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORY_SUM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"PRO_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_NAME_EN\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_IMG\" type=\"STRING\" size=\"256\"/><Column id=\"SERVER_IMG\" type=\"STRING\" size=\"256\"/><Column id=\"SALE_PERCENT\" type=\"STRING\" size=\"256\"/><Column id=\"HOW_MUCH\" type=\"STRING\" size=\"256\"/><Column id=\"LIKE_NUMBER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"PRO_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"UPLOAD_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProOp", this);
            obj._setContents("<ColumnInfo><Column id=\"PRO_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_OPTION\" type=\"STRING\" size=\"256\"/><Column id=\"OPTION_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OPTION_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"OPTION_ADD_PRICE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog00", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00","9","2","310","49",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("데이터를 수정할 수 있습니다");
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
            obj.set_binddataset("dsProOp");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"240\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"옵션코드\"/><Cell col=\"1\" text=\"옵션명\"/><Cell col=\"2\" text=\"옵션별 수량\"/><Cell col=\"3\" text=\"옵션가\"/></Band><Band id=\"body\"><Cell text=\"bind:PRO_OPTION\"/><Cell col=\"1\" text=\"bind:OPTION_NAME\"/><Cell col=\"2\" text=\"bind:OPTION_NUMBER\"/><Cell col=\"3\" text=\"bind:OPTION_ADD_PRICE\" displaytype=\"number\" textAlign=\"right\" maskeditformat=\"###,###\"/></Band></Format></Formats>");
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
            obj.set_stretch("fixaspectratio");
            obj.set_tabstop("true");
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

            obj = new Button("btn03","200","674","253","46",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("데이터 수정하기");
            this.addChild(obj.name, obj);

            obj = new WebView("webEditor","15","500","970","160",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            this.addChild(obj.name, obj);

            obj = new Button("btn03_00",null,"674","253","46","200",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("창 닫기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,740,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item5","edt03","value","dsProOp","OPTION_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edt04","value","dsProOp","OPTION_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edt04_00","value","dsProOp","OPTION_ADD_PRICE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","edt02","value","dsProInfo","PRO_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt02_00","value","dsProInfo","PRO_NAME_EN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cmb00","value","dsProInfo","PRO_KIND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt01","value","dsProInfo","HOW_MUCH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edt00","value","dsProInfo","SALE_PERCENT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("manageProduct_edit.xfdl", function() {
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
        	var paramCode = 0;
        	this.fvDocWeb = "";
        	this.objApp = nexacro.getApplication();

        this.newProduct_onload = function(obj,e)
        {

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

        	var sUrl = this.gfnGetServerUrl() + "smartEditor/SmartEditor2.html";
        	this.webEditor.set_url(sUrl);

        	var sContents = this.dsProDetail.getColumn(0,"DETAIL_INFO");
        	if(this.gfnIsNull(sContents)) sContents = "";

        	this.webEditor.callScript("document.getElementById('ir1').value = '" + sContents + "'");
        	//this.webEditor.callScript("document.getElementById('editorSetBtn').click()");


        	this.paramCode = this.parent.param1;
        	this.dsProInfo.copyData(this.objApp.gdsProInfo);
        	this.dsProInfo.filter("PRO_CODE == '" + this.paramCode + "'");

        	this.dsProDetail.copyData(this.objApp.gdsProDetailInfo);
        	this.dsProDetail.filter("PRO_CODE == '" + this.paramCode + "'");

        	this.dsProOp.copyData(this.objApp.gdsProOption);
        	this.dsProOp.filter("PRO_CODE == '" + this.paramCode + "'");

        	var sale = this.dsProInfo.getColumn(0,"SALE_PERCENT");

        	if(sale == 0){
        		this.Radio00.set_value(1);
        		this.edt00.set_enable(false)
        	}
        	else{
        		this.Radio00.set_value(0);
        		this.edt00.set_enable(true)
        	}

        // 	this.edt02.set_value(this.dsProInfo.getColumn(0,"PRO_NAME"))
        // 	this.edt02_00.set_value(this.dsProInfo.getColumn(0,"PRO_NAME_EN"))
        // 	this.cmb00.set_value(this.dsProInfo.getColumn(0,"PRO_KIND"))
        // 	this.edt01.set_value(this.dsProInfo.getColumn(0,"HOW_MUCH"))
        // 	this.edt00.set_value(this.dsProInfo.getColumn(0,"SALE_PERCENT"))
        	this.ImageViewer00.set_image(this.dsProInfo.getColumn(0,"SERVER_IMG"))

        	this.dsProInfo.set_rowposition(0);


        	var sum = 0;
        	for(var a = 0; a < this.dsProOp.rowcount; a++){
        		var k = this.dsProOp.getColumn(a, "OPTION_NUMBER");
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

        	/**************************************************************************
        	* CRUD 및 TRANSACTION 서비스 호출 처리
        	**************************************************************************/

        	/**************************************************************************
        	* CALLBACK 콜백 처리부분(Transaction, Popup)
        	**************************************************************************/

        this.fnEditorCallback = function(sType)
        {
        	switch (sType)
        	{
        		case "onload" :
        			var sContents = "";
        			this.fvDocWeb.getProperty("ir1").setProperty("value",sContents);
        			this.fvDocWeb.getProperty("editorSetBtn").callMethod("click");
        			break;
        	}
        };
        /**************************************************************************
        * 사용자 FUNCTION 영역
        **************************************************************************/
        //
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

        	if(id == "saveEdtData"){
        		this.edtGds(0);
        		this.tran_saveEdtOp();
        		}

        	if(id == "saveEdtOption"){
        		this.edtGds(2);
        		this.tran_saveEdtDe();
        	}

        	if(id == "saveEdtDetail"){
        		this.addGds(1)
        		}
        };


        this.edtGds = function(iK) { // 수정
            var dsPC = this.dsProInfo.getColumn(0, "PRO_CODE");

            // 최적화된 처리
            if (iK == 0) { // 수정
                this.removeRows(this.objApp.gdsProInfo, dsPC, this.dsProInfo);
            } else if (iK == 1) { // 삭제
                this.removeRows(this.objApp.gdsProDetailInfo, dsPC, this.dsProDetail);
            } else if (iK == 2) { // 옵션 처리
                this.removeOptionRows(dsPC);
            }
        };

        this.removeRows = function(targetDataSet, dsPC, sourceDataSet) {
            for (var i = targetDataSet.rowcount - 1; i >= 0; i--) {
                if (dsPC == targetDataSet.getColumn(i, "PRO_CODE")) {
                    targetDataSet.deleteRow(i);
                }
            }
            targetDataSet.copyData(sourceDataSet);
        };

        this.removeOptionRows = function(dsPC) {
            // gdsProOption에서 PRO_CODE 및 PRO_OPTION을 기준으로 중복된 데이터를 삭제
            for (var i = this.objApp.gdsProOption.rowcount - 1; i >= 0; i--) {
                var gProC = this.objApp.gdsProOption.getColumn(i, "PRO_CODE");
                var gProO = this.objApp.gdsProOption.getColumn(i, "PRO_OPTION");

                for (var j = 0; j < this.dsProOp.rowcount; j++) {
                    if (gProC == dsPC && gProO == this.dsProOp.getColumn(j, "PRO_OPTION")) {
                        this.objApp.gdsProOption.deleteRow(i);
                        trace(i); // 디버깅용
                        break; // 중복 처리가 완료되면 반복문 종료
                    }
                }
            }
            this.objApp.gdsProOption.copyData(this.dsProOp);
        };

        this.isEmptyFields = function()
        	{
        	this.gfnClearValidation(this.dsProInfo);
        	this.gfnSetValidation(this.dsProInfo, "PRO_CODE", "물품코드", "required");
        	this.gfnSetValidation(this.dsProInfo, "PRO_NAME", "물품이름", "required");
        	this.gfnSetValidation(this.dsProInfo, "PRO_KIND", "물품카테고리", "required");
        	this.gfnSetValidation(this.dsProInfo, "PRO_NAME_EN", "물품영어이름", "required");
        	this.gfnSetValidation(this.dsProInfo, "SALE_PERCENT", "할인율", "required");
        	this.gfnSetValidation(this.dsProInfo, "HOW_MUCH", "가격", "required");
        	this.gfnSetValidation(this.dsProInfo, "LIKE_NUMBER", "좋아요개수", "required");

        	this.gfnClearValidation(this.dsProOp);
        	this.gfnSetValidation(this.dsProOp, "PRO_CODE", "물품코드", "required");
        	this.gfnSetValidation(this.dsProOp, "PRO_OPTION", "물품옵션", "required");
        	this.gfnSetValidation(this.dsProOp, "OPTION_NAME", "옵션명", "required");
        	this.gfnSetValidation(this.dsProOp, "OPTION_NUMBER", "옵션별 수량", "required");
        	this.gfnSetValidation(this.dsProOp, "OPTION_ADD_PRICE", "옵션별 추가금", "required");

        	// 수정된 Row만 Validation check
        	if (this.gfnValidation(this.dsProOp, "A") == false || this.gfnValidation(this.dsProInfo, "A") == false) return false;
        };

        this.fnResize = function(nWidth, nHeight)
        {
        	var sValue = nWidth+","+nHeight;

        	//this.fvDocWeb.getProperty("resize").setProperty("value",sValue);
        	//this.fvDocWeb.getProperty("btnResize").callMethod("click");
        };


        // /**************************************************************************
        // * 각 COMPONENT 별 EVENT 영역
        // **************************************************************************/
        //

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
        	var k = this.dsProOp.rowcount
        	this.dsProOp.addRow();
        	this.dsProOp.setColumn(k, "PRO_CODE", this.dsProInfo.getColumn(0, "PRO_CODE"));
        	this.dsProOp.setColumn(k , "PRO_OPTION", k+1);
        	this.dsProOp.setColumn(k, "OPTION_NUMBER", 0);
        	this.dsProOp.setColumn(k, "OPTION_ADD_PRICE", 0);
        };

        this.btn00_00_onclick = function(obj,e) //옵션 데이터 삭제
        {
        	this.dsProOp.deleteRow(this.dsProOp.rowposition);
        };


        this.btn03_onclick = function(obj,e) //데이터 무결성 테스트 후 트랜젝션
        {

        	this.webEditor.callScript("document.getElementById('editorGetBtn').click()");
        	var sEditorData = this.webEditor.callScript("document.getElementById('ir1').value");
        	this.dsProDetail.setColumn(0, "DETAIL_INFO", sEditorData) //html 데이터로 받을 거 (수정 해야됨)

        	if(this.FileUpTransfer00.filelist.length > 0){ //이미지가 데이터에 있다면
        		this.fnUploadImage();
        	}

        	if(this.isEmptyFields() == false){
        		return ;
        	}
        	this.tran_saveEdt();
        };

        this.btn01_onclick = function(obj,e) //이미지 업로드
        {
        	this.FileDialog00.open("이미지 선택", FileDialog.LOAD, "%MYDOCUMENT%");
        };

        this.edtProduct_onclose = function(obj,e) //이미지 선택 후d onclose 시 나오는 이벤트
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
        	var sImg = e.datasets[0].getColumn(0, "file_id");

        	//this.dsProInfo.setColumn(0, "PRO_IMG", sImg);

        	for(var iK = 0; iK < this.objApp.gdsProInfo.rowcount; iK ++){
        		if(this.objApp.gdsProInfo.getColumn(iK, "PRO_CODE")== this.paramCode){
        			this.objApp.gdsProInfo.setColumn(iK, "PRO_IMG", e.datasets[0].getColumn(0, "file_id"));
        		}
        }
        	this.fn_saveEmpEdt();
        };

        this.btn02_onclick = function(obj,e) //업로드 한 이미지 삭제
        {
        	this.ImageViewer00.set_image("");
        	this.ImageViewer00.set_text("");
        	this.dsProInfo.setColumn(0,"PRO_IMG","");
        	this.dsProInfo.setColumn(0,"SERVER_IMG","");
        };

        this.fn_saveEmpEdt = function() //
        {
        	var serverUrl = this.gfnGetServerUrl();
        	var sImageUrl = serverUrl + "upload_file/nexa_edu/profile_image/";

        	sImageUrl = sImageUrl + this.dsProInfo.getColumn(0, "PRO_IMG");
        	this.dsProInfo.setColumn(0, "SERVER_IMG", sImageUrl);


        	for(var iK = 0; iK < this.objApp.gdsProInfo.rowcount; iK ++){
        		if(this.objApp.gdsProInfo.getColumn(iK, "PRO_CODE")== this.paramCode){
        			this.objApp.gdsProInfo.setColumn(iK, "SERVER_IMG", sImageUrl);
        		}
        	}
        	this.tran_saveEdt();
        };

        this.tran_saveEdt = function ()
        {
        	if(this.gfnDsIsUpdated(this.dsProInfo)){
        		var strSvcUrl = "edu/saveEdtData.do";
        		var inData    = "in_emp=dsProInfo:U";
        		var outData   = "";
        		var strArg    = "";
        		this.gfnTransaction("saveEdtData", strSvcUrl, inData, outData, strArg, "fn_callback", true);
        	}
        	else{
        		this.tran_saveEdtOp();
        	}
        }

        this.tran_saveEdtOp = function (){
        	if(this.gfnDsIsUpdated(this.dsProOp)){
        		var strSvcUrl = "edu/saveEdtOption.do";
        		var inData    = "in_emp=dsProOp:U";
        		var outData   = "";
        		var strArg    = "";
        		this.gfnTransaction("saveEdtOption", strSvcUrl, inData, outData, strArg, "fn_callback", true);
        	}
        	else{
        	this.tran_saveEdtDe();
        	}
        }

        this.tran_saveEdtDe = function (){
        	if(this.gfnDsIsUpdated(this.dsProDetail)){
        		var strSvcUrl = "edu/saveEdtDetail.do";
        		var inData    = "in_emp=dsProDetail:U";
        		var outData   = "";
        		var strArg    = "";
        		this.gfnTransaction("saveEdtDetail", strSvcUrl, inData, outData, strArg, "fn_callback", true);
        	}
        	else{
        		alert("수정완료되었습니다");
        //		this.close();
        	}
        };

        this.Grid00_oncellposchanged = function(obj,e)
        {
        	var sum = 0;
        	for(var a = 0; a < this.dsProOp.rowcount; a++){
        		var k = this.dsProOp.getColumn(a, "OPTION_NUMBER");
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


        this.webEditor_onloadcompleted = function(obj,e)
        {
        	var sContents = this.dsProDetail.getColumn(0,"DETAIL_INFO");
        	if(this.gfnIsNull(sContents)) sContents = "";

        	this.webEditor.callScript("document.getElementById('ir1').value = '" + sContents + "'");
        	this.webEditor.callScript("document.getElementById('editorSetBtn').click()");
        };

        this.webEditor_onusernotify = function(obj,e)
        {
        	trace(e.userdata);

        	try
        	{
        		// parent의 최상의 Form에 이벤트 발생시킴
        		var oForm = this;
        		if (oForm && oForm.fnEditorCallback)
        		{
        			if (e.userdata == "onload")
        			{
        				var initHeight = this.webEditor.getOffsetHeight();
        				this.fnResize(obj.getOffsetWidth(), initHeight-this.fvRtnHeight);
        			}

        			oForm.fnEditorCallback(e.userdata);
        		}
        	}
        	catch(e){
        		trace("SampleNaverEditor.xfdl :: webEditor_onusernotify() => " + e.message);
        	}
        };


        this.btn04_onclick = function(obj,e)
        {
        	this.alert(this.Dataset00.saveXML());
        };

        this.btn03_00_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.newProduct_onload,this);
            this.addEventHandler("onclose",this.edtProduct_onclose,this);
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
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
            this.btn03.addEventHandler("onclick",this.btn03_onclick,this);
            this.webEditor.addEventHandler("onloadcompleted",this.webEditor_onloadcompleted,this);
            this.btn03_00.addEventHandler("onclick",this.btn03_00_onclick,this);
            this.FileDialog00.addEventHandler("onclose",this.edtProduct_onclose,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
        };
        this.loadIncludeScript("manageProduct_edit.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
