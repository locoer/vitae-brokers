import { motion } from "framer-motion"

const Fondos = ({color=1, ...props }) => {
  return (
    <motion.div 
      initial={{height:0}}  
      animate={{height:"100%"}}
      transition={{duration:1.5}}
      className={`overflow-y-hidden absolute inset-0 w-full ${color === 1 ? 'bg-azul-420' : 'bg-aqua'} -z-10`} {...props}
    >
        <div className="absolute inset-x-0 top-0 z-[1]">
          <svg className="h-64" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 575.5 501.5">
            <path className="fill-azul-700" d="M0,501.5c0,0,5.3-132.9,230.4-193.2c225.1-60.3,264.1-88.6,303-131.1 C572.3,134.7,568.8,0,568.8,0H0V501.5z"/>
          </svg>
        </div>
        <div className="absolute inset-x-0 bottom-0">
          <svg viewBox="0 79 1920 550" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect className="fill-azul-50" width="1920" height="550" y="79"/>
            <path className={`${color === 1 ? 'fill-azul-420' : 'fill-aqua'}`} d="M0.4,429.5c0,0,157,129.4,361,148.7s749-122.6,749-122.6s350.4-123.3,488.8-107.5 c181.1,20.7,297.8,81.4,320.7,126.9V79H0L0.4,429.5z"/>
            <path className="fill-[#CCDDE6]" style={{opacity:0.57}} d="M0.3,429.7c0,0,588,29.3,972.2-65.5C1321.9,278,1494,84.5,1627.1,83c172.9-2.1,292.9,27.5,292.9,27.5v369 c0,0-239.9-156.4-679.3-0.7C801.4,634.6,579.1,626.8,432.6,624C286.2,621.3,111.4,584,0.3,429.7z"/>
          </svg>
        </div>
    </motion.div>
  )
}

export default Fondos