// Contador de visitas
document.addEventListener("DOMContentLoaded", function() {
    let visitas = localStorage.getItem("visitas") || 0;
    visitas++;
    localStorage.setItem("visitas", visitas);
    document.getElementById("visitas").textContent = visitas;
});

// Efeito de confete ao enviar formulário
document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("🎉 Formulário enviado com sucesso!");
});

// Simulação de cálculo de frete
function calcularFrete() {
    let cep = document.getElementById("cep").value;
    let valorFrete = Math.floor(Math.random() * 20) + 5;
    document.getElementById("frete").textContent = "Frete estimado: R$ " + valorFrete;
}
