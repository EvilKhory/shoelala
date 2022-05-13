import React from 'react';
import Nav from '../components/Nav'

const Magasins = () => {
    return (
        <>
            <Nav />
        <div className='magasins'>
            <h1>Magasins:</h1>
            <br></br>
            <ul>
<li><h3>Boutique chic:</h3>
    <p>17 Rue René Lanoy,62300 Lens</p>
    <p>téléphone:03/21/21/21/21</p>
    </li>
<li><h3>Boutique top:</h3>
<p>177 rue Nationale,59000 Lille</p>
<p>téléphone:03/20/20/20/20</p>
</li>
<li><h3>Chauss 2 Luxe:</h3>
<p>35 Boulevard Haussmann,75008 Paris</p>
<p>téléphone:01/44/44/44/44</p>
</li>  
<li><h3>Chauss to go:</h3>
<p>12 rue au Ours,62000 Arras</p>
<p>téléphone:03/21/21/21/20</p>
</li>  
<li><h3>Chausse sure:</h3>
<p>12 Avenue du Maréchal Foch 13004 Marseille</p>
<p>téléphone:04/91/91/91/91</p>
</li>

           </ul>
        </div>
        </>
    );
};

export default Magasins;