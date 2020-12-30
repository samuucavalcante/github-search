import React, { useState, useCallback, useEffect } from 'react';

import { Lista, Form, Container, Err } from './styles';

import api from '../../services/api';

import { FiArrowRight, FiSearch } from 'react-icons/fi'

const Main = () => {
  const [newRepo, setNewRepo] = useState('');
  const [isError, setIsError] = useState('');
  
  const [repositories, setRepositories] = useState(() =>{
      const storageRepositories = localStorage.getItem('@GithubExplorer:Repositories')

    if (storageRepositories) {
      return JSON.parse(storageRepositories);
    }else {
      return [];
    }

  });

  useEffect(() => {
    localStorage.setItem('@GithubExplorer:Repositories', JSON.stringify(repositories))
  }, [repositories])

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
    if (!newRepo) {
      setIsError('Campo vazio')
      return 0;
    }
    try {
      const response = await api.get(`repos/${newRepo}`) 
    
      const repository = response.data;

      setRepositories([...repositories, repository]);
      setNewRepo('');
      setIsError('')
    } catch (err) {
      setIsError('Repositório não encontrado, coloque no formato user/repositório')
    }
  },[newRepo, repositories])

  return(
    <>
      <Container>
        <Form isErrored={!!isError} onSubmit={handleSubmit} >
          <input
           value={newRepo}
           onChange={e => setNewRepo(e.target.value)}
           type="text"
          />
          <button type="submit">
            <FiSearch size={15} />
            Buscar
            </button> 
        </Form>
            {isError && (
              <Err>
                <span>{isError}</span>
              </Err>
            )}

        {repositories.map(repository => (
          <Lista >
            <img src={repository.owner.avatar_url} alt={repository.name}/>
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiArrowRight size={18} color="gray" />
        </Lista>

        ))}
        

      </Container>
    </>
  )
}

export default Main;