import Pagina from '../Layouts/Pagina';
import Seccion from '../ComponentesV/Seccion'

const AvisoPrivacidad = (props) => {
  return (
    <Pagina
      titulo={`Aviso de Privacidad`} 
      sticky 
      footerOscuro
      className="text-gris-800 overflow-x-hidden" 
      menu={props.menu} 
      contacto={props.contacto}
      metaDescripcion="Aviso de Privacidad de Vitae Brokers, un despacho financiero especializado en ayudar a personas y empresas a contratar y gestionar seguros de distintos tipos con la finalidad de preservar e incrementar su patrimonio."
    >
      <Seccion className='text-justify'>
      <h1 className="font-bold text-center text-2xl mt-2 mb-4">Aviso de Privacidad de {props.nombreEmp} &ndash; Erick L&oacute;pez Cohen</h1>
      <p className="my-2">En Vitae Brokers estamos comprometidos a protegerte a ti y a tus seres queridos. Como parte de esta protecci&oacute;n, te informamos que los datos personales que nos proporcionas son tratados con absoluta confidencialidad y que contamos con las medidas de seguridad suficientes para garantizar la protecci&oacute;n de tus datos personales en apego a la Ley Federal de Protecci&oacute;n de Datos Personales en Posesi&oacute;n de los Particulares. Por ello, ponemos a tu disposici&oacute;n nuestro Aviso de Privacidad.</p>
      
      <h2 className="font-bold text-xl my-2">IDENTIDAD Y DOMICILIO DEL RESPONSABLE QUE RECABA LOS DATOS.</h2>
      
      <p className="my-2">Erick L&oacute;pez Cohen (mejor conocido como Vitae Brokers), ubicado en Av. Patria #888 &ndash; piso 7, Col. Jardines Universidad, C.P. 45110, Zapopan, Jalisco, M&eacute;xico</p>
      
      <h2 className="font-bold text-xl my-2">FINALIDADES DEL TRATAMIENTO DE DATOS.</h2>
      
      <p className="my-2">Los datos personales que recabamos directamente de ti, de otras fuentes permitidas por la ley o los que se generen de estas o de la relaci&oacute;n que lleguemos a establecer, y que son necesarios para otorgarte servicios de asesor&iacute;a relativos a la intermediaci&oacute;n de seguros o los que se deriven o sean accesorias de &eacute;sta, los utilizamos para identificarte, evaluar e intermediar tu solicitud de seguro, analizar riesgos, intermediar los tramites de tus siniestros, prevenir fraudes y cumplir obligaciones derivadas de cualquier relaci&oacute;n jur&iacute;dica que establezcamos conforme a la legislaci&oacute;n aplicable en materia de seguros; generar datos estad&iacute;sticos; evaluar la calidad del servicio; detectar necesidades financieras y de protecci&oacute;n; y para fines secundarios al promocionarte nuestros productos o servicios financieros o de nuestros socios comerciales y partes relacionadas o al realizar campa&ntilde;as publicitarias o con fines de mercadotecnia. Para estas finalidades, requerimos tus datos personales de identificaci&oacute;n, laborales, acad&eacute;micos y migratorios; tus datos patrimoniales y financieros; y tus datos personales sensibles de salud y caracter&iacute;sticas f&iacute;sicas.</p>
      <h2 className="font-bold text-xl my-2"> OPCIONES Y MEDIOS PARA LIMITAR EL USO O DIVULGACI&Oacute;N DE TUS DATOS PERSONALES.</h2>
      <p className="my-2">Si deseas que tus datos no sean tratados con fines secundarios, al promocionarte productos o servicios financieros, te pedimos enviar un correo electr&oacute;nico a <a href="mailto:contacto@vitaebrokers.com">contacto@vitaebrokers.com</a>. Tambi&eacute;n puedes inscribirte en el Registro P&uacute;blico de Usuarios (Reus) a cargo de la Condusef, para ello puedes visitar su p&aacute;gina de Internet o contactarla directamente. Si este aviso de privacidad no se te da a conocer de manera directa o personal, tienes un plazo de 5 d&iacute;as naturales para oponerte al tratamiento y transferencia de tus datos para los fines secundarios indicados, utilizando los mismos medios mencionados anteriormente.</p>
      
      <h2 className="font-bold text-xl my-2">MEDIOS PARA EJERCER TUS DERECHOS Y REVOCAR TU CONSENTIMIENTO.</h2>
      
      <p className="my-2">Tienes derecho a acceder, rectificar, cancelar y oponerte al tratamiento de tus datos o puedes revocar el consentimiento que nos hayas otorgado solicit&aacute;ndolo personalmente en nuestro departamento de protecci&oacute;n de datos personales en la direcci&oacute;n arriba citada o en cualquiera de nuestros medios de comunicación disponibles en nuestra página de internet, acompa&ntilde;ando a dicha solicitud lo siguiente:</p>
      <ol className="my-2">
        <li>a) Tu nombre completo como titular de los datos y correo electr&oacute;nico, domicilio u otro medio para que te comuniquemos la respuesta a tu solicitud.</li>
        <li>b) Los documentos que acrediten tu identidad o, en su caso, a la de tu representante legal.</li>
        <li>c) La descripci&oacute;n clara y precisa de los datos personales respecto de los que buscas ejercer alguno de los derechos antes mencionados.</li>
        <li>d) Cualquier otro elemento o documento que facilite la localizaci&oacute;n de tus datos personales.</li>
      </ol>
      <p className="my-2">En el caso de solicitudes de rectificaci&oacute;n de datos personales, deber&aacute;s indicar, adem&aacute;s de lo se&ntilde;alado anteriormente, las modificaciones a realizarse y aportar la documentaci&oacute;n que sustente tu petici&oacute;n. Vitae Brokers te comunicar&aacute;, en un plazo m&aacute;ximo de veinte d&iacute;as h&aacute;biles, contados desde la fecha en que se recibi&oacute; tu solicitud, la determinaci&oacute;n adoptada, a efecto de que, si resulta procedente, se haga efectiva la misma dentro de los quince d&iacute;as h&aacute;biles siguientes a la fecha en que te comunica la respuesta. Trat&aacute;ndose de solicitudes de acceso a datos personales, proceder&aacute; la entrega previa acreditaci&oacute;n de la identidad del solicitante o representante legal, seg&uacute;n corresponda.</p>
      <p className="my-2">Los plazos antes referidos podr&aacute;n ser ampliados una sola vez por un periodo igual, siempre y cuando as&iacute; lo justifiquen las circunstancias del caso.</p>
      <p className="my-2">La obligaci&oacute;n de acceso a tu informaci&oacute;n se dar&aacute; por cumplida cuando se pongan a tu disposici&oacute;n los datos personales; o bien, mediante la expedici&oacute;n de copias simples, documentos electr&oacute;nicos o cualquier otro medio.</p>
      <p className="my-2">Vitae Brokers podr&aacute; negarte el acceso a los datos personales, o a realizar la rectificaci&oacute;n o cancelaci&oacute;n o conceder la oposici&oacute;n al tratamiento de los mismos, en los siguientes casos:</p>
      <ol className="list-disc list-inside my-2">
        <li>Si eres el solicitante, pero no el titular de los datos personales, o tu representante legal no est&eacute; debidamente acreditado para ello.</li>
        <li>Cuando en nuestra base de datos, no se encuentren tus datos personales.</li>
        <li>Cuando se lesionen los derechos de un tercero.</li>
        <li>Cuando exista un impedimento legal, o la resoluci&oacute;n de una autoridad competente, que restrinja el acceso a tus datos personales, o no permita la rectificaci&oacute;n, cancelaci&oacute;n u oposici&oacute;n de los mismos.</li>
        <li>Cuando la rectificaci&oacute;n, cancelaci&oacute;n u oposici&oacute;n haya sido previamente realizada.</li>
      </ol>
      
      <p className="my-2">En todos los casos anteriores, te informaremos el motivo de nuestra decisi&oacute;n y te la comunicaremos, o en su caso, a tu representante legal, en los plazos establecidos para tal efecto, por el mismo medio por el que se llev&oacute; a cabo la solicitud, acompa&ntilde;ando, en su caso, las pruebas que resulten pertinentes. Para cualquier duda sobre estos derechos puedes enviarnos un correo a <a href="mailto:contacto@vitaebrokers.com">contacto@vitaebrokers.com</a></p>
      
      <h2 className="font-bold text-xl my-2">TRANSFERENCIA DE DATOS.</h2>
      
      <p className="my-2">Podemos transferir tus datos a terceros nacionales o internacionales como dependencias, entidades o instancias gubernamentales para fines de Ley o por requerimiento de Autoridad; a prestadores de servicios de salud para tramitar tus siniestros; a organizaciones del sector asegurador para fines de prevenci&oacute;n de fraude y selecci&oacute;n de riesgos; a nuestras sociedades controladoras y casa matriz para la administraci&oacute;n de tu seguro; y a nuestras subsidiarias, filiales y partes relacionadas para fines de mercadotecnia, publicidad o prospecci&oacute;n comercial.</p>
      
      <h2 className="font-bold text-xl my-2">CAMBIOS AL AVISO DE PRIVACIDAD.</h2>
      
      <p className="my-2">Los cambios o actualizaciones a este aviso de privacidad est&aacute;n disponibles y puedes consultarlos peri&oacute;dicamente en nuestro sitio de internet <a href="https://vitaebrokers.com">www.vitaebrokers.com</a> en el v&iacute;nculo de Aviso de Privacidad. Este aviso se fundamenta en lo dispuesto en la Ley Federal de Protecci&oacute;n de Datos Personales en Posesi&oacute;n de los Particulares y dem&aacute;s legislaci&oacute;n aplicable.</p>
      <h2 className="font-bold text-xl my-2">COOKIES</h2>
      <p className="my-2">La cookie es una breve informaci&oacute;n que el portal de Internet env&iacute;a a tu computadora, la cual queda almacenada en el disco duro. La pr&oacute;xima vez que ingreses a nuestro portal, podremos usar la informaci&oacute;n almacenada en la cookie para facilitarte el uso de nuestro sitio de Internet. Por ejemplo, podemos usar tu cookie para almacenar una contrase&ntilde;a para que no tengas que ingresarla de nuevo cada vez que te traslades a una secci&oacute;n diferente de nuestro portal de Internet. Una cookie no nos permite conocer tu identidad personal a menos que expresamente elijas proporcion&aacute;rnosla. La mayor&iacute;a de las cookies expiran despu&eacute;s de un periodo determinado de tiempo, o bien las puedes borrar en el momento en que lo desees siguiendo las instrucciones de tu navegador de Internet. Asimismo, puedes hacer que tu navegador te avise cuando recibes una cookie de manera que puedas aceptarlas o rechazarlas siguiendo las instrucciones de tu navegador de Internet.</p>
      <h2 className="font-bold text-xl my-2">Definiciones</h2>
      <p className="my-2">Para efectos de este aviso de privacidad, los t&eacute;rminos mencionados tienen el significado que se les atribuye conforme a las definiciones siguientes:</p>
      <ul className="list-disc list-inside">
        <li>Datos personales de identificaci&oacute;n: nombre completo, direcci&oacute;n, tel&eacute;fonos, correo electr&oacute;nico, celular, estado civil, nombre del c&oacute;nyuge, concubinario (a) o pareja en convivencia, firma aut&oacute;grafa y electr&oacute;nica, fotograf&iacute;a, Registro Federal de Contribuyentes (RFC), Clave &Uacute;nica de Registro Poblacional (CURP), lugar y fecha de nacimiento, edad, nombres de familiares, dependientes econ&oacute;micos y beneficiarios, entre otros.</li>
        <li>Datos personales laborales: ocupaci&oacute;n, nombre de la empresa o dependencia, puesto, &aacute;rea o departamento, domicilio, tel&eacute;fono y correo electr&oacute;nico de trabajo, actividades extracurriculares, referencias laborales y referencias personales, entre otros.</li>
        <li>Datos personales acad&eacute;micos y migratorios: trayectoria educativa, t&iacute;tulo, n&uacute;mero de c&eacute;dula, certificados, entre otros.</li>
        <li>Datos patrimoniales y financieros: bienes muebles e inmuebles, historial crediticio, ingresos y egresos, cuentas bancarias, seguros, afore, fianzas, informaci&oacute;n fiscal, cualquier tipo de garant&iacute;a otorgada, y servicios contratados, entre otros.</li>
        <li>Datos personales sensibles de salud: estado de salud, historial cl&iacute;nico, alergias, enfermedades, discapacidades, intervenciones quir&uacute;rgicas, vacunas, uso de aparatos oftalmol&oacute;gico, ortop&eacute;dicos o auditivos, informaci&oacute;n relacionada con cuestiones de car&aacute;cter psicol&oacute;gico y/o psiqui&aacute;trico, entre otros.</li>
        <li>Caracter&iacute;sticas f&iacute;sicas: color de piel, iris y cabellos, se&ntilde;ales particulares; estatura, peso, complexi&oacute;n, tipo de sangre, ADN, huella digital, entre otros.</li>
        <li>Titular: la persona f&iacute;sica a quien corresponden los datos personales (denominado tambi&eacute;n en lo sucesivo &ldquo;tu&rdquo; o &ldquo;tus&rdquo;).</li>
        <li>Tratamiento: la obtenci&oacute;n, uso, divulgaci&oacute;n o almacenamiento de datos personales, por cualquier medio. El uso abarca cualquier acci&oacute;n de acceso, manejo, aprovechamiento, transferencia o disposici&oacute;n de datos personales.</li>
        <li>Responsable: Vitae Brokers, que es quien decide sobre el tratamiento de los datos personales (denominado tambi&eacute;n en lo sucesivo &ldquo;Vitae Brokers&rdquo;, &ldquo;nosotros&rdquo;, &ldquo;nuestro&rdquo; o &ldquo;nos&rdquo;).</li>
        <li>Transferencia: toda comunicaci&oacute;n de datos realizada a persona distinta de Vitae Brokers o encargado del tratamiento.</li>
        <li>Ley: Ley Federal de Protecci&oacute;n de Datos Personales en Posesi&oacute;n de los Particulares.</li>
      </ul>
      
      <h2 className="font-bold text-xl my-2">FECHA DE LA &Uacute;LTIMA ACTUALIZACI&Oacute;N:</h2>
      <p>Enero , 2020</p>
      </Seccion>
    </Pagina>
  )
}

export default AvisoPrivacidad