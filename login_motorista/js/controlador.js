function login (){
    var user, pass

    user = document.getElementById("usuario").value;
    pass = document.getElementById("contrasenya").value;

    if( user == "carlosrios@rapi.hn" && pass == "1234") {
        alert("Sesión iniciada exitosamente!")
        window.location.href = "../motoristas/index.html";
    }   else{
        alert("Datos erroneos!")
    }
}
