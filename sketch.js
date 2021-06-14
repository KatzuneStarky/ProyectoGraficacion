
let infectados = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
labels = ['Ciudad de Mexico', 'Baja California Sur', 'Tabasco', 'Sonora', 'Coahuila', 'Yucatan', 'San Luis Potosi', 'Tamaulipas',
 'Nuevo Leon', 'Quitana Roo', 'Colima', 'Guanajuato', 'Sinaloa', 'Campeche', 'Baja California', 'Tlaxcala', 'Guerrero', 'Aguascalientes',
 'Durango', 'Estado de Mexico', 'Puebla', 'Zacatecas', 'Nayarit', 'Michoacan', 'Oaxaca', 'Hidalgo', 'Queretaro', 'Veracruz',
 'Jalisco', 'Chihuahua', 'Morelos', 'Chiapas'
]



let ancho_c = 1000;
let alto_c = 600;
let anchobanda;

let margen = {derecha : 20, izquierda : 100, superior: 80, inferior: 30}
let ancho_g = ancho_c - margen.derecha - margen.izquierda;
let alto_g = alto_c - margen.superior - margen. inferior;


function preload(){

  
  const url = "https://api.apify.com/v2/key-value-stores/vpfkeiYLXPIDIea2T/records/LATEST?disableRedirect=true"

  dato = loadJSON(url)


}

function updateInfectados(){

  infectados[0] = dato.State[ 'Ciudad de Mexico' ].infected;
  infectados[1] = dato.State[ 'Baja California Sur' ].infected;
  infectados[2] = dato.State[ 'Tabasco' ].infected;
  infectados[3] = dato.State[ 'Sonora' ].infected;
  infectados[4] = dato.State[ 'Coahuila' ].infected;
  infectados[5] = dato.State[ 'Yucatan' ].infected;
  infectados[6] = dato.State[ 'San Luis Potosi' ].infected;
  infectados[7] = dato.State[ 'Tamaulipas' ].infected;
  infectados[8] = dato.State[ 'Nuevo Leon' ].infected;
  infectados[9] = dato.State[ 'Quintana Roo' ].infected;
  infectados[10] = dato.State[ 'Colima' ].infected;
  infectados[11] = dato.State[ 'Guanajuato' ].infected;
  infectados[12] = dato.State[ 'Sinaloa' ].infected;
  infectados[13] = dato.State[ 'Campeche' ].infected;
  infectados[14] = dato.State[ 'Baja California' ].infected;
  infectados[15] = dato.State[ 'Tlaxcala' ].infected;
  infectados[16] = dato.State[ 'Guerrero' ].infected;
  infectados[17] = dato.State[ 'Aguascalientes' ].infected;
  infectados[18] = dato.State[ 'Durango' ].infected;
  infectados[19] = dato.State[ 'Estado de Mexico' ].infected;
  infectados[20] = dato.State[ 'Puebla' ].infected;
  infectados[21] = dato.State[ 'Zacatecas' ].infected;
  infectados[22] = dato.State[ 'Nayarit' ].infected;
  infectados[23] = dato.State[ 'Michoacan' ].infected;
  infectados[24] = dato.State[ 'Oaxaca' ].infected;
  infectados[25] = dato.State[ 'Hidalgo' ].infected;
  infectados[26] = dato.State[ 'Queretaro' ].infected;
  infectados[27] = dato.State[ 'Veracruz' ].infected;
  infectados[28] = dato.State[ 'Jalisco' ].infected;
  infectados[29] = dato.State[ 'Chihuahua' ].infected;
  infectados[30] = dato.State[ 'Morelos' ].infected;
  infectados[31] = dato.State[ 'Chiapas' ].infected;

}

function setup() {
  var canvas = createCanvas(ancho_c, alto_c);
  canvas.parent("home_content");
  translate(margen.izquierda, margen.superior);
  push();
  grafico(infectados);
  ejey(labels);
  ejex(infectados);
  textSize(24);
  text("Grafica de Infectados en la Republica Mexicana", ancho_g/2, -30);
  pop();

  
  
}

function barra(y, largo){

  let padding = 5;
  fill(252, 40, 3);
  rect(0, y, largo, anchobanda - padding);

}

function grafico(infectados) {

  updateInfectados()

  anchobanda = alto_g / infectados.length;
  for (let i = 0; i < infectados.length; i++){
    let mapeo = map(infectados[i], 0, max(infectados), 0, ancho_g);
    barra(anchobanda * i, mapeo)
  }

}

function ejey(labels) {
  fill(0);
  for (let i = 0; i < labels.length; i++){
    text(labels[i], -100, i * anchobanda + (anchobanda/2));
  }
}

function ejex(datos) {
  let ticks = 19;
  let dist_ticks = int(max(datos) / ticks);
  for (let i = 0; i < max(datos); i+=dist_ticks) {
    
    let mapeo = map(i, 0, max(datos), 0, ancho_g);
    line(mapeo, 0, mapeo, alto_g);
    textAlign(CENTER);
    text(i, mapeo, alto_g + 10);
    
  }
}


