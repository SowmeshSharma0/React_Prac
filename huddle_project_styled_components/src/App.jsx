import './App.css'
import { ThemeProvider } from 'styled-components'
import { Container } from './components/styles/Container.styled'
import Header from './components/Header'
import { GlobalStyles } from './components/styles/Global'
import content from './content'
import ContentCard from './components/ContentCard'
import Footer from './components/Footer'

const theme = {
  colorsLight: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  colorsDark: {
    header: '#1a1a1a',
    body: '#121212',
    footer: '#0d0d0d',
  },
  sizes: {
    mobile: '768px',
  },
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Header/>
      <Container>
        {content.map((item) => 
          <ContentCard key={item.id} item={item} />
        )}
      </Container>
      <Footer/>
    </ThemeProvider>
  )
}

export default App
