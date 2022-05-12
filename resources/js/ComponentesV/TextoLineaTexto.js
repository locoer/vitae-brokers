const TextoLineaTexto = ({textoIzq, textoDer, linea=1, children, className, ...props}) => {
  return (
    <div className={`flex flex-row justify-between items-center gap-2 ${className}`} {...props}>
      <div>{textoIzq}</div>
      <div className={`border-azul border-b ${linea === 1 ? 'border-dashed' : ''} h-1 grow`} ></div>
      <div>{textoDer}</div>
      {children}
    </div>
  )
}

export default TextoLineaTexto