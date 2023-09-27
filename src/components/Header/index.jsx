import { useNavigate } from 'react-router-dom'
import { BsFillHexagonFill } from 'react-icons/bs'
import { CgNotes } from 'react-icons/cg'
import { FiLogOut } from 'react-icons/fi'
import { Container, Logout } from './styles'
import { ButtonTwo } from '../ButtonTwo'
import { Input } from '../Input'
import { BiSearchAlt2 } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { api } from "../../services/api"
import { useState, useEffect } from "react"
import { useInput } from '../../hooks/input'
import { RiAlertFill } from 'react-icons/ri'
import { StatePage } from '../StatePage'
import { useStatePage } from '../../hooks/statePage'

export function Header() {
  const [requests, setRequests] = useState([])
  const [request, setRequest] = useState([])
  const { search } = useInput()
  const { statePage } = useStatePage()

  useEffect(() => {
    async function fetchRequests() {
      const response = await api.get("/request")
      setRequests(response.data.requests)
    }
    
    fetchRequests()

  }, [requests])

  useEffect(() => {
    async function fetchRequests() {
      const response = await api.get("/allrequests")
      setRequest(response.data.allRequests)
    }
    
    fetchRequests()

  }, [request])

  const { signOut } = useAuth()
  const navigate = useNavigate()

  function handleSignOut() {
    navigate("/")
    signOut()
  }

  return (
    <Container>
      <div className={statePage ? "light" : "dark"}>
        <div className="logo" >
          <BsFillHexagonFill className={statePage ? "hexagonLight" : "hexagonDark"} />
          <span className={statePage ? "spanLight" : "spanDark"}>food explorer</span>
          <div className="gap">
            <Input icon={BiSearchAlt2} placeholder="Search for dishes or ingredients" value={search}>
            </Input>
          </div>
        </div>
        
        <div className="buttons">
          <Link to="/requests">
            <ButtonTwo>
              <CgNotes />All my orders ({request.length})
            </ButtonTwo>
          </Link>
                  
          <Logout onClick={handleSignOut}>
            <FiLogOut className={statePage ? "LogoutDark" : "LogoutLight"} />
          </Logout>
        </div>
        <StatePage StatePage={statePage}/>
      </div>
    </Container>
  )
}