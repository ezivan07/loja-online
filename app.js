console.log("===== SISTEMA DE PROMOÇÕES =====")

console.log("===== PROMOÇÃO DA LOJA ONLINE =====")
console.log("Todos os produtos com desconto!\n")

// Produto 1
let produto1 = "Camisa"
let preco1 = 45.00
let desconto1 = 0.10 // 10%
let valorDesconto1 = preco1 * desconto1
let precoFinal1 = preco1 - valorDesconto1

console.log("Produto:", produto1)
console.log("Preço original: R$" + preco1.toFixed(2))
console.log("Desconto (" + (desconto1*100) + "%): R$" + valorDesconto1.toFixed(2))
console.log("✅ Preço final: R$" + precoFinal1.toFixed(2))
console.log("-----------------------------------\n")

// Produto 2
let produto2 = "Calça"
let preco2 = 89.90
let desconto2 = 0.15 // 15%
let valorDesconto2 = preco2 * desconto2
let precoFinal2 = preco2 - valorDesconto2

console.log("Produto:", produto2)
console.log("Preço original: R$" + preco2.toFixed(2))
console.log("Desconto (" + (desconto2*100) + "%): R$" + valorDesconto2.toFixed(2))
console.log("✅ Preço final: R$" + precoFinal2.toFixed(2))
console.log("-----------------------------------\n")

// Produto 3
let produto3 = "Tênis"
let preco3 = 150.00
let desconto3 = 0.20 // 20%
let valorDesconto3 = preco3 * desconto3
let precoFinal3 = preco3 - valorDesconto3

console.log("Produto:", produto3)
console.log("Preço original: R$" + preco3.toFixed(2))
console.log("Desconto (" + (desconto3*100) + "%): R$" + valorDesconto3.toFixed(2))
console.log("✅ Preço final: R$" + precoFinal3.toFixed(2))
console.log("-----------------------------------\n")

// TOTAL
let totalOriginal = preco1 + preco2 + preco3
let totalComDesconto = precoFinal1 + precoFinal2 + precoFinal3
let economia = totalOriginal - totalComDesconto

console.log("💰 TOTAL DAS COMPRAS:")
console.log("Sem desconto: R$" + totalOriginal.toFixed(2))
console.log("Com desconto: R$" + totalComDesconto.toFixed(2))
console.log("🎉 VOCÊ ECONOMIZOU: R$" + economia.toFixed(2))
