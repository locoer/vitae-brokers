import React from 'react';
import Pagina from '../Layouts/Pagina';
import Seccion from '../ComponentesV/Seccion'
import IconoTexto from '../ComponentesV/IconoTexto'
import Testimonio from '../ComponentesV/Testimonio'
import BotonLink from '../ComponentesV/BotonLink'
import {Fade, EntraLado, EntraVertical} from '@/ComponentesV/Animaciones'
import {Whats, Face, Foco, Billetes, Edificio, Corazon, SimboloMoneda, Documento, UsuarioMas, Chispas, Portafolio, Documentos, InterrogacionCirculo, PulgarArriba} from '../ComponentesV/Iconos'

const LpGmm = (props) => {
  //console.log('los propses:', props)
  return (
    <Pagina 
      titulo={`Gastos Médicos Mayores`} 
      className="text-gris-700 font-sans overflow-x-hidden" 
      landing
      menu={props.menu}
      contacto={props.contacto}
    >
      <Seccion>
        <div className="2xl:w-2/3 xl:w-4/5 mx-auto xl:mt-0 mt-5">
          <Fade>
            <h1 className="text-center xl:text-6xl text-5xl text-azul-700 p-5">Protege tu salud y tu dinero contra enfermedades y accidentes</h1>
          </Fade>
        </div>
        <div className="mt-10 grid lg:grid-cols-2 grid-cols-1">
          <div>
            <EntraLado delay={0.2}>
              <img src="/storage/protege-dinero-lpgmm.svg" className="w-4/5 mx-auto" alt="Protege tu patrimonio contra enfermedades y accidentes" />
            </EntraLado>
          </div>
          <div className="flex flex-col justify-center ">
            <EntraLado lado="derecho" delay={0.2}>
              <IconoTexto 
                icono={ <Billetes ancho={1} className="w-1/2 mx-auto stroke-azul" /> } 
                texto={<p>Tendrás acceso a un <span className="text-dorado-700 font-bold">fondo de dinero</span> para ayudarte a cubrir tus gastos médicos en caso de sufrir una enfermedad o accidente.</p>}
              />
              <IconoTexto 
                icono={<Edificio ancho={1} className="w-1/2 mx-auto stroke-azul" />} 
                texto={<p>Tendrás acceso a una <span className="text-dorado-700 font-bold">red de doctores y hospitales privados</span> en caso de tener alguna enfermedad o accidente.</p>} 
              />
              <IconoTexto 
                icono={<Corazon ancho={1} className="w-1/2 mx-auto stroke-azul-700" />} 
                texto={<p>Tendrás la tranquilidad y seguridad de que <span className="text-dorado-700 font-bold">tú, tu familia y tu patrimonio estarán protegidos</span> en caso de una enfermedad o accidente que pueda afectar gravemente tu calidad de vida.</p>} 
              />
              <IconoTexto 
                icono={<SimboloMoneda ancho={1} className="w-1/2 mx-auto stroke-azul-700" />} 
                texto={<p>Es 100% <span className="text-dorado-700 font-bold">deducible de impuestos.</span></p>} 
              />
            </EntraLado>
          </div>
        </div>
      </Seccion>
      <Seccion className="bg-gradient-to-bl from-azul-50 via-azul-100 to-azul-300 mt-5 py-24">
        <div className="2xl:w-2/3 xl:w-4/5 mx-auto py-5">
          <EntraVertical>
            <h2 className="text-azul text-4xl text-center">¿Cómo es posible <span className="text-dorado-700">proteger tu salud y tu dinero</span>?</h2>
          </EntraVertical>
        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1">
          <Fade delay={0.2}>
            <IconoTexto 
              icono={<Documento className="mx-auto w-20 stroke-azul" />}
              titulo={<h3 className="text-dorado-700 text-2xl">Póliza de Gastos Médicos Mayores</h3>}
              texto={<p>Tu salud y dinero se protegen a través de una <span className="text-azul font-bold">Póliza de Gastos Médicos Mayores</span> que se personaliza de acuerdo con tu perfil y presupuesto.</p>} 
              tipo={2}
            />
          </Fade>
          <Fade delay={0.4}>
            <IconoTexto 
              icono={<UsuarioMas className="mx-auto w-20 stroke-azul" />}
              titulo={<h3 className="text-dorado-700 text-2xl">Apoyo de un Asesor Experto</h3>}
              texto={<p>Tendrás <span className="text-azul font-bold">gratis el apoyo de un Asesor Experto</span> en seguros de Gastos Médicos Mayores para resolver tus dudas, ayudarte a escoger las coberturas que más te convienen y realizar los trámites relacionados con el Seguro de Gastos Médicos Mayores.</p>} 
              tipo={2}
            />
          </Fade>
          <Fade delay={0.6}>
            <IconoTexto 
              icono={<Chispas className="mx-auto w-20 stroke-azul" />}
              titulo={<h3 className="text-dorado-700 text-2xl">Experiencia en Seguros de GMM</h3>}
              texto={<p>Tenemos <span className="text-azul font-bold">más de 6 años de experiencia</span> en Seguros de Gastos Médicos Mayores y conocemos a detalle cómo funcionan las pólizas y qué coberturas tienen la mejor relación precio beneficio.</p>}
              tipo={2}
            />
          </Fade>
          <Fade delay={0.8}>
            <IconoTexto 
              icono={<Portafolio className="mx-auto w-20 stroke-azul" />}
              titulo={<h3 className="text-dorado-700 text-2xl">Distintas Aseguradoras más Opciones</h3>}
              texto={<p>Trabajamos con <span className="text-azul font-bold">distintas aseguradoras</span>, de forma que tengas más opciones para escoger el Seguro de Gastos Médicos Mayores que mejor te convenga.</p>} 
              tipo={2}
            />
          </Fade>
        </div>
      </Seccion>
      <Seccion className='pb-10'>
        <div className="2xl:w-2/3 xl:w-4/5 mx-auto py-5">
          <Fade>
            <h2 className="text-azul text-4xl text-center">Ellos ya están <span className="text-dorado-700">Protegidos</span></h2>  
          </Fade>
        </div>
        <div className="my-10">
          <div className="mt-10 grid md:grid-cols-3 lg:grid-cols-3 grid-cols-1 gap-5">
            <EntraVertical por="abajo" delay={0.1} tiempo={0.5}>
              <Testimonio
                texto={<p>Estaba jugando fútbol con mis amigos y me lastimé la rodilla. <br/><br/>La lesión requirió de una operación con un costo de más de $300,000 pesos, los cuales fueron cubiertos por el seguro de Gastos Médicos Mayores que había contratado a través de Vitae Brokers.</p>}
                autor="Rafa"
                fecha_antiguedad="18/nov/2018"
              />
            </EntraVertical>
            <EntraVertical por="abajo" delay={0.3} tiempo={0.5}>
              <Testimonio
                texto={<p>Estaba en el baño cuando sentí un tirón en la panza. Después de unas horas el tirón se convirtió en un dolor intenso y fui al hospital. <br/><br/>En el hospital detectaron que tenía una hernia y era necesaria una operación. Me operaron y del total de la cuenta del hospital, pagué menos del 10% y el resto lo cubrió la aseguradora.</p>}
                autor="Sandra"
                fecha_antiguedad="18/nov/2018"
              />
            </EntraVertical>
            <EntraVertical por="abajo" delay={0.5} tiempo={0.5}>
              <Testimonio
                texto={<p>Estaba embarazada y di a luz a mi hijo en un hospital privado, en compañía de mi esposo y mis seres queridos. <br/><br/>Los gastos del parto estuvieron cubiertos por la aseguradora.</p>}
                autor="Isabel"
                fecha_antiguedad="18/nov/2018"
              />
            </EntraVertical>
          </div>
        </div>
      </Seccion>
      <Seccion className="py-14 bg-gradient-to-tr from-azul-300 via-azul-500 to-azul-900 text-azul-100">
        <div className="2xl:w-2/3 xl:w-4/5 mx-auto mt-5 mb-10">
          <Fade>
            <h2 className="text-4xl text-center">Solicita una <span className="text-dorado">Asesoría Gratuita</span> con un experto en Seguros de Gastos Médicos Mayores.</h2>
          </Fade>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 place-items-stretch py-5">
          <div className="col-span-2">
            <div className="text-2xl text-azul-50 flex flex-col justify-around gap-5">
              <EntraLado delay={0.2}>
                <IconoTexto 
                  icono={<Documentos className="stroke-azul-300 w-14 float-right" />} 
                  texto={<p>Cotizaciones en menos de 24 hrs</p>}
                />
                <IconoTexto 
                  icono={<InterrogacionCirculo className="stroke-azul-300 w-14 float-right" />} 
                  texto={<p>Resuelte tus dudas e inquietudes sin compromiso</p>}
                />
                <IconoTexto 
                  icono={<PulgarArriba className="stroke-azul-300 w-14 float-right" />} 
                  texto={<p>Garantía de Buen Servicio</p>}
                />
              </EntraLado>
            </div>
          </div>
          <div>
            <EntraLado lado="derecho" delay={0.2}>
              <div>
                <h3 className="text-3xl text-dorado mb-5 animate-bounce">Escríbenos</h3>
              </div>
              <div className="text-2xl text-azul-50 flex flex-col justify-around justify-items-end gap-5">
                <div>
                  <BotonLink link={props.contacto?.w ?? "#"} blank>
                    <Whats className="fill-azul stroke-azul w-10 inline mr-5" /> WhatsApp
                  </BotonLink>
                </div>
                <div>
                  <BotonLink link={props.contacto?.f ?? "#"} blank>
                    <Face className="fill-azul stroke-azul w-10 inline mr-5" /> Facebook
                  </BotonLink>
                </div>
                <div>
                  <BotonLink link={route('soluciones.gmm')}>
                    <Foco className="fill-azul stroke-azul w-10 inline mr-5" /> Cotizador
                  </BotonLink>
                </div>
              </div>
            </EntraLado>
          </div>
        </div>
      </Seccion>
    </Pagina>
    
  )
}

export default LpGmm