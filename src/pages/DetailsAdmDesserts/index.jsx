import { Container, Main, ButtonText } from './styles'
import { HeaderTwo } from '../../components/HeaderTwo'
import { FooterTwo } from '../../components/FooterTwo'
import { SlArrowLeft } from 'react-icons/sl'
import { useState, useEffect } from "react"
import { api } from "../../services/api"
import { Navigate, useParams } from 'react-router-dom'
import { Img } from '../../components/Img'
import { GoTrashcan } from 'react-icons/go'
import { useNavigate } from 'react-router-dom'

export function DetailsAdmDesserts() {
  const [data, setData] = useState({})
  const [ingredients, setIngredients] = useState([])
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchFood() {
      const response = await api.get(`/desserts/${params.id}`)
      setData(response.data)
      setIngredients(response.data.ingredients)
    }
    
    fetchFood()

  }, [])

  async function handleDeleteDessert(id) {
    if (confirm("Are you sure you want to delete this dessert?")) {
      await api.delete(`/desserts/${id}`)
    navigate(-1)
    }
  }

  return (
    <Container>
      <HeaderTwo />
      <ButtonText to="/adm"><SlArrowLeft />Back</ButtonText>
      
      <Main>
        <div >
          <img className="image" src={`${api.defaults.baseURL}/files/${data.image}`} alt={data.name} />
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
            <span className="price">R$ {String(Number(data.price).toFixed(2)).replace(".", ",")}</span>
            <button className="button" onClick={() => handleDeleteDessert(data.id)}>
              <GoTrashcan /> Delete
            </button>
          </div>
        </div>
      </Main>
      <FooterTwo />
    </Container>
  )
}