import { useState, useEffect } from 'react'
import { ContainerOne, ContainerTwo, ButtonText } from './styles'
import { SlArrowLeft } from 'react-icons/sl'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'
import { HiOutlineCreditCard } from 'react-icons/hi'
import Pix from '../../assets/layer1.svg'
import QrCode from '../../assets/qrcode 1.svg'
import Pag from '../../assets/Vector.svg'
import { FiClock, FiAlertTriangle } from 'react-icons/fi'
import { BsCheckCircle } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { api } from "../../services/api"
import { useStatePage } from '../../hooks/statePage'

export function MyRequest() {
  const [background, setBackground] = useState(true)
  const [backgroundTwo, setBackgroundTwo] = useState(true)
  const [button, setButton] = useState(true)
  const [request, setRequest] = useState([])
  const navigate = useNavigate()
  const { statePage } = useStatePage()

  useEffect(() => {
    async function fetchRequests() {
      const response = await api.get("/request")
      setRequest(response.data.requests)
    }
    
    fetchRequests()

  }, [request])

  async function handleDelete(id) {
    if (confirm("Are your sure you want to delete this item?")) {
      await api.delete(`/requestdelete/${id}`)
    }
  }

  let sum = 0
  for (var i = 0; i < request.length; i++) {
    sum = sum + (request[i]['price'] * request[i]['amount'])
  }

  async function handlePay() {
    if (sum == 0) {
      alert("Please choose at least one item to finish payment")
      navigate("/")
      return
    }
    let details = []
    for (var i = 0; i < request.length; i++) {
      details.push(request[i]['amount'] + "x " + request[i]['name'])
    }

    let status = "🔴Pending"

    await api.post("/allrequests", { status, details }).then(() => { alert("Payment and order processed successfully") }).catch(error => { if (error.response) { alert(error.response.data.message) } else { alert("Unable to finish your payment") } })
    await api.delete("/request")
    navigate("/")
  }

  return (
    <ContainerOne>
      <ContainerTwo className={statePage ? "containerLight" : "containerDark"}>
        <Header />
        <main className={statePage ? "light" : "dark"}>
          
          <div className="columnOne">
            <ButtonText to="/" ><SlArrowLeft className={statePage ? "svgLight" : "svgDark"} /><p className={statePage ? "light" : "dark"}>Back to Home</p></ButtonText>
            <h1 className={statePage ? "h1Light" : "h1Dark"}>My order</h1>
            <div className="requests">
              {
                request.map(request => (
                  
                  <div className="request" key={String(request.id)}>
                    <img src={`${api.defaults.baseURL}/files/${request.image}`} alt="dish image" />
                    <div className="Text">
                      <div className="text">
                        <span className={statePage ? "nameLight" : "nameDark"}>{request.amount}x {request.name}</span><span className={statePage ? "priceLight" : "priceDark"}>R$ {String(Number(request.price * request.amount).toFixed(2)).replace(".", ",")}</span>
                      </div>
                      <a onClick={() => handleDelete(request.id)} className={statePage ? "deleteLight" : "deleteDark"}>Delete</a>
                    </div>
                  </div>
                ))
              }
            </div>
            <h2 className={statePage ? "resultLight" : "resultDark"}>R$ {String(Number(sum).toFixed(2)).replace(".", ",")} </h2>
          </div>
          
          <div className="columnTwo">
            <h1 className={statePage ? "h1Light" : "h1Dark"}>Payment</h1>
            <div className="headerTable">
              <div className={background ? "pix" : "pixTwo"} onClick={() => setBackground(!background)}>
                <div className={statePage ? "pixLight" : "pixDark"}>
                  <img src={Pix} alt="pix" /><p className={statePage ? "light" : "dark"}>PIX</p>
                </div>
              </div>
              
              <div className={backgroundTwo ? "credit" : "creditTwo"} onClick={() => setBackgroundTwo(!backgroundTwo)}>
                <div className={statePage ? "creditLight" : "creditDark"}>
                  <HiOutlineCreditCard /><p className={statePage ? "light" : "dark"}>Credit</p>
                </div>
              </div>
            </div>
            
            <div className={statePage ? "rowLight" : "rowDark"}>
              <div className="image">
                <div className={button ? "img" : "imgnone"}>
                  <img className={!background && backgroundTwo ? "img" : "imgnone"} src={QrCode} alt="qrcode" />
                </div>
              </div>
              
              <div className={!backgroundTwo && background ? "form" : "formnone"}  >
                <div className={button ? "form" : "formnone"}>
                  <label className="input" htmlFor="num"><p className={statePage ? "light" : "dark"}>Card number</p>
                    <input type="text" placeholder="0000 0000 0000 0000" id="num" />
                  </label>
                  
                  <div className="valAndCvc">
                    <label className="input" htmlFor="val"><p className={statePage ? "light" : "dark"}>Go thru</p>
                      <input type="text" placeholder="04/25" id="val" />
                    </label>
                    <label className="input" htmlFor="cvc"><p className={statePage ? "light" : "dark"}>CVC</p>
                      <input type="text" placeholder="04/25" id="cvc" />
                    </label>
                  </div>
                  
                  <div className="button" onClick={() => setButton(!button)}>
                    <Button onClick={handlePay} ><img src={Pag} alt="pag" />Finish payment</Button>
                  </div>
                </div>
              </div>
              
              <div className={background && backgroundTwo ? "payOne" : "payTwo"}>
                <div className={button ? "payOne" : "payTwo"}>
                  <FiClock className={statePage ? "svgLight" : "svgDark"} />
                  <p className={statePage ? "light" : "dark"}>Waiting for payment</p>
                </div>
              </div>
              
              <div className={!background && !backgroundTwo ? "alertOne" : "alertTwo"}>
                <div className={button ? "alertOne" : "alertTwo"}>
                  <FiAlertTriangle className={statePage ? "svgLight" : "svgDark"} />
                  <p className={statePage ? "light" : "dark"}>Choose just one option</p>
                </div>
              </div>
              
              <div className={!button ? "buttonOne" : "buttonTwo"}>
                <BsCheckCircle className={statePage ? "svgLight" : "svgDark"} />
                <p className={statePage ? "light" : "dark"}>Payment approved!</p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </ContainerTwo>
    </ContainerOne >
  )
}