import { useState } from 'react'
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"
import { Container, ButtonText } from './styles'
import { SlArrowLeft } from 'react-icons/sl'
import { HeaderTwo } from '../../components/HeaderTwo'
import { FooterTwo } from '../../components/FooterTwo'
import { FiUpload } from 'react-icons/fi'
import { IngredientItem } from '../../components/IngredientItem'

export function EditDish() {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState("")
  const [file, setFile] = useState(null)
  const navigate = useNavigate()

  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, newIngredient])
    setNewIngredient("")
  }
  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
  }

  function handleImage(event) {
    const file = event.target.files[0]
    setFile(file)
  }

  async function handleNewDish() {
    if (!name) {
      return alert("Type the name")
    }
    if (newIngredient) {
      return alert("You left one ingredient typed but without adding it. Please click on add or erase it.")
    }
    if (!description) {
      return alert("Type something about it.")
    }
    if (!price) {
      return alert("Fill in the price")
    }
    if (!file) {
      return alert("Please upload/choose one image.")
    }
    if (ingredients.length == 0) {
      return alert("Please add at least one ingredient.")
    }
    const formData = new FormData()
    formData.append("name", name)
    formData.append("description", description)
    formData.append("price", price)
    formData.append("ingredients", ingredients)
    formData.append("image", file)
    await api.post("/dishes", formData).then(() => { alert("Item successfully registered"); navigate("/adm") }).catch(error => { if (error.response) { alert(error.response.data.message) } else { alert("Unable to register") } })

  }
  return (
    <Container>
      <HeaderTwo />
      <main>
          <ButtonText to="/adm"><SlArrowLeft />Back</ButtonText>
        <h1>Edit dish</h1>
        <div className="imageAndNameDish">
          <div className="imagedish">
            <p>Dessert image</p>
            <label htmlFor="imagedish"><FiUpload />Upload image</label>
            <input type="file" id="imagedish" onChange={(event) => handleImage(event)} />
          </div>
          <div className="namedish">
            <label htmlFor="namedish">Name</label>
            <input type="text" id="namedish" placeholder="Example name" onChange={e => setName(e.target.value)} />
          </div>
        </div>
        <div className="ingredientsAndPriceDish">
          <div className="ingredients">
            <p>Ingredients</p>
            <div className="box">
              {
                ingredients.map((ingredient, index) => (
                  <IngredientItem key={String(index)} value={ingredient} onClick={() => { handleRemoveIngredient(ingredient) }} />
                ))
              }
              <IngredientItem placeholder="Add" isNew value={newIngredient} onChange={e => setNewIngredient(e.target.value)} onClick={handleAddIngredient} />
            </div>
          </div>
          <div className="price">
            <label htmlFor="price">Price</label>
            <input type="number" id="price" placeholder="00,00" onChange={e => setPrice(e.target.value)} />
          </div>
        </div>
        <div className="textarea">
          <p>Description</p>
          <textarea placeholder="Briefly talk about the dish, ingredients and mixture." onChange={e => setDescription(e.target.value)} />
        </div>
        <div className="button">
          <button className="addrequest" onClick={(e) => handleNewDish(e)}>
            Add order
          </button>
        </div>
      </main>
      <FooterTwo />
    </Container >
  )
}