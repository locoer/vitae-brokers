import Pagina from '../Layouts/Pagina';
import Fondos from '@/ComponentesV/Fondos'
import Seccion from '@/ComponentesV/Seccion'
import {Fade, EntraLado} from '@/ComponentesV/Animaciones'
import { InertiaLink } from '@inertiajs/inertia-react';

const Soluciones = (props) => {
  return (
    <Pagina 
      titulo="Soluciones" 
      landing
      metaDescripcion="Seguros de Gastos Médicos Mayores y Planes de Retiro diseñados especialmente para tí."
      footer={false}
      colorLogo="#fafdff"
      menu={props.menu}
      contacto={props.contacto}
    >
      <div className="min-h-screen z-10 px-0 mx-0" >
        <Fondos />
        <Seccion className='h-screen md:overflow-y-hidden overflow-x-hidden' >
          <div className="flex flex-col-reverse md:flex-row items-center h-full min-h-screen text-azul-50">
            <div className="md:basis-1/2">
              <Fade delay={1.7}>
                <img className="w-80 mx-auto" src="/storage/monita.svg" />
              </Fade>
            </div>
            <div className="md:basis-1/2">
              <Fade delay={2.2}>
                <h1 className="text-4xl text-center my-10" >¿Qué es lo que más te <span className="text-dorado" >preocupa</span> de tu <span className="text-dorado">futuro</span>?</h1>
              </Fade>
              <div className="flex flex-row justify-around gap-2">
                <div className="flex flex-col">
                  <InertiaLink href={route("soluciones.retiro")} className="group" >
                    <EntraLado delay={3.2} >
                      <img className="w-32 mx-auto" src="/storage/iconoRetiro.svg" />
                      <p className="bg-rojo group-hover:bg-aqua px-1 mt-px text-xl text-center">No tener dinero</p>
                      <p className="bg-rojo group-hover:bg-aqua px-1 mt-px text-xl text-center">en mi Retiro</p>
                    </EntraLado>
                  </InertiaLink>
                </div>
                <div className="flex flex-col">
                  <InertiaLink href={route("soluciones.gmm")} className="group" >
                    <EntraLado delay={3.2} lado="derecho" >
                      <img className="w-32 mx-auto" src="/storage/iconoHospital.svg" />
                      <p className="bg-rojo group-hover:bg-aqua px-1 mt-px px-2 text-xl text-center">Acabar en el</p>
                      <p className="bg-rojo group-hover:bg-aqua px-1 mt-px px-2 text-xl text-center">Hospital</p>
                    </EntraLado>
                  </InertiaLink>
                </div>
              </div>
            </div>
          </div>
        </Seccion>
      </div>
    </Pagina>
  )
}
export default Soluciones