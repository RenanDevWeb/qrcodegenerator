let divQr = document.getElementById('qrcode')
let buttonDownload = document.getElementById('download')
  


function GerarQrCode(){
    let inputText = document.getElementById('inputText').value;
    divQr.innerHTML = ''
    new QRCode(divQr,{
        text: inputText,
        width: 150,
        height: 150
    })
    setTimeout(() => {
        baixarQrcode();
    },1000)
}

function  baixarQrcode(){
    let imagemQrCode = divQr.querySelector('img').src
    buttonDownload.href = imagemQrCode;
    liberarDownload(true);
 }

 function liberarDownload(confirmacao){
     if(confirmacao){
        buttonDownload.classList.remove('disabled');
     }
 }