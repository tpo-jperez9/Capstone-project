import React from "react";
import Movie from "./Movie";

function PremiereList(props) {
  const data = props.data;
  let titles = data
  console.log(typeof titles)
  
  

  return (  
  <React.Fragment>
    <ul>
      <li>{titles[0]}</li>
      <li>{titles[1]}</li>
      <li>{titles[2]}</li>
      <li>{titles[3]}</li>
      <li>{titles[4]}</li>
    </ul>

  </React.Fragment>
  );
}

export default PremiereList;
