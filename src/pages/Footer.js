

function Footer() {
  return (
    <div className="footer">
        <h2>SHOE LA LA </h2>
        <div class="trait_dessus"><hr></hr></div> 
        <button>Mentions legales</button>
        <button>Contact</button>
        <div className="footint" >
           <p> suivez nous:</p>
           <ul className="iop" >
           <li><i class="fa-brands fa-twitter fa-2x"></i></li>
           <li><i class="fa-brands fa-instagram fa-2x"></i></li>
           <li><i class="fa-brands fa-facebook fa-2x"></i></li>
           </ul>
        </div>
    </div>
  );
}

export default Footer;