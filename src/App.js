import logo from "./logo.svg";
import "./App.scss";

function App() {
  return (
    <div className="layout">
      <section className="layout__header">
        <div className="my-account">
          <div className="my-account__info">
            <h2 className="my-account__title">My balance</h2>
            <div className="my-account__balance">$921.48</div>
          </div>
          <div className="my-account__logo"><img src={logo} alt="logo" /></div>
        </div>
      </section>
      <section className="layout__body">
        <div className="chart">
          <h1 className="chart__title">Spending - Last 7 days</h1>
          <div className="chart__body">

          </div>
        </div>
        <div className="statistics">
          <div className="statistics__absolute">
            <h2 className="statistics__absolute-title">Total this month</h2>
            <div className="statistics__absolute-value">$478.33</div>
          </div>
          <div className="statistics__relative">
            <div className="statistics__relative-value">+2.4%</div>
            <h2 className="statistics__relative-title">from last month</h2>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
