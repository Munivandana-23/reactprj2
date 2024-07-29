import React, { useState } from 'react';
import './Checkbmi.css'
 
export default function App() {
  const [bmi, setBmi] = useState(null);
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
 
  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };
 
  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };
 
  const calculateBMI = () => {
    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height);
 
    if (isNaN(weightValue) || isNaN(heightValue) || heightValue === 0) {
      setBmi('Invalid input');
      return;
    }
 
    const calculatedBMI = (weightValue * 10000) / (heightValue * heightValue);
    setBmi(calculatedBMI.toFixed(2));
  };
 
  return (
    <div className='box8'>
      <>
    <div className='box5'>
      <h1 className='one'>Check Your BMI</h1>
      <div className='a'>
        <input type='number'className='b'placeholder='Enter Your Weight (kg)'value={weight} onChange={handleWeightChange}/>
        <input type='number'className='b'placeholder='Enter Your Height (cm)'value={height} onChange={handleHeightChange} />
        <button className='c' onClick={calculateBMI}>Calculate BMI</button>
      </div>
      {bmi !== null && (
        <h2 className='d'>Your BMI: {bmi}</h2>
      )}
      <img src="https://ak.picdn.net/shutterstock/videos/28438561/thumb/1.jpg" alt='Fitness' className='e' />
    </div>
    </>
    </div>
  );
}