function login() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	if (username == "" || password == "") {
		alert("Por favor ingrese un nombre de usuario y una contraseña.");
		return false;
	}
	else if (username == "usuario" && password == "contraseña") {
		window.location.href = "bienvenido.html";
		return false;
	}
	else {
		alert("Nombre de usuario o contraseña incorrectos.");
		return false;
	}
}
