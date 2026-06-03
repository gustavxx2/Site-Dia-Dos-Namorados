/* ==========================
      CORAÇÕES
========================== */

for (let i = 0; i < 50; i++) {
  let heart = document.createElement("div");

  heart.innerHTML = "❤️";

  heart.classList.add("heart");

  heart.style.left = Math.random() * 100 + "vw";

  heart.style.fontSize = Math.random() * 30 + 15 + "px";

  heart.style.animationDuration = Math.random() * 6 + 4 + "s";

  document.body.appendChild(heart);
}

/* ==========================
      CARTA
========================== */

let envelope = document.getElementById("envelope");

let mensagem = document.getElementById("mensagem");

const musica = document.getElementById("musica");
let aberto = false;

function toggleEnvelope() {
  aberto = !aberto;

  envelope.classList.toggle("aberto", aberto);

  if (aberto) {
    mensagem.style.display = "block";
    musica.currentTime = 32; // Inicia a música a partir do segundo 32
    musica.play().catch(() => {});
  } else {
    mensagem.style.display = "none";
    musica.pause();
    musica.currentTime = 0;
  }
}

/* ==========================
     SCROLL ANIMAÇÃO
========================== */

function revelar() {
  let elementos = document.querySelectorAll(".revelar");

  elementos.forEach((item) => {
    let pos = item.getBoundingClientRect().top;

    if (pos < window.innerHeight - 100) {
      item.classList.add("ativo");
    }
  });
}

window.addEventListener("scroll", revelar);

revelar();

/* ==========================
      CONTADOR NAMORO
========================== */

const contadorAnosEl = document.getElementById("contador-anos");
const contadorMesesEl = document.getElementById("contador-meses");
const contadorDiasEl = document.getElementById("contador-dias");
const contadorMinutosEl = document.getElementById("contador-minutos");
const contadorSegundosEl = document.getElementById("contador-segundos");

const podeAtualizar =
  contadorAnosEl &&
  contadorMesesEl &&
  contadorDiasEl &&
  contadorMinutosEl &&
  contadorSegundosEl;

if (podeAtualizar) {
  // Dia que começaram a namorar: 09/08/2024
  const start = new Date("2024-08-09T00:00:00");

  function pad2(n) {
    return String(n).padStart(2, "0");
  }

  function tick() {
    const now = new Date();
    const diffMs = now.getTime() - start.getTime();

    const diff = Math.max(0, diffMs);

    const totalSeconds = Math.floor(diff / 1000);
    const years = Math.floor(totalSeconds / (365.25 * 24 * 3600));

    const remainingAfterYears =
      totalSeconds - Math.floor(years * (365.25 * 24 * 3600));

    const months = Math.floor(remainingAfterYears / (30.44 * 24 * 3600));
    const remainingAfterMonths =
      remainingAfterYears - Math.floor(months * (30.44 * 24 * 3600));

    const days = Math.floor(remainingAfterMonths / (24 * 3600));
    const remainingAfterDays = remainingAfterMonths - days * 24 * 3600;

    const hours = Math.floor(remainingAfterDays / 3600);
    const remainingAfterHours = remainingAfterDays - hours * 3600;

    const minutes = Math.floor(remainingAfterHours / 60);
    const seconds = remainingAfterHours - minutes * 60;

    contadorAnosEl.textContent = years;
    contadorMesesEl.textContent = months;
    contadorDiasEl.textContent = days;
    contadorMinutosEl.textContent = pad2(hours * 60 + minutes);
    contadorSegundosEl.textContent = pad2(seconds);
  }

  tick();
  setInterval(tick, 1000);
}
