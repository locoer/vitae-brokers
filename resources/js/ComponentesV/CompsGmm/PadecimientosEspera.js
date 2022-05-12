import TarjetaInfo from '@/ComponentesV/TarjetaInfo'

const PadecimientosEspera = ({datos, children, className, ...props}) => {
  const padecimientos = {}

  datos.forEach( dato => {
    padecimientos[dato.tiempo_espera] === undefined ? padecimientos[dato.tiempo_espera] = [dato.padecimiento] : padecimientos[dato.tiempo_espera].push(dato.padecimiento)
  })

  const tiempos = Object.keys(padecimientos)

  return (
    <div className={`mt-5 px-2 flex flex-row justify-around md:items-strech flex-wrap gap-5 ${className ?? ''}`} {...props}>
      {
        tiempos.map( tiempo => {
        return(
          <TarjetaInfo key={tiempo} className={`px-5 py-2 ${padecimientos[tiempo].length > 5 ? "md:basis-5/12" : "basis-96" }`} > 
            <div className="flex flex-row justify-start items-center gap-2 w-full border-b-2 border-aqua">
              <div><h3 className="text-lg text-dorado-700">{tiempo} de Espera</h3></div>
            </div>
            <div className="mt-2 px-2">
              <ul className="list-['-'] list-outside">
                {
                  padecimientos[tiempo].map( padecimiento => <li className="text-base text-gris-600 pl-2" key={padecimiento}>{padecimiento}</li> )
                }
              </ul>
            </div>
          </TarjetaInfo>
        )
        })
      }
    </div>
  )
}

export default PadecimientosEspera