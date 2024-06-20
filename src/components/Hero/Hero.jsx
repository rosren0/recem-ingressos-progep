import React from 'react';
import "../Hero/styles.css"
// import Spline from '@splinetool/react-spline';
import { SplineComp } from "../SplineComp/SplineComp"

 
export class Hero extends React.Component {
  render() {
    return (
		<div className="hero"> 

		<div className="hero-title">
		<h1 className="hero-title-part1">Sua jornada na UFC</h1>
		<h1 className="hero-title-part2">começa aqui.</h1>
		<button className='button-intro'>Inciar Jornada</button>
		 
		</div>

		<div className="animation"><SplineComp /></div>

		
	  </div>
	)
  }
}



const HeroPropTypes = {
	// always use prop types!
};

Hero.propTypes = HeroPropTypes;

