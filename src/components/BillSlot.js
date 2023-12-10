import React from 'react'

export const BillSlot = ( {insertBills, onHand, onHandAmount, cashAudio} ) => {
  return (
    <div className="bill-slot" onClick={() => insertBills(onHand, onHandAmount, cashAudio)}></div>
  )
}
