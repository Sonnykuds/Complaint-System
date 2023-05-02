
import './App.css';
import { Outlet, useNavigate } from 'react-router-dom';
import { Button, Layout, theme } from 'antd';
import { Header } from 'antd/es/layout/layout';
function App() {
  const {
    token: { colorPrimaryBg },
  } = theme.useToken();
  const navigate = useNavigate()
  const handleLoginClick = () => {
    navigate("/login")
  }
  const handleRegisterClick = () => {
    navigate("/register")
  }
  
  return (

      <Layout style={{
        minHeight: "100vh"}}
        className="flex"
      >
        <Header 
          style={{ backgroundColor: colorPrimaryBg}} 
          className=" flex items-center justify-end gap-5" 
        >  
          <Button onClick={handleLoginClick} className=" bg-blue-500" type='primary'>Login</Button>
          <Button onClick={handleRegisterClick} className=" bg-blue-500" type='primary'>Register</Button>
        </Header>
        <div className='flex items-center justify-center mt-10'>
          <img src='/Calbayog_City_seal_2.svg.png' width={500} alt="Calbayog Logo"/>
        </div>
        <Outlet />
      </Layout>
  );
}

export default App;
