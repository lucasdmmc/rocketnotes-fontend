import { Container, Form, Background } from "./styles"
import { FiLogIn, FiMail, FiLock } from "react-icons/fi"
import { Input } from "../../Components/Input"
import { Button } from "../../Components/Button"

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>

        <h2>Faça seu login</h2>

        <Input 
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />

        <Input 
          placeholder="senha"
          type="password"
          icon={FiLock}
        />

        <Button title="Entrar" />

        <a href="#">
          Criar conta
        </a>
      </Form>

      <Background />
    </Container>
  )
}