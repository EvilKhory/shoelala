import React from 'react';
import Nav from '../components/Nav'

const Magasins = () => {
    return (
        <>
            <Nav />
        <div className='magasins'>
            <h1>BOUTIQUES</h1>
            <br></br>
            <ul>
<li><h3>Boutique chic</h3>
    <p>17 Rue René Lanoy,62300 Lens</p>
    </li>
<li><h3>Boutique top</h3>
<p>177 rue Nationale,59000 Lille</p>
</li>
<li><h3>Chauss 2 Luxe</h3>
<p>35 Boulevard Haussmann,75008 Paris</p>
</li>  
<li><h3>Chauss to go</h3>
<p>12 rue au Ours,62000 Arras</p>
</li>  
<li><h3>Chausse sure</h3>
<p>12 Avenue du Maréchal Foch 13004 Marseille</p>
</li>

           </ul>
        </div>
        </>
    );
};

export default Magasins;