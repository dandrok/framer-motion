import { motion } from 'framer-motion'

import styles from './Box.module.css'

const Box = () => {
  return (
    <div>
      <div></div>
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        BUTTON
      </motion.button>

      <motion.div
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
      ></motion.div>

      <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ['20%', '20%', '50%', '50%', '20%'],
        }}
      ></motion.div>
    </div>
  )
}

export default Box
