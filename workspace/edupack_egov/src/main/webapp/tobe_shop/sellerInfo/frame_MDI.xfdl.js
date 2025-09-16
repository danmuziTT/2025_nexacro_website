(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frame_MDI");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1030,40);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Tab("tabMdi","0","8","970","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_showextrabutton("true");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tabMdi);
            obj.set_text("Tabpage1");
            this.tabMdi.addChild(obj.name, obj);

            obj = new Button("btnCloseAll",null,"11","30","17","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("btn_MDI_Allx");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.tabMdi.Tabpage1
            obj = new Layout("default","",0,0,this.tabMdi.Tabpage1.form,function(p){});
            this.tabMdi.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1030,40,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frame_MDI.xfdl", function() {
        this.fv_objApp = nexacro.getApplication();

        this.Frame_MDI_onload = function(obj,e)
        {
        	this.tabMdi.removeTabpage(0);
        };

        this.fnAddTabpage = function(objParam) {
        	this.tabMdi.insertTabpage(objParam.MENU_ID, -1, "", objParam.MENU_NAME);
        	// 텝 페이지 생성

        }
        this.tabMdi_onchanged = function(obj,e) //에러
        {
        	var sMenuId = obj.tabpages[e.postindex].name;
        	this.fv_objApp.av_frameWork[sMenuId].form.setFocus();
        };

        this.tabMdi_onextrabuttonclick = function(obj,e) //탭 닫을때 (에러)
        {
        	// e.index: tabpage의 index
        	var sMenuId = obj.tabpages[e.index].name;
        	this.fv_objApp.av_frameWork[sMenuId].form.close();
        	this.tabMdi.removeTabpage(e.index);
        }; //this.fv_objApp.av_frameWork[sMenuId] 안잡힘


        this.fnArrange = function(obj,e)
        {
        	var sType = obj.id.replace("btn","");	// Cascade
        	sType = sType.toLowerCase();	// cascade
        	var objWork = this.fv_objApp.av_frameWork.frames;

        	trace(sType);
        	if(sType == "closeall"){
        		for (var i = objWork.length-1 ; i >= 0; i--) { //objWork.length - 1: 인덱스 번호는 0부터 시작
        			objWork[i].form.close();
        			this.tabMdi.removeTabpage(i);
        		}
        		return ;
        	}

        };

        this.fnTabFocus = function(sId)
        {
        	for(var i=0; i<this.tabMdi.getTabpageCount(); i++){
        		if(this.tabMdi.tabpages[i].name == sId){
        			this.tabMdi.set_tabindex(i);
        			return;
        		}
        	}
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Frame_MDI_onload,this);
            this.tabMdi.addEventHandler("onchanged",this.tabMdi_onchanged,this);
            this.tabMdi.addEventHandler("onextrabuttonclick",this.tabMdi_onextrabuttonclick,this);
            this.btnCloseAll.addEventHandler("onclick",this.fnArrange,this);
        };
        this.loadIncludeScript("frame_MDI.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
