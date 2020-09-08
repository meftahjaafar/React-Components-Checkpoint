import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Layout } from './Component/Profile/Layout';
import { Address } from './Component/Profile/Address';
import { ProfilePhoto } from './Component/Profile/ProfilePhoto';
import { FullName } from './Component/Profile/FullName';


//import './Style.css';

function App() {
  return (
    <React.Fragment>
      <Layout />
      <ProfilePhoto />
      <FullName />
      <Address />
    </React.Fragment>
  );
}

export default App;
