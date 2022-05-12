const Boton = ({handleClick, className, oscuro, children, ...props}) => {
  const estilosClaro = "bg-azul-50 shadow-azul-100 text-azul hover:bg-dorado hover:shadow-md hover:shadow-azul-100"
  const estilosOscuro = "bg-azul shadow-azul text-azul-50 hover:bg-dorado-700 hover:shadow-md hover:shadow-azul-100"

  return (
    <button 
      className={`${oscuro === undefined ? estilosClaro : estilosOscuro} transition ease-in-out delay-50 rounded shadow py-2 px-3 group hover:-translate-y-1 hover:scale-110 duration-300 ${className}`} 
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default Boton