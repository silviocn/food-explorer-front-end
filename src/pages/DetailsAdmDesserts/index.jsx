import { ContainerOne, ContainerTwo, Main, ButtonText, Logout, Header, Input } from './styles'
import { Footer } from '../../components/Footer'
import { SlArrowLeft } from 'react-icons/sl'
import { useState, useEffect } from "react"
import { api } from "../../services/api"
import { useParams } from 'react-router-dom'
import { useNavigate, Link } from 'react-router-dom'
import { ButtonTwo } from '../../components/ButtonTwo'
import { BsFillHexagonFill } from 'react-icons/bs'
import { BiSearchAlt } from 'react-icons/bi'
import { FiLogOut } from 'react-icons/fi'
import { useStatePage } from '../../hooks/statePage'

export function DetailsAdmDesserts() {
  const [data, setData] = useState({})
  const [ingredients, setIngredients] = useState([])
  const params = useParams()
  const navigate = useNavigate()
  const { statePage } = useStatePage()

  useEffect(() => {
    async function fetchFood() {
      const response = await api.get(`/desserts/${params.id}`)
      setData(response.data)
      setIngredients(response.data.ingredients)
    }
    
    fetchFood()

  }, [])

  /* async function handleDeleteDessert(id) {
    if (confirm("Are you sure you want to delete this dessert?")) {
      await api.delete(`/desserts/${id}`)
    navigate(-1)
    }
  } */
  
  function handleSignOut() {
    navigate("/adm")
    signOut()
  }

  return (
    <ContainerOne>
    <ContainerTwo className={statePage ? "containerLight" : "containerDark"}>
    <Header>
      <div className="logo">
        <BsFillHexagonFill />
        <span>food explorer</span>
        <h2>admin</h2>
      </div>
      
      <div className="gap">
        <Input >
          <BiSearchAlt />
          <input type="text" placeholder="Search by your meals" onChange={e => setSearch(e.target.value)} />
        </Input>
      </div>

      <div className="buttons">
        <Link to="/editdish">
          <ButtonTwo>New dish</ButtonTwo>
        </Link>
        
        <Logout onClick={handleSignOut}>
          <FiLogOut />
        </Logout>
      </div>
    </Header>
    
    <Main className={statePage ? "light" : "dark"}>
          <div className="back">
            <ButtonText to="/adm"><SlArrowLeft className={statePage ? "svgLight" : "svgDark"} /><p className={statePage ? "light" : "dark"}>Back</p></ButtonText>
          </div>
          <div className="details">
            <img className="image" src={`${api.defaults.baseURL}/files/${data.image}`} alt="dish image" />
            
            <div className="textDetails">
              <h1 className={statePage ? "h1Light" : "h1Dark"}>{data.name}</h1>
              <p className={statePage ? "pLight" : "pDark"}>{data.description}</p>
             
              <div className="ingredients">
                {
                  ingredients.map(ingredient => (
                    <span key={String(ingredient.id)}>
                      <p className={statePage ? "Light" : "Dark"}>{ingredient.name}</p>
                    </span>
                  ))
                }
              </div>

              <div className="finishBuy">
                <Link to="/editdish">
                  <ButtonTwo>Edit dish</ButtonTwo>
                </Link>
              </div>
            </div>
          </div>
        </Main>

      <Footer />
      </ContainerTwo>
    </ContainerOne>
  )
}