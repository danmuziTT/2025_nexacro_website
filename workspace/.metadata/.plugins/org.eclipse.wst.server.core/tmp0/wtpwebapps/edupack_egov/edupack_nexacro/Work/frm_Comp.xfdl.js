(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_Comp");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1030,730);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds00", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">MAC</Col><Col id=\"data\">빅맥</Col></Row><Row><Col id=\"data\">새우버거</Col><Col id=\"code\">LOT</Col></Row><Row><Col id=\"code\">KF</Col><Col id=\"data\">징거버거</Col></Row><Row><Col id=\"code\">MOMS</Col><Col id=\"data\">싸이버거</Col></Row><Row><Col id=\"code\">BK</Col><Col id=\"data\">빅와퍼</Col></Row><Row><Col id=\"code\">LOT</Col><Col id=\"data\">치즈스틱</Col></Row><Row><Col id=\"code\">MAC</Col><Col id=\"data\">감자튀김</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn01","128","73","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("btn01");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","80","83","33","14",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("static");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","160","83","50","14",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Nexacro");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","23","79","21","14",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Btn");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("sta05","23","114","24","14",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Edit");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00","170","114","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("sta06","20","140","145","14",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Maskedit (숫자만 들어옴)");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk01","181","137","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_positionstep("1");
            obj.set_format("");
            obj.set_type("");
            this.addChild(obj.name, obj);

            obj = new Static("sta07","18","240","257","14",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("MaskEdit > format(######-#######)");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk02","289","234","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_positionstep("1");
            obj.set_type("string");
            obj.set_format("######-#######");
            this.addChild(obj.name, obj);

            obj = new Static("sta08","20","169","146","14",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("MaskEdit > type(String)");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk01_00","186","166","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_positionstep("1");
            obj.set_format("");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new Static("sta07_00","23","271","276","14",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("MaskEdit > format(######-#{######}) ");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk02_00","309","264","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_positionstep("1");
            obj.set_type("string");
            obj.set_format("######-#{######}");
            this.addChild(obj.name, obj);

            obj = new Static("sta08_00","24","203","163","14",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("MaskEdit >format(#,###)");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk01_00_00","207","200","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_positionstep("1");
            obj.set_format("#,###");
            obj.set_type("number");
            this.addChild(obj.name, obj);

            obj = new Static("sta09","23","310","349","14",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("textArea 여러 줄 입력이 가능함 Ctrl + enter 로 입력이 가능함");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt00","23","334","349","53",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("sta10","28","85","191","14",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("Calender 날짜에 대한 입력이 가능");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal00","230","76","140","29",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal01","229","116","172","149",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_positionstep("2");
            obj.set_type("monthonly");
            this.addChild(obj.name, obj);

            obj = new Static("sta11","30","135","185","14",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("Calender > type > month only");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("sta11_00","20","290","185","14",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("Calender > type > spin");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal02","184","280","256","76",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_positionstep("2");
            obj.set_type("spin");
            this.addChild(obj.name, obj);

            obj = new Static("sta12","20","373","61","14",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("check box");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk00","100","373","132","14",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("당신은 인간입니까? ");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new CheckBox("ckeckbox","242","356","164","48",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("예");
            obj.set_positionstep("2");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_value("N");
            this.addChild(obj.name, obj);

            obj = new Edit("editChk","300","361","142","26",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new CheckBox("editchk","240","397","126","14",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("그렇게 살지 마십쇼");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("sta13","20","430","77","14",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("checkboxSet");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new CheckBoxSet("chks00","19","470","391","14",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_positionstep("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonlycolumn("readonlycolumn");
            var chks00_innerdataset = new nexacro.NormalDataset("chks00_innerdataset", obj);
            chks00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/><Column id=\"readonlycolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">A</Col><Col id=\"datacolumn\">사과</Col></Row><Row><Col id=\"codecolumn\">B</Col><Col id=\"datacolumn\">바나나</Col></Row><Row><Col id=\"codecolumn\">O</Col><Col id=\"datacolumn\">오렝지</Col><Col id=\"readonlycolumn\">true</Col></Row><Row><Col id=\"codecolumn\">K</Col><Col id=\"datacolumn\">키위</Col></Row><Row><Col id=\"codecolumn\">M</Col><Col id=\"datacolumn\">망고</Col></Row><Row><Col id=\"codecolumn\">OK</Col><Col id=\"datacolumn\">오렌지</Col></Row></Rows>");
            obj.set_innerdataset(chks00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Static("sta14","20","450","490","14",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("innerdataset > 데이터 수정이 가능, readonly 부분을 true 로 할 경우, 체크가 되지 않음");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtChkBoxSet","20","494","412","116",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("sta15","16","630","259","14",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("spin 일정한 값을 올리고 내릴 수 있는 컴포넌트");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Spin("spn00","280","624","197","32",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_positionstep("2");
            obj.set_increment("10");
            this.addChild(obj.name, obj);

            obj = new Static("sta16","10","663","297","14",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("increasement > 지정된 수만큼 누르면 숫자가 올라감");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("sta17","40","122","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("imageViewer");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img00","134","124","100","132",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_image("url(\'theme::edupack_nexacro/images/KakaoTalk_20241223_155152565_22.jpg\')");
            obj.set_imagealign("center middle");
            obj.set_stretch("fixaspectratio");
            this.addChild(obj.name, obj);

            obj = new Static("sta18","260","133","269","14",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("stretch : 이미지를 늘리거나 줄이는 용도로 사용.");
            this.addChild(obj.name, obj);

            obj = new Static("sta19","261","157","184","14",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("none: 이미지 사이즈를 원본으로 ");
            this.addChild(obj.name, obj);

            obj = new Static("sta20","261","181","303","14",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("fit : 이미지를 이미지 뷰어에 맞게 늘려줌 (비울 상관 X)");
            this.addChild(obj.name, obj);

            obj = new Static("sta21","260","205","440","14",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("fixaspectratio : 이미지를 비율에 맞게 이미지 뷰어에 맞춰 늘려줌 (비율 상관 0)");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img00_01","252","227","148","132",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_image("url(\'theme::edupack_nexacro/images/KakaoTalk_20241223_155152565_22.jpg\')");
            obj.set_imagealign("center middle");
            obj.set_stretch("none");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img00_01_00","410","227","148","132",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_image("url(\'theme::edupack_nexacro/images/KakaoTalk_20241223_155152565_22.jpg\')");
            obj.set_imagealign("center middle");
            obj.set_stretch("fit");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img00_01_01","574","227","148","132",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_image("url(\'theme::edupack_nexacro/images/KakaoTalk_20241223_155152565_22.jpg\')");
            obj.set_imagealign("center middle");
            obj.set_stretch("fixaspectratio");
            this.addChild(obj.name, obj);

            obj = new Static("sta22","305","370","30","14",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("none");
            this.addChild(obj.name, obj);

            obj = new Static("sta23","480","370","13","14",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("fit");
            this.addChild(obj.name, obj);

            obj = new Static("sta24","610","363","86","14",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("fixaspectratio ");
            this.addChild(obj.name, obj);

            obj = new Static("sta25","110","411","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("progressBar");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("pgb00","203","407","327","34",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_min("0");
            obj.set_max("100");
            obj.set_pos("60");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","205","454","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("10");
            this.addChild(obj.name, obj);

            obj = new Button("btn02","331","454","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("30");
            this.addChild(obj.name, obj);

            obj = new Button("btn03","457","454","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("70");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00","205","495","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("10");
            this.addChild(obj.name, obj);

            obj = new Button("btn02_00","331","495","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("30");
            this.addChild(obj.name, obj);

            obj = new Button("btn03_00","457","495","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("70");
            this.addChild(obj.name, obj);

            obj = new Static("sta26","29","26","141","14",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("넥사크로 목록형 컴포넌트");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Static("sta27","30","66","43","14",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("Combo");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo00","82","55","198","30",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_positionstep("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_type("dropdown");
            var cbo00_innerdataset = new nexacro.NormalDataset("cbo00_innerdataset", obj);
            cbo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">SAL</Col><Col id=\"datacolumn\">샐러디</Col></Row><Row><Col id=\"codecolumn\">SUB</Col><Col id=\"datacolumn\">서브웨이</Col></Row><Row><Col id=\"codecolumn\">MAC</Col><Col id=\"datacolumn\">맥도날드</Col></Row><Row><Col id=\"codecolumn\">LOT</Col><Col id=\"datacolumn\">롯데리아</Col></Row><Row><Col id=\"codecolumn\">MOMS</Col><Col id=\"datacolumn\">맘스터치</Col></Row><Row><Col id=\"codecolumn\">KF</Col><Col id=\"datacolumn\">KFC</Col></Row><Row><Col id=\"codecolumn\">BK</Col><Col id=\"datacolumn\">버거킹</Col></Row></Rows>");
            obj.set_innerdataset(cbo00_innerdataset);
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCode","29","104","140","26",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Edit("edtData","200","104","140","26",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo01","310","55","220","28",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_positionstep("3");
            obj.set_innerdataset("ds00");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new ListBox("lst00","105","157","115","117",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_positionstep("3");
            obj.set_innerdataset("ds00");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","29","164","44","14",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("ListBox");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","353","93","335","14",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("combo >type 에는 다양한 기능들이 있음 (filter, search 등)");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Static("sta28","250","160","146","14",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("Listbox 에는 type 이 없음");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Static("sta29","19","299","34","14",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("Radio");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo00","65","289","104","115",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_positionstep("3");
            obj.set_innerdataset("ds00");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            this.addChild(obj.name, obj);

            obj = new Static("sta30","160","293","156","14",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("중복선택 안됨 (하나만 선택)");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo00_00","320","286","231","42",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_positionstep("3");
            obj.set_innerdataset("ds00");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_columncount("3");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo00_01","570","278","154","56",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_positionstep("3");
            obj.set_innerdataset("ds00");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_rowcount("4");
            this.addChild(obj.name, obj);

            obj = new Static("sta31","340","343","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("Columncount > ");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Static("sta31_00","590","343","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("Rowcount > ");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","80","425","186","127",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_positionstep("3");
            obj.set_binddataset("ds00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"code\"/><Cell col=\"1\" text=\"data\"/></Band><Band id=\"body\"><Cell text=\"bind:code\"/><Cell col=\"1\" text=\"bind:data\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta32","36","437","26","14",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("Grid");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Static("sta33","27","26","153","14",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("넥사크로 컨테이너 컴포넌트");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Div("div00","27","56","303","212",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_positionstep("4");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","43","123","79","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("btn00");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt00","22","19","116","32",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("msk00","128","64","144","41",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            this.div00.addChild(obj.name, obj);

            obj = new Div("div01","410","60","368","208",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_positionstep("4");
            obj.set_border("1px solid");
            obj.set_url("Work::fn_div00Div.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("sta34","20","276","387","14",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("div 컨테이너 (그룹박스처럼 내부에 있는 컴포넌트를 같이 데리고 다님)");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Static("sta35","530","275","304","14",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("url > 에서 링크를 지정해 컴포넌트를 가지고 올 수 있다");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Static("sta36","27","297","557","14",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("div 내부에 있는 컴포넌트의 이름은 div00.form.edit 과 같이 나옴 (어디에 소속되어있는지 같은 느낌)");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Button("btn04","30","328","132","36",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_text("btn04");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Edit("edt02","193","324","247","42",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Tab("tab00","127","384","407","320",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_tabindex("0");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab00);
            obj.set_text("Tabpage1");
            this.tab00.addChild(obj.name, obj);

            obj = new TextArea("txt00","16","45","230","73",null,null,null,null,null,null,this.tab00.Tabpage1.form);
            obj.set_taborder("0");
            this.tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt00","271","53","117","37",null,null,null,null,null,null,this.tab00.Tabpage1.form);
            obj.set_taborder("1");
            this.tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo00","56","151","235","52",null,null,null,null,null,null,this.tab00.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("cbo00");
            this.tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn00","320","140","57","67",null,null,null,null,null,null,this.tab00.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("btn00");
            this.tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab00);
            obj.set_text("Tabpage2");
            obj.set_url("Work::fn_div00Div.xfdl");
            this.tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.tab00);
            obj.set_text("Tabpage3");
            this.tab00.addChild(obj.name, obj);

            obj = new CheckBox("chk00","35","44","191","18",null,null,null,null,null,null,this.tab00.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_text("chk00");
            this.tab00.Tabpage3.addChild(obj.name, obj);

            obj = new CheckBox("chk01","35","97","242","29",null,null,null,null,null,null,this.tab00.Tabpage3.form);
            obj.set_taborder("1");
            obj.set_text("chk01");
            this.tab00.Tabpage3.addChild(obj.name, obj);

            obj = new CheckBox("chk02","33","160","225","23",null,null,null,null,null,null,this.tab00.Tabpage3.form);
            obj.set_taborder("2");
            obj.set_text("chk02");
            this.tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta37","30","411","53","14",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_text("tab page");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Static("sta38","451","356","306","14",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_text("우클릭을 통해 탭페이지 생성 및 미리보기 변경이 가능함");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div01
            obj = new Layout("default","",0,0,this.div01.form,function(p){});
            this.div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab00.Tabpage1.form
            obj = new Layout("default","",0,0,this.tab00.Tabpage1.form,function(p){});
            this.tab00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab00.Tabpage2
            obj = new Layout("default","",0,0,this.tab00.Tabpage2.form,function(p){});
            this.tab00.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab00.Tabpage3.form
            obj = new Layout("default","",0,0,this.tab00.Tabpage3.form,function(p){});
            this.tab00.Tabpage3.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1030,730,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("5");
            obj.set_stepindex("3");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Work::fn_div00Div.xfdl");
        };
        
        // User Script
        this.registerScript("frm_Comp.xfdl", function() {

        this.editChk_onchanged = function(obj,e)
        {
        	this.editChk.set_value(e.postvalue);
        };


        this.chks00_onitemchanged = function(obj,e)
        {
        	this.txtChkBoxSet.set_value(e.postindex + "\n" + e.postvalue +"\n" + e.posttext);
        	//postindex>순서값, postvalue>코드값(체크박스에 있는 코드값), posttext> 텍스트 값(보여지는 값)
        };

        this.btn00_onclick = function(obj,e)
        {
        	this.pgb00.set_pos(obj.text);
        };

        this.btn001_onclick = function(obj,e)
        {
        	var numb = parseInt(this.pgb00.pos) + parseInt(obj.text);
        	this.pgb00.set_pos(numb);
        };

        this.cbo00_onitemchanged = function(obj,e)
        {
        	this.edtCode.set_value(e.postvalue);
        	this.edtData.set_value(e.posttext);
        };

        this.btn04_onclick = function(obj,e)
        {
        	this.edt02.set_value("AAA");
        	this.div00.form.edt00.set_value("KKKK");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.sta03.addEventHandler("onclick",this.sta03_onclick,this);
            this.sta05.addEventHandler("onclick",this.sta05_onclick,this);
            this.msk01.addEventHandler("onchanged",this.msk01_onchanged,this);
            this.sta07.addEventHandler("onclick",this.sta07_onclick,this);
            this.sta07_00.addEventHandler("onclick",this.sta07_onclick,this);
            this.sta08_00.addEventHandler("onclick",this.sta08_00_onclick,this);
            this.sta09.addEventHandler("onclick",this.sta09_onclick,this);
            this.ckeckbox.addEventHandler("onchanged",this.editChk_onchanged,this);
            this.sta13.addEventHandler("onclick",this.sta13_onclick,this);
            this.chks00.addEventHandler("onitemchanged",this.chks00_onitemchanged,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn03.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn00_00.addEventHandler("onclick",this.btn001_onclick,this);
            this.btn02_00.addEventHandler("onclick",this.btn001_onclick,this);
            this.btn03_00.addEventHandler("onclick",this.btn001_onclick,this);
            this.cbo00.addEventHandler("onitemchanged",this.cbo00_onitemchanged,this);
            this.cbo01.addEventHandler("canitemchange",this.cbo00_onitemchanged,this);
            this.sta31.addEventHandler("onclick",this.sta31_onclick,this);
            this.sta31_00.addEventHandler("onclick",this.sta31_onclick,this);
            this.btn04.addEventHandler("onclick",this.btn04_onclick,this);
        };
        this.loadIncludeScript("frm_Comp.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
