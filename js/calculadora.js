
document.getElementById("calculadoraFormulario").addEventListener("submit", function(e) {
  e.preventDefault();
  const data = {};
  Array.from(this.elements).forEach(el => {
    if (el.name) {
      data[el.name] = el.type === "checkbox" ? el.checked : parseFloat(el.value || 0);
    }
  });
  calcularResultados(data);
  document.getElementById("resultadosContainer").style.display = "block";
});

function calcularResultados(data) {
  const ahorroMensual = ((data.ingreso_anual_neto / 12) - ((data.alimentos_bebidas || 0) / 12));
  document.getElementById("resA").innerHTML = '<p>Ahorro mensual estimado: $' + ahorroMensual.toFixed(2) + '</p>';
}
