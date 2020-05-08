import React from 'react';
import { GlobalProvider } from './context/GlobalContext';
import { Episodes } from './components/Episodes';
import { Navbar } from './components/Navbar';

interface ITodo {
  text: string;
  complete: boolean;
}

const App: React.FC = () => {
  return (
    <GlobalProvider>
      <Navbar />
      <Episodes />
    </GlobalProvider>
  );
};

export default App;
