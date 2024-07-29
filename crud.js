const prompt = require('prompt-sync')();
const usuarios = [];

let ultimoID = 1;

const cadastro () => {
    let usuario = [];
    let entrada;
    while(true) {
        console.log('Digite o e-mail do usuario');
        entrada = prompt();
        let aux = false;
        usuarios.forEach((user) {
            if(user.includes(entrada)) {
                aux = true;
                break;
            }
        });
        if(aux){
            console.log('Erro, e-mail ja cadastrado, digite um e-mail diferente');
        } else {
            usuario.push(entrada)
            break;
        }

    }

    while(true) {
        console.log('Digite o nome do usuario');
        entrada = prompt();
        if(!entrada) {
            console.log('O nome não pode estar vazio');
        } else {
            usuario.push(entrada)
            break;
        }
        
    }

    while(true) {
        if(usuario.lenght >= 3) {
            console.log('Digite um número adicional ou deixe vazio para finalizar o cadastro');
            entrada = +prompt();
            if(!entrada) {
                break;
            } else {
                if(entrada < 99999999 || usuario.includes(entrada)) {
                    console.log('O número é invalido ou ja cadastrado');
                } else {
                    usuario.push(entrada)
                }

            }
        } else {
            console.log('Digite o telefone do usuario');
            entrada = prompt();
            if(entrada < 99999999 || usuario.includes(entrada)) {
                console.log('O número é invalido ou ');
            } else {
                usuario.push(entrada)
            }
        }
        
    }

    usuario.unshift(ultimoID);
    ultimoID++;
    usuarios.push(usuario)
    console.log('Usuario cadastrado com sucesso');

       

}
