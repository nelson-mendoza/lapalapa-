const UI = {
  modal: document.getElementById('modal'),
  modalImg: document.getElementById('modal-img'),
  modalCerrar: document.querySelector('.modal-cerrar'),
  navMobile: document.getElementById('navMobile'),
  navbar: document.getElementById('navbar'),
  festivoContenido: document.getElementById('festivo-contenido'),
  heroTexto: document.getElementById('hero-tagline-text'),
  navSentinel: document.getElementById('nav-sentinel'),
  reservaNombre: document.getElementById('reserva-nombre'),
  reservaFecha: document.getElementById('reserva-fecha'),
  reservaHora: document.getElementById('reserva-hora'),
  reservaPersonas: document.getElementById('reserva-personas'),
  reservaPeticiones: document.getElementById('reserva-peticiones')
};

const Typewriter = (() => {
  const frases = [
    "Sabor tradicional, ambiente único",
    "Las chelas más frías de Cacahoatán",
    "Donde cada visita es un recuerdo",
    "Ven y vive la experiencia La Palapa"
  ];
  let state = { index: 0, charIndex: 0, isDeleting: false, timeoutId: null };
  const el = UI.heroTexto;
  if (!el) return { init: () => {}, destroy: () => {} };
  const tick = () => {
    const current = frases[state.index];
    if (state.isDeleting) { state.charIndex--; }
    else { state.charIndex++; }
    el.textContent = current.substring(0, state.charIndex);
    let delta = state.isDeleting ? 30 : 60;
    if (!state.isDeleting && state.charIndex === current.length) {
      delta = 2500;
      state.isDeleting = true;
    } else if (state.isDeleting && state.charIndex === 0) {
      state.isDeleting = false;
      state.index = (state.index + 1) % frases.length;
      delta = 400;
    }
    state.timeoutId = setTimeout(tick, delta);
  };
  return {
    init: () => tick(),
    destroy: () => clearTimeout(state.timeoutId)
  };
})();

