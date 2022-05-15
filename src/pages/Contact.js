import React from 'react';
import Nav from "../components/Nav";

const Contact = () => {
    return (
        <>
        <Nav />
        <div className='contact'>
            <div className="bg-image"></div>
            <title>Contactez-| ShoeLaLa</title>
            <header>
                <h1>Contact</h1>
            </header>
            <hr></hr>
            <section>
                <p>
                    Pour toute question concernant nos articles veuillez contacter le service concerné.
                </p>
                <br></br>
                <p className='p_si'>
                    Si vous avez une demande concernant un achat déjà effectué :
                </p>
                <ul>
                    <li>
                        <h2>Service client</h2>
                        <adress>
                            <a href="mailto: service.client@shoelala.com">service.client@shoelala.com</a>
                            <p>ou</p>
                            <a href="tel: 0800800800">0 800 800 800</a>
                        </adress>
                    </li>
                    <p className='p_si'>
                    Si vous avez une demande concernant un article :
                </p>
                    <li>
                        <h2>Assistance Shoelala</h2>
                        <adress>
                            <a href="mailto: assistance@shoelala.com">assistance@shoelala.com</a>
                            <p>ou</p>
                            <a href="tel: 0700700700">0 700 700 700</a>
                        </adress>
                    </li>
                </ul>
            </section>
        </div>
        </>
    );
};

export default Contact;