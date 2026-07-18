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
  reservaPeticiones: document.getElementById('reserva-peticiones'),
  btnReservar: document.getElementById('btn-reservar'),
  googleSignout: document.getElementById('google-signout'),
  googleUserName: document.getElementById('google-user-name'),
  contingenteBanner: document.getElementById('contingente-banner'),
  contingenteTitulo: document.getElementById('contingente-titulo'),
  contingenteDesc: document.getElementById('contingente-desc')
};

const Contingente = (() => {
  const avisos = [
    // { fecha: '2026-07-20', titulo: 'Cerrado por mantenimiento', desc: 'El día 20 de julio estaremos cerrados por mantenimiento. Regresamos el 21 con el mismo sabor de siempre.' },
    // { fecha: '2026-07-25', titulo: 'Apertura tarde', desc: 'Este viernes abrimos a las 12:00 pm por inventario. ¡Te esperamos!' }
  ];
  function init() {
    if (!UI.contingenteBanner || avisos.length === 0) return;
    const hoy = new Date();
    const hoyStr = hoy.toISOString().split('T')[0];
    const aviso = avisos.find(a => a.fecha === hoyStr);
    if (aviso) {
      UI.contingenteTitulo.textContent = aviso.titulo;
      UI.contingenteDesc.textContent = aviso.desc;
      UI.contingenteBanner.classList.remove('oculto');
    }
  }
  return { init };
})();

/* ═══ 50+ RESEÑAS ═══ */
var RESENAS = [
  'Carlos M.|Anónimo|3|Pos yo nomás vine y comí. La comida no está mala pero pos quién sabe. La gente dice que es buena. A lo mejor otro día vuelvo si ando por ai.',
  'María G.|Cacahoatán|5|Hoy vi un pajarito cantando en los árboles del estacionamiento y supe que este lugar es mágico ❤️ la señora de la cocina me regaló una sonrisa y el caldo me curó el alma. Volveré cuando las estrellas se alineen ✨',
  'Juan Carlos López Pérez|Faja de Oro|5|Ese caldo de gallina está bien bueno mi hermano. Fui con mi jefa y mis hijos y la verdad la pasamos bien chido. La piscina bien limpia y las cheves bien frías. Recomendado 100%',
  'Doña Lola García|Cacahoatán|5|Ay mijo que rico todo. Llevé a mis nietos y se bañaron en la alberca toda la tarde. Comimos chilaquiles y aguachile. El aguachile pica bien rico. Volvemos el domingo.',
  'El Güero Hernández|Unión Juárez|5|Órale pus la parrillada monumental si está bien cabrona. Almorzamos 6 personas y sobró. La carne bien asada, las chelas bien frías. El dueño bien atento. Esto es Chiapas mi rey.',
  'Pedro López|Cacahoatán|4|Pos ta bueno el lugar. Fui con mi esposa y comimos bien. El ceviche está fresco. Solo que hace calor pero pus tienen la alberca pa refrescarse. Volveré seguuro.',
  'La Chata Martínez|Tapachula|4|Fui con mi comadre y nos gustó. Los camarones al mojo de ajo están sabrosos. El servicio un poco lento pero pus estaba lleno. Las micheladas bien preparadas.',
  'Don Toño Reyes|Cacahoatán|5|Yo soy de por aquí y le digo que este lugar ha mejorado un montón. Ahora está bien arreglado. La comida es casera como la que hace una uno en su casa. Recomiendo el café de olla.',
  'José Ángel Ruiz Vázquez|Tapachula|5|Excelente atención del mesero Jorge, bien servicial. Comimos cóctel de camarón y aguachile morado. Todo fresco y bien sazónado. Precios accesibles. Volveremos en familia.',
  'Rosa María Pérez|Cacahoatán|4|Pos fui el martes de promo con mi hermana y la verdad si está bien la oferta. Dos chelas y una botana por $45 cada quien. El ambiente bien tranqui. Me gustó.',
  'Don Chuy Morales|Faja de Oro|5|Soy leñero de Faja de Oro y cuando bajo a Cacahoatán como aquí. El caldo de pata está bien bueno pa\'l calor. Te repone. Y la cerveza bien helada como debe ser.',
  'María de Jesús Hernández|Unión Juárez|5|Llevé a toda mi familia y la pasamos hermoso. La piscina tiene vista a las montañas y el Jardín está bien bonito. Comimos parrillada y sobró bastante. Buena atención.',
  'El Chino García|Cacahoatán|4|Está chido el lugar. Fui con mis cuates después de la chamba. La cerveza fría, el aguachile picosito. Nomás que pusieron música bien quedito pero igual nos gustó.',
  'Lupita Sánchez|Tapachula|5|Ay no mija que rico todo. Los chilaquiles con huevo están divinos. El lugar bien bonito con sus palapas y las matas. Me tomé fotos bien padres pa\'l face.',
  'Don Jorge Pérez García|Cacahoatán|5|Yo conozco desde que empezaron y cada día mejor. La atención de primera y la comida con sazón de la región. El molcajete de mariscos está para chuparse los dedos. Sigan así.',
  'Ana Karen López|Tapachula|5|Fui con mis amigas a desayunar y nos encantó. Pedimos chilaquiles de los tres y todos estaban buenos. El café de olla bien aromático. Precios bien. Regresamos.',
  'Martín López|Tuxtla Gutiérrez|5|Bajé de Tuxtla por trabajo y un compa me recomendó. No mames que buen lugar. Comí aguachile verde y unos camarones a la diabla. Todo de puta madre. La próxima traigo a la patrona.',
  'Carmelita Ruiz|Cacahoatán|4|Fui con mi esposo a comer. El servicio bien atento. La comida rica. El lugar bien limpio. Nomás que el estacionamiento está de terracería y con el polvo pos uno se ensucia.',
  'Don Juan Hernández López|Faja de Oro|5|Soy de Faja de Oro y cada que puedo voy. La comida es bien sabrosa y el ambiente tranquilo. Me gusta la parrillada pa\' compartir con la familia. Buen precio.',
  'Bety González|Tapachula|5|Increíble la atención. Fuimos a celebrar el cumpleaños de mi hija y todo salió perfecto. La piscina bien limpia y la comida deliciosa. Todos felices. Recomiendo.',
  'El Pato Pérez|Cacahoatán|5|Pos yo digo que es el mejor restaurante de Cacahoatán y sus alrededores. La comida bien preparada, la atención bien chida. Y el ambiente familiar. Que siga así.',
  'Sofía Gutiérrez Morales|Unión Juárez|5|Me encantó todo. La vista a las montañas, la comida, la atención. Pedí camarones al ajillo y estaban de otro mundo. Mi esposo pidió carne asada y también buena.',
  'Don José Luis Hernández|Tapachula|4|Buena experiencia. El lugar es amplio y bonito. La comida de buen sazón. Solo que el domingo estaba lleno y tardaron un poco pero todo bien. Volveré.',
  'Gloria Méndez|Cacahoatán|5|Siempre que tengo visita de fuera los traigo aquí. La Palapa es el mejor lugar pa\' comer rico y pasar el día. La alberca, la comida, las chelas. Todo en un solo lugar.',
  'Roberto Vázquez Cruz|Cacahoatán|4|Buen sazón, buena atención, buenos precios. Lo único que no me gustó es que no tenían el plato mar y tierra que quería. Pero lo que pedimos estaba bueno. Volveré a probarlo.',
  'Doña María López|Tapachula|5|Ay Dios mío que rico todo. El caldo de gallina me recordó al que hace mi mamá en el rancho. Las instalaciones bien bonitas. Me quedé dormida en una hamaca después de comer.',
  'El Güero Mendoza|Cacahoatán|5|A toda madre el lugar. Fui con la family y la pasamos chingón. Las chelas frías, la comida buena y la muchacha que atiende bien linda. Recomiendo la parrillada monumental.',
  'Laura Patricia Hernández|Tapachula|5|Excelente lugar para llevar a los niños. Tienen espacio para correr, la alberca, y la comida es buena. Pedí tostadas de ceviche y estaban frescas. Volveremos pronto.',
  'Vicente Pérez|Cacahoatán|4|Pos ta bien el local. La comida buena, las chelas frías. Nomás que el camino de terracería pa\' llegar está medio feo pero pus ya uno se acostumbra.',
  'Alejandra Ríos|Tapachula|5|Fuimos con un grupo de amigas y la pasamos increíble. La música, la comida, el ambiente. Todo perfecto. Pedimos varios platillos para compartir y todo llegó bien rápido.',
  'Don Manuel Cruz García|Faja de Oro|5|Yo soy campesino y cuando termino la chamba me doy una vuelta. El caldo de gallina me repone. La atención de primera. Buenos precios para el trabajador.',
  'Cristina López Pérez|Cacahoatán|5|El lugar es muy bonito y la comida bien sabrosa. Me encantaron las aguas frescas. La jarra grande rinde bien. La atención de don Manuel y su gente es excelente.',
  'Francisco Javier Morales|Unión Juárez|4|Buen lugar pá comer en familia. El ceviche de camarón está fresco y bien preparado. La piscina está limpia. Todo bien. Volveré seguuro.',
  'Rigo Martínez|Tapachula|5|No mames qué chido está este lugar. Fui con mi morra y nos gustó. El aguachile morado está bien loco de sabroso. La atención de lujo. Regresamos cada quincena.',
  'Doña Chuy García|Cacahoatán|5|Mija yo ya soy clienta fiel. Desde que abrieron vengo con mi familia. Todo bien rico, bien limpio y bien atendido. Bendiciones al dueño y a los muchachos.',
  'Ramiro López Hernández|Tapachula|4|Buena parrillada y buen ambiente. La carne asada individual está bien cocida y jugosa. Las cervezas bien frías. El precio justo por lo que ofrecen.',
  'Saraí Pérez|Cacahoatán|5|Me gustó mucho. Fui con mi mamá y mi abuelita. La abuelita pidió caldo de pata y dijo que estaba como el que hacía su mamá. La atención bien amable.',
  'Oscar Martínez López|Motozintla|5|Vine desde Motozintla porque me dijeron que era bueno y no mienten. La comida es de primera. El aguachile verde está en su punto. La atención de los meseros bien profesional.',
  'Ruth García|Cacahoatán|4|Todo bien rico. Fui con mis hijos y se bañaron en la alberca. La comida buena. Nomás que el sol está bien fuerte y hay pocas sombrillas. Pero bien.',
  'Juan Pérez|Tuxtla|5|Sin duda el mejor lugar de la zona. La vista al volcán Tacaná es impresionante. La comida deliciosa. Pedí mojarra frita y estaba crujiente y bien sazónada. Volveré.',
  'Betty López|Cacahoatán|5|El lugar es hermoso, bien arreglado con sus palapas y sus matas. Comí chilaquiles con carne asada y estaban bien buenos. El café de olla delicioso. Recomiendo.',
  'José Alfredo Pérez García|Tapachula|5|Excelente todo. La atención, la comida, el lugar. Pedimos molcajete de mariscos y estaba bien servido. Buena música de fondo. Un lugar para regresar siempre.',
  'Guillermo Hernández|Cacahoatán|5|Pos yo digo que este lugar es de los mejores. La comida es casera y el ambiente familiar. Los precios no son caros pá lo que ofrecen. Bien recomendado.',
  'Maribel Cruz|Unión Juárez|4|Fui con mi esposo a comer y la pasamos bien. Las instalaciones bien bonitas. La comida buena, el pescado fresco. Volveremos pa\' probar más platillos.',
  'Don Jesús García López|Faja de Oro|5|Soy de Faja de Oro y llevo a mi familia cada mes. La comida bien sazónada, el servicio rápido y el ambiente tranquilo. La parrillada para 4 personas deja bien lleno.',
  'Lupita Morales|Tapachula|5|Me encantó el lugar. La atención bien cálida, la comida deliciosa. Pedí camarones a la diabla y estaban en su punto de picor. La limonada bien fresca. Volveré.',
  'El Cepillo Hernández|Cacahoatán|4|Está perro el lugar. Fui con los compas de la obra. Las chelas frías y el aguachile bien picosito. La música bien. Nomás que se llena temprano.',
  'Dora García|Cacahoatán|5|Toda la familia quedó contenta. Los niños felices en la alberca, los grandes comiendo rico y tomando cerveza fría. Plan perfecto para el domingo.',
  'Antonio López Méndez|Tapachula|5|Excelente sazón. El caldo de gallina es espectacular. La atención del personal es de primera. El lugar bien limpio y bien cuidado. Sigan así.',
  'Carmen Pérez|Unión Juárez|5|Muy bonito lugar. La comida bien sabrosa y las porciones grandes. Pedimos parrillada para 2 y comimos 3 personas. Buena relación calidad-precio. Volveré.',
  'Miguel Ángel Hernández|Cacahoatán|4|Pos estuvo bien. La comida buena, el servicio rápido. El estacionamiento está amplio. Todo bien. Volveré con la familia.',
  'Rosa Elena López|Tapachula|5|Hermoso lugar. La decoración, las palapas, la piscina. Todo muy bonito. La comida deliciosa. Pedí cóctel de camarón y aguachile. Todo fresco. Recomiendo ampliamente.',
  'Don Pedro Martínez|Faja de Oro|5|Yo trabaje en el campo toda mi vida y se lo que es comer bueno. Aqui la comida es como de antes. El caldo de gallina y las parrilladas son lo mejor. Bien gracias.',
  'Laura García|Cacahoatán|4|Todo bien rico. Las instalaciones bien bonitas. El único pero es que el día que fui había muchas moscas por la temporada de calor. Pero la comida bien buena.',
  'Arturo Pérez López|Tapachula|5|De los mejores restaurantes que he visitado en Chiapas. La atención de lujo, la comida de primera calidad y las instalaciones bien cuidadas. Volveremos cada mes.',
  'Nelson P.|Cacahoatán|5|Pos yo nomás vine y ya. La comida buena, la chela fría. No le busque más.',
  'La Güera Hernández|Tapachula|4|Fui con mi novio y todo bien rico. Nomás que el mesero se tardó pero la comida buena. Los camarones al ajillo están bien sabrosos.',
  'Don Ramón|Faja de Oro|5|Ésta es la segunda vez que vengo. La primera vine solo y agora traje a toda la familia. La parrillada pa\' cuatro está bien servida. Buen precio pa\' lo que dan.',
  'Anónimo|Cacahoatán|5|Todo bien rico, buena atención, limpieza. Volveré.',
  'José Luis "El Cebollero"|Cacahoatán|4|Ese aguachile verde está bien cabrón. Pica pero sabe rico. Las chelas frías. Todo bien. Nomás el estacionamiento de tierra pero pus ya.',
  'María Elena López|Tuxtla|5|Excelente lugar, muy recomendado. La comida fresca y bien preparada. Atención de primera. Me encantó la decoración.',
  'Toño R.|Cacahoatán|5|Ya voy como 4 veces y nunca falla. El caldo de gallina es mi perdición. Sigan así.',
  'Anónimo|Tapachula|5|El lugar está muy bonito y la comida deliciosa. Los precios accesibles. Volveré con mi familia.',
  'Don Jorge "El Chino" Morales|Faja de Oro|5|Yo soy de rancho y esto me recuerda a la comida de antes. La carne asada bien hecha y las porciones bien servidas. Buenos precios pa\'l trabajador.'
];

