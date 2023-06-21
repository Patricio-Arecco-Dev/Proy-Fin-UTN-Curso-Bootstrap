const tarjetas = [
  "Dino Profesiones",
  "Dino Zodiaco",
  "Dino Músicos",
  "Dino Deportistas",
  "Dino Amor",
  "Dino Varios",
];

const profesion = [
  "abogado",
  "actriz",
  "arquitecto",
  "barman",
  "bibliotecario",
  "biologa",
  "bioquimica",
  "bombero",
  "cantante",
  "carpintero",
  "chofer",
  "cocinero",
  "demoledor",
  "doctora",
  "electrisista",
  "enfermera",
  "fisioterapeuta",
  "fotografa",
  "fotografo",
  "heladero",
  "jubilado",
  "locutora",
  "mecanico",
  "mercadologo",
  "millonaria",
  "mozo",
  "odontologo",
  "operador_electrico",
  "operador_sistemas",
  "paramedico",
  "pediatra",
  "peluquero",
  "pintor",
  "productor",
  "profesor",
  "repartidor",
  "vendedor",
];

const signos = [
  "acuario",
  "aries",
  "cancer",
  "capricornio",
  "escorpio",
  "geminis",
  "leo",
  "libra",
  "picis",
  "sagitario",
  "tauro",
  "virgo",
];

const musicos = [
  "bajista",
  "baterista",
  "cantante",
  "chelista",
  "guitarrista",
  "pianista",
  "sonidista",
  "trompetista",
  "vailarina_1",
  "vailarina_2",
  "banda_musical",
  "cuarteto",
];

const deportes = [
  "atletismo",
  "beisbol",
  "ciclismo",
  "futbol",
  "golf",
  "hockey",
  "natacion",
  "pesas",
];

const amor = [
  "amor_01",
  "amor_02",
  "amor_03",
  "amor_04",
  "amor_05",
  "amor_06",
  "amor_07",
];

const varios = [
  "boba",
  "caballo",
  "colombiano",
  "hamburhuevo",
  "jabba",
  "luke",
  "palpatine",
  "picachu",
  "soldado",
  "verde",
  "yoda",
];

var indice = 0;
var largo = 0;
var elementoPadre = document.getElementById("contenedorPadre");
var imagenSelecta = "";
var elementoHijo = "";
var hubicacion = "";
var arrayTemporal = [];
function cargarProfecionales() {
    indice = 0;
    arrayTemporal = profesion.slice();
    largo = arrayTemporal.length;
    console.log(largo);
    console.dir(arrayTemporal);
    imagenSelecta = arrayTemporal[indice];
    console.log(imagenSelecta);
    hubicacion = "profesion";
    pegarImagen(hubicacion, imagenSelecta);
  }

  function cargarZodiaco() {
    indice = 0;
    arrayTemporal = signos.slice();
    largo = arrayTemporal.length;
    console.log(largo);
    console.dir(arrayTemporal);
    imagenSelecta = arrayTemporal[indice];
    console.log(imagenSelecta);
    hubicacion = "signos";
    pegarImagen(hubicacion, imagenSelecta);
  }

  function cargarMusicos() {
    indice = 0;
    arrayTemporal = musicos.slice();
    largo = arrayTemporal.length;
    console.log(largo);
    console.dir(arrayTemporal);
    imagenSelecta = arrayTemporal[indice];
    console.log(imagenSelecta);
    hubicacion = "musicos";
    pegarImagen(hubicacion, imagenSelecta);
  }

  function cargarDeportistas() {
    indice = 0;
    arrayTemporal = deportes.slice();
    largo = arrayTemporal.length;
    console.log(largo);
    console.dir(arrayTemporal);
    imagenSelecta = arrayTemporal[indice];
    console.log(imagenSelecta);
    hubicacion = "deportes";
    pegarImagen(hubicacion, imagenSelecta);
  }

  function cargarAmor() {
    indice = 0;
    arrayTemporal = amor.slice();
    largo = arrayTemporal.length;
    console.log(largo);
    console.dir(arrayTemporal);
    imagenSelecta = arrayTemporal[indice];
    console.log(imagenSelecta);
    hubicacion = "amor";
    pegarImagen(hubicacion, imagenSelecta);
  }

function cargarVarios() {
  indice = 0;
  arrayTemporal = varios.slice();
  largo = arrayTemporal.length;
  imagenSelecta = arrayTemporal[indice];
  console.log(largo);
  console.log(imagenSelecta);
  hubicacion = "varios";
  console.log(imagenSelecta);
  pegarImagen(hubicacion, imagenSelecta);
}


function cerrarModal(){
    elementoHijo.remove();   
}

function imagenAnterior() {
  if (indice > 0) {
    indice = indice - 1;
  } else {
    indice = largo - 1;
  }
  elementoHijo.remove();
  imagenSelecta = arrayTemporal[indice];
  pegarImagen(hubicacion, imagenSelecta);
}

function imagenSiguiente() {
    console.log(indice);
    if (indice >= largo - 1) {
    indice = 0;
    console.log(indice);
  } else {
    indice = indice + 1;
    console.log(indice);
  }
  elementoHijo.remove();
  console.dir(arrayTemporal);
  console.log(indice);
  imagenSelecta = arrayTemporal[indice];
  
  console.log(hubicacion);
  console.log(imagenSelecta);
  pegarImagen(hubicacion, imagenSelecta);
}

function pegarImagen(hubicacion, imagenSelecta) {
  console.log(hubicacion);
  console.log(imagenSelecta);
  
  elementoHijo = document.createElement("img");
  elementoHijo.id = `elementoHijo`;
  elementoHijo.src = `./img/${hubicacion}/${imagenSelecta}.webp`;
  elementoHijo.alt = `${imagenSelecta}`;
  elementoHijo.class = `m-3 img-fluid`;
  elementoPadre.appendChild(elementoHijo);
}
