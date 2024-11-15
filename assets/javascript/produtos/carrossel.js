// pegando o tamanho da fonte raiz (<html>) em pixels
const tamanhoFonteRaiz = parseFloat(getComputedStyle(document.documentElement).fontSize);

// Convertendo para pixels
const tamanhoRem = 16.7;
const tamanhoEmPixels = tamanhoRem * tamanhoFonteRaiz;

function scrollAnterior() {
    document.querySelector(".carrossel").scrollBy({
        top: 0,
        left: -tamanhoEmPixels,
        behavior: "smooth",
    });
}

function scrollProximo() {
    document.querySelector(".carrossel").scrollBy({
        top: 0,
        left: tamanhoEmPixels,
        behavior: "smooth",
    });
}
