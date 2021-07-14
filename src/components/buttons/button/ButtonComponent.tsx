import React from 'react';
import './buttonComponent.css';

interface Props {
   symbol: string;
   onButtonPress: (symbol: string) => void;
}

const ButtonComponent: React.FC<Props> = ({ symbol, onButtonPress }) => {
   const OPERATIONS = ['x', '-', '+', '/', '^'];

   let buttonStyle = {
      backgroundColor: '#d4d4d4',
   };

   if (OPERATIONS.includes(symbol)) {
      buttonStyle.backgroundColor = '#fff672';
   }

   return (
      <div
         style={buttonStyle}
         className="button"
         onClick={() => onButtonPress(symbol)}
      >
         <p>{symbol}</p>
      </div>
   );
};

export default ButtonComponent;
