import "./Heroimage2Styles.css"

import React, { Component } from 'react'

class Heroimage2 extends  Component {
    render() {
       return (
         <div className="hero-img">
             <div className="heading">
                 <h1>{this.props.heading}</h1>
                 <p>{this.props.text}</p>
             </div>
         </div>
  )
}
}
export default Heroimage2

// import React, { Component, createRef } from 'react';
// import './Heroimage2Styles.css';

// class Heroimage2 extends Component {
//   constructor(props) {
//     super(props);
//     this.heroRef = createRef();
//     this.state = {
//       isVisible: false,
//     };
//   }

//   componentDidMount() {
//     const observerOptions = {
//       threshold: 0.1, // Trigger when 10% of the component is visible
//     };

//     this.observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         this.setState({ isVisible: entry.isIntersecting });
//       });
//     }, observerOptions);

//     this.observer.observe(this.heroRef.current);
//   }

//   componentWillUnmount() {
//     if (this.observer && this.heroRef.current) {
//       this.observer.unobserve(this.heroRef.current);
//     }
//   }

//   render() {
//     return (
//       <div
//         ref={this.heroRef}
//         className={`hero-img ${this.state.isVisible ? 'visible' : 'hidden'}`}
//       >
//         <div className="heading">
//           <h1>{this.props.heading}</h1>
//           <p>{this.props.text}</p>
//         </div>
//       </div>
//     );
//   }
// }

// export default Heroimage2;
