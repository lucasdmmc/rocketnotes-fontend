import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../../services/api"
import { Link } from "react-router-dom"
import { Container, Form } from "./styles"
import { Input } from "../../components/Input"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { NoteItem } from "../../components/NoteItem"
import { Textarea } from "../../components/Textarea"
import { Button } from "../../components/Button"

export function New() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState("")

  const [tags, setTags] = useState([])
  const [newTags, setNewTags] = useState("")

  const navigate = useNavigate()

  function handleAddLink() {
    if(newLink == "") return alert("Digite um link no campo")

    const linkExist = links.find(link => link.length === newLink.length)

    setNewLink("")
    
    if(linkExist) return alert("Você já adicionou esse link")

    setLinks(prevState => [...prevState, newLink])
  }

  function handleRemoveLink(deleted) {
    setLinks(prevState => prevState.filter(link => link !== deleted))
  }

  function handleAddTag() {
    if(newTags == "") return alert("Digite qual tag deseja adicionar!")

    const tagExist = tags.find(tag => tag.length === newTags.length)
    
    setNewTags("")

    if(tagExist) return alert("Você já adicionou essa tag")

    setTags(prevState => [...prevState, newTags])

  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleNewNote() {
    if(!title) return alert("Digite um titulo para poder salvar!")
    if(newLink) return alert("Verifique se o campo de link está vazio!")
    if(newTags) return alert("Verifique se o campo de tag está vazio!")

    await api.post("/notes", {
      title,
      description,
      tags,
      links
    })

    alert("Nota cadastrada com sucesso!")
    navigate("/")
  }

  return(
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">
              Voltar
            
            </Link>
          </header>

          <Input 
            placeholder="Titulo"
            onChange={e => setTitle(e.target.value)}
          />

          <Textarea 
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
          />

          <Section title="Links uteis">
            {
              links.map((link, index) => {
                return <NoteItem 
                  key={String(index)}
                  value={link}
                  onClick={() => handleRemoveLink(link)}
                />
              })
            }
            <NoteItem 
              isNew 
              placeholder="Novo link"
              value={newLink}
              onChange={e => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              {
                tags.map((tag, index) => {
                  return <NoteItem 
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                />
                })
              }
              <NoteItem 
                isNew 
                placeholder="Nova tag"
                value={newTags}
                onChange={e => setNewTags(e.target.value)}
                onClick={handleAddTag}
              />
            </div>
          </Section>
          <Button 
            title="Salvar"
            onClick={handleNewNote}
          />
        </Form>
      </main>
    </Container>
  )
}