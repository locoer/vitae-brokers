import {useEffect, useState, useRef} from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import {Whats, Insta, Face} from '../ComponentesV/Iconos'
import Logo from '../ComponentesV/Logo'
import MenuPrincipal from '@/ComponentesV/MenuPrincipal'
import MenuMovil from '@/ComponentesV/MenuMovil'

const Header = ({menu, contacto, children, className, sticky=false, ...props}) => {
  
  const redes_sociales =
    {
      facebook: contacto?.f ?? "#",
      whatsapp: contacto?.w ?? "#",
    };
    const elHeader = useRef()
    const [ headerScroll, poneHeaderScroll ] = useState(false)

    useEffect( () => {

      const hanldeScroll = () => {
        const alturaHeader = elHeader.current.offsetHeight
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
    <header ref={elHeader} className={`border-b shadow-sm py-3 ${headerScroll ? "md:py-0" : "md:py-2"} bg-azul-50 ${sticky === true ? 'sticky top-0 z-50 background-azul-50':'' } ${className ?? ''}`} {...props} >
      <nav className="grid grid-cols-6">
        {/* --- Logo --- */}
        <div className="col-span-2">
          <div className="ml-5 flex flex-row justify-start">
            <div>
              <InertiaLink href="/">
                <Logo className={`xl:w-72 md:w-52 w-40 ${headerScroll ? "md:scale-75 md:origin-center" : "" }`} />
              </InertiaLink>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          {/* --- Menú --- */}
          <MenuPrincipal menu={menu} />
        </div>
        <div className="col-span-2 flex justify-end items-center h-full">
          <MenuMovil menu={{...menu, 'avisodeprivacidad': "Aviso de Privacidad"}} className="px-1"/>
          {/* --- Menú Redes Sociales --- */}
          <div className="mr-5 md:mr-10">
            <ul role="list" className="flex justify-end gap-x-2 items-center h-full">
            { redes_sociales.whatsapp === undefined ? null : 
              <li className="px-1">
                <a href={redes_sociales.whatsapp} target="_blank" rel="noreferrer nofollow">
                  <Whats className="w-7 fill-current stroke-current text-azul hover:scale-125 hover:text-dorado" />
                </a>
              </li>
              }
              { redes_sociales.facebook === undefined ? null : 
              <li className="px-1">
                <a href={redes_sociales.facebook} target="_blank" rel="noreferrer nofollow">
                  <Face className="w-7 fill-current stroke-current text-azul hover:scale-125 hover:text-dorado" />
                </a>
              </li>
              }
              { redes_sociales.instagram === undefined ? null : 
              <li className="px-1">
                <a href={redes_sociales.instagram} target="_blank" rel="noreferrer nofollow">
                  <Insta className="w-7 fill-current stroke-current text-azul hover:scale-125 hover:text-dorado" />
                </a>
              </li>
              }
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;