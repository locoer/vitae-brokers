import { useState, useRef, useEffect } from 'react';
import { InertiaLink } from '@inertiajs/inertia-react'
import {IconoMenu} from '@/ComponentesV/Iconos'
import {MuestraContenido} from '@/ComponentesV/Animaciones'
import {useClickAfuera} from '@/Auxs/HooksV'

const MenuMovil = ({menu, className, muestra=false, ...props}) => {
  const [ muestraMenuMovil, cambiaMuestraMenuMovil ] = useState(false)

  const elHeader = useRef(null)
  const elMenu = useRef(null)
  muestraMenuMovil ? useClickAfuera(elMenu, ()=>{cambiaMuestraMenuMovil(false)} ) : useClickAfuera(null)

  menu = menu ?? {
    inicio: "Inicio",
  };
  
  const clickMenuMovil = (e) => {
    cambiaMuestraMenuMovil(!muestraMenuMovil)
  }

  const keysMenu = Object.getOwnPropertyNames(menu)
  
  useEffect( () => {
    elHeader.current = document.getElementsByTagName('header')
  },[elHeader.current])

  return (
    <div ref={elMenu} className={`${!muestra ? 'md:hidden' : ''} flex justify-end items-center h-full ${className ?? ''} `} {...props}>
      <IconoMenu className={`${muestraMenuMovil ? 'stroke-dorado fill-dorado' : 'stroke-azul fill-azul'} hover:stroke-dorado hover:fill-dorado w-7 cursor-pointer`} onClick={clickMenuMovil} />
      { muestraMenuMovil && 
        <div style={{top: elHeader.current[0].offsetHeight}} className={`${ muestraMenuMovil ? `absolute right-0 rounded-b-md shadow-md before:block before:absolute before:inset-0 before:bg-azul-50 before:opacity-90 before:-z-10` : 'hidden' }`}>
          <MuestraContenido tiempo={0.8} >
            <ul role="list" className="flex flex-col h-min py-5 px-2 items-start justify-center gap-y-8">
              {keysMenu.map( key => 
                <li key={key} className="font-sans text-azul text-xl text-center hover:text-dorado-700">
                  <InertiaLink href={ route().has(key) ? route(key) : "#"}>{menu[key]}</InertiaLink>
                </li>
              )}
            </ul>
          </MuestraContenido>
        </div>
      }
    </div>
  )
}

export default MenuMovil