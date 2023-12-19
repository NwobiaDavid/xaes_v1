import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Frontpage from './components/Frontpage'
import SignUp from './components/SignUp'
import CampaignCreation from './components/CampaignCreation'
import CampaignCreation1 from './components/CampaignCreation1'
import CampaignCreation2 from './components/CampaignCreation2'
import Campaign from './components/Campaign'

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={<Frontpage/>} />
    {/* <Route exact path='/login' element={<Login/>} /> */}
    <Route exact path='/signup' element={<SignUp/>} />
    <Route exact path='/getxaes' element={<CampaignCreation/>} />
    <Route exact path='/getxaes1' element={<CampaignCreation1/>} />
    <Route exact path='/getxaes2' element={<CampaignCreation2/>} />
    <Route exact path='/campaign' element={<Campaign/>} />
    </Routes>
    </BrowserRouter>

    </>
    
  )
}

export default App
