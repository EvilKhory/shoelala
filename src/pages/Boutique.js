import Nav from "../components/Nav";
import Footer from "../pages/Footer";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Cards';
import Tableau from "../components/Tableau";




const Boutique = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("public/tableau/Tableau.json")
            .then((res) => setData(res.data));
    }, []);

    return (
        <>
            <Nav />
            <div className='boutique'>
                <h1>Nos chaussures</h1>
                <ul>
                    {Tableau.map((chaussure, index) => (
                        <Card key={index} chaussure={chaussure} />
                    ))}
                </ul>
            </div>
            <Footer />
        </>
    )
}

export default Boutique;
