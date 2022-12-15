 // criando um array vazio para guatdar os items
    var cadastrados = [];
    recuperaDadosStorage();
    atualizaListaHtml();
    
    //funcão que adiciona
    function clicou(){
    
        let item = document.getElementById('txtInput').value;
        cadastrados.push(item);
        atualizaListaHtml();
        document.getElementById('txtInput').value = '';
    
        //guarda no storage do navegador
        localStorage.setItem("cadastrados", cadastrados);
    }
    
    function atualizaListaHtml(){
    
        if(cadastrados.length > 0){
            let htmlLista = '';
            cadastrados.forEach(i => {
                htmlLista  += "<li>"+i+"</li>";
            })
            window.alert('o trecho:  ' + document.getElementById('lista'))
            window.alert('atualiza com:  ' + htmlLista)
            document.getElementById('lista').innerHTML = htmlLista;
        }
    }
    
    function recuperaDadosStorage(){
        let storage = localStorage.getItem("cadastrados");
        if(storage!==null){
            window.alert(storage.split(',').length + ' a recuperar');
            storage.split(',').forEach(i => {
                cadastrados.push(i);
            })
            window.alert(cadastrados.length + ' recuperados');
        } else {
            window.alert('nao a dados a recuperar');
        }
    }