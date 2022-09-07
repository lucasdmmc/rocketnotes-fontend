import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"
import { Input } from "../../Components/Input"
import { Button } from "../../Components/Button"
import { Container, Form, Avatar } from "./styles"


export function Profile() {
  return (
    <Container>
      <header>
        <a href="/">
          <FiArrowLeft />
        </a>
      </header>

      <Form>
        <Avatar>
          <img 
            src="https://github.com/lucasdmmc.png"
            alt="Foto do perfil" 
          />

          <label htmlFor="avatar">
            <FiCamera />

            <input 
              id="avatar"
              type="file" 
            />
          </label>
        </Avatar>
        <Input 
          placeholder="Nome"
          type="Text"
          icon={FiUser}
        />

        <Input      
          placeholder="E-mail"
          type="Text"
          icon={FiMail}
        />

        <Input      
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
        />

        <Input      
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
        /> 

        <Button title="Salvar" />   
      </Form>
    </Container>
  )
}