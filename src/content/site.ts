/**
 * Contenido del sitio de LucasSaavedra.
 * Estructura basada en la plantilla "Waveform" de Framer, adaptada a
 * Lucas Saavedra / PM Music Records y traducida al español.
 *
 * NOTA: las imágenes usan las URLs originales de la plantilla (framerusercontent.com)
 * y los enlaces a redes sociales quedan como "#" a la espera de los reales.
 */

export const site = {
  name: "LucasSaavedra",
  role: "Productor Musical · Montevideo, Uruguay",
  tagline:
    "Tus ideas merecen más que una maqueta. Démosles forma de canciones que perduran.",
  contactHref: "#contacto",
  contactCta: "Ponte en contacto",
};

export const nav = [
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Trabajos", href: "#trabajos" },
  { label: "Contactos", href: "#contacto" },
];

export const hero = {
  eyebrow: "Productor Musical · Montevideo, Uruguay",
  titleTop: "Convierto ideas",
  titleBottom: "en discos",
  subtitle:
    "Tus ideas merecen más que una maqueta. Démosles forma de canciones que perduran.",
  note: "He trabajado con más de 200 músicos",
};

export const marqueeLines = [
  "Suena como tu mejor versión.",
  "Sesiones eficientes. Feedback honesto.",
  "Producción a medida. Próximos pasos claros.",
];

export const services = {
  eyebrow: "Servicios",
  title: "Qué hago",
  items: [
    {
      name: "Producción Musical",
      body: "Del boceto al arreglo completo: creo beats originales, compongo melodías y construyo producciones completas que encajan con tu sonido. Cada canción se trabaja a medida de tu estilo y tu visión artística.",
      image:
        "https://framerusercontent.com/images/3GtHmG9k3jWS51cNunyi9NYYY.jpg?width=512&height=512",
      alt: "Productor musical sentado a su escritorio",
    },
    {
      name: "Mezcla",
      body: "Combino con cuidado voces, instrumentos y efectos para lograr claridad, equilibrio y profundidad. El objetivo es una mezcla profesional, lista para radio, donde cada elemento tiene su espacio y la energía de la canción se transmite.",
      image:
        "https://framerusercontent.com/images/RPKUiSvZrCAJTAXeeQIk3FKVYFE.jpg?width=512&height=512",
      alt: "Controles de mezcla en un estudio de grabación",
    },
    {
      name: "Masterización",
      body: "El paso final que hace que tu música brille en todas las plataformas. Doy a tus canciones volumen, consistencia y pulido para que suenen potentes en Spotify, en los clubes y en la radio.",
      image:
        "https://framerusercontent.com/images/u6cUES2zd7UOz2tsDjFb7OvM.jpg?width=512&height=512",
      alt: "Productor musical sentado en una silla de su estudio",
    },
    {
      name: "Sesiones de Grabación",
      body: "Sesiones de grabación guiadas para voces o instrumentos en un entorno profesional. Me aseguro de capturar las interpretaciones con la energía, la emoción y la calidad técnica necesarias para un resultado final sólido.",
      image:
        "https://framerusercontent.com/images/JD8B9I2owxjc6OeIN8oGF5H8Nwc.jpg?width=512&height=512",
      alt: "Mujer frente a un micrófono en un estudio de grabación",
    },
  ],
};

const SPOTIFY_ARTIST = "https://open.spotify.com/artist/5YqthUy3NcF1zk7BvxefXm";

