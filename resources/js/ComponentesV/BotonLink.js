const BotonLink = ({link, blank, className, oscuro, children, ...props}) => {
  const estilosClaro = "bg-azul-50 shadow-azul-100 text-azul hover:bg-dorado hover:shadow-md hover:shadow-azul-100"
  const estilosOscuro = "bg-azul shadow-azul text-azul-50 hover:bg-dorado-700 hover:shadow-md hover:shadow-azul-100"
  
  return (
    <a 
      href={link ?? '#'} 
      className={`${oscuro === undefined ? estilosClaro : estilosOscuro} transition ease-in-out delay-50 rounded shadow inline-block py-3 px-5 group hover:-translate-y-1 hover:scale-110 duration-300 ${className}`} 
      target={blank ? '_blank' : ''} 
      rel={blank ? 'noopener noreferrer' : ''}
      {...props}
    >
      {children}
    </a>
  )
}

export default BotonLink