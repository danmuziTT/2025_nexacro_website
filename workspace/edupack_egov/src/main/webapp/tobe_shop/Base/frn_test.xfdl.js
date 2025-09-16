(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sample_listview_01");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"release\" type=\"STRING\" size=\"256\"/><Column id=\"cover\" type=\"STRING\" size=\"256\"/><Column id=\"songs\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"title\">The Freewheelin&apos; Bob Dylan</Col><Col id=\"release\">1963</Col><Col id=\"songs\">Side one&#10;1. Blowin&apos; in the Wind&#10;2. Girl from the North Country&#10;3. Masters of War&#10;4. Down the Highway&#10;5. Bob Dylan&apos;s Blues&#10;6. A Hard Rain&apos;s a-Gonna Fall&#10;&#10;Side two&#10;1. Don&apos;t Think Twice, It&apos;s All Right&#10;2. Bob Dylan&apos;s Dream&#10;3. Oxford Town&#10;4. Talkin&apos; World War III Blues&#10;5. Corrina, Corrina&#10;6. Honey, Just Allow Me One More Chance&#10;7. I Shall Be Free</Col><Col id=\"cover\">imagerc::Bob_Dylan_-_The_Freewheelin&apos;_Bob_Dylan.jpg</Col></Row><Row><Col id=\"title\">Highway 61 Revisited</Col><Col id=\"release\">1965</Col><Col id=\"songs\">Side one&#10;1. Like a Rolling Stone&#10;2. Tombstone Blues&#10;3. It Takes a Lot to Laugh, It Takes a Train to Cry&#10;4. From a Buick 6&#10;5. Ballad of a Thin Man&#10;&#10;Side two&#10;1. Queen Jane Approximately&#10;2. Highway 61 Revisited&#10;3. Just Like Tom Thumb&apos;s Blues&#10;4. Desolation Row</Col><Col id=\"cover\">imagerc::Bob_Dylan_-_Highway_61_Revisited.jpg</Col></Row><Row><Col id=\"title\">Blood on the Tracks</Col><Col id=\"release\">1975</Col><Col id=\"songs\">Side one&#10;1. Tangled Up in Blue&#10;2. Simple Twist of Fate&#10;3. You&apos;re a Big Girl Now&#10;4. Idiot Wind&#10;5. You&apos;re Gonna Make Me Lonesome When You Go&#10;&#10;Side two&#10;6. Meet Me in the Morning&#10;7. Lily, Rosemary and the Jack of Hearts&#10;8. If You See Her, Say Hello&#10;9. Shelter from the Storm&#10;10. Buckets of Rain</Col><Col id=\"cover\">imagerc::Bob_Dylan_-_Blood_on_the_Tracks.jpg</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new ListView("ListView00","20","20","500","500",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj.set_bandinitstatus("collapse");
            obj._setContents("<Formats><Format id=\"default\"><Band id=\"body\" width=\"100%\" height=\"160\" expandbartype=\"true\"><Cell id=\"Cell00\" left=\"5\" top=\"5\" width=\"150\" height=\"150\" displaytype=\"imagecontrol\" text=\"bind:cover\" border=\"0px none\" padding=\"0px\"/><Cell id=\"Cell01\" left=\"164\" top=\"25\" height=\"50\" right=\"20\" text=\"bind:title\" font=\"normal bold 20px/normal &quot;Gulim&quot;\" border=\"0px none\"/><Cell id=\"Cell02\" left=\"165\" top=\"65\" right=\"20\" bottom=\"5\" text=\"bind:release\" font=\"normal 30px/normal &quot;Gulim&quot;\" border=\"0px none\"/></Band><Band id=\"detail\" left=\"0\" width=\"100%\" top=\"0\" height=\"250\"><Cell id=\"Cell00\" left=\"0\" top=\"0\" width=\"100%\" height=\"100%\" displaytype=\"text\" text=\"bind:songs\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","550","36","100","84",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">expand</Col><Col id=\"datacolumn\">expand</Col></Row><Row><Col id=\"codecolumn\">accordion</Col><Col id=\"datacolumn\">accordion</Col></Row><Row><Col id=\"codecolumn\">popup</Col><Col id=\"datacolumn\">popup</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_text("expand");
            obj.set_value("expand");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin00","550","150","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_min("0");
            obj.set_max("50");
            obj.set_value("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1024,768,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frn_test.xfdl", function() {

        this.Radio00_onitemchanged = function(obj,e)
        {
        	this.ListView00.set_bandexpandtype(e.postvalue);
        };



        this.Spin00_onchanged = function(obj,e)
        {
        	this.ListView00.set_bandindentsize(e.postvalue);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Radio00.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
            this.Spin00.addEventHandler("onchanged",this.Spin00_onchanged,this);
        };
        this.loadIncludeScript("frn_test.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
