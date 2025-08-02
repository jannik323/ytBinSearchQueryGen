let generateButtonEle = document.getElementById("generate");
let typeSelectEle = document.getElementById("type");
let queryTextEle = document.getElementById("query");
let linkButtonEle = document.getElementById("link");
let copyButtonEle = document.getElementById("copy");
let copyInfoEle = document.getElementById("copyInfo");
let viewCountToggleEle = document.getElementById("viewCountToggle");
let currentQuery = "";
const ytSearchURL = "https://www.youtube.com/results?search_query=";
const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const ytBirth = new Date(2005,4,23);
const filterActive = false;  

function noneRNGGen(){
    return "";
}

function numberminmaxRNGGen(min, max) {
  return (Math.floor(Math.random() * (max - min + 1) ) + min)+"";
}

function numberminmaxWithPadRNGGen(min, max){
    return numberminmaxRNGGen(min,max).padStart((max+"").length, "0");
}

function numberRNGGen(max){
    return numberminmaxRNGGen(0,max);
}

function numberWithPadRNGGen(max){
    return numberminmaxWithPadRNGGen(0,max);
}

function letterRNGGen(){
    return alphabet[numberRNGGen(alphabet.length-1)];
}

function dateRNGGen(format,minYear=0) {
    let start = new Date(ytBirth);
    if(minYear!=0){
        start.setFullYear(minYear);
    }
    let genDate = new Date(start.getTime() + Math.random() * ((new Date()).getTime() - start.getTime()));
    format = format.replace("Y",(genDate.getUTCFullYear()+""));
    format = format.replace("M",(genDate.getUTCMonth()+"").padStart(2, "0"));
    format = format.replace("D",(genDate.getUTCDay()+"").padStart(2, "0"));
    format = format.replace("H",(genDate.getUTCHours()+"").padStart(2, "0"));
    format = format.replace("M",(genDate.getUTCMinutes()+"").padStart(2, "0"));
    format = format.replace("S",(genDate.getUTCSeconds()+"").padStart(2, "0"));
    return format;
}




