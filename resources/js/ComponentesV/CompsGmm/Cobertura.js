const Cobertura = ({nombre, valor, children, className, ...props}) => {
  return(
    <div className={`py-1 grid grid-cols-2 content-center gap-2 ${className ?? ''}`} {...props} >
      <div className="text-gris text-lg" ><p>{nombre}</p></div>
      <div className="text-gris-900 text-xl"> {valor ?? children} </div>
    </div>
  )
}

export default Cobertura