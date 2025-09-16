(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_ImageProfile");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_pos", this);
            obj._setContents("<ColumnInfo><Column id=\"POS_CD\" type=\"string\" size=\"32\"/><Column id=\"POS_NAME\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_emp", this);
            obj.set_keystring("");
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"POS_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/><Column id=\"MEMO\" type=\"STRING\" size=\"10\"/><Column id=\"COL_CHK\" type=\"STRING\" size=\"1\"/><Column id=\"profile_url\" type=\"STRING\" size=\"256\"/><Column id=\"profile\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"COL_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"file_id\" type=\"STRING\" size=\"256\"/><Column id=\"file_name\" type=\"STRING\" size=\"256\"/><Column id=\"file_type\" type=\"STRING\" size=\"256\"/><Column id=\"file_size\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog00", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer01", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnImage","57","309","231","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("사진선택");
            this.addChild(obj.name, obj);

            obj = new Div("div00","321","70","729","296",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","14","7","100","35",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("성명");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt00","147","7","180","35",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta01","14","52","100","35",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_text("사원번호");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("msk00","147","52","180","35",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_type("string");
            obj.set_format("AA-###");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta02","14","97","100","35",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("부서");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cbo00","147","97","180","35",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_text("cbo00");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta02_00","14","142","100","35",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_text("직급");
            this.div00.addChild(obj.name, obj);

            obj = new ListBox("lst00","147","142","180","87",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_pos");
            obj.set_codecolumn("POS_CD");
            obj.set_datacolumn("POS_NAME");
            this.div00.addChild(obj.name, obj);

            obj = new Radio("rdo00","530","11","180","26",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var div00_form_rdo00_innerdataset = new nexacro.NormalDataset("div00_form_rdo00_innerdataset", obj);
            div00_form_rdo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">남</Col><Col id=\"codecolumn\">M</Col></Row><Row><Col id=\"datacolumn\">여</Col><Col id=\"codecolumn\">W</Col></Row><Row><Col id=\"datacolumn\">기타</Col><Col id=\"codecolumn\">9</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_rdo00_innerdataset);
            this.div00.addChild(obj.name, obj);

            obj = new CheckBox("chk00","530","47","180","26",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_text("chk00");
            this.div00.addChild(obj.name, obj);

            obj = new Calendar("cal00","530","83","180","26",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("msk01","530","119","180","26",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("11");
            obj.set_format("#,#");
            this.div00.addChild(obj.name, obj);

            obj = new TextArea("txt00","530","155","180","120",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("12");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta03","404","7","100","35",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("13");
            obj.set_text("성별");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta04","397","43","100","35",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("14");
            obj.set_text("결혼여부");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta05","397","79","100","35",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("15");
            obj.set_text("입사일");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta06","397","115","100","35",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("16");
            obj.set_text("급여");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta07","397","155","100","35",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("17");
            obj.set_text("비고사항");
            this.div00.addChild(obj.name, obj);

            obj = new Calendar("cal01","552","41","150","35",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("18");
            obj.set_visible("true");
            this.div00.addChild(obj.name, obj);

            obj = new Grid("grd00","30","375","1010","270",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_emp");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"114\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"EMPL_ID\"/><Cell col=\"1\" text=\"FULL_NAME\"/><Cell col=\"2\" text=\"DEPT_CD\"/><Cell col=\"3\" text=\"POS_CD\"/><Cell col=\"4\" text=\"HIRE_DATE\"/><Cell col=\"5\" text=\"SALARY\"/><Cell col=\"6\" text=\"GENDER\"/><Cell col=\"7\" text=\"MARRIED\"/><Cell col=\"8\" text=\"MEMO\"/><Cell col=\"9\" text=\"COL_CHK\"/><Cell col=\"10\" text=\"profile_url\"/><Cell col=\"11\" text=\"profile\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPL_ID\"/><Cell col=\"1\" text=\"bind:FULL_NAME\"/><Cell col=\"2\" text=\"bind:DEPT_CD\"/><Cell col=\"3\" text=\"bind:POS_CD\"/><Cell col=\"4\" text=\"bind:HIRE_DATE\"/><Cell col=\"5\" text=\"bind:SALARY\"/><Cell col=\"6\" text=\"bind:GENDER\"/><Cell col=\"7\" text=\"bind:MARRIED\"/><Cell col=\"8\" text=\"bind:MEMO\"/><Cell col=\"9\" text=\"bind:COL_CHK\"/><Cell col=\"10\" text=\"bind:profile_url\"/><Cell col=\"11\" text=\"bind:profile\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete","917","23","59","27",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","981","23","59","27",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd","853","23","59","27",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("btnSel","789","23","59","27",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img00","53","67","236","225",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("img00");
            this.addChild(obj.name, obj);

            obj = new Grid("grd01","23","560","447","181",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("dsFile");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"file_id\"/><Cell col=\"1\" text=\"file_name\"/><Cell col=\"2\" text=\"file_type\"/><Cell col=\"3\" text=\"file_size\"/><Cell col=\"4\" text=\"chk\"/></Band><Band id=\"body\"><Cell text=\"bind:file_id\"/><Cell col=\"1\" text=\"bind:file_name\"/><Cell col=\"2\" text=\"bind:file_type\"/><Cell col=\"3\" text=\"bind:file_size\"/><Cell col=\"4\" text=\"bind:chk\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","53","10","109","38",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div00.form.edt00","value","ds_emp","FULL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div00.form.msk00","value","ds_emp","EMPL_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div00.form.cbo00","value","ds_emp","DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div00.form.chk00","value","ds_emp","MARRIED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div00.form.rdo00","value","ds_emp","GENDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div00.form.cal00","value","ds_emp","HIRE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div00.form.msk01","value","ds_emp","SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div00.form.txt00","value","ds_emp","MEMO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div00.form.cal01","visible","ds_emp","MARRIED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div00.form.txt00","background","ds_emp","MEMO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sadf.xfdl", function() {
        /**
        *	개발 표준화 작업
        *	@MenuPath C:\EduPack\workspace\edupack_egov\src\main\edupack_nexacro\WORK_KJY
        *	@FileName frm_ImageProfile.xfdl
        *	@Creator 김지영
        *	@CreateDate 2025/02/07
        *	@Desction 해당 폼 정보 설명
        ******************소스 수정 이력**********************************************
        *	date		Modifier	Description
        ********************************************************************************
        *	2025/02/07		김지영		최초 생성
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

        /**************************************************************************
        * CRUD 및 TRANSACTION 서비스 호출 처리
        **************************************************************************/

        /**************************************************************************
        * CALLBACK 콜백 처리부분(Transaction, Popup)
        **************************************************************************/

        /**************************************************************************
        * 사용자 FUNCTION 영역
        **************************************************************************/

        /**************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        **************************************************************************/
        this.btnSel_onclick = function(obj,e)
        {
        	this.transaction("getEmpList"
        				,"SvcUrl::edu/getEmpList.do"
        				,""
        				,"ds_emp=out_emp"
        				,""
        				,"fn_callback")
        };

        this.fn_callback = function(id, nCode, sMsg)
        {
        	if(nCode <0) {
        		this.alert("error" + sMsg);
        		return;
        	}

        	if(!this.gfnIsNull(this.ds_emp.getColumn(0, "profile_url"))){
        		var serverUrl  = this.gfnGetServerUrl();	//http://localhost:8088/edupack_egov/
        		var sImageUrl  = serverUrl + "upload_file/nexa_edu/profile_image/"
        			sImageUrl += this.ds_emp.getColumn(0, "profile_url");

        		this.img00.set_image(sImageUrl);
        	}


        }
        this.btnAdd_onclick = function(obj,e)
        {
        	this.ds_emp.addRow();
        };

        this.btnDelete_onclick = function(obj,e)
        {
        	this.ds_emp.deleteRow(this.ds_emp.rowposition);
        };

        this.btnSave_onclick = function(obj,e)
        {
         	if(this.FileUpTransfer00.filelist.length > 0){
         		this.fnUploadImage();
         	}
        };

        this.fnUploadImage = function()
        {
        	this.FileUpTransfer00.setPostData("profile", "profile");
        	this.FileUpTransfer00.setPostData("userPath", "nexa_edu\\profile_image");
        	this.FileUpTransfer00.upload("SvcUrl::edu/uploadFile.do");
        }

        this.FileUpTransfer00_onsuccess = function(obj,e)
        {

        	this.ds_emp.setColumn(0, "profile_url", e.datasets[0].getColumn(0, "file_id"));
        	this.ds_emp.setColumn(0, "profile"    , e.datasets[0].getColumn(0, "file_image"));

        // 	this.dsFile.addRow();
        // 	this.dsFile.setColumn(0, "file_id", e.datasets[0].getColumn(0, "file_id"));
        // 	this.dsFile.setColumn(0, "file_name"    , e.datasets[0].getColumn(0, "file_name"));
        // 	this.dsFile.setColumn(0, "file_type"    , e.datasets[0].getColumn(0, "file_type"));
        // 	this.dsFile.setColumn(0, "file_size"    , e.datasets[0].getColumn(0, "file_size"));

        	this.fn_saveEmp();
        };

        this.fn_saveEmp = function()
        {
        	this.transaction("saveEmp"
        				,"SvcUrl::edu/saveEmp.do"
        				,"in_emp=ds_emp:u"
        				,""
        				,""
        				,"fn_callback");
        };
        this.btnImage_onclick = function(obj,e)
        {
        	// 이미지 파일 선택하기  - FileDialog00
        	this.FileDialog00.open("이미지 선택", FileDialog.LOAD, "%MYDOCUMENT%");
        	// --> FileDialog00_onclose 이벤트 발생
        };

        this.FileDialog00_onclose = function(obj,e)
        {
        	this.FileUpTransfer00.clearFileList();
        	var sProfile = e.virtualfiles[0].filename;
        	this.FileUpTransfer00.addFile(sProfile, e.virtualfiles[0]);

        	if(nexacro._Browser=="Runtime"){
        		this.img00.set_image("URL('file://"+e.virtualfiles[0].fullpath+"')");

        	}
        	else{
        		if( /\.(jpe?g|png|gif)$/i.test(e.virtualfiles[0].filename) ){
        			var reader = new FileReader();
        			reader.targetForm = this;
        			reader.addEventListener("load", function () {
        															this.img00.set_image(this.result);
        														}, false);
        			reader.readAsDataURL(e.virtualfiles[0]._handle);
        		}
        	}
        };

        this.frm_ImageProfile_onload = function(obj,e)
        {

        };

        this.btn00_onclick = function(obj,e)
        {
        	if(!this.gfnIsNull(this.ds_emp.getColumn(this.ds_emp.rowposition, "profile_url"))){
        		var serverUrl  = this.gfnGetServerUrl();	//http://localhost:8088/edupack_egov/
        		var sImageUrl  = serverUrl + "upload_file/nexa_edu/profile_image/"
        			sImageUrl += this.ds_emp.getColumn(this.ds_emp.rowposition, "profile_url");

        		this.img00.set_image(sImageUrl);
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_ImageProfile_onload,this);
            this.btnImage.addEventHandler("onclick",this.btnImage_onclick,this);
            this.btnDelete.addEventHandler("onclick",this.btnDelete_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.btnSel.addEventHandler("onclick",this.btnSel_onclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.ds_emp.addEventHandler("cancolumnchange",this.ds_emp_cancolumnchange,this);
            this.ds_emp.addEventHandler("onrowsetchanged",this.ds_emp_onrowsetchanged,this);
            this.ds_emp.addEventHandler("onrowposchanged",this.ds_emp_onrowposchanged,this);
            this.ds_emp.addEventHandler("oncolumnchanged",this.ds_emp_oncolumnchanged,this);
            this.FileDialog00.addEventHandler("onclose",this.FileDialog00_onclose,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
        };
        this.loadIncludeScript("sadf.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
