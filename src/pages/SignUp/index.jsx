import { useState } from "react"
import { api } from "../../services/api"
import { BsFillHexagonFill } from 'react-icons/bs'
import { Container } from './styles'
import { Button } from '../../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import { useStatePage } from '../../hooks/statePage'
import { StatePage } from '../../components/StatePage'

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const { statePage } = useStatePage()

  function handleSignUp() {
    if (!name || !email) {
      return alert("Please fill in all fields")
    }
    if (password.length < 6) {
      return alert("Password must have at least 6 characters")
    }
    api.post("/users", { name, email, password })
    .then(() => { alert("Successfully registered user!"); 
    navigate("/");
    })
    .catch(error => { if (error.response) { alert(error.response.data.message) 
      } else { alert("Unable to register") } })
  }
  return (
    <Container >
      <main className={statePage ? "light" : "dark"}>
        <header>
          <StatePage StatePage={statePage} className="statePage" />
          <BsFillHexagonFill className={statePage ? "svgLight" : "svgDark"}/>
          <h3 className={statePage ? "h3Light" : "h3Dark"}>food explorer</h3>
        </header>
        
        <div className={statePage ? "divLight" : "divDark"}>
          <h1 className={statePage ? "h1Light" : "h1Dark"}>Create your account</h1>
          <div className="input">
            <label className={statePage ? "labelLight" : "labelDark"} htmlFor="name">Your Name</label>
            <input className={statePage ? "inputLight" : "inputDark"} type="text" id="name" placeholder="Example: Jose of Mary" onChange={e => setName(e.target.value)} />
          </div>
          <div className="input">
            <label className={statePage ? "labelLight" : "labelDark"} htmlFor="email">Email</label>
            <input className={statePage ? "inputLight" : "inputDark"} type="text" id="email" placeholder="Example: example@email.com" onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="input">
            <label className={statePage ? "labelLight" : "labelDark"} htmlFor="password">Password</label>
            <input className={statePage ? "inputLight" : "inputDark"} type="password" id="password" placeholder="At least 6 characters" onChange={e => setPassword(e.target.value)} />
          </div>
          <Button onClick={handleSignUp}>Create account</Button>
          <Link  className={statePage ? "linkLight" : "linkDark"} to="/">I already have an account</Link>
        </div>
      </main>
    </Container >
  )
}