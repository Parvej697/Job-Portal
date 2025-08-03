
import './App.css';
import { createTheme, Divider, MantineProvider } from '@mantine/core';
// core styles are required for all packages
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import HomePage from './Pages/HomePage';
import '@mantine/tiptap/styles.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FindJobs from './Pages/FindJobsPage';
import Header from './Header/Header';
import '@mantine/dates/styles.css';
import Footer from './Footer/Footer';
import FindTalentPage from './Pages/FindTalentPage';
import TalentProfilePage from './Pages/TalentProfilePage';
import PostJobPage from './Pages/PostJobPage';
import JobDescPage from './Pages/JobDescPage';
import ApplyJobPage from './Pages/ApplyJobPage';
import CompanyPage from './Pages/CompanyPage';
import PostedJobPage from './Pages/PostedJobPage';
import JobHistoryPage from './Pages/JobHistoryPage';

function App() {
  const theme = createTheme({
    fontFamily :"poppins , sans-serif",
    focusRing:"never",
    primaryColor:"frangipani",
    primaryShade:3,
    colors:{'frangipani': [ '#fff7ed','#ffedd5','#ffdfb9','#ffbb72','#fd933a','#fc7513','#ed5909',
      '#c4410a','#9c3410','#7d2d11','#441406',],
      'shiraz' : [
     '#fef2f2', '#fee5e7','#fccfd3','#faa7b1','#f67687','#ed4660','#d92549',
     '#b7193c','#a4193d','#841737','#490819',
]
    },

  
  })
  return (
    <MantineProvider defaultColorScheme='dark' theme={theme}>
      <BrowserRouter>
      <div className='relative'>
      <Header/>
      <Divider color="frangipani.3"  size="xs"/>
      <Routes>
        <Route path='/find-jobs' element={<FindJobs/>} />
        <Route path='/find-talent' element={<FindTalentPage/>} />
        <Route path='/company' element={<CompanyPage/>} />
        <Route path='/job' element={<JobDescPage/>} />
        <Route path='/posted-job' element={<PostedJobPage/>} />
        <Route path='/job-history' element={<JobHistoryPage/>} />
        <Route path='/apply-job' element={<ApplyJobPage/>} />
        <Route path='/post-job' element={<PostJobPage/>} />
        <Route path='/talent-profile' element={<TalentProfilePage/>} />
        <Route path='*' element={<HomePage/>}/>
      </Routes>
      <Footer/>
      </div>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
