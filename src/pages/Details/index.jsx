import { Container } from "./styles"
import { Button } from "../../components/Button"
export function Details() {
  return (
    <Container>
      <div>Hello world</div>
      <p>Lucas Carvalho</p>

      <Button name="Entrar"/>
      <Button name="Cadastrar"/>
      <Button name="Voltar"/>
    </Container>
  )
}

