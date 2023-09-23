import React from 'react'
import styles from './styles.module.css'
import config from '../../config.json'

const Home = () => {
  const page = config.ordering.find(page => page.path === '/')
  return (
    <div id={page.id} className={styles.container}>
      Home
    </div>
  )
}

export default Home