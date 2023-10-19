import { Container, Main, ButtonText, Logout, Header, Input } from './styles'
// import { HeaderTwo } from '../../components/HeaderTwo'
import { FooterTwo } from '../../components/FooterTwo'
import { SlArrowLeft } from 'react-icons/sl'
import { useState, useEffect } from "react"
import { api } from "../../services/api"
import { Navigate, useParams } from 'react-router-dom'
import { Img } from '../../components/Img'
// import { GoTrashcan } from 'react-icons/go'
import { FiLogOut } from 'react-icons/fi'
import { BsFillHexagonFill } from 'react-icons/bs'
import { BiSearchAlt } from 'react-icons/bi'
import { useNavigate, Link } from 'react-router-dom'
import { ButtonTwo } from '../../components/ButtonTwo'

export function DetailsAdm() {
  const [data, setData] = useState({})
  const [ingredients, setIngredients] = useState([])
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchFood() {
      const response = await api.get(`/dishes/${params.id}`)
      setData(response.data)
      setIngredients(response.data.ingredients)
    }
    fetchFood()
  }, [])

  async function handleDeleteDish(id) {
    if (confirm("Are you sure you want to delete this dish?")) {
      await api.delete(`/dishes/${id}`)
      navigate(-1)
    }
  }

  async function handleEditDish(id) {
    navigate(`/dishes/${id}`)
  }

  return (
    <Container>
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

      <ButtonText to="/adm"><SlArrowLeft />Back</ButtonText>
      <Main>
        <div >
          <img className="image" src={`${api.defaults.baseURL}/files/${data.image}`} alt="dish image" />
        </div>
        <div className="textDetails">
          <h1>{data.name}</h1>
          <p>{data.description}</p>
          
          <div className="ingredients">
            {
              ingredients.map(ingredient => (
                <span key={String(ingredient.id)}>
                  <Img imgName={ingredient.name} />
                  {ingredient.name}
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
      </Main>
      <FooterTwo />
    </Container>
  )
}