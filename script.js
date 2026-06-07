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

const temas = {
escuro:{
bg:"#121212",
card:"#1f1f1f",
text:"#ffffff",
primary:"#2563eb"
},
azul:{
bg:"#0b132b",
card:"#1c2541",
text:"#ffffff",
primary:"#3a86ff"
},
verde:{
bg:"#022c22",
card:"#064e3b",
text:"#ffffff",
primary:"#10b981"
}
};

document.querySelectorAll(".tema").forEach(btn=>{
btn.addEventListener("click",()=>{
const tema = temas[btn.dataset.tema];
document.documentElement.style.setProperty("--bg",tema.bg);
document.documentElement.style.setProperty("--card",tema.card);
document.documentElement.style.setProperty("--text",tema.text);
document.documentElement.style.setProperty("--primary",tema.primary);
});
});

document.getElementById("contatoForm").addEventListener("submit",(e)=>{
e.preventDefault();
const nome = document.getElementById("nome").value.trim();
const email = document.getElementById("email").value.trim();
if(nome === ""){
alert("Digite o nome");
return;
}
if(!email.includes("@")){
alert("Digite um email válido");
return;
}
alert("Formulário enviado com sucesso");
});