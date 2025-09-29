// Adicionar ingrediente
    // function addIngrediente(tipo) {
    //   let input = tipo === "obrig" ? document.getElementById("ing-obrig") : document.getElementById("ing-opc");
    //   let lista = tipo === "obrig" ? document.getElementById("lista-obrig") : document.getElementById("lista-opc");

    //   if (input.value.trim() !== "") {
    //     let li = document.createElement("li");
    //     li.textContent = input.value;
    //     lista.appendChild(li);
    //     input.value = "";
    //   }
    // }

    // // Seleção de categorias
    // const catBtns = document.querySelectorAll(".categories button");
    // catBtns.forEach(btn => {
    //   btn.addEventListener("click", () => {
    //     btn.classList.toggle("active");
    //   });
    // });

    // // Seleção de design
    // const designs = document.querySelectorAll(".design-option");
    // designs.forEach(d => {
    //   d.addEventListener("click", () => {
    //     designs.forEach(x => x.classList.remove("active"));
    //     d.classList.add("active");
    //   });

    // });



//  ADICIONAR INGREDIENTES 
function addIngrediente(tipo) {
  const input = tipo === "obrig" ? document.getElementById("ing-obrig") : document.getElementById("ing-opc");
  const lista = tipo === "obrig" ? document.getElementById("lista-obrig") : document.getElementById("lista-opc");

  if (input.value.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = input.value;
    lista.appendChild(li);
    input.value = "";
  }
}

// SELEÇÃO DE CATEGORIAS 
const catBtns = document.querySelectorAll(".categories button");
catBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    // Remove 'active' e 'selected' de todos os botões
    catBtns.forEach(b => b.classList.remove("active", "selected"));

    // Adiciona apenas ao botão clicado
    btn.classList.add("active", "selected");
  });
});

//  SELEÇÃO DE DESIGN 
const designs = document.querySelectorAll(".design-option");
designs.forEach(d => {
  d.addEventListener("click", () => {
    designs.forEach(x => x.classList.remove("active", "selected"));
    d.classList.add("active", "selected");
  });
});

//  ENVIO DO FORMULÁRIO 
document.querySelector(".form").addEventListener("submit", function (e) {
  e.preventDefault();

  const file = document.getElementById("imagem").files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (evt) {
      salvarReceita(evt.target.result); // envia imagem em base64
    };
    reader.readAsDataURL(file);
  } else {
    salvarReceita(""); // sem imagem
  }
});

// FUNÇÃO PARA SALVAR RECEITA E BAIXAR JSON 
function salvarReceita(imagemBase64) {
  const receita = {
    nome: document.getElementById("nome").value,
    obrigatorios: Array.from(document.querySelectorAll("#lista-obrig li")).map(li => li.textContent),
    opcionais: Array.from(document.querySelectorAll("#lista-opc li")).map(li => li.textContent),
    preparo: document.getElementById("preparo").value,
    categoria: document.querySelector(".categories .selected")?.textContent || "",
    design: document.querySelector(".design .selected")?.textContent || "SIMPLES",
    cor: document.querySelector("input[name='cor']:checked")?.id || "",
    imagem: imagemBase64
  };

  // SALVAR NO LOCALSTORAGE para usar em receita.html
  localStorage.setItem("receitaCadastrada", JSON.stringify(receita));

  // CRIAR O ARQUIVO JSON PARA DOWNLOAD
  const conteudo = JSON.stringify(receita, null, 2);
  const arquivo = new Blob([conteudo], { type: "application/json" });
  const url = URL.createObjectURL(arquivo);

  // BAIXAR AUTOMATICAMENTE
  const a = document.createElement("a");
  a.href = url;
  a.download = "receita.json";
  a.click();

  // LIBERAR URL do blob
  URL.revokeObjectURL(url);

  // REDIRECIONAR PARA receita.html para visualização
  window.location.href = "receita.html";
}
