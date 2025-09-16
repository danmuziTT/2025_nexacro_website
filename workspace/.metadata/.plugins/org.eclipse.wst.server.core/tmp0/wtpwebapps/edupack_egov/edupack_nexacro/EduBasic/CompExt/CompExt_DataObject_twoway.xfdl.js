(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CompExt_DataObject_twoway");
            this.set_titletext("CompExt_DataObject_twoway");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new DataObject("data_object", this);
            obj.set_preload("false");
            obj._setContents({
            });
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_emp", this);
            obj.set_keystring("");
            obj.set_binddataobject("data_object");
            obj.set_dataobjectbindmode("twoway");
            obj.set_dataobjectpath("$.Rows[*]");
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\" datapath=\"@.EMPL_ID\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\" datapath=\"@.FULL_NAME\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\" datapath=\"@.DEPT_CD\"/><Column id=\"POS_CD\" type=\"STRING\" size=\"10\" datapath=\"@.POS_CD\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\" datapath=\"@.HIRE_DATE\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\" datapath=\"@.SALARY\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\" datapath=\"@.GENDER\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\" datapath=\"@.MARRIED\"/><Column id=\"MEMO\" type=\"STRING\" size=\"10\" datapath=\"@.MEMO\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_retrieve",null,"40","84","28","95",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("get JSON");
            this.addChild(obj.name, obj);

            obj = new Button("btn_saveJson",null,"40","80","28","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("saveJson");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","10","73","400",null,null,"10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_emp");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"95\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"EMPL_ID\"/><Cell col=\"1\" text=\"FULL_NAME\"/><Cell col=\"2\" text=\"DEPT_CD\"/><Cell col=\"3\" text=\"POS_CD\"/><Cell col=\"4\" text=\"HIRE_DATE\"/><Cell col=\"5\" text=\"SALARY\"/><Cell col=\"6\" text=\"GENDER\"/><Cell col=\"7\" text=\"MARRIED\"/><Cell col=\"8\" text=\"MEMO\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPL_ID\"/><Cell col=\"1\" text=\"bind:FULL_NAME\" edittype=\"text\" displaytype=\"editcontrol\"/><Cell col=\"2\" text=\"bind:DEPT_CD\"/><Cell col=\"3\" text=\"bind:POS_CD\"/><Cell col=\"4\" text=\"bind:HIRE_DATE\"/><Cell col=\"5\" text=\"bind:SALARY\"/><Cell col=\"6\" text=\"bind:GENDER\"/><Cell col=\"7\" text=\"bind:MARRIED\"/><Cell col=\"8\" text=\"bind:MEMO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_label","10","40","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text(" Basic Usage");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new TextArea("ta_contents","415","73",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","10","0","336","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("JSON / DataObject >Json twoway");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1038,650,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CompExt_DataObject_twoway.xfdl", function() {

        this.data_object_onsuccess = function(obj,e)
        {
        	trace("onsuccess");
        	obj.removeChangedInfo(e.serviceid);
        	if (e.method != "GET")
        		e.preventDefault();
        };

        //use DataObject
        this.btn_retrieve_onclick = function(obj,e)
        {
        	this.data_object.request("get1", "GET", "EduUrl::dataobject_emp.json");
        };

        this.btn_saveJson_onclick = function(obj,e)
        {
        	this.ta_contents.set_value(this.ds_emp.saveJSON());
        };

        this.btn_save_onclick = function(obj,e)
        {
        	this.ds_emp.applyChange();
        };

        this.data_object_ondatachanged = function(obj,e)
        {
        	var url = "EduUrl::dataobject_emp.json"; //또는 사용자 지정 Server url
        	var updatelist = obj.getChangedInfo();

        	//실패 했을때
        	for (var i =0, len = updatelist.length; i<len; i++)
        	{
        		var item = updatelist[i];
        		var uid = item.uid;
        		var method = item.type == "update" ? "PUT" : (item.type == "add" || item.type == "insert") ? "POST" : "DELETE";
        		var senddata = JSON.stringify(item.data);
        		var id = item.data.id;
        		if (method == "POST")
        		  id = "";
        		var param = {
        			'httpheader' : {'Content-Type': 'application/json'},
        			 'postdata' : senddata
        		}
        		this.DataObject00.request(uid,method, url + "/" + id, param);
        		for (var j =0; j< 10000000; j++)
        			; //delay
        	 }

           updatelist = e.infoarray;
           for (var i =0, len = updatelist.length; i<len; i++)
           {
        		var item = updatelist[i];
        		var uid = item.uid;
        		var  method = item.type == "update" ? "PUT" : (item.type == "add" || item.type == "insert") ? "POST" : "DELETE";
        		var senddata = JSON.stringify(item.data);
        		var id = item.data.id;
        		//trace("///updatelist ///",method,senddata);
        		if (method == "POST")
        		  id = "";
        		var param = {
        			'httpheader' : {'Content-Type': 'application/json'},
        			 'postdata' : senddata
        		}
        		this.data_object.request(uid,method, url + "/" + id, param);
        		for (var j =0; j< 10000000; j++)
        			; //delay
          }
        };

        this.data_object_onvaluechanged = function(obj,e)
        {
        		//서버로 변경된 데이터 전송
        	var idx = e.index;
        	var jsonobj = obj.getObjectByPath(e.dataobjectpath)[e.index];

        	var id = jsonobj.id;
        	var url = "dataobject_emp.json"; //또는 사용자 지정 Server url
        	var method = "PUT";
        	var senddata = JSON.stringify(jsonobj);

        	var param = {
        		'httpheader' : {'Content-Type': 'application/json'},
        		 'postdata' : senddata
        	 }

        	this.data_object.request(senddata,method, url + "/" + id, param);
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_retrieve.addEventHandler("onclick",this.btn_retrieve_onclick,this);
            this.btn_saveJson.addEventHandler("onclick",this.btn_saveJson_onclick,this);
            this.grd_list.addEventHandler("onheadclick",this.grd_list_onheadclick,this);
            this.data_object.addEventHandler("onerror",this.data_object_onerror,this);
            this.data_object.addEventHandler("onload",this.data_object_onload,this);
            this.data_object.addEventHandler("onsuccess",this.data_object_onsuccess,this);
            this.data_object.addEventHandler("ondatachanged",this.data_object_ondatachanged,this);
            this.data_object.addEventHandler("onvaluechanged",this.data_object_onvaluechanged,this);
            this.ds_emp.addEventHandler("onload",this.ds_emp_onload,this);
        };
        this.loadIncludeScript("CompExt_DataObject_twoway.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
