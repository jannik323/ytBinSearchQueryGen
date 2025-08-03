let generateButtonEle = document.getElementById("generate");
let typeSelectEle = document.getElementById("type");
let typeSelectGroupHolderEles = [
    document.getElementById("yield_random_date_half_opt_group"),
    document.getElementById("yield_exact_date_opt_group"),
    document.getElementById("webcam_opt_group")
];
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
        displayName:"IMG",
        group:0
    }
    ,"MVI":{
        rngGen:numberWithPadRNGGen,
        rngGrenPara:9999,
        staticPart:"MVI ",
        displayName:"MVI",
        group:0
    }
    ,"MOV":{
        rngGen:numberWithPadRNGGen,
        rngGrenPara:9999,
        staticPart:"MOV ",
        displayName:"MOV",
        group:0
    }
    ,"100":{
        rngGen:numberWithPadRNGGen,
        rngGrenPara:9999,
        staticPart:"100 ",
        displayName:"100",
        group:0
    }
    ,"SAM":{
        rngGen:numberWithPadRNGGen,
        rngGrenPara:9999,
        staticPart:"SAM ",
        displayName:"SAM",
        group:0
    }
    ,"DSC":{
        rngGen:numberWithPadRNGGen,
        rngGrenPara:9999,
        staticPart:"DSC ",
        displayName:"DSC",
        group:0
    }
    ,"SDV":{
        rngGen:numberWithPadRNGGen,
        rngGrenPara:9999,
        staticPart:"SDV ",
        displayName:"SDV",
        group:0
    }
    ,"DSCF":{
        rngGen:numberWithPadRNGGen,
        rngGrenPara:9999,
        staticPart:"DSCF",
        displayName:"DSCF",
        group:0
    }
    ,"DSCN":{
        rngGen:numberWithPadRNGGen,
        rngGrenPara:9999,
        staticPart:"DSCN",
        displayName:"DSCN",
        group:0
    }
    ,"PICT":{
        rngGen:numberWithPadRNGGen,
        rngGrenPara:9999,
        staticPart:"PICT",
        displayName:"PICT",
        group:0
    }
    ,"MAQ":{
        rngGen:numberWithPadRNGGen,
        rngGrenPara:9999,
        staticPart:"MAQ0",
        displayName:"MAQ",
        group:0
    }
    ,"FILE":{
        rngGen:numberWithPadRNGGen,
        rngGrenPara:9999,
        staticPart:"FILE",
        displayName:"FILE",
        group:0
    }
    ,"GOPR":{
        rngGen:numberWithPadRNGGen,
        rngGrenPara:9999,
        staticPart:"GOPR",
        displayName:"GOPR",
        group:0
    }
    ,"GP":{
        rngGen:numberWithPadRNGGen,
        rngGrenPara:9999,
        staticPart:"GP01",
        displayName:"GP",
        group:0
    }
    ,"GX":{
        rngGen:numberWithPadRNGGen,
        rngGrenPara:9999,
        staticPart:"GX01",
        displayName:"GX",
        group:0
    }
    ,"DJI":{
        rngGen:numberWithPadRNGGen,
        rngGrenPara:9999,
        staticPart:"DJI ",
        displayName:"DJI",
        group:0
    }




    ,"HNI":{
        rngGen:numberWithPadRNGGen,
        rngGrenPara:100,
        staticPart:"HNI 0",
        displayName:"HNI",
        group:0
    }
    ,"WA":{
        rngGen:numberWithPadRNGGen,
        rngGrenPara:999,
        staticPart:"WA0",
        displayName:"WA",
        group:0
    }
    ,"MOL":{
        rngGen: function(){
            if(numberRNGGen(1)=="1"){
                return letterRNGGen()+numberRNGGen(9);
            }else{
                return numberWithPadRNGGen(99);
            }
        },
        rngGrenPara:null,
        staticPart:"MOL0",
        displayName:"MOL",
        group:0
    }
    ,"HMS":{
        rngGen:numberWithPadRNGGen,
        rngGrenPara:235959,
        staticPart:"",
        displayName:"HMS",
        group:0
    }
    ,"P":{
        rngGen:numberWithPadRNGGen,
        rngGrenPara:99999,
        staticPart:"P10",
        displayName:"P",
        group:0
    }
    ,"VTS":{
        rngGen: function(){
            switch(numberRNGGen(2)){
                case "0":
                return numberWithPadRNGGen(99)+" "+numberRNGGen(9);
                case "1":
                return numberWithPadRNGGen(999)+" 1";
                case "2":
                return "01 "+numberWithPadRNGGen(999);
            }
        },
        rngGrenPara:null,
        staticPart:"VTS ",
        displayName:"VTS",
        group:0
    }
    ,"Slideshow":{
        rngGen:numberWithPadRNGGen,
        rngGrenPara:99,
        staticPart:"My Slideshow ",
        displayName:"Slideshow",
        group:0
    }
    ,"Stupeflix":{
        rngGen:numberWithPadRNGGen,
        rngGrenPara:1050,
        staticPart:"My Stupeflix Video ",
        displayName:"Stupeflix",
        group:0
    },"MAH":{
        rngGen: numberWithPadRNGGen,
        rngGrenPara:9999,
        staticPart:"MAH0",
        displayName:"MAH",
        group:0
    }
    ,"ZOOM":{
        rngGen:numberWithPadRNGGen,
        rngGrenPara:999,
        staticPart:"ZOOM0",
        displayName:"ZOOM",
        group:0
    },"影片":{
        rngGen:numberWithPadRNGGen,
        rngGrenPara:999,
        staticPart:"影片0",
        displayName:"film (jap.)",
        group:0
    },"VIDEOXXXX":{
        rngGen: numberWithPadRNGGen,
        rngGrenPara:9999,
        staticPart:"VIDEO",
        displayName:"VIDEO",
        group:0
    },"CIMG":{
        rngGen:numberWithPadRNGGen,
        rngGrenPara:9999,
        staticPart:"CIMG",
        displayName:"CIMG",
        group:0
    },"ANMR":{
        rngGen:numberWithPadRNGGen,
        rngGrenPara:999,
        staticPart:"ANMR0",
        displayName:"ANMR",
        group:0
    }



    ,"YMD":{
        rngGen:dateRNGGen,
        rngGrenPara:"YMD",
        staticPart:"",
        displayName:"YMD",
        group:1
    }
    ,"MDY":{
        rngGen:dateRNGGen,
        rngGrenPara:"MDY",
        staticPart:"",
        displayName:"MDY",
        group:1
    }
    ,"DMY":{
        rngGen:dateRNGGen,
        rngGrenPara:"DMY",
        staticPart:"",
        displayName:"DMY",
        group:1
    }
    ,"WIN":{
        rngGen:dateRNGGen,
        rngGrenPara:"YMD",
        staticPart:"WIN ",
        displayName:"WIN",
        group:2
    }
    ,"VID":{
        rngGen:dateRNGGen,
        rngGrenPara:"YMD",
        staticPart:"VID ",
        displayName:"VID",
        group:2
    }
    ,"Capture":{
        rngGen:dateRNGGen,
        rngGrenPara:"YMD",
        staticPart:"Capture ",
        displayName:"Capture",
        group:2
    }
    ,"InShot":{
        rngGen: function(){
            return dateRNGGen("YMD",2017);
        },
        rngGrenPara:null,
        staticPart:"InShot ",
        displayName:"InShot",
        group:1
    }
    ,"AUD":{
        rngGen: function(){
            return dateRNGGen("YMD",2018);
        },
        rngGrenPara:null,
        staticPart:"AUD-",
        displayName:"AUD",
        group:1
    }
    ,"PXL":{
        rngGen: function(){
            return dateRNGGen("YMD",2020);
        },
        rngGrenPara:null,
        staticPart:"PXL ",
        displayName:"PXL",
        group:1
    },"video":{
        rngGen: dateRNGGen,
        rngGrenPara:"Y-M-D",
        staticPart:"video-",
        displayName:"video (date)",
        group:1
    }

}

for (const key in typeHolder) {
    const typeHolderObj = typeHolder[key];

    let optionEle = document.createElement("option");
    optionEle.value = key;
    optionEle.innerText = typeHolderObj.displayName;
    optionEle.title ="test";
    typeSelectGroupHolderEles[typeHolderObj.group].appendChild(optionEle);
}

generateButtonEle.addEventListener("click",e=>{
    clearTimeout(timeout);
    queryTextEle.style.animation="none";
    timeout = setTimeout(()=>{
        queryTextEle.style.animation = "textwiggle .75s 1";
        generateYTBinSearchQuery();
    },1);
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
        copyInfoEle.style.animation = "clicked .75s 1";
    },1);
});

generateYTBinSearchQuery();

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