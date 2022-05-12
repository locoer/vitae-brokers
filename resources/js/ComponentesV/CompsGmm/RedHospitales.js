import {Edificio} from '@/ComponentesV/Iconos'
import TarjetaInfo from '@/ComponentesV/TarjetaInfo'
import Numero from '@/ComponentesV/Numero'

const RedHospitales = ({coaseguro, deducible, topeCoaseguro, hospitales=[], className, ...props}) => {
  return(
    <TarjetaInfo className="my-2 py-3 px-5 flex flex-col">
      <p className="text-dorado-700 text-bold text-lg border-b-2 border-aqua">Hospitales con {coaseguro} Coaseguro</p>
      <div className="my-2 grow">
        <ul className="text-azul text-lg">
          {
            hospitales.map( hospital => 
              <li key={hospital.nombre} > 
                <a href={ hospital.sitio_web ?? "#" }>
                  <Edificio className="w-5 stroke-azul inline" /> {hospital.nombre}
                </a>
              </li> 
            )
          }
        </ul>
      </div>
      <p className="text-gris text-lg border-t-2 border-aqua">Deducible {deducible ?? "Contratado"}</p>
      <p className="text-gris text-lg">Tope de Coaseguro: {topeCoaseguro ? <>$<Numero>{topeCoaseguro}</Numero></> : "Sin Límite"}</p>
    </TarjetaInfo>
  )
}

export default RedHospitales