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
    if (validInput()) {
      navigate(`user/${input}`);
    }
  };

  const validInput = () => {
    return !!input.trim().length;
  };

  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
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
          onKeyUp={onKeyUp}
          placeholder="@username"
          onChange={(e) => setInput(e.target.value)}
        />
        <FormButton disabled={!validInput()} onClick={handleSearch}>
          Pesquisar
        </FormButton>
      </Form>
    </Container>
  );
}

export default Search;
