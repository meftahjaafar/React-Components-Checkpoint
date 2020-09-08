import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import cover from '../address.jpg';
import styled from 'styled-components';
const Styles = styled.div`
  .card-img-top{
    width: 300px;
  }
`;
export const  Address = () => {
    return (
<div class="container">
<div class="card">
<div class="row">
<div class="col">
  <Styles><img class="card-img-top"  src={cover} alt="Card image cap"/></Styles>
</div>
<div class="col">
    <div class="card-body">
    <h4 class="card-title"><a>Address</a></h4>
    <p class="card-text"><h5>Independence Street, Bardo, Tunis</h5></p>
    <a href="#" class="btn btn-primary">Google Maps +</a>
  </div>
  </div>
</div>
</div>
</div>
    )
}
