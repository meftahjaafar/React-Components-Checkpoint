import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import quote from '../quote.jpg';
import styled from 'styled-components';
const Styles = styled.div`
  .card-img-top{
    width: 300px;
  }
`;

export const  FullName = () => {
    return (
<div class="container">
<div class="card">
<div class="row">
<div class="col">
  <Styles>
  <img class="card-img-top"  src={quote} alt="Card image cap"/>
  </Styles>
</div>
<div class="col">
<div class="card-body">
<h4 class="card-title"><a>Full Name</a></h4>
<p class="card-text"><h5>Meftah Jaâfar</h5></p>
<a href="#" class="btn btn-primary">Contact </a>
</div>
</div>
</div>
</div>
</div>
    )
}
