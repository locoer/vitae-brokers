import {Chat} from './Iconos'

const Testimonio = ({texto, autor, oscuro, fecha_antiguedad, className, children, ...props}) => {
  const fondoClaro = "border-gris-300 bg-azul-50 shadow-gris hover:shadow-gris"
  const fondoOscuro = "border-rojo bg-rojo shadow-rojo-300 hover:shadow-rojo"
  
  return (
    <div className={`${oscuro === undefined ? fondoClaro : fondoOscuro } ${className} p-2 h-full max-w-lg flex flex-col flex-wrap justify-between border-2 rounded shadow-md hover:shadow-lg`} {...props} >
      <div>
        <Chat className={`w-10 ${oscuro === undefined ? 'stroke-rojo' : 'stroke-azul-50'} `} />
      </div>
      <div className="mx-auto my-5 text-justify w-4/5">
        {texto || children}
      </div>
      <div className={`mx-auto mb-5 w-4/5 text-left ${ oscuro === undefined ? 'text-gris-900' : 'text-azul-100' } `}>
        <p className="font-bold">{autor}</p>
        {
          !fecha_antiguedad ? null : <p className="text-sm">Asegurado desde: {fecha_antiguedad}</p>
        }
      </div>
    </div>
  )
}

export default Testimonio