// Adicionar ingrediente
    function addIngrediente(tipo) {
      let input = tipo === "obrig" ? document.getElementById("ing-obrig") : document.getElementById("ing-opc");
      let lista = tipo === "obrig" ? document.getElementById("lista-obrig") : document.getElementById("lista-opc");

      if (input.value.trim() !== "") {
        let li = document.createElement("li");
        li.textContent = input.value;
        lista.appendChild(li);
        input.value = "";
      }
    }

    // Seleção de categorias
    const catBtns = document.querySelectorAll(".categories button");
    catBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        btn.classList.toggle("active");
      });
    });

    // Seleção de design
    const designs = document.querySelectorAll(".design-option");
    designs.forEach(d => {
      d.addEventListener("click", () => {
        designs.forEach(x => x.classList.remove("active"));
        d.classList.add("active");
      });
    });