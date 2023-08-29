const catalogo = [{
    id: 1,
    nome:"calça jeans",
    marca: "Koloni",
    preco: 120,
    nomeArquivo:"produto1.JPG",
},  {
    id: 2,
    nome:"cargo off white",
    marca: "Koloni",
    preco: 130,
    nomeArquivo:"produto2.JPG",
}, {
    id: 3,
    nome:"calça koloni reta",
    marca: "Koloni",
    preco: 110,
    nomeArquivo:"produto3.JPG",
}, {
    id: 4,
    nome:"Tênis DC Strike",
    marca: "DC",
    preco: 230,
    nomeArquivo:"produto4.JPG",
}, {
    id: 5,
    nome:"Tênis DC Anvil Wine",
    marca: "DC",
    preco: 220,
    nomeArquivo:"produto5.JPG",
},{
    id: 6,
    nome:"calça jeans",
    marca: "Koloni",
    preco: 120,
    nomeArquivo:"produto1.JPG",
},{ 
    id: 7,
    nome:"Tênis Hocks Pop Lite Cobalt Cream",
    marca:"Hocks",
    preco: 300,
    nomeArquivo:"produto7.JPG"
},{
    id: 8,
    nome:"Kit Inverno",
    marca:"Hocks",
    preco: 600,
    nomeArquivo:"produto8.JPG",
},{
    id: 9,
    nome:"Kit Inverno",
    marca:"DC",
    preco:540,
    nomeArquivo:"produto9.JPG",
},{
    id: 10,
    nome:"Kit Inverno",
    marca:"Hocks",
    preco:610,
    nomeArquivo:"produto10.JPG",
},{
    id: 11,
    nome:"Tênis Hocks Puff Psylocke",
    marca:"Hocks",
    preco: 250,
    nomeArquivo:"produto11.JPG",
},{
    id: 12,
    nome: "Kit street",
    marca:"DGK",
    preco:350,
    nomeArquivo:"produto12.JPG",
}];

for(const produtoCatalogo of catalogo ) {
    const cartaoProduto = `<div id="card-produto-1">
<img 
src="./produtos/${produtoCatalogo.nomeArquivo}" 
alt=" CALÇA KOLONI RETA JEANS, tênis hocks preto, e fundo de parede de tijolo"
style="height: 300px"
/>
<p>${produtoCatalogo.marca}</p>
<p>${produtoCatalogo.nome}</p>
<p>$${produtoCatalogo.preco}</p>
<button>Adicionar ao Carrinho</button>
</div>`;

document.getElementById("container-produto").innerHTML +=  cartaoProduto
}

