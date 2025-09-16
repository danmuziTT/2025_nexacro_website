(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CompExt_Sketch");
            this.set_titletext("Component-Sketch");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static03","10","40","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text(" Basic Usage");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Sketch("skc_base","20","172","470","170",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("skt_base");
            obj.set_border("1px solid #9c9c9c");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","73","93","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Brush Color");
            obj.set_cssclass("sta_WF_LabelTxt12");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_color","118","73","312","28",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("-1");
            obj.set_enable("true");
            obj.set_columncount("-1");
            var rdo_color_innerdataset = new nexacro.NormalDataset("rdo_color_innerdataset", obj);
            rdo_color_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">red</Col><Col id=\"datacolumn\">red</Col></Row><Row><Col id=\"codecolumn\">blue</Col><Col id=\"datacolumn\">blue</Col></Row><Row><Col id=\"codecolumn\">green</Col><Col id=\"datacolumn\">green</Col></Row><Row><Col id=\"codecolumn\">yellow</Col><Col id=\"datacolumn\">yellow</Col></Row></Rows>");
            obj.set_innerdataset(rdo_color_innerdataset);
            obj.set_text("red");
            obj.set_value("red");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","106","93","28",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Brush Size");
            obj.set_cssclass("sta_WF_LabelTxt12");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_size","118","106","262","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("-1");
            obj.set_enable("true");
            obj.set_columncount("-1");
            var rdo_size_innerdataset = new nexacro.NormalDataset("rdo_size_innerdataset", obj);
            rdo_size_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3px</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">5px</Col></Row><Row><Col id=\"codecolumn\">7</Col><Col id=\"datacolumn\">7px</Col></Row><Row><Col id=\"codecolumn\">9</Col><Col id=\"datacolumn\">9px</Col></Row></Rows>");
            obj.set_innerdataset(rdo_size_innerdataset);
            obj.set_text("3px");
            obj.set_value("3");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20","139","93","28",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Brush Type");
            obj.set_cssclass("sta_WF_LabelTxt12");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_type","118","139","242","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("-1");
            obj.set_enable("true");
            obj.set_columncount("-1");
            var rdo_type_innerdataset = new nexacro.NormalDataset("rdo_type_innerdataset", obj);
            rdo_type_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">round</Col><Col id=\"datacolumn\">round</Col></Row><Row><Col id=\"codecolumn\">square</Col><Col id=\"datacolumn\">square</Col></Row><Row><Col id=\"codecolumn\">butt</Col><Col id=\"datacolumn\">butt</Col></Row></Rows>");
            obj.set_innerdataset(rdo_type_innerdataset);
            obj.set_text("round");
            obj.set_value("round");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_undo","362","139","60","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Undo");
            this.addChild(obj.name, obj);

            obj = new Button("btn_redo","430","139","60","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Redo");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","515","40","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text(" Draw");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Sketch("skc_draw","525","110","255","229",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_border("1px solid #9c9c9c");
            this.addChild(obj.name, obj);

            obj = new Button("btn_draw","525","73","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Draw");
            this.addChild(obj.name, obj);

            obj = new Button("btn_erase","610","73","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Erase");
            this.addChild(obj.name, obj);

            obj = new Button("btn_text","695","73","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Text");
            this.addChild(obj.name, obj);

            obj = new Sketch("skc_sign","21","436","229","95",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_border("1px solid #9c9c9c");
            this.addChild(obj.name, obj);

            obj = new Button("btn_load","20","403","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Image Load");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","140","403","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Save & View");
            this.addChild(obj.name, obj);

            obj = new Sketch("skc_view","289","436","229","95",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_border("1px solid #9c9c9c");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","527","436","229","95",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_border("1px solid #9c9c9c");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","10","370","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text(" Sketch Save");
            obj.set_cssclass("sta_WF_TitleType1");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","289","403","83","28",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("Sketch");
            obj.set_cssclass("sta_WF_LabelTxt12");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","527","403","103","28",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("ImageViewer");
            obj.set_cssclass("sta_WF_LabelTxt12");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","10","0","266","28",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("Sketch");
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
        this.registerScript("CompExt_Sketch.xfdl", function() {
        this.CompExt_Sketch_onload = function(obj,e)
        {
        	this.fn_setBrush();
        };

        this.fn_setBrush = function ()
        {
        	this.skc_base.setBrushColor(this.rdo_color.value);
        	this.skc_base.setBrushSize(this.rdo_size.value);
        	this.skc_base.setBrushType(this.rdo_type.value);
        };

        this.btn_undo_onclick = function(obj,e)
        {
        	this.skc_base.undo();
        };

        this.btn_redo_onclick = function(obj,e)
        {
        	this.skc_base.redo();
        };

        this.btn_draw_onclick = function(obj,e)
        {
        	this.idx = 0;
        	this.btn_draw.set_cursor("wait");
        	this.btn_erase.set_cursor("wait");
        	this.setTimer(1, 300);
        };

        this.btn_erase_onclick = function(obj,e)
        {
        	this.idx = 0;
        	this.btn_draw.set_cursor("wait");
        	this.btn_erase.set_cursor("wait");
        	this.setTimer(2, 300);
        };

        this.CompExt_Sketch_ontimer = function(obj,e)
        {
        	if(e.timerid == 1)
        	{
        		this.fn_draw();
        	}
        	else if(e.timerid == 2)
        	{
        		this.fn_erase();
        	}
        };

        this.idx = 0;
        this.fn_draw = function ()
        {
        	var arrX = [100,36,200,0,164,100];
        	var arrY = [0,200,73,73,200,0];

        	this.skc_draw.drawStroke(arrX[this.idx],arrY[this.idx], true);
        	this.idx++;
        	this.skc_draw.drawStroke(arrX[this.idx],arrY[this.idx]);
        	if(this.idx == 6){
        		this.killTimer(1);
        		this.btn_draw.set_cursor("default");
        		this.btn_erase.set_cursor("default");
        	}
        };

        this.fn_erase = function (obj,e)
        {
        	this.skc_draw.setEraseSize(3);

        	var arrX = [100,36,200,0,164,100];
        	var arrY = [0,200,73,73,200,0];

        	this.skc_draw.drawErase(arrX[this.idx],arrY[this.idx], true);
        	this.idx++;
        	this.skc_draw.drawErase(arrX[this.idx],arrY[this.idx]);
        	if(this.idx == 6){
        		this.killTimer(2);
        		this.btn_draw.set_cursor("default");
        		this.btn_erase.set_cursor("default");
        	}
        };

        this.fn_text = function(obj,e)
        {
        	this.skc_draw.drawText(10, 10, "Nexacro\nTOBESOFT", true);
        };

        this.btn_load_onclick = function(obj,e)
        {
        	this.skc_sign.loadSketch("imagerc::img_sign.png");
        };

        this.btn_save_onclick = function(obj,e)
        {
        	this.skc_sign.saveSketch();
        	var skcValue = this.skc_sign.value;

        	this.skc_view.loadSketch(skcValue);
        	this.ImageViewer00.set_image(skcValue);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.CompExt_Sketch_onload,this);
            this.addEventHandler("ontimer",this.CompExt_Sketch_ontimer,this);
            this.rdo_color.addEventHandler("onitemchanged",this.fn_setBrush,this);
            this.rdo_size.addEventHandler("onitemchanged",this.fn_setBrush,this);
            this.rdo_type.addEventHandler("onitemchanged",this.fn_setBrush,this);
            this.btn_undo.addEventHandler("onclick",this.btn_undo_onclick,this);
            this.btn_redo.addEventHandler("onclick",this.btn_redo_onclick,this);
            this.btn_draw.addEventHandler("onclick",this.btn_draw_onclick,this);
            this.btn_erase.addEventHandler("onclick",this.btn_erase_onclick,this);
            this.btn_text.addEventHandler("onclick",this.fn_text,this);
            this.skc_sign.addEventHandler("onsuccess",this.skc_sign_onsuccess,this);
            this.btn_load.addEventHandler("onclick",this.btn_load_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
        };
        this.loadIncludeScript("CompExt_Sketch.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
