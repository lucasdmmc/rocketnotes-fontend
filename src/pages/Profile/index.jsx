import { useState } from "react"
import { useAuth } from "../../hooks/auth"
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Container, Form, Avatar } from "./styles"
import { Link } from "react-router-dom"


export function Profile() {
  const { user, updatedProfile } = useAuth()
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState()
  const [passwordNew, setPasswordNew] = useState()

  async function handleUpdate() {
    const user = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld
    }

    await updatedProfile({user})
  }
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
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Input      
          placeholder="E-mail"
          type="Text"
          icon={FiMail}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Input      
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          onChange={e => setPasswordOld(e.target.value)}
        />

        <Input      
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
          onChange={e => setPasswordNew(e.target.value)}
        /> 

        <Button 
          onClick={handleUpdate} 
          title="Salvar" 
        />   
      </Form>
    </Container>
  )
}