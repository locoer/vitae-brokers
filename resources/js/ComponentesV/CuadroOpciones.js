const CuadroOpciones = ({children, className, ...props}) => {
  return(
    <div className={`rounded-[4.5rem] shadow-lg shadow-azul-900 bg-azul-50 w-4/5 2xl:w-3/4 mx-auto py-10 px-10 text-azul ${className} `} {...props}>
      {children}
    </div>
  )
}

export default CuadroOpciones