const CuadroInfo = ({img, nombre, titulo, info, iconoInfo, className, ...props}) => {
  return (
    <div className={`h-full border-gris-300 border rounded-md shadow-md bg-gris-200 p-5 w-80 hover:shadow-lg hover:scale-105 ${className ?? ''}`}>
      <div className="flex flex-col gap-y-2">
          {
            img && 
            <div>
              <img className="mx-auto" src={img} alt={nombre ?? ""}/>
            </div>
          }
        { !img && nombre ? <div><p className="text-sm text-center text-gris"> {nombre} </p></div> : null }
        <div className="flex flex-col">
          {
          titulo && 
          <div className="mt-2 mb-5">
            <p className="text-lg">{titulo}</p>
            <div className="w-16 border-t-4 border-azul"></div>
          </div>
          }
          
          <div>
            <ul>
              {info.map( el => <li key={el} className="flex flex-row items-start justify-start gap-x-2">{ <div>{iconoInfo}</div> ?? ''} {<div>{el}</div>}</li> )}
            </ul>
          </div>          
        </div>
      </div>
    </div>
  )
}

export default CuadroInfo
