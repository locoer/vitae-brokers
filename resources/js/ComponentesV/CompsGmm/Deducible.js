import Numero from '@/ComponentesV/Numero'

const Deducible = ({ montoDeducible, valor, resaltar, className, children, ...props }) => {
  
  return (
    <div className={`${resaltar === true ? 'scale-110' : ''} flex flex-col justify-center items-center text-center bg-gris-200 border-gris-300 border-2 rounded-xl py-3 px-5 shadow-md shadow-gris ${className ?? ''}`} {...props} >
      <div className="text-2xl text-azul">{valor ?? children}</div>
      <div className="my-2 flex flex-col items-center text-xl" >
        <p className={`${resaltar === true ? 'bg-rojo' : 'bg-aqua'} text-azul-50 px-1 w-fit`} ><Numero>{montoDeducible}</Numero></p>
        <p className={`${resaltar === true ? 'bg-rojo' : 'bg-aqua'} text-azul-50 px-1 mt-px w-fit`} >Deducible</p>
      </div>
    </div>
  )
}

export default Deducible