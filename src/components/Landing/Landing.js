import React from "react";
import "./Landing.css";


const Landing = () => (

  <div>
    
    <div className="Buttons">
    <h2>
        welcome
    </h2>
    <br></br>
     
    </div>
  </div>
);

export default Landing;

// class Landing extends React.Component {
//   // state = { active: 0}

//   // componentDidMount() {
//   //   window.addEventListener("scroll", this.handleScroll);
//   // }

//   // componentWillUnmount() {
//   //   window.removeEventListener("scroll", this.handleScroll);
//   // }

//   // handleScroll = event => {
//   //   const { pageYOffset } = window;
//   //   const { active } = this.state;

//   //   if (pageYOffset >= 10 && active === 0) {
//   //     this.setState({ active: 1});
//   //   } else if (pageYOffset < 10 && active === 1) {
//   //     this.setState({ active: 0 })
//   //   }
//   // };
  
//   render() {
//     // const { active } = this.state;

//     let page = this.props.location.pathname.substr(1);
//     if (!page) page = 'home';

//     return(
//       <div>
//        <ReactCSSTransitionGroup
//           transitionName="background"
//           transitionEnterTimeout={1000}
//           transitionLeaveTimeout={1000}
//         >
//           <BackgroundImage page={page} key={page} />
//         </ReactCSSTransitionGroup>
//       </div>
      
//       // <div style={{ height: 100, width: 100 }}>
//       //   <div
//       //     style={{
//       //       height: "100%",
//       //       width: "100%",
//       //       backgroundColor: "red",
//       //       display: active === 0 ? "block" : "none"
//       //     }}
//       //   />
//       //   <div
//       //     style={{
//       //       height: "100%",
//       //       width: "100%",
//       //       backgroundColor: "blue",
//       //       display: active === 1 ? "block" : "none"
//       //     }}
//       //   />
//       // </div>

//     );
//   }
// }

