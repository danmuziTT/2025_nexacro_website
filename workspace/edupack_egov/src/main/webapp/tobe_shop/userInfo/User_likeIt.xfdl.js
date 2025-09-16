(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Use_likeIt");
            this.set_titletext("마음에 들어요");
            if (Form == this.constructor)
            {
                this._setFormPosition(1240,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUserLike", this);
            obj._setContents("<ColumnInfo><Column id=\"PRO_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_NAME_EN\" type=\"STRING\" size=\"256\"/><Column id=\"PRO_IMG\" type=\"STRING\" size=\"256\"/><Column id=\"SERVER_IMG\" type=\"STRING\" size=\"256\"/><Column id=\"SALE_PERCENT\" type=\"STRING\" size=\"256\"/><Column id=\"HOW_MUCH\" type=\"STRING\" size=\"256\"/><Column id=\"LIKE_NUMBER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new ListView("ListView00","0","90",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsUserLike");
            obj.set_bandexpandtype("accordion");
            obj.set_scrolltype("none");
            obj._setContents("<Formats><Format id=\"default\"><Band id=\"body\" width=\"100%\" height=\"60\" expandbartype=\"true\"><Cell id=\"Cell02\" left=\"10\" top=\"10\" width=\"120\" height=\"30\" text=\"물품 명 :\" font=\"20px &quot;Malgun Gothic&quot;\" border=\"0px\"/><Cell id=\"Cell03\" left=\"170\" top=\"10\" width=\"1000\" height=\"30\" text=\"bind:PRO_NAME\" font=\"20px &quot;Malgun Gothic&quot;\" border=\"0px\"/></Band><Band id=\"detail\" width=\"100%\" height=\"300\"><Cell id=\"Cell02\" left=\"10\" top=\"10\" width=\"200\" text=\"물품명 :\" font=\"20px &quot;Malgun Gothic&quot;\" height=\"35\" border=\"0px\"/><Cell id=\"Cell03\" left=\"230\" top=\"10\" width=\"650\" height=\"35\" text=\"bind:PRO_NAME\" font=\"20px &quot;Malgun Gothic&quot;\" border=\"0px\"/><Cell id=\"Cell04\" left=\"10\" top=\"69\" width=\"200\" text=\"물품종류 :\" font=\"20px &quot;Malgun Gothic&quot;\" height=\"35\" border=\"0px\"/><Cell id=\"Cell05\" left=\"230\" top=\"69\" width=\"650\" height=\"35\" text=\"bind:PRO_KIND\" font=\"20px &quot;Malgun Gothic&quot;\" border=\"0px\"/><Cell id=\"Cell09\" left=\"910\" top=\"10\" height=\"280\" text=\"bind:SERVER_IMG\" font=\"20px &quot;Malgun Gothic&quot;\" border=\"1px solid\" displaytype=\"imagecontrol\" right=\"20\"/><Cell id=\"Cell12\" left=\"10\" top=\"128\" width=\"200\" height=\"35\" text=\"현재 할인율 :\" font=\"20px &quot;Malgun Gothic&quot;\" border=\"0px\"/><Cell id=\"Cell13\" left=\"230\" top=\"128\" width=\"650\" height=\"35\" text=\"bind:SALE_PERCENT\" font=\"20px &quot;Malgun Gothic&quot;\" border=\"0px\"/><Cell id=\"Cell14\" left=\"10\" top=\"187\" width=\"200\" height=\"35\" text=\"현재 가격 :\" font=\"20px &quot;Malgun Gothic&quot;\" border=\"0px\"/><Cell id=\"Cell15\" left=\"230\" top=\"187\" width=\"650\" height=\"35\" text=\"bind:HOW_MUCH\" font=\"20px &quot;Malgun Gothic&quot;\" border=\"0px\"/><Cell id=\"Cell16\" left=\"10\" top=\"246\" width=\"200\" height=\"35\" text=\"좋아요 수 :\" font=\"20px &quot;Malgun Gothic&quot;\" border=\"0px\"/><Cell id=\"Cell17\" left=\"230\" top=\"246\" width=\"650\" height=\"35\" text=\"bind:LIKE_NUMBER\" font=\"20px &quot;Malgun Gothic&quot;\" border=\"0px\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","20","18","710","62",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("000 님의 좋아요 리스트 입니다");
            obj.set_cssclass("pro_onePrice");
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
        this.registerScript("User_likeIt.xfdl", function() {
        /**************************************************************************
        * include 영역
        **************************************************************************/

        /**************************************************************************
        * FORM 변수 선언 영역 (fv)
        **************************************************************************/

        /**************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        **************************************************************************/

        var length = 0;
        this.Use_likeIt_onload = function(obj, e)
        {
            this.objApp = nexacro.getApplication();

            var userLikeCount = this.objApp.gdsUserLike.rowcount;
            var proInfoCount = this.objApp.gdsProInfo.rowcount;

            for (var i = 0; i < userLikeCount; i++) {
                var userProCode = this.objApp.gdsUserLike.getColumn(i, "PRO_CODE");

                for (var j = 0; j < proInfoCount; j++) {
                    if (this.objApp.gdsProInfo.getColumn(j, "PRO_CODE") === userProCode) {
                        var newRow = this.dsUserLike.addRow();

                        // gdsProInfo의 해당 행 데이터를 dsUserLike에 복사
                        var columnCount = this.objApp.gdsProInfo.getColCount();
                        for (var k = 0; k < columnCount; k++) {
                            var colId = this.objApp.gdsProInfo.getColID(k);
                            var value = this.objApp.gdsProInfo.getColumn(j, colId);
                            this.dsUserLike.setColumn(newRow, colId, value);
                        }
                    }
                }
            }

        	this.sta00.set_text(this.objApp.gdsUserInfo.getColumn(0, "USER_NAME")+ " 님의 좋아요 리스트 입니다");

        	this.length = this.dsUserLike.rowcount;
        	this.ListView00.set_height(60 * this.length +10);
        	this.parent.parent.fnMainPageOnLoad(90 + 60 * this.length + 10)
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

        /**************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        **************************************************************************/

        this.ListView00_onbandstatuschanged = function(obj, e) {
            var openCount = 0;

            // ListView의 전체 행에 대해 반복
            for (var i = 0; i < this.length; i++) {
                // 각 행의 detail 상태 확인
        		var bBandExpand = this.ListView00.getBandExpandStatus(i);
                if (bBandExpand ==true) {
                    openCount++;  // detail이 열려있으면 카운트 증가
                }
            }

        	this.ListView00.set_height(60 * this.length + 300 * openCount + 10);
        	this.parent.parent.fnMainPageOnLoad(90 + 60 * this.length + 300 * openCount + 10)
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Use_likeIt_onload,this);
            this.ListView00.addEventHandler("onbandstatuschanged",this.ListView00_onbandstatuschanged,this);
            this.sta00.addEventHandler("onclick",this.sta00_onclick,this);
        };
        this.loadIncludeScript("User_likeIt.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
