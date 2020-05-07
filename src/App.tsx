import React from 'react';
import { GlobalProvider } from './context/GlobalContext';
import { Episodes } from './components/Episodes';

interface ITodo {
  text: string;
  complete: boolean;
}

const App: React.FC = () => {
  return (
    <GlobalProvider>
      <div className='container'>
        <h1>Rick and morty app</h1>
        <Episodes />
      </div>
    </GlobalProvider>
  );
};

export default App;
