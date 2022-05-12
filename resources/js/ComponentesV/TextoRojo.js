const TextoRojo = ({children, className, ...props}) => {
  return (
    <p className={`${className} bg-rojo px-1 mt-px max-w-fit text-xl text-center text-azul-50`} {...props} >{children}</p>
  )
}

export default TextoRojo