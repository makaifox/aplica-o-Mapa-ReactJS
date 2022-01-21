import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import "./ImLucky.css";
import GasPump from './gas-pump-solid.svg';

export interface ButtonProps { }
function ImLucky() {
  return <div className="d-grid gap-2">
    <Button size="lg" className='Mainbtn'>
      <img src={GasPump} className='gas'></img>
      Estou com sede!
    </Button>

  </div>


}

export default ImLucky;
