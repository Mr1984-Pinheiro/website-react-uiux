import React from 'react'
import styles from "./style"

/*https://www.youtube.com/watch?v=_oO4Qi5aVZs*/ 

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
            Navbar
        </div>
      </div>
    </div>
  )
}

export default App