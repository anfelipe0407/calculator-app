import React from 'react';
import './displayScreenComponent.css';

interface Props {
   operation: string;
   result: number;
}

const DisplayScreenComponent: React.FC<Props> = ({ operation, result }) => {
   return (
      <div className="screenDiv">
         <small className="result-text">{result}</small>
         <p className="operation-text">{operation}</p>
      </div>
   );
};

export default DisplayScreenComponent;
