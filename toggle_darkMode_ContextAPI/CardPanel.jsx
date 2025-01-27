import MainCard from "./src/components/MainCard"

function CardPanel({Dark}) {
  return (
    <section className="card-panel" style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
        {
          Array.from({length:10}).map((_,idx) => 
            <MainCard key={idx} Dark={Dark}/>
        )
        }
    </section>
  )
}

export default CardPanel
