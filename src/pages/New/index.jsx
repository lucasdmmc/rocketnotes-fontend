import { Container, Form } from "./styles"
import { Input } from "../../Components/Input"
import { Header } from "../../Components/Header"
import { Textarea } from "../../Components/Textarea"
import { Section } from "../../Components/Section"
import { NoteItem } from "../../Components/NoteItem"
import { Button } from "../../Components/Button"

export function New() {
  return(
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <a href="#">Voltar</a>
          </header>

          <Input placeholder="Titulo" />

          <Textarea placeholder="Observações" />

          <Section title="Links uteis">
            <NoteItem value="https://www.rocketseat.com.br" />
            <NoteItem 
              isNew 
              placeholder="Novo link" 
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="React" />
              <NoteItem isNew placeholder="Nova tag" />
            </div>
          </Section>
          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  )
}