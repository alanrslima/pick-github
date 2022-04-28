import React, { useState } from "react";
import {
  Container,
  Form,
  FormTitle,
  FormSubTitle,
  FormInput,
  FormButton,
} from "./Search.style";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");

  let navigate = useNavigate();

  const handleSearch = () => {
    navigate(`user/${input}`);
  };

  return (
    <Container>
      <Form>
        <FormTitle>Github Picker</FormTitle>
        <FormSubTitle>
          Por favor, digite o usuário do github que deseja pesquisar
        </FormSubTitle>
        <FormInput
          value={input}
          placeholder="@username"
          onChange={(e) => setInput(e.target.value)}
        />
        <FormButton onClick={handleSearch}>Pesquisar</FormButton>
      </Form>
    </Container>
  );
}

export default Search;
