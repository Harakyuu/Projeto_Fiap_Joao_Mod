var retornoGlobal;

function carregar() {
    console.log("Hello World!");

    $.ajax({
        url: "lista.json",
        data: "",
        success: function(retorno){
            tratarDados(retorno);
            popularSelect(retorno);
            retornoGlobal = retorno;
        },
        dataType: "json"
    })
}

function popularSelect(param){

    let select = $('.form-select')

    $(param).each(function(chave,valor){
        
        let conteudo = `<option value="${valor.id}">${valor.nome}</option>`;

        select.append(conteudo)
    })
    
}

function tratarDados(retorno) {

    $(retorno).each(function(chave, valor){
        let conteudo = `<tr onclick="abrirModal('${valor.imagem}','${valor.nome}','${valor.descricao}')">
                            <td>${valor.id}</td>
                            <td><img class="foto" src="${valor.imagem}" />  </td>
                            <td>${valor.nome}</td>
                        </tr>`
        
        let tabela = $('.minhaTabela');

        tabela.append(conteudo);
    })
}

function selecionaValor(valor){

    //var valor = $('.form-select').val();
    // for(i = 0; i < retornoGlobal.length; i ++){
    //     if(valor == retornoGlobal[i].id){
            
    //         abrirModal(retornoGlobal[i].nome,retornoGlobal[i].descricao,retornoGlobal[i].imagem)

    //     }  
    // }

    $(retornoGlobal).each(function(chave,valorLaco){
        if(valor == valorLaco.id){
            abrirModal(valorLaco.imagem,valorLaco.nome,valorLaco.descricao);
        } 
    })
    
}


function abrirModal(imagem, nome, descricao){

    console.log(nome, imagem, descricao);

    $('#exampleModal').modal("show");

    let titulo = $('#exampleModalLabel')

    let conteudo = `<div class="col-md-12">
                    <div class="card" >
                    <img src="${imagem}" class="card-img-top"  alt="tertertert">
                    <div class="card-body">
                    <h5 class="card-title">${nome}</h5>
                    <p class="card-text">${descricao}</p>
                </div>
                </div>
            </div>`;
    
    titulo.html('Informações')

    $('.detalheItem').html(conteudo)   

}


$(function(){
    carregar();
})