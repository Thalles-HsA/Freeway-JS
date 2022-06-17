//Configurações do ator

let velocidadeDoAtor = 10
let xAtor = 100
let yAtor = 385
let whAtor = 30
let colisao = false
let meusPontos = 0;

//-------------------------------

function mostraAtor(){
  image(ator, xAtor, yAtor, whAtor, whAtor)
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
     yAtor -= velocidadeDoAtor
     }
  if(keyIsDown(DOWN_ARROW)){
     if(podeSeMover()){
    yAtor += velocidadeDoAtor;}
     }
}

function verificaColisao(){
  for (let i = 0; i < imagemcarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros [i], wCarro, hCarro, xAtor, yAtor, 15)
    
    if (colisao){
      voltaPosicaoInicial ();
      somDaColisao.play();
      if(pontosMaiorQueZero()){
    meusPontos -= 1;}     
    }
  }
}

function voltaPosicaoInicial (){
  yAtor = 385
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60))
  text(meusPontos, width / 5, 27);
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    somDoPonto.play();
    voltaPosicaoInicial();
  }
}

function pontosMaiorQueZero(){
    return meusPontos > 0;
} 

function podeSeMover(){
    return yAtor < 385;
}