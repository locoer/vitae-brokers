import TarjetaInfo from '@/ComponentesV/TarjetaInfo'
import TextoLineaTexto from '@/ComponentesV/TextoLineaTexto'
import Numero from '@/ComponentesV/Numero'

const EjemploGmm = ({deducible=24500, coaseguro=0.1, topeCoaseguro=false, cuentaHospital=100000, ...props}) => {
  
  cuentaHospital <= deducible ? cuentaHospital = deducible * 2 : null
  !topeCoaseguro ? topeCoaseguro = 999999999999 : null
  const totalDespuesDeducible = cuentaHospital - deducible
  const totalCoaseguro = (totalDespuesDeducible * coaseguro) >= topeCoaseguro ? topeCoaseguro : (totalDespuesDeducible * coaseguro)
  const totalDespuesCoaseguro = totalDespuesDeducible - totalCoaseguro

  return (
    <div {...props}>
      <div className="py-2 px-2 text-bold text-md md:text-lg text-aqua">
        <TextoLineaTexto
          textoIzq={<p>Total Pagado por el Asegurado</p>}
          textoDer={<p className="text-dorado-700">$<Numero valor={cuentaHospital - totalDespuesCoaseguro} /></p>}
        />
        <TextoLineaTexto
          textoIzq={<p>Total Pagado por la Aseguradora</p>}
          textoDer={<p className="text-dorado-700">$<Numero valor={totalDespuesCoaseguro} /></p>}
        />
      </div>
      <TarjetaInfo className="p-2 mx-2 my-2">
        <div className="flex flex-col gap-2">
          <div>
            <p className="text-md text-gris-600" >Del total de la cuenta de Hospital, lo primero que se paga es el Deducible</p>
          </div>
          <TextoLineaTexto
            textoIzq="Cuenta Hospital"
            textoDer={<p>+ <Numero valor={cuentaHospital} /></p>}
          />
          <TextoLineaTexto
            textoIzq="Deducible"
            textoDer={<p>- <Numero valor={deducible} /></p>}
          />
          <TextoLineaTexto
            textoIzq="Total"
            textoDer={<p>= <Numero valor={ totalDespuesDeducible } /></p>}
            className="border-t-2 border-aqua pt-1"
          />
          <div className="pt-2">
            <p className="text-md text-gris-600" >Lo siguiente a pagar es el coaseguro, se multiplica el porcentaje por el restante de la cuenta.</p>
          </div>
          <TextoLineaTexto
            textoIzq="Pendiente Por Pagar"
            textoDer={<p>+ <Numero valor={totalDespuesDeducible} /></p>}
          />
          <TextoLineaTexto
            textoIzq={`Coaseguro ${coaseguro*100}% ${ totalCoaseguro === topeCoaseguro ? "(Coaseguro Topado)" : "" } `}
            textoDer={<p>- <Numero valor={totalCoaseguro} /></p>}
          />
          <TextoLineaTexto
            textoIzq="Total"
            textoDer={<p>= <Numero valor={totalDespuesCoaseguro} /></p>}
            className="border-t-2 border-aqua pt-1"
          />
          <div className="pt-2">
            <p className="text-md text-gris-600" >Después de haber pagado el deducible y el coaseguro, la Aseguradora pagará el restante de la cuenta del Hospital.</p>
          </div>
          <TextoLineaTexto
            textoIzq="Pendiente Por Pagar"
            textoDer={<p>+ <Numero valor={totalDespuesCoaseguro} /></p>}
          />
          <TextoLineaTexto
            textoIzq="Pago Aseguradora"
            textoDer={<p>- <Numero valor={totalDespuesCoaseguro} /></p>}
          />
          <TextoLineaTexto
            textoIzq="Total"
            textoDer="= $0"
            className="border-t-2 border-aqua pt-1"
          />
        </div>
      </TarjetaInfo>
    </div>
  )
}

export default EjemploGmm