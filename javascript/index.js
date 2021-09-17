// endereços
const cb_busca = document.getElementById("search");
const cb_biblioteca = document.getElementById("biblioteca");

// adicionando a classe ao hide-section
cb_busca.addEventListener("click", function(){
    // document.querySelector(".container").classList.toggle("hide-busca-section");
    document.querySelector(".container").classList.remove("hide-busca-section");
    document.querySelector(".container").classList.add("hide-biblioteca-section");
    cb_biblioteca.checked = false;
    cb_busca.checked = true;
});
    
cb_biblioteca.addEventListener("click", function(){
    // document.querySelector(".container").classList.toggle("hide-biblioteca-section");
    document.querySelector(".container").classList.remove("hide-biblioteca-section");
    document.querySelector(".container").classList.add("hide-busca-section");
    cb_busca.checked = false;
    cb_biblioteca.checked = true;
});