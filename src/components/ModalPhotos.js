import React from 'react'
import { motion } from 'framer-motion'

function ModalPhotos({ selectedImg, setSelectedImg }) {

    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')) {
            setSelectedImg(null)
        }
    }

    return (
        <motion.div className='backdrop' onClick={handleClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <motion.img src={selectedImg} alt="Enlarged Picture"
                initial={{ y: '-100vh' }}
                animate={{ y: 0 }}
                transition={{ duration: 1.5 }}
            />
        </motion.div>
    )
}

export default ModalPhotos
