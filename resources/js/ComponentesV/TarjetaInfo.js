const TarjetaInfo = ({children, className, ...props}) => {
  return (
    <div className={`bg-gris-200 border-gris-300 border-2 rounded-xl shadow-md shadow-gris ${className ?? ''}`} {...props} >
      {children}
    </div>
  )
}

export default TarjetaInfo