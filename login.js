var attempt=3;
function validate(){
    var usuar=document.getElementById("usuar").value;
    var password=document.getElementById("password").value;
    if(usuar=="Admin"&& password=="12345"){
        alert("Ingreso exitoso");
        window.location="MI PAGINA WEB.html";
        return false;
    }
    else{
        attempt--;
    }
    alert("Te queda " +attempt+ " intentos mas");
    if(attempt==0){
        document.getElementById("usuar").disable=true;
        document.getElementById("password").disable=true;
        document.getElementById("sumbit").disable=true;
    }
}