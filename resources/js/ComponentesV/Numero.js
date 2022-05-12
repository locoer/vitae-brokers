const Numero = ({moneda, valor, children, ...props}) => {
  const estilosNumero = moneda !== undefined ? {style: "currency", currency:"MXN"} : {style: "decimal"}
  const formatoNumero = Intl.NumberFormat("es-MX", estilosNumero)
  const numero = valor ?? children
  return (
    <>{formatoNumero.format( Number(numero))}</>
  )
}
export default Numero