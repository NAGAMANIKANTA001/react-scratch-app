import React from 'react';
import ReactDOM from 'react-dom';
import styles from "./style/main.module.scss";
class Welcome extends React.Component {
  render() {
    return <h1 className={styles.header}>Hello World from React boilerplate</h1>;
  }
}
ReactDOM.render(<Welcome />, document.getElementById('root'));
