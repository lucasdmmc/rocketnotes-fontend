import { Container, Form, Background } from "./styles"
import { FiUser, FiMail, FiLock } from "react-icons/fi"
import { Input } from "../../Components/Input"
import { Button } from "../../Components/Button"

export function SignUp() {
  return (
    <Container>
      <Background />
      <Form>
        <h1>Rocket Notes3</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>

        <h2>Crie sua conta</h2>

        <Input 
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />

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

        <Button title="Cadastrar" />

        <a href="#">
          Voltar para o login
        </a>
      </Form>
    </Container>
  )
}