const imagens = [
"https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1200",
"https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200",
"https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1200"
];

let indiceImagem = 0;
const slide = document.getElementById("slide");

setInterval(() => {
indiceImagem++;
if(indiceImagem >= imagens.length){
indiceImagem = 0;
}
if(slide) {
slide.src = imagens[indiceImagem];
}
},3000);