function setup() {
  createCanvas(500, 400);
  //somDaTrilha.loop();
}

function draw() {
  background(estrada);
  mostraAtor();
  mostraCarros();
  movimentaAtor();
  movimentaCarros();
  loopCarros();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}


