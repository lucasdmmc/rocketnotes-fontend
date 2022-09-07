import { Container, Form } from "./styles"
import { Input } from "../../Components/Input"
import { Header } from "../../Components/Header"

export function New() {
  return(
    <Container>
      <Header />

      <main>
        <Form>
          <h1>Criar nota</h1>
          <a href="#">Voltar</a>

          <Input placeholder="Titulo" />
        </Form>
      </main>
    </Container>
  )
}