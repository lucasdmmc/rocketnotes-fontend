import { FiPlus, FiSearch} from "react-icons/fi"
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles"
import { Section } from "../../Components/Section"
import { Note } from "../../Components/Note"
import { Header } from "../../Components/Header"
import { ButtonText } from "../../Components/ButtonText"
import { Input } from "../../Components/Input"

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li><ButtonText title="Todos"/></li>
        <li><ButtonText title="ReactJS"/></li>
        <li><ButtonText title="NodeJS"/></li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>
      </Search>

      <Content>
        <Section title="Minhas notas">
          <Note data={{
            title: 'React',
            tags: [
              {id: '1', name: 'ReactJS'},
              {id: '2', name: 'Components'}
            ]
          }} 
          />

          <Note data={{
            title: 'NodeJS',
            tags: [
              {id: '1', name: 'NodeJS'},
              {id: '2', name: 'Express'}
            ]
          }} 
          />
        </Section>
      </Content>

      <NewNote>
        <FiPlus />
        Criar conta
      </NewNote>
    </Container>
  )
}