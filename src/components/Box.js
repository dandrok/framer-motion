import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import styles from './Box.module.css'

const Box = ({ isVisible }) => {
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

  const animationOne = {
    start: {
      animate: {
        rotate: 360,
      },
      transition: {
        duration: 2,
      },
    },
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
        <motion.div
          className={styles.box}
          variants={item}
          // animate={{ rotate: 360 }}
          // transition={{ duration: 2 }}
        />
        <motion.div
          className={styles.box}
          variants={item}
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

      <div style={{ display: 'flex' }}>
        <motion.div
          className={styles.box}
          animate={{ rotate: 180 }}
          transition={{ from: 90, duration: 3 }}
        />
        <motion.div
          className={styles.box}
          animate={{ scale: [0, 1, 0.5, 1] }}
          transition={{ times: [0, 0.1, 0.9, 1] }}
        />
        <motion.div
          className={styles.box}
          animate={{ rotate: 180 }}
          transition={{ type: 'spring' }}
        />
        <motion.div
          className={styles.box}
          animate={{ rotate: 180 }}
          transition={{ type: 'spring', stiffness: 50 }}
        />
        <motion.div
          className={styles.box}
          animate={{ rotate: 180 }}
          transition={{ type: 'spring', velocity: 2 }}
        />
        <motion.div
          className={styles.box}
          animate={{ rotate: 180 }}
          transition={{ type: 'spring', restSpeed: 0.5 }}
        />
      </div>
      <AnimatePresence>
        {isVisible || (
          <motion.div
            className={styles.box}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

export default Box
