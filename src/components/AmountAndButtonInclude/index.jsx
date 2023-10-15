import { Container } from './styles'
import { RiSubtractFill } from 'react-icons/ri'
import { RiAddLine } from 'react-icons/ri'
import { useState } from "react"
import { Button } from '../Button'
import { TfiReceipt } from 'react-icons/tfi'
import { api } from "../../services/api"

export function AmountAndButtonInclude({ image, price, name }) {
  const [amount, setAmount] = useState(0)

  function handleAmountSum() {
    setAmount(prevState => Number(prevState) + 1)
  }
  function handleAmountSub() {
    if (amount == 0) {
      return
    } else {
      setAmount(prevState => Number(prevState) - 1)
    }
  }
  async function handleNewRequest() {
    if (amount === 0) {
      alert("Click on plus sign (+) to add quantity!")
      return
    }
    await api.post("/request", { name, price, image, amount }).then(() => { alert("Item included") })
  
  }
  return (
    <Container>
      <span className="amount"><a><RiSubtractFill onClick={handleAmountSub} /></a> {amount} <a><RiAddLine onClick={handleAmountSum} /></a></span>
      <Button onClick={handleNewRequest}>
        <TfiReceipt />
        include
      </Button>
    </Container>
  )
}