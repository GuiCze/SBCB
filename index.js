const prompt = require('prompt-sync')();
const crud = require('./crud')

while(true) {
    console.log('Digite:\n1.Cadastro\n2.Listagem\n3.Atualizar\n4.Excluir\n5.Sair\n');
    let ent = prompt()
    switch (ent) {
        case '1':
            crud.cadastro();
            break;
        case '2':
            crud.listagem();
            break;
        case '3':
            crud.atualizar();
            break;
        case '4':
            crud.excluir();
            break;
        case '5':
            process.exit();
        default:
            console.log('Entrada invalida\n');
            break;
    }
}


