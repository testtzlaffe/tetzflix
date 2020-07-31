import React, { useState } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";
import FormField from "../../../components/FormField";

export default function CadastroCategoria() {
  const valoresIniciais = {
    nome: "Categoria inicial",
    descricao: "Descrição inicial",
    cor: "#000000",
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange({ target }) {
    setValue(target.getAttribute("name"), target.value);
  }

  return (
    <PageDefault>
      <h1>Cadastro de categoria: {values.nome}</h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          setCategorias([...categorias, values]);
        }}
      >
        <FormField
          label="Nome"
          type="text"
          name="nome"
          onChange={handleChange}
          value={values.nome}
        />

        <FormField
          label="Descrição"
          type="text"
          name="descricao"
          onChange={handleChange}
          value={values.descricao}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          onChange={handleChange}
          value={values.cor}
        />

        <button>Cadastrar</button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => (
          <li key={indice}>{categoria.nome}</li>
        ))}
      </ul>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}
