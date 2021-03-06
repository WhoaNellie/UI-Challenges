import React, { useState } from 'react';
import Modal from './Modal';

function App(){
    const [modalShow, setModalShow] = useState(false);
    const [sOrR, setSOrR] = useState("signUp");

    function handleSignUp(){
        setSOrR("signUp");
        setModalShow(true);
    }

    function handleReturn(){
        setSOrR("return");
        setModalShow(true);
    }

 return(
     <div className="wrapper">
         <Modal
            isShowing={modalShow}
            setIsShowing={setModalShow}
            sOrR={sOrR}
         />
         <header>
             <h1>Mushnik</h1>
             <div className="audrey2">
             <img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Little_Shop_of_Horrors_at_Grafton_High_School_07.jpg"/>
             </div>
             <h2>Home of the World's most fabulous plant, Audrey II!</h2>
         </header>
         <main>
            <p>Found during a total eclipse of the sun on sale for $1.95, Audrey II is now the most famous plan in the world. Until now, our little shop's propritary growing method has been kept a secret, but now you too may grow your own Audrey 3, 4, 5&#x2026; as many as you please!</p>

            <h3>Sign up to recieve a free clipping of the World's Largest Flytrap!</h3>

            <div className="buttons">
            <button className="signUp" onClick={() => handleSignUp()}>Sign Up</button>
            <button className="return" onClick={() => handleReturn()}>Return Clipping</button>
            </div>

         </main>
         <div id="modal-root"></div>
     </div>
 )
}

export default App;