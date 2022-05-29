let nroVector1: number[] = new Array(6);
let nroVector2: number[] = new Array(6);
let vSuma: number[] = new Array(6);

function cargarVector(v: number[], cantidad: number) {
  let indice: number;
  for (indice = 0; indice < cantidad; indice++) {
    v[indice] = Number(prompt("Ingrese el valor de la posicion", indice, ":"));
  }
}

cargarVector(nroVector1, 6);
cargarVector(nroVector2, 6);

for (let indice = 0; indice < 6; indice++) {
  vSuma[indice] = nroVector1[indice] + nroVector2[indice];
}
console.log("la suma de vectores es ", vSuma);
