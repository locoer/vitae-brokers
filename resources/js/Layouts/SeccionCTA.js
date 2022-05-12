import Seccion from "../ComponentesV/Seccion"
import { Whats, TelefonoMovil, Chat } from "../ComponentesV/Iconos"

const SeccionCTA = ({titulo, children, contacto, ...props}) => {
  const regexp = /(\+[0-9]{2})([0-9]{2})([0-9]{4})([0-9]{4})/g

  const telRegex = [...contacto?.t?.matchAll(regexp)]
  const tel = `(${telRegex[0][1]}) ${telRegex[0][2]}-${telRegex[0][3]}-${telRegex[0][4]}`

  const whatsRegex = [...contacto?.w?.matchAll(regexp)]
  const whats = `(${whatsRegex[0][1]}) ${whatsRegex[0][2]}-${whatsRegex[0][3]}-${whatsRegex[0][4]}`

  return(
    <Seccion {...props} >
      <div className="flex flex-col-reverse md:flex-row justify-around" >
        <div>
          <img className="w-40 mx-auto" src="/storage/monoCaraFeliz.svg" alt="Contáctanos" />
        </div>
        <div>
          <div className="my-5" >
            {titulo}
          </div>
          <div className="flex flex-col md:flex-row gap-5 justify-around items-center md:items-end py-5 text-azul">
            <div className="transition ease-in-out delay-100 hover:scale-110">
              <a href={contacto?.w ?? "#"} >
                <Whats className="mx-auto w-28 my-5 stroke-[#25d366] fill-[#25d366]" />
                <p className="text-center text-2xl" >Escríbenos <br/>{whats}</p>
              </a>
            </div>
            <div className="transition ease-in-out delay-100 hover:scale-110">
              <a href={contacto?.t ?? "#"} >
                <TelefonoMovil className="mx-auto w-28 my-5 stroke-rojo" />
                <p className="text-center text-2xl" >Llámanos <br/>{tel}</p>
              </a>
            </div>
            <div className="transition ease-in-out delay-100 hover:scale-110">
              <a href={contacto?.f ?? "#"} >
                <Chat className="mx-auto w-28 my-5 stroke-azul-700" />
                <p className="text-center text-2xl" >Chatea con un <br/>Experto</p>
              </a>
            </div>
          </div>
          <div>
            {children}
          </div>
        </div>
      </div>

    </Seccion>
  )
}

export default SeccionCTA