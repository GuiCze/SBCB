const prompt = require('prompt-sync')();
const usuarios = [];

let ultimoID = 1;

const cadastro = () => {
    let usuario = {
        id:'',
        email:'',
        nome:'',
        telefone:[]
    };
    let entrada;
    while(true) {
        console.log('Digite o e-mail do usuario');
        entrada = prompt();
        let aux = false;
        if(usuarios) {
            usuarios.forEach(function (user) {
                if(user.email == entrada) {
                    aux = true;
                }
            });
        }
        if(aux){
            console.log('Erro, e-mail ja cadastrado, digite um e-mail diferente');
        } else {
            usuario.email = entrada;
            break;
        }

    }

    while(true) {
        console.log('Digite o nome do usuario');
        entrada = prompt();
        if(!entrada) {
            console.log('O nome não pode estar vazio');
        } else {
            usuario.nome = entrada;
            break;
        }
        
    }

    while(true) {
        if(usuario.telefone!=0) {
            console.log('Digite um número adicional ou deixe vazio para finalizar o cadastro');
            entrada = +prompt();
            if(!entrada) {
                break;
            } else {
                if(entrada < 99999999 || usuario.entrada) {
                    console.log('O número é invalido ou ja cadastrado');
                } else {
                    usuario.telefone.push(entrada);
                }

            }
        } else {
            console.log('Digite o telefone do usuario');
            entrada = prompt();
            if(usuario.telefone.includes(entrada)) {
                console.log('Telefone ja incluido');
            } else if(entrada < 99999999) {
                console.log('O número é invalido');
            } else {
                usuario.telefone.push(entrada);
            }
        }
        
    }

    usuario.id = ultimoID ;
    ultimoID++;
    usuarios.push(usuario)
    console.log('Usuario cadastrado com sucesso');

};

const listagem = () => {
    if(usuarios.length == 0){
        console.log('A Lista esta vazia\n');
    } else {
        usuarios.forEach(function (usuario)  {
            console.log(usuario);
        });
    };
}

const atualizar = () => {
    if(usuarios.length == 0){
        console.log('A Lista esta vazia\n');
    } else {
        console.log('Digite o ID do usuario que deseja atualizar');
        listagem();
        let entrada = prompt();
        usuarios.forEach(function (usuario) {
            if(entrada == usuario.id) {
                cadastro();
            }
        })
    }
}

const excluir = () => {
    if(usuarios.length == 0){
        console.log('A Lista esta vazia\n');
    } else {
        console.log('Digite o ID do usuario que deseja excluir');
        listagem();
        let entrada = prompt();
        usuarios.forEach(function (usuario, index) {
            if(entrada == usuario.id) {
                usuarios.splice(index,1)
                console.log('Usuario exlcuido');
            } 
        });
    }
}

module.exports = {
    cadastro,
    listagem,
    atualizar,
    excluir
}