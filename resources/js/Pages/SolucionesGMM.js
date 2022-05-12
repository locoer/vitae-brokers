import { useState } from 'react'
import { InertiaLink } from '@inertiajs/inertia-react'
import Pagina from '@/Layouts/Pagina'
import Fondos from '@/ComponentesV/Fondos'
import Seccion from '@/ComponentesV/Seccion'
import CuadroOpciones from '@/ComponentesV/CuadroOpciones'
import Select from '@/ComponentesV/Select'
import Input from '@/ComponentesV/Input'
import Testimonio from '@/ComponentesV/Testimonio'
import SeccionCTA from '@/Layouts/SeccionCTA'
import Numero from '@/ComponentesV/Numero'
import {Fade, MuestraContenido} from '@/ComponentesV/Animaciones'
import Cobertura from '@/ComponentesV/CompsGmm/Cobertura'
import Deducible from '@/ComponentesV/CompsGmm/Deducible'
import RedHospitales from '@/ComponentesV/CompsGmm/RedHospitales'
import TarjetaInfo from '@/ComponentesV/TarjetaInfo'
import PadecimientosEspera from '@/ComponentesV/CompsGmm/PadecimientosEspera'
import EjemploGmm from '@/ComponentesV/CompsGmm/EjemploGmm'

const SolucionesGMM = ({edades, sexos, propuestas, ...props}) => {
  
  const edadesSelect = edades?.map( e => e.edad) ?? []
  const sexosSelect = sexos?.map( s => s.sexo ) ?? []

  const [ edad, poneEdad ] = useState(edadesSelect[0])
  const [ sexo, poneSexo ] = useState(sexosSelect[0])
  const [ aseguradora, poneAseguradora ] = useState("MetLife")

  const infoPropuesta = propuestas?.filter( propuesta => propuesta.aseguradora === aseguradora ) ?? false
  
  //Define las opciones para el ejemplo de cómo funciona el seguro de GMM
  const opsTipoSiniestroEj = ["Accidente", "Enfermedad"]
  const opsDeducibleEj = !infoPropuesta ? [0] : infoPropuesta[0].precios?.map(precio => precio.monto_deducible)
  const opsHospitalEj = []
  //Popula el array de opciones hospital con la info para cada uno: nombre, coaseguro aplicado y tope coaseguro.
  !infoPropuesta ? opsHospitalEj.push(false) : infoPropuesta[0].planes?.map( plan => { 
    const regex = /([\d]{1,2})\%/
    const coaseguroAplicado = plan.coaseguroAplicado
    const topeCoaseguro = plan.topeCoaseguro
    const deducibleAplicado = plan.deducibleAplicado === "Contratado" ? 1 : (regex.exec(plan.deducibleAplicado)[1])/100 ?? 1
    plan.hospitales?.map( hospital => {
      opsHospitalEj.push({nombre: hospital.nombre, coaseguro: (regex.exec(coaseguroAplicado)[1])/100 ?? false, topeCoaseguro: topeCoaseguro, deducibleAplicado: deducibleAplicado})
    } )
  })

  //Declara las variables del ejemplo de GMM
  const [tipoSiniestroEj, poneTipoSiniestroEj] = useState(opsTipoSiniestroEj[1])
  const [deducibleEj, poneDeducibleEj] = useState(false)
  const [hospitalEj, poneHospitalEj] = useState()
  const [montoSiniestroEj, poneMontoSiniestroEj] = useState(Intl.NumberFormat("es-MX", {style: "decimal"}).format(100000))

  //Para los botones de Aseguradoras que cambian la propuesta
  const cambiaAseguradora = (aseguradora) => {
    //cambia el monto del deducible al resaltado de la aseguradora
    const nuevoDeducibleEj = propuestas?.find( propuesta => propuesta.aseguradora === aseguradora ).precios.find(precio => precio.resaltar).monto_deducible
    poneDeducibleEj(nuevoDeducibleEj)
    poneAseguradora(aseguradora)

  }
  //Para el input del ejemplo de GMMM
  const cambiaMontoSiniestroEj = (e) => {
    let monto = parseFloat(e.target.value.replaceAll(",",""))
    const regex = /[\d]*/
    monto = regex.exec(monto)[0] ?? false
    //console.log("montos: ", regex.exec(monto))
    poneMontoSiniestroEj(Intl.NumberFormat("es-MX", {style: "decimal"}).format(monto))
  }

  //Pone los valores iniciales
  if (infoPropuesta) {
    !deducibleEj ? poneDeducibleEj(infoPropuesta[0].precios?.find( precio => precio.resaltar )?.monto_deducible) : null
    !hospitalEj ? poneHospitalEj(infoPropuesta[0].planes[0]?.hospitales[0]?.nombre) : null
  }

  return (
  <Pagina 
    titulo="Soluciones Gastos Médicos Mayores" 
    landing
    metaDescripcion="Cotizaciones de Seguros de Gastos Médicos Mayores diseñadas especialmente para tí, con distintas Aseguradoras."
    footer={infoPropuesta === false ? false : true }
    colorLogo={ infoPropuesta === false ? "#fafdff" : undefined}
    menu={props.menu}
    contacto={props.contacto}
  >
    {
      !infoPropuesta && 
    <div className="w-full min-h-screen z-10 overflow-x-hidden" >
      <Fondos color={2} />
      <Seccion className='h-screen md:overflow-y-hidden' >
        <div className='flex flex-col items-center h-full min-h-screen text-azul-50'>
          <div className="py-5">
            <Fade delay={1.5}>
              <h1 className="text-4xl xl:text-5xl 2xl:w-3/4 mx-auto text-center">La tranquilidad de tener tu <span className="text-dorado" >Salud Cubierta</span></h1>
            </Fade>
          </div>
          <div className='pt-5 grid grid-cols-1 md:grid-cols-2'>
            <div className="flex items-center">
              <Fade  delay={2.5}>
                <CuadroOpciones>
                  <div className="flex flex-col gap-5 text-azul-900 text-lg" >
                    <p className="text-center text-azul text-xl font-bold">Descubre los planes que preparamos para <span className="text-aqua">proteger tu Salud</span></p>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-2">
                      <p>Selecciona tu Edad: </p>
                      <Select 
                        className="w-28" 
                        opciones={edadesSelect}
                        selected={edad}
                        setSelected={poneEdad} 
                      />
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-2">
                      <p>Selecciona tu sexo:</p>
                      <Select 
                        className="w-40" 
                        opciones={sexosSelect} 
                        selected={sexo}
                        setSelected={poneSexo}
                      />
                    </div>
                    <div>
                      <InertiaLink 
                        className="mx-auto block w-fit bg-azul shadow-azul text-azul-50 hover:bg-dorado-700 hover:shadow-md hover:shadow-azul-100 transition ease-in-out delay-50 rounded shadow py-2 px-3 group hover:-translate-y-1 hover:scale-110 duration-300" 
                        href={route('soluciones.gmm.propuesta', [edad ?? 0, sexo ?? "femenino"])} 
                        id="calcular_gmm"
                        datos={`edad_${edad ?? 0}_sexo_${sexo ?? "femenino"}`}
                      >
                        Calcular
                      </InertiaLink>
                    </div>
                  </div>
                </CuadroOpciones>
              </Fade>
            </div>
            <div>
              <Fade delay={2}>
                <img className="w-3/4 mx-auto" src="/storage/monitaMeditando.svg" />
              </Fade>
            </div>
          </div>
        </div>
      </Seccion>
    </div>
    }
    {
    infoPropuesta && 
    <MuestraContenido>
      <Seccion>
        <div className="my-5 text-center">
          <h2 className="text-4xl xl:text-5xl text-azul w-4/5 mx-auto mb-5">Conoce las <span className="text-aqua">Opciones</span> que preparamos para <span className="text-aqua">Proteger tu Salud</span> </h2>
        </div>
        <div className="flex flex-col mt-10" >
          <div className="flex flex-row gap-5">
            <button className={`border-2 border-gris rounded-lg px-5 py-2 cursor-pointer ${ aseguradora !== "MetLife" ? 'opacity-50 hover:opacity-100 hover:shadow-md' : 'shadow-md'}`} onClick={() => cambiaAseguradora("MetLife")} >
              <img className="w-32 mx-auto" src="/storage/metlife.png" alt="MetLife" />
            </button>
            <button className={`border-2 border-gris rounded-lg px-5 py-2 cursor-pointer ${ aseguradora !== "Mapfre" ? 'opacity-50 hover:opacity-100 hover:shadow-md' : 'shadow-md'}`} onClick={() => cambiaAseguradora("Mapfre")} >
              <img className="w-32 mx-auto" src="/storage/mapfre.png" alt="Mapfre" />
            </button>
          </div>
          <div className="my-5">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-5" >
              <div className="flex flex-col md:col-span-2" >
                <div className="mb-5">
                  <h2 className="text-2xl text-dorado-700">Coberturas</h2>
                </div>
                <TarjetaInfo className="mx-2 px-3 py-1 divide-y divide-gris-400" >
                  <Cobertura nombre="Aseguradora" >
                    { infoPropuesta[0].aseguradora }
                  </Cobertura>
                  {
                    infoPropuesta[0].coberturas?.map( cobertura => {
                      return (
                        <Cobertura nombre={cobertura.nombre} key={cobertura.nombre} >
                          { cobertura.valor }
                        </Cobertura>
                      )
                    })
                  }
                </TarjetaInfo>
              </div>
              <div className="flex flex-col md:col-span-3" >
                <div className="mb-5">
                  <h2 className="text-2xl text-dorado-700">Deducibles y precios</h2>
                </div>
                <div className="flex justify-around flex-wrap gap-5" >
                  {
                     infoPropuesta[0].precios?.map( p => {
                      return (
                        <Deducible montoDeducible={p.monto_deducible} resaltar={p.resaltar} key={p.monto_deducible} >
                          <p>$<Numero>{Math.ceil(p.precio)}</Numero></p>
                          <p>Por Mes</p>
                          <p className="text-base mt-2">$<Numero>{Math.ceil(p.precio_anual)}</Numero></p>
                          <p className="text-base">Anual</p>
                        </Deducible>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="my-5">
            <h2 className="text-2xl text-azul-50 px-5 py-2 mb-2 bg-azul">Red Hospitalaria en Guadalajara, Jalisco</h2>
            <div className="px-2 flex flex-row flex-wrap justify-around items-stretch">
              {
                infoPropuesta[0].planes?.filter( plan => plan.hospitales.length ).map( plan => {
                  return (
                    <RedHospitales
                      coaseguro={plan.coaseguroAplicado}
                      deducible={plan.deducibleAplicado}
                      topeCoaseguro={plan.topeCoaseguro}
                      hospitales={plan.hospitales}
                      key={plan.nombre}
                    />
                  )
                })
              }
            </div>
          </div>
          <div className="my-5">
            <h2 className="text-2xl text-azul-50 px-5 py-2 mb-2 bg-azul">Enfermedades con Periodo de Espera</h2>
            <div>
              <PadecimientosEspera datos={infoPropuesta[0].padecimientos_espera} />
            </div>
          </div>
          <div className="my-5">
            <h2 className="text-2xl text-azul-50 px-5 py-2 mb-2 bg-azul">Ejemplos de Cómo Funciona el Seguro de Gastos Médicos Mayores con {aseguradora}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4" >
              <div className="flex flex-col-reverse md:flex-col">
                <div className="mt-2 px-2">
                  <h3 className="text-dorado-700 text-xl text-bold">Consideraciones del Ejemplo</h3>
                  <p>Se considera un{tipoSiniestroEj === "Enfermedad" ? "a" : ""} <span className="text-aqua text-bold text-lg">{tipoSiniestroEj} </span> 
                  que fue atendid{tipoSiniestroEj === "Enfermedad" ? "a" : "o"} en el <span className="text-aqua text-bold text-lg">Hospital {hospitalEj}</span>, 
                  donde aplica un <span className="text-aqua text-bold text-lg">coaseguro del { (opsHospitalEj.find( h => h.nombre === hospitalEj )?.coaseguro ?? 0) * 100 }%</span> 
                  {opsHospitalEj.find( h => h.nombre === hospitalEj )?.topeCoaseguro ? <span> (Con tope en $<Numero>{opsHospitalEj.find( h => h.nombre === hospitalEj )?.topeCoaseguro}</Numero> pesos)</span> : "(Sin Limite)"}.</p>
                  { tipoSiniestroEj === "Enfermedad" && (opsHospitalEj.find( h => h.nombre === hospitalEj )?.deducibleAplicado ?? 1) === 1 ? null : 
                  <p>En este Hospital hay <span className="text-aqua text-bold text-lg">{(opsHospitalEj.find( h => h.nombre === hospitalEj )?.deducibleAplicado)*100}% de Descuento en el Deducible</span></p> 
                  }
                  <p>El ejemplo considera que la póliza de <span className="text-aqua text-bold text-lg">{aseguradora}</span> tiene un Deducible Contratado de <span className="text-aqua text-bold text-lg">{ <Numero moneda>{deducibleEj}</Numero> }</span> pesos.</p>
                  {
                    tipoSiniestroEj === "Accidente" && 
                    <p>Por ser Accidente el Deducible es de <span className="text-aqua text-bold text-lg">$0 pesos</span></p>
                  }
                </div>
                <CuadroOpciones className="bg-azul-50 my-5">
                  <div className="flex flex-col gap-4 justify-start items-start" >
                    <h3 className="text-center text-dorado-700 text-xl font-bold" >Configura los valores del ejemplo</h3>
                    <div className="flex flex-col gap-y-2 md:flex-row md:gap-x-4">
                      <div>
                        Tipo de Siniestro: 
                        <Select className="w-40" opciones={opsTipoSiniestroEj} selected={tipoSiniestroEj} setSelected={poneTipoSiniestroEj} />
                      </div>
                      <div>
                        Deducible: 
                        <Select className="w-40" opciones={opsDeducibleEj} selected={deducibleEj} setSelected={poneDeducibleEj} />
                      </div>
                    </div>
                    <div>
                      Hospital de Atención: 
                      <Select className="md:w-78" opciones={ opsHospitalEj.map( h => h.nombre ) } selected={hospitalEj} setSelected={poneHospitalEj} />
                    </div>
                    <div>
                      <Input.label forInput="montoSiniestro">Monto del Siniestro:</Input.label>
                      <Input className="w-40" name="montoSiniestro" value={montoSiniestroEj} handleChange={cambiaMontoSiniestroEj} />
                    </div>
                  </div>
                </CuadroOpciones>
              </div>
              <div>
                <EjemploGmm 
                  cuentaHospital={parseFloat(montoSiniestroEj.replaceAll(",",""))}
                  deducible={ tipoSiniestroEj === "Accidente" ? 0 : (Number(deducibleEj) * (opsHospitalEj.find( h => h.nombre === hospitalEj )?.deducibleAplicado ?? 1) )}
                  coaseguro={opsHospitalEj.find( h => h.nombre === hospitalEj )?.coaseguro ?? 0.1}
                  topeCoaseguro = {opsHospitalEj.find( h => h.nombre === hospitalEj )?.topeCoaseguro ?? false}
                />
              </div>
            </div>
          </div>
        </div>
      </Seccion>
      <SeccionCTA
        titulo={<h2 className="text-azul-700 text-4xl xl:text-5xl text-center" >Empieza hoy a <span className="text-aqua" >Proteger tu Salud</span></h2>}
        className="bg-gris-200"
        contacto={props.contacto}
      >
        <p className="my-5 text-lg text-azul text-center" >Contáctanos para contratar o diseñar un plan a tu medida.</p>
      </SeccionCTA>
      <Seccion className='bg-azul text-azul-50' >
        <div className="my-5 text-center">
          <h2 className="text-4xl xl:text-5xl mb-5">Ellos ya <span className="text-dorado">Protegieron su Salud</span></h2>
        </div>
        <div className="my-10 px-2 grid grid-cols-1 md:grid-cols-3 gap-10" >
          <Testimonio oscuro autor="Sandra">
            <p className="text-lg">Me da mucha confianza saber que una persona como Erick lleva mi póliza de Gastos Médicos Mayores.<br/>Cuando hablas con él te das cuenta que domina muy bien el tema y su servicio es impecable.</p>
          </Testimonio>
          <Testimonio oscuro autor="Alejandro">
            <p className="text-lg">Nunca había tenido un seguro de Gastos Médicos Mayores y Erick me ayudó a entender perfectamente cómo funcionan y cuál me conviene más. Estoy muy contento sabiendo que estoy protegido.</p>
          </Testimonio>
          <Testimonio oscuro autor="Guadalupe">
            <p className="text-lg">Buscando un seguro de Gastos Médicos Mayores me habían cotizado de varias compañías pero no entendía porqué variaban tanto los precios y cuál me convenía más hasta que hablé con Erick y me ayudó a escoger el que más me convenía.</p>
          </Testimonio>
        </div>
      </Seccion>
    </MuestraContenido>
    }
  </Pagina>
  )
}

export default SolucionesGMM