let typeHolder = {
    "IMG":{
        rngGen:numberWithPadRNGGen,
        rngGrenPara:9999,
        staticPart:"IMG ",
        displayName:"IMG"
    }
    ,"MVI":{
        rngGen:numberWithPadRNGGen,
        rngGrenPara:9999,
        staticPart:"MVI ",
        displayName:"MVI"
    }
    ,"MOV":{
        rngGen:numberWithPadRNGGen,
        rngGrenPara:9999,
        staticPart:"MOV ",
        displayName:"MOV"
    }
    ,"100":{
        rngGen:numberWithPadRNGGen,
        rngGrenPara:9999,
        staticPart:"100 ",
        displayName:"100"
    }
    ,"SAM":{
        rngGen:numberWithPadRNGGen,
        rngGrenPara:9999,
        staticPart:"SAM ",
        displayName:"SAM"
    }
    ,"DSC":{
        rngGen:numberWithPadRNGGen,
        rngGrenPara:9999,
        staticPart:"DSC ",
        displayName:"DSC"
    }
    ,"SDV":{
        rngGen:numberWithPadRNGGen,
        rngGrenPara:9999,
        staticPart:"SDV ",
        displayName:"SDV"
    }
    ,"DSCF":{
        rngGen:numberWithPadRNGGen,
        rngGrenPara:9999,
        staticPart:"DSCF",
        displayName:"DSCF"
    }
    ,"DSCN":{
        rngGen:numberWithPadRNGGen,
        rngGrenPara:9999,
        staticPart:"DSCN",
        displayName:"DSCN"
    }
    ,"PICT":{
        rngGen:numberWithPadRNGGen,
        rngGrenPara:9999,
        staticPart:"PICT",
        displayName:"PICT"
    }
    ,"MAQ":{
        rngGen:numberWithPadRNGGen,
        rngGrenPara:9999,
        staticPart:"MAQ0",
        displayName:"MAQ"
    }
    ,"FILE":{
        rngGen:numberWithPadRNGGen,
        rngGrenPara:9999,
        staticPart:"FILE",
        displayName:"FILE"
    }
    ,"GOPR":{
        rngGen:numberWithPadRNGGen,
        rngGrenPara:9999,
        staticPart:"GOPR",
        displayName:"GOPR"
    }
    ,"GP":{
        rngGen:numberWithPadRNGGen,
        rngGrenPara:9999,
        staticPart:"GP01",
        displayName:"GP"
    }
    ,"GX":{
        rngGen:numberWithPadRNGGen,
        rngGrenPara:9999,
        staticPart:"GX01",
        displayName:"GX"
    }
    ,"DJI":{
        rngGen:numberWithPadRNGGen,
        rngGrenPara:9999,
        staticPart:"DJI ",
        displayName:"DJI"
    }
    ,"ZOOM":{
        rngGen:numberWithPadRNGGen,
        rngGrenPara:9999,
        staticPart:"ZOOM",
        displayName:"ZOOM"
    }




    ,"HNI":{
        rngGen:numberWithPadRNGGen,
        rngGrenPara:100,
        staticPart:"HNI 0",
        displayName:"HNI"
    }
    ,"WA":{
        rngGen:numberWithPadRNGGen,
        rngGrenPara:999,
        staticPart:"WA0",
        displayName:"WA"
    }
    ,"MOL":{
        rngGen: function(){
            if(numberRNGGen(1)==1){
                return letterRNGGen()+numberRNGGen(9);
            }else{
                return numberWithPadRNGGen(99);
            }
        },
        rngGrenPara:null,
        staticPart:"MOL0",
        displayName:"MOL"
    }
    ,"HMS":{
        rngGen:numberWithPadRNGGen,
        rngGrenPara:235959,
        staticPart:"",
        displayName:"HMS"
    }
    ,"P":{
        rngGen:numberWithPadRNGGen,
        rngGrenPara:99999,
        staticPart:"P10",
        displayName:"P"
    }
    ,"VTS":{
        rngGen: function(){
            switch(numberRNGGen(2)){
                case 0:
                return numberWithPadRNGGen(99)+" "+numberRNGGen(9);
                case 1:
                return numberWithPadRNGGen(999)+" 1";
                case 2:
                return "01 "+numberWithPadRNGGen(999);
            }
        },
        rngGrenPara:null,
        staticPart:"VTS ",
        displayName:"VTS"
    }
    ,"Slideshow":{
        rngGen:numberWithPadRNGGen,
        rngGrenPara:99,
        staticPart:"My Slideshow ",
        displayName:"Slideshow"
    }
    ,"Stupeflix":{
        rngGen:numberWithPadRNGGen,
        rngGrenPara:1050,
        staticPart:"My Stupeflix Video ",
        displayName:"Stupeflix"
    }



    ,"YMD":{
        rngGen:dateRNGGen,
        rngGrenPara:"YMD",
        staticPart:"",
        displayName:"YMD"
    }
    ,"MDY":{
        rngGen:dateRNGGen,
        rngGrenPara:"MDY",
        staticPart:"",
        displayName:"MDY"
    }
    ,"DMY":{
        rngGen:dateRNGGen,
        rngGrenPara:"DMY",
        staticPart:"",
        displayName:"DMY"
    }
    ,"WIN":{
        rngGen:dateRNGGen,
        rngGrenPara:"YMD",
        staticPart:"WIN ",
        displayName:"WIN"
    }
    ,"VID":{
        rngGen:dateRNGGen,
        rngGrenPara:"YMD",
        staticPart:"VID ",
        displayName:"VID"
    }
    ,"Capture":{
        rngGen:dateRNGGen,
        rngGrenPara:"YMD",
        staticPart:"Capture ",
        displayName:"Capture"
    }
    ,"InShot":{
        rngGen: function(){
            return dateRNGGen("YMD",2017);
        },
        rngGrenPara:null,
        staticPart:"InShot ",
        displayName:"InShot"
    }
    ,"AUD":{
        rngGen: function(){
            return dateRNGGen("YMD",2018);
        },
        rngGrenPara:null,
        staticPart:"AUD-",
        displayName:"AUD"
    }
    ,"PXL":{
        rngGen: function(){
            return dateRNGGen("YMD",2020);
        },
        rngGrenPara:null,
        staticPart:"PXL ",
        displayName:"PXL"
    },"video":{
        rngGen: dateRNGGen,
        rngGrenPara:"Y-M-D-H-M-S",
        staticPart:"video-",
        displayName:"video"
    }
}

for (const key in typeHolder) {
    const typeHolderObj = typeHolder[key];

    let optionEle = document.createElement("option");
    optionEle.value = key;
    optionEle.innerText = typeHolderObj.displayName;
    optionEle.title ="test";
    typeSelectEle.appendChild(optionEle);
}

generateButtonEle.addEventListener("click",e=>{
    generateYTBinSearchQuery();
});

linkButtonEle.addEventListener("click",e=>{
    window.open(ytSearchURL+currentQuery+(viewCountToggleEle.checked?"&sp=CAM%253D":""), '_blank').focus();
});


let timeout = 0;
copyButtonEle.addEventListener("click",e=>{
    navigator.clipboard.writeText(currentQuery);
    copyInfoEle.style.animation="none";
    clearTimeout(timeout);
    timeout = setTimeout(()=>{
        copyInfoEle.style.animation = "clicked 1s 1";
    },1);
});

function randomProperty(obj) {
    var keys = Object.keys(obj);
    return keys[ keys.length * Math.random() << 0];
};

function generateYTBinSearchQuery(){
    let currentType = typeSelectEle.value;
    if(currentType=="random"){
        currentType = randomProperty(typeHolder);
    }
    let typeHolderObj = typeHolder[currentType];
    currentQuery=typeHolderObj.staticPart+typeHolderObj.rngGen(typeHolderObj.rngGrenPara);
    queryTextEle.innerText=currentQuery;
}