const Festivos = (() => {
  const festivos = [
    { mes: 0, dia: 1,  nombre: "Año Nuevo",                icono: "🎉", mensaje: "¡Empieza el año con el pie derecho! Ven a La Palapa a celebrar con los que más quieres. Brindemos juntos por un año lleno de sabor y buenos momentos." },
    { mes: 0, dia: 6,  nombre: "Día de Reyes",             icono: "👑", mensaje: "La rosca de reyes sabe mejor cuando la compartes. Vive el último festejo de la temporada con una experiencia única en La Palapa." },
    { mes: 1, dia: 2,  nombre: "Día de la Constitución",   icono: "📜", mensaje: "Este puente, desconéctate de la rutina y ven a disfrutar de nuestra vista a las montañas. La Palapa te espera con los brazos abiertos." },
    { mes: 1, dia: 14, nombre: "Día de San Valentín",      icono: "❤️", mensaje: "El amor y la buena mesa van de la mano. Sorprende a tu persona favorita con una velada inolvidable en La Palapa. ¿El mejor plan? Aquí lo tienes." },
    { mes: 1, dia: 24, nombre: "Día de la Bandera",        icono: "🇲🇽", mensaje: "Viste de verde, blanco y rojo... y ven a celebrar lo nuestro con los sabores de México en La Palapa. ¡Que viva la mexicanidad!" },
    { mes: 2, dia: 16, nombre: "Natalicio de Benito Juárez", icono: "🏛️", mensaje: "Puente largo = más tiempo para disfrutar. Aprovecha este fin de semana para venir con toda la familia a La Palapa. La mejor comida los espera." },
    { mes: 3, dia: 2,  nombre: "Jueves Santo",             icono: "✝️", mensaje: "En estos días de reflexión y unión, comparte con los tuyos los sabores que nos conectan. Vive una Semana Santa inolvidable en La Palapa." },
    { mes: 3, dia: 3,  nombre: "Viernes Santo",            icono: "✝️", mensaje: "Tradición, fe y sabor se encuentran en La Palapa. Este Viernes Santo, ven a disfrutar de nuestros platillos típicos en un ambiente único." },
    { mes: 3, dia: 5,  nombre: "Domingo de Resurrección",  icono: "🌅", mensaje: "Renueva tu espíritu y celebra la vida con los sabores del mar. Este domingo, La Palapa te espera para cerrar la semana santa con broche de oro." },
    { mes: 3, dia: 30, nombre: "Día del Niño",             icono: "🧒", mensaje: "Los niños son la alegría del mundo. Trae a los pequeños a disfrutar de un día increíble lleno de sabor y diversión en La Palapa." },
    { mes: 4, dia: 1,  nombre: "Día del Trabajo",          icono: "🛠️", mensaje: "Te ganaste un descanso. Celebra tu esfuerzo con una cerveza bien fría y la mejor botana en La Palapa. ¡Te lo mereces!" },
    { mes: 4, dia: 5,  nombre: "Batalla de Puebla",        icono: "🇲🇽", mensaje: "¡Viva México! Celebra nuestra historia y nuestra increíble gastronomía en La Palapa. Una fecha patria que sabe a triunfo." },
    { mes: 4, dia: 10, nombre: "Día de la Madre",          icono: "🌷", mensaje: "Ella lo merece todo. Consiéntela con los sabores que más ama en La Palapa. Una experiencia inolvidable para la reina de la casa." },
    { mes: 4, dia: 15, nombre: "Día del Maestro",          icono: "📚", mensaje: "Gracias por enseñar con el corazón. Este día, el reconocimiento es para ti. Celebra tu gran labor con una comida especial en La Palapa." },
    { mes: 5, dia: 21, nombre: "Día del Padre",            icono: "👔", mensaje: "Papá, el héroe de la vida real. Celebra a lo grande con una parrillada, las chelas más frías y la mejor vista en La Palapa. ¡Por ti, papá!" },
    { mes: 8, dia: 15, nombre: "Grito de Independencia",   icono: "🇲🇽", mensaje: "¡Viva México! Esta noche el grito se celebra con sabor. Ven con los amigos a La Palapa y sé parte de la fiesta más mexicana de todas." },
    { mes: 8, dia: 16, nombre: "Día de la Independencia",  icono: "🎊", mensaje: "México está de fiesta y La Palapa también. Celebra nuestra independencia con los sabores que nos hacen únicos. ¡Que viva México!" },
    { mes: 9, dia: 31, nombre: "Halloween",                icono: "🎃", mensaje: "La noche más divertida del año. Ven disfrazado y disfruta de una cena de miedo... pero del bueno. En La Palapa el terror es delicioso." },
    { mes: 10, dia: 1, nombre: "Día de Todos Santos",      icono: "🕯️", mensaje: "Recordar es vivir. Honra la memoria de quienes ya no están con una comida especial en La Palapa. La tradición nos une." },
    { mes: 10, dia: 2, nombre: "Día de Muertos",           icono: "💀", mensaje: "La muerte es parte de la vida, y en México la celebramos con alegría. Ven a vivir esta hermosa tradición con altares, color y sabor en La Palapa." },
    { mes: 10, dia: 16, nombre: "Día de la Revolución",    icono: "🐴", mensaje: "Puente de la Revolución. Aprovecha estos días para venir a disfrutar del mejor ambiente y la comida más sabrosa de Cacahoatán." },
    { mes: 11, dia: 12, nombre: "Día de la Virgen de Guadalupe", icono: "🌹", mensaje: "Morenita de Tepeyac, bendice nuestra mesa. Ven a celebrar con fe y sabor en La Palapa. Una fecha especial para compartir en familia." },
    { mes: 11, dia: 24, nombre: "Nochebuena",              icono: "🎄", mensaje: "La noche más mágica del año. Celebra la Navidad con los tuyos alrededor de una mesa llena de sabor en La Palapa." },
    { mes: 11, dia: 25, nombre: "Navidad",                 icono: "🎅", mensaje: "Navidad es compartir, Navidad es amor. Vive la magia de estos días con los sabores tradicionales de La Palapa. ¡Feliz Navidad!" },
    { mes: 11, dia: 31, nombre: "Fin de Año",              icono: "✨", mensaje: "Despide el año con broche de oro. Una cena inolvidable en La Palapa es el mejor cierre para un año increíble. ¡Brindemos juntos!" }
  ];

  function obtenerFechaMexico() {
    const ahora = new Date();
    const opciones = { timeZone: 'America/Mexico_City', year: 'numeric', month: '2-digit', day: '2-digit' };
    const partes = new Intl.DateTimeFormat('en-CA', opciones).format(ahora).split('-');
    return { año: parseInt(partes[0]), mes: parseInt(partes[1]) - 1, dia: parseInt(partes[2]) };
  }

  function esHoyFestivo(fecha) {
    return festivos.some(f => f.mes === fecha.mes && f.dia === fecha.dia);
  }

  function obtenerFestivoHoy(fecha) {
    return festivos.find(f => f.mes === fecha.mes && f.dia === fecha.dia);
  }

  function obtenerProximoFestivo(fecha) {
    const hoy = new Date(Date.UTC(fecha.año, fecha.mes, fecha.dia));
    let proximo = null;
    let menorDiferencia = Infinity;

    for (const f of festivos) {
      let añoFestivo = fecha.año;
      const fechaFestivo = new Date(Date.UTC(añoFestivo, f.mes, f.dia));
      if (fechaFestivo <= hoy) {
        añoFestivo++;
        fechaFestivo.setUTCFullYear(añoFestivo);
      }
      const diff = Math.ceil((fechaFestivo - hoy) / (1000 * 60 * 60 * 24));
      if (diff > 0 && diff < menorDiferencia) {
        menorDiferencia = diff;
        proximo = { ...f, dias: diff };
      }
    }
    return proximo;
  }

  function formatearFecha(mes, dia) {
    const nombres = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    return `${dia} de ${nombres[mes]}`;
  }

  function actualizar() {
    const contenedor = UI.festivoContenido;
    const fecha = obtenerFechaMexico();

    if (esHoyFestivo(fecha)) {
      const festivo = obtenerFestivoHoy(fecha);
      contenedor.innerHTML = `
        <div class="tarjeta-festivo">
          <div class="tarjeta-festivo-inner">
            <div class="festivo-icono">${festivo.icono}</div>
            <div class="festivo-nombre">${festivo.nombre}</div>
            <div class="festivo-fecha">${formatearFecha(festivo.mes, festivo.dia)}</div>
            <p class="festivo-mensaje">${festivo.mensaje}</p>
            <a href="https://wa.me/529621772132?text=¡Hola!%20Voy%20a%20celebrar%20el%20${encodeURIComponent(festivo.nombre)}%20en%20La%20Palapa" target="_blank" rel="noopener" class="btn btn-primario festivo-cta">🎉 Aparta tu mesa</a>
          </div>
        </div>`;
    } else {
      const prox = obtenerProximoFestivo(fecha);
      if (prox) {
        contenedor.innerHTML = `
          <div class="tarjeta-countdown">
            <div class="tarjeta-countdown-inner">
              <div class="countdown-label">Próximo festivo</div>
              <div class="countdown-nombre">${prox.nombre}</div>
              <div class="countdown-numero">${prox.dias}</div>
              <div class="countdown-dias">días para celebrar</div>
              <p class="countdown-fecha">
                ${formatearFecha(prox.mes, prox.dia)} — ${prox.icono}
              </p>
            </div>
          </div>`;
      }
    }
  }

  return { init: actualizar };
})();

