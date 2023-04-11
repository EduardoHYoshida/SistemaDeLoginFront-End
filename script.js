const usuarios = [
    {
        login: 'eduardo',
        pass:  'eduardo'
    },
    {
        login: 'sara',
        pass:  'sara'
    },
    {
        login: 'admin',
        pass:  'admin'
    }
]

let botao = document.getElementById('btn-Entar')

botao.addEventListener('click', function logar(){
    let pegaUsuario = document.getElementById('usuario').value
    let pegaSenha = document.getElementById('senha').value
    let validaLogin = false
    
    for (let i in usuarios){
        if(pegaUsuario == usuarios[i].login && pegaSenha == usuarios[i].pass){
            validaLogin = true
            break
        }
    }

    if(validaLogin == true){
        location.href = 'home.html'
    }else{
        alert('usuário e senha incorreto')
    } 
} )
