import { useAuth } from '../../hooks/auth'
import { useState } from "react"
import { BsFillHexagonFill } from 'react-icons/bs'
import { Container } from './styles'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'
import { useStatePage } from '../../hooks/statePage'
import { StatePage } from '../../components/StatePage'

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { signIn } = useAuth()
  const { statePage } = useStatePage()

  function handleSignIn() {
    signIn({ email, password })
  }

  return (
    <Container>
      <main className={statePage ? "light" : "dark"}>
      
      <header >
        <StatePage StatePage={statePage} className="statePage" />
        <BsFillHexagonFill className={statePage ? "svgLight" : "svgDark"} />
        <h3 className={statePage ? "h3Light" : "h3Dark"}>food explorer</h3>
      </header>
      
      <div className={statePage ? "divLight" : "divDark"} >
        <h1 className={statePage ? "h1Light" : "h1Dark"}>Please Log In</h1>
        <div className="input" >
          <label className={statePage ? "labelLight" : "labelDark"} htmlFor="email">Email</label>
          <input className={statePage ? "inputLight" : "inputDark"} type="text" id="email" placeholder="Example: example@email.com" onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="input">
          <label className={statePage ? "labelLight" : "labelDark"} htmlFor="password">Passoword</label>
          <input className={statePage ? "inputLight" : "inputDark"} type="password" id="password" placeholder="At least 6 characters " onChange={e => setPassword(e.target.value)} />
        </div>
        <Button onClick={handleSignIn}>Log In</Button>
        <Link className={statePage ? "linkLight" : "linkDark"} to="/register"><a>Create account</a></Link>
        <Link className={statePage ? "linkLight" : "linkDark"} to="/adm">Log In as Administrator</Link>
      </div>
    </main>
    </Container >
  )
}