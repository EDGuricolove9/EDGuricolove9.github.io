(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"1212_atlas_1", frames: [[0,0,333,317],[416,0,82,238],[335,0,79,426]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_3 = function() {
	this.initialize(ss["1212_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["1212_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["1212_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.本体 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 等本体
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.本体, new cjs.Rectangle(0,0,166.5,158.5), null);


(lib.下线 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 等下先
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.下线, new cjs.Rectangle(0,0,41,119), null);


(lib.吊绳 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 吊绳
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.吊绳, new cjs.Rectangle(0,0,39.5,213), null);


(lib.xiao = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 小灯笼
	this.ikNode_1 = new lib.吊绳();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(83.45,-102.45,0.9999,0.9999,-25.449,0,0,39.5,-0.1);

	this.ikNode_2 = new lib.本体();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(139.25,106.8,1,1,-4.1338,0,0,86.3,-0.5);

	this.ikNode_4 = new lib.下线();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(147.75,265.9,0.9999,0.9999,42.65,0,0,19.1,8.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_4,p:{rotation:42.65,x:147.75,y:265.9,regX:19.1,scaleX:0.9999,scaleY:0.9999,regY:8.2}},{t:this.ikNode_2,p:{regX:86.3,regY:-0.5,scaleX:1,scaleY:1,rotation:-4.1338,x:139.25,y:106.8}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-25.449,y:-102.45,x:83.45,regX:39.5}}]}).to({state:[{t:this.ikNode_4,p:{rotation:41.9275,x:145.9,y:266.3,regX:19.1,scaleX:0.9999,scaleY:0.9999,regY:8.2}},{t:this.ikNode_2,p:{regX:86.4,regY:-0.4,scaleX:0.9999,scaleY:0.9999,rotation:-4.0647,x:137.8,y:107.35}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-25.0186,y:-102.4,x:83.45,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:41.2046,x:144.25,y:266.7,regX:19.2,scaleX:0.9998,scaleY:0.9998,regY:8.2}},{t:this.ikNode_2,p:{regX:86.4,regY:-0.4,scaleX:0.9999,scaleY:0.9999,rotation:-3.9947,x:136.25,y:107.75}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-24.5863,y:-102.45,x:83.45,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:40.4818,x:142.45,y:267.1,regX:19.1,scaleX:0.9998,scaleY:0.9998,regY:8.2}},{t:this.ikNode_2,p:{regX:86.4,regY:-0.4,scaleX:0.9999,scaleY:0.9999,rotation:-3.9245,x:134.7,y:108.1}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-24.1559,y:-102.4,x:83.45,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:39.7589,x:140.7,y:267.4,regX:19.1,scaleX:0.9998,scaleY:0.9998,regY:8.1}},{t:this.ikNode_2,p:{regX:86.4,regY:-0.4,scaleX:0.9999,scaleY:0.9999,rotation:-3.8536,x:133.05,y:108.5}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-23.7248,y:-102.4,x:83.45,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:39.0359,x:138.9,y:267.9,regX:19.2,scaleX:0.9999,scaleY:0.9999,regY:8.2}},{t:this.ikNode_2,p:{regX:86.4,regY:-0.4,scaleX:0.9999,scaleY:0.9999,rotation:-3.7834,x:131.5,y:108.85}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-23.2933,y:-102.4,x:83.45,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:38.314,x:137.05,y:268.2,regX:19.1,scaleX:0.9998,scaleY:0.9998,regY:8.2}},{t:this.ikNode_2,p:{regX:86.4,regY:-0.4,scaleX:0.9999,scaleY:0.9999,rotation:-3.7133,x:129.9,y:109.2}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-22.8611,y:-102.4,x:83.5,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:37.5895,x:135.4,y:268.5,regX:19.2,scaleX:0.9999,scaleY:0.9999,regY:8.1}},{t:this.ikNode_2,p:{regX:86.4,regY:-0.4,scaleX:0.9999,scaleY:0.9999,rotation:-3.6441,x:128.3,y:109.5}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-22.43,y:-102.45,x:83.45,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:36.8683,x:133.55,y:268.85,regX:19.1,scaleX:0.9999,scaleY:0.9999,regY:8.1}},{t:this.ikNode_2,p:{regX:86.4,regY:-0.4,scaleX:0.9999,scaleY:0.9999,rotation:-3.574,x:126.75,y:109.85}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-21.999,y:-102.4,x:83.45,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:36.1448,x:131.65,y:269.15,regX:19.1,scaleX:0.9998,scaleY:0.9998,regY:8.2}},{t:this.ikNode_2,p:{regX:86.4,regY:-0.4,scaleX:0.9999,scaleY:0.9999,rotation:-3.504,x:125.15,y:110.15}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-21.5661,y:-102.4,x:83.45,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:35.4219,x:129.9,y:269.5,regX:19.1,scaleX:0.9998,scaleY:0.9998,regY:8.2}},{t:this.ikNode_2,p:{regX:86.4,regY:-0.4,scaleX:0.9999,scaleY:0.9999,rotation:-3.4329,x:123.55,y:110.5}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-21.1361,y:-102.45,x:83.45,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:34.6995,x:128.1,y:269.8,regX:19.1,scaleX:0.9998,scaleY:0.9998,regY:8.2}},{t:this.ikNode_2,p:{regX:86.4,regY:-0.4,scaleX:0.9999,scaleY:0.9999,rotation:-3.362,x:121.95,y:110.8}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-20.7043,y:-102.35,x:83.45,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:33.9767,x:126.35,y:270.05,regX:19.1,scaleX:0.9999,scaleY:0.9999,regY:8.1}},{t:this.ikNode_2,p:{regX:86.4,regY:-0.4,scaleX:0.9999,scaleY:0.9999,rotation:-3.292,x:120.35,y:111.1}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-20.273,y:-102.4,x:83.5,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:33.2526,x:124.5,y:270.25,regX:19.1,scaleX:0.9998,scaleY:0.9998,regY:8.1}},{t:this.ikNode_2,p:{regX:86.4,regY:-0.4,scaleX:0.9999,scaleY:0.9999,rotation:-3.2219,x:118.7,y:111.35}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-19.8403,y:-102.4,x:83.45,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:32.5305,x:122.75,y:270.6,regX:19.1,scaleX:0.9999,scaleY:0.9999,regY:8.2}},{t:this.ikNode_2,p:{regX:86.4,regY:-0.4,scaleX:0.9999,scaleY:0.9999,rotation:-3.1528,x:117.05,y:111.6}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-19.4105,y:-102.35,x:83.45,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:31.8068,x:120.95,y:270.85,regX:19.1,scaleX:0.9999,scaleY:0.9999,regY:8.2}},{t:this.ikNode_2,p:{regX:86.4,regY:-0.4,scaleX:0.9999,scaleY:0.9999,rotation:-3.0827,x:115.5,y:111.85}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-18.9797,y:-102.4,x:83.45,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:31.0851,x:119.05,y:271.15,regX:19.1,scaleX:0.9999,scaleY:0.9999,regY:8.2}},{t:this.ikNode_2,p:{regX:86.4,regY:-0.4,scaleX:0.9999,scaleY:0.9999,rotation:-3.0126,x:113.85,y:112.05}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-18.5486,y:-102.35,x:83.45,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:30.3617,x:117.35,y:271.4,regX:19.2,scaleX:0.9999,scaleY:0.9999,regY:8.2}},{t:this.ikNode_2,p:{regX:86.4,regY:-0.4,scaleX:0.9999,scaleY:0.9999,rotation:-2.9426,x:112.3,y:112.3}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-18.1156,y:-102.4,x:83.5,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:29.6389,x:115.45,y:271.6,regX:19.1,scaleX:0.9999,scaleY:0.9999,regY:8.2}},{t:this.ikNode_2,p:{regX:86.4,regY:-0.4,scaleX:0.9999,scaleY:0.9999,rotation:-2.8717,x:110.65,y:112.5}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-17.6856,y:-102.35,x:83.45,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:28.9155,x:113.65,y:271.85,regX:19.1,scaleX:0.9998,scaleY:0.9998,regY:8.2}},{t:this.ikNode_2,p:{regX:86.4,regY:-0.4,scaleX:0.9999,scaleY:0.9999,rotation:-2.8017,x:109,y:112.75}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-17.2539,y:-102.4,x:83.4,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:28.1924,x:111.9,y:272.05,regX:19.1,scaleX:0.9999,scaleY:0.9999,regY:8.2}},{t:this.ikNode_2,p:{regX:86.4,regY:-0.4,scaleX:0.9999,scaleY:0.9999,rotation:-2.7316,x:107.45,y:112.9}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-16.8224,y:-102.45,x:83.45,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:27.4696,x:110,y:272.15,regX:19.1,scaleX:0.9999,scaleY:0.9999,regY:8.2}},{t:this.ikNode_2,p:{regX:86.4,regY:-0.4,scaleX:0.9999,scaleY:0.9999,rotation:-2.6616,x:105.8,y:113.1}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-16.3914,y:-102.35,x:83.45,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:26.7469,x:108.2,y:272.3,regX:19.1,scaleX:0.9999,scaleY:0.9999,regY:8.2}},{t:this.ikNode_2,p:{regX:86.4,regY:-0.4,scaleX:0.9999,scaleY:0.9999,rotation:-2.5916,x:104.2,y:113.25}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-15.9599,y:-102.35,x:83.4,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:26.0227,x:106.4,y:272.5,regX:19.1,scaleX:0.9999,scaleY:0.9999,regY:8.2}},{t:this.ikNode_2,p:{regX:86.4,regY:-0.4,scaleX:0.9999,scaleY:0.9999,rotation:-2.5216,x:102.55,y:113.35}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-15.5284,y:-102.35,x:83.4,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:25.3007,x:104.55,y:272.6,regX:19.1,scaleX:0.9999,scaleY:0.9999,regY:8.2}},{t:this.ikNode_2,p:{regX:86.4,regY:-0.4,scaleX:0.9999,scaleY:0.9999,rotation:-2.4516,x:100.85,y:113.5}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-15.0961,y:-102.4,x:83.45,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:24.5778,x:102.75,y:272.8,regX:19.1,scaleX:0.9999,scaleY:0.9999,regY:8.2}},{t:this.ikNode_2,p:{regX:86.4,regY:-0.4,scaleX:0.9999,scaleY:0.9999,rotation:-2.3807,x:99.3,y:113.65}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-14.6644,y:-102.35,x:83.4,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:23.8545,x:100.95,y:272.9,regX:19.1,scaleX:0.9999,scaleY:0.9999,regY:8.2}},{t:this.ikNode_2,p:{regX:86.4,regY:-0.4,scaleX:0.9999,scaleY:0.9999,rotation:-2.3106,x:97.65,y:113.75}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-14.2337,y:-102.45,x:83.6,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:23.1328,x:99.15,y:272.95,regX:19.1,scaleX:0.9999,scaleY:0.9999,regY:8.2}},{t:this.ikNode_2,p:{regX:86.4,regY:-0.4,scaleX:0.9999,scaleY:0.9999,rotation:-2.2407,x:96.05,y:113.85}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-13.8019,y:-102.35,x:83.5,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:22.4085,x:97.3,y:273.1,regX:19.1,scaleX:0.9999,scaleY:0.9999,regY:8.2}},{t:this.ikNode_2,p:{regX:86.4,regY:-0.4,scaleX:0.9999,scaleY:0.9999,rotation:-2.1715,x:94.45,y:113.95}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-13.3701,y:-102.35,x:83.5,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:21.6856,x:95.55,y:273.05,regX:19.1,scaleX:0.9999,scaleY:0.9999,regY:8.1}},{t:this.ikNode_2,p:{regX:86.4,regY:-0.4,scaleX:0.9999,scaleY:0.9999,rotation:-2.1007,x:92.75,y:114.05}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-12.9402,y:-102.4,x:83.65,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:20.9639,x:93.75,y:273.25,regX:19.2,scaleX:0.9999,scaleY:0.9999,regY:8.2}},{t:this.ikNode_2,p:{regX:86.4,regY:-0.4,scaleX:0.9999,scaleY:0.9999,rotation:-2.0306,x:91.15,y:114.1}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-12.5078,y:-102.35,x:83.5,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:20.2408,x:91.8,y:273.3,regX:19.1,scaleX:0.9999,scaleY:0.9999,regY:8.2}},{t:this.ikNode_2,p:{regX:86.4,regY:-0.4,scaleX:0.9999,scaleY:0.9999,rotation:-1.9607,x:89.55,y:114.15}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-12.0765,y:-102.35,x:83.45,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:19.5181,x:90.1,y:273.35,regX:19.2,scaleX:0.9999,scaleY:0.9999,regY:8.2}},{t:this.ikNode_2,p:{regX:86.4,regY:-0.4,scaleX:0.9999,scaleY:0.9999,rotation:-1.8907,x:87.9,y:114.15}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-11.645,y:-102.35,x:83.6,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:18.7944,x:88.2,y:273.3,regX:19.1,scaleX:0.9999,scaleY:0.9999,regY:8.2}},{t:this.ikNode_2,p:{regX:86.4,regY:-0.4,scaleX:0.9999,scaleY:0.9999,rotation:-1.8207,x:86.35,y:114.2}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-11.2141,y:-102.4,x:83.55,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:18.0719,x:86.35,y:273.3,regX:19.1,scaleX:0.9999,scaleY:0.9999,regY:8.2}},{t:this.ikNode_2,p:{regX:86.4,regY:-0.4,scaleX:0.9999,scaleY:0.9999,rotation:-1.7498,x:84.75,y:114.2}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-10.7821,y:-102.35,x:83.45,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:17.3485,x:84.55,y:273.35,regX:19.1,scaleX:0.9999,scaleY:0.9999,regY:8.2}},{t:this.ikNode_2,p:{regX:86.4,regY:-0.4,scaleX:0.9999,scaleY:0.9999,rotation:-1.6799,x:83.05,y:114.2}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-10.3506,y:-102.35,x:83.45,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:16.6255,x:82.7,y:273.35,regX:19.1,scaleX:0.9998,scaleY:0.9998,regY:8.2}},{t:this.ikNode_2,p:{regX:86.4,regY:-0.4,scaleX:0.9999,scaleY:0.9999,rotation:-1.6099,x:81.45,y:114.15}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-9.9199,y:-102.3,x:83.45,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:15.9022,x:80.95,y:273.4,regX:19.1,scaleX:0.9999,scaleY:0.9999,regY:8.2}},{t:this.ikNode_2,p:{regX:86.4,regY:-0.4,scaleX:0.9999,scaleY:0.9999,rotation:-1.5399,x:79.85,y:114.2}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-9.4886,y:-102.3,x:83.45,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:15.1796,x:79.1,y:273.25,regX:19.1,scaleX:0.9999,scaleY:0.9999,regY:8.2}},{t:this.ikNode_2,p:{regX:86.4,regY:-0.4,scaleX:0.9999,scaleY:0.9999,rotation:-1.4699,x:78.2,y:114.1}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-9.059,y:-102.3,x:83.45,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:14.457,x:77.25,y:273.2,regX:19.1,scaleX:0.9999,scaleY:0.9999,regY:8.2}},{t:this.ikNode_2,p:{regX:86.4,regY:-0.4,scaleX:0.9999,scaleY:0.9999,rotation:-1.4,x:76.6,y:114.1}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-8.6262,y:-102.3,x:83.45,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:13.734,x:75.45,y:273.15,regX:19.1,scaleX:0.9999,scaleY:0.9999,regY:8.2}},{t:this.ikNode_2,p:{regX:86.4,regY:-0.4,scaleX:0.9999,scaleY:0.9999,rotation:-1.33,x:74.95,y:114.05}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-8.1956,y:-102.35,x:83.55,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:13.0104,x:73.6,y:273.1,regX:19.1,scaleX:0.9999,scaleY:0.9999,regY:8.2}},{t:this.ikNode_2,p:{regX:86.4,regY:-0.4,scaleX:0.9999,scaleY:0.9999,rotation:-1.2592,x:73.25,y:113.95}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-7.7631,y:-102.35,x:83.55,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:12.2872,x:71.75,y:273,regX:19.1,scaleX:0.9999,scaleY:0.9999,regY:8.2}},{t:this.ikNode_2,p:{regX:86.4,regY:-0.4,scaleX:0.9999,scaleY:0.9999,rotation:-1.1892,x:71.65,y:113.85}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-7.3318,y:-102.3,x:83.45,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:11.5651,x:69.95,y:272.95,regX:19.1,scaleX:0.9999,scaleY:0.9999,regY:8.2}},{t:this.ikNode_2,p:{regX:86.4,regY:-0.4,scaleX:0.9999,scaleY:0.9999,rotation:-1.1201,x:70.05,y:113.8}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-6.9008,y:-102.3,x:83.45,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:10.8414,x:68.2,y:272.8,regX:19.1,scaleX:0.9999,scaleY:0.9999,regY:8.2}},{t:this.ikNode_2,p:{regX:86.4,regY:-0.4,scaleX:0.9999,scaleY:0.9999,rotation:-1.0502,x:68.45,y:113.7}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-6.4694,y:-102.3,x:83.45,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:10.1184,x:66.3,y:272.65,regX:19.1,scaleX:0.9999,scaleY:0.9999,regY:8.2}},{t:this.ikNode_2,p:{regX:86.4,regY:-0.4,scaleX:0.9999,scaleY:0.9999,rotation:-0.9802,x:66.85,y:113.55}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-6.0384,y:-102.3,x:83.45,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:9.3962,x:64.5,y:272.6,regX:19.1,scaleX:0.9999,scaleY:0.9999,regY:8.2}},{t:this.ikNode_2,p:{regX:86.4,regY:-0.4,scaleX:0.9999,scaleY:0.9999,rotation:-0.9102,x:65.2,y:113.5}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-5.6061,y:-102.3,x:83.45,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:8.6737,x:62.7,y:272.4,regX:19.1,scaleX:0.9999,scaleY:0.9999,regY:8.2}},{t:this.ikNode_2,p:{regX:86.4,regY:-0.4,scaleX:0.9999,scaleY:0.9999,rotation:-0.8394,x:63.55,y:113.35}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-5.1748,y:-102.3,x:83.55,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:7.9509,x:60.85,y:272.25,regX:19.1,scaleX:0.9999,scaleY:0.9999,regY:8.2}},{t:this.ikNode_2,p:{regX:86.4,regY:-0.4,scaleX:0.9999,scaleY:0.9999,rotation:-0.7686,x:61.95,y:113.15}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-4.7438,y:-102.3,x:83.45,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:7.2282,x:59.05,y:272.1,regX:19.1,scaleX:0.9999,scaleY:0.9999,regY:8.2}},{t:this.ikNode_2,p:{regX:86.4,regY:-0.4,scaleX:0.9999,scaleY:0.9999,rotation:-0.6986,x:60.35,y:113}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-4.3122,y:-102.3,x:83.45,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:6.5037,x:57.2,y:271.9,regX:19.1,scaleX:0.9999,scaleY:0.9999,regY:8.2}},{t:this.ikNode_2,p:{regX:86.4,regY:-0.4,scaleX:0.9999,scaleY:0.9999,rotation:-0.6287,x:58.75,y:112.8}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-3.8809,y:-102.25,x:83.45,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:5.7816,x:55.45,y:271.55,regX:19.1,scaleX:0.9999,scaleY:0.9999,regY:8.1}},{t:this.ikNode_2,p:{regX:86.4,regY:-0.4,scaleX:0.9999,scaleY:0.9999,rotation:-0.5596,x:57.1,y:112.6}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-3.449,y:-102.35,x:83.45,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:5.0587,x:53.65,y:271.5,regX:19.1,scaleX:0.9999,scaleY:0.9999,regY:8.2}},{t:this.ikNode_2,p:{regX:86.4,regY:-0.4,scaleX:0.9999,scaleY:0.9999,rotation:-0.4896,x:55.5,y:112.4}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-3.0181,y:-102.3,x:83.45,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:4.3357,x:51.95,y:271.3,regX:19.2,scaleX:0.9999,scaleY:0.9999,regY:8.2}},{t:this.ikNode_2,p:{regX:86.4,regY:-0.4,scaleX:0.9999,scaleY:0.9999,rotation:-0.4197,x:53.85,y:112.15}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-2.5865,y:-102.3,x:83.45,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:3.6118,x:50.05,y:271.05,regX:19.1,scaleX:0.9999,scaleY:0.9999,regY:8.2}},{t:this.ikNode_2,p:{regX:86.4,regY:-0.4,scaleX:0.9999,scaleY:0.9999,rotation:-0.348,x:52.2,y:112}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-2.155,y:-102.3,x:83.4,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:2.8902,x:48.2,y:270.8,regX:19.1,scaleX:0.9999,scaleY:0.9999,regY:8.2}},{t:this.ikNode_2,p:{regX:86.4,regY:-0.4,scaleX:0.9999,scaleY:0.9999,rotation:-0.278,x:50.6,y:111.75}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-1.7237,y:-102.3,x:83.55,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:2.1663,x:46.45,y:270.5,regX:19.1,scaleX:0.9999,scaleY:0.9999,regY:8.2}},{t:this.ikNode_2,p:{regX:86.4,regY:-0.4,scaleX:0.9999,scaleY:0.9999,rotation:-0.2081,x:49.05,y:111.5}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:-1.2925,y:-102.3,x:83.5,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.4437,x:44.7,y:270.25,regX:19.1,scaleX:0.9999,scaleY:0.9999,regY:8.2}},{t:this.ikNode_2,p:{regX:86.4,regY:-0.4,scaleX:0.9999,scaleY:0.9999,rotation:-0.139,x:47.45,y:111.2}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-0.8604,y:-102.3,x:83.45,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.7205,x:42.85,y:270,regX:19.1,scaleX:0.9999,scaleY:0.9999,regY:8.2}},{t:this.ikNode_2,p:{regX:86.4,regY:-0.4,scaleX:0.9999,scaleY:0.9999,rotation:-0.0691,x:45.85,y:110.9}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-0.4293,y:-102.3,x:83.45,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0,x:41.05,y:269.75,regX:19.1,scaleX:0.9999,scaleY:0.9999,regY:8.2}},{t:this.ikNode_2,p:{regX:86.4,regY:-0.4,scaleX:0.9999,scaleY:0.9999,rotation:-0.0009,x:44.25,y:110.6}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:0,y:-102.3,x:83.45,regX:39.5}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.1,-102.3,272.90000000000003,488.3);


