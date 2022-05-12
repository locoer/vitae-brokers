import React from 'react';
import Header from './Header';
import HeaderLanding from './HeaderLanding';
import Footer from './Footer';
import { Head } from '@inertiajs/inertia-react';

const Pagina = ({titulo, menu=null, contacto, menuFooter=null, metaDescripcion="", landing, sticky, colorLogo, footer=true, children, footerOscuro, ...props}) => {

  return (
    <>
      <Head>
        <title>{titulo}</title>
        <link rel="icon" type="image/png" href="/storage/favicon.png"/>
        <meta name="description" content={metaDescripcion} />
      </Head>
      { landing === undefined ? <Header menu={menu} contacto={contacto} sticky/> : <HeaderLanding colorLogo={colorLogo} menu={menu} contacto={contacto}/> }
      <main {...props}>
        {children}
      </main>
      {footer && <Footer oscuro={footerOscuro === undefined ? false : true} {...menuFooter}/>} 
    </>
  )
}
export default Pagina;