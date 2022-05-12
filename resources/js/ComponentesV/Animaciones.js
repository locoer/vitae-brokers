import { motion } from "framer-motion"

export const Fade = ({tiempo=1, delay=0, repite=false, children, ...props}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.1 }}
      whileInView={{ opacity: 1, scale: [0.1, 1.1, 1] }}
      transition={{duration:tiempo, delay:delay}}
      viewport={{ once: !repite }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export const EntraLado = ({lado="izquierdo", tiempo=1, delay=0, repite=false, children, ...props}) => {
  const xlado = lado === "izquierdo" ? "-100%" : "100%"
  
  return (
    <motion.div
      initial={{ opacity: 0, x: xlado }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{duration:tiempo, delay:delay}}
      viewport={{ once: !repite }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export const EntraVertical = ({por="arriba", tiempo=1, delay=0, repite=false, children, ...props}) => {
  const xlado = por === "arriba" ? "-100%" : "100%"
  
  return (
    <motion.div
      initial={{ opacity: 0, y: xlado }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{duration:tiempo, delay:delay}}
      viewport={{ once: !repite }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export const MuestraContenido = ({delay=0.2, tiempo=2, className, children, ...props}) => {
  return (
    <motion.div 
      initial={{height:0}}  
      animate={{height:"auto"}}
      transition={{duration:tiempo, delay:delay}}
      className={`overflow-y-hidden ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export const MueveLados = ({tipo=1, tiempo=1, delay=0.2, children, ...props}) => {

  const variantes = {
    izquierda: {x:"-2rem", y:0},
    derecha: {x:"2rem", y:0},
    arriba: {x:0, y:"-2rem"},
    abajo: {x:0, y:"2rem"}
  }

  return (
    <>
    { tipo === 1 && 
    <motion.div 
      initial={ "izquierda" }
      animate={ "derecha" }
      variants={variantes}
      transition={{duration:tiempo, delay:delay, repeat: Infinity, repeatType: "reverse"}}
      {...props}
    >
      {children}
    </motion.div>
    }
    { tipo === 2 && 
    <motion.div 
      initial={ "arriba" }
      animate={ "abajo" }
      variants={variantes}
      transition={{duration:tiempo, delay:delay, repeat: Infinity, repeatType: "reverse"}}
      {...props}
    >
      {children}
    </motion.div>
    }
    </>
  )
}

export default Fade