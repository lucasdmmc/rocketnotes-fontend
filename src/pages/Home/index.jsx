import { Container, Brand, Menu, Search, Content, NewNote } from "./styles"
import { FiPlus, FiSearch} from "react-icons/fi"
import { Section } from "../../components/Section"
import { Note } from "../../components/Note"
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"

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

      <NewNote to="/new">
        <FiPlus />
        Criar conta
      </NewNote>
    </Container>
  )
}