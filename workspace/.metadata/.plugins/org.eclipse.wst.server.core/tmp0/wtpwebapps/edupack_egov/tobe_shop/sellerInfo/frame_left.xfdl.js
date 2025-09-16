(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frame_left");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(240,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("Grid_menu","0","0","240","510",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("gdsSellerMenu");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusebutton("no");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("true");
            obj.set_treeuseimage("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"237\"/></Columns><Rows><Row size=\"41\"/></Rows><Band id=\"body\"><Cell displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:MENU_LEVEL\" text=\"bind:MENU_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",240,570,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frame_left.xfdl", function() {
        this.fv_objApp = nexacro.getApplication();

        this.Grid_menu_oncelldblclick = function(obj,e)
        {
        	var objDS = this.Grid_menu.getBindDataset();
        	var sMenuId = objDS.getColumn(e.row, "MENU_ID");

        	this.fnOpenForm(sMenuId);
        };

        this.fnOpenForm = function(sMenuId)
        {
           //메뉴명, menu_id, url, form_url <<필요한거
           var objDS = this.Grid_menu.getBindDataset();

           trace("app.av_FrameMdi: Left " + this.fv_objApp.av_frameMdi); //undefinded

           var nRow = objDS.findRow("MENU_ID", sMenuId);
           var sMenuName = objDS.getColumn(nRow, "MENU_NAME");
           var sFormUrl = objDS.getColumn(nRow, "FORM_URL");

           if(typeof sFormUrl == "undefined" || sFormUrl == null || sFormUrl == "")  //링크 없으면
           {
              return;
           }

          var arrObj = this.fv_objApp.av_frameWork.all; //중복된 폼 열기 방지
           for(var i =0;i<arrObj.length; i++){
              if(arrObj[i].name == sMenuId){
                 arrObj[i].setFocus();
                 return;
              }
           }

           var objCF = new ChildFrame(sMenuId, 0,0,null,null,0,0); //새 childframe 지정
           objCF.set_formurl("sellerInfo::seller_work.xfdl");
           objCF.set_openstatus("maximize");
           objCF.set_showtitlebar(false);
           objCF.set_resizable(true);

           var objParam = { MENU_ID : sMenuId, MENU_NAME : sMenuName, FORM_URL : sFormUrl};
           objCF.param = objParam;

        	this.fv_objApp.av_frameWork.addChild(objCF.name, objCF); //새 childframe 보여주기
            objCF.show();


        	this.fv_objApp.av_frameMdi.form.fnAddTabpage(objParam);

        	this.fv_objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet01.set_separatesize("40,*,0");

        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Grid_menu.addEventHandler("oncelldblclick",this.Grid_menu_oncelldblclick,this);
        };
        this.loadIncludeScript("frame_left.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
