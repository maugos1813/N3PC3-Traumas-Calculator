import { useEffect,useState } from 'react'
import './App.css'
import { Reset } from './components/buttonReset/buttonReset'
import { Header } from './components/header/header'
import { Bill } from './components/bill/bill'
import { Porcentag } from './components/porcentag/porcentag'
import { TextAmount } from './components/textAmount/textAmount'
import { TotalAmount } from './components/totalAmount/totalAmount'

const initialBill = 0;
const initialTipPercentage = 0;
const initialNumberOfPeople = 1;

function App() {
  const [bill, setBill] = useState(initialBill);
  const [state, setState] = useState({
    tipPercentage: initialTipPercentage,
    numberOfPeople: initialNumberOfPeople,
    tipAmount: 0,
    totalAmount: 0,
  });

  const [reset, setReset] = useState(false);

  useEffect(() => {
    const { tipPercentage, numberOfPeople } = state;
    if (numberOfPeople > 0) {
      const calculatedTipAmount = (bill * (tipPercentage / 100)) / numberOfPeople;
      const calculatedTotalAmount = (bill / numberOfPeople) + calculatedTipAmount;
      setState((prevState) => ({
        ...prevState,
        tipAmount: calculatedTipAmount,
        totalAmount: calculatedTotalAmount,
      }));
    }
  }, [bill, state.tipPercentage, state.numberOfPeople]);

  const handleBillChange = (value) => {
    setBill(value);
    setReset(true);
  };

  const setTipPercentage = (tipPercentage) => {
    setState((prevState) => ({ ...prevState, tipPercentage }));
    setReset(true);
  };

  const setNumberOfPeople = (numberOfPeople) => {
    setState((prevState) => ({ ...prevState, numberOfPeople }));
    setReset(true);
  };

  const resetState = () => {
    setBill(initialBill);
    setState({
      tipPercentage: initialTipPercentage,
      numberOfPeople: initialNumberOfPeople,
      tipAmount: 0,
      totalAmount: 0,
    });
    setReset(false);
  };

  return (
    <>
      <Header />
      <div className="general-wrapper">
        <div className="data-wrapper">
          <Bill bill={bill} setBill={handleBillChange} />
          <Porcentag
            tipPercentage={state.tipPercentage}
            numberOfPeople={state.numberOfPeople}
            setTipPercentage={setTipPercentage}
            setNumberOfPeople={setNumberOfPeople}
            reset={reset}
          />
        </div>

        <div className="result-wrapper">
          <div className="result-txt">
            <TextAmount tipAmount={state.tipAmount} />
            <TotalAmount totalAmount={state.totalAmount} />
          </div>
          <Reset onReset={resetState} reset={reset} />
        </div>
      </div>
    </>
  );
}

export default App;