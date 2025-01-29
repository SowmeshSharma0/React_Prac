import { StyledContentCard } from "./styles/ContentCard.styled"

function ContentCard({item: {id, title, body, image}}) {
  return (
    <StyledContentCard layout={id % 2 === 0 && 'row-reverse'}>
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
        <div>
            <img src={`./images/${image}`} alt={title}/>
        </div>
    </StyledContentCard>
  )
}

export default ContentCard
