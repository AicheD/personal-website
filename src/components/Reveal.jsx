import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

const Reveal = ({ children, width = 'fit-content' }) => {

    const ref = useRef(null)
    const [hasBeenInView, setHasBeenInView] = useState(false)

    const isInView = useInView(ref, { once: false })

    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible')
            setHasBeenInView(true)
        } else if (hasBeenInView) {
            mainControls.start('hidden')
        }
    }, [isInView, mainControls, hasBeenInView])

  return (
    <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>

        <motion.div
        variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 }, 
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.7, delay: 0.3 }}
        >
            {children}
        </motion.div>
        
    </div>
  )
}

export default Reveal