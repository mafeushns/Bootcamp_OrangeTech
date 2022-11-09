// Hook
import { useNavigate } from "react-router-dom"
// Components
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
// Styles, image
import  banner  from '../../assets/banner.png'
import { 
   Container, 
   TextContent, 
   TitleHighlight, 
   Title 
} from './styles'

const Home = () => {

const navigate = useNavigate()
const handleClickSignIn = () => {
   navigate('/login')
}

return (
<>
   <Header />
   <Container>
      <div>
         <Title>
         <TitleHighlight>
            Implemente  
         <br />
         </TitleHighlight>
         o seu futuro global agora!
         </Title>
         <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts. 
         </TextContent>
         <Button 
            title="Começar agora" 
            variant="secondary" 
            onClick={handleClickSignIn}
         />
      </div>
      <div>
         <img 
            src={banner} 
            alt="Banner principal" 
         />
      </div>
   </Container>
</>
)}
export { Home }
