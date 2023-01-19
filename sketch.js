//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

//variaveis da velocidade da bolinha
let velxbolinha = 5;
let velybolinha = -5;

//variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let comprimentoRaquete = 10;
let alturaRaquete = 70;

//variaveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//placar do jogo
let meusPontos = 0;
let pontosOponente = 0;

//teste de biblioteca
let colidiu = false;

function setup() {
  createCanvas(600, 400);
}

function draw(){
  background(0);      //1 - desenha o background;
  desenhaBolinha();   //2 - desenha a bolinha;
  movimentoBolinha(); //3 - movimenta a bolinha;
  veriificaBorda();   //4 - verifica a colisão da bolinha com as bordas;
  mostraRaquete(xRaquete, yRaquete);   //5 - desenha a raquete do jogador;
  movimentaRaqueteJogador();
  //verificaColisaoRaquete();
  verificaColisaoRaquetes(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente)
  movimentaRaqueteOponente();
  verificaColisaoRaquetes(xRaqueteOponente, yRaqueteOponente);
  mostraPlacar();
  marcaPonto();
  
}

function desenhaBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentoBolinha(){
  xBolinha += velxbolinha;
  yBolinha += velybolinha;
}

function veriificaBorda(){
  if (xBolinha + raio > width || xBolinha - raio < 0){
    velxbolinha *= -1;
  }
  
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velybolinha *= -1;
  }
  
}

function mostraRaquete(x, y){
  rect(x, y, comprimentoRaquete, alturaRaquete)
}

function movimentaRaqueteJogador(){
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}
function verificaColisaoRaquete(){
    if (xBolinha - raio < xRaquete + comprimentoRaquete && yBolinha - raio < yRaquete + alturaRaquete && yBolinha + raio > yRaquete) {
      velxbolinha *= -1
 }
}

function verificaColisaoRaquetes(x, y){
  colidiu =
  collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio);
  if (colidiu){
    velxbolinha *= -1
  }
}

function colisaoOponenteBiblioteca(){
  colidiu =
  collideRectCircle(xRaqueteOponente, yRaqueteOponente, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio);
  if (colidiu){
    velxbolinha *= -1
  }
}

function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - comprimentoRaquete /2 - 30;
  yRaqueteOponente += velocidadeYOponente;
}

function mostraPlacar(){
  fill (255)
  text (meusPontos, 278, 26)
  text (pontosOponente, 321, 26)
}

function marcaPonto(){
  if (xBolinha > 590){
    meusPontos += 1;
  }
  if (xBolinha < 10){
    pontosOponente += 1;
  }
}