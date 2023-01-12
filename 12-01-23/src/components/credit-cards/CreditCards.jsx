import { API_ENDPOINTS } from "../../constants/endpoints";
import { useFetch } from "../../hooks/use-fetch";
import "./credit-cards.css";

export function CreditCards() {
  const { data, error, loading, refetch } = useFetch(
    API_ENDPOINTS.CREDIT_CARDS
  );

  if (loading) return `Loading...`;

  if (error) return `Error!`;

  if (!data) return "";

  const { id, credit_card_type, credit_card_number, credit_card_expiry_date } =
    data;

  return (
    <section className="hero">
      <h1 className="header-title">Credit Card Generator</h1>

      <div className="creditcard-info">
        <h4>Credit Card Code: #{id}</h4>
        <h4 className="bank">Bank Group: {credit_card_type}</h4>
        <h4>Card Number: {credit_card_number}</h4>
        <h4>Expiration Date: {credit_card_expiry_date}</h4>

        <div className="creditcard-design">
          <div class="credit-card-wrap">
            <div class="mk-icon-world-map"></div>
            <div class="credit-card-inner">
              <header class="header">
                <div class="credit-logo">
                  <div class="shape">
                    <span class="txt"></span>
                  </div>
                  <span class="text">{credit_card_type}</span>
                </div>
              </header>
              <div class="mk-icon-sim"></div>
              <div class="credit-font credit-card-number" data-text="4716">
                {credit_card_number}
              </div>
              <footer class="footer">
                <div class="clearfix">
                  <div class="pull-left">
                    <div class="credit-card-date">
                      <span class="title">Expires End</span>
                      <span class="credit-font">{credit_card_expiry_date}</span>
                    </div>
                    <div class="credit-font credit-author">OWNER</div>
                  </div>
                  <div class="pull-right">
                    <div class="mk-icon-visa"></div>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>

      <div className="btn">
        <button onClick={refetch}> Credit Card 💳 </button>
      </div>
    </section>
  );
}