export const works = {
  eyebrow: "Trabajos",
  title: "Trabajo reciente",
  intro:
    "Desde talentos emergentes hasta nombres consagrados, he dado forma a canciones que conectan con quienes las escuchan a un nivel más profundo, llevando la visión de cada artista a la vida.",
  items: [
    {
      title: "NOVA KANE – Midnight Drive",
      roles: "Producción, Mezcla",
      image:
        "https://framerusercontent.com/images/hzrPi9UG3rVQvPrVDbHQ3TrOiVM.jpg?width=512&height=512",
      alt: "Portada del álbum de NOVA KANE – Midnight Drive",
      href: SPOTIFY_ARTIST,
    },
    {
      title: "LILA RAY – Heart on Repeat",
      roles: "Producción, Grabación de voces, Mezcla",
      image:
        "https://framerusercontent.com/images/f9PlLMm5pwJsgnWjrVDRRCfKVRY.jpg?width=512&height=512",
      alt: "Portada del álbum de LILA RAY – Heart on Repeat",
      href: SPOTIFY_ARTIST,
    },
    {
      title: "KAIRO – Lost in Echoes",
      roles: "Producción, Diseño sonoro, Masterización",
      image:
        "https://framerusercontent.com/images/Q4yryGe3gK6bm4zEB9KC96kacq0.jpg?width=512&height=512",
      alt: "Portada del álbum de KAIRO – Lost in Echoes",
      href: SPOTIFY_ARTIST,
    },
    {
      title: "ZAYNIX – Pressure",
      roles: "Producción de beats, Mezcla",
      image:
        "https://framerusercontent.com/images/XZTIvGpqxN0xmDw5hBOCk5a4w.jpg?width=512&height=512",
      alt: "Portada del álbum de ZAYNIX – Pressure",
      href: SPOTIFY_ARTIST,
    },
    {
      title: "AYA V – Glitter Tears",
      roles: "Producción, Afinación vocal, Masterización",
      image:
        "https://framerusercontent.com/images/hzrPi9UG3rVQvPrVDbHQ3TrOiVM.jpg?width=512&height=512",
      alt: "Portada del álbum de AYA V – Glitter Tears",
      href: SPOTIFY_ARTIST,
    },
    {
      title: "JAXON REE – No Signal",
      roles: "Producción, Mezcla, Masterización",
      image:
        "https://framerusercontent.com/images/f9PlLMm5pwJsgnWjrVDRRCfKVRY.jpg?width=512&height=512",
      alt: "Portada del álbum de JAXON REE – No Signal",
      href: SPOTIFY_ARTIST,
    },
  ],
  listenLabel: "Escuchar en Spotify",
};

export const about = {
  eyebrow: "Nosotros",
  title: "Sobre Lucas Saavedra",
  lead: "Lucas Saavedra es cantante, compositor y productor musical uruguayo, fundador de PM Music Records, sello discográfico y productora de música cristiana con sede en Montevideo. Nacido en 1998 y criado en un entorno musical, compuso su primera canción a los 10 años y publicó su sencillo debut «Sed de Ti» en 2016. Desde entonces ha producido decenas de álbumes junto a artistas independientes, además de explorar como solista la bachata cristiana y el R&B, y de adaptar canciones de adoración a ritmos latinos caribeños.",
  cards: [
    {
      title: "Visión",
      body: "Cada disco comienza con una visión clara. Transformo ideas en bruto en música que se siente intencional, atemporal y emocionalmente poderosa.",
    },
    {
      title: "Oficio",
      body: "Los detalles importan. Del diseño sonoro al pulido final, encaro cada canción con la precisión y el cuidado que hacen que la música brille.",
    },
    {
      title: "Confianza",
      body: "La colaboración solo funciona con confianza. Mantengo la comunicación abierta, los plazos ajustados y siempre entrego lo que prometo, sin concesiones.",
    },
    {
      title: "Energía",
      body: "La música debe mover a las personas. Me enfoco en crear producciones con energía: canciones que conectan al instante y se quedan con quien las escucha.",
    },
  ],
  image:
    "https://framerusercontent.com/images/OKTmrlDQk0h2lyus1yw5BwW6FE.png?width=928&height=1232",
  imageAlt: "Productor musical en su estudio",
};

export const stats = [
  { value: 18, suffix: "+", label: "Años en la música" },
  { value: 40, suffix: "+", label: "Álbumes producidos" },
  { value: 200, suffix: "+", label: "Artistas en colaboración" },
  { value: 300, suffix: "+", label: "Canciones publicadas" },
];

export const testimonials = {
  eyebrow: "Testimonios",
  title: "Lo que dicen los artistas",
  items: [
    {
      quote: "Transformó mi idea en un éxito",
      body: "Lucas convirtió mi maqueta improvisada en una canción lista para la radio. Su atención al detalle marcó la diferencia.",
      name: "Nova Kane",
      image:
        "https://framerusercontent.com/images/WPU6Tg8o0UmTZlF0YSp586jxzgU.png?width=820&height=820",
      alt: "Retrato de una mujer en un estudio de grabación",
    },
    {
      quote: "Trabajar con él fue fácil",
      body: "Trabajar con Lucas fue fluido de principio a fin. Comunicación clara, entrega rápida y una canción que superó mis expectativas.",
      name: "Kairo",
      image:
        "https://framerusercontent.com/images/gVr3p6N4lsurhwu4d3tFBe3yx0.png?width=820&height=820",
      alt: "Retrato de un artista",
    },
    {
      quote: "Hizo brillar mi canción",
      body: "La masterización le dio a mi tema el golpe que le faltaba. Ahora suena increíble en Spotify y en el club.",
      name: "Lila Ray",
      image:
        "https://framerusercontent.com/images/WPU6Tg8o0UmTZlF0YSp586jxzgU.png?width=820&height=820",
      alt: "Retrato de una cantante",
    },
  ],
};

export const faq = {
  eyebrow: "Preguntas frecuentes",
  title: "¿Preguntas?",
  items: [
    {
      q: "¿Ofrecés revisiones?",
      a: "Sí. Cada proyecto incluye dos rondas de revisiones sobre la mezcla para asegurarnos de que el resultado final refleje exactamente lo que buscás. Las revisiones adicionales se pueden coordinar sin problema.",
    },
    {
      q: "¿Qué recibo con la entrega?",
      a: "Recibís la mezcla y el máster finales en WAV de alta resolución y en MP3, además de una versión instrumental y las pistas listas para plataformas de streaming. Si el proyecto incluye video, se entrega el máster en el formato que necesites.",
    },
    {
      q: "¿Cuánto tarda un proyecto?",
      a: "Una canción individual suele llevar entre una y dos semanas desde la primera sesión. Los proyectos más grandes, como un EP o un álbum, se planifican con un cronograma acordado desde el inicio.",
    },
    {
      q: "¿Con qué géneros trabajás?",
      a: "Trabajo principalmente música cristiana en sus distintas formas: adoración, bachata, cumbia, R&B y fusiones latinas caribeñas. También produzco proyectos fuera de ese ámbito cuando la propuesta artística lo pide.",
    },
    {
      q: "¿Cómo es el proceso?",
      a: "Empezamos con una conversación sobre tu visión y tus referencias. Luego paso a la producción y los arreglos, seguimos con la grabación, la mezcla y la masterización, y cerramos con una revisión conjunta antes de la entrega final.",
    },
  ],
};

export const contact = {
  eyebrow: "Contactos",
  titleTop: "Ponte",
  titleBottom: "en contacto",
  subtitle:
    "¿Listo para empezar un proyecto, tenés una pregunta o simplemente querés saludar? Escribime un mensaje y te respondo pronto.",
  email: "contacto@lucassaavedra.com",
  phone: "+598 00 000 000",
  fields: {
    name: { label: "Nombre", placeholder: "Juan Pérez" },
    email: { label: "Email", placeholder: "tucorreo@ejemplo.com" },
    subject: { label: "Asunto", placeholder: "Propuesta de colaboración" },
    message: { label: "Mensaje", placeholder: "Hagamos algo juntos…" },
  },
  submit: "Enviar mensaje",
  success: "¡Gracias por escribir! Te responderé muy pronto.",
};

export const footer = {
  tagline:
    "Tus ideas merecen más que una maqueta. Démosles forma de canciones que perduran.",
  navHeading: "Navegación",
  socialHeading: "Redes",
  // Instagram ya tiene enlace real; el resto sigue pendiente ("#").
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/lucasxsaavedra/" },
    { label: "Twitter", href: "#" },
    { label: "YouTube", href: "#" },
    { label: "Facebook", href: "#" },
  ],
  legal: "© 2026 PM Music Records. Todos los derechos reservados.",
};
