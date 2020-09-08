import React from 'react';
import avatar from '../avatar.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
const Styles = styled.div`
  .myAvatar{
    width: 300px;
    border-radius: 50%;  
  }
`;

export const  ProfilePhoto = () => {
    return (
<div class="container">
<div class="card">
<div class="row">
<div class="col">
  <Styles>
  <img class="card-img-top"  src={avatar} alt="Card image cap"/>
  </Styles>
</div>
<div class="col">
<div class="card-body">
<h4 class="card-title"><a>Profile Photo</a></h4>
<p class="card-text"><h5>Meftah Jaâfar</h5></p>
</div>
</div>
</div>
</div>
</div>
    )
}
