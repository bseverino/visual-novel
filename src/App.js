import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import { useLocalStorage } from './hooks/useLocalStorage';

import Menu from './components/Menu';
import NameForm from './components/NameForm';

function App() {
  const [playerName, setPlayerName] = useLocalStorage('name', '');

  const setName = name => {
    setPlayerName(name);
  };

  return (
    <Container>
      <Row>
        <Col xs={{ size: 6, offset: 3 }}>
          {!playerName ? <NameForm setName={setName} /> : <h1>Hello {playerName}</h1>}
        </Col>
      </Row>
      <Row>
        <Col xs={{ size: 6, offset: 3 }}>
          <Menu />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
