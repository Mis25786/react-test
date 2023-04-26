import React, { useContext } from 'react';
import context from '../../context/authContext';
import css from './UserMenu.module.css';

const styles = {};

export default function UserMenu() {
  //   const authContext = useContext(context);
  const { user, login, logOut } = useContext(context);

  return (
    <div style={styles.container}>
      <button type="button" onClick={login}>
        Ввійти
      </button>

      <p style={styles.tag}>{user}</p>

      <button type="button" onClick={logOut}>
        Вийти
      </button>

      {/* //======================== */}
      {/* <button type="button" onClick={login}>
        Ввійти
       </button>

      <p style={styles.tag}>{user}</p>

       {user && (
        <button type="button" onClick={logOut}>
          Вийти
         </button> */}
      {/* //===================================== */}
      {/* //   {user ? (
    //     <>
    //       <p style={styles.tag}>{user}</p>

    //       <button type="button" onClick={logOut}>
    //         Вийти
    //       </button>
    //     </>
    //   ) : (
    //     <button type="button" onClick={login}>
    //       Ввійти
    //     </button>
    //   )} */}
    </div>
  );
}
