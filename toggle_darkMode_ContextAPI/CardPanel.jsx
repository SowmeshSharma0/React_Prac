import MainCard from "./src/components/MainCard"

function CardPanel() {
  return (
    <section className="card-panel" style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
        <MainCard/>
        <MainCard/>
        <MainCard/>
        <MainCard/>
        <MainCard/>
        <MainCard/>
        <MainCard/>
        <MainCard/>
        <MainCard/>
    </section>
  )
}

export default CardPanel
