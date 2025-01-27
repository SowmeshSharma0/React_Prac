import CardInfo from "./CardInfo"
import "./styles/MainCard.css"
import useTheme from "../contexts/theme"

function MainCard() {
  const Dark = useTheme().dark

  return (
    <div className={Dark? `main-card-dark` : `main-card`}>
      <img src="https://images.pexels.com/photos/1682821/pexels-photo-1682821.jpeg" alt="Couldnt load img" />
      <CardInfo/>
    </div>
  )
}

export default MainCard
