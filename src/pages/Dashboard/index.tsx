import React, { useState, FormEvent } from 'react'

import api from '../../services/api'

import { Title, Form, Repositories, Error } from './styles'
import logoImg from '../../assets/logo.svg'
import { FiChevronRight } from 'react-icons/fi'

interface Repository {
  full_name: string;
  description: string;
  html_url: string;
  owner: {
    login: string;
    avatar_url: string;
  }
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('')
  const [inputError, setInputError] = useState('')
  const [repositories, setRepositories] = useState<Repository[]>([])

  async function addRepositoryHandler(event: FormEvent<HTMLFormElement>): Promise<void>{
    event.preventDefault()

    if(!newRepo) {
      setInputError('Digite o autor/nome do repositório')

      return
    }

    try {
      const { data } = await api.get<Repository>(`/repos/${newRepo}`)

      const duplicate = repositories.find(repository => repository.full_name === data.full_name)
  
      if(duplicate){
        setInputError('Repositório já foi adicionado')
  
        return
      }
  
      setRepositories([...repositories, data])
      setInputError('')
      setNewRepo('')
    } catch(err) {
      setInputError('Erro na busca por esse repositório')
    }
  }

  return (
    <>
    <img src={logoImg} alt="Github Logo"/>
    <Title>Explore repositórios no Github.</Title>

    <Form hasError={!!inputError} onSubmit={addRepositoryHandler}>
      <input type="text" placeholder="Digite o nome do repositório" value={newRepo} onChange={e => setNewRepo(e.target.value)}/>
      <button type="submit">Pesquisar</button>
    </Form>
  { inputError && <Error>{inputError}</Error>}
    <Repositories>
     {repositories.map(repository => (
        <a className="repository" href={repository.html_url} key={repository.full_name}>
        <img className="repository__avatar" src={repository.owner.avatar_url} alt={repository.owner.login}/>
        <div className="repository__row">
          <strong className="repository__username">
            {repository.full_name}
          </strong>
          <p className="repository__description">
            {repository.description}
          </p>
        </div>

        <FiChevronRight className="repository__icon" size={20} />
      </a>
     ))}
    </Repositories>
    </>
  )
}

export default Dashboard