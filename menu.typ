// MENÚ ARTESANAL PREMIUM - RESTAURANT LA PALAPA
// 1 Hoja US Letter - Edición Superior

#set page(
  paper: "us-letter",
  margin: (x: 0.6cm, y: 0.5cm),
  fill: rgb("#fcf9f5")
)

#set text(font: "Liberation Sans", size: 7pt, fill: rgb("#1e293b"))

// --- COLORES ---
#let ca = rgb("#c2410c")
#let cd = rgb("#0f172a")
#let cm = rgb("#64748b")
#let ck = rgb("#cbd5e1")

#let cat(tit) = {
  v(0.06em)
  block(width: 100%, inset: (bottom: 1pt), stroke: (bottom: 0.8pt + ca))[
    #text(size: 8pt, weight: "black", fill: cd, tracking: 0.8pt)[#upper(tit)]
  ]
  v(0.04em)
}

#let sub(tit) = {
  text(size: 7pt, weight: "bold", fill: ca, tracking: 0.3pt, style: "italic")[#tit]
  v(0.02em)
}

#let plato(nombre, precio, desc: "") = {
  block(width: 100%, breakable: false)[
    #grid(
      columns: (auto, 1fr, auto),
      gutter: 1.5pt,
      align(left + bottom)[#text(weight: "bold", fill: cd, size: 7pt)[#nombre]],
      align(bottom)[#box(width: 100%, repeat(text(fill: ck, size: 6pt)[.]))],
      align(right + bottom)[#text(weight: "black", fill: ca, size: 7.5pt)[#precio]]
    )
    #if desc != "" {
      v(-2.5pt)
      text(size: 6pt, fill: cm, style: "italic")[#desc]
    }
    v(0.3em)
  ]
}

// ==========================================
// ENCABEZADO
// ==========================================
#grid(
  columns: (11%, 1fr),
  gutter: 8pt,
  align(center + horizon)[#image("004.jpg", height: 30pt, fit: "contain")],
  align(left + horizon)[
    #text(size: 14pt, weight: "black", fill: rgb("#431407"), tracking: 1.2pt)[RESTAURANT LA PALAPA]\
    #v(-4pt)
    #text(size: 7.5pt, style: "italic", fill: ca, weight: "bold")[SABOR TRADICIONAL & MARISCOS FRESCOS]\
    #v(-1pt)
    #text(size: 6pt, fill: cm)[Carr. Cacahoatán - Faja de Oro Km 4.5 | 962 177 2132]
  ]
)
#align(center)[#text(fill: ca, size: 8pt)[✦  M E N Ú  ✦]]
#v(-3pt)
#line(length: 40%, stroke: 0.5pt + ca)
#v(0.08em)

// ==========================================
// CUERPO - 2 COLUMNAS
// ==========================================
#show: columns.with(2, gutter: 0.4cm)

#cat("De la Olla")
#plato("Caldo de Gallina Tradicional", "$170", desc: "Con verduras frescas y arroz.")
#plato("Caldo de Pata Especial", "$190", desc: "Sabor concentrado y reconfortante.")

#cat("Desayunos Mexicanos")
#plato("Chilaquiles con Huevo", "$125", desc: "En salsa roja o verde.")
#plato("Chilaquiles con Pollo", "$135", desc: "Con pechuga deshebrada.")
#plato("Chilaquiles con Carne Asada", "$145")

#cat("Al Carbón (Parrilladas)")
#plato("Carne Asada Individual", "$180")
#plato("Parrillada La Palapa (2 pers)", "$340")
#plato("Parrillada Familiar (4 pers)", "$660", desc: "Ideal para disfrutar en familia.")
#plato("Parrillada Monumental (6 pers)", "$960")

#cat("Para los Peques")
#plato("Banderillas (3 pzas)", "$90", desc: "Acompañadas de papas.")
#plato("Papas a la Francesa", "$70")
#plato("Salchipapas Especiales", "$80")

#cat("Bebidas")
#sub("Aguas Frescas")
#plato("Jarra de Agua Grande", "$150")
#plato("Jarra de Agua Chica", "$120")
#plato("Vaso de Agua Fresca", "$25")
#plato("Agua Mineral / Purificada", "$35 / $30")

#sub("Refrescos y Cervezas")
#plato("Refresco Embotellado", "$35")
#plato("Cerveza (Corona o Victoria 1/2)", "$40")
#plato("Michelada Clásica", "$65")

#sub("Cafetería Tradicional")
#plato("Café de Olla / Americano", "$30")
#plato("Café con Leche", "$35")
#plato("Chocolate de la Región", "$45")
#plato("Chocomilk", "$40")

// ---------- COLUMNA DERECHA ----------

#cat("Coctelería y Ceviches")
#plato("Cóctel de Camarón Mediano", "$170")
#plato("Ceviche de Pescado", "$130")
#plato("Ceviche de Camarón", "$150")

#sub("Tostadas")
#plato("De Ceviche de Pescado (1 pza)", "$40")
#plato("Orden de Tostadas (3)", "$110")
#plato("De Camarón (1 pza)", "$50")
#plato("Orden de Tostadas Camarón (3)", "$140")

#cat("Aguachiles")
#plato("Aguachile Verde Tradicional", "$220")
#plato("Aguachile Morado Especial", "$230")

#v(0.02em)
#align(center)[#image("005.jpg", height: 22pt, fit: "cover")]

#cat("Platillos al Gusto")
#sub("Camarones")
#plato("Al Mojo de Ajo", "$210")
#plato("Al Ajillo", "$225")
#plato("A la Diabla", "$235")

#sub("Mojarra Frita")
#plato("Mojarra Mediana", "$190")
#plato("Mojarra Grande", "$210")

#cat("Especialidades")
#plato("Molcajete de Mariscos", "$400", desc: "Mariscos asados en salsa especial.")
#plato("Plato Mar y Tierra", "$480", desc: "Corte de carne y camarones.")

#v(0.02em)
#align(center)[#image("006.jpg", height: 22pt, fit: "cover")]

#v(0.08em)
#align(center)[#text(size: 6.5pt, style: "italic", fill: cm, weight: "bold")[Gracias por tu preferencia — Te esperamos pronto]]