let usuarioGoogle = null;

function decodificarJWT(token) {
  const base64 = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
  const raw = atob(base64);
  const bytes = new Uint8Array(raw.length);
  for (let i = 0; i < raw.length; i++) bytes[i] = raw.charCodeAt(i);
  return JSON.parse(new TextDecoder().decode(bytes));
}

function handleCredentialResponse(response) {
  const payload = decodificarJWT(response.credential);
  usuarioGoogle = payload;
  UI.googleUserName.textContent = payload.name;
  document.getElementById('google-avatar').src = payload.picture;
  document.getElementById('google-avatar').alt = payload.name;
  UI.googleSignout.classList.remove('oculto');
  document.querySelector('.g_id_signin')?.previousElementSibling?.classList.add('oculto');
  document.querySelector('.g_id_signin').classList.add('oculto');
  UI.reservaNombre.value = payload.name;
  UI.reservaNombre.readOnly = true;
  UI.btnReservar.classList.remove('oculto');
  const navSaludo = document.getElementById('navSaludo');
  navSaludo.textContent = '👋 ' + payload.name.split(' ')[0];
  navSaludo.style.display = 'inline';
  mostrarToast('¡Bienvenido, ' + payload.name.split(' ')[0] + '!');
  sessionStorage.setItem('google_nombre', payload.name);
  sessionStorage.setItem('google_foto', payload.picture);
}

function mostrarToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('visible');
  setTimeout(() => el.classList.remove('visible'), 3000);
}

function escapeHtml(s) {
  var d = document.createElement('div');
  d.appendChild(document.createTextNode(s || ''));
  return d.innerHTML;
}

function cerrarSesionGoogle() {
  google.accounts.id.disableAutoSelect();
  usuarioGoogle = null;
  UI.googleSignout.classList.add('oculto');
  document.querySelector('.g_id_signin')?.previousElementSibling?.classList.remove('oculto');
  document.querySelector('.g_id_signin').classList.remove('oculto');
  UI.reservaNombre.value = '';
  UI.reservaNombre.readOnly = false;
  UI.btnReservar.classList.add('oculto');
  document.getElementById('navSaludo').style.display = 'none';
  sessionStorage.removeItem('google_nombre');
  sessionStorage.removeItem('google_foto');
}

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
    var esVid = ['mp4','webm','mov','avi'].indexOf(src.split('.').pop().toLowerCase()) !== -1;
    if (esVid) {
      UI.modalImg.style.display = 'none';
      var vid = UI.modal.querySelector('video');
      if (!vid) {
        vid = document.createElement('video');
        vid.controls = true;
        vid.autoplay = true;
        UI.modal.insertBefore(vid, UI.modalImg);
      }
      vid.style.display = '';
      vid.src = src;
      vid.play();
    } else {
      var vid = UI.modal.querySelector('video');
      if (vid) { vid.pause(); vid.style.display = 'none'; }
      UI.modalImg.style.display = '';
      UI.modalImg.src = src;
      UI.modalImg.alt = src.replace(/\.\w+$/, '').replace(/[_-]/g, ' ');
    }
    lastFocused = document.activeElement;
    UI.modal.classList.add('activo');
    setTimeout(function() { UI.modalCerrar.focus(); }, 100);
    document.body.style.overflow = 'hidden';
  }

  function close() {
    UI.modal.classList.remove('activo');
    document.body.style.overflow = '';
    var vid = UI.modal.querySelector('video');
    if (vid) { vid.pause(); }
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
  var destino = 'https://www.google.com/maps/dir//15.026061,-92.154527';
  if (!navigator.geolocation) { window.open(destino, '_blank'); return; }
  navigator.geolocation.getCurrentPosition(
    function (pos) { window.open('https://www.google.com/maps/dir/' + pos.coords.latitude + ',' + pos.coords.longitude + '/15.026061,-92.154527', '_blank'); },
    function () { window.open(destino, '_blank'); }
  );
}

function obtenerFechaHoraMX() {
  const ahora = new Date();
  const partes = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Mexico_City', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(ahora);
  const p = {};
  for (const part of partes) p[part.type] = part.value;
  return {
    año: parseInt(p.year), mes: parseInt(p.month), dia: parseInt(p.day),
    hora: parseInt(p.hour), minuto: parseInt(p.minute)
  };
}

function formatearFechaISO(año, mes, dia) {
  return año + '-' + String(mes).padStart(2, '0') + '-' + String(dia).padStart(2, '0');
}

function formatearHora(hora, minuto) {
  if (arguments.length === 1 && typeof hora === 'string') {
    try { return new Date(hora).toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit', timeZone: 'America/Mexico_City' }); }
    catch(e) { return ''; }
  }
  return String(hora).padStart(2, '0') + ':' + String(minuto).padStart(2, '0');
}

function limpiarErrores() {
  document.querySelectorAll('.error-msg').forEach(e => e.textContent = '');
}

function mostrarError(id, msg) {
  document.getElementById(id).textContent = msg;
}

function validarReserva() {
  limpiarErrores();
  let valido = true;
  const ahoraMX = obtenerFechaHoraMX();
  const hoyStr = formatearFechaISO(ahoraMX.año, ahoraMX.mes, ahoraMX.dia);
  const minutoActual = ahoraMX.hora * 60 + ahoraMX.minuto;

  /* ── Nombre ── */
  const nombre = UI.reservaNombre.value.trim();
  if (!nombre) {
    mostrarError('error-nombre', 'El nombre es obligatorio.');
    valido = false;
  } else if (nombre.length < 2) {
    mostrarError('error-nombre', 'El nombre debe tener al menos 2 letras.');
    valido = false;
  } else if (nombre.length > 100) {
    mostrarError('error-nombre', 'El nombre es demasiado largo.');
    valido = false;
  } else if (!/^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\s'.]+$/.test(nombre)) {
    mostrarError('error-nombre', 'El nombre contiene caracteres no válidos.');
    valido = false;
  }

  /* ── Fecha ── */
  const fechaVal = UI.reservaFecha.value;
  if (!fechaVal) {
    mostrarError('error-fecha', 'Selecciona una fecha.');
    valido = false;
  } else if (fechaVal < hoyStr) {
    mostrarError('error-fecha', 'No puedes reservar para una fecha pasada.');
    valido = false;
  } else {
    const fechaSel = new Date(fechaVal + 'T12:00:00');
    if (fechaSel.getDay() === 3) {
      mostrarError('error-fecha', 'Cerramos los miércoles. Elige otro día.');
      valido = false;
    }
    const fechaLimite = new Date(ahoraMX.año, ahoraMX.mes, ahoraMX.dia);
    if (fechaSel > fechaLimite) {
      mostrarError('error-fecha', 'Solo puedes reservar con hasta 3 meses de anticipación.');
      valido = false;
    }
  }

  /* ── Hora ── */
  const horaVal = UI.reservaHora.value;
  if (!horaVal) {
    mostrarError('error-hora', 'Selecciona una hora.');
    valido = false;
  } else if (fechaVal && !/^\d{2}:\d{2}$/.test(horaVal)) {
    mostrarError('error-hora', 'Formato de hora inválido.');
    valido = false;
  } else {
    const [hH, hM] = horaVal.split(':').map(Number);
    const minutosHora = hH * 60 + hM;

    if (minutosHora < 9 * 60) {
      mostrarError('error-hora', 'Abrimos hasta las 9:00 am.');
      valido = false;
    } else if (minutosHora > 17 * 60) {
      mostrarError('error-hora', 'Última reserva: 5:00 pm (cerramos a las 6:00 pm).');
      valido = false;
    } else if (hM !== 0 && hM !== 30) {
      mostrarError('error-hora', 'La hora debe ser :00 o :30 (ej. 14:00, 14:30).');
      valido = false;
    }

    /* Solo hoy: mínimo 1 hora de anticipación */
    if (fechaVal === hoyStr && valido) {
      if (minutosHora <= minutoActual + 60) {
        mostrarError('error-hora', 'Debes reservar con al menos 1 hora de anticipación.');
        valido = false;
      }
    }
  }

  /* ── Personas ── */
  const personasVal = UI.reservaPersonas.value;
  if (!personasVal) {
    mostrarError('error-personas', 'Indica cuántas personas serán.');
    valido = false;
  } else {
    const num = Number(personasVal);
    if (!Number.isInteger(num)) {
      mostrarError('error-personas', 'El número de personas debe ser entero.');
      valido = false;
    } else if (num < 1) {
      mostrarError('error-personas', 'Debe ser al menos 1 persona.');
      valido = false;
    } else if (num > 50) {
      mostrarError('error-personas', 'Máximo 50 personas.');
      valido = false;
    }
  }

  /* ── Peticiones (opcional) ── */
  const peticiones = UI.reservaPeticiones.value.trim();
  if (peticiones.length > 500) {
    mostrarError('error-peticiones', 'Máximo 500 caracteres.');
    valido = false;
  }

  return valido;
}

function actualizarLimitesFechaHora() {
  const ahoraMX = obtenerFechaHoraMX();
  const hoyStr = formatearFechaISO(ahoraMX.año, ahoraMX.mes, ahoraMX.dia);
  const dentro3meses = new Date(ahoraMX.año, ahoraMX.mes, ahoraMX.dia);
  dentro3meses.setMonth(dentro3meses.getMonth() + 3);
  const maxStr = formatearFechaISO(dentro3meses.getFullYear(), dentro3meses.getMonth() + 1, dentro3meses.getDate());

  UI.reservaFecha.min = hoyStr;
  UI.reservaFecha.max = maxStr;

  UI.reservaFecha.addEventListener('change', function () {
    const sel = this.value;
    if (sel === hoyStr) {
      /* Hoy: hora mínima = ahora + 1h, redondeado a :00/:30 */
      const minutoActual = ahoraMX.hora * 60 + ahoraMX.minuto;
      const minAnticipacion = minutoActual + 60;
      const minAnticipacionRedondeado = Math.ceil(minAnticipacion / 30) * 30;
      const hMin = Math.min(Math.floor(minAnticipacionRedondeado / 60), 17);
      const mMin = minAnticipacionRedondeado % 60;
      UI.reservaHora.min = formatearHora(hMin, mMin);
    } else if (sel) {
      UI.reservaHora.min = '09:00';
    }
    UI.reservaHora.max = '17:00';
    limpiarErrores();
  });

  UI.reservaFecha.dispatchEvent(new Event('change'));
}

function enviarReserva(event) {
  event.preventDefault();
  if (!usuarioGoogle) {
    mostrarError('error-nombre', 'Debes iniciar sesión con Google para reservar.');
    return;
  }
  if (!validarReserva()) return;

  const nombre = UI.reservaNombre.value.trim();
  const fecha = UI.reservaFecha.value;
  const hora = UI.reservaHora.value;
  const personas = UI.reservaPersonas.value;
  const peticiones = UI.reservaPeticiones.value.trim();

  const partesFecha = fecha.split('-');
  const fechaFormateada = partesFecha[2] + '/' + partesFecha[1] + '/' + partesFecha[0];

  let msg = '¡Hola! Quiero hacer una reserva en La Palapa';
  msg += '\n\n👤 Nombre: ' + nombre;
  msg += '\n📅 Fecha: ' + fechaFormateada;
  msg += '\n⏰ Hora: ' + hora;
  msg += '\n👥 Personas: ' + personas;
  msg += '\n✉️ Email: ' + usuarioGoogle.email;
  msg += '\n🔐 Verificado con Google: ' + usuarioGoogle.name + ' (' + usuarioGoogle.email + ')';
  msg += '\n🕐 Login: ' + new Date().toLocaleString('es-MX', { timeZone: 'America/Mexico_City' });
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

/* Scroll progress */
(function () {
  var bar = document.getElementById('progress-bar');
  if (!bar) return;
  var ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      var h = document.documentElement;
      var p = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      bar.style.transform = 'scaleX(' + (p / 100) + ')';
      ticking = false;
    });
  }, { passive: true });
})();

