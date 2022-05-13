import React from 'react';
import Nav from '../components/Nav';
import Franklin from '../assets/img/perdu.jpg'

const NotFoundlol = () => {
    return (
        <div className='notFoundLol'>
            <Nav />
            <h1>404 Franklin not found</h1>
            <div className='perdu'>
            <img src={Franklin} alt="désolé j'étais obligé d'y placer franklin avec des cubes marqué, gros taré"/>
            </div>
        </div>
    );
};

export default NotFoundlol;