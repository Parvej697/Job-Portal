
import './App.css';
import { createTheme, MantineProvider } from '@mantine/core';
// core styles are required for all packages
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const theme = createTheme({
    colors:{'frangipani': [ '#fff7ed','#ffedd5','#ffdfb9','#ffbb72','#fd933a','#fc7513','#ed5909',
      '#c4410a','#9c3410','#7d2d11','#441406',],
      'shiraz' : [
     '#fef2f2', '#fee5e7','#fccfd3','#faa7b1','#f67687','#ed4660','#d92549',
     '#b7193c','#a4193d','#841737','#490819',
]
  }
  })
  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
      <Routes>
        <Route path='*' element={<HomePage/>}/>
      </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
