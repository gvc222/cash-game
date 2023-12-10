import React from 'react'

export const CoinSlot = ( {insertCash, onHand, onHandAmount, coinAudio}) => {
  return (
    <div className="coin-slot" onClick={() => insertCash(onHand, onHandAmount,  coinAudio)}></div>
  )
}
