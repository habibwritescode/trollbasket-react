import styled from 'styled-components'
import './App.css';
// import {BrowserRouter as Router, Link, NavLink} from 'react-router-dom'
import Buy from './pages/Buy';

const Wrapper = styled.div`
  background-color: #fff;
  margin: 0 auto;
  max-width: 37.5rem;
  overflow-x: hidden;
  padding-top: 1.94rem;
`

function App() {
  return (
    <Wrapper className="App">
      <Buy />
    </Wrapper>
  );
}

export default App;
