import { useState, useEffect } from 'react'
import styled from 'styled-components'

const FormLogin = () => {


  const [name, setName] = useState('')
  const [cpf, setCpf] = useState()
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState()
  const [city, setCity] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Div className="form">
      <H1>Faça seu cadastro</H1>
      <Form>
        <div className="input-container">
          <Input type="text" name="uname" placeholder='Nome' required />
        </div>
        <div className="input-container">
          <Input type="text" name="ucpf" placeholder='CPF' required />
        </div>
        <div className="input-container">
          <Input type="text" name="uemail" placeholder='E-Mail' required />
        </div>
        <div className="input-container">
          <Input type="string" name="ucontact" placeholder='Telefone' required />
        </div>
        <div className="input-container">
          <Input type="string" name="cidade" placeholder='Cidade' required />
        </div>
        <div className="button-container">
          <InputButton type="submit" value='Finalizar' />
        </div>
        <DivCheckbox className="button-container">
          <InputCheckbox type="checkbox" required />
          <Label>Li e aceito os termos e condições</Label>
        </DivCheckbox>
      </Form>
    </Div>
  )
}

const Form = styled.form`
position: absolute;
width: 282px;
height: 371px;
left: 56px;
top: 100px;
`

const InputCheckbox = styled.input`
box-sizing: border-box;
position: absolute;
left:27px;
width: 12px;
height: 12px;
border: 1px solid #ED3E09;
border-radius: 2px;
`

const DivCheckbox = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 12px;
text-align: center;
color: #ED3E09;
`

const H1 = styled.h1`
position:relative;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 25px;
line-height: 30px;
text-align: center;
width: 282px;
height: 35px;
top: -162px;
left:-15px;
color:#ED3E09;
`

const Input = styled.input`
width:222px;
border: none;
border-bottom: 1px solid orangered;
::placeholder{
color: orangered;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
};
box-shadow: 0 0 0 0;
outline: 0;
margin-bottom:15px;
`

const Label = styled.label`
position:relative;
left:-8px;
top:3px;
`

const InputButton = styled.input`
box-sizing: border-box;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 16px 50px;
gap: 10px;
position: absolute;
width: 167px;
height: 56px;
left: 70px;
top: 280px;
background: #FFFFFF;
border: 1px solid #ED3E09;
border-radius: 50px;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: orangered;
`

const Div = styled.div`
display:grid;
justify-content:center;
align-items:center;
position: relative;
width: 424px;
height: 483px;
background: #FFFFFF;
border-radius: 50px;
border: 1px solid #000;
`
export { FormLogin }