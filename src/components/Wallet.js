import React from 'react'

export const Wallet = ( {dollarName, dollarImage, dollarAmount, changeCash} ) => {

    
  return (
    <div className="wallet-dollar">
      <div className="dollar-name">{dollarName}</div>
      {/* <img onClick={() => insertCash(dollarName, dollarAmount)} src={dollarImage} alt={dollarName} width="75px"/> */}
      <img onClick={() => changeCash(dollarName, dollarAmount)} src={dollarImage} alt={dollarName} width="75px"/>
      <div className="dollar-amount">{dollarAmount}</div>
    </div>
  )
}
