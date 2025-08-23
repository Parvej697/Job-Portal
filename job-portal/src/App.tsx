
import './App.css';
import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/tiptap/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';
import { Notifications } from '@mantine/notifications';
import { Provider } from 'react-redux';
import Store from './Store';
import AppRoute from './Pages/AppRoutes';

function App() {
  const theme = createTheme({
    fontFamily :"poppins , sans-serif",
    focusRing:"never",
    primaryColor:"eucalyptus",
    primaryShade:3,
    colors:{'eucalyptus': [
     '#f1f8f4','#dcefe3','#bbdfc9','#8fc6a9','#5fa884','#40916c','#2c6f52','#235943','#1e4736','#193b2e','#0d2119',
    ],

      'mine-shaft': [ '#f6f6f6', '#e7e7e7', '#d1d1d1', '#b0b0b0', '#888888', '#6d6d6d',
      '#5d5d5d','#4f4f4f', '#454545', '#3d3d3d','#2d2d2d',
      ],
    },

  
  })


  return (
    <Provider store={Store}>
    <MantineProvider defaultColorScheme='dark' theme={theme}>
     <Notifications position="top-center" zIndex={1000} />
       <AppRoute/>
    </MantineProvider>
    </Provider>
  );
}

export default App;
