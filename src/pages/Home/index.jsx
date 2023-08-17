import { useState, useEffect } from "react"
import { api } from "../../services/api"
import { Footer } from '../../components/Footer'
import HomeImage from '../../assets/homeimage.png'
import { BiChevronRight } from 'react-icons/bi'
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
import { useRef } from 'react'
import { ContainerOne, ContainerTwo, Main } from './styles'
import { Link } from 'react-router-dom'
import { useInput } from '../../hooks/input'
import { AmountAndButtonInclude } from '../../components/AmountAndButtonInclude'
import { Favorite } from '../../components/Favorite'
import { FavoriteDesserts } from '../../components/FavoriteDesserts'
import { FavoriteDrinks } from '../../components/FavoriteDrinks'
import { RiAlertFill } from 'react-icons/ri'
import { Header } from '../../components/Header'
import { useStatePage } from '../../hooks/statePage'

export function Home() {
  const [foods, setFoods] = useState([])
  const [foodsDrinks, setFoodsDrinks] = useState([])
  const [foodsDesserts, setFoodsDesserts] = useState([])
  const [requests, setRequests] = useState([])
  const [request, setRequest] = useState([])
  const { search } = useInput()
  const { statePage } = useStatePage()

  useEffect(() => {
    async function fetchRequests() {
      const response = await api.get("/allrequests")
      setRequest(response.data.allRequests)
    }
    fetchRequests()
  }, [request])

  useEffect(() => {
    async function fetchRequests() {
      const response = await api.get("/request")
      setRequests(response.data.requests)
    }
    fetchRequests()
  }, [requests])

  useEffect(() => {
    async function fetchFoods() {
      const response = await api.get(`/dishes/?name=${search}`)
      setFoods(response.data.dishes)
    }
    fetchFoods()
  }, [search])

  useEffect(() => {
    async function fetchFoodsDrinks() {
      const response = await api.get(`/drinks/?name=${search}`)
      setFoodsDrinks(response.data.drinks)
    }
    fetchFoodsDrinks()
  }, [search])

  useEffect(() => {
    async function fetchFoodsDesserts() {
      const response = await api.get(`/desserts/?name=${search}`)
      setFoodsDesserts(response.data.desserts)
    }
    fetchFoodsDesserts()
  }, [search])

  const carousel = useRef(null)
  const carouselTwo = useRef(null)
  const carouselThree = useRef(null)

  const handleLeftClick = (e) => {
    e.preventDefault()
    console.log(carousel.current)
    carousel.current.scrollLeft -= carousel.current.offsetWidth
  }

  const handleRightClick = (e) => {
    e.preventDefault()
    carousel.current.scrollLeft += carousel.current.offsetWidth
  }

  const handleLeftClickTwo = (e) => {
    e.preventDefault()
    console.log(carousel.current)
    carouselTwo.current.scrollLeft -= carouselTwo.current.offsetWidth
  }

  const handleRightClickTwo = (e) => {
    e.preventDefault()
    carouselTwo.current.scrollLeft += carouselTwo.current.offsetWidth
  }

  const handleLeftClickThree = (e) => {
    e.preventDefault()
    console.log(carousel.current)
    carouselThree.current.scrollLeft -= carouselThree.current.offsetWidth
  }

  const handleRightClickThree = (e) => {
    e.preventDefault()
    carouselThree.current.scrollLeft += carouselThree.current.offsetWidth
  }

  return (
    <ContainerOne>
      <ContainerTwo className={statePage ? "containerLight" : "containerDark"}>
        <Header />
        <Main className={statePage ? "light" : "dark"}>
          <div className={search.length !== 0 ? "searchAlert" : "none"}>
            <RiAlertFill className="svgAlert" /><p>Please press enter or click on the magnifier</p>
          </div>
          <div className={statePage ? "logoHomeLight" : "logoHomeDark"}>
            <img src={HomeImage} alt="Home Image" />
            <div className={statePage ? "logoTextLight" : "logoTextDark"}>
              <h1 >Unparalleled flavors</ h1>
              <p>Taste the flavour of selected ingredients</p>
            </div>
          </div>
          <h2 className={statePage ? "textLight" : "textDark"}>Main Dishes</h2>
          <div className="container">
            <div className={statePage ? "arrowOneLight" : "arrowOneDark"} onClick={handleLeftClick}>
              <button ><IoIosArrowBack /></button>
            </div>
            <div className={statePage ? "arrowTwoLight" : "arrowTwoDark"} onClick={handleRightClick}>
              <button ><IoIosArrowForward /></button>
            </div>
            <div ref={carousel} className="listFood">
              <div className={foods.length === 0 ? "searchNone" : "none"}>
                <p>Any dish was found</p>
                <RiAlertFill />
              </div>
              <div className={foods.length === 0 ? "none" : "listFoods"}>
                {
                  foods.map(food => (
                    <div className="cardFood" key={String(food.id)} >
                      <Favorite dish_id={food.id} />
                      <img src={`${api.defaults.baseURL}/files/${food.image}`} alt="dish image" />
                      <Link to={`/details/${food.id}`}><a><h2>{food.name}<BiChevronRight /></h2></a></Link>
                      <div className="description"><p>{food.description}</p></div>
                      <span className={statePage ? "priceLight" : "priceDark"}>R$ {String(Number(food.price).toFixed(2)).replace(".", ",")} </span>
                      <div className="amountAndButton">
                        <AmountAndButtonInclude image={food.image} price={food.price} name={food.name} />
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
          <h2 className={statePage ? "textLight" : "textDark"}>Desserts</h2>
          <div className="container">
            <div className={statePage ? "arrowOneLight" : "arrowOneDark"} onClick={handleLeftClickTwo}>
              <button ><IoIosArrowBack /></button>
            </div>
            <div className={statePage ? "arrowTwoLight" : "arrowTwoDark"} onClick={handleRightClickTwo}>
              <button ><IoIosArrowForward /></button>
            </div>
            <div ref={carouselTwo} className="listFood">
              <div className={foodsDesserts.length === 0 ? "searchNone" : "none"}>
                <p>Any dessert was found</p>
                <RiAlertFill />
              </div>
              <div className={foodsDesserts.length === 0 ? "none" : "listFoods"}>
                {
                  foodsDesserts.map(food => (
                    <div className="cardFood" key={String(food.id)} >
                      <FavoriteDesserts dessert_id={food.id} />
                      <img src={`${api.defaults.baseURL}/files/${food.image}`} alt="dessert image" />
                      <Link to={`/detailsdesserts/${food.id}`}><a><h2>{food.name}<BiChevronRight /></h2></a></Link>
                      <p>{food.description}</p>
                      <span className={statePage ? "priceLight" : "priceDark"}>R$ {String(Number(food.price).toFixed(2)).replace(".", ",")}</span>
                      <div className="amountAndButton">
                        <AmountAndButtonInclude image={food.image} price={food.price} name={food.name} />
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
          <h2 className={statePage ? "textLight" : "textDark"}>Beverage</h2>
          <div className="container">
            <div className={statePage ? "arrowOneLight" : "arrowOneDark"} onClick={handleLeftClickThree}>
              <button ><IoIosArrowBack /></button>
            </div>
            <div className={statePage ? "arrowTwoLight" : "arrowTwoDark"} onClick={handleRightClickThree}>
              <button ><IoIosArrowForward /></button>
            </div>
            <div ref={carouselThree} className="listFood">
              <div className={foodsDrinks.length === 0 ? "searchNone" : "none"}>
                <p>Any drink was found</p>
                <RiAlertFill />
              </div>
              <div className={foodsDrinks.length === 0 ? "none" : "listFoods"}>
                {
                  foodsDrinks.map(food => (
                    <div className="cardFood" key={String(food.id)} >
                      <FavoriteDrinks drink_id={food.id} />
                      <img src={`${api.defaults.baseURL}/files/${food.image}`} alt="drink image" />
                      <Link to={`/detailsdrinks/${food.id}`}><a><h2>{food.name}<BiChevronRight /></h2></a></Link>
                      <p>{food.description}</p>
                      <span className={statePage ? "priceLight" : "priceDark"}>R$ {String(Number(food.price).toFixed(2)).replace(".", ",")}</span>
                      <div className="amountAndButton">
                        <AmountAndButtonInclude image={food.image} price={food.price} name={food.name} />
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </Main>
        <Footer />
      </ContainerTwo>
    </ContainerOne >
  )
}


