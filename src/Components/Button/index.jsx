import { Container } from "./styles"

export function Button({name, loading = false, ...rest}) {
  return (
  <Container type="button" disabled={loading} {...rest}>
    {loading ? "Carregando..." : name}
  </Container>
  )
}