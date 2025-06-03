function adicionarItem() {
    let input = document.getElementById("nova-atividade");
    let lista = document.getElementById("lista");

    if (input.value.trim() !== "") {
        let novoItem = document.createElement("li");
        novoItem.textContent = input.value;
        novoItem.addEventListener("click", function(){
            this.classList.toggle("active");
        })
        lista.appendChild(novoItem);
        input.value = "";
    } else {
        alert("Insira um valor")
    }
}

$('form').on('submit', function (e) {
    e.preventDefault();})
    