export function formatearUbicacion(lugar: any) {
  let ubicacion = [];

  if (lugar.ciudad) {
    ubicacion.push(lugar.ciudad.nombre);
    ubicacion.push(lugar.ciudad.provincia.nombre);
    ubicacion.push(lugar.ciudad.provincia.pais.nombre);
  } else if (lugar.provincia) {
    ubicacion.push(lugar.provincia.nombre);
    ubicacion.push(lugar.provincia.pais.nombre);
  } else if (lugar.pais) {
    ubicacion.push(lugar.pais.nombre);
  }

  return ubicacion.join(", ");
}
