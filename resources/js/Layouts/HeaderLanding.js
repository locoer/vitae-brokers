import {useEffect, useRef, useState} from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import {Whats, Face, IconoMenu} from '../ComponentesV/Iconos'
import {LogoAnimado, IconoLogo} from '../ComponentesV/Logo'
import {MuestraContenido} from '@/ComponentesV/Animaciones'
import MenuMovil from '@/ComponentesV/MenuMovil'

const HeaderLanding = ({menu, contacto, children, className, sticky=true, colorLogo, ...props}) => {
  const [ headerScroll, poneHeaderScroll ] = useState(false)
  const [ alturaHeader, cambiaAlturaHeader ] = useState(0)
  
  const redes_sociales =
  {
    whatsapp: contacto?.w ?? "#",
    facebook: contacto?.f ?? "#"
  };
  
  const elHeader = useRef()

  useEffect( () => {
    const nuevaAlturaHeader = elHeader.current.offsetHeight
    cambiaAlturaHeader(nuevaAlturaHeader)

    const hanldeScroll = () => {
      const nuevaAlturaHeader = elHeader.current.offsetHeight
      cambiaAlturaHeader(nuevaAlturaHeader)
      window.scrollY >= alturaHeader ? poneHeaderScroll(true) : poneHeaderScroll(false)
    }

    // clean up code
    window.removeEventListener('scroll', hanldeScroll)
    window.addEventListener('scroll', hanldeScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', hanldeScroll)
    }

  }, [])
  
  return (
    <header ref={elHeader} className={`py-2 bg-transparent fixed top-0 w-full z-20 ${className ?? ''}`}>
      <nav className="grid grid-cols-6">
        {/* --- Logo --- */}
        <div className="col-span-2">
          <div className="ml-5">
            <div className="inline-block">
              <InertiaLink href="/">
                {headerScroll ? <IconoLogo className="w-10" color={colorLogo} /> : <LogoAnimado className="w-60" color={colorLogo} />}
              </InertiaLink>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          {/* --- Zona Media - Nada --- */}
        </div>
        <div className="col-span-2 flex justify-end items-center h-full">
          <MenuMovil menu={{...menu, 'avisodeprivacidad': "Aviso de Privacidad"}} muestra={true} className="px-1"/>
          {/* --- Menú Redes Sociales --- */}
          <div className="mr-5 md:mr-10">
            <ul role="list" className="flex justify-end gap-x-2 items-center h-full">
              <li className="px-1">
                <a href={redes_sociales.whatsapp} target="_blank" rel="noreferrer nofollow">
                  <Whats className="w-5 fill-current stroke-current text-azul hover:scale-125 hover:text-dorado" />
                </a>
              </li>
              <li className="px-1">
                <a href={redes_sociales.facebook} target="_blank" rel="noreferrer nofollow">
                  <Face className="w-5 fill-current stroke-current text-azul hover:scale-125 hover:text-dorado" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default HeaderLanding;