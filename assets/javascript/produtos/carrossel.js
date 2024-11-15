// pegando o tamanho da fonte raiz (<html>) em pixels
const tamanhoFonteRaiz = parseFloat(getComputedStyle(document.documentElement).fontSize);

// Convertendo para pixels
const tamanhoRem = 16.7;
const tamanhoEmPixels = tamanhoRem * tamanhoFonteRaiz;

function scrollAnterior(element) {
    const carrossel = element.nextElementSibling;

    carrossel.scrollBy({
        top: 0,
        left: -tamanhoEmPixels,
        behavior: "smooth",
    });
}

function scrollProximo(element) {
    const carrossel = element.previousElementSibling;

    carrossel.scrollBy({
        top: 0,
        left: tamanhoEmPixels,
        behavior: "smooth",
    });
}
