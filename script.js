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

const perguntas = [
{
pergunta:"Qual o objective do HydroMap?",
respostas:["Monitorar enchentes","Controlar trânsito","Controlar energia","Mapear estradas"],
correta:0
},
{
pergunta:"Qual satélite é utilizado?",
respostas:["GPS","NASA GPM/IMERG","Starlink","Hubble"],
correta:1
},
{
pergunta:"Qual sensor é utilizado?",
respostas:["LDR","MQ2","HC-SR04","BMP280"],
correta:2
},
{
pergunta:"Qual linguagem classifica os riscos?",
respostas:["HTML","Python","CSS","SQL"],
correta:1
},
{
pergunta:"Cidade foco inicial?",
respostas:["Curitiba","Brasília","São Paulo","Recife"],
correta:2
},
{
pergunta:"Quantos níveis de risco existem?",
respostas:["2","3","4","5"],
correta:2
},
{
pergunta:"Nível de 0 a 30 cm?",
respostas:["Normal","Atenção","Alerta","Emergência"],
correta:0
},
{
pergunta:"Nível de 30 a 60 cm?",
respostas:["Normal","Emergência","Alerta","Atenção"],
correta:3
},
{
pergunta:"Qual ODS faz parte do projeto?",
respostas:["ODS 11","ODS 4","ODS 7","ODS 16"],
correta:0
},
{
pergunta:"Em emergência deve?",
respostas:["Esperar","Sair para local seguro","Dormir","Ignorar"],
correta:1
}
];

let atual = 0;
let pontos = 0;
let respostaSelecionada = null;

const pergunta = document.getElementById("pergunta");
const respostas = document.getElementById("respostas");
const proximo = document.getElementById("proximo");
const voltar = document.getElementById("voltar");

function carregarPergunta(){
const q = perguntas[atual];
pergunta.textContent = q.pergunta;
respostas.innerHTML = "";

q.respostas.forEach((texto,indice)=>{
const btn = document.createElement("button");
btn.classList.add("resposta");
btn.textContent = texto;
btn.addEventListener("click",()=>{
document.querySelectorAll(".resposta").forEach(r=>r.style.background="");
const corPrimaria = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim() || "#2563eb";
btn.style.background = corPrimaria;
respostaSelecionada = indice;
});
respostas.appendChild(btn);
});
}

voltar.addEventListener("click", () => {
    if (atual > 0) {
        atual--;
        respostaSelecionada = null;
        carregarPergunta();
    } else {
        alert("Você já está na primeira pergunta!");
    }
});

proximo.addEventListener("click",()=>{
if(respostaSelecionada === null){
alert("Selecione uma resposta");
return;
}
if(respostaSelecionada === perguntas[atual].correta){
pontos++;
}
atual++;
respostaSelecionada = null;
if(atual < perguntas.length){
carregarPergunta();
}else{
document.getElementById("quiz").classList.add("hidden");
document.getElementById("resultado").classList.remove("hidden");
document.getElementById("pontuacao").textContent = `Você acertou ${pontos} de ${perguntas.length} perguntas`;
}
}); 

carregarPergunta();