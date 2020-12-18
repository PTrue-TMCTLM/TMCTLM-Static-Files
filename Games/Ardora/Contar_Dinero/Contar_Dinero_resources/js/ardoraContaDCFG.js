//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=300; timeIni=300; timeBon=0;
var successes=0; successesMax=15; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#DADADA"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk=""; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Q29udGFyX0RpbmVybw"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var m=["c001","c002","c005","c010","c020","c050","c100","c200","cB5","cB10","cB20","cB50","cB100","cB200","cB500"];
var values=[10,20,50,100,200,500,1000,2000,5000,10000,20000,50000,100000,200000,500000];
var tiC=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
var imaH=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var totEuros=0;var totCent=0;var nameEuro="€";var nameCent="Cént.";
var te=["Un Centimo","Dos centimos","Cinco Centimos","Diez Centimos","Veinte Centimos","Cincuenta Centimos","Un Euro","Dos euros","Cinco Euros","Diez Euros","Veinte Euros","Cincuenta Euros","Cien Euros","Quinientos Euros","Dos Cientos Euros"];var im=["","","","","","","","","","","","","","",""];var a1=["","","","","","","","","","","","","","",""];
var indexGame=0;var totCentFixed=0; var totEurosFixed=0; var avaiCoins=[];var correct=[];
var ce=[10,20,50,100,200,500,00,00,00,00,00,00,00,00,00];var eu=[0000,0000,0000,0000,0000,0000,1000,2000,5000,10000,20000,50000,100000,500000,200000];var ram_G=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
