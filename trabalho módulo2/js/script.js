    var decod = document.querySelector('#myDIV2')
    var cod = document.querySelector('#myDIV3')
    var m = document.querySelector('#msg')
    var a = document.getElementById("myDIV1");
    var x = document.getElementById("myDIV");
    var y = document.getElementById("myDIV2");
    var z = document.getElementById("myDIV3");
    var bt= document.getElementById("botão")
    var bt2 =document.getElementById("botão2")
    var men = document.getElementById("msg2")
    var mens = document.getElementById("msg3")
    var jut= [men,mens]
    var numero = document.getElementById("num")

    
    decod.addEventListener('click', () => {
      m.value = btoa (m.value);

    });
    cod.addEventListener('click', () => {
      m.value = atob (m.value);
    });
    
function carregar(){
    m.style.display = "none";
    a.style.display = "none";  
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "none";
    bt.style.display = "none";
    bt2.style.display = "none";
    men.style.display = "none";
    mens.style.display = "none";
}

function myFunction() {
  if (x.style.display === "none") {
    x.style.display = "block";
    a.style.display = "block";
  } else {
    m.style.display = "none";
    a.style.display = "none";  
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "none";
  }
}

function myFunction2(){

  if (y.style.display === "none") {
      m.style.display = "block";
      y.style.display = "block";
      z.style.display = "none";
  }else{
    
    bt.style.display = "none";
    bt2.style.display = "none";
    men.style.display = "none";
    mens.style.display = "none"
      y.style.display = "none";
      z.style.display = "none";
  }
 
}

function myFunction3() {
 

  if (x.style.display === "none" ) {
 
      x.style.display = "block";
      z.style.display = "none";
  }else{
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "none";
    a.style.display = "none"; 
  } 
}

function myFunction4(){


  if (z.style.display === "none") {
      m.style.display = "block";
      z.style.display = "block";
      y.style.display = "none";
  }else{
    bt.style.display = "none";
    bt2.style.display = "none";
    men.style.display = "none";
    mens.style.display = "none"
      y.style.display = "none";
      z.style.display = "none";

  }
 
}



  
  window.onload = () => {
   
  
    document.getElementById('msg2').addEventListener('input', () => {
      enableButtons(); 
      addTextAreaRows();
      clearResults();
    });
    document.getElementById('botão').addEventListener('click', cypher);
    document.getElementById('botão2').addEventListener('click', decypher);
  };
  
  
  
  const addTextAreaRows = () => {
    const txtArea = document.getElementById('msg2');
    txtArea.style.height = '8vh';
    txtArea.style.height = txtArea.scrollHeight + 'px';
  };
  
  
  
  const cypher = () => {
    const cypheredCharCodes = cypherCharcodes(getCharcodesFromMessage());
    const resultMessage = transformIntoLetters(cypheredCharCodes);
    const method = 'criptografada';
    showResultOnPage(resultMessage, method);
    clearTextArea();
  };
  
  const decypher = () => {
    const decypheredCharCodes = decypherCharcodes(getCharcodesFromMessage());
    const resultMessage = transformIntoLetters(decypheredCharCodes);
    const method = 'descriptografada';
    showResultOnPage(resultMessage, method);
    clearTextArea();
  };
  
  const getMessage = () => document.getElementById('msg2').value;
  const getCharcodesFromMessage = () => getMessage().split('').map(val => val.charCodeAt());
  
  const cypherCharcodes = charcodesArray => charcodesArray.map((charCode, i) => {
    if (charCode > 47 && charCode < 58) {
      charCode = (charCode - 48 + 33) % 10 + 48;
    } else if (charCode > 64 && charCode < 91) {
      charCode = (charCode - 65 + 33) % 26 + 65;
    } if (charCode > 96 && charCode < 192) {
      charCode = (charCode - 97 + 33) % 26 + 97;
    } else if (charCode > 191 && charCode < 222) {
      charCode = (charCode - 192 + 33) % 30 + 192;
    } else if (charCode > 221 && charCode <= 255) {
      charCode = (charCode - 222 + 33) % 34 + 222;
    } 
    return charCode;
  });
  
  const decypherCharcodes = charcodesArray => charcodesArray.map((charCode, i) => {
    if (charCode > 47 && charCode < 58) {
      charCode = (charCode - 57 - 33) % 10 + 57;
    } else if (charCode > 64 && charCode < 91) {
      charCode = (charCode - 90 - 33) % 26 + 90;
    } else if (charCode > 96 && charCode < 192) {
      charCode = (charCode - 122 - 33) % 26 + 122;
    } else if (charCode > 191 && charCode < 222) {
      charCode = (charCode - 221 - 33) % 30 + 221;
    } else if (charCode > 221 && charCode <= 255) {
      charCode = (charCode - 255 - 33) % 34 + 255;
    }
    return charCode;
  });
  
  const transformIntoLetters = charcodesArray => String.fromCharCode.apply(this, charcodesArray);
  
  const showResultOnPage = (resultMessage, method) => {
    return document.getElementById('msg3').innerHTML = `
    
      ${method};
     ${resultMessage}
    `;
  };
  
  const clearTextArea = () => { 
    document.getElementById('msg2').value = '';
    enableButtons();
    addTextAreaRows();
  };
