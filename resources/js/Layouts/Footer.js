import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import Logo from '../ComponentesV/Logo'

const Footer = ({menuFooter=null, oscuro=false, children, ...props}) => {
  menuFooter !== null ? menuFooter : menuFooter = {
    "Inicio" : route('inicio'),
    "Aviso de Privacidad": route('avisodeprivacidad'),
  }
  return (
    <footer className={`text-center p-5 ${oscuro === false ? '' : 'bg-azul-900'}`}>
      <div className="container mx-auto flex flex-row justify-between">
        <div className="text-center">
          <InertiaLink href="/">
            <Logo className="w-64" color={oscuro === false ? '#2C5480' : '#fafdff'} />
          </InertiaLink>
        </div>
        <div>
          {/* --- Menú Footer --- */}
          <div className="h-full hidden md:block">
            <ul role="list" className="flex justify-center gap-x-8 items-center h-full mx-auto">
              {Object.keys(menuFooter).map( (menu) => 
                <li key={menu} className={`font-sans ${oscuro === false ? 'text-azul-700 hover:text-dorado-700' : 'text-azul-50 hover:text-dorado'} text-xl text-center`}><InertiaLink href={menuFooter[menu]}>{menu}</InertiaLink></li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;