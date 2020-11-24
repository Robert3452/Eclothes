export default function priceFormat(price) {
    const priceFloat = (price).toFixed(2)
    return Intl.NumberFormat("es-PE", {
        style: "currency",
        currency: "PEN",
    }).format(priceFloat)
}
