import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ActionButton() {
    const navigate = useNavigate();
  return (
    <div className='d-flex gap-2'>
      <Button style={{background:'#46139f'}} onClick={()=> navigate('/modal-a')}>Modal A</Button>
      <Button style={{background:'#ff7f50'}} onClick={()=> navigate('/modal-b')}>Modal B</Button>
      <Button style={{background:'white',border:'1px solid #46139f',color:'black'}} onClick={()=> navigate('/problem-2')}>
        Close
      </Button>
    </div>
  );
}

export default ActionButton;
