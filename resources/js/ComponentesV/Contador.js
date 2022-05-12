import { useState, useRef, useEffect } from "react"
import {useOnScreen} from '@/Auxs/HooksV'

const Contador = ({inicio=0, fin=100, step=1, tiempo=2000, moneda, icono, children, className, ...props}) => {
  const [ valorContador, cambiaValorContador ] = useState(inicio)
  const [idInterval, cambiaIdInterval] = useState()

  const periodo = Math.ceil( tiempo / ((fin - inicio) / step) )
  const elContador = useRef()
  const seVe = useOnScreen(elContador)
  const estilosNumero = moneda !== undefined ? {style: "currency", currency:"MXN"} : {style: "decimal"}
  
  const formatoNumero = Intl.NumberFormat("es-MX", estilosNumero)

  const nuevoValor = () => {
    valorContador < fin ? cambiaValorContador(valorContador => (valorContador + step) > fin ? fin : valorContador + step ) : null
  }
  //Inicia el contador si se ve el elemento
  if (seVe && !idInterval) {
    const idIntervalEffect = setInterval(nuevoValor, periodo)
    cambiaIdInterval(idIntervalEffect)
  }
  //Reinicia el contador
  if (!seVe && valorContador > inicio) {
    cambiaValorContador(valorContador => (valorContador * 0) + inicio)
    clearInterval(idInterval)
    cambiaIdInterval(null)
  }
  
  valorContador >= fin ? clearInterval(idInterval) : null

  return(
    <div className={`flex flex-col justify-center items-center gap-y-2 ${className}`} {...props}>
      <div className="flex items-end gap-x-3">
        <span ref={elContador}>{formatoNumero.format(valorContador)}</span>
        {icono ?? null}
      </div>
      {children ? <div className="text-center">{children}</div> : null }
    </div>
  )
}

export default Contador