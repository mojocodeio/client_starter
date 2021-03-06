import React from 'react';

/* styles **/
import styles from './App.less';

/* components **/
import Auth from './Auth/Auth';

export const App = () => {
    return (
        <div className={styles.app}>
            <h1>Client Starter</h1>
            <Auth />
        </div>
    );
}

export default App;