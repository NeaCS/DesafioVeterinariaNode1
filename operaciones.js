const fs = require("fs");

const registrar = (nombre, edad, tipo, color, enfermedad) => {
  let citas = require("./citas.json");
  citas.push({ nombre, edad, tipo, color, enfermedad });
  fs.writeFileSync("./citas.json", JSON.stringify(citas), "utf-8");
  console.log("mascota ingresada", citas);
};

const leer = () => {
  let citas = require("./citas.json");
  console.log("registro de citas", citas);
};

module.exports = {
  registrar,
  leer,
};
