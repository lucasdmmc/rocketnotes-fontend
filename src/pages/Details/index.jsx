import { Container, Links, Content } from "./styles"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/ButtonText"


export function Details() {
  return (
    <Container>
      <Header />
      
      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>Introdução ao React</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus odit maiores dignissimos eum impedit corporis mollitia iure, tenetur nemo cupiditate debitis beatae veniam placeat quos vel laborum hic quod quo Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, inventore cumque ratione necessitatibus ipsa magnam nesciunt impedit eligendi cum harum ipsam autem sunt soluta mollitia quidem, fuga perferendis. Architecto, sint!</p>

          <Section title="Links Úteis">
            <Links>
              <li><a href="#">https://www.rocketseat.com.br</a></li>
              <li><a href="#">https://www.rocketseat.com.br</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="Express" />
            <Tag title="NodeJS" />

          </Section>

          <Button name="Voltar"/>
        
        </Content>
      </main>
    </Container>
  )
}

