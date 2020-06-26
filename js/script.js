function start(){
    
    let log = document.getElementById('enter');
    var erroMat = document.getElementById("matriculaError");
    var erroSen = document.getElementById("senhaError");
    var erroLog = document.getElementById("fieldsError");

    if (document.getElementById("matricula").value == "") {
        erroMat.classList.remove('hide');
        if (document.getElementById("senha").value == "") {
            erroSen.classList.remove('hide');
        } else {
            erroSen.classList.remove('hide');
        }
    } else {
        if (document.getElementById("senha").value == "") {
            erroSen.classList.remove('hide');
        } else {
            erroSen.classList.add('hide');
        }
        erroMat.classList.add('hide');
    }

    if (document.getElementById("matricula").value != "123456" || document.getElementById("senha").value!= "123456") {
        erroLog.classList.remove('hide');

    } else {
        erroMat.classList.add('hide');
        erroSen.classList.add('hide');
        erroLog.classList.add('hide');
        alert("Seja bem-vindo!");
        document.getElementById("matricula").value = "";
        document.getElementById("senha").value = "";
    }
}


