import { Container, Links, Content } from "./styles"

import { api } from "../../services/api"

import { useParams, useNavigate } from "react-router-dom"

import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/ButtonText"
import { useEffect, useState } from "react"


export function Details() {
  const [data, setData] = useState(null)
  const [removeNote, setRemoveNote] = useState([])

  const params = useParams()
  const navigate = useNavigate()

  function handleBackToHome() {
    navigate(-1)
  }

  async function handleRemoveNote() {
    const confirm = window.confirm("Deseja remover a nota?")

    if(confirm) {
      await api.delete(`/notes/${params.id}`)
      navigate(-1)
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)

      setData(response.data)
    }

    fetchNote()
  }, [])

  return (
    <Container>
      <Header />

    { 
      data &&   
      <main>
        <Content>
          <ButtonText 
            title="Excluir nota"
            onClick={handleRemoveNote} 
          />

          <h1>{data.title}</h1>

          <p>
            {data.description}
          </p>

          { data.links &&
            <Section title="Links Úteis">
              <Links>
              {
                data.links.map(link => (
                  <li key={String(link.id)}>
                    <a href={link.url} target="_blank">
                      {link.url}
                    </a>
                  </li>

                ))
              }
              </Links>
            </Section>
          }

          { 
            data.tags &&
            <Section title="Marcadores">
              {
                data.tags.map(tag => (
                  <Tag 
                    key={String(tag.id)}
                    title={tag.name} 
                  />
                ))
              }

            </Section>
          } 
          <Button 
            title="Voltar"
            onClick={handleBackToHome}
          />
        
        </Content>
      </main>
    }
    </Container>
  )
}

