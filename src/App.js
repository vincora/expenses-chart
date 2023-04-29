import logo from "./logo.svg";
import "./App.scss";
import data from './data.json';

const max = data.reduce((acc,cur) => {
  return Math.max(acc, cur.amount)
 }, 0) ;

function App() {
  return (
    <div className="layout">
      <section className="layout__block layout__block_primary">
        <div className="my-account">
          <div className="my-account__info">
            <h2 className="my-account__title">My balance</h2>
            <div className="my-account__balance">$921.48</div>
          </div>
          <div className="my-account__logo"><img src={logo} alt="logo" /></div>
        </div>
      </section>
      <section className="layout__block">
        <div className="chart">
          <h1 className="chart__title">Spending - Last 7 days</h1>
          <div className="chart__body" >
            {data.map((item)=> {
              const height = (item.amount/max)*100;
              return(
              <div className="chart__item" >
                <div className="chart__bar" style={{"height": height + "%"}} ></div>
                <div className="chart__day">{item.day}</div>
              </div>)
            })}
          </div>
        </div>
        <div className="divider"></div>
        <div className="statistics">
          <h2>Total this month</h2>
          <div className="statistics__data">
            <div className="statistics__absolute">$478.33</div>
            <div className="statistics__relative">
              <div className="statistics__relative-value">+2.4%</div>
              <p>from last month</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
