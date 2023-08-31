import styled from 'styled-components'

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: black;
  padding-left: 1em;
  padding-right: 1em;
`;


const HeaderContainer = styled.div`
  margin-top: 1em;
  padding: .7em 0;
  position: fixed;
  top: 0;
  width: 50em;
  display: flex;
  justify-content: space-between;
  background-color: mediumturquoise;
`

export default function Header() {
  return (
    <HeaderContainer>
      <Title>Task Manager</Title>
    </HeaderContainer>
  )
}
