const emailLembrar = document.querySelector("#input1")
const frase = document.querySelector("#input2")
const formAtivar = document.querySelector("#boxLogin")
const botaoAtivar = document.querySelector("#botaoLogin")

const url = "https://6ae3c370933120ae20f92749.mockapi.io/users";


botaoAtivar.addEventListener("click", async (e) => {
    e.preventDefault()
    
    const dados = await fetch(url)

    const data = await dados.json()

    const igual = data.find((item) => {
        if(item.usuario == emailLembrar.value){
            return item
        }else{
            return;
        }
    })

    if(igual){
        frase.value = igual.frase
    }else{
        alert("Usuário não encontrado!!!")
    }
    
})

