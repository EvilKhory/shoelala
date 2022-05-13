import React from 'react';
import Nav from "../components/Nav";

const Contact = () => {
    return (
        <>
        <Nav />
        <div className='contact'>
            <title>Contactez-| ShoeLaLa</title>
            <header>
                <h1>Contact</h1>
            </header>
            <hr></hr>
            <section>
                <ul>
                    <li>
                        <h2>Service client</h2>
                        <adress>
                            <a href="mailto: service.client@lalashoes.com">Envoyer un mail</a>
                            <a>0 800 800 800</a>
                        </adress>
                    </li>
                    <li>
                        <h2>Assistance LaLaShoes</h2>
                        <adress>
                            <a href="mailto: assistance@lalashoes.com">Envoyer un e-mail</a>
                            <a>0 700 700 700</a>
                        </adress>
                    </li>
                    <li>
                        <h2>Service client</h2>
                        <a href="mailto: service.client@lalashoes.com">Envoyer un e-mail</a>
                    </li>
                    <li>
                        <h2>Service client</h2>
                        <a href="mailto: service.client@lalashoes.com">Envoyer un e-mail</a>
                    </li>
                </ul>
            </section>
        </div>
        </>
    );
};

export default Contact;