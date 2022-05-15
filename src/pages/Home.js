import React from "react";
import Nav from "../components/Nav";
import home1 from "../assets/video/video.mp4";
import home2 from "../assets/img/home2.png";
import home3 from "../assets/img/home3.png";
import home4 from "../assets/img/home4.png";
import bvlgary from "../assets/img/Bvlgari.png";
import cartier from "../assets/img/Cartier.png";
import chanel from "../assets/img/Chanel.png";
import louisvuitton from "../assets/img/Louis_Vuitton.png";
import logobase from "../assets/img/shoelala.png";

const Home = () => {
  return (
    <>
      <Nav />
      <div className="home">
        <video src={home1} disablePictureInPicture preload="auto" loop autoPlay muted/>
        <section className="presentation">
          <article className="depuis">
            <h1>Depuis 1924</h1>
            <hr></hr>
            <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
            <img src={logobase} alt="logo shoelala"/>
          </article>
            
          <div className="btn_collection">
            <h1>COLLECTION POUR HOMMES</h1>
            <button className="btnHome"> Découvrir </button>
            <img src={home2} alt="section homme"/>
          </div>

          <article className="partenaires">
            <h1>Nos partenaires</h1>
            <ul>
              <li>
                  <img src={bvlgary} alt="bvlgary"/>
              </li>
              <li>
                  <img src={cartier} alt="cartier"/>
              </li>
              <li>
                  <img src={chanel} alt="chanel"/>
              </li>
              <li>
                  <img src={louisvuitton} alt="louis vuitton"/>
              </li>
            </ul>
          </article>

          <div className="btn_collection">
            <h1>COLLECTION POUR FEMMES</h1>
            <button className="btnHome"> Découvrir </button>
            <img src={home3} alt="section femme"/>
          </div>

          <article className="avis">
            <div>
              <h1>Les avis de nos clients</h1>
              <hr></hr>
            </div>
            <ul>
              <li>
                <p><strong>Clément Berni</strong></p>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</p>
                <p><span>08/05/2022 | 12:32</span></p>
              </li>
              <li>
                <p><strong>Alexandre Leroi</strong></p>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                <p><span>03/04/2022 | 17:42</span></p>
              </li>
              <li>
                <p><strong>Zoe Decroix</strong></p>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</p>
                <p><span>13/05/2022 | 07:58</span></p>
              </li>
            </ul>
          </article>

          <div className="btn_collection">
            <h1>COLLECTION POUR ENFANTS</h1>
            <button className="btnHome"> Découvrir </button>
            <img src={home4} alt="section enfant"/>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
