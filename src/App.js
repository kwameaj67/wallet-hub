import './app.css';
import './responsive.css';
import Star from './components/Star/Star'
import card from './assets/images/card.png'
import wallet_bg from './assets/images/wallet_bg.png'
function App() {

  return (
    <div className="app">
      <div className="hero_section">
        <div className="nav_bar">
          <ul className="desktop">
            <li><a href="/#">Navigation Link One</a></li>
            <div className="border"></div>
            <li><a href="/#">Navigation Link Two</a></li>
            <div className="border"></div>
            <li><a href="/#">Navigation Link Three</a></li>
          </ul>
          <ul className="mobile">
            <li><a href="/#"> Link One</a></li>
            <div className="border"></div>
            <li><a href="/#"> Link Two</a></li>
            <div className="border"></div>
            <li><a href="/#"> Link Three</a></li>
          </ul>
        </div>
        <img src={wallet_bg} alt="wallet"/>
        <h1>Do the right thing .</h1>
      </div>
      <div className="approval_section">
        <div className="area">
          <h1>Credit Opportunities With Good Approval Odds †</h1>
          <div className="master_card">
            <div className="heading">
              <div className="special">
                <p>Barclaycard CashForward<span>TM</span></p>
                <p> World MasterCard <span>TM</span></p>
              </div>
              <div className="rating_area">
                <Star />
                <p>3,252 Reviews</p>
              </div>
            </div>
            <div className="card_row">
              <div className="card_details">
                <div className="image_view">
                  <img src={card} alt="card" className="" />
                  <div className="approval">
                    <p>Approval Odds †</p>
                    <button>Very Good</button>
                  </div>
                </div>
                <button>Apply Now</button>
              </div>
              <div className="card_text">
                <ul>
                  <li>Get a $100 cash rewards bonus after you spend $500 in purchases in the first 90 days after account oppening.</li>
                  <li>Earn unlimited 1.5% cash rewards on every purcahse.</li>
                  <li>Earn unlimited 1.5% cash rewards on every...<span>show more</span></li>
                </ul>
                <button>Apply Now</button>
              </div>
            </div>
            <div className="footer">
              <div className="border"></div>
              <p>See Details Rates & Fees</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
