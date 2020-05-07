import React from "react";

const Futer = () => (

<div className="fixed-bottom btn-primary">
    <p className="text-justify">Ovo je futer gde sam primenio bootstrap i klase red i kolone</p>
        <hr/>
<div className="row container ">      
        <div className="col-md-4">
          <p className="text-left">Left aligned text on all viewport sizes.</p>
        </div>
        <div className="col-md-4">
           <p className="text-center">Center aligned text on all viewport sizes.</p>
        </div>
        <div className="col-md-4">
          <p className="text-right">Right aligned text on all viewport sizes.</p>
        </div>      
      </div>
</div>   
);

export default Futer;