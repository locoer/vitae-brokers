const IconoTexto = ({icono, titulo, texto, className, tipo=1, children, ...props}) => {
  return(
    <div className={`my-5 flex ${tipo===2 ? 'flex-col' : 'flex-row items-center'} justify-start ${className ?? ''}`} {...props}>
      <div className={`px-3 ${tipo===2 ? 'mb-5' : ''} ${tipo===1 ? 'basis-1/4' : ''}`}>
        {icono}
      </div>
      <div className={`justify-self-stretch px-5 ${tipo===1 ? 'text-left basis-3/4' : 'text-center'}`}>
        {titulo === undefined ? '' : <div className="mb-5 text-center">{titulo ?? ""}</div>}
        <div>
          {texto}
          {children}
        </div>
      </div>
    </div>
  )
}

export default IconoTexto