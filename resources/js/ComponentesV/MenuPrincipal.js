import { useState, useRef, useEffect } from 'react';
import { InertiaLink } from '@inertiajs/inertia-react'
import {IconoMenu} from '@/ComponentesV/Iconos'
import {MuestraContenido} from '@/ComponentesV/Animaciones'

const MenuPrincipal = ({menu, className, ...props}) => {
  const [ muestraMenuMovil, cambiaMuestraMenuMovil ] = useState(false)

  const elHeader = useRef()

  menu = menu ?? {
    inicio: "Inicio",
  };
  
  const menuDos = [
    {texto: "Inicio", menu: "/"}
  ]
  const clickMenuMovil = (e) => {
    cambiaMuestraMenuMovil(!muestraMenuMovil)
  }

  const keysMenu = Object.getOwnPropertyNames(menu)
  
  useEffect( () => {
    elHeader.current = document.getElementsByTagName('header')
  },[elHeader.current])
  
  return (
    <div className={`h-full hidden md:block ${className ?? ''}`} {...props}>
        <ul role="list" className="flex flex-row items-center justify-center h-full gap-x-8">
          {keysMenu.map( key => 
            <li key={key} className="font-sans text-azul text-xl text-center hover:text-dorado-700">
              <InertiaLink href={ route().has(key) ? route(key) : "#"}>{menu[key]}</InertiaLink>
            </li>
          )}
        </ul>
    </div>
  )
}

export default MenuPrincipal