import { Button } from "./styles/Button.styled"
import { Container } from "./styles/Container.styled"
import { Flex } from "./styles/Flex.styled"
import { StyledHeader, Logo, Nav, Image } from "./styles/Header.styled"


function Header() {
  return (
    <StyledHeader>
        <Container>
            <Nav>
                <Logo src="./public/images/logo.svg" alt=""/>
                <Button>
                    Try it Free
                </Button>
            </Nav>
            <Flex>
                <div>
                    <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero quod quis, pariatur praesentium veritatis aliquid quaerat quas dignissimos ullam, odit itaque voluptatum ut quos. Distinctio tenetur enim libero ab temporibus?</p>
                    <Button bg="#ff0099" color="#fff">
                        Get Started for Free
                    </Button>
                </div>
                <Image src="./public/images/illustration-mockups.svg" alt=""/>
            </Flex>
        </Container>
    </StyledHeader>
  )
}

export default Header
