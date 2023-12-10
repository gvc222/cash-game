import React, { useState, useEffect } from 'react'
import './App.css';
import NfcIcon from '@mui/icons-material/Nfc';
import { Wallet } from './components/Wallet';
import { CoinSlot } from './components/CoinSlot';
import { BillSlot } from './components/BillSlot';
import coinAudio from './coins.mp3'
import cashAudio from './bill.mp3'
const App = () => {

  const [ price, setPrice ] = useState(0);
  const [ input, setInput ] = useState(0);
  const [ currency, setCurrency ] = useState('USD');
  const [ sign, setSign ] = useState('$');
  const [ change, setChange ] = useState(Number(price-input).toFixed(2));
  const [ onHand, setOnHand ] = useState('Dollar')
  const [ onHandAmount, setOnHandAmount ] = useState(1);
  // const [ pocketMoney, setPocketMoney ] = useState(2500);
  
  useEffect(() => {
    if (currency === 'USD') {
      setSign('$');
    } else if (currency === 'Yen') {
      setSign('¥')
    } else if (currency === 'PHP') {
      setSign('₱')
    } 
  }, [currency])

  const usDollars = [
  {
    name: 'Penny',
    amount: 0.01,
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/US_One_Cent_Obv.png/1024px-US_One_Cent_Obv.png'
  },
  {
    name: 'Nickel',
    amount: 0.05,
    imageURL: 'https://th.bing.com/th/id/R.abcbc17ca827c9e9d3b90a16a95ee91f?rik=LHAA8jgLZTDQSw&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f7%2fNickel-PNG-Photos.png&ehk=UQ7slSOa26rcmf6tpiJuZeLyzqSFDC95luMwCqgR0Zg%3d&risl=&pid=ImgRaw&r=0'
  },
  {
    name: 'Dime',
    amount: 0.1,
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/2017-D_Roosevelt_dime_obverse_transparent.png/1024px-2017-D_Roosevelt_dime_obverse_transparent.png'
  },
  {
    name: 'Quarter',
    amount: 0.25,
    imageURL: 'https://clipartcraft.com/images/quarter-clipart-transparent-3.png'
  },
  {
    name: 'Dollar',
    amount: 1,
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/2/23/US_one_dollar_bill%2C_obverse%2C_series_2009.jpg'
  },
  {
    name: 'Five',
    amount: 5,
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/US_%245_Series_2006_obverse.jpg/1920px-US_%245_Series_2006_obverse.jpg'
  },
  {
    name: 'Ten',
    amount: 10,
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/US10dollarbill-Series_2004A.jpg/1920px-US10dollarbill-Series_2004A.jpg'
  },
  {
    name: 'Twenty',
    amount: 20,
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/US20-front.jpg/1920px-US20-front.jpg'
  },
  {
    name: 'One-hundred',
    amount: 100,
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Obverse_of_the_series_2009_%24100_Federal_Reserve_Note.jpg'
  },
  ]

  const products = [
    {
      name: 'Tobacco',
      price: '2.00',
      imageURL : 'https://1.bp.blogspot.com/-X5aAmK88s_Y/W3ECZpa8JfI/AAAAAAAAAKc/-F5VA5MaOlAO_s0yCXlqCrUuRTSISbNfQCLcBGAs/s1600/Cigratte%2BPng%2B%252815%2529.png'
    },
    {
      name: 'Alcohol',
      price: '50.00',
      imageURL : 'https://library.kissclipart.com/20180903/kye/kissclipart-whisky-clipart-bourbon-whiskey-liquor-250a9d0b799b61ec.png'
    },
    {
      name: 'Lottery ticket',
      price: '1.00',
      imageURL : 'https://cdn0.iconfinder.com/data/icons/casinos-and-gambling/500/SingleCartoonCasinoAndGamblingYulia_7-512.png'
    },
    {
      name: 'Soda',
      price: '2.00',
      imageURL : 'https://th.bing.com/th/id/R.561ef8971286ac63f48db08133dc3bbf?rik=6WMtCw1egtsW6A&pid=ImgRaw&r=0'
    },
    {
      name: 'Coffee',
      price: '1.75',
      imageURL : 'https://th.bing.com/th/id/R.c2e77e8c6b6118ea0deb6646ce3e42b5?rik=8qu4%2fDv3jSeIBw&riu=http%3a%2f%2fclipart-library.com%2fimg%2f1695767.png&ehk=sG1qxpAByvP%2bypHv6hmCDBvcWnAC%2f67FMWzL5QTQBz4%3d&risl=&pid=ImgRaw&r=0'
    },
    {
      name: 'Tea',
      price: '3.25',
      imageURL : 'https://th.bing.com/th/id/R.192afd5fa3c1b0de112189dafc6f510a?rik=LsIa18ZSmsZirg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-sweet-tea--985.png&ehk=ymkIqfxfjhrmCSacen6xLV12FhY4gJx3oq7x6NHwSz8%3d&risl=&pid=ImgRaw&r=0'
    },
    {
      name: 'Sandwich',
      price: '2.00',
      imageURL : 'https://creazilla-store.fra1.digitaloceanspaces.com/emojis/57385/sandwich-emoji-clipart-md.png'
    },
    {
      name: 'Bread',
      price: '1.50',
      imageURL : 'https://th.bing.com/th/id/R.470c625bb448c15b27c0f063359654c7?rik=69z4q29zF%2bqvGA&pid=ImgRaw&r=0'
    }
  ]
  
  
  const resetAll = () => {
    setPrice(0);
    setInput(0);
    setCurrency('USD');
    setSign('$');
    setChange(0);
    setOnHand('Dollar');
    setOnHandAmount(1);
  }
  const insertBills = (onHand, onHandAmount, cashAudio) => {
    if ( onHand === 'Dollar' || onHand === 'Five' || onHand === 'Ten' || onHand === 'Twenty' || onHand === 'One-hundred') {
      // cashAudio.currentTime = 0;
      let audio = new Audio(cashAudio);
      audio.pause();
      audio.currentTime = 0;
      audio.play();
      console.log(`On Hand: ${onHand}`)
      console.log(`Type of onHand: ${typeof(onHand)}, type of onHandAmount: ${typeof(onHandAmount)} added ${onHandAmount}`);
      let adjustedTotal = Number((Math.round(input * 100)+ Math.round(onHandAmount * 100)) / 100).toFixed(2);
      console.log(`Adjusted total is: ${adjustedTotal}`)
      setInput(adjustedTotal);
      setChange(Number(price-adjustedTotal).toFixed(2));
    }
      else {
        console.log('You tried entering coins in the bill slot?????')
        alert('Please put the coins in the coin slot')
      }
    }

  
  const insertCash = (onHand, onHandAmount, coinAudio) => {
    if (onHand === 'Penny' || onHand === 'Nickel' || onHand === 'Dime' || onHand === 'Quarter') {
      let audio = new Audio(coinAudio);
      audio.pause();
      audio.currentTime = 0;
      audio.play();
      console.log(`On Hand: ${onHand}`)
      console.log(`Type of onHand: ${typeof(onHand)}, type of onHandAmount: ${typeof(onHandAmount)} added ${onHandAmount}`);
      let adjustedTotal = Number((Math.round(input * 100)+ Math.round(onHandAmount * 100)) / 100).toFixed(2);
      console.log(`Adjusted total is: ${adjustedTotal}`)
      setInput(adjustedTotal);
      setChange(Number(price-adjustedTotal).toFixed(2));
    }
      else {
        console.log('You tried entering bills in the coin slot?????')
        alert('Please put the bills in the bill slot')
      }
  }
    
  const changePrice = (product) => {
    console.log(`The price should now be ${product.price} for the ${product.name}`)
    setPrice(Number(product.price));
    setInput(0);
    setChange(0);
  }

  const changeCash = (dollarName, dollarAmount) => {
    console.log(`You have a dollar type of ${dollarName} on hand now, worth ${dollarAmount}`);
    setOnHand(dollarName)
    setOnHandAmount(dollarAmount);
  }
  
  return (
    <div className="app">
      <div className="items">
        <div className="items-title">Products</div>
        {products.map((product, index) => (
          <div className="product" key={index}>
            <div className="product-title">{product.name}</div>
            <img src={product.imageURL} alt={product.name} width="100px" height="100px" onClick={() => changePrice(product)}/>
            <div className="product-price">Price: {sign}{product.price}</div>
          
          </div>
        ))}
      </div>
      <div className="machine">
        
        <div className="screen">
          <div className="amount-needed">
            Amount Needed: {sign}{Number(price).toFixed(2)}
          </div>
          <div className="amount-input">
            Amount Input: {sign}{Number(input).toFixed(2)}
          </div>
          <div className="change-due">
            Change Due: {sign}{change*-1}
          </div>
        </div>
        
        
        {/* <div className="currency-change">Change Currency</div> */}
        <div className="payment">
          <div className="card-pay">
            <div className="card-tap">
                <div className="text">TAP YOUR CARD HERE</div>
                <a href="https://venmo.com/u/boinkie">
                  <div className="card-tap-square">< NfcIcon color='primary' className="nfc-icon" sx= {{
                    fontSize: "70px",
                    '@media (max-width: 991px)': {
                      fontSize: "30px"
                    }
                  }}/></div>
                </a>
            </div>
            <div className="card-insert">
              <div className="text">INSERT YOUR CARD HERE</div>
              <a href="https://venmo.com/u/boinkie">
                <div className="card-slot"></div>
              </a>
            </div>
          </div>
          <div className="cash-insert">
            <div className="bills">
              <div className="text">INSERT BILLS HERE</div>
              <BillSlot cashAudio={cashAudio} insertBills={insertBills} onHand={onHand} onHandAmount={onHandAmount}/>
              
            </div>
            <div className="coin">
              <div className="text">INSERT COINS HERE</div>
              <div className="coin-slot-shape">
                <div className="circle"></div>
                < CoinSlot insertCash={insertCash} onHand={onHand} onHandAmount={onHandAmount} coinAudio={coinAudio}/>
              </div>
            </div>
          </div>
          
        </div>
        
        <div className="change-receipt">
          <div className="receipt">
            <div className="text">PLEASE TAKE YOUR RECEIPT</div>
            <div className="receipt-slot"></div>
          </div>

          <div className="change">
            <div className="text">NO CHANGE</div>
            <div className="change-box">
              
            </div>
            <div className="coin-change-bucket"></div>
          </div>

          <div className="reset text">
          RESET
            <div className="reset-button" onClick={resetAll}></div>
          </div>
        </div>
      </div>
      
      <div className="wallet">
        <div className="wallet-title">Wallet</div>
        <div className="notification">On hand: {onHand}</div>
        {usDollars.map((usDollar, index) => (
          <Wallet key={index} dollarName={usDollar.name} dollarAmount={usDollar.amount} dollarImage={usDollar.imageURL} changeCash={changeCash}/>
        ))}
        
      </div>
    </div>
  )
}

export default App

