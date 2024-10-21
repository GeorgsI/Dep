let btn__burger = document.querySelector('.btn__burger');
const MENU = document.querySelector('.menu__body');
const HTML = document.querySelector('html');
//const HTMLcontainer = document.querySelector('.header-blockFirst-container');





btn__burger.onclick = () => {
  console.log(1);
  MENU.classList.toggle('_activeMenu');
  HTML.classList.toggle('hidden');
  btn__burger.classList.toggle('btn__burger_active');
  //HTMLcontainer.style.padding = 0;
};




/*const dom = {
    temperaruteLine: document.getElementById('line'),
    temperaruteRound: document.getElementById('round'),
    temperarute: document.getElementById('temperature'),
    temperaruteBtn: document.getElementById('temperature-button')
}




function renderTemperature(temperature){
    const max = 40;
    const min = 16;
    const renge = max - min;
    const precent = renge / 100;
    const lineMin =  54;
    const lineMax =  276;
    const lineRande =  lineMax - lineMin;
    const linePrecent =  lineRande / 100;
    


    const rondMin =  -240;
    const rondMax =  48;
    const rondRande =  rondMax - rondMin;
    const rondPrecent =  rondRande / 100;



    
    
    console.log(precent);
    console.log(linePrecent);
    if(temperature>=min && temperature <= max ){

        const finishPrecent  = Math.round((temperature - min) / precent);
        const linefinishPrecent =  lineMin + linePrecent * finishPrecent;
        const roundfinishPrecent =  rondMin + rondPrecent  * finishPrecent;
        dom.temperaruteLine.style.strokeDasharray = `${linefinishPrecent} 276`;
        dom.temperaruteRound.style.transform = `rotate(${roundfinishPrecent}deg)`;
        dom.temperarute.innerText = temperature;
        //console.log(precentTemperature);
    }
}


renderTemperature(25);



function chengeTemp(){
    let mouseover = false;
    let mousedown = false;
    let chenge =0;


    let position = 0;
    let renge = 0;
    
    dom.temperaruteBtn.onmouseover = ()=> mouseover = true;
    dom.temperaruteBtn.onmouseout = ()=> mouseover = false;
    dom.temperaruteBtn.onmouseup = ()=> mousedown = false;
    dom.temperaruteBtn.onmousedown = (e)=>{ 
        mousedown = true;
        position = e.offsetY;
    }
  
    dom.temperaruteBtn.onmousemove = (e)=>{ 


        if(mouseover &&  mousedown){
            renge =  e.offsetY - position;
            const newChenge = Math.round(renge/-100);
            if(newChenge != chenge){
                let temperature = +dom.temperarute.innerText 
                if(newChenge < chenge){
                    temperature = temperature -1; 
                }else{
                    temperature = temperature +1; 
                }
                temperature = temperature + chenge
                console.log(mouseover, mousedown, renge);
                renderTemperature(temperature);
            }
        }
        
        
    }


}


chengeTemp()





/*

var oFileIn;


document.getElementById('my_file_input').onchange = function (){
    oFileIn = document.getElementById('my_file_input');
    if(oFileIn.addEventListener) {
        oFileIn.addEventListener('change', filePicked, false);
    }
};




function filePicked(oEvent) {
    var oFile = oEvent.target.files[0];
    var sFilename = oFile.name;
    var reader = new FileReader();
    reader.onload = function(e) {
        var data = e.target.result;
        var cfb = XLSX.CFB.read(data, {type: 'binary'});
        var wb = XLSX.parse_xlscfb(cfb);
        wb.SheetNames.forEach(function(sheetName) {
            var sv =XLSX.utils.make_csv(wb.Sheets[sheetName]);   
            var ojs = XLSX.utils.sheet_to_row_object_array(wb.Sheets[sheetName]); 
            console.log(ojs);
            ojs.forEach(function (el){
              console.log(el.name)
            })
        });
    };
     reader.readAsBinaryString(oFile);
}




*/