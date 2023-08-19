import { Container, Main, ButtonText } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { SlArrowLeft } from 'react-icons/sl'
import { useState, useEffect } from "react"
import { api } from "../../services/api"
import { useParams } from 'react-router-dom'
import { AmountAndButtonInclude } from '../../components/AmountAndButtonInclude'
import { Img } from '../../components/Img'
import { useStatePage } from '../../hooks/statePage'

export function DetailsDrinks() {
  const [data, setData] = useState({})
  const [ingredients, setIngredients] = useState([])
  const params = useParams()
  const { statePage } = useStatePage()

  useEffect(() => {
    async function fetchFood() {
      const response = await api.get(`/drinks/${params.id}`)
      setData(response.data)
      setIngredients(response.data.ingredients)
    }
    
    fetchFood()

  }, [])

  return (
    <Container>
      <Header />
      
      <Main className={statePage ? "light" : "dark"}>
        <div className="back">
          <ButtonText to="/"><SlArrowLeft className={statePage ? "svgLight" : "svgDark"} /><p className={statePage ? "light" : "dark"}>Back</p></ButtonText>
        </div>

        <div className="details">
          <img className="image" src={`${api.defaults.baseURL}/files/${data.image}`} alt="drink or dish image" />
          <div className="textDetails">
            <h1 className={statePage ? "h1Light" : "h1Dark"}>{data.name}</h1>
            <p className={statePage ? "pLight" : "pDark"}>{data.description}</p>
            <div className="ingredients">
              {
                ingredients.map(ingredient => (
                  <span key={String(ingredient.id)}>
                    <Img imgName={ingredient.name} />
                    <p className={statePage ? "Light" : "Dark"}>{ingredient.name}</p>
                  </span>
                ))
              }
            </div>
            
            <div className="finishBuy">
              <span className={statePage ? "priceLight" : "priceDark"}>R$ {String(Number(data.price).toFixed(2)).replace(".", ",")}</span>
              <AmountAndButtonInclude image={data.image} price={data.price} name={data.name} />
            </div>
          </div>
        </div>
      </Main>
      <Footer />
    </Container>
  )
}