/* Mouse glow */
(function () {
  var g = document.getElementById('mouse-glow');
  if (!g) return;
  if (!matchMedia('(pointer: fine)').matches) { g.style.display = 'none'; return; }
  document.addEventListener('mousemove', function (e) {
    g.style.left = e.clientX + 'px';
    g.style.top = e.clientY + 'px';
  }, { passive: true });
  document.addEventListener('mouseenter', function () { g.style.opacity = '1'; });
  document.addEventListener('mouseleave', function () { g.style.opacity = '0'; });
})();

/* 3D Tilt en tarjetas */
(function () {
  if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  var cards = document.querySelectorAll('.menu-item, .instalaciones-item, .pub-card, .resena-card');
  cards.forEach(function (c) {
    c.classList.add('tilt-active');
    var rect = null;
    function updateRect() { rect = c.getBoundingClientRect(); }
    c.addEventListener('mouseenter', updateRect);
    window.addEventListener('scroll', updateRect, { passive: true });
    window.addEventListener('resize', updateRect, { passive: true });
    c.addEventListener('mousemove', function (e) {
      if (!rect) return;
      var x = e.clientX - rect.left, y = e.clientY - rect.top;
      var cx = rect.width / 2, cy = rect.height / 2;
      var dx = (x - cx) / cx, dy = (y - cy) / cy;
      c.style.transform = 'perspective(600px) rotateY(' + (dx * 6) + 'deg) rotateX(' + (-dy * 6) + 'deg) translateY(-4px)';
      var img = c.querySelector('img');
      if (img) img.style.transform = 'scale(1.06) translateZ(20px)';
    });
    c.addEventListener('mouseleave', function () {
      c.style.transform = '';
      var img = c.querySelector('img');
      if (img) img.style.transform = '';
    });
  });
})();

/* Live status */
function actualizarStatus() {
  var el = document.getElementById('statusBar');
  var txt = document.getElementById('statusText');
  if (!el || !txt) return;
  var ahora = new Date();
  var mx = new Date(ahora.toLocaleString('en-US', { timeZone: 'America/Mexico_City' }));
  var dia = mx.getDay();
  var h = mx.getHours();
  var m = mx.getMinutes();
  var minTotal = h * 60 + m;
  var abierto = false;
  if (dia === 3) {
    abierto = false;
    txt.innerHTML = '<span class="status-dot" style="background:#f44336;"></span> Cerrado hoy (Miércoles) · Lun, Mar, Jue, Vie, Sáb, Dom 9:00-18:00';
  } else if (minTotal >= 9 * 60 && minTotal < 18 * 60) {
    abierto = true;
    var cierraEn = 18 * 60 - minTotal;
    var mins = cierraEn % 60;
    txt.innerHTML = '<span class="status-dot" style="background:#4CAF50;"></span> Abierto ahora · Cierra en ' + Math.floor(cierraEn / 60) + 'h ' + mins + 'min';
  } else if (minTotal < 9 * 60) {
    abierto = false;
    txt.innerHTML = '<span class="status-dot" style="background:#f44336;"></span> Cerrado hoy · Abrimos a las 9:00 am';
  } else {
    abierto = false;
    txt.innerHTML = '<span class="status-dot" style="background:#f44336;"></span> Cerrado hoy · Abrimos mañana a las 9:00 am';
  }
  el.className = 'status-bar' + (abierto ? ' abierto' : ' cerrado');
}
actualizarStatus();
setInterval(actualizarStatus, 30000);

/* Live clock */
(function () {
  var clk = document.getElementById('statusClock');
  if (!clk) return;
  function tick() {
    var d = new Date();
    clk.textContent = d.toLocaleTimeString('es-MX', { timeZone: 'America/Mexico_City', hour: '2-digit', minute: '2-digit', second: '2-digit' });
  }
  tick();
  setInterval(tick, 1000);
})();

/* ═══ OCUPACIÓN — FÓRMULA MATEMÁTICA ═══ */
(function() {
  var bar = document.getElementById('ocupacionFill');
  var pct = document.getElementById('ocupacionPct');
  var msg = document.getElementById('ocupacionMsg');
  if (!bar || !pct || !msg) return;
  function calcular() {
    var ahora = new Date();
    var mx = new Date(ahora.toLocaleString('en-US', { timeZone: 'America/Mexico_City' }));
    var dia = mx.getDay();
    var h = mx.getHours();
    var m = mx.getMinutes();
    var minTotal = h * 60 + m;

    // Miércoles cerrado
    if (dia === 3) return { pct: 0, label: 'Cerrado hoy 🚫' };

    // Fuera de horario (antes 9am o después 6pm)
    if (minTotal < 9 * 60 || minTotal >= 18 * 60) return { pct: 0, label: 'Cerrado ahora 🔒' };

    // Factor día de la semana (0-1)
    var factorDia = [0.35, 0.45, 0, 0.55, 0.75, 0.88, 0.72][dia];

    // Factor hora — curva de campana centrada en 14:00 (2pm)
    // Peak a las 14:00 (84% del factor máximo)
    var minutosDesde9 = minTotal - 9 * 60; // 0 = 9am, 540 = 6pm
    var horaNormalizada = minutosDesde9 / 540; // 0 a 1
    // Campana: sin(pi * t)^2, centrada en t=0.55 (~14:00)
    var factorHora = Math.sin(Math.PI * Math.pow(horaNormalizada, 0.9)) * 0.85;
    // Ajuste especial para horas pico de comida (13:00-16:00)
    if (h >= 13 && h < 16) factorHora = Math.max(factorHora, 0.78);

    // Ruido matemático determinístico basado en fecha — cambia cada día
    var hoy = mx.getDate();
    var mes = mx.getMonth();
    var año = mx.getFullYear();
    var dayOfYear = Math.floor((Date.UTC(año, mes, hoy) - Date.UTC(año, 0, 0)) / 86400000);
    var ruido = Math.sin(dayOfYear * 1.7) * 0.12 + Math.cos(dayOfYear * 3.1) * 0.05;
    // Fase lunar aproximada como factor cultural (restaurante lleno en luna llena?)
    var faseLunar = Math.sin(dayOfYear * 0.0167 * Math.PI * 2) * 0.03;

    // Fórmula final
    var ocupacion = factorDia * factorHora + ruido + faseLunar;
    ocupacion = Math.max(0, Math.min(0.95, ocupacion));
    ocupacion = Math.round(ocupacion * 100);

    // Mensaje contextual basado en el nivel
    var msgs = [
      [0, 'Restaurante vacío — ¡tú puedes ser el primero! 🍽️'],
      [15, 'Apenas despertando — ambiente tranquilo 🌅'],
      [30, 'Buena vibra — lugar con espacio 🍃'],
      [50, 'Mitad del aforo — ambiente animado 🎵'],
      [65, 'Bastante lleno — mejor reserva 📞'],
      [80, '¡Casi lleno! Corre a reservar 🏃‍♂️'],
      [91, 'A reventar — solo con reserva 🔥']
    ];
    var label = msgs[0][1];
    for (var i = 0; i < msgs.length; i++) {
      if (ocupacion >= msgs[i][0]) label = msgs[i][1];
    }

    return { pct: ocupacion, label: label };
  }

  function actualizarOcupacion() {
    var r = calcular();
    bar.style.width = r.pct + '%';
    pct.textContent = r.pct + '%';
    msg.textContent = r.label;
    // Color dinámico en la barra según nivel
    var hue = 120 - (r.pct / 100) * 120; // verde→rojo
    bar.style.background = 'linear-gradient(90deg, hsl(' + hue + ',70%,45%), var(--naranja))';
  }

  actualizarOcupacion();
  setInterval(actualizarOcupacion, 60000); // Actualiza cada minuto
})();

/* Stats counter */
(function () {
  var bar = document.getElementById('statsBar');
  var nums = bar ? bar.querySelectorAll('.stat-num') : [];
  if (!nums.length) return;
  var contado = false;
  var obs = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting && !contado) {
      contado = true;
      nums.forEach(function (el) {
        var target = parseInt(el.getAttribute('data-target'));
        var suffix = el.getAttribute('data-suffix') || '';
        var current = 0;
        var step = Math.max(1, Math.floor(target / 40));
        var iv = setInterval(function () {
          current += step;
          if (current >= target) { current = target; clearInterval(iv); }
          el.textContent = current + suffix;
        }, 30);
      });
      obs.disconnect();
    }
  }, { threshold: 0.5 });
  obs.observe(bar);
})();

/* Map lazy load */
(function () {
  var mapFrame = document.getElementById('map-frame');
  var mapPlaceholder = document.getElementById('map-placeholder');
  if (mapFrame && mapPlaceholder) {
    var obs = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) {
        mapFrame.src = mapFrame.getAttribute('data-src');
        mapFrame.classList.add('cargado');
        mapPlaceholder.style.display = 'none';
        obs.disconnect();
      }
    }, { rootMargin: '200px' });
    obs.observe(mapFrame);
  }
})();

/* Back to top + bajar */
const btnSubir = document.getElementById('btn-subir');
const btnBajar = document.getElementById('btn-bajar');
if (btnSubir || btnBajar) {
  let subirTimer = null;
  window.addEventListener('scroll', function () {
    if (subirTimer) clearTimeout(subirTimer);
    subirTimer = setTimeout(function () {
      if (btnSubir) btnSubir.classList.toggle('oculto', window.scrollY < 400);
      if (btnBajar) btnBajar.classList.toggle('oculto', window.scrollY >= 400);
    }, 100);
  }, { passive: true });
}
if (btnBajar) {
  btnBajar.addEventListener('click', function() {
    var target = document.getElementById('menu') || document.getElementById('promo') || document.querySelector('section:not(#hero)');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
}

/* ═══ RENDER RESEÑAS — SUPABASE + LOCAL ═══ */
var SUPABASE_URL = window.__SUPABASE_URL || '';
var SUPABASE_ANON = window.__SUPABASE_ANON || '';

function reseñaToCard(r) {
  var estrellas = '★'.repeat(r.estrellas || 5);
  return '<div class="resena-card">' +
    '<div class="resena-estrellas">' + estrellas + '</div>' +
    '<p class="resena-cita">' + (r.texto || '') + '</p>' +
    '<p class="resena-autor">— ' + (r.nombre || 'Anónimo') + '</p>' +
    '<span class="resena-local">' + (r.localidad || '') + '</span>' +
    '</div>';
}

var ultimaResena = null; // timestamp de la última reseña cargada

function cargarResenas() {
  var grid = document.getElementById('resenas-grid');
  if (!grid) return;

  // 1. Static reviews (default 60) — render SIEMPRE primero
  var estaticas = RESENAS.map(function(r) {
    var p = r.split('|');
    return { nombre: p[0], localidad: p[1], estrellas: parseInt(p[2]) || 5, texto: p[3] };
  });

  // 2. localStorage reviews
  var locales = [];
  try { locales = JSON.parse(localStorage.getItem('lapalapa_reviews') || '[]'); } catch(e) {}

  // Render sincrónico inmediato con lo que tengamos
  grid.innerHTML = locales.concat(estaticas).map(reseñaToCard).join('');

  // 3. Supabase — actualiza si hay conexión
  if (!SUPABASE_URL || !SUPABASE_ANON) return;

  fetch(SUPABASE_URL + '/rest/v1/reviews?select=*&order=creada_en.desc', {
    headers: {
      'apikey': SUPABASE_ANON,
      'Authorization': 'Bearer ' + SUPABASE_ANON
    }
  })
  .then(function(r) { return r.json(); })
  .then(function(supabase) {
    // Merge: Supabase va primero, luego locales, luego estáticas
    var ids = {};
    var todas = [];
    function agregar(r) {
      var key = r.id || r.texto + r.nombre;
      if (ids[key]) return;
      ids[key] = true;
      todas.push(r);
    }
    supabase.forEach(agregar);
    locales.forEach(agregar);
    estaticas.forEach(agregar);
    if (supabase.length > 0) ultimaResena = supabase[0].creada_en;
    grid.innerHTML = todas.map(reseñaToCard).join('');
  })
  .catch(function() {
    // Si falla, ya tenemos el render sincrónico de arriba
  });

  // 4. POLLING cada 5s — reseñas de otros aparecen solas
  setInterval(function() {
    var filtro = ultimaResena
      ? '&creada_en=gt.' + encodeURIComponent(ultimaResena)
      : '';
    fetch(SUPABASE_URL + '/rest/v1/reviews?select=*&order=creada_en.desc&limit=5' + filtro, {
      headers: {
        'apikey': SUPABASE_ANON,
        'Authorization': 'Bearer ' + SUPABASE_ANON
      }
    })
    .then(function(r) { return r.json(); })
    .then(function(nuevas) {
      if (!nuevas || nuevas.length === 0) return;
      if (nuevas[0].creada_en > (ultimaResena || '')) ultimaResena = nuevas[0].creada_en;
      for (var i = nuevas.length - 1; i >= 0; i--) {
        var yaExiste = grid.querySelector('.resena-card[data-id="' + nuevas[i].id + '"]');
        if (yaExiste) continue;
        var card = document.createElement('div');
        card.className = 'resena-card';
        card.setAttribute('data-id', nuevas[i].id);
        card.style.animation = 'itemsFadeIn 0.4s ease';
        card.innerHTML = reseñaToCard(nuevas[i]);
        grid.insertBefore(card, grid.firstChild);
      }
    })
    .catch(function(){});
  }, 5000);
}

/* ═══ REVIEW FORM — SUPABASE ═══ */
function enviarResena(event) {
  event.preventDefault();
  var nom = document.getElementById('resena-form-nombre').value.trim();
  var com = document.getElementById('resena-form-comentario').value.trim();
  var est = parseInt(document.querySelector('input[name="resena-estrellas"]:checked')?.value || '5');
  if (!nom || !com) { mostrarToast('Completa tu nombre y comentario.'); return; }
  if (nom.length < 2) { mostrarToast('Escribe tu nombre real.'); return; }
  if (com.length < 10) { mostrarToast('Escribe al menos 10 caracteres.'); return; }

  var review = { nombre: nom, localidad: 'Acaba de publicar', estrellas: est, texto: com, creada_en: new Date().toISOString() };

  var grid = document.getElementById('resenas-grid');

  // Guardar en Supabase + renderizar con ID (evita duplicados en polling)
  function renderConId(data) {
    if (grid) {
      var card = document.createElement('div');
      card.className = 'resena-card';
      if (data.id) card.setAttribute('data-id', data.id);
      card.style.animation = 'itemsFadeIn 0.4s ease';
      card.innerHTML = reseñaToCard(data);
      grid.insertBefore(card, grid.firstChild);
    }
  }

  if (SUPABASE_URL && SUPABASE_ANON) {
    fetch(SUPABASE_URL + '/rest/v1/reviews', {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_ANON,
        'Authorization': 'Bearer ' + SUPABASE_ANON,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
      },
      body: JSON.stringify(review)
    })
    .then(function(r) { return r.json(); })
    .then(function(guardada) {
      if (guardada && guardada.id) renderConId(guardada);
    })
    .catch(function(){
      // Fallback: render sin ID
      if (grid) renderConId(review);
    });
  } else {
    renderConId(review);
  }

  // Guardar en localStorage (respaldo)
  try {
    var locales = JSON.parse(localStorage.getItem('lapalapa_reviews') || '[]');
    locales.unshift(review);
    localStorage.setItem('lapalapa_reviews', JSON.stringify(locales));
  } catch(e) {}

  document.getElementById('resena-form').reset();
  mostrarToast('✅ ¡Gracias! Tu reseña ya se ve en la página.');
}

/* ═══ LENIS SMOOTH SCROLL ═══ */
if (typeof Lenis !== 'undefined') {
  window.lenis = new Lenis({ duration: 1.8, easing: (t) => 1 - Math.pow(1 - t, 3), wheelMultiplier: 1, touchMultiplier: 1.5 });
  function raf(time) { window.lenis.raf(time); requestAnimationFrame(raf); }
  requestAnimationFrame(raf);
}

/* ═══ CUSTOM CURSOR ═══ */
(function() {
  var ring = document.querySelector('.cursor-ring');
  var dot = document.querySelector('.cursor-dot');
  if (!ring || !dot) return;
  if (!matchMedia('(hover: hover) and (pointer: fine)').matches) { ring.style.display = 'none'; dot.style.display = 'none'; return; }
  var mx = 0, my = 0, rx = 0, ry = 0;
  var escondido = false;
  function ocultar() { if (!escondido) { ring.style.display = 'none'; dot.style.display = 'none'; document.body.classList.add('cursor-text'); escondido = true; } }
  function mostrar() { if (escondido) { ring.style.display = ''; dot.style.display = ''; document.body.classList.remove('cursor-text'); escondido = false; } }
  document.addEventListener('mousemove', function(e) {
    mx = e.clientX; my = e.clientY;
    dot.style.transform = 'translate(' + (mx - 2) + 'px, ' + (my - 2) + 'px)';
    var t = e.target;
    if (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable || t.closest('input,textarea')) ocultar();
    else mostrar();
  });
  function lerp() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.transform = 'translate3d(' + (rx - 15) + 'px, ' + (ry - 15) + 'px, 0)';
    requestAnimationFrame(lerp);
  }
  lerp();
  document.querySelectorAll('a, button, .menu-v-card, .menu-item').forEach(function(el) {
    el.addEventListener('mouseenter', function() { if (escondido) return; ring.style.width = '48px'; ring.style.height = '48px'; ring.style.borderColor = 'var(--amarillo)'; ring.style.background = 'rgba(255,183,3,0.08)'; });
    el.addEventListener('mouseleave', function() { if (escondido) return; ring.style.width = '30px'; ring.style.height = '30px'; ring.style.borderColor = 'rgba(232,93,4,0.5)'; ring.style.background = 'transparent'; });
  });
})();

