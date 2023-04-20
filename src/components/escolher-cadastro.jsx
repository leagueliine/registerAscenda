import { Link } from 'react-router-dom'
import styled from 'styled-components'

const EscolherCadastro = () => {
  return (
    <Nav>
      <Link to='/caduser'>user</Link>
      <Link to='/cadempresa'>empresa</Link>

    </Nav>
  )
}

const Nav = styled.nav`
display: flex;
justify-content: space-around;
background: aqua;
width: 900px;
`

export { EscolherCadastro }