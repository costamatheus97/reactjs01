import styled, { css } from 'styled-components'
import { shade } from 'polished'

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  margin-top: 80px;
  max-width: 450px;
  width: 100;
  line-height: 56px;
`

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input{
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 4px 0 0 4px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;

    ${(props) =>  props.hasError && css`
      border-color: #c53030;
    `}

    &::placeholder{
      color: #a8a8b3;
    }
  }

  button{
    max-width: 210px;
    width: 100%;
    border: 0;
    background: #04d361;
    border-radius: 0 4px 4px 0;
    color: #fff;
    font-weight: bold;
    transition: all .3s ease-in-out;

    &:hover{
      background: ${shade(0.1, '#04d361')}
    }
  }
`

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export const Repositories = styled.div`
  max-width: 700px;

  .repository{
    display: flex;
    width: 100%;
    background: #fff;
    padding: 24px;
    border-radius: 4px;
    align-items: center;
    text-decoration: none;
    transition: all .3s ease-in-out;
    margin-top: 4rem;

    &:hover{
      transform: translateX(10px);
    }

    & + a {
      margin-top: 1rem;
    }

    &__avatar{
      width: 64px;
      height: 64px;
      border-radius: 50%;
      margin-right: 1rem;
    }

    &__row{
      flex: 1;
    }

    &__username{
      color: #3d3d4d;
      font-size: 20px;
    }

    &__description{
      font-size: 18px;
      color: #a8a8b3;
      margin-top: 4px;
      max-width: 500px;
    }

    &__icon{
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`