(lib.中 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 中灯笼
	this.ikNode_1 = new lib.吊绳();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(83.45,-102.4,1,1,32.3779,0,0,39.4,-0.1);

	this.ikNode_2 = new lib.本体();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(-63.8,56.35,1,1,26.7152,0,0,86.4,-0.5);

	this.ikNode_4 = new lib.下线();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(-138.1,197.1,1,1,5.0723,0,0,19.1,8.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_4,p:{scaleX:1,scaleY:1,rotation:5.0723,x:-138.1,y:197.1,regY:8.1,regX:19.1}},{t:this.ikNode_2,p:{scaleX:1,scaleY:1,rotation:26.7152,x:-63.8,y:56.35,regX:86.4,regY:-0.5}},{t:this.ikNode_1,p:{scaleX:1,scaleY:1,rotation:32.3779,x:83.45,y:-102.4,regX:39.4}}]}).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:4.9867,x:-135.45,y:199,regY:8.1,regX:19.1}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:26.2632,x:-62.3,y:57.75,regX:86.4,regY:-0.5}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:31.8304,x:83.4,y:-102.45,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:4.8998,x:-132.8,y:201,regY:8.1,regX:19.1}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:25.8107,x:-60.8,y:59.05,regX:86.3,regY:-0.5}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:31.2812,x:83.4,y:-102.5,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:4.8137,x:-130.1,y:202.9,regY:8.1,regX:19.1}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:25.3579,x:-59.25,y:60.45,regX:86.4,regY:-0.5}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:30.7325,x:83.4,y:-102.45,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:4.7287,x:-127.4,y:204.8,regY:8.1,regX:19.1}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:24.9049,x:-57.75,y:61.8,regX:86.3,regY:-0.5}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:30.183,x:83.4,y:-102.5,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:4.6419,x:-124.65,y:206.75,regY:8.1,regX:19.1}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:24.4518,x:-56.15,y:63.15,regX:86.3,regY:-0.5}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:29.6343,x:83.45,y:-102.4,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:4.5559,x:-121.95,y:208.55,regY:8.1,regX:19.1}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:23.9991,x:-54.45,y:64.55,regX:86.4,regY:-0.5}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:29.0853,x:83.45,y:-102.45,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:4.4708,x:-119.25,y:210.45,regY:8.1,regX:19.1}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:23.5458,x:-52.9,y:65.8,regX:86.3,regY:-0.5}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:28.5375,x:83.4,y:-102.5,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:4.3848,x:-116.4,y:212.3,regY:8.1,regX:19.1}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:23.093,x:-51.25,y:67.15,regX:86.4,regY:-0.5}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:27.9878,x:83.45,y:-102.45,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:4.2972,x:-113.65,y:214.2,regY:8.2,regX:19.1}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:22.64,x:-49.7,y:68.35,regX:86.3,regY:-0.5}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:27.4383,x:83.4,y:-102.45,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:4.2112,x:-110.9,y:215.85,regY:8.1,regX:19.1}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:22.1872,x:-48.05,y:69.75,regX:86.3,regY:-0.4}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:26.8908,x:83.45,y:-102.5,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:4.1262,x:-108.1,y:217.55,regY:8.1,regX:19.1}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:21.7348,x:-46.4,y:70.9,regX:86.3,regY:-0.5}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:26.3422,x:83.35,y:-102.45,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:4.0394,x:-105.25,y:219.45,regY:8.2,regX:19.1}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:21.2818,x:-44.7,y:72.1,regX:86.3,regY:-0.5}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:25.7931,x:83.4,y:-102.45,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:3.9535,x:-102.45,y:221,regY:8.1,regX:19.1}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:20.8293,x:-43.1,y:73.5,regX:86.3,regY:-0.4}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:25.2436,x:83.45,y:-102.45,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:3.8676,x:-99.6,y:222.8,regY:8.2,regX:19.1}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:20.3763,x:-41.35,y:74.6,regX:86.3,regY:-0.5}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:24.694,x:83.4,y:-102.4,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:3.7826,x:-96.65,y:224.3,regY:8.1,regX:19.1}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:19.9224,x:-39.65,y:75.8,regX:86.3,regY:-0.5}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:24.1457,x:83.4,y:-102.45,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:3.6968,x:-93.8,y:226.05,regY:8.2,regX:19.1}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:19.471,x:-38,y:76.95,regX:86.3,regY:-0.5}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:23.5973,x:83.4,y:-102.5,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:3.61,x:-90.9,y:227.55,regY:8.1,regX:19.1}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:19.0181,x:-36.25,y:78.05,regX:86.3,regY:-0.5}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:23.049,x:83.4,y:-102.45,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:3.5233,x:-88,y:229.05,regY:8.1,regX:19.1}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:18.5649,x:-34.5,y:79.25,regX:86.3,regY:-0.5}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:22.4996,x:83.45,y:-102.5,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:3.4375,x:-85.15,y:230.75,regY:8.2,regX:19}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:18.1126,x:-32.75,y:80.35,regX:86.3,regY:-0.5}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:21.9513,x:83.5,y:-102.45,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:3.3516,x:-82.05,y:232.1,regY:8.1,regX:19.1}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:17.6596,x:-31,y:81.4,regX:86.3,regY:-0.5}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:21.4026,x:83.45,y:-102.45,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:3.2666,x:-79.15,y:233.75,regY:8.2,regX:19.1}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:17.2067,x:-29.05,y:82.55,regX:86.4,regY:-0.5}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:20.8543,x:83.35,y:-102.5,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:3.1808,x:-76.2,y:235.05,regY:8.1,regX:19.1}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:16.7533,x:-27.4,y:83.55,regX:86.4,regY:-0.5}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:20.3047,x:83.45,y:-102.5,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:3.0941,x:-73.3,y:236.65,regY:8.2,regX:19}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:16.3008,x:-25.7,y:84.6,regX:86.3,regY:-0.5}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:19.7559,x:83.5,y:-102.4,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:3.0083,x:-70.3,y:237.95,regY:8.1,regX:19}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:15.8478,x:-23.9,y:85.6,regX:86.2,regY:-0.5}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:19.207,x:83.4,y:-102.45,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:2.9225,x:-67.2,y:239.3,regY:8.1,regX:19.1}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:15.3948,x:-22.05,y:86.7,regX:86.3,regY:-0.5}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:18.6586,x:83.4,y:-102.45,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:2.8367,x:-64.2,y:240.65,regY:8.1,regX:19.1}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:14.9426,x:-20.3,y:87.65,regX:86.2,regY:-0.5}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:18.1092,x:83.4,y:-102.4,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:2.7501,x:-61.1,y:242,regY:8.1,regX:19.1}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:14.4907,x:-18.35,y:88.7,regX:86.3,regY:-0.5}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:17.5595,x:83.4,y:-102.45,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:2.6634,x:-58,y:243.3,regY:8.1,regX:19.1}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:14.0371,x:-16.65,y:89.65,regX:86.3,regY:-0.5}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:17.0114,x:83.4,y:-102.45,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:2.5776,x:-54.95,y:244.55,regY:8.1,regX:19.1}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:13.5848,x:-14.75,y:90.55,regX:86.3,regY:-0.5}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:16.4631,x:83.45,y:-102.4,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:2.4918,x:-51.85,y:245.95,regY:8.2,regX:19.1}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:13.1311,x:-12.85,y:91.5,regX:86.3,regY:-0.5}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:15.9138,x:83.55,y:-102.35,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:2.4061,x:-48.85,y:247.05,regY:8.1,regX:19.1}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:12.6791,x:-11.05,y:92.4,regX:86.3,regY:-0.5}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:15.3654,x:83.55,y:-102.45,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:2.3194,x:-45.75,y:248.2,regY:8.1,regX:19.1}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:12.2258,x:-9.15,y:93.3,regX:86.3,regY:-0.5}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:14.8167,x:83.55,y:-102.4,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:2.2336,x:-42.6,y:249.4,regY:8.1,regX:19.1}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:11.7719,x:-7.15,y:94.15,regX:86.4,regY:-0.5}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:14.2674,x:83.4,y:-102.45,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:2.1488,x:-39.45,y:250.5,regY:8.1,regX:19.1}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:11.3195,x:-5.4,y:95.1,regX:86.3,regY:-0.5}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:13.7186,x:83.3,y:-102.45,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:2.0622,x:-36.35,y:251.65,regY:8.1,regX:19.1}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:10.8668,x:-3.45,y:95.9,regX:86.3,regY:-0.5}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:13.1693,x:83.35,y:-102.45,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.9765,x:-33.25,y:252.7,regY:8.1,regX:19.1}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:10.4139,x:-1.55,y:96.7,regX:86.3,regY:-0.5}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:12.6212,x:83.35,y:-102.45,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.8907,x:-30.1,y:253.85,regY:8.2,regX:19.1}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:9.961,x:0.5,y:97.6,regX:86.4,regY:-0.5}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:12.0715,x:83.35,y:-102.45,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.805,x:-26.95,y:254.7,regY:8.1,regX:19.1}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:9.5085,x:2.15,y:98.3,regX:86.2,regY:-0.5}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:11.5241,x:83.3,y:-102.45,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.7175,x:-23.8,y:255.75,regY:8.1,regX:19.1}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:9.0548,x:4.1,y:99.1,regX:86.2,regY:-0.5}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:10.9749,x:83.35,y:-102.4,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.6318,x:-20.65,y:256.75,regY:8.1,regX:19.1}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:8.6027,x:5.95,y:99.8,regX:86.2,regY:-0.5}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:10.4259,x:83.35,y:-102.35,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.5461,x:-17.45,y:257.65,regY:8.1,regX:19.1}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:8.1493,x:7.95,y:100.55,regX:86.2,regY:-0.5}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:9.8776,x:83.35,y:-102.4,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.4595,x:-14.25,y:258.6,regY:8.1,regX:19.1}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:7.6973,x:9.9,y:101.3,regX:86.2,regY:-0.5}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:9.3279,x:83.3,y:-102.4,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.3746,x:-11,y:259.45,regY:8.1,regX:19.1}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:7.244,x:11.95,y:102,regX:86.3,regY:-0.5}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:8.7799,x:83.4,y:-102.4,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.2889,x:-7.8,y:260.35,regY:8.1,regX:19.1}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:6.7903,x:13.95,y:102.7,regX:86.3,regY:-0.5}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:8.2309,x:83.35,y:-102.45,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.2023,x:-4.55,y:261.15,regY:8.1,regX:19.1}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:6.3388,x:15.85,y:103.35,regX:86.3,regY:-0.5}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:7.6816,x:83.4,y:-102.45,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.1158,x:-1.35,y:261.9,regY:8.1,regX:19.1}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:5.8851,x:17.9,y:104,regX:86.3,regY:-0.5}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:7.1333,x:83.35,y:-102.4,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.03,x:1.85,y:262.7,regY:8.1,regX:19.1}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:5.4318,x:19.8,y:104.55,regX:86.3,regY:-0.5}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:6.5846,x:83.4,y:-102.45,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:0.9444,x:5.05,y:263.4,regY:8.1,regX:19.1}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:4.9796,x:21.8,y:105.15,regX:86.3,regY:-0.5}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:6.0356,x:83.35,y:-102.4,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:0.8587,x:8.3,y:264.15,regY:8.1,regX:19.1}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:4.5277,x:23.8,y:105.75,regX:86.3,regY:-0.5}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:5.4864,x:83.35,y:-102.4,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:0.7721,x:11.55,y:264.8,regY:8.1,regX:19.1}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:4.0735,x:25.8,y:106.3,regX:86.3,regY:-0.5}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:4.9376,x:83.3,y:-102.4,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:0.6855,x:14.8,y:265.5,regY:8.1,regX:19.1}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:3.6205,x:27.85,y:106.9,regX:86.3,regY:-0.5}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:4.3884,x:83.4,y:-102.4,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:0.6007,x:18.05,y:266.1,regY:8.1,regX:19.1}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:3.1676,x:29.75,y:107.35,regX:86.2,regY:-0.5}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:3.8397,x:83.35,y:-102.4,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:0.515,x:21.25,y:266.65,regY:8.1,regX:19.1}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:2.715,x:31.85,y:107.9,regX:86.3,regY:-0.5}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:3.2912,x:83.35,y:-102.45,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:0.4276,x:24.5,y:267.25,regY:8.1,regX:19.1}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:2.2625,x:33.7,y:108.4,regX:86.2,regY:-0.5}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:2.7422,x:83.35,y:-102.35,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:0.3428,x:27.75,y:267.75,regY:8.1,regX:19.1}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.8093,x:35.85,y:108.85,regX:86.3,regY:-0.5}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:2.1935,x:83.35,y:-102.45,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:0.2571,x:31.05,y:268.3,regY:8.1,regX:19.1}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.3562,x:37.75,y:109.3,regX:86.2,regY:-0.5}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.6449,x:83.35,y:-102.35,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:0.1696,x:34.35,y:268.75,regY:8.1,regX:19.1}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:0.9032,x:39.95,y:109.7,regX:86.3,regY:-0.5}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.0957,x:83.35,y:-102.4,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:0.0848,x:37.65,y:269.25,regY:8.1,regX:19.1}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:0.4512,x:42,y:110.15,regX:86.3,regY:-0.5}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:0.5465,x:83.35,y:-102.35,regX:39.4}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9999,scaleY:0.9999,rotation:0.0009,x:40.95,y:269.65,regY:8.1,regX:19.1}},{t:this.ikNode_2,p:{scaleX:0.9999,scaleY:0.9999,rotation:0,x:44,y:110.5,regX:86.3,regY:-0.5}},{t:this.ikNode_1,p:{scaleX:0.9999,scaleY:0.9999,rotation:0,x:83.35,y:-102.45,regX:39.4}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-212.4,-123.4,336.6,504);


