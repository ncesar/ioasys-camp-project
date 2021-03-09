import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { StyledHomeWrapper, StyledError, StyledImageWrapper } from './styled';
import { Header } from '../../components/Header';
import { Search } from '../../components/Search';
import { Image } from '../../components/Image';
import { Context } from '../../GlobalContext';

export const Home = () => {
  //sem hook form
  const [searchValue, setSearchValue] = useState('');
  const onChangeHandller = (e) => {
    setSearchValue(e.target.value);
    console.log(searchValue, 'search value');
  };

  //com hookform
  const [results, setResults] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { register, handleSubmit } = useForm();
  const [word, setWord] = useContext(Context);

  const onSubmit = (data) => {
    console.log(data);
    setLoading(true);
    setWord(data.searchValue);
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=1&query=${data.searchValue}&client_id=${process.env.REACT_APP_ACCESS_KEY}`,
      )
      .then((response) => {
        setResults(response.data.results);
        setLoading(false);
        setError(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
        setLoading(false);
      });
  };
  return (
    <StyledHomeWrapper>
      <Link to="/about">Ir para Sobre</Link>
      <Header title="Ioasys Image Search" />
      <>Valor pesquisado: {word} </>
      <Search
        title="Pesquisar"
        buttonTitle="Procurar"
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        // sem hook-form
        value={searchValue}
        onChange={onChangeHandller}
      />
      {loading && <>Carregando...</>}
      {error && (
        <StyledError>Desculpe mas houve um erro. Tente novamente.</StyledError>
      )}
      {results?.length === 0 && (
        <StyledError>Sem resultados. Pesquise um novo item</StyledError>
      )}
      <StyledImageWrapper>
        {results?.map((image) => (
          <Image
            key={image.id}
            alt={image.alt_description}
            src={image.urls.thumb}
          />
        ))}
      </StyledImageWrapper>
    </StyledHomeWrapper>
  );
};
