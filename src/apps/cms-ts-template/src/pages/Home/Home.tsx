import React from 'react';
import { useHistory } from 'react-router-dom';

const Home: React.FC<{}> = () => {
  const history = useHistory();

  function goTest(path: string): void {
    history.push(path);
    console.log(path, history);
  }

  return (
    <div>
      <h1
        style={{
          fontSize: '30px',
        }}
      >
        Home
      </h1>
      <p>
        <button
          type="button"
          style={{
            textDecoration: 'underline',
            color: 'blue',
            margin: '20px 0',
            fontSize: '20px',
          }}
          onClick={(): void => goTest('/test')}
        >
          to test
        </button>
      </p>
    </div>
  );
};

export default Home;
