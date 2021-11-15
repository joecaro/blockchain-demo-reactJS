import React, { useState } from "react";
import styled from "styled-components";

export default function AddBlock({ addNewBlock }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleAddBlock = (e) => {
    e.preventDefault();
    setValue("");
    // add block
  };
  return (
    <Form>
      <fieldset>
        <input type='textarea' value={value} onChange={handleChange}></input>
      </fieldset>
      <button onClick={handleAddBlock}>Add Block</button>
    </Form>
  );
}

const Form = styled.form`
  position: relative;
  padding: 20px;
  margin: auto;
  width: 400px;
  height: 100%;
  border-radius: 10px;
  box-shadow: 10px 10px 10px #00000022;
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  fieldset {
    display: flex;
    flex-direction: column;
    border: none;
  }
  input {
    border-radius: 3px;
    border: 1px solid #333;
  }
  textarea {
    border-radius: 3px;
    border: 1px solid #333;
  }
`;