const Modal = (() => {
  let lastFocused = null;

  function open(src) {
    const altText = src.replace(/\.\w+$/, '').replace(/[_-]/g, ' ');
    UI.modalImg.src = src;
    UI.modalImg.alt = altText;
    lastFocused = document.activeElement;
    UI.modal.classList.add('activo');
    setTimeout(() => UI.modalCerrar.focus(), 100);
    document.body.style.overflow = 'hidden';
  }

  function close() {
    UI.modal.classList.remove('activo');
    document.body.style.overflow = '';
    if (lastFocused) {
      lastFocused.focus();
      lastFocused = null;
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Escape') {
      close();
      return;
    }
    if (e.key === 'Tab') {
      const focusable = UI.modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }

  UI.modal.addEventListener('click', function (e) {
    if (e.target === UI.modal) close();
  });

  UI.modalCerrar.addEventListener('click', close);

  document.addEventListener('keydown', function (e) {
    if (UI.modal.classList.contains('activo')) {
      handleKeyDown(e);
    }
  });

  return { open, close };
})();

(function () {
  if (UI.navSentinel && UI.navbar) {
    new IntersectionObserver(function (entries) {
      UI.navbar.classList.toggle('scrolled', !entries[0].isIntersecting);
    }, { threshold: 0 }).observe(UI.navSentinel);
  }
})();

function abrirMenu() {
  UI.navMobile.classList.add('abierto');
  document.body.style.overflow = 'hidden';
}

function cerrarMenu() {
  UI.navMobile.classList.remove('abierto');
  document.body.style.overflow = '';
}

function comoLlegar() {
  if (!navigator.geolocation) {
    window.open('https://www.google.com/maps/dir//Carretera+Cacahoat%C3%A1n+Uni%C3%B3n+Ju%C3%A1rez+km+4.5+Cacahoat%C3%A1n+Chiapas', '_blank');
    return;
  }
  navigator.geolocation.getCurrentPosition(
    function (pos) {
      window.open('https://www.google.com/maps/dir/' + pos.coords.latitude + ',' + pos.coords.longitude + '/Carretera+Cacahoat%C3%A1n+Uni%C3%B3n+Ju%C3%A1rez+km+4.5+Cacahoat%C3%A1n+Chiapas', '_blank');
    },
    function () {
      window.open('https://www.google.com/maps/dir//Carretera+Cacahoat%C3%A1n+Uni%C3%B3n+Ju%C3%A1rez+km+4.5+Cacahoat%C3%A1n+Chiapas', '_blank');
    }
  );
}

function enviarReserva(event) {
  event.preventDefault();
  const nombre = UI.reservaNombre.value.trim();
  const fecha = UI.reservaFecha.value;
  const hora = UI.reservaHora.value;
  const personas = UI.reservaPersonas.value;
  const peticiones = UI.reservaPeticiones.value.trim();

  let msg = '¡Hola! Quiero hacer una reserva en La Palapa';
  msg += '\n\n👤 Nombre: ' + nombre;
  msg += '\n📅 Fecha: ' + fecha;
  msg += '\n⏰ Hora: ' + hora;
  msg += '\n👥 Personas: ' + personas;
  if (peticiones) msg += '\n📝 Peticiones: ' + peticiones;

  window.open('https://wa.me/529621772132?text=' + encodeURIComponent(msg), '_blank');
}

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(function (el) {
  observer.observe(el);
});

document.addEventListener('DOMContentLoaded', function () {
  Festivos.init();
  Typewriter.init();
});
