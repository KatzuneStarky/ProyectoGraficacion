
let defunciones = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
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

function updateDefunciones(){

  defunciones[0] = dato.State[ 'Ciudad de Mexico' ].deceased;
  defunciones[1] = dato.State[ 'Baja California Sur' ].deceased;
  defunciones[2] = dato.State[ 'Tabasco' ].deceased;
  defunciones[3] = dato.State[ 'Sonora' ].deceased;
  defunciones[4] = dato.State[ 'Coahuila' ].deceased;
  defunciones[5] = dato.State[ 'Yucatan' ].deceased;
  defunciones[6] = dato.State[ 'San Luis Potosi' ].deceased;
  defunciones[7] = dato.State[ 'Tamaulipas' ].deceased;
  defunciones[8] = dato.State[ 'Nuevo Leon' ].deceased;
  defunciones[9] = dato.State[ 'Quintana Roo' ].deceased;
  defunciones[10] = dato.State[ 'Colima' ].deceased;
  defunciones[11] = dato.State[ 'Guanajuato' ].deceased;
  defunciones[12] = dato.State[ 'Sinaloa' ].deceased;
  defunciones[13] = dato.State[ 'Campeche' ].deceased;
  defunciones[14] = dato.State[ 'Baja California' ].deceased;
  defunciones[15] = dato.State[ 'Tlaxcala' ].deceased;
  defunciones[16] = dato.State[ 'Guerrero' ].deceased;
  defunciones[17] = dato.State[ 'Aguascalientes' ].deceased;
  defunciones[18] = dato.State[ 'Durango' ].deceased;
  defunciones[19] = dato.State[ 'Estado de Mexico' ].deceased;
  defunciones[20] = dato.State[ 'Puebla' ].deceased;
  defunciones[21] = dato.State[ 'Zacatecas' ].deceased;
  defunciones[22] = dato.State[ 'Nayarit' ].deceased;
  defunciones[23] = dato.State[ 'Michoacan' ].deceased;
  defunciones[24] = dato.State[ 'Oaxaca' ].deceased;
  defunciones[25] = dato.State[ 'Hidalgo' ].deceased;
  defunciones[26] = dato.State[ 'Queretaro' ].deceased;
  defunciones[27] = dato.State[ 'Veracruz' ].deceased;
  defunciones[28] = dato.State[ 'Jalisco' ].deceased;
  defunciones[29] = dato.State[ 'Chihuahua' ].deceased;
  defunciones[30] = dato.State[ 'Morelos' ].deceased;
  defunciones[31] = dato.State[ 'Chiapas' ].deceased;

}

function setup() {
  var canvas = createCanvas(ancho_c, alto_c);
  canvas.parent("home_content");
  push();
  translate(margen.izquierda, margen.superior);
  grafico(defunciones);
  ejey(labels);
  ejex(defunciones);
  textSize(24);
  text("Grafica de Defunciones en la Republica Mexicana", ancho_g/2, -30);
  pop();

  
  
}

function barra(y, largo){

  let padding = 5;
  fill(252, 40, 3);
  rect(0, y, largo, anchobanda - padding);

}

function grafico(defunciones) {

  updateDefunciones()

  anchobanda = alto_g / defunciones.length;
  for (let i = 0; i < defunciones.length; i++){
    let mapeo = map(defunciones[i], 0, max(defunciones), 0, ancho_g);
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


