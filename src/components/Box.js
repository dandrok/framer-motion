import React from 'react'
import { motion } from 'framer-motion'

import styles from './Box.module.css'

const Box = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  }

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  }

  return (
    <section>
      <motion.div variants={container} initial='hidden' animate='show'>
        <motion.div
          variants={item}
          className={styles.box}
          // animate={{ rotate: 360 }}
          // transition={{ duration: 2 }}
        />
        <motion.div
          className={styles.box}
          variants={item}
          // animate={{ rotate: 360 }}
          // transition={{ duration: 2 }}
        />
      </motion.div>
    </section>
  )
}

export default Box
