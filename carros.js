let velocidadeDosCarros = [5, 7, 4, 2, 3, 6]
let xCarros = [420, 420, 420, 20, 20, 20]
let yCarros = [40, 97, 150, 211, 263, 320]
let wCarro = 50
let hCarro = 40


//_____________


function mostraCarros (){
  for (let i = 0; i < imagemcarros.length; i = i + 1)
  
  image(imagemcarros[i], xCarros[i], yCarros[i], wCarro, hCarro);
}

function movimentaCarros (){
  for (let i = 0; i < imagemcarros.length; i = i + 1 )
     xCarros[i] -= velocidadeDosCarros [i];
 //  xCarros[3] += velocidadeDosCarros [0];
 //  xCarros[4] += velocidadeDosCarros [4];
 //  xCarros[5] += velocidadeDosCarros [2];
}

function loopCarros (){ 
   for (let i = 0; i < imagemcarros.length; i = i + 1 )
     if (xCarros[i] < -40){xCarros[i] = 500}

   //if (xCarros[3] > 540){xCarros[3] = -40}
   //if (xCarros[4] > 540){xCarros[4] = -40}
   //if (xCarros[5] > 540){xCarros[5] = -40}
}

