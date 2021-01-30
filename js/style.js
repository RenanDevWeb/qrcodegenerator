

const qrcode =  new QRCode("qrcode");

function gerarQrCode(){
    const texto =  document.getElementById('input').value
    if(!texto){
        alert("digite o texto a ser gerado")
        texto.focus()
        return;
    } 
    qrcode.makeCode(texto)
}
