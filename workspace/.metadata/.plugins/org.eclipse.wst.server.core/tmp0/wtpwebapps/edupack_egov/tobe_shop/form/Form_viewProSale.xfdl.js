(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("할인판매품 보기");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsProSale", this);
            obj._setContents("<ColumnInfo><Column id=\"PRO_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_NAME_EN\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_IMG\" type=\"STRING\" size=\"256\"/><Column id=\"SERVER_IMG\" type=\"STRING\" size=\"256\"/><Column id=\"SALE_PERCENT\" type=\"STRING\" size=\"256\"/><Column id=\"HOW_MUCH\" type=\"STRING\" size=\"256\"/><Column id=\"LIKE_NUMBER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divMain","0","0","1080","570",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_background("yellow");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMain.form
            obj = new Layout("default","",0,0,this.divMain.form,function(p){});
            this.divMain.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1080,570,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_viewProSale.xfdl", function() {
        /**************************************************************************
        * include 영역
        **************************************************************************/

        /**************************************************************************
        * FORM 변수 선언 영역 (fv)
        **************************************************************************/

        /**************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        **************************************************************************/
        this.sale_sum =0;
        this.Form_Work_onload = function(obj,e) //폼이 온로드 될 때 데이터 받기 + 정렬
        {
        	//this.gfnFormOnLoad(this);
        	//화면변환 변수
        	this.objApp = nexacro.getApplication();

        	this.dsProSale.copyData(this.objApp.gdsProInfo);

        	this.pro_length = this.dsProSale.rowcount; //복사한 데이터셋의 물품 개수 구하는 var
        	for(var i = this.pro_length - 1; i >= 0; i--){
        	var salePercent = this.dsProSale.getColumn(i, "SALE_PERCENT");
        	if (salePercent == 0)
        	{
        		this.dsProSale.deleteRow(i);  // 할인율 없는 열 지우기
        	}
        	else{
        		this.sale_sum += 1;
        	}
        }
        	var Row = 0;
        	if(this.sale_sum/4 != 0){
        		Row = this.sale_sum/4 + 1
        	}
        	else{
        		Row = this.sale_sum/4
        	}

        	var sale_totalSize = Row * 360 + 60;

        	this.parent.parent.fnMainPageOnLoad(sale_totalSize);
        	this.resize(1080, sale_totalSize);
        	this.divMain.resize(1080, sale_totalSize);


        	this.fn_newProductView();
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

        this.fn_newProductView = function () //물건 개수에 맞게 div 나오는 함수
        {
        	if(this.isValidObject(this.divMain))
        	{
        		var objDivMain = this.removeChild("divMain");
        		objDivMain.destroy();
        		objDivMain = null;
         	}
        	var xPos = 30;  //left
        	var yPos = 30;  //top

        	for(var i=0; i<this.dsProSale.rowcount; i++)
        	{
        //		if(i==4) (y 값 변경, x 값 30으로 고정)
        		if (((i) % 4) == 0)
        		{
        			if(i == 0)
        				yPos = 30;
        			else
        				yPos = yPos+ 330;
        		xPos = 30;
        		}
        		else {
        			xPos = xPos + 60;
        		}

        	this.fn_makeproView(i, xPos, yPos)
        		xPos  = xPos+210;
        	}
        };


        this.fn_makeproView = function (i, xPos, yPos)
        {
        	this.codeKey = 0;
        	this.localData = 0;
        	var objDiv = "objDiv" + i;
        		objDiv = new Div();  //내가 만들려고하는 오브젝트, 그리드를 만들고싶으면 new grid(); 콤보도 마찬가지로 표현..
        		objDiv.init("div" + i, xPos, yPos, 210, 300); // 컴포넌트에 대한 초기값, (아이디, left, top, width, height)
        		this.addChild("div" + i, objDiv); // 생성했는데 화면에다가 붙여주는 것
        		objDiv.set_border("1px solid red");  // 배경색깔

        		this.localData = this.dsProSale.getColumn(i, "PRO_CODE");
        		for(var num = 0; num < this.objApp.gdsProInfo.rowcount; num++){ //gds에 저장되어있는 키값 저장
        			var gdsDataNum = this.objApp.gdsProInfo.getColumn(num, "PRO_CODE");
        			if(this.localData == gdsDataNum){
        				this.codeKey = num;
        			}
        		}
        		objDiv.userData = this.codeKey


        		objDiv.addEventHandler("onclick", this.fnClassNo, this);
        		objDiv.show();  // 화면에보여줄려고 하는 메소드 show



        	//div 내 상품 정보 추가 시 참고할 내용
        		var objImageViewer0 = new ImageViewer();
        		objImageViewer0.init("ima0", 10, 10, 190, 200);
        		objDiv.addChild("ima0", objImageViewer0);

        		if(this.dsProSale.getColumn(i, "SERVER_IMG")!= null){
        			objImageViewer0.set_image(this.dsProSale.getColumn(i, "SERVER_IMG"));
        			objImageViewer0.set_stretch("fixaspectratio");
        			objImageViewer0.set_text("");
        		}
        		else{
        			objImageViewer0.set_text(this.dsProSale.getColumn(i, "PRO_NAME"));
        		}
        		objImageViewer0.class_no = this.dsProSale.getColumn(i, "PRO_CODE"); // 이미지뷰어에 class_no값 넣어주기 / 여기서는 물품코드로 통일
        		objImageViewer0.userData = objDiv.userData
        		objImageViewer0.addEventHandler("onclick", this.fnClassNo, this);
        		objImageViewer0.show();


        		var staName = new Static();
        		staName.init("staName", 10, 230, 190, 25);
        		objDiv.addChild("staName", staName);
        		var proName = this.dsProSale.getColumn(i, "PRO_NAME");
        		staName.set_text(proName);
        		staName.set_textAlign("center");
        		staName.set_font("bold 20px Verdana");
        		staName.userData = objDiv.userData
        		staName.addEventHandler("onclick", this.fnClassNo, this);
        		staName.show();

        		var staPrice = new Static();
        		staPrice.init("staPrice", 10, 260, 190, 20);
        		objDiv.addChild("staPrice", staPrice);
        		var salePercent = this.dsProSale.getColumn(i, "SALE_PERCENT")
        		var proPrice = this.dsProSale.getColumn(i, "HOW_MUCH") * (100- salePercent) / 100
        		staPrice.set_text(proPrice);
        		staPrice.set_textAlign("center");
        		staPrice.set_font("20px Verdana");
        		staPrice.userData = objDiv.userData;
        		staPrice.addEventHandler("onclick", this.fnClassNo, this);
        		staPrice.show();


        	var staSalePer = new Static();
        	staSalePer.init("staSalePer", 10, 260, 50, 20);
        	objDiv.addChild("staSalePer", staSalePer);
        	var salePercent = this.dsProSale.getColumn(i, "SALE_PERCENT")
        	staSalePer.set_text(salePercent + "%" );
        	staSalePer.set_textAlign("center");
        	staSalePer.set_font("bold 15px Verdana");
        	staSalePer.set_color("red");
        	staSalePer.userData = objDiv.userData;
        	staSalePer.addEventHandler("onclick", this.fnClassNo, this);
        	staSalePer.show();


        	var staCate = new Static();
        	staCate.init("staCate", 60, 0, 100, 30);
        	objDiv.addChild("staCate", staCate);
        	var CatId = this.dsProSale.getColumn(i,"PRO_KIND");
        	var CateName = 0;

        	for(var k = 0; k < this.objApp.gdsProCategory.rowcount; k++){
        		if(this.objApp.gdsProCategory.getColumn(k,"CATEGORY_ID") == CatId){
        			CateName = this.objApp.gdsProCategory.getColumn(k,"CATEGORY_NAME");
        			}
        		}
        	staCate.set_text(CateName);
        	staCate.set_background("white")
        	staCate.set_textAlign("center");
        	staCate.set_color("#5b5efd");
        	staCate.set_font("bold 17px Verdana");
        	staCate.userData = objDiv.userData;
        	staCate.addEventHandler("onclick", this.fnClassNo, this);
        	staCate.show();

        };


        this.fnClassNo = function(obj, e)
        {
        	var row = obj.userData;  // 클릭한 오브젝트의 상품 코드 (PRO_CODE)
        	this.objApp.gdsProInfo.set_rowposition(row); //마우스 클릭 시 데이터가 바인딩 되어있는 row를 찾을 것

        	this.parent.parent.fv_setUrl("form::Form_viewOne.xfdl");
        };
        /**************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        **************************************************************************/



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Work_onload,this);
        };
        this.loadIncludeScript("Form_viewProSale.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
