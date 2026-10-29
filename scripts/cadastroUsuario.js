const loginUsuario = document.querySelector("#input1")
const senha1 = document.querySelector("#input2")
const senha2 = document.querySelector("#input3")
const frase = document.querySelector("#input4")
const formLogin = document.querySelector("#boxLogin")

const url ="https://6ae3c370933120ae20f92749.mockapi.io/users"


formLogin.addEventListener("submit", (e) => {
    e.preventDefault()

    pegar()

    async function pegar(){

        const pegar = await fetch(url)
        const data = await pegar.json()


        const verificarEmail = data.find((item) => {
            return item.usuario == loginUsuario.value
        })


        if(verificarEmail){
            alert("E-mail já cadastrado")
        }else if(senha1.value != senha2.value){
            alert("Senhas diferentes!")
        } else{
            let cadastroNovo = {
            usuario: loginUsuario.value,
            senha: senha2.value,
            frase: frase.value
            }

            cadastroNovo = JSON.stringify(cadastroNovo)

            postCadastro(cadastroNovo)
        }
    }
})

async function postCadastro(cadastroNovo){
    const response = await fetch(`${url}`,{
        method: "POST",
        body: cadastroNovo,
        headers: {"Content-type": "application/json"}
    });
    alert("Cadastro efetuado com sucesso!")

}




