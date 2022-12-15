var passCripted;

function executar(){
    var pass = document.getElementById('pass').value;
    var key = document.getElementById('key').value;

    document.getElementById('result').innerHTML = '<li>Pass: '+ pass + '</li>';
    document.getElementById('result').innerHTML += '<li>Key: '+ key + '</li>';
   //document.getElementById('result').innerHTML += '<li>Alternated: '+ alternate(pass,key) + '</li>';
    passCripted = cript(alternate(pass,key))
    document.getElementById('result').innerHTML += '<li>Cripted: '+ cript(alternate(pass,key)) + '</li>';

    document.getElementById('passCripted').value = passCripted
}

function alternate(txt,key){

    var array1 = txt.split('');
    var array2 = key.split('');
    var result = ''

    for(i = 0; i< (array1.length + array2.length);i++){
        if(array1[i])
            result+=array1[i];
        if(array2[i])
            result+=array2[i];
    }

    return result
}

function cript(txt){
    return btoa(txt);
}

function decript(txt){
    return atob(txt);
}

function copiarTexto() {
    let textoCopiado = document.getElementById("passCripted");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("O texto é: " + textoCopiado.value);
}