(lib.大 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 大灯笼
	this.ikNode_1 = new lib.吊绳();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(83.45,-102.35,1,1,0,0,0,39.4,0);

	this.ikNode_2 = new lib.本体();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(44.1,110.55,1,1,0,0,0,86.4,-0.5);

	this.ikNode_4 = new lib.下线();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(41,269.7,1,1,0,0,0,19.1,8.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_4,p:{rotation:0,x:41,y:269.7,regX:19.1}},{t:this.ikNode_2,p:{rotation:0,x:44.1,y:110.55}},{t:this.ikNode_1,p:{rotation:0,x:83.45,y:-102.35,regX:39.4,regY:0}}]}).to({state:[{t:this.ikNode_4,p:{rotation:-0.0061,x:47.1,y:270.65,regX:19.1}},{t:this.ikNode_2,p:{rotation:-0.0061,x:50.3,y:111.55}},{t:this.ikNode_1,p:{rotation:-1.6517,x:83.4,y:-102.35,regX:39.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.0122,x:53.3,y:271.55,regX:19.1}},{t:this.ikNode_2,p:{rotation:-0.0122,x:56.45,y:112.4}},{t:this.ikNode_1,p:{rotation:-3.3049,x:83.4,y:-102.3,regX:39.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.0175,x:59.5,y:272.25,regX:19.1}},{t:this.ikNode_2,p:{rotation:-0.0175,x:62.65,y:113.05}},{t:this.ikNode_1,p:{rotation:-4.9572,x:83.35,y:-102.3,regX:39.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.0236,x:65.75,y:272.75,regX:19.1}},{t:this.ikNode_2,p:{rotation:-0.0236,x:68.9,y:113.6}},{t:this.ikNode_1,p:{rotation:-6.6101,x:83.35,y:-102.35,regX:39.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.0297,x:72,y:273.1,regX:19.1}},{t:this.ikNode_2,p:{rotation:-0.0297,x:75.1,y:113.9}},{t:this.ikNode_1,p:{rotation:-8.2625,x:83.35,y:-102.3,regX:39.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.0367,x:78.25,y:273.25,regX:19.1}},{t:this.ikNode_2,p:{rotation:-0.0367,x:81.35,y:114.1}},{t:this.ikNode_1,p:{rotation:-9.9155,x:83.35,y:-102.35,regX:39.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.0428,x:84.5,y:273.2,regX:19.1}},{t:this.ikNode_2,p:{rotation:-0.0428,x:87.5,y:114.05}},{t:this.ikNode_1,p:{rotation:-11.5682,x:83.35,y:-102.3,regX:39.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.049,x:90.75,y:273,regX:19.1}},{t:this.ikNode_2,p:{rotation:-0.049,x:93.75,y:113.85}},{t:this.ikNode_1,p:{rotation:-13.2205,x:83.35,y:-102.3,regX:39.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.0542,x:97,y:272.6,regX:19.1}},{t:this.ikNode_2,p:{rotation:-0.0542,x:99.95,y:113.45}},{t:this.ikNode_1,p:{rotation:-14.8734,x:83.35,y:-102.3,regX:39.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.0603,x:103.25,y:272.05,regX:19.1}},{t:this.ikNode_2,p:{rotation:-0.0603,x:106.2,y:112.9}},{t:this.ikNode_1,p:{rotation:-16.5256,x:83.3,y:-102.3,regX:39.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.0673,x:109.45,y:271.3,regX:19.1}},{t:this.ikNode_2,p:{rotation:-0.0673,x:112.4,y:112.15}},{t:this.ikNode_1,p:{rotation:-18.1778,x:83.35,y:-102.35,regX:39.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.0734,x:115.65,y:270.4,regX:19.1}},{t:this.ikNode_2,p:{rotation:-0.0734,x:118.55,y:111.2}},{t:this.ikNode_1,p:{rotation:-19.8313,x:83.3,y:-102.3,regX:39.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.0796,x:121.8,y:269.3,regX:19.1}},{t:this.ikNode_2,p:{rotation:-0.0796,x:124.7,y:110.2}},{t:this.ikNode_1,p:{rotation:-21.4834,x:83.3,y:-102.35,regX:39.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.0848,x:127.95,y:268,regX:19.1}},{t:this.ikNode_2,p:{rotation:-0.0848,x:130.8,y:108.85}},{t:this.ikNode_1,p:{rotation:-23.136,x:83.35,y:-102.35,regX:39.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.0909,x:134,y:266.55,regX:19.1}},{t:this.ikNode_2,p:{rotation:-0.0909,x:136.9,y:107.4}},{t:this.ikNode_1,p:{rotation:-24.7885,x:83.3,y:-102.3,regX:39.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.0979,x:140.05,y:264.9,regX:19.1}},{t:this.ikNode_2,p:{rotation:-0.0979,x:142.9,y:105.8}},{t:this.ikNode_1,p:{rotation:-26.4415,x:83.35,y:-102.35,regX:39.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.104,x:146.05,y:263.1,regX:19.1}},{t:this.ikNode_2,p:{rotation:-0.104,x:148.9,y:104}},{t:this.ikNode_1,p:{rotation:-28.094,x:83.3,y:-102.3,regX:39.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.1102,x:152,y:261.15,regX:19.1}},{t:this.ikNode_2,p:{rotation:-0.1102,x:154.8,y:102}},{t:this.ikNode_1,p:{rotation:-29.7462,x:83.3,y:-102.3,regX:39.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.1154,x:157.85,y:259,regX:19.1}},{t:this.ikNode_2,p:{rotation:-0.1154,x:160.65,y:99.9}},{t:this.ikNode_1,p:{rotation:-31.3995,x:83.4,y:-102.4,regX:39.5,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.1215,x:163.7,y:256.7,regX:19.1}},{t:this.ikNode_2,p:{rotation:-0.1215,x:166.45,y:97.55}},{t:this.ikNode_1,p:{rotation:-33.0521,x:83.3,y:-102.35,regX:39.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.1276,x:169.4,y:254.2,regX:19.1}},{t:this.ikNode_2,p:{rotation:-0.1276,x:172.2,y:95.05}},{t:this.ikNode_1,p:{rotation:-34.7042,x:83.3,y:-102.35,regX:39.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.1346,x:175.1,y:251.55,regX:19.1}},{t:this.ikNode_2,p:{rotation:-0.1346,x:177.85,y:92.4}},{t:this.ikNode_1,p:{rotation:-36.3569,x:83.3,y:-102.3,regX:39.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.1408,x:180.7,y:248.75,regX:19.1}},{t:this.ikNode_2,p:{rotation:-0.1408,x:183.45,y:89.65}},{t:this.ikNode_1,p:{rotation:-38.0093,x:83.3,y:-102.3,regX:39.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.1469,x:186.2,y:245.8,regX:19.1}},{t:this.ikNode_2,p:{rotation:-0.1469,x:188.9,y:86.65}},{t:this.ikNode_1,p:{rotation:-39.6627,x:83.3,y:-102.3,regX:39.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.1521,x:191.6,y:242.7,regX:19.1}},{t:this.ikNode_2,p:{rotation:-0.1521,x:194.3,y:83.5}},{t:this.ikNode_1,p:{rotation:-41.3148,x:83.3,y:-102.3,regX:39.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.1582,x:196.95,y:239.4,regX:19.1}},{t:this.ikNode_2,p:{rotation:-0.1582,x:199.65,y:80.25}},{t:this.ikNode_1,p:{rotation:-42.9675,x:83.3,y:-102.3,regX:39.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.1652,x:202.15,y:236,regX:19.1}},{t:this.ikNode_2,p:{rotation:-0.1652,x:204.85,y:76.8}},{t:this.ikNode_1,p:{rotation:-44.6198,x:83.3,y:-102.3,regX:39.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.1714,x:207.3,y:232.4,regX:19.1}},{t:this.ikNode_2,p:{rotation:-0.1714,x:209.95,y:73.25}},{t:this.ikNode_1,p:{rotation:-46.2724,x:83.35,y:-102.25,regX:39.4,regY:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.1775,x:212.4,y:228.65,regX:19.2}},{t:this.ikNode_2,p:{rotation:-0.1775,x:214.95,y:69.55}},{t:this.ikNode_1,p:{rotation:-47.9254,x:83.25,y:-102.3,regX:39.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.1714,x:207.45,y:232.3,regX:19.1}},{t:this.ikNode_2,p:{rotation:-0.1714,x:210.15,y:73.1}},{t:this.ikNode_1,p:{rotation:-46.328,x:83.25,y:-102.3,regX:39.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.1652,x:202.5,y:235.75,regX:19.1}},{t:this.ikNode_2,p:{rotation:-0.1652,x:205.2,y:76.6}},{t:this.ikNode_1,p:{rotation:-44.7305,x:83.3,y:-102.35,regX:39.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.1591,x:197.45,y:239.05,regX:19.1}},{t:this.ikNode_2,p:{rotation:-0.1591,x:200.15,y:79.9}},{t:this.ikNode_1,p:{rotation:-43.1327,x:83.3,y:-102.35,regX:39.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.153,x:192.35,y:242.25,regX:19.1}},{t:this.ikNode_2,p:{rotation:-0.153,x:195.05,y:83.1}},{t:this.ikNode_1,p:{rotation:-41.5353,x:83.3,y:-102.3,regX:39.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.1478,x:187.1,y:245.3,regX:19.1}},{t:this.ikNode_2,p:{rotation:-0.1478,x:189.85,y:86.15}},{t:this.ikNode_1,p:{rotation:-39.9378,x:83.3,y:-102.35,regX:39.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.1416,x:181.8,y:248.2,regX:19.1}},{t:this.ikNode_2,p:{rotation:-0.1416,x:184.55,y:89.05}},{t:this.ikNode_1,p:{rotation:-38.3406,x:83.3,y:-102.35,regX:39.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.1355,x:176.4,y:250.95,regX:19.1}},{t:this.ikNode_2,p:{rotation:-0.1355,x:179.15,y:91.8}},{t:this.ikNode_1,p:{rotation:-36.7431,x:83.3,y:-102.3,regX:39.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.1294,x:170.95,y:253.55,regX:19.1}},{t:this.ikNode_2,p:{rotation:-0.1294,x:173.7,y:94.35}},{t:this.ikNode_1,p:{rotation:-35.1449,x:83.25,y:-102.45,regX:39.4,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.1241,x:165.4,y:255.95,regX:19.1}},{t:this.ikNode_2,p:{rotation:-0.1241,x:168.2,y:96.8}},{t:this.ikNode_1,p:{rotation:-33.5477,x:83.35,y:-102.2,regX:39.4,regY:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.118,x:159.8,y:258.25,regX:19.1}},{t:this.ikNode_2,p:{rotation:-0.118,x:162.6,y:99.1}},{t:this.ikNode_1,p:{rotation:-31.9502,x:83.35,y:-102.3,regX:39.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.1119,x:154.15,y:260.4,regX:19.1}},{t:this.ikNode_2,p:{rotation:-0.1119,x:156.95,y:101.25}},{t:this.ikNode_1,p:{rotation:-30.3522,x:83.3,y:-102.3,regX:39.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.1058,x:148.45,y:262.35,regX:19.1}},{t:this.ikNode_2,p:{rotation:-0.1058,x:151.25,y:103.2}},{t:this.ikNode_1,p:{rotation:-28.7551,x:83.3,y:-102.3,regX:39.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.1005,x:142.65,y:264.15,regX:19.1}},{t:this.ikNode_2,p:{rotation:-0.1005,x:145.5,y:105.05}},{t:this.ikNode_1,p:{rotation:-27.1578,x:83.3,y:-102.35,regX:39.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.0944,x:136.85,y:265.8,regX:19.1}},{t:this.ikNode_2,p:{rotation:-0.0944,x:139.7,y:106.65}},{t:this.ikNode_1,p:{rotation:-25.5602,x:83.35,y:-102.3,regX:39.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.0883,x:131,y:267.3,regX:19.1}},{t:this.ikNode_2,p:{rotation:-0.0883,x:133.85,y:108.15}},{t:this.ikNode_1,p:{rotation:-23.9621,x:83.3,y:-102.3,regX:39.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.0822,x:125.1,y:268.65,regX:19.1}},{t:this.ikNode_2,p:{rotation:-0.0822,x:127.95,y:109.5}},{t:this.ikNode_1,p:{rotation:-22.3644,x:83.35,y:-102.35,regX:39.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.0761,x:119.15,y:269.75,regX:19.1}},{t:this.ikNode_2,p:{rotation:-0.0761,x:122.05,y:110.6}},{t:this.ikNode_1,p:{rotation:-20.7673,x:83.35,y:-102.3,regX:39.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.0708,x:113.15,y:270.8,regX:19.1}},{t:this.ikNode_2,p:{rotation:-0.0708,x:116.1,y:111.6}},{t:this.ikNode_1,p:{rotation:-19.1701,x:83.3,y:-102.35,regX:39.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.0647,x:107.2,y:271.6,regX:19.1}},{t:this.ikNode_2,p:{rotation:-0.0647,x:110.1,y:112.45}},{t:this.ikNode_1,p:{rotation:-17.5726,x:83.35,y:-102.35,regX:39.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.0586,x:101.15,y:272.25,regX:19.1}},{t:this.ikNode_2,p:{rotation:-0.0586,x:104.1,y:113.1}},{t:this.ikNode_1,p:{rotation:-15.9745,x:83.35,y:-102.35,regX:39.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.0525,x:95.15,y:272.75,regX:19.1}},{t:this.ikNode_2,p:{rotation:-0.0525,x:98.1,y:113.55}},{t:this.ikNode_1,p:{rotation:-14.3774,x:83.35,y:-102.35,regX:39.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.0472,x:89.1,y:273.1,regX:19.1}},{t:this.ikNode_2,p:{rotation:-0.0472,x:92.1,y:113.95}},{t:this.ikNode_1,p:{rotation:-12.78,x:83.3,y:-102.3,regX:39.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.0411,x:83.05,y:273.25,regX:19.1}},{t:this.ikNode_2,p:{rotation:-0.0411,x:86.15,y:114.1}},{t:this.ikNode_1,p:{rotation:-11.182,x:83.35,y:-102.35,regX:39.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.035,x:77,y:273.25,regX:19.1}},{t:this.ikNode_2,p:{rotation:-0.035,x:80.1,y:114.05}},{t:this.ikNode_1,p:{rotation:-9.5846,x:83.35,y:-102.3,regX:39.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.0289,x:70.95,y:273.05,regX:19.1}},{t:this.ikNode_2,p:{rotation:-0.0289,x:74.1,y:113.9}},{t:this.ikNode_1,p:{rotation:-7.9869,x:83.35,y:-102.3,regX:39.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.0236,x:64.9,y:272.7,regX:19.1}},{t:this.ikNode_2,p:{rotation:-0.0236,x:68.05,y:113.5}},{t:this.ikNode_1,p:{rotation:-6.3893,x:83.35,y:-102.35,regX:39.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.0175,x:58.9,y:272.2,regX:19.1}},{t:this.ikNode_2,p:{rotation:-0.0175,x:62.05,y:113}},{t:this.ikNode_1,p:{rotation:-4.7922,x:83.35,y:-102.35,regX:39.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.0114,x:52.9,y:271.5,regX:19.1}},{t:this.ikNode_2,p:{rotation:-0.0114,x:56.05,y:112.35}},{t:this.ikNode_1,p:{rotation:-3.1945,x:83.4,y:-102.35,regX:39.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.0052,x:46.9,y:270.65,regX:19.1}},{t:this.ikNode_2,p:{rotation:-0.0052,x:50.05,y:111.5}},{t:this.ikNode_1,p:{rotation:-1.5975,x:83.4,y:-102.35,regX:39.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0,x:41,y:269.7,regX:19.1}},{t:this.ikNode_2,p:{rotation:0,x:44.1,y:110.55}},{t:this.ikNode_1,p:{rotation:0,x:83.45,y:-102.35,regX:39.4,regY:0}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.3,-102.4,337.90000000000003,486.6);


// stage content:
(lib._1212 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 底稿顏色
	this.instance = new lib.xiao();
	this.instance.setTransform(182.1,322,0.3118,0.2767,45,0,0,139.8,129.9);

	this.instance_1 = new lib.中();
	this.instance_1.setTransform(382,357.15,0.6079,0.6119,-49.4405,0,0,-64.5,93.2);

	this.instance_2 = new lib.大();
	this.instance_2.setTransform(247,380.95,1,1,0,0,0,41,139);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5F3F2").s().p("EgruAs5MAAAhZxMBXdAAAMAAABZxg");
	this.shape.setTransform(279.925,287.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(279.5,287.8,280.4,334.8);
// library properties:
lib.properties = {
	id: '140863B57BB35244B87F97027809ED39',
	width: 559,
	height: 575,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/1212_atlas_1.png", id:"1212_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['140863B57BB35244B87F97027809ED39'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;