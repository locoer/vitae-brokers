export const infoSeguros = [
  {
    aseguradora: "MetLife",
    coberturas: [
      {texto: "Suma Asegurada", valor: 140000000},
      {texto: "Coaseguro", valor: "10%"},
      {texto: "Deducible en Accidentes", valor: 2000},
      {texto: "Suma Asegurada Maternidad", valor: 35101},
      {texto: "Cobertura Dental", valor: "Amplia con Dentegra"},
    ],
    deducibles: [
      {monto: 17500, precio: 753, resaltar: false},
      {monto: 20000, precio: 706, resaltar: false},
      {monto: 24500, precio: 586, resaltar: true},
      {monto: 30500, precio: 508, resaltar: false},
    ],
    redHospitales: [
      {
        nombrePlan: "Práctico",
        coaseguro: "0%",
        deducible: "50% de Descuento",
        hospitales: ["Hospital 1","Hospital 2","Hospital 3","Hospital 4","Hospital 5"]
      },
      {
        nombrePlan: "Básico",
        coaseguro: "10%",
        deducible: "Contratado",
        hospitales: ["Hospital 1","Hospital 2","Hospital 3","Hospital 4","Hospital 5"]
      },
      {
        nombrePlan: "Más",
        coaseguro: "20%",
        deducible: "Contratado",
        hospitales: ["Hospital 1","Hospital 2","Hospital 3","Hospital 4","Hospital 5"]
      },
      {
        nombrePlan: "Ejecutivo",
        coaseguro: "30%",
        deducible: "Contratado",
        hospitales: ["Suites en Hospitales Más"]
      }
    ]
  },
  {
    aseguradora: "Mapfre",
    coberturas: [
      {texto: "Suma Asegurada", valor: 100000000},
      {texto: "Coaseguro", valor: "10%"},
      {texto: "Deducible en Accidentes", valor: 2000},
      {texto: "Suma Asegurada Maternidad", valor: 0},
      {texto: "Cobertura Dental", valor: "Amplia con Dentalia"},
    ],
    deducibles: [
      {monto: 10000, precio: 753, resaltar: false},
      {monto: 15000, precio: 706, resaltar: true},
      {monto: 20000, precio: 586, resaltar: false},
      {monto: 25000, precio: 508, resaltar: false},
    ],
    redHospitales: [
      {
        nombrePlan: "Esencial",
        coaseguro: "10%",
        deducible: "Contratado",
        hospitales: ["Hospital 1","Hospital 2","Hospital 3","Hospital 4","Hospital 5"]
      },
      {
        nombrePlan: "Óptima",
        coaseguro: "30%",
        deducible: "Contratado",
        hospitales: ["Hospital 1","Hospital 2","Hospital 3","Hospital 4","Hospital 5"]
      },
      {
        nombrePlan: "Integral",
        coaseguro: "50%",
        deducible: "Contratado",
        hospitales: ["Hospital 1","Hospital 2","Hospital 3","Hospital 4","Hospital 5"]
      }
    ]
  }
]