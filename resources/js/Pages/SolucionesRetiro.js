import { useState } from 'react';
import Pagina from '../Layouts/Pagina';
import Fondos from '@/ComponentesV/Fondos'
import Seccion from '@/ComponentesV/Seccion'
import CuadroOpciones from '@/ComponentesV/CuadroOpciones'
import Select from '@/ComponentesV/Select'
import Numero from '@/ComponentesV/Numero'
import TextoRojo from '@/ComponentesV/TextoRojo'
import Testimonio from '@/ComponentesV/Testimonio';
import SeccionCTA from '@/Layouts/SeccionCTA'
import {Fade, MuestraContenido, MueveLados} from '@/ComponentesV/Animaciones'
import { InertiaLink } from '@inertiajs/inertia-react';
import SacosDinero from '@/ComponentesV/SacosDinero'
import {useWindowDimensions} from '@/Auxs/HooksV'

const SolucionesRetiro = ({edades, montosAhorro, propuestas, ...props}) => {
  const edadesSelect = edades?.map( e => e.edad ) ?? []
  const montosAhorroSelect = montosAhorro?.map( m => <Numero moneda>{m.monto_ahorro}</Numero> ) ?? []

  const [ edad, poneEdad ] = useState(edadesSelect[0])
  const [ montoAhorro, ponemontoAhorro ] = useState(montosAhorroSelect[0])

  const medidasVentana = useWindowDimensions()

  return (
  <Pagina 
    titulo="Soluciones Retiro" 
    landing
    metaDescripcion="Planes de Retiro diseñados especialmente para tí."
    footer={ propuestas === undefined ? false : true }
    colorLogo={ propuestas === undefined ? "#fafdff" : "#2C5480" }
    menu={props.menu}
    contacto={props.contacto}
  >
    { !propuestas && 
    <div className="w-full min-h-screen z-10 overflow-x-hidden" >
      <Fondos color={2} />
      <Seccion className='h-screen md:overflow-y-hidden' >
        <div className='flex flex-col items-center h-full min-h-screen text-azul-50'>
          <div className="py-5">
            <Fade delay={1.5} >
              <h1 className="text-4xl xl:text-5xl 2xl:w-1/2 mx-auto text-center">Disfrutar tu <span className="text-dorado" >Retiro</span> es más <span className="text-dorado" >barato</span> de lo que crees</h1>
            </Fade>
          </div>
          <div className='pt-5 grid grid-cols-1 md:grid-cols-2'>
            <div className="flex items-center">
              <Fade delay={1.8} >
                <CuadroOpciones>
                  <div className="flex flex-col gap-5 text-azul-900 text-lg" >
                    <p className="text-center text-azul text-xl font-bold">Descubre lo que puedes lograr en tu <span className="text-aqua">Retiro</span></p>
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
                      <p>¿Cuánto quieres ahorrar?</p>
                      <Select 
                        className="w-40" 
                        opciones={montosAhorroSelect} 
                        selected={montoAhorro}
                        setSelected={ponemontoAhorro}
                      />
                    </div>
                    <div>
                      <InertiaLink 
                        className="mx-auto block w-fit bg-azul shadow-azul text-azul-50 hover:bg-dorado-700 hover:shadow-md hover:shadow-azul-100 transition ease-in-out delay-50 rounded shadow py-2 px-3 group hover:-translate-y-1 hover:scale-110 duration-300" 
                        href={route('soluciones.retiro.propuesta', [edad ?? 20, Number(montoAhorro.props.children) ?? 1500 ])} 
                        id="calcular_retiro"
                        datos={`edad_${edad ?? 20}_montoAhorro_${Number(montoAhorro.props.children) ?? 1500}`}
                      >
                        Calcular
                      </InertiaLink>
                    </div>
                  </div>
                </CuadroOpciones>
              </Fade>
            </div>
            <div>
              <Fade delay={1.8} >
                <img className="w-3/4 mx-auto" src="/storage/retiradosFelices.svg" />
              </Fade>
            </div>
          </div>
        </div>
      </Seccion>
    </div>
    }
    { propuestas &&
    <MuestraContenido>
      <Seccion>
        <div className="my-5">
          <h2 className="text-4xl xl:text-5xl text-center text-azul">Con un Plan Personal de Retiro <span className="text-aqua" >lograrás</span> que...</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 py-10 items-end" >
          <div className="flex flex-col items-center" >
            <img className="w-32 mx-auto" src="/storage/frascoMonedas.svg" alt="Dinero Ahorro" />
            <TextoRojo>Ahorrar</TextoRojo>
            <TextoRojo>
              $<Numero>{propuestas[0].montos[0].monto_ahorro}</Numero> por mes
            </TextoRojo>
          </div>
          <div className="flex flex-col items-center self-center py-10 md:py-0" >
            <MueveLados tiempo={2} tipo={ medidasVentana?.width > 768 ? 1 : 2}>
              <img className="w-36 mx-auto rotate-90 md:rotate-0" src="/storage/flechaCirculo.svg" />
              <p className="text-azul" >Se conviertan en:</p>
            </MueveLados>
          </div>
          <div className="flex flex-col items-center" >
            <div>
            <SacosDinero className="w-11/12" />
            </div>
            <TextoRojo className="text-2xl" >
              $<Numero>{Math.floor(propuestas[0].montos[0].mensualidad_retiro)}</Numero> por mes
            </TextoRojo>
            <TextoRojo className="text-2xl" >Para Gastar en tu Retiro</TextoRojo>
          </div>
        </div>
      </Seccion>
      <Seccion className='bg-[rgba(0,0,0,0.03)] text-azul'>
        <div className="my-5 text-center">
          <h2 className="text-4xl xl:text-5xl mb-5">¿Cómo es posible <span className="text-aqua" >lograrlo</span>?</h2>
          <p className="text-xl xl:text-2xl py-5" >Con un Plan Personal de Retiro y la Asesoría Personalizada por un Experto para:</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10" >
          <div className="flex justify-start items-center">
            <img className="w-32" src="/storage/dineroRetiro.svg" alt="Tu Dinero Crece" />
            <p className="uppercase text-3xl">Hacer crecer tu <span className="text-dorado text-4xl" >Dinero</span></p>
          </div>
          <div className="flex justify-start items-center gap-5">
            <img className="w-32 mx-auto" src="/storage/dineroImpuestos.svg" alt="Te Regresa Impuestos" />
            <p className="uppercase text-3xl">Hacer que te regresen dinero de los <span className="text-dorado text-4xl" >impuestos</span> que te quitan</p>
          </div>
        </div>
      </Seccion>
      <SeccionCTA
        titulo={<h2 className="text-azul-700 text-4xl xl:text-5xl text-center" >Empieza hoy a <span className="text-aqua" >Cambiar tu Retiro</span></h2>}
        contacto={props.contacto}
      >
        <p className="my-5 text-lg text-azul text-center" >Estamos para ayudarte, contáctanos de la forma que se te facilite para diseñar tu Estrategia Personal de Retiro.</p>
      </SeccionCTA>
      <Seccion className='bg-azul text-azul-50' >
        <div className="my-5 text-center">
          <h2 className="text-4xl xl:text-5xl mb-5">Ellos ya están <span className="text-dorado">garantizando su Retiro</span></h2>
        </div>
        <div className="my-10 grid grid-cols-1 md:grid-cols-3 gap-10" >
          <Testimonio oscuro autor="Agustín">
            <p className="text-lg">Erick me apoyó mucho en entender cómo funcionan los planes de returo y entendió perfectamente lo que estaba buscando. <br/>Estoy muy contento con mi Plan de Ahorro para el Retiro.</p>
          </Testimonio>
          <Testimonio oscuro autor="María">
            <p className="text-lg">Ya tenía un plan de retiro y quería incrementar mi aportación. Hablando con Erick me ayudó a saber cómo podía sacar el mayor provecho de mi dinero con los distintos planes que existen.</p>
          </Testimonio>
          <Testimonio oscuro autor="Carlos">
            <p className="text-lg">Ya me habían presentado varios planes de retiro pero lo que me convenció de la estrategia de Erick es que puedo deducir el 100% de mi aportación y que puedo meter más dinero al plan en caso de que necesite ahorrar más.</p>
          </Testimonio>
        </div>
      </Seccion>
    </MuestraContenido>
    } 
  </Pagina>
  )
}

export default SolucionesRetiro