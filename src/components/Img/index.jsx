import { Container } from './styles'
import tomato from '../../assets/tomato.png'
import lettuce from '../../assets/lettuce.png'
import radish from '../../assets/radish.png'
import naanbread from '../../assets/naanbread.png'
import ingredients from '../../assets/ingredients.webp'
import Ham from '../../assets/Ham.png'
import plum from '../../assets/plum.png'
import coffee from '../../assets/coffee.png'
import eggwhite from '../../assets/eggwhite.png'
import apricot from '../../assets/apricot.png'
import anise from '../../assets/anise.png'
import almonds from '../../assets/almonds.png'
import cinnamon from '../../assets/cinnamon.png'
import flour from '../../assets/flour.png'
import lemon from '../../assets/lemon.png'
import apple from '../../assets/apple.png'
import passion_fruit from '../../assets/passion_fruit.png'
import massa from '../../assets/massa.png'
import bread from '../../assets/bread.png'
import cucumber from '../../assets/cucumber.png'
import peach from '../../assets/peach.png'
import pesto from '../../assets/pesto.png'
import arugula from '../../assets/arugula.png'
import whiskey from '../../assets/whiskey.png'
import shrimp from '../../assets/shrimp.png'

export function Img({ imgName }) {
  if (imgName === "Ham") {
    return (
      <Container>
        <img src={Ham} alt="Ham image" />
      </Container>
    )
  } else if (imgName === "tomato") {
    return (
      <Container>
        <img src={tomato} alt="tomato image" />
      </Container>
    )
  } else if (imgName === "lettuce") {
    return (
      <Container>
        <img src={lettuce} alt="lettuce image" />
      </Container>
    )
  } else if (imgName === "radish") {
    return (
      <Container>
        <img src={radish} alt="radish image" />
      </Container>
    )
  } else if (imgName === "plum") {
    return (
      <Container>
        <img src={plum} alt="plum image" />
      </Container>
    )
  } else if (imgName === "coffee") {
    return (
      <Container>
        <img src={coffee} alt="coffee image" />
      </Container>
    )
  } else if (imgName === "eggwhite") {
    return (
      <Container>
        <img src={eggwhite} alt="eggwhite image" />
      </Container>
    )
  } else if (imgName === "apricot") {
    return (
      <Container>
        <img src={apricot} alt="apricot image" />
      </Container>
    )
  } else if (imgName === "anise") {
    return (
      <Container>
        <img src={anise} alt="anise image" />
      </Container>
    )
  } else if (imgName === "almonds") {
    return (
      <Container>
        <img src={almonds} alt="almonds image" />
      </Container>
    )
  } else if (imgName === "cinnamon") {
    return (
      <Container>
        <img src={cinnamon} alt="cinnamon image" />
      </Container>
    )
  } else if (imgName === "flour") {
    return (
      <Container>
        <img src={flour} alt="flour image" />
      </Container>
    )
  } else if (imgName === "lemon") {
    return (
      <Container>
        <img src={lemon} alt="lemon image" />
      </Container>
    )
  } else if (imgName === "apple") {
    return (
      <Container>
        <img src={apple} alt="apple image" />
      </Container>
    )
  } else if (imgName === "passion_fruit") {
    return (
      <Container>
        <img src={passion_fruit} alt="passion fruit image" />
      </Container>
    )
  } else if (imgName === "bread") {
    return (
      <Container>
        <img src={bread} alt="bread image" />
      </Container>
    )
  } else if (imgName === "massa") {
    return (
      <Container>
        <img src={massa} alt="massa image" />
      </Container>
    )
  }else if (imgName === "cucumber") {
    return (
      <Container>
        <img src={cucumber} alt="cucumber image" />
      </Container>
    )
  }else if (imgName === "peach") {
    return (
      <Container>
        <img src={peach} alt="peach image" />
      </Container>
    )
  }else if (imgName === "arugula") {
    return (
      <Container>
        <img src={arugula} alt="arugula image" />
      </Container>
    )
  }else if (imgName === "pesto") {
    return (
      <Container>
        <img src={pesto} alt="pesto image" />
      </Container>
    )
  }else if (imgName === "whiskey") {
    return (
      <Container>
        <img src={whiskey} alt="whiskey image" />
      </Container>
    )
  }else if (imgName === "pão naan") {
    return (
      <Container>
        <img src={naanbread} alt="naan bread image" />
      </Container>
    )
  }else if (imgName === "shrimp") {
    return (
      <Container>
        <img src={shrimp} alt="shrimp image" />
      </Container>
    )
  }else {
    return (
      <Container>
        <img className="img" src={ingredients} alt="imagem da salada" />
      </Container>
    )
  }
}