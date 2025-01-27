import MainCard from "./src/components/MainCard"

function CardPanel() {
  return (
    <section className="card-panel" style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
        {
          Array.from({length:10}).map((_,idx) => 
            <MainCard key={idx}/>
        )
        }
    </section>
  )
}

export default CardPanel