/* ═══ RIPPLE EFFECT ═══ */
(function() {
  document.querySelectorAll('.btn-menu-completo, #btn-reservar').forEach(function(btn) {
    btn.classList.add('btn-ripple');
    btn.addEventListener('click', function(e) {
      var r = btn.getBoundingClientRect();
      var circle = document.createElement('span');
      circle.classList.add('ripple');
      var d = Math.max(r.width, r.height);
      circle.style.width = circle.style.height = d + 'px';
      circle.style.left = (e.clientX - r.left - d / 2) + 'px';
      circle.style.top = (e.clientY - r.top - d / 2) + 'px';
      btn.appendChild(circle);
      setTimeout(function() { circle.remove(); }, 700);
    });
  });
})();

/* ═══ MAGNETIC BUTTONS ═══ */
(function() {
  document.querySelectorAll('.btn-menu-completo, #btn-reservar, a[href^="#"]').forEach(function(btn) {
    var rect = null;
    function updateRect() { rect = btn.getBoundingClientRect(); }
    btn.addEventListener('mouseenter', updateRect);
    window.addEventListener('scroll', updateRect, { passive: true });
    window.addEventListener('resize', updateRect, { passive: true });
    btn.addEventListener('mousemove', function(e) {
      if (!rect) return;
      var dx = (e.clientX - rect.left - rect.width / 2) * 0.2;
      var dy = (e.clientY - rect.top - rect.height / 2) * 0.2;
      btn.style.transform = 'translate3d(' + dx + 'px, ' + dy + 'px, 0)';
    });
    btn.addEventListener('mouseleave', function() { btn.style.transform = ''; });
  });
})();

/* ═══ TEXT REVEAL ON SCROLL ═══ */
(function() {
  var titles = document.querySelectorAll('.seccion-titulo h2');
  if (!('IntersectionObserver' in window)) return;
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'revealText 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards';
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3, rootMargin: '0px 0px -60px 0px' });
  titles.forEach(function(t) { obs.observe(t); });
})();

/* ═══ 3D TILT ON IMAGE CARDS ═══ */
(function() {
  var items = document.querySelectorAll('.menu-item figure');
  items.forEach(function(fig) {
    var rect = null;
    function updateRect() { rect = fig.getBoundingClientRect(); }
    fig.addEventListener('mouseenter', updateRect);
    window.addEventListener('scroll', updateRect, { passive: true });
    window.addEventListener('resize', updateRect, { passive: true });
    fig.addEventListener('mousemove', function(e) {
      if (!rect) return;
      var x = (e.clientX - rect.left) / rect.width - 0.5;
      var y = (e.clientY - rect.top) / rect.height - 0.5;
      fig.style.transform = 'perspective(600px) rotateX(' + (-y * 12) + 'deg) rotateY(' + (x * 12) + 'deg) scale3d(1.04,1.04,1.04)';
    });
    fig.addEventListener('mouseleave', function() { fig.style.transform = ''; });
  });
})();

/* ═══ MENU VISUAL CARDS ═══ */
(function() {
  var cards = document.querySelectorAll('.menu-v-card');
  cards.forEach(function(c) {
    c.addEventListener('click', function(e) {
      if (c.classList.contains('activo')) { c.classList.remove('activo'); return; }
      cards.forEach(function(x) { x.classList.remove('activo'); });
      c.classList.add('activo');
    });
  });
})();

/* ═══ CARTA MENÚ ═══ */
(function() {
  var cats = document.querySelectorAll('.carta-cat');
  var tabs = document.querySelectorAll('.carta-tab');
  var carta = document.getElementById('menuCarta');

  function highlightCategory(filtro) {
    cats.forEach(function(cat) {
      cat.classList.remove('activo', 'highlight');
      var c = cat.getAttribute('data-carta-cat');
      if (filtro === 'todo' || c === filtro) {
        cat.style.display = '';
        if (filtro !== 'todo') cat.classList.add('highlight');
      } else {
        cat.style.display = 'none';
      }
    });
    if (filtro !== 'todo') {
      var target = document.querySelector('.carta-cat.highlight');
      if (target) {
        var top = target.getBoundingClientRect().top + window.pageYOffset - 100;
        if (window.lenis) window.lenis.scrollTo(top);
        else window.scrollTo({ top: top, behavior: 'smooth' });
      }
    }
  }

  tabs.forEach(function(t) {
    t.addEventListener('click', function() {
      tabs.forEach(function(x) { x.classList.remove('activo'); });
      t.classList.add('activo');
      highlightCategory(t.getAttribute('data-carta'));
    });
  });

  // scroll button
  var btn = document.getElementById('btnMenuCompleto');
  if (btn && carta) {
    btn.addEventListener('click', function() {
      var top = carta.getBoundingClientRect().top + window.pageYOffset - 80;
      if (window.lenis) window.lenis.scrollTo(top);
      else window.scrollTo({ top: top, behavior: 'smooth' });
    });
  }
})();

/* ═══ SOCIAL PROOF ═══ */
(function() {
  var el = document.getElementById('social-proof');
  if (!el) return;

  function enHorario() {
    var mx = new Date(new Date().toLocaleString('en-US', { timeZone: 'America/Mexico_City' }));
    var dia = mx.getDay();
    var hora = mx.getHours();
    var min = mx.getMinutes();
    // Miércoles cerrado
    if (dia === 3) return false;
    // Abierto 9:00 - 18:00
    return hora >= 9 && hora < 18;
  }

  var nombres = [
    { n: 'JC', t: 'acaba de reservar mesa para 4', e: '🔥' },
    { n: 'MG', t: 'está viendo el menú de mariscos', e: '🦐' },
    { n: 'PR', t: 'preguntó por la parrillada', e: '🥩' },
    { n: 'AL', t: 'recomendó el aguachile morado', e: '🫐' },
    { n: 'RM', t: 'va para allá con su familia', e: '👨‍👩‍👧‍👦' },
    { n: 'JV', t: 'pidió chelas frías', e: '🍻' },
    { n: 'LG', t: 'celebra su cumpleaños hoy', e: '🎂' },
    { n: 'CP', t: 'está en la piscina ahora', e: '🏊' }
  ];
  var ultimoIndex = -1;
  function mostrar() {
    if (!enHorario()) return;
    var idx;
    do { idx = Math.floor(Math.random() * nombres.length); } while (idx === ultimoIndex);
    ultimoIndex = idx;
    var d = nombres[idx];
    var toast = document.createElement('div');
    toast.className = 'social-toast';
    toast.innerHTML = '<span class="social-avatar">' + d.e + '</span><span class="social-text"><strong>' + d.n + '</strong> ' + d.t + '</span>';
    el.appendChild(toast);
    setTimeout(function() {
      toast.classList.add('saliendo');
      setTimeout(function() { toast.remove(); }, 400);
    }, 4000);
  }
  if (enHorario()) {
    setTimeout(mostrar, 5000);
    setInterval(mostrar, 20000 + Math.random() * 20000);
  }
})();

