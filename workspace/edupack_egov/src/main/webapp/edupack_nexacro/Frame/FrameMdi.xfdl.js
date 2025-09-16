(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frameMDI");
            this.set_scrolltype("none");
            this.set_titletext("frameMDI");
            this.set_scrollbartype("none");
            this.set_background("#f3f5f6");
            if (Form == this.constructor)
            {
                this._setFormPosition(1058,40);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staBgLine","949","0",null,null,"10","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_MDI_Line");
            obj.set_border("0px none,0px none,1px solid #d3dce");
            this.addChild(obj.name, obj);

            obj = new Button("btnMaximize",null,"18","21","16","90",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_MDI_Max");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnCascade",null,"18","21","16","70",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_MDI_Min");
            this.addChild(obj.name, obj);

            obj = new Button("btnCloseAll",null,"18","21","16","7",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_tooltiptext("Close All");
            obj.set_cssclass("btn_MDI_Allx");
            this.addChild(obj.name, obj);

            obj = new Button("btnHorizontal",null,"18","21","16","50",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_MDI_H");
            this.addChild(obj.name, obj);

            obj = new Button("btnTilevertical",null,"18","21","16","30",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_MDI_V");
            this.addChild(obj.name, obj);

            obj = new Tab("tabMdi","100","10",null,"30","109",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_tabindex("0");
            obj.set_showextrabutton("true");
            obj.set_cssclass("tab_MDI_Menu");
            obj.set_tabbuttonheight("29");
            obj.set_tabbuttonstartgap("2");
            obj.set_tabbuttongap("2");
            obj.set_usecontrolkey("false");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage0",this.tabMdi);
            obj.set_text("Tabpage0");
            this.tabMdi.addChild(obj.name, obj);

            obj = new Button("btnMain","0","10","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Main");
            obj.set_cssclass("btn_MDI_FrmMain");
            this.addChild(obj.name, obj);

            obj = new Button("btnTopChange",null,"0","56","10","76",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_MDI_Collapse");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.tabMdi.Tabpage0.form
            obj = new Layout("default","",0,0,this.tabMdi.Tabpage0.form,function(p){});
            this.tabMdi.Tabpage0.form.addLayout(obj.name, obj);

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
        this.registerScript("FrameMdi.xfdl", function() {
        /**
        *  Nexacro Professional Training Couse
        *  @MenuPath    Frame > FrameMdi
        *  @FileName 	FrameMdi.xfdl
        *  @Creator 	TOBESOFT Education
        *  @CreateDate 	2022/12/22
        *  @Desction    MDI 탭 표현
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2022/12/22      		 TOBESOFT Education	 	  	최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.fvObjApp = this.gfnGetApplication();

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj, e)
        {
        	this.tabMdi.removeTabpage(0);
        }

         /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
         * 메뉴 tab Button 동적생성
         * @public
         * @param {string} 메뉴키값
         * @param {string} 메뉴명
         * @return
         * @example
         * @memberOf
         */
        this.fnAddTab = function (formId, formTitle)
        {
        	this.tabMdi.insertTabpage(formId, -1, "", formTitle);
        }

        //탭 변경시 해당 화면 포커스
        this.tabMdi_onchanged = function(obj,e)
        {
        	var sFormId = obj.tabpages[e.postindex].name;
        	this.fvObjApp.avWorkFrame[sFormId].setFocus();	//ChildFrame에 Focus
        	this.fvObjApp.avVFrameSet1.set_separatesize(this.fvObjApp.avWorkOpen);
        };


        // 탭 x 버튼 클릭시 화면 종료
        this.tabMdi_onextrabuttonclick = function(obj,e)
        {
        	this.fnFormClose(obj.tabpages[e.index].name, e.index);

        };

        //formid(winid)를 이용한 화면 close
        this.fnFormClose = function(sFormId, nTabIndex)
        {
        	//화면종료
        	this.fvObjApp.avWorkFrame.frames[sFormId].form.close();

        	//텝 제거
        	if(this.gfnIsNull(nTabIndex)){
        		for(var i=0; i<this.tabMdi.getTabpageCount(); i++){
        			if(this.tabMdi.tabpages[i].name == sFormId){
        				this.tabMdi.removeTabpage(i);
        				break;
        			}
        		}
        	}
        	else{
        		this.tabMdi.removeTabpage(nTabIndex);
        	}
        	if(this.tabMdi.getTabpageCount() == 0)	this.fvObjApp.avVFrameSet1.set_separatesize(this.fvObjApp.avMainOpen);

        	//데이터셋 갱신
        	var nRow = this.fvObjApp.gdsOpenMenu.findRow(this.FRAME_MENUCOLUMNS.winId, sFormId);
        	this.fvObjApp.gdsOpenMenu.deleteRow(nRow);

        }



        /**
         * mdi arrange 처리 함수
         * @public
         * @return
         * @example
         * @memberOf
         */
        this.btnArrange_onclick = function(obj,  e)
        {
            var strType = obj.name.replace("btn", "");
        	this.fnArrangeWin(strType);
        }

        /**
         * 열려있는 윈도우 화면을 정렬
         * @param	: 	strType: 정렬 타입
         * @return	:   N/A
         */
        this.fnArrangeWin = function(strType)
        {
            strType = strType.toLowerCase();

        	// workFrame영역에 open된 childFrame 갯수
        	var iFramesCnt = this.fvObjApp.avWorkFrame.frames.length;

        	if (this.fvObjApp.gdsOpenMenu.getRowCount() < 1) return;

        	var arrWin = [];
        	switch (strType)
        	{
        		case "maximize" :
        			for (var i=0; i<iFramesCnt; i++)
        			{
        				this.fvObjApp.avWorkFrame.frames[i].set_openstatus("maximize");
        				this.fvObjApp.avWorkFrame.frames[i].set_showtitlebar(false);
        				this.fvObjApp.avWorkFrame.frames[i].set_border("0px none");
        			}
        			break;

        		case "closeall" :
        			for(var i=iFramesCnt-1; i>=0; i--)
        			{
        				var fid = this.fvObjApp.avWorkFrame.frames[i].name;
        				//화면의 fnClose 함수 체크
        				if(!this.gfnIsNull(this.fvObjApp.avWorkFrame.frames[i].form.divWork.form.lookup("fnClose"))){
        					if(this.fvObjApp.avWorkFrame.frames[i].form.divWork.form.fnClose() == false){
        						//array에 담아 나중에 Confirm 처리
        						arrWin.push(fid);
        					}
        					else{
        						this.fnFormClose(fid);
        					}
        				}
        				else{
        					this.fnFormClose(fid);
        				}
        			}

        			if(!this.gfnIsNull(arrWin)){
        				this.gfnAlert("confirm.before.movepage", "", "msgClose", function(strId, strRtn)
        				                                                         {
        				                                                              if(strRtn){
        																				for(var i=0; i<arrWin.length; i++)
        																				{
        																					this.fnFormClose(arrWin[i]);
        																				}
        																			  }
        																		});
        			}
        			break;

        		default :
        			this.fvObjApp.avVFrameSet1.set_separatesize(this.fvObjApp.avWorkOpen);
        			if(iFramesCnt<= 1)	break;	//화면 하나 열려있는경우 하지 않는다
        			for (var i=0; i<iFramesCnt; i++)
        			{
        				this.fvObjApp.avWorkFrame.frames[i].set_showtitlebar(true);
        				this.fvObjApp.avWorkFrame.frames[i].set_border("1px solid #7f7f7b");
        				this.fvObjApp.avWorkFrame.frames[i].set_borderRadius("3px 3px");
        				this.fvObjApp.avWorkFrame.frames[i].set_openstatus("normal");
        				this.fvObjApp.avWorkFrame.frames[i].titlebar.closebutton.set_enable(false);
        			}
        			this.fvObjApp.avWorkFrame.arrange(strType);
        			break;
        	}
        }





        this.fnTabControl = function(winID, sType)
        {
        	if(sType == "select"){
        		for(var i=0; i<this.tabMdi.getTabpageCount(); i++)
        		{
        			if(this.tabMdi.tabpages[i].name == winID)
        			{
        				this.tabMdi.set_tabindex(i);
        				return;
        			}
        		}

        	}

        }


        this.btnMain_onclick = function(obj,e)
        {
        	this.fvObjApp.avVFrameSet1.set_separatesize(this.fvObjApp.avMainOpen);
        };

        this.tabMdi_onsetfocus = function(obj,e)
        {
        	if(obj.getTabpageCount() > 0){
        		this.fvObjApp.avVFrameSet1.set_separatesize(this.fvObjApp.avWorkOpen);
        	}
        };

        this.btnTopChange_onclick = function(obj,e)
        {
        	if(obj.cssclass == "btn_MDI_Collapse"){
        		obj.set_cssclass("btn_MDI_Expand");
        		this.fvObjApp.avVFrameSet.set_separatesize("0,1,*");
        	}
        	else{
        		obj.set_cssclass("btn_MDI_Collapse");
        		this.fvObjApp.avVFrameSet.set_separatesize("0,50,*");
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.btnMaximize.addEventHandler("onclick",this.btnArrange_onclick,this);
            this.btnCascade.addEventHandler("onclick",this.btnArrange_onclick,this);
            this.btnCloseAll.addEventHandler("onclick",this.btnArrange_onclick,this);
            this.btnHorizontal.addEventHandler("onclick",this.btnArrange_onclick,this);
            this.btnTilevertical.addEventHandler("onclick",this.btnArrange_onclick,this);
            this.tabMdi.addEventHandler("onchanged",this.tabMdi_onchanged,this);
            this.tabMdi.addEventHandler("onextrabuttonclick",this.tabMdi_onextrabuttonclick,this);
            this.tabMdi.addEventHandler("onsetfocus",this.tabMdi_onsetfocus,this);
            this.btnMain.addEventHandler("onclick",this.btnMain_onclick,this);
            this.btnTopChange.addEventHandler("onclick",this.btnTopChange_onclick,this);
        };
        this.loadIncludeScript("FrameMdi.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
