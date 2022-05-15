import React from "react";
import Nav from "../components/Nav";

const Magasins = () => {
  return (
    <>
      <Nav />
      <div className="magasins">
        <h1>Nos magasins</h1>
        <hr></hr>
        <p>Notre enseigne possède désormais 3 magasins pour vous accueillir et vous proposer le meilleur de la cordonnerie.</p>
        <ul>
          <li className="lille">
            <p><strong>ShoeLaLa - Lille</strong></p>
            <a href="https://goo.gl/maps/bWtQdw2Ve8ZcpuHdA">41 Rue de la Barre, 59000 Lille</a>
            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162455.9984751138!2d2.509248235881996!3d50.48997851978536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2d5676930841d%3A0x2adfd9480216ed09!2sTrop%20Trop%20Bien!5e0!3m2!1sfr!2sfr!4v1652620277751!5m2!1sfr!2sfr" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </li>
          <hr></hr>
          <li>
            <p><strong>ShoeLaLa - Sully-sur-Loire</strong></p>
            <a href="https://goo.gl/maps/PwqVttWVwMAMAv7n7">Rte du Grand Pont, 45600 Sully-sur-Loire</a>
            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10727.955215089567!2d2.2919907213626165!3d47.76227152324417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e515bd2d094f9b%3A0x9c89a131849e43ae!2sVautre%2C%2045600%20Sully-sur-Loire!5e0!3m2!1sfr!2sfr!4v1652622715460!5m2!1sfr!2sfr" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>              </li>
          <hr></hr>
          <li>
            <p><strong>ShoeLaLa - Tours</strong></p>
            <a href="https://goo.gl/maps/rfMxQKxkwxefYgWH9">17 Rue du Rempart, 37000 Tours</a>
            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d345742.76547348!2d0.13551856562498887!3d47.39018210000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47fcd44ad0a077f5%3A0xf7c8445db2c930e3!2sSite%20Internet!5e0!3m2!1sfr!2sfr!4v1652622934399!5m2!1sfr!2sfr" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>              </li>
        </ul>
      </div>
    </>
  );
};

export default Magasins;