/* ═══ CHAT EN VIVO ═══ */
(function() {
  var btn = document.getElementById('chat-btn');
  var panel = document.getElementById('chat-panel');
  var cerrar = document.getElementById('chat-cerrar');
  var msgs = document.getElementById('chat-msgs');
  var nick = document.getElementById('chat-nick');
  var msg = document.getElementById('chat-msg');
  var enviar = document.getElementById('chat-enviar');
  var notif = document.getElementById('chat-notif');
  if (!btn || !panel) return;

  var ultimoId = 0;
  var abierto = false;
  var miNick = localStorage.getItem('lapalapa_nick') || '';

  if (miNick && nick) nick.value = miNick;

  function abrir() {
    abierto = true;
    panel.classList.remove('oculto');
    btn.style.display = 'none';
    if (notif) notif.classList.add('oculto');
    cargarMensajes();
    if (msg) msg.focus();
  }

  function cerrarFn() {
    abierto = false;
    panel.classList.add('oculto');
    panel.style.animation = 'none';
    btn.style.display = '';
    setTimeout(function(){ panel.style.animation = ''; }, 50);
  }

  btn.addEventListener('click', abrir);
  if (cerrar) cerrar.addEventListener('click', cerrarFn);

  // Cerrar con Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && abierto) cerrarFn();
  });

  // Clic fuera del panel lo cierra
  document.addEventListener('click', function(e) {
    if (!abierto) return;
    if (!panel.contains(e.target) && e.target !== btn) cerrarFn();
  });

  function escapeHtml(s) {
    var d = document.createElement('div');
    d.appendChild(document.createTextNode(s || ''));
    return d.innerHTML;
  }

  function formatearHora(iso) {
    try {
      var d = new Date(iso);
      return d.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit', timeZone: 'America/Mexico_City' });
    } catch(_) { return ''; }
  }

  function agregarBurbuja(m, prepend) {
    var div = document.createElement('div');
    var propia = m.nickname === miNick;
    div.className = 'chat-burbuja ' + (propia ? 'propia' : 'otro');
    div.setAttribute('data-cid', m.id);
    var html = '<div class="cb-nick">' + escapeHtml(m.nickname) + '</div>';
    html += '<div>' + escapeHtml(m.texto) + '</div>';
    html += '<div class="cb-hora">' + formatearHora(m.creado_en) + '</div>';
    div.innerHTML = html;
    if (prepend) {
      msgs.insertBefore(div, msgs.firstChild);
    } else {
      msgs.appendChild(div);
      msgs.scrollTop = msgs.scrollHeight;
    }
  }

  function cargarMensajes() {
    if (!SUPABASE_URL || !SUPABASE_ANON) return;
    fetch(SUPABASE_URL + '/rest/v1/messages?select=*&order=creado_en.asc&limit=50', {
      headers: {
        'apikey': SUPABASE_ANON,
        'Authorization': 'Bearer ' + SUPABASE_ANON
      }
    })
    .then(function(r) { return r.json(); })
    .then(function(data) {
      if (!data || data.length === 0) return;
      msgs.innerHTML = '';
      data.forEach(function(m) {
        if (m.id > ultimoId) ultimoId = m.id;
        agregarBurbuja(m, false);
      });
    })
    .catch(function(){});
  }

  function enviarMensaje() {
    var nickname = (nick.value || '').trim();
    var texto = (msg.value || '').trim();
    if (!nickname || !texto) return;
    if (nickname.length < 2) { mostrarToast('Elige un apodo de al menos 2 letras.'); return; }
    if (texto.length < 1) return;

    localStorage.setItem('lapalapa_nick', nickname);
    miNick = nickname;

    var payload = { nickname: nickname, texto: texto };

    fetch(SUPABASE_URL + '/rest/v1/messages', {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_ANON,
        'Authorization': 'Bearer ' + SUPABASE_ANON,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
      },
      body: JSON.stringify(payload)
    })
    .then(function(r) { return r.json(); })
    .then(function(m) {
      if (m && m.id) {
        agregarBurbuja(m, false);
        if (m.id > ultimoId) ultimoId = m.id;
      }
    })
    .catch(function() {
      payload.id = Date.now();
      agregarBurbuja(payload, false);
      mostrarToast('⚠️ Mensaje guardado localmente (sin conexión)');
    });

    msg.value = '';
  }

  enviar.addEventListener('click', enviarMensaje);
  msg.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); enviarMensaje(); }
  });

  // Polling cada 3s cuando está abierto
  setInterval(function() {
    if (!abierto || !SUPABASE_URL || !SUPABASE_ANON) return;
    var filtro = ultimoId ? '&id=gt.' + ultimoId : '';
    fetch(SUPABASE_URL + '/rest/v1/messages?select=*&order=creado_en.asc&limit=5' + filtro, {
      headers: {
        'apikey': SUPABASE_ANON,
        'Authorization': 'Bearer ' + SUPABASE_ANON
      }
    })
    .then(function(r) { return r.json(); })
    .then(function(nuevos) {
      if (!nuevos || nuevos.length === 0) return;
      nuevos.forEach(function(m) {
        if (m.id <= ultimoId) return;
        ultimoId = m.id;
        agregarBurbuja(m, false);
      });
    })
    .catch(function(){});
  }, 3000);

  // Notificación si mensaje nuevo y chat cerrado
  setInterval(function() {
    if (abierto || !SUPABASE_URL || !SUPABASE_ANON) return;
    fetch(SUPABASE_URL + '/rest/v1/messages?select=id&order=id.desc&limit=1', {
      headers: {
        'apikey': SUPABASE_ANON,
        'Authorization': 'Bearer ' + SUPABASE_ANON
      }
    })
    .then(function(r) { return r.json(); })
    .then(function(data) {
      if (data && data[0] && data[0].id > ultimoId && notif) {
        notif.classList.remove('oculto');
      }
    })
    .catch(function(){});
  }, 10000);
})();

/* ═══ JUEGO: ATRAPA LA CERVEZA — MEGA CABRÓN ═══ */
(function() {
  var canvas = document.getElementById('juego-canvas');
  var overlay = document.getElementById('juego-overlay');
  var puntajeEl = document.getElementById('juego-puntaje');
  var reiniciarBtn = document.getElementById('juego-reiniciar');
  var topLista = document.getElementById('juego-top-lista');
  if (!canvas || !overlay) return;

  var ctx = canvas.getContext('2d');
  var W, H;
  var running = false, animId;
  var score = 0, vida = 3, combo = 0, maxCombo = 0;
  var playerX = 0, catchWidth = 34;
  var items = [], particles = [], floatTexts = [], powerups = [];
  var frameCount = 0, spawnRate = 15;
  var shield = false, slowMo = false, bonusWave = false, magnet = false, freeze = false;
  var screenShake = 0, screenFlash = 0;
  var bossActive = false, bossHealth = 0;
  var freezeTimer = 0, magnetTimer = 0;

  var itemPool = [];
  [
    { e: '🍺', pts: 1, prob: 25 },
    { e: '🌮', pts: 2, prob: 20 },
    { e: '🦐', pts: 3, prob: 18 },
    { e: '🍹', pts: 1, prob: 12 },
    { e: '🌯', pts: 2, prob: 10 },
    { e: '🥑', pts: 4, prob: 5 },
    { e: '🔥', pts: 6, prob: 3 },
    { e: '💎', pts: 10, prob: 1 }
  ].forEach(function(d) { for (var i = 0; i < d.prob; i++) itemPool.push(d); });

  var powerDefs = [
    { e: '❤️', effect: 'life', prob: 30 },
    { e: '💥', effect: 'bomb', prob: 20 },
    { e: '🛡️', effect: 'shield', prob: 18 },
    { e: '⏸️', effect: 'slowmo', prob: 12 },
    { e: '🧲', effect: 'magnet', prob: 10 },
    { e: '❄️', effect: 'freeze', prob: 8 },
    { e: '👑', effect: 'boss', prob: 2 }
  ];
  var powerPool = [];
  powerDefs.forEach(function(d) { for (var i = 0; i < d.prob; i++) powerPool.push(d); });

  var gradientSky, gradGround;

  function resize() {
    var r = canvas.getBoundingClientRect();
    W = canvas.width = r.width || 600;
    H = canvas.height = r.height || 400;
    gradientSky = ctx.createLinearGradient(0, 0, 0, H);
    gradientSky.addColorStop(0, '#0a0015');
    gradientSky.addColorStop(0.3, '#150828');
    gradientSky.addColorStop(0.6, '#1f0d30');
    gradientSky.addColorStop(1, '#0d0508');
    gradGround = ctx.createLinearGradient(0, H - 40, 0, H);
    gradGround.addColorStop(0, '#4a2510');
    gradGround.addColorStop(1, '#1a0a04');
  }

  function sound(freq, dur, type) {
    try {
      var ac = new (window.AudioContext || window.webkitAudioContext)();
      var o = ac.createOscillator();
      var g = ac.createGain();
      o.connect(g); g.connect(ac.destination);
      o.type = type || 'sine';
      o.frequency.setValueAtTime(freq, ac.currentTime);
      g.gain.setValueAtTime(0.07, ac.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + (dur || 0.1));
      o.start(ac.currentTime);
      o.stop(ac.currentTime + (dur || 0.1));
    } catch(e) {}
  }

  function crearItem(rapido) {
    var d = itemPool[Math.floor(Math.random() * itemPool.length)];
    var x = 18 + Math.random() * (W - 36);
    var vel = (rapido ? 2.5 : 1.2) + Math.random() * 1.8 + score * 0.008;
    items.push({ e: d.e, pts: d.pts, x: x, y: -35, vy: vel, wobble: (Math.random() - 0.5) * 2.5, phase: Math.random() * 6.28, caught: false, big: d.pts >= 6 });
  }

  function spawnPowerup() {
    var d = powerPool[Math.floor(Math.random() * powerPool.length)];
    var x = 25 + Math.random() * (W - 50);
    powerups.push({ e: d.e, effect: d.effect, x: x, y: -30, vy: 1 + Math.random() * 0.8, caught: false });
  }

  function spawnParticles(x, y, color, count, big) {
    for (var i = 0; i < (count || 15); i++) {
      var a = Math.random() * 6.28;
      var sp = 1 + Math.random() * (big ? 5 : 3);
      particles.push({
        x: x, y: y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 1.5,
        life: 1, decay: 0.012 + Math.random() * 0.025,
        size: (big ? 4 : 2) + Math.random() * (big ? 6 : 4),
        color: color || ['#ff6b6b','#ffd93d','#6bcb77','#4d96ff','#ff6fb7','#e85d04'][Math.floor(Math.random() * 6)]
      });
    }
  }

  function addText(x, y, text, color, big) {
    floatTexts.push({ x: x, y: y, text: text, color: color || '#fff', life: 1, vy: (big ? -2.5 : -1.5), size: big ? 28 : 18 });
  }

  function reiniciar() {
    score = 0; vida = 3; combo = 0; maxCombo = 0;
    items = []; particles = []; floatTexts = []; powerups = [];
    frameCount = 0; spawnRate = 15;
    shield = false; slowMo = false; bonusWave = false; magnet = false; freeze = false;
    screenShake = 0; screenFlash = 0;
    bossActive = false; bossHealth = 0;
    freezeTimer = 0; magnetTimer = 0;
    catchWidth = 34;
    if (puntajeEl) puntajeEl.textContent = '0';
  }

  function gameLoop() {
    if (!running) return;
    frameCount++;

    var sp = Math.max(8, spawnRate - Math.floor(score / 6));
    if (frameCount % sp === 0) {
      crearItem(false);
      if (score > 10 && frameCount % (sp * 2) === 0) crearItem(true);
      if (score > 30 && frameCount % (sp * 3) === 0) crearItem(true);
    }

    if (frameCount % Math.max(120, 240 - score * 2) === 0 && !bonusWave) {
      spawnPowerup();
    }

    if (score > 0 && score % 50 === 0 && !bonusWave && frameCount > 10) {
      bonusWave = true;
      addText(W / 2, H * 0.3, '🔥 BONUS WAVE 🔥', '#ffd93d', true);
      sound(600, 0.3, 'square');
      for (var bw = 0; bw < 12; bw++) {
        (function(i) {
          setTimeout(function() {
            if (!running) return;
            crearItem(true);
            spawnParticles(30 + Math.random() * (W - 60), 20, null, 5);
          }, i * 120);
        })(bw);
      }
      setTimeout(function() { bonusWave = false; }, 1800);
    }

    ctx.save();

    if (screenShake > 0) {
      var sx = (Math.random() - 0.5) * screenShake * 2;
      var sy = (Math.random() - 0.5) * screenShake * 2;
      ctx.translate(sx, sy);
      screenShake *= 0.85;
      if (screenShake < 0.5) screenShake = 0;
    }

    ctx.fillStyle = gradientSky;
    ctx.fillRect(-10, -10, W + 20, H + 20);

    for (var s = 0; s < 30; s++) {
      var sx2 = (s * 127.3 + 60) % W;
      var sy2 = (s * 89.7 + 30) % (H * 0.55);
      var sz2 = 1 + (s % 3);
      var f = Math.sin(frameCount * 0.025 + s * 2.3) * 0.4 + 0.6;
      ctx.globalAlpha = f * (score > 20 ? 0.7 : 0.4);
      ctx.fillStyle = score > 30 && s % 2 === 0 ? '#ffd93d' : '#fff';
      ctx.fillRect(sx2, sy2, sz2, sz2);
    }
    ctx.globalAlpha = 1;

    ctx.fillStyle = gradGround;
    ctx.fillRect(0, H - 40, W, 40);
    ctx.fillStyle = '#5a3018';
    ctx.fillRect(0, H - 42, W, 2);

    if (combo > 3) {
      ctx.shadowColor = '#ffd93d';
      ctx.shadowBlur = 12;
      ctx.fillStyle = '#ffd93d';
      ctx.fillRect(0, H - 3, W, 2);
      ctx.shadowBlur = 0;
    }

    var glowR = 35 + combo * 4;
    var gradGlow = ctx.createRadialGradient(playerX, H - 28, 3, playerX, H - 28, glowR);
    gradGlow.addColorStop(0, 'rgba(232,93,4,' + (0.2 + combo * 0.05) + ')');
    gradGlow.addColorStop(1, 'rgba(232,93,4,0)');
    ctx.fillStyle = gradGlow;
    ctx.beginPath();
    ctx.arc(playerX, H - 28, glowR, 0, 6.28);
    ctx.fill();

    var basketEmoji = combo > 5 ? '🔥🧺🔥' : combo > 2 ? '⚡🧺⚡' : '🧺';
    var basketSize = combo > 3 ? 40 : 36;
    ctx.font = basketSize + 'px serif';
    ctx.textAlign = 'center';
    if (shield) { ctx.shadowColor = '#4d96ff'; ctx.shadowBlur = 20; }
    ctx.fillText(basketEmoji, playerX, H - 12);
    ctx.shadowBlur = 0;

    if (shield) {
      ctx.strokeStyle = 'rgba(77,150,255,' + (0.3 + Math.sin(frameCount * 0.08) * 0.2) + ')';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(playerX, H - 22, 30 + Math.sin(frameCount * 0.05) * 4, 0, 6.28);
      ctx.stroke();
    }

    if (freeze && freezeTimer > 0) {
      freezeTimer--;
      if (freezeTimer <= 0) freeze = false;
    }
    if (magnet && magnetTimer > 0) {
      magnetTimer--;
      if (magnetTimer <= 0) magnet = false;
    }

    for (var i = items.length - 1; i >= 0; i--) {
      var it = items[i];
      if (freeze) { it.vy = 0; } else {
        it.x += Math.sin(frameCount * 0.05 + it.phase) * it.wobble * 0.25;
        it.y += slowMo ? it.vy * 0.4 : it.vy;
      }
      if (magnet && !it.caught) {
        var dx2 = playerX - it.x;
        var dy2 = (H - 35) - it.y;
        var dist = Math.sqrt(dx2 * dx2 + dy2 * dy2);
        if (dist < 200) {
          var strength = 3 * (1 - dist / 200);
          it.x += dx2 / dist * strength;
          it.y += dy2 / dist * strength;
        }
      }

      if (it.big) { ctx.shadowColor = '#ffd93d'; ctx.shadowBlur = 25; }
      else if (it.pts >= 4) { ctx.shadowColor = '#e85d04'; ctx.shadowBlur = 12; }

      ctx.font = (it.big ? 34 : it.pts >= 4 ? 30 : 26) + 'px serif';
      ctx.textAlign = 'center';
      ctx.fillText(it.e, it.x, it.y);
      ctx.shadowBlur = 0;

      if (!it.caught && it.y > H - 55 && it.y < H - 6 && Math.abs(it.x - playerX) < catchWidth) {
        it.caught = true;
        combo++;
        if (combo > maxCombo) maxCombo = combo;
        var bonus = Math.min(Math.floor(combo / 4) + 1, 10);
        var gained = it.pts * bonus;
        score += gained;
        if (puntajeEl) puntajeEl.textContent = score;

        screenShake = Math.min(screenShake + 2 + combo, 14);
        spawnParticles(it.x, H - 30, null, 10 + combo * 2, combo > 3);
        sound(300 + Math.min(it.pts * 120 + combo * 50, 1200), 0.08 + combo * 0.01, combo > 3 ? 'sawtooth' : 'sine');

        var txt = '+' + gained;
        if (bonus > 1) txt += ' x' + bonus;
        if (combo > 5) txt += ' 🔥';
        addText(it.x, H - 55, txt, bonus > 1 ? '#ffd93d' : '#fff', combo > 3);

        items.splice(i, 1);
        continue;
      }

      if (it.y > H + 35) {
        if (shield) {
          shield = false;
          spawnParticles(playerX, H - 30, '#4d96ff', 20, true);
          sound(200, 0.15, 'triangle');
          addText(playerX, H - 50, '🛡️ ROTA', '#4d96ff');
        } else {
          combo = 0;
          vida--;
          screenShake = 6;
          if (vida > 0) sound(150, 0.15, 'sawtooth');
        }
        items.splice(i, 1);
        if (vida <= 0) { gameOver(); return; }
      }
    }

    for (var pi = powerups.length - 1; pi >= 0; pi--) {
      var pw = powerups[pi];
      pw.y += slowMo ? pw.vy * 0.4 : pw.vy;

      ctx.shadowColor = '#4d96ff'; ctx.shadowBlur = 18;
      ctx.font = '28px serif'; ctx.textAlign = 'center';
      ctx.fillText(pw.e, pw.x, pw.y);
      ctx.shadowBlur = 0;

      if (pw.y > H - 55 && pw.y < H - 6 && Math.abs(pw.x - playerX) < catchWidth) {
        pw.caught = true;
        spawnParticles(pw.x, H - 30, '#4d96ff', 20, true);
        sound(800, 0.2, 'sine');

        switch(pw.effect) {
          case 'life': vida = Math.min(vida + 1, 5); addText(pw.x, H - 55, '❤️ +1', '#ff6b6b', true); break;
          case 'bomb':
            items.forEach(function(bi) { spawnParticles(bi.x, bi.y, '#ffd93d', 8); });
            items = [];
            addText(W / 2, H * 0.35, '💥 BOOOOM 💥', '#ffd93d', true);
            screenShake = 16; sound(100, 0.4, 'sawtooth');
            break;
          case 'shield': shield = true; addText(pw.x, H - 55, '🛡️ SHIELD', '#4d96ff', true); break;
          case 'slowmo':
            slowMo = true; addText(W / 2, H * 0.3, '⏸️ SLOW MO ⏸️', '#6bcb77', true);
            setTimeout(function() { slowMo = false; }, 3000);
            break;
          case 'boss':
            bossActive = true; bossHealth = 8 + Math.floor(score / 10);
            addText(W / 2, H * 0.25, '👑 BOSS 👑', '#ffd93d', true);
            screenShake = 12; sound(200, 0.5, 'sawtooth');
            break;
          case 'magnet':
            magnet = true; magnetTimer = 240;
            addText(pw.x, H - 55, '🧲 MAGNET', '#e85d04', true);
            break;
          case 'freeze':
            freeze = true; freezeTimer = 150;
            addText(pw.x, H - 55, '❄️ FREEZE', '#4d96ff', true);
            break;
        }
        powerups.splice(pi, 1);
      }
      if (pw.y > H + 30) powerups.splice(pi, 1);
    }

    if (bossActive) {
      bossHealth -= 0.015 + score * 0.0002;
      ctx.fillStyle = 'rgba(255,0,0,' + (0.08 + Math.sin(frameCount * 0.1) * 0.05) + ')';
      ctx.fillRect(0, 0, W, 15); ctx.fillRect(0, H - 15, W, 15);

      ctx.fillStyle = '#ff0040';
      ctx.font = 'bold 48px serif'; ctx.textAlign = 'center';
      ctx.shadowColor = '#ff0040'; ctx.shadowBlur = 30;
      var bossX = W / 2 + Math.sin(frameCount * 0.015) * 100;
      var bossY = 60 + Math.sin(frameCount * 0.02) * 20;
      ctx.fillText('👹', bossX, bossY);
      ctx.shadowBlur = 0;

      var bw2 = Math.max(0, bossHealth / (8 + Math.floor(score / 10)));
      ctx.fillStyle = 'rgba(0,0,0,0.5)'; ctx.fillRect(W / 2 - 80, 20, 160, 10);
      ctx.fillStyle = bossHealth < 3 ? '#ff0040' : '#ffd93d';
      ctx.fillRect(W / 2 - 80, 20, 160 * bw2, 10);

      if (frameCount % 20 === 0) { crearItem(true); if (bossHealth > 0.3) crearItem(true); }

      if (Math.abs(playerX - bossX) < 40 && bossY > H * 0.45 && bossY < H - 10) {
        bossHealth -= 0.5;
        spawnParticles(bossX, bossY, '#ff0040', 15, true);
        screenShake = 8; sound(500, 0.1, 'square');
      }

      if (bossHealth <= 0) {
        bossActive = false;
        var bonusPts = 20 + Math.floor(score * 0.3);
        score += bonusPts;
        if (puntajeEl) puntajeEl.textContent = score;
        spawnParticles(bossX, bossY, '#ffd93d', 50, true);
        addText(bossX, bossY - 20, '👑 BOSS VENCIDO +' + bonusPts, '#ffd93d', true);
        screenShake = 20; sound(800, 0.4, 'square');
        setTimeout(function() { sound(1000, 0.3, 'sine'); }, 200);
      }
    }

    for (var pp = particles.length - 1; pp >= 0; pp--) {
      var pt = particles[pp];
      pt.x += pt.vx; pt.y += pt.vy; pt.vy += 0.06;
      pt.life -= pt.decay;
      if (pt.life <= 0) { particles.splice(pp, 1); continue; }
      ctx.globalAlpha = pt.life;
      ctx.fillStyle = pt.color;
      ctx.fillRect(pt.x - pt.size / 2, pt.y - pt.size / 2, pt.size, pt.size);
    }
    ctx.globalAlpha = 1;

    for (var ft = floatTexts.length - 1; ft >= 0; ft--) {
      var f = floatTexts[ft];
      f.y += f.vy; f.life -= 0.02;
      if (f.life <= 0) { floatTexts.splice(ft, 1); continue; }
      ctx.globalAlpha = f.life;
      ctx.fillStyle = f.color;
      ctx.font = 'bold ' + (f.size || 18) + 'px sans-serif';
      ctx.textAlign = 'center';
      ctx.shadowColor = 'rgba(0,0,0,0.6)'; ctx.shadowBlur = 6;
      ctx.fillText(f.text, f.x, f.y);
      ctx.shadowBlur = 0;
    }
    ctx.globalAlpha = 1;

    ctx.restore();

    if (screenFlash > 0) {
      ctx.fillStyle = 'rgba(255,255,255,' + screenFlash + ')';
      ctx.fillRect(0, 0, W, H);
      screenFlash *= 0.9;
      if (screenFlash < 0.01) screenFlash = 0;
    }

    ctx.fillStyle = 'rgba(0,0,0,0.6)';
    ctx.fillRect(4, 4, combo > 1 ? 155 : 105, 32);

    ctx.font = '16px serif'; ctx.textAlign = 'left';
    var lives = '';
    for (var li = 0; li < vida; li++) lives += '❤️';
    for (var li = vida; li < 5; li++) lives += '🖤';
    ctx.fillText(lives, 12, 26);

    if (combo > 0) {
      ctx.fillStyle = combo > 5 ? '#ffd93d' : '#fff';
      ctx.font = 'bold 14px sans-serif'; ctx.textAlign = 'right';
      ctx.shadowColor = 'rgba(255,217,61,' + (combo > 5 ? 0.5 : 0) + ')';
      ctx.shadowBlur = combo > 5 ? 10 : 0;
      ctx.fillText('⚡ ' + combo + 'x', W - 12, 26);
      ctx.shadowBlur = 0;
    }

    if (slowMo) {
      ctx.fillStyle = 'rgba(107,203,119,0.2)'; ctx.fillRect(0, 0, W, H);
      ctx.fillStyle = '#6bcb77'; ctx.font = 'bold 12px sans-serif'; ctx.textAlign = 'center';
      ctx.fillText('⏸️ SLOW MO', W / 2, 18);
    }
    if (freeze) {
      ctx.fillStyle = 'rgba(77,150,255,0.15)'; ctx.fillRect(0, 0, W, H);
      ctx.fillStyle = '#4d96ff'; ctx.font = 'bold 12px sans-serif'; ctx.textAlign = 'center';
      ctx.fillText('❄️ FREEZE', W / 2, 34);
    }
    if (magnet) {
      ctx.strokeStyle = 'rgba(232,93,4,0.2)'; ctx.lineWidth = 2; ctx.setLineDash([4, 6]);
      ctx.beginPath(); ctx.arc(playerX, H - 22, 180, 0, 6.28); ctx.stroke(); ctx.setLineDash([]);
      ctx.fillStyle = '#e85d04'; ctx.font = 'bold 12px sans-serif'; ctx.textAlign = 'center';
      ctx.fillText('🧲 MAGNET', W / 2, 50);
    }

    animId = requestAnimationFrame(gameLoop);
  }

  function gameOver() {
    running = false; cancelAnimationFrame(animId);
    bossActive = false;

    // Draw dark overlay with vignette
    var vigGrad = ctx.createRadialGradient(W/2, H/2, H*0.1, W/2, H/2, H*0.8);
    vigGrad.addColorStop(0, 'rgba(0,0,0,0.7)');
    vigGrad.addColorStop(1, 'rgba(0,0,0,0.92)');
    ctx.fillStyle = vigGrad; ctx.fillRect(0, 0, W, H);

    // Title with pulsing red glow
    var pulse = Math.sin(Date.now() * 0.005) * 0.15 + 0.85;
    ctx.fillStyle = '#fff'; ctx.textAlign = 'center';
    ctx.shadowColor = '#ff0040'; ctx.shadowBlur = 40 * pulse;
    ctx.font = 'bold 38px serif';
    ctx.fillText('GAME OVER', W / 2, H * 0.22);
    ctx.shadowBlur = 0;

    // Score big
    ctx.font = 'bold 34px sans-serif';
    ctx.fillStyle = '#ffb703';
    ctx.shadowColor = 'rgba(255,183,3,0.4)'; ctx.shadowBlur = 15;
    ctx.fillText('🏆 ' + score + ' pts', W / 2, H * 0.36);
    ctx.shadowBlur = 0;

    // Stats line
    ctx.font = '15px sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.5)';
    var statsTxt = '⚡ Combo máximo: x' + maxCombo;
    if (score > 0) statsTxt += '  |  🎯 Items: ~' + Math.floor(score / 2.5);
    ctx.fillText(statsTxt, W / 2, H * 0.46);

    // Tier badge
    var tier, tierColor;
    if (score < 15) { tier = '🥉 Novato'; tierColor = '#cd7f32'; }
    else if (score < 40) { tier = '🥈 Chelero'; tierColor = '#c0c0c0'; }
    else if (score < 80) { tier = '🥇 Palapa Legend'; tierColor = '#ffd700'; }
    else if (score < 150) { tier = '👑 Taquero Mayor'; tierColor = '#ff6b6b'; }
    else { tier = '🔥🌮🦐 DIOS DE LA PARRILLA'; tierColor = '#ff0040'; }

    ctx.font = 'bold 16px sans-serif';
    ctx.fillStyle = tierColor;
    ctx.shadowColor = tierColor; ctx.shadowBlur = 10;
    ctx.fillText(tier, W / 2, H * 0.56);
    ctx.shadowBlur = 0;

    // Restart hint
    ctx.font = '13px sans-serif'; ctx.fillStyle = 'rgba(255,255,255,0.35)';
    ctx.fillText('🔄 Click en "Reiniciar" para volver a jugar', W / 2, H * 0.7);

    // Decorative particles at game over
    for (var go = 0; go < 3; go++) {
      (function(idx) {
        setTimeout(function() {
          if (!running) spawnParticles(Math.random() * W, Math.random() * H * 0.5, ['#ff6b6b','#ffd93d','#4d96ff','#ff6fb7'][idx], 8);
        }, idx * 200);
      })(go);
    }

    guardarScore(); cargarTop();
  }

  function varNaranja() {
    return getComputedStyle(document.documentElement).getPropertyValue('--naranja').trim() || '#e85d04';
  }

  function guardarScore() {
    if (score < 3 || !SUPABASE_URL || !SUPABASE_ANON) return;
    var nick = localStorage.getItem('lapalapa_nick') || 'Anónimo';
    fetch(SUPABASE_URL + '/rest/v1/scores', {
      method: 'POST',
      headers: { 'apikey': SUPABASE_ANON, 'Authorization': 'Bearer ' + SUPABASE_ANON, 'Content-Type': 'application/json' },
      body: JSON.stringify({ nickname: nick, score: score })
    }).catch(function(){});
  }

  function cargarTop() {
    if (!SUPABASE_URL || !SUPABASE_ANON || !topLista) return;
    fetch(SUPABASE_URL + '/rest/v1/scores?select=nickname,score&order=score.desc&limit=5', {
      headers: { 'apikey': SUPABASE_ANON, 'Authorization': 'Bearer ' + SUPABASE_ANON }
    })
    .then(function(r) { return r.json(); })
    .then(function(data) {
      if (!data || data.length === 0) { topLista.innerHTML = '<div style="color:#888;font-size:0.75rem">Sin puntajes aún</div>'; return; }
      topLista.innerHTML = data.map(function(s, i) {
        var medal = ['🥇','🥈','🥉','4️⃣','5️⃣'][i] || (i + 1);
        return '<div class="juego-top-item"><span class="top-pos">' + medal + '</span><span class="top-nom">' + escapeHtml(s.nickname) + '</span><span class="top-sc">' + s.score + '</span></div>';
      }).join('');
    })
    .catch(function(){});
  }

  function iniciar() {
    if (running) return;
    resize(); reiniciar();
    playerX = W / 2;
    running = true;
    screenFlash = 0.2;
    sound(400, 0.1, 'sine');
    setTimeout(function() { sound(600, 0.1, 'sine'); }, 80);
    setTimeout(function() { sound(800, 0.12, 'sine'); }, 160);
    gameLoop();
    cargarTop();
  }

  function detener() {
    running = false; if (animId) cancelAnimationFrame(animId);
  }

  window.iniciarJuego = iniciar;
  window.detenerJuego = detener;

  reiniciarBtn?.addEventListener('click', function() {
    if (running) detener();
    setTimeout(iniciar, 100);
  });

  canvas.addEventListener('mousemove', function(e) {
    var r = canvas.getBoundingClientRect();
    var scaleX = W / r.width;
    playerX = Math.max(18, Math.min(W - 18, (e.clientX - r.left) * scaleX));
  });

  canvas.addEventListener('touchmove', function(e) {
    e.preventDefault();
    var r = canvas.getBoundingClientRect();
    var scaleX = W / r.width;
    var touch = e.touches[0];
    playerX = Math.max(18, Math.min(W - 18, (touch.clientX - r.left) * scaleX));
  }, { passive: false });

  canvas.addEventListener('touchstart', function(e) {
    var r = canvas.getBoundingClientRect();
    var scaleX = W / r.width;
    var touch = e.touches[0];
    playerX = Math.max(18, Math.min(W - 18, (touch.clientX - r.left) * scaleX));
  }, { passive: true });

  window.addEventListener('resize', function() {
    if (running || !overlay.classList.contains('oculto')) resize();
  });
})();

/* ═══ CUMPLEAÑOS ═══ */
(function() {
  var overlay = document.getElementById('cumple-overlay');
  var nombre = document.getElementById('cumple-nombre');
  var fecha = document.getElementById('cumple-fecha');
  var guardar = document.getElementById('cumple-guardar');
  var aviso = document.getElementById('cumple-aviso');
  var cumpleHoy = document.getElementById('cumple-hoy');
  var confettiCanvas = document.getElementById('confetti-canvas');
  if (!overlay) return;

  // Min date: 1940, max: 2012
  if (fecha) {
    var hoy = new Date();
    fecha.max = (hoy.getFullYear() - 10) + '-12-31';
    fecha.min = '1940-01-01';
  }

  // Cargar nombre guardado
  var saved = localStorage.getItem('lapalapa_cumple');
  if (saved && nombre) nombre.value = saved;

  // Cache en localStorage para no consultar más de 1 vez al día
  var CACHE_KEY = 'lapalapa_birthday_cache';

  function getFechaMX() {
    var mx = new Date(new Date().toLocaleString('en-US', { timeZone: 'America/Mexico_City' }));
    return { mes: String(mx.getMonth() + 1).padStart(2, '0'), dia: String(mx.getDate()).padStart(2, '0'), fecha: mx };
  }

  function esBisiesto(y) { return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0; }

  function fechasParaHoy() {
    var d = getFechaMX();
    var fechas = [d.mes + '-' + d.dia];
    // Fix #3: 29 de febrero en año no bisiesto → probar 28 feb y 1 mar
    if (d.mes === '02' && d.dia === '28' && !esBisiesto(d.fecha.getFullYear())) {
      fechas.push('02-29', '03-01');
    }
    return fechas;
  }

  function verificarHoy(force) {
    if (!SUPABASE_URL || !SUPABASE_ANON || !cumpleHoy) return;

    // Fix #6: cache diario, evitar consultas repetidas
    if (!force) {
      try {
        var cache = JSON.parse(localStorage.getItem(CACHE_KEY) || '{}');
        var hoyStr = getFechaMX().mes + '-' + getFechaMX().dia;
        if (cache.fecha === hoyStr && cache.nombres) {
          if (cache.nombres.length > 0) {
            mostrarFelices(cache.nombres);
          }
          return; // Ya consultamos hoy, no repetir
        }
      } catch(e) {}
    }

    var targets = fechasParaHoy();
    // Fix #1: limit 500 es más que suficiente para un restaurante
    fetch(SUPABASE_URL + '/rest/v1/birthdays?select=nombre,fecha&limit=500', {
      headers: {
        'apikey': SUPABASE_ANON,
        'Authorization': 'Bearer ' + SUPABASE_ANON
      }
    })
    .then(function(r) {
      if (!r.ok) throw new Error('Supabase error');
      return r.json();
    })
    .then(function(data) {
      if (!data || data.length === 0) return;
      var felices = [];
      data.forEach(function(b) {
        if (!b.fecha) return;
        var parts = b.fecha.split('-');
        var m = parts[1], d32 = parts[2];
        // Fix #3: match contra múltiples fechas (29 feb handling)
        if (targets.indexOf(m + '-' + d32) !== -1) {
          felices.push(b.nombre || 'Alguien');
        }
      });
      // Fix #4: eliminar duplicados
      var unicos = [];
      felices.forEach(function(n) {
        if (unicos.indexOf(n) === -1) unicos.push(n);
      });
      // Guardar cache
      try {
        localStorage.setItem(CACHE_KEY, JSON.stringify({ fecha: getFechaMX().mes + '-' + getFechaMX().dia, nombres: unicos }));
      } catch(e2) {}
      if (unicos.length > 0) mostrarFelices(unicos);
    })
    .catch(function() {
      // Fix #2: aviso silencioso ya no, mostrar toast si hay error
      if (typeof mostrarToast === 'function') mostrarToast('🔌 No se pudieron verificar cumpleaños (sin conexión)');
    });
  }

  function mostrarFelices(lista) {
    if (!cumpleHoy) return;
    var texto = cumpleHoy.querySelector('.cumple-hoy-texto');
    var cLista = cumpleHoy.querySelector('.cumple-hoy-nombres');
    var frases = [
      '🎂 ¡Felicidades, {n}! Hoy la fiesta es contigo 🎉',
      '🎉 ¡Feliz cumple, {n}! Arre pues, a celebrar 🥳',
      '🥳 ¡Es tu día, {n}! La Palapa te manda un abrazo 🔥',
      '🎊 ¡Muchas felicidades, {n}! Hoy la música suena por ti 🎶',
      '🎈 ¡Felicidades, {n}! Que tengas un gran día lleno de sabor 🌮',
      '🌟 ¡Hoy cumples, {n}! Desde La Palapa te celebramos 🥳',
      '🎉 ¡Arre, {n}! Que este año te traiga pura buena vibra ✨',
      '🥳 ¡Feliz cumpleaños, {n}! Échate un taco en tu honor 🌯'
    ];
    if (lista.length === 1) {
      var n = lista[0].split(' ')[0];
      var f = frases[Math.floor(Math.random() * frases.length)].replace('{n}', n);
      if (texto) texto.textContent = f;
      if (cLista) cLista.innerHTML = '';
    } else {
      if (texto) texto.textContent = '🎂 ¡Hay cumpleañeros hoy! 🎉';
      if (cLista) {
        cLista.innerHTML = lista.map(function(nom) {
          var n = nom.split(' ')[0];
          var f = frases[Math.floor(Math.random() * frases.length)].replace('{n}', n);
          return '<div class="cumple-individual">' + f + '</div>';
        }).join('');
      }
    }
    cumpleHoy.classList.remove('oculto');
    var notif = document.getElementById('cumple-notif');
    if (notif) notif.classList.remove('oculto');
    cargarDeseos();
    lanzarConfeti();
  }

  // ═══ DESEOS (localStorage + Supabase si existe tabla) ═══
  var WISHES_KEY = 'lapalapa_wishes';

  function cargarDeseos() {
    var cont = document.getElementById('wish-lista');
    if (!cont) return;
    var lista = [];
    try { lista = JSON.parse(localStorage.getItem(WISHES_KEY) || '[]'); } catch(e) {}
    var hoy = getFechaMX().mes + '-' + getFechaMX().dia;
    var filtrados = lista.filter(function(w) { return w.fecha === hoy; }).slice(-10);
    // Try Supabase merge
    if (window.__SUPABASE_URL && window.__SUPABASE_ANON) {
      fetch(window.__SUPABASE_URL + '/rest/v1/birthday_wishes?fecha=eq.' + hoy + '&order=creado_en.desc&limit=10', {
        headers: {
          'apikey': window.__SUPABASE_ANON, 'Authorization': 'Bearer ' + window.__SUPABASE_ANON
        }
      }).then(function(r) { return r.json(); }).then(function(data) {
        if (data && data.length) {
          var supWishes = data.map(function(w) { return { de: w.remitente, msg: w.mensaje, fecha: w.fecha }; });
          var todos = filtrados.concat(supWishes);
          // Dedup by de+msg
          var seen = {}; var unicos = [];
          todos.forEach(function(w) { var k = w.de + '|' + w.msg; if (!seen[k]) { seen[k] = 1; unicos.push(w); } });
          unicos = unicos.slice(-10);
          renderWishes(cont, unicos);
        }
      }).catch(function(){});
    }
    renderWishes(cont, filtrados);
  }

  function renderWishes(cont, lista) {
    if (!lista || lista.length === 0) {
      cont.innerHTML = '<div class="wish-vacio">💭 Sé el primero en desear felicidades</div>';
      return;
    }
    cont.innerHTML = lista.map(function(w) {
      return '<div class="wish-item"><span class="wish-item-remitente">' + escapeHtml(w.de) + ':</span><span class="wish-item-texto">' + escapeHtml(w.msg) + '</span></div>';
    }).join('');
  }

  function guardarDeseo() {
    var input = document.getElementById('wish-text');
    var cont = document.getElementById('wish-lista');
    if (!input || !cont) return;
    var msg = (input.value || '').trim();
    if (!msg) return;
    var nombreRemitente = localStorage.getItem('lapalapa_cumple') || 'Anónimo';
    var hoy = getFechaMX().mes + '-' + getFechaMX().dia;
    var deseo = { de: nombreRemitente, msg: msg, fecha: hoy };
    // Local
    var lista = [];
    try { lista = JSON.parse(localStorage.getItem(WISHES_KEY) || '[]'); } catch(e) {}
    lista.push(deseo);
    try { localStorage.setItem(WISHES_KEY, JSON.stringify(lista)); } catch(e) {}
    input.value = '';
    cargarDeseos();
    if (typeof mostrarToast === 'function') mostrarToast('💬 Deseo enviado');
    // Supabase
    if (window.__SUPABASE_URL && window.__SUPABASE_ANON) {
      fetch(window.__SUPABASE_URL + '/rest/v1/birthday_wishes', {
        method: 'POST',
        headers: {
          'apikey': window.__SUPABASE_ANON, 'Authorization': 'Bearer ' + window.__SUPABASE_ANON,
          'Content-Type': 'application/json', 'Prefer': 'return=minimal'
        },
        body: JSON.stringify({ remitente: deseo.de, mensaje: deseo.msg, fecha: deseo.fecha })
      }).catch(function(){});
    }
  }

  document.addEventListener('click', function(ev) {
    if (ev.target.id === 'wish-enviar') guardarDeseo();
  });

  function lanzarConfeti() {
    var c = confettiCanvas;
    if (!c) return;
    c.innerHTML = '';
    var colores = ['#ff6b6b','#ffd93d','#6bcb77','#4d96ff','#ff6fb7','#ffb703','#e85d04','#a855f7','#22d3ee'];
    var formas = ['50%','2px','0'];
    for (var i = 0; i < 120; i++) {
      var d = document.createElement('div');
      d.className = 'confeti-piece';
      var size = 5 + Math.random() * 10;
      var color = colores[Math.floor(Math.random() * colores.length)];
      var left = Math.random() * 100;
      var delay = Math.random() * 3;
      var dur = 2 + Math.random() * 4;
      var forma = formas[Math.floor(Math.random() * formas.length)];
      var rot = Math.random() * 360;
      d.style.cssText = 'width:' + size + 'px;height:' + (size * (0.4 + Math.random() * 0.6)) + 'px;background:' + color + ';left:' + left + '%;top:-15px;border-radius:' + forma + ';animation:confetiFall ' + dur + 's linear forwards;animation-delay:' + delay + 's;transform:rotate(' + rot + 'deg);opacity:' + (0.7 + Math.random() * 0.3);
      c.appendChild(d);
    }
    // Also launch some circular burst particles
    for (var j = 0; j < 20; j++) {
      var p = document.createElement('div');
      p.className = 'confeti-piece';
      var angle = (j / 20) * Math.PI * 2;
      var dist = 100 + Math.random() * 150;
      var dx = Math.cos(angle) * dist;
      var dy = Math.sin(angle) * dist;
      p.style.cssText = 'width:10px;height:10px;background:' + colores[j % colores.length] + ';left:50%;top:50%;border-radius:50%;animation:confetiBurst 0.8s ease-out forwards;animation-delay:' + (0.1 + Math.random() * 0.3) + 's;--dx:' + dx + 'px;--dy:' + dy + 'px;';
      c.appendChild(p);
    }
    setTimeout(function() { c.innerHTML = ''; }, 8000);
  }

  if (!document.getElementById('confeti-style')) {
    var s = document.createElement('style');
    s.id = 'confeti-style';
    s.textContent = '@keyframes confetiFall{0%{transform:translateY(0) rotate(0deg);opacity:1}100%{transform:translateY(100vh) rotate(720deg);opacity:0}}@keyframes confetiBurst{0%{transform:translate(-50%,-50%) scale(0);opacity:1}100%{transform:translate(calc(-50% + var(--dx)),calc(-50% + var(--dy))) scale(1.5);opacity:0}}';
    document.head.appendChild(s);
  }

  guardar?.addEventListener('click', function() {
    var nom = (nombre.value || '').trim();
    var fec = fecha ? fecha.value : '';
    if (!nom || !fec) { if (aviso) aviso.textContent = 'Completa nombre y fecha.'; return; }
    try { localStorage.setItem('lapalapa_cumple', nom); } catch(e) {}
    if (aviso) aviso.textContent = '🎉 ¡Guardado! Te esperamos en tu cumple.';

    if (SUPABASE_URL && SUPABASE_ANON) {
      fetch(SUPABASE_URL + '/rest/v1/birthdays', {
        method: 'POST',
        headers: {
          'apikey': SUPABASE_ANON,
          'Authorization': 'Bearer ' + SUPABASE_ANON,
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify({ nombre: nom, fecha: fec })
      })
      .then(function(r) {
        if (r.ok && aviso) aviso.textContent = '🎉 ¡Registrado! Te esperamos en tu cumpleaños.';
      })
      .catch(function() {
        // Sin conexión — el nombre se guardó en localStorage
      });
    }
    // Cerrar overlay después de 1.2s
    setTimeout(function() { if (typeof cerrarCumple === 'function') cerrarCumple(); }, 1200);
  });

  // Fix #6: verificar al cargar + cuando el usuario vuelve a la pestaña
  verificarHoy();
  document.addEventListener('visibilitychange', function() {
    if (!document.hidden) verificarHoy();
  });
  // Exponer para que abrirCumple() pueda forzar re-verificación
  window._verificarCumpleHoy = verificarHoy;
})();

/* ═══ MODO OSCURO ═══ */
(function() {
  var btn = document.getElementById('modo-oscuro-btn');
  var btnMobile = document.getElementById('modo-oscuro-btn-mobile');
  var prefiereDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  var guardado = null;
  try { guardado = localStorage.getItem('lapalapa_dark'); } catch(e) {}
  var activo = guardado !== null ? guardado === '1' : prefiereDark;
  function aplicar(v) {
    document.body.classList.toggle('dark', v);
    if (btn) { btn.title = v ? 'Modo claro' : 'Modo oscuro'; }
    if (btnMobile) btnMobile.textContent = v ? 'Modo claro' : 'Modo oscuro';
    try { localStorage.setItem('lapalapa_dark', v ? '1' : '0'); } catch(e) {}
  }
  aplicar(activo);
  function toggle() { aplicar(!document.body.classList.contains('dark')); }
  if (btn) btn.addEventListener('click', toggle);
  if (btnMobile) btnMobile.addEventListener('click', toggle);
})();

/* ═══ MODO FIESTA 🎉 ═══ */
(function() {
  var btn = document.getElementById('fiesta-btn');
  if (!btn) return;
  var activo = false;
  btn.addEventListener('click', function() {
    activo = !activo;
    document.body.classList.toggle('fiesta-mode', activo);
    btn.textContent = activo ? '✨' : '🎉';
    btn.title = activo ? 'Apagar Modo Fiesta' : '🎉 Activar Modo Fiesta';
    btn.style.background = activo
      ? 'linear-gradient(135deg, #6bcb77, #4d96ff)'
      : 'linear-gradient(135deg, #ff6b6b, #ffd93d, #6bcb77, #4d96ff)';
  });
})();

/* ═══ MURO DE FOTOS — SUBA DIRECTA ═══ */
(function() {
  var grid = document.getElementById('foto-grid');
  var nick = document.getElementById('foto-nick');
  var fileInput = document.getElementById('foto-file');
  var fileName = document.getElementById('foto-file-name');
  var preview = document.getElementById('foto-preview');
  var coment = document.getElementById('foto-coment');
  var btn = document.getElementById('foto-subir-btn');
  var dropZone = document.getElementById('foto-subir');
  if (!grid) return;

  var archivoSeleccionado = null;

  function procesarArchivo(f) {
    if (!f) return;
    archivoSeleccionado = f;
    if (fileName) fileName.textContent = f.name + ' (' + (f.size / 1024).toFixed(1) + ' KB)';
    var lector = new FileReader();
    lector.onload = function(e) {
      if (!preview) return;
      preview.innerHTML = '';
      var el = f.type.indexOf('video') !== -1
        ? '<video src="' + e.target.result + '" muted controls style="max-width:100%;max-height:180px"></video>'
        : '<img src="' + e.target.result + '" style="max-width:100%;max-height:180px">';
      preview.innerHTML = el;
      preview.classList.remove('oculto');
    };
    lector.readAsDataURL(f);
  }

  fileInput.addEventListener('change', function() {
    procesarArchivo(fileInput.files && fileInput.files[0]);
  });

  if (dropZone) {
    ['dragenter', 'dragover'].forEach(function(e) {
      dropZone.addEventListener(e, function(ev) {
        ev.preventDefault(); ev.stopPropagation();
        dropZone.classList.add('drag-over');
      });
    });
    ['dragleave', 'drop'].forEach(function(e) {
      dropZone.addEventListener(e, function(ev) {
        ev.preventDefault(); ev.stopPropagation();
        dropZone.classList.remove('drag-over');
      });
    });
    dropZone.addEventListener('drop', function(ev) {
      var f = ev.dataTransfer.files && ev.dataTransfer.files[0];
      if (f && (f.type.indexOf('image') !== -1 || f.type.indexOf('video') !== -1)) {
        procesarArchivo(f);
      } else {
        mostrarToast('Solo imágenes y videos.');
      }
    });
  }
  function cargarFotos() {
    if (!SUPABASE_URL || !SUPABASE_ANON) return;
    fetch(SUPABASE_URL + '/rest/v1/fotos?select=*&order=creado_en.desc&limit=20', {
      headers: { 'apikey': SUPABASE_ANON, 'Authorization': 'Bearer ' + SUPABASE_ANON }
    })
    .then(function(r) { return r.json(); })
    .then(function(data) {
      if (!data || data.length === 0) {
        grid.innerHTML = '<div class="foto-placeholder">Sube la primera foto 📸</div>';
        return;
      }
      grid.innerHTML = data.map(function(f, i) {
        var src = (f.imagen || '').replace('/authenticated/', '/public/');
        var esVid = src.indexOf(';base64,') === -1 && ['mp4','webm','mov','avi'].indexOf(src.split('.').pop().toLowerCase()) !== -1;
        var nick = escapeHtml(f.nickname);
        var coment = f.comentario ? escapeHtml(f.comentario) : '';
        if (esVid) {
          return '<div class="foto-card" style="--i:' + i + '" data-src="' + escapeHtml(src) + '"><video src="' + escapeHtml(src) + '" muted loop playsinline></video><div class="foto-info"><span class="foto-nick">' + nick + '</span>' + (coment ? '<span class="foto-coment">' + coment + '</span>' : '') + '</div></div>';
        }
        return '<div class="foto-card" style="--i:' + i + '" data-src="' + escapeHtml(src) + '"><img src="' + escapeHtml(src) + '" alt="' + nick + '" loading="lazy"><div class="foto-info"><span class="foto-nick">' + nick + '</span>' + (coment ? '<span class="foto-coment">' + coment + '</span>' : '') + '</div></div>';
      }).join('');
      grid.querySelectorAll('.foto-card').forEach(function(el) {
        el.addEventListener('click', function() {
          var s = this.getAttribute('data-src');
          if (s && typeof Modal !== 'undefined' && Modal.open) Modal.open(s);
        });
      });
    })
    .catch(function(e){ ; });
  }

  function subirArchivo(file) {
    return new Promise(function(resolve, reject) {
      if (file.size <= 500 * 1024) {
        var reader = new FileReader();
        reader.onload = function(e) { resolve(e.target.result); };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      } else {
        var ext = file.name.split('.').pop().toLowerCase() || 'jpg';
        var path = Date.now() + '_' + Math.random().toString(36).slice(2, 6) + '.' + ext;
        fetch(SUPABASE_URL + '/storage/v1/object/fotos/' + path, {
          method: 'POST',
          headers: {
            'apikey': SUPABASE_ANON,
            'Authorization': 'Bearer ' + SUPABASE_ANON,
            'Content-Type': file.type || 'application/octet-stream'
          },
          body: file
        })
        .then(function(r) {
          if (!r.ok) throw new Error('Upload failed');
          return SUPABASE_URL + '/storage/v1/object/public/fotos/' + path;
        })
        .then(resolve)
        .catch(reject);
      }
    });
  }

  btn?.addEventListener('click', function() {
    var nombre = (nick.value || '').trim();
    var comentario = (coment.value || '').trim();
    if (!nombre) { mostrarToast('Escribe tu nombre.'); return; }
    if (!archivoSeleccionado) { mostrarToast('Elige un archivo primero.'); return; }
    if (archivoSeleccionado.size > 50 * 1024 * 1024) { mostrarToast('El archivo es muy grande (máx 50 MB).'); return; }

    btn.disabled = true;
    btn.textContent = '⏳ Subiendo...';

    subirArchivo(archivoSeleccionado)
    .then(function(url) {
      return fetch(SUPABASE_URL + '/rest/v1/fotos', {
        method: 'POST',
        headers: {
          'apikey': SUPABASE_ANON,
          'Authorization': 'Bearer ' + SUPABASE_ANON,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation'
        },
        body: JSON.stringify({ nickname: nombre, imagen: url, comentario: comentario })
      });
    })
    .then(function(r) { return r.json(); })
    .then(function(d) {
      if (d && d.id) {
        nick.value = ''; coment.value = '';
        archivoSeleccionado = null;
        fileInput.value = '';
        fileName.textContent = '';
        preview.classList.add('oculto'); preview.innerHTML = '';
        cargarFotos();
        mostrarToast('📸 ¡Publicado!');
      }
    })
    .catch(function(e) {
      ;
      mostrarToast('Error al subir. Intenta de nuevo.');
    })
    .finally(function() {
      btn.disabled = false;
      btn.textContent = '📤 Subir';
    });
  });

  cargarFotos();
  setInterval(cargarFotos, 30000);
})();

/* ═══ SPLASH: ENTRADA DE JEFE ═══ */
(function() {
  var splash = document.getElementById('splash');
  var canvas = document.getElementById('splash-canvas');
  var sub = document.getElementById('splash-sub');
  var bar = document.getElementById('splash-bar');
  var tag = document.getElementById('splash-tag');
  if (!splash || !canvas) return;

  // 1. Matrix rain on canvas
  var ctx = canvas.getContext('2d');
  var W, H;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%"\'#&_<>«»{}[]|~';
  var cols = Math.floor(W / 14);
  var drops = [];
  for (var i = 0; i < cols; i++) drops[i] = Math.floor(Math.random() * -H / 12);

  function matrixRain() {
    ctx.fillStyle = 'rgba(10,5,3,0.06)';
    ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = '#e85d04';
    ctx.font = '12px monospace';
    for (var i = 0; i < drops.length; i++) {
      var ch = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(ch, i * 14, drops[i] * 12);
      if (drops[i] * 12 > H && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
    if (!splash.classList.contains('splash-hidden')) requestAnimationFrame(matrixRain);
  }
  matrixRain();

  // 2. Terminal typing
  var lines = [
    '> INICIALIZANDO SISTEMA...',
    '> CONECTANDO A LA PALAPA...',
    '> CARGA COMPLETA.'
  ];
  var lineIdx = 0, charIdx = 0;
  function typeLine() {
    if (lineIdx >= lines.length) { return; }
    var full = lines[lineIdx];
    if (charIdx < full.length) {
      sub.textContent = full.substring(0, charIdx + 1) + '█';
      charIdx++;
      setTimeout(typeLine, 18 + Math.random() * 25);
    } else {
      sub.textContent = full;
      lineIdx++;
      charIdx = 0;
      setTimeout(typeLine, 300);
    }
  }
  typeLine();

  // 3. Progress bar
  var pct = 0;
  function fillBar() {
    pct += 0.6 + Math.random() * 1.5;
    if (pct > 100) pct = 100;
    bar.style.width = pct + '%';
    if (pct < 100) setTimeout(fillBar, 30 + Math.random() * 60);
  }
  fillBar();

  // 4. Hide splash after fade-out completes
  setTimeout(function() {
    splash.classList.add('splash-hidden');
  }, 4200);
})();

document.addEventListener('DOMContentLoaded', function () {
  Contingente.init();
  Festivos.init();
  Typewriter.init();
  cargarResenas();
  actualizarLimitesFechaHora();
});
