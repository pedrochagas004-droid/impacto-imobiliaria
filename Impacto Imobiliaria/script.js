// Aguarda o clique no botão de filtrar
document.querySelector(".btn-filter").addEventListener("click", () => {
  // 1. Pega os valores selecionados nos filtros
  const tipoSelecionado = document
    .getElementById("filter-type")
    .value.toLowerCase();
  const precoMaximo = parseFloat(document.getElementById("filter-price").value);

  // 2. Seleciona todos os cards de imóveis que estão na página
  const cards = document.querySelectorAll(".property-card");

  cards.forEach((card) => {
    // 3. Pega os dados de dentro de cada card (simulando o que viria do banco)
    // Dica: No futuro, usaremos data-attributes para facilitar isso
    const precoTexto = card.querySelector(".price").innerText; // Ex: "R$ 2.500.000"
    const precoNumerico = parseFloat(
      precoTexto.replace("R$ ", "").replace(/\./g, ""),
    );

    // 4. Lógica de Esconder ou Mostrar
    if (precoNumerico <= precoMaximo) {
      card.style.display = "block"; // Mostra o card
    } else {
      card.style.display = "none"; // Esconde o card
    }
  });
});
