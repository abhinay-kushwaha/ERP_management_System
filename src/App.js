
import { Outlet } from 'react-router-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Popup from './popup.js'


import Loginpage from './Loginpage.js'
import LoginOne from './LoginOne.js'
import ForgotPass from './forgotPass.js';
import ForgotOtp from './forgotOtp.js'
import ChangePass from './changePass.js'


import Header from './header.js'
import Sidebar from './sidebar.js'
import SidebarEmployees from './SidebarEmployees.js'
import SidebarEmployees1 from './SidebarEmployees1.js'
import Dashboard from './dashboard.js'
import Meetinglist from './meetinglist.js'
import AddEmp from './addEmp.js';
import ThreeDot from './threeDot.js';
import EditEmp from './editEmp.js';
import DeleteEmp from './deleteEmp.js';
import AddEmpChangepass from './addEmpChangepass.js';
import SidebarDevice from './sidebarDevice.js';
// import SidebarDevice1 from './sidebarDevice1.js';
import DeviceAddD from './deviceAddD.js';
import Dashboard1 from './Dashboard1.js';
import DeviceAssign from './deviceAssign.js';
import DeviceDelete from './deviceDelete.js';
import AssignEdit from './assignEdit.js';
import DeviceAssignAssign from './deviceAssignAssign.js';
import Layout from './Layout.js';
import Main from './Main.js';
import Validation from './validation.js';
// import Nav from './nav.js'
// import Home from './home.js'
// import About from './about.js'
// import Contact from './contact.js'

function App() {
  return (
    <div className="ome-one">
      {/* <Header/> */}
      {/* <SidebarEmployees/> */}
      <Routes>


          <Route index element={<Loginpage/>} />
          <Route path='/ForgotPass' element={<ForgotPass/>} />
          <Route path='/ForgotOtp' element={<ForgotOtp/>} />
          <Route path='/ChangePass' element={<ChangePass/>} />
          <Route path='/ChangePass' element={<ChangePass/>} />

          
              <Route path='/mainpage' element={<Layout><Main /></Layout>}></Route>
              <Route path='/dashboard' element={<Layout><Dashboard /></Layout>}></Route>
              <Route path='/employee' element={<Layout><SidebarEmployees /></Layout>}></Route>
              <Route path='/sidebarDevice' element={<Layout><SidebarDevice /></Layout>}></Route>
          
          {/* <Route path='/ChangePass' element={<ChangePass/>} /> */}
          


          {/* <Route index element={<Header/>} />
            <Route path='/SidebarEmployees' element={<SidebarEmployees/>} />
            <Route path='/SidebarDevice' element={<SidebarDevice/>} /> */}
            


      </Routes>
    {/* <Outlet/> */}
      {/* <h1>Router</h1>
      <Nav/> */}

      {/* { <Validation/> }  */}
      {/* { <Popup/> }  */}
      
      {/* <Loginpage/> */}
      {/* <LoginOne/> */}
      {/* <ForgotPass/> */}
      {/* <ForgotOtp/> */}
      {/* <ChangePass/> */}
      {/* <Sidebar/> */}
      {/* <Dashboard/> */}
    {/* <Meetinglist/> */}

      
    {/* <Dashboard1/>  */}
      {/* <Header/> */}
      {/* <Sidebar/> */}

      {/* <SidebarEmployees/> */}
      {/* <SidebarEmployees1/> */}
      {/* <AddEmp/>
      <ThreeDot/>
      <EditEmp/>
      <DeleteEmp/>
      <AddEmpChangepass/> */}

      {/* <SidebarDevice/> */}
      {/* <SidebarDevice1/> */}
      {/* <DeviceAddD/>
      <DeviceAssign/>
      <DeviceDelete/>
      <AssignEdit/>
      <DeviceAssignAssign/> */}

    </div>
  );
}

export default App;
