const url = "http://localhost:3636/products";

async function buscarProdutos() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        renderizarProdutos(data);
    } catch (error) {
        console.error(error);
    }
}

function renderizarProdutos(produtos) {
    const containerProdutosCachorro = document.querySelector("#cachorro");
    const containerProdutosGato = document.querySelector("#gato");
    const containerProdutosFarmacia = document.querySelector("#farmacia");

    produtos.forEach((element) => {
        const cardProduto = document.createElement("div");
        cardProduto.classList.add("card-produto");

        const formattedPrice = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(element.price);

        cardProduto.innerHTML = `
            <div>
                <img src="${element.imageUrl}" alt="${element.name}" />
            </div>
            <p>${element.name}</p>
            <div>
                <h1>${formattedPrice}</h1>
                <div class="avaliacao">
                    <svg
                        width="99"
                        height="21"
                        viewBox="0 0 99 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M89.4767 0L92.5403 5.58008L98.4896 6.94677L94.4338 11.7621L95.047 18.1869L89.4767 15.5829L83.9064 18.1869L84.5196 11.7621L80.4638 6.94677L86.4131 5.58008L89.4767 0Z"
                            fill="#DFB300"
                        />
                        <path
                            d="M49.4767 0L52.5403 5.58008L58.4896 6.94677L54.4338 11.7621L55.047 18.1869L49.4767 15.5829L43.9064 18.1869L44.5196 11.7621L40.4638 6.94677L46.4131 5.58008L49.4767 0Z"
                            fill="#DFB300"
                        />
                        <path
                            d="M29.4767 0L32.5403 5.58008L38.4896 6.94677L34.4338 11.7621L35.047 18.1869L29.4767 15.5829L23.9064 18.1869L24.5196 11.7621L20.4638 6.94677L26.4131 5.58008L29.4767 0Z"
                            fill="#DFB300"
                        />
                        <path
                            d="M9.4767 0L12.5403 5.58008L18.4896 6.94677L14.4338 11.7621L15.047 18.1869L9.4767 15.5829L3.90644 18.1869L4.51962 11.7621L0.463822 6.94677L6.41305 5.58008L9.4767 0Z"
                            fill="#DFB300"
                        />
                        <path
                            d="M69.4767 0L72.5403 5.58008L78.4896 6.94677L74.4338 11.7621L75.047 18.1869L69.4767 15.5829L63.9064 18.1869L64.5196 11.7621L60.4638 6.94677L66.4131 5.58008L69.4767 0Z"
                            fill="#DFB300"
                        />
                        <path
                            d="M89.4871 0L89.4639 5.58008L89.4871 9.75459V13L89.4639 16L89.4871 15.5829L95.0574 18.1869L94.4442 11.7621L98.5 6.94677L92.5508 5.58008L89.4871 0Z"
                            fill="#CACACA"
                        />
                    </svg>
                    <span>(${element.reviews})</span>
                </div>
            </div>
            <div class="comprar"><button>Comprar</button></div>
    `;

        if (element.categoriaID === 1) containerProdutosCachorro.appendChild(cardProduto);
        if (element.categoriaID === 2) containerProdutosGato.appendChild(cardProduto);
        if (element.categoriaID === 3) containerProdutosFarmacia.appendChild(cardProduto);
    });
}

buscarProdutos();
