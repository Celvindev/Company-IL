import React from 'react';
import "../../pages/team/Team.css";
import "@fortawesome/fontawesome-free/css/all.css";


function Contxtt1() {
  return (
    <div className="team-heading mt-10">
      <h1><span>Team Members:</span> Technology, Innovation, Research & Development Company.</h1>
      <h3> Excepteur sint occaecat  </h3>
      <p>
        Cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
      </p>
      <details className="dropdown mt-8">
        <summary className="m-1 btn btcat btn-outline w-[150px] rounded-full font-normal">Category <i className="fas fa-chevron-down"></i></summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </details>
    </div>
  );
}

export default Contxtt1;
