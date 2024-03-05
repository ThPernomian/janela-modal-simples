const btnModal = document.querySelector(".btnModal")

const modal = document.querySelector(".modal")

/*Ativa a janela Modal e ela fecha após 5 segundos */
btnModal.addEventListener("click", ()=>{
    modal.style.display = "block"

    setTimeout(() => {
        modal.style.display = "none"  
    }, 5000);
})

/*Se o usuário clicar fora da janela ela fechará*/
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none"       
    }
    
}