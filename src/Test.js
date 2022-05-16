import React, { Component } from 'react';
import styles from './Test.module.css';

class Test extends Component {
    render() {
        return (
            <>
              <div className={styles.main}>
                  <div className={styles.chap}>
                      <button >buttton 1</button>
                      <button >buttton 1</button>
                      <button >buttton 1</button>
                      <button >buttton 1</button>
                  </div>
                 <div className={styles.rast}>
                     <p>container</p>
                 </div>

                
                </div>
            </>
          
        );
    }
}

export default Test;