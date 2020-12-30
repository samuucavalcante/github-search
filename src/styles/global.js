import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
  overflow: hidden;

}

body {
  background-color: #f0f2f5;
}

body, input, button {
  font-family: 'Roboto Slab', serif;
}

button {
  cursor: pointer;
  color: white;
}
`;

