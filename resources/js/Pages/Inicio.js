import React from 'react';
import Pagina from '../Layouts/Pagina';
import Seccion from '../ComponentesV/Seccion'
import IconoTexto from '../ComponentesV/IconoTexto'
import CuadroInfo from '@/ComponentesV/CuadroInfo';
import Contador from '@/ComponentesV/Contador'
import BotonLink from '@/ComponentesV/BotonLink'
import {Whats, Face, SimboloMoneda, Coleccion, Billetes, Documento, PulgarArriba, Lupa, Usuarios, Chispas, Foco} from '../ComponentesV/Iconos'
import {Fade, EntraLado, EntraVertical} from '@/ComponentesV/Animaciones'

const Inicio = (props) => {
  
  return (
    <Pagina 
      titulo={`Inicio`} 
      sticky 
      footerOscuro 
      className="text-gris-800 overflow-x-hidden" 
      menu={props.menu} 
      contacto={props.contacto}
      metaDescripcion="Despacho Financiero especializado en ayudar a personas y empresas a contratar y gestionar seguros de distintos tipos con la finalidad de preservar e incrementar su patrimonio."
    >
      <Seccion className='py-10 bg-center bg-no-repeat bg-cover bg-sombrillas from-azul-700/70 to-azul-700/70'>
        <div className="flex flex-col w-full">
          <Fade className="2xl:w-2/3 xl:w-4/5 mx-auto xl:mt-0 mt-5">
            <h1 className="text-center xl:text-4xl md:text-3xl text-xl text-azul-50 p-5">Somos un <span className="text-dorado">Despacho Financiero</span> especializado en ayudar a personas y empresas a <span className="text-dorado">contratar y gestionar seguros</span> de distintos tipos con la finalidad de preservar e incrementar su patrimonio.</h1>
          </Fade>
        </div>
      </Seccion>
      <Seccion>
        <div className="grid grid-cols-1 md:grid-cols-2 content-center items-center py-10">
          <EntraLado className="text-xl" delay={0.2}>
            <IconoTexto
              icono = { <Coleccion className="xl:w-20 w-12 mx-auto stroke-dorado-700" /> }
              texto = { <p><span className="text-azul font-bold">Protege tu Patrimonio</span> contra enfermedades y accidentes</p> } 
            />
            <IconoTexto
              icono = { <SimboloMoneda className="xl:w-20 w-12 mx-auto stroke-dorado-700" /> }
              texto = { <p><span className="text-azul font-bold">Protege tus Bienes</span> contra robos y accidentes</p> } 
            />
            <IconoTexto
              icono = { <Billetes className="xl:w-20 w-12 mx-auto stroke-dorado-700" /> }
              texto = { <p>Garantiza una <span className="text-azul font-bold">Sucesión Patrimonial</span> adecuada</p> } 
            />
          </EntraLado>
          <div>
            <EntraLado lado="derecho" delay={0.2}>
              <img src="/storage/patrimonio.jpg" className="w-4/5 mx-auto" alt="Beneficios"  />
            </EntraLado>
          </div>
        </div>
      </Seccion>
      <Seccion className='bg-azul-100'>
        <Fade className="my-5" delay={0.2}>
          <h2 className="text-3xl text-dorado-700 text-center font-bold py-5">¿Cómo conseguimos los Mejores Seguros?</h2>
        </Fade>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
          <EntraLado lado="derecho" delay={0.5}>
            <IconoTexto
                icono = { <div className="flex items-center justify-center text-6xl text-azul-700 font-bold"><span>1-</span><Documento className="xl:w-20 w-12 ml-5 stroke-azul-700" /></div> }
                titulo = {<h3 className="text-dorado-700 text-xl font-bold">Identificamos sus Necesidades Financieras</h3>} 
                texto = { <p className="text-justify">Identificamos sus necesidades de protección financiera en 3 ramos: Gastos relacionados a la Salud, Protección de Bienes, Sucesión Patrimonial.</p> }
                tipo={2}
              />
          </EntraLado>
          <EntraLado lado="derecho" delay={0.8}>
            <IconoTexto
              icono = { <div className="flex items-center justify-center text-6xl text-azul-700 font-bold"><span>2-</span><Lupa className="xl:w-20 w-12 ml-5 stroke-azul-700" /></div> }
              titulo = {<h3 className="text-dorado-700 text-xl font-bold">Buscamos las Mejores Soluciones</h3>} 
              texto = { <p className="text-justify">Buscamos las mejores soluciones con las distintas Aseguradoras con las que trabajamos, logrando que se cubran sus necesidades de acuerdo con su presupuesto.</p> }
              tipo={2}
            />
          </EntraLado>
          <EntraLado lado="derecho" delay={1.1}>
            <IconoTexto
              icono = { <div className="flex items-center justify-center text-6xl text-azul-700 font-bold"><span>3-</span><PulgarArriba className="xl:w-20 w-12 ml-5 stroke-azul-700" /></div> }
              titulo = {<h3 className="text-dorado-700 text-xl font-bold">Hacemos Todo el Papeleo</h3>} 
              texto = { <p className="text-justify">Gestionamos la contratación y operación de su(s) póliza(s) de seguro, apoyándolo con la administración, orientación y seguimiento en todos los temas relacionados a la misma, especialmente si ocurren siniestros.</p> }
              tipo={2}
            />
          </EntraLado>
        </div>
      </Seccion>
      <Seccion>
        <EntraVertical className="my-5" delay={0.3}>
          <h2 className="text-3xl text-azul text-left font-bold py-5">Trabajamos con las mejores Aseguradoras</h2>
        </EntraVertical>
        <div className="flex flex-row justify-around flex-wrap gap-y-10 py-10">
          <Fade delay={0.3}>
            <CuadroInfo 
              nombre="MetLife México"
              img="/storage/metlife.png"
              titulo="Personas y Empresas"
              info={["Seguros de Vida", "Seguros de Gastos Médicos Mayores Individual y Empresarial", "Planes de Ahorro para Empresas (Deducibles de Impuestos)", "Seguros de Hombre Clave y Sucesión Patrimonial"]}
              iconoInfo={ <Documento className="stroke-azul w-6 inline" ancho={1}/> }
            />
          </Fade>
          <Fade delay={0.4}>
            <CuadroInfo 
              nombre="Mapfre"
              img="/storage/mapfre.png"
              titulo="Personas, Empresas y Bienes"
              info={["Seguros de Gastos Médicos Mayores Individual y Empresarial", "Seguros de Auto", "Seguros de Casa", "Seguros de Negocio"]}
              iconoInfo={ <Documento className="stroke-azul w-6 inline" ancho={1}/> }
            />
          </Fade>
          <Fade delay={0.5}>
            <CuadroInfo 
              nombre="Skandia"
              img="/storage/skandia.png"
              titulo="Inversiones"
              info={["Planes de Ahorro", "Planes de Retiro (Deducibles de Impuestos)"]}
              iconoInfo={ <Documento className="stroke-azul w-6 inline" ancho={1}/> }
            />
          </Fade>
          <Fade delay={0.6}>
            <CuadroInfo 
              nombre="Quálitas"
              img="/storage/qualitas.png"
              titulo="Autos"
              info={["Seguros de auto", "Seguros de auto para plataformas", "Seguros de flotillas"]}
              iconoInfo={ <Documento className="stroke-azul w-6 inline" ancho={1}/> }
            />
          </Fade>
          <Fade delay={0.7}>
            <CuadroInfo 
              nombre="Axa"
              img="/storage/axa.png"
              titulo="Personas, Empresas y Bienes"
              info={["Seguros de Gastos Médicos Mayores Individual y Empresarial", "Seguros de auto", "Seguros de flotillas", "Seguros de Casa"]}
              iconoInfo={ <Documento className="stroke-azul w-6 inline" ancho={1}/> }
            />
          </Fade>
          <Fade delay={0.8}>
            <CuadroInfo 
              nombre="GNP"
              img="/storage/gnp.png"
              titulo="Personas, Empresas y Bienes"
              info={["Seguros de Gastos Médicos Mayores Individual y Empresarial", "Seguros de auto", "Seguros de flotillas", "Seguros de Casa"]}
              iconoInfo={ <Documento className="stroke-azul w-6 inline" ancho={1}/> }
            />
          </Fade>
          <Fade delay={0.9}>
            <CuadroInfo 
              nombre="Sura"
              img="/storage/sura.png"
              titulo="Personas, Empresas y Bienes"
              info={["Seguros de Gastos Médicos Mayores Individual y Empresarial", "Seguros de auto", "Seguros de flotillas", "Seguros de Casa"]}
              iconoInfo={ <Documento className="stroke-azul w-6 inline" ancho={1}/> }
            />
          </Fade>
        </div>
      </Seccion>
      <Seccion className='bg-gradient-to-b from-azul to-azul-700 text-azul-50'>
        <Fade className="my-5">
          <h2 className="text-3xl text-dorado text-center py-5">Nuestra Experiencia</h2>
        </Fade>
        <div className="grid grid-cols-1 md:grid-cols-3 place-content-around gap-5 my-10">
          <Fade tiempo={0.5} delay={0.1}>
            <Contador 
              inicio={1} 
              fin={157} 
              step={1} 
              tiempo={2000} 
              className="text-3xl"
              icono={ <Usuarios className="stroke-azul-50 w-10" /> }
            >
              <p className="text-dorado">Asegurados</p>
            </Contador>
          </Fade>
          <Fade tiempo={0.5} delay={0.1}>
            <Contador 
              inicio={0} 
              fin={1230000} 
              step={10000} 
              tiempo={2000} 
              moneda
              className="text-3xl"
              icono={ <Billetes className="stroke-azul-50 w-10" /> }
            >
              <p className="text-dorado">Dinero Pagado en Siniestros</p>
            </Contador>
          </Fade>
          <Fade tiempo={0.5} delay={0.1}>
            <Contador 
              inicio={0} 
              fin={6} 
              step={1} 
              tiempo={2000} 
              className="text-3xl"
              icono={ <Chispas className="stroke-azul-50 w-10" /> }
            >
              <p className="text-dorado">Años de Experiencia</p>
            </Contador>
          </Fade>
        </div>
      </Seccion>
      <Seccion>
        <Fade className="my-5">
          <h2 className="text-3xl text-azul text-left font-bold py-5">Te ayudamos a proteger tu patrimonio</h2>
        </Fade>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <EntraLado>
              <img src="/storage/contacto.jpg" className="w-4/5 mx-auto" alt="Contáctanos" />
            </EntraLado>
          </div>
          <EntraLado className="flex flex-col justify-start gap-5 items-left" lado="derecha">
            <div>
              <h3 className="text-xl text-dorado-700 font-bold">Contacta a un Asesor Experto</h3>
            </div>
            <div className="flex flex-col md:flex-row justify-around items-start md:items-center gap-3">
              <div>
                <BotonLink oscuro link={props.contacto?.w ?? "#"} className="flex items-center" blank><Whats className="fill-azul-50 stroke-azul-50 w-6 mr-2" /> WhatsApp</BotonLink>
              </div>
              <div>
                <BotonLink oscuro link={props.contacto?.f ?? "#"} className="flex items-center" blank><Face className="fill-azul-50 stroke-azul-50 w-6 mr-2" /> Facebook</BotonLink>
              </div>
              <div>
                <BotonLink oscuro link={route('soluciones')} className="flex items-center"><Foco className="fill-azul-50 stroke-azul-50 w-6 mr-2" /> Cotizador</BotonLink>
              </div>
            </div>
            <div>
              <p className="text-md text-gris">Atendemos a todo México, nos ubicamos en Guadalajara, Jalisco.</p>
            </div>
            <div>
              <h3 className="text-lg text-dorado-700 mt-5">Asesores de Seguros Autorizados en México</h3>
            </div>
            <div className="flex flex-row justify-start gap-10 items-center">
              <img src="/storage/cnsf.png" alt="CNSF"/>
              <img src="/storage/shcp.png" alt="SHCP"/>
            </div>
          </EntraLado>
        </div>
      </Seccion>
    </Pagina>
  )
}

export default Inicio