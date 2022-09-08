import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Container, Form, Avatar } from "./styles"
import { Link } from "react-router-dom"


export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />        
        </Link>
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