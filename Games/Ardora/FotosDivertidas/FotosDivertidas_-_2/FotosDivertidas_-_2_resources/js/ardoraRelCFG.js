//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=4; attempts=0; attemptsMax=1;
var score=0; scoreMax=4; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Bien! Lo has conseguido"; messageTime=""; messageError="Uyy, Lo has hecho mal..."; messageErrorG="Uyy, Lo has hecho mal..."; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Rm90b3NEaXZlcnRpZGFzXy1fMg"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["<p>Amigos</p>","<p>Enemigos</p>","<p>Perro</p>","<p>Gato</p>"];
var iL=["","","",""];
var order=["","","",""]; orderR=["","","",""];indexR=0; indexL=0;
var cR=["","","",""]; ansRL=["Mg","MA","MQ","Mw"];
var iR=["<div  align='center'><img src='FotosDivertidas_-_2_resources/media/FotosDivertidas_3.jpg'></div>","<div  align='center'><img src='FotosDivertidas_-_2_resources/media/FotosDivertidas_4.jpg'></div>","<div  align='center'><img src='FotosDivertidas_-_2_resources/media/FotosDivertidas_2.jpg'></div>","<div  align='center'><img src='FotosDivertidas_-_2_resources/media/FotosDivertidas_5.png'></div>"];
var auR=[2,3,1,4];
