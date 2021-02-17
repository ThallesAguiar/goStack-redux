// esta classe Intl trabalha com internacionalização. Ele é nativa do JS.

export const {format: formatPrice} = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});