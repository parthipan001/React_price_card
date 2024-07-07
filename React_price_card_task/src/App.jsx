
import './App.css';
import PropTypes from 'prop-types';

const plans = [
  {
    title: "FREE",
    price: "$0/month",
    features: [
      "Single User",
      "50GB Storage",
      "Unlimited Public Projects",
      "Community Access",
      { text: "Unlimited Private Projects", available: false },
      { text: "Dedicated Phone Support", available: false },
      { text: "Free Subdomain", available: false },
      { text: "Monthly Status Reports", available: false }
    ]
  },
  {
    title: "PLUS",
    price: "$9/month",
    features: [
      "5 Users",
      "50GB Storage",
      "Unlimited Public Projects",
      "Community Access",
      "Unlimited Private Projects",
      "Dedicated Phone Support",
      "Free Subdomain",
      { text: "Monthly Status Reports", available: false }
    ]
  },
  {
    title: "PRO",
    price: "$49/month",
    features: [
      "Unlimited Users",
      "50GB Storage",
      "Unlimited Public Projects",
      "Community Access",
      "Unlimited Private Projects",
      "Dedicated Phone Support",
      "Free Subdomain",
      "Monthly Status Reports"
    ]
  }
];

const Card = ({ title, price, features }) => (
  <div className="card">
    <h2>{title}</h2>
    <h3>{price}</h3>
    <ul>
      {features.map((feature, index) =>
        typeof feature === 'string' ? (
          <li key={index} className="available">{feature}</li>
        ) : (
          <li key={index} className={feature.available ? "available" : "unavailable"}>
            {feature.text}
          </li>
        )
      )}
    </ul>
    <button>BUTTON</button>
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        available: PropTypes.bool.isRequired
      })
    ])
  ).isRequired
}

const App = () => (
  <div className="App">
    <div className="card-container">
      {plans.map((plan, index) => (
        <Card key={index} {...plan} />
      ))}
    </div>
  </div>
);

export default App;