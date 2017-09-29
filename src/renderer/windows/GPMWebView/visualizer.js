/* eslint-disable */
//Greyson Flippo
//Ac130veterans@gmail.com
//6-6-2016

var showMenu = 0;

var site="";
var uiDis=0;
var uiColor="#FF5722";

var multiplier = 10;
var autoMultiplier = 0;
var fftUni = 8192;

setTimeout(loaded,100);

function loaded(){
var url1 = window.location.href.substring(0, 24);

//window.location.href.substring(0, 29)=="https://www.youtube.com/watch"

//if(window.location.href.substring(0, 29) == "https://www.youtube.com/watch"){site="youtube";uiDis=-90;uiColor="#FF0000";}
site="playMusic";multiplier = 13;

//CREATES MAIN BUTTON
var bttn1 = document.createElement( 'img' );
document.body.appendChild( bttn1 );
bttn1.id = 'addModButton';
document.getElementById('addModButton').style.position='fixed';
document.getElementById('addModButton').style.width='60px';
document.getElementById('addModButton').style.height='60px';
document.getElementById('addModButton').style.right='40px';
document.getElementById('addModButton').style.bottom=110+uiDis+'px';
document.getElementById('addModButton').style.zIndex='1600';
document.getElementById('addModButton').style.borderRadius="50%";
document.getElementById('addModButton').style.backgroundColor=uiColor;
document.getElementById('addModButton').style.boxShadow='0 3px 6px rgba(0,0,0,0.3)';
document.getElementById('addModButton').style.cursor='pointer';
document.getElementById('addModButton').addEventListener("click", showMods);

var menu1 = document.createElement( 'div' );
document.body.appendChild( menu1 );
menu1.id = 'vizMenu';
document.getElementById('vizMenu').style.position='fixed';
document.getElementById('vizMenu').style.right='-402px';
document.getElementById('vizMenu').style.top='64px';
document.getElementById('vizMenu').style.width='400px';
document.getElementById('vizMenu').style.zIndex='1599';
document.getElementById('vizMenu').style.backgroundColor='#ffffff';
document.getElementById('vizMenu').style.borderLeft='2px solid #eeeeee';
document.getElementById('vizMenu').style.borderBottom='1px solid #eeeeee';
document.getElementById('vizMenu').style.height=window.innerHeight-65-90-uiDis+'px';//another copy of this line when the menu opens
document.getElementById('vizMenu').style.transition='right .5s';
document.getElementById('vizMenu').style.overflowY='scroll';
document.getElementById('vizMenu').style.overflowX='hidden';

//items in the menu
var menu1Title = document.createElement( 'p' );
document.getElementById('vizMenu').appendChild( menu1Title );
menu1Title.id = 'menuTitle';
document.getElementById('menuTitle').style.width='360px';
document.getElementById('menuTitle').style.padding='20px';
document.getElementById('menuTitle').style.fontSize='40px';
document.getElementById('menuTitle').style.marginTop='10px';
document.getElementById('menuTitle').style.fontFamily='sans-serif';
document.getElementById('menuTitle').style.textAlign='center';
document.getElementById('menuTitle').style.color='#888888';
document.getElementById('menuTitle').innerHTML='Visualizer Menu';

var menu1Option1 = document.createElement( 'p' );
document.getElementById('vizMenu').appendChild( menu1Option1 );
menu1Option1.id = 'Option1';
document.getElementById('Option1').style.width='360px';
document.getElementById('Option1').style.padding='50px';
document.getElementById('Option1').style.fontSize='23px';
document.getElementById('Option1').style.marginTop='-40px';
document.getElementById('Option1').style.fontFamily='sans-serif';
document.getElementById('Option1').style.textAlign='left';
document.getElementById('Option1').style.color='#aaaaaa';
document.getElementById('Option1').innerHTML='Visualizer Type';

var vizOption1 = document.createElement( 'p' );
document.getElementById('vizMenu').appendChild( vizOption1 );
vizOption1.id = 'vizOption1';
document.getElementById('vizOption1').style.width='400px';
document.getElementById('vizOption1').style.fontSize='20px';
document.getElementById('vizOption1').style.marginTop='-30px';
document.getElementById('vizOption1').style.marginBottom=20+'px';
document.getElementById('vizOption1').style.fontFamily='sans-serif';
document.getElementById('vizOption1').style.textAlign='center';
document.getElementById('vizOption1').style.color='#FF5722';
document.getElementById('vizOption1').style.cursor='pointer';
document.getElementById('vizOption1').innerHTML='Off';
document.getElementById('vizOption1').addEventListener("click", turnOff);

var vizOption2 = document.createElement( 'p' );
document.getElementById('vizMenu').appendChild( vizOption2 );
vizOption2.id = 'vizOption2';
document.getElementById('vizOption2').style.width='400px';
document.getElementById('vizOption2').style.fontSize='20px';
document.getElementById('vizOption2').style.marginTop='0px';
document.getElementById('vizOption2').style.marginBottom=20+'px';
document.getElementById('vizOption2').style.fontFamily='sans-serif';
document.getElementById('vizOption2').style.textAlign='center';
document.getElementById('vizOption2').style.color='#aaaaaa';
document.getElementById('vizOption2').style.cursor='pointer';
document.getElementById('vizOption2').style.zIndex='12';
document.getElementById('vizOption2').innerHTML='Bars';
document.getElementById('vizOption2').addEventListener("click", showBarsV);

var vizOption3 = document.createElement( 'p' );
document.getElementById('vizMenu').appendChild( vizOption3 );
vizOption3.id = 'vizOption3';
document.getElementById('vizOption3').style.width='400px';
document.getElementById('vizOption3').style.fontSize='20px';
document.getElementById('vizOption3').style.marginTop='0px';
document.getElementById('vizOption3').style.marginBottom=20+'px';
document.getElementById('vizOption3').style.fontFamily='sans-serif';
document.getElementById('vizOption3').style.textAlign='center';
document.getElementById('vizOption3').style.color='#aaaaaa';
document.getElementById('vizOption3').style.cursor='pointer';
document.getElementById('vizOption3').innerHTML='Wave';
document.getElementById('vizOption3').addEventListener("click", showWaveV);

var menu1Tip = document.createElement( 'p' );
document.getElementById('vizMenu').appendChild( menu1Tip );
menu1Tip.id = 'menu1Tip';
document.getElementById('menu1Tip').style.width='300px';
document.getElementById('menu1Tip').style.padding='50px';
document.getElementById('menu1Tip').style.fontSize='15px';
document.getElementById('menu1Tip').style.marginTop='-50px';
document.getElementById('menu1Tip').style.fontFamily='sans-serif';
document.getElementById('menu1Tip').style.textAlign='left';
document.getElementById('menu1Tip').style.color='#aaaaaa';
document.getElementById('menu1Tip').innerHTML='*tip - press the ESC key on your keyboard to cycle through visualizer types at any time.';


var menu1Option2 = document.createElement( 'p' );
document.getElementById('vizMenu').appendChild( menu1Option2 );
menu1Option2.id = 'Option2';
document.getElementById('Option2').style.width='360px';
document.getElementById('Option2').style.padding='50px';
document.getElementById('Option2').style.fontSize='23px';
document.getElementById('Option2').style.marginTop='-40px';
document.getElementById('Option2').style.fontFamily='sans-serif';
document.getElementById('Option2').style.textAlign='left';
document.getElementById('Option2').style.color='#aaaaaa';
document.getElementById('Option2').innerHTML='Height Multiplier';

var multN = document.createElement( 'p' );
document.getElementById('vizMenu').appendChild( multN );
multN.id = 'multN';
document.getElementById('multN').style.width='400px';
document.getElementById('multN').style.fontSize='20px';
document.getElementById('multN').style.marginTop='-30px';
document.getElementById('multN').style.marginBottom=20+'px';
document.getElementById('multN').style.fontFamily='sans-serif';
document.getElementById('multN').style.textAlign='center';
document.getElementById('multN').style.color='#FF5722';
document.getElementById('multN').innerHTML=multiplier/10;

var multM = document.createElement( 'p' );
document.getElementById('vizMenu').appendChild( multM );
multM.id = 'multM';
document.getElementById('multM').style.width='300px';
document.getElementById('multM').style.fontSize='20px';
document.getElementById('multM').style.marginTop='-44px';
document.getElementById('multM').style.marginBottom=20+'px';
document.getElementById('multM').style.fontFamily='sans-serif';
document.getElementById('multM').style.textAlign='center';
document.getElementById('multM').style.color='#aaaaaa';
document.getElementById('multM').style.cursor='pointer';
document.getElementById('multM').innerHTML="&#8592;";
document.getElementById('multM').addEventListener("click", multiplierM);

var multP = document.createElement( 'p' );
document.getElementById('vizMenu').appendChild( multP );
multP.id = 'multP';
document.getElementById('multP').style.width='300px';
document.getElementById('multP').style.fontSize='20px';
document.getElementById('multP').style.marginTop='-42px';
document.getElementById('multP').style.marginLeft='100px';
document.getElementById('multP').style.marginBottom=20+'px';
document.getElementById('multP').style.fontFamily='sans-serif';
document.getElementById('multP').style.textAlign='center';
document.getElementById('multP').style.color='#aaaaaa';
document.getElementById('multP').style.cursor='pointer';
document.getElementById('multP').innerHTML="&#8594;";
document.getElementById('multP').addEventListener("click", multiplierP);

var multA = document.createElement( 'p' );
document.getElementById('vizMenu').appendChild( multA );
multA.id = 'multA';
document.getElementById('multA').style.width='400px';
document.getElementById('multA').style.fontSize='20px';
document.getElementById('multA').style.marginTop='0px';
document.getElementById('multA').style.marginBottom=20+'px';
document.getElementById('multA').style.fontFamily='sans-serif';
document.getElementById('multA').style.textAlign='center';
document.getElementById('multA').style.color='#aaaaaa';
document.getElementById('multA').innerHTML="Auto Multiply";
document.getElementById('multA').addEventListener("click", multiplierA);
}


function showMods()
{
document.getElementById('addModButton').style.width='56px';
document.getElementById('addModButton').style.height='56px';
document.getElementById('addModButton').style.right='42px';
document.getElementById('addModButton').style.bottom=112+uiDis+'px';
document.getElementById('addModButton').style.boxShadow='0 3px 6px rgba(0,0,0,0.4)';
setTimeout(function(){document.getElementById('addModButton').style.width='60px';document.getElementById('addModButton').style.height='60px';document.getElementById('addModButton').style.right='40px';document.getElementById('addModButton').style.bottom=110+uiDis+'px';document.getElementById('addModButton').style.boxShadow='0 3px 6px rgba(0,0,0,0.3)';},100);

if(showMenu == 0)
{
showMenu = 1;
document.getElementById('vizMenu').style.height=window.innerHeight-65-90-uiDis+'px';//another copy above when the menu is made
document.getElementById('vizMenu').style.right='0px';
}

else
{
showMenu = 0;
document.getElementById('vizMenu').style.right='-402px';
}

}

var barWidth=15;
var barAmnt=0;
var vizReady=0;
var barSpacing = 2;


var vizInit = 0;
var vizShow = 0;

var tempWid = window.innerHeight;
var i;

function showViz()
{
if(vizShow == 0)
{
getAudioId();
vizShow = 1;
}

else if(vizShow == 1)
{
for(i=0; i<barAmnt; i++)
{
 document.getElementById('bar'+i).style.display='none';
 vizShow = 2;
}
document.getElementById('canvas1').style.display='block';
document.getElementById('vizOption1').style.color='#aaaaaa';
document.getElementById('vizOption2').style.color='#aaaaaa';
document.getElementById('vizOption3').style.color='#FF5722';
}

else if(vizShow==2)
{
for(i=0; i<barAmnt; i++)
{
 document.getElementById('bar'+i).style.display='none';
}
document.getElementById('canvas1').style.display='none';
document.getElementById('vizOption1').style.color='#ff5722';
document.getElementById('vizOption2').style.color='#aaaaaa';
document.getElementById('vizOption3').style.color='#aaaaaa';
vizShow = 3;
}

else if(vizShow==3)
{
document.getElementById('canvas1').style.display='none';
for(i=0; i<barAmnt; i++)
{
 document.getElementById('bar'+i).style.display='block';
 vizShow = 1;
}
document.getElementById('vizOption1').style.color='#aaaaaa';
document.getElementById('vizOption2').style.color='#ff5722';
document.getElementById('vizOption3').style.color='#aaaaaa';
}
}

function turnOff()
{
if(vizShow == 0)
{
getAudioId();
}
vizShow = 2;
showViz();
}

function showBarsV()
{
if(vizShow == 0)
{
getAudioId();
}
vizShow = 3;
showViz();
}

function showWaveV()
{
if(vizShow == 0)
{
getAudioId();
}
vizShow = 1;
showViz();
}

var sources = 1;

function getAudioId()
{

//gives audio tag an id to work with
if(site=="playMusic"){
sources = document.getElementsByTagName('audio').length;
//console.log(sources + "audio sources detected");
for(i=0;i<sources;i++)
{
 document.body.getElementsByTagName('audio')[i].id="audioSource"+i;
}
}
else if(site=="youtube"){document.body.getElementsByTagName('video')[0].id="audioSource0";}
else{document.body.getElementsByTagName('audio')[0].id="audioSource0";}

createAudioSource(sources);

//creates canvas
var can1=document.createElement('canvas');
can1.setAttribute("id", "canvas1");
document.body.appendChild(can1);
document.getElementById('canvas1').style.zIndex='1502';
document.getElementById('canvas1').style.position='fixed';
document.getElementById('canvas1').style.top='0px';
document.getElementById('canvas1').style.left='0px';
document.getElementById('canvas1').setAttribute('width', window.innerWidth);
document.getElementById('canvas1').setAttribute('height', window.innerHeight-90-uiDis);
document.getElementById('canvas1').style.display="none";


//creates the visualizer bars
tempWid=window.innerWidth;
drawBars();


vizReady=barAmnt;


barVis();
waveVis();
}


var audioCtx0;
var audio0;
var source0;
var analyser0;
var frequencyData0;

var audioCtx1;
var audio1;
var source1;
var analyser1;
var frequencyData1;

var audioCtx2;
var audio2;
var source2;
var analyser2;
var frequencyData2;

var audioCtx3;
var audio3;
var source3;
var analyser3;
var frequencyData3;

var audioCtx4;
var audio4;
var source4;
var analyser4;
var frequencyData4;

var bufferLength;
var bufferLength0;
var bufferLength1;
var bufferLength2;
var bufferLength3;
var bufferLength4;
var bufferLength5;

var dataArray;
var dataArray0;
var dataArray1;
var dataArray2;
var dataArray3;
var dataArray4;
var dataArray5;

function createAudioSource(num)
{
for(i=0;i<num;i++)
{
eval("audioCtx"+i+" = new AudioContext();analyser"+i+" = audioCtx"+i+".createAnalyser();analyser"+i+".smoothingTimeConstant = .8;audio"+i+" = document.getElementById('audioSource'+"+i+");source"+i+" =  audioCtx"+i+".createMediaElementSource(audio"+i+");source"+i+".connect(analyser"+i+");analyser"+i+".connect(audioCtx"+i+".destination);analyser"+i+".fftSize = "+fftUni+";frequencyData"+i+" = new Uint8Array(analyser"+i+".frequencyBinCount);bufferLength"+i+" = analyser"+i+".frequencyBinCount;dataArray"+i+" = new Uint8Array(bufferLength"+i+");");
}
getActiveSource();
}


var currentSource = 0;
function getActiveSource()
{

for(i=0;i<sources;i++)
{
eval("analyser"+i+".getByteFrequencyData(frequencyData"+i+")");
if(eval("frequencyData"+i+"[10]")!=0)
 currentSource = i;
}
//console.log(currentSource+"Current Source");
//setTimeout(getActiveSource,200);
}

function evalInContext(js, context) {
    //# Return the results of the in-line anonymous function we .call with the passed context
    return eval(js);
}


//uses the data to change the height of the bars




function barVis()
{
evalInContext("analyser"+currentSource+".getByteFrequencyData(frequencyData"+currentSource+")", this);
var freqData = evalInContext("frequencyData"+currentSource, this);

var j = 0;
var avg = 0;
for(j=0;j<barAmnt;j++)
{
if(vizReady==barAmnt)
{
 var pop=((freqData[j+3]*freqData[j+3]*((freqData[j+3]+1)/2)/8323200)) * ((window.innerHeight-100)*.5)*multiplier/10;
 document.getElementById('bar'+j).style.height=pop + 'px';
 avg += pop;
}
}
avg = avg / barAmnt;

vizInit=1;

if(avg==0)
{
getActiveSource();
}

else if(avg<window.innerHeight*0.3 && autoMultiplier == 1)
{
multiplierP2();
}

else if(autoMultiplier == 1)
{
multiplierM2();
}

if(window.innerWidth!=tempWid)
{
drawBars();
tempWid=window.innerWidth;
}

setTimeout(barVis,1);
}


var red = 255;
var green = 0;
var blue = 0;

function waveVis()
{
var c = document.getElementById('canvas1');
var canvasCtx = c.getContext("2d");
var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight-90-uiDis;


function draw() {
if(site=="youtube"){document.getElementById("content").onload=function(){console.log("update");}}
if(red == 255)
{
if(blue > 0){blue--;}
else{green++}
}

if(green == 255)
{
if(red > 0){red--;}
else{blue++}
}

if(blue == 255)
{
if(green > 0){green--;}
else{red++;}
}

WIDTH = window.innerWidth;
HEIGHT = window.innerHeight-90-uiDis;
var drawVisual = setTimeout(function(){requestAnimationFrame(draw)},16);
evalInContext("analyser"+currentSource+".getByteTimeDomainData(dataArray"+currentSource+")", this);
canvasCtx.width=WIDTH;
canvasCtx.height=HEIGHT;
document.getElementById('canvas1').setAttribute('width', window.innerWidth);
document.getElementById('canvas1').setAttribute('height', window.innerHeight-90-uiDis);
canvasCtx.fillStyle = 'rgba(0, 0, 0, 1)';
canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
canvasCtx.lineWidth = 3;
canvasCtx.strokeStyle = 'rgb('+red+','+green+','+blue+')';
canvasCtx.beginPath();
var sliceWidth = WIDTH * 1.0 / bufferLength0 + 1;
var x = 0;
for(var i = 0; i < bufferLength0; i++)
{
var v = evalInContext("dataArray"+currentSource+"[i]", this) / 128.0;
var y = v * HEIGHT/2;
if(i === 0)
{
 canvasCtx.moveTo(x, y);
}
else
{
 canvasCtx.lineTo(x, y);
}
x += sliceWidth;
}
canvasCtx.lineTo(window.innerWidth, window.innerHeight/2);
canvasCtx.stroke();
//setTimeout(function(){canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);},32);
};
draw();
}


function drawBars()
{
var barAmntTemp=0;
for(i=0;i<window.innerWidth;i+=(barWidth+barSpacing))
{barAmntTemp++;}

if(barAmntTemp>barAmnt)
{
 for(var i = 0; i<barAmntTemp; i++)
 {
  if(barAmntTemp>barAmnt)
  {
   var bars=document.createElement('canvas');
   bars.setAttribute("id", "bar"+i);
   document.body.appendChild(bars);
  }
  document.getElementById('bar'+i).style.width=barWidth+'px';
  document.getElementById('bar'+i).style.position='fixed';
  document.getElementById('bar'+i).style.left=(barWidth+barSpacing) * (i-1) +'px';
  document.getElementById('bar'+i).style.bottom=90+uiDis+'px';
  document.getElementById('bar'+i).style.backgroundColor=uiColor;
  document.getElementById('bar'+i).style.zIndex='1502';
  document.getElementById('bar'+i).style.opacity='.8';
  if(vizShow==2 || vizShow==3){document.getElementById('bar'+i).style.display='none';}
 }
}

else
{
 for(var i = barAmntTemp; i<barAmnt; i++)
 {
  document.getElementById('bar'+i).remove();
 }
}

barAmnt=barAmntTemp;
vizReady=barAmnt;
//console.log(barAmnt+"bars drawn");
}


function multiplierP()
{
if(autoMultiplier == 1)
{
autoMultiplier = 0;
document.getElementById('multA').style.color='#aaaaaa';
document.getElementById('multN').style.color='#FF5722';
multiplier = 10;
}

if(multiplier < 20)
{
multiplier += 1;
document.getElementById('multN').innerHTML=multiplier/10;
}
}

function multiplierM()
{
if(autoMultiplier == 1)
{
autoMultiplier = 0;
document.getElementById('multA').style.color='#aaaaaa';
document.getElementById('multN').style.color='#FF5722';
multiplier = 10;
}

if(multiplier > 1)
{
multiplier -= 1;
document.getElementById('multN').innerHTML=multiplier/10;
}
}


function multiplierP2()
{
if(multiplier < 16)
{
multiplier += .2;
}
}

function multiplierM2()
{
if(multiplier > 1)
{
multiplier -= .2;
}
}

function multiplierA()
{
if(autoMultiplier == 0)
{
autoMultiplier = 1;
document.getElementById('multA').style.color='#FF5722';
document.getElementById('multN').style.color='#aaaaaa';
multiplier = 10;
}
else
{
autoMultiplier = 0;
document.getElementById('multA').style.color='#aaaaaa';
document.getElementById('multN').style.color='#FF5722';
multiplier = 10;
}
}


document.onkeydown = checkKey;

function checkKey(e)
{
e = e || window.event;
//on 'esc' click
if(e.keyCode == '27')
{
showViz();
}
}
