import React from 'react';
import ButtonComponent from './button/ButtonComponent';
import './buttonsComponent.css';

interface Props {
   onButtonPress: (symbol: string) => void;
}

const ButtonsComponent: React.FC<Props> = ({ onButtonPress }) => {
   return (
      <div className="buttons-container">
         <ButtonComponent symbol="C" onButtonPress={onButtonPress} />
         <ButtonComponent symbol="del" onButtonPress={onButtonPress} />
         <ButtonComponent symbol="^" onButtonPress={onButtonPress} />
         <ButtonComponent symbol="/" onButtonPress={onButtonPress} />
         <ButtonComponent symbol="7" onButtonPress={onButtonPress} />
         <ButtonComponent symbol="8" onButtonPress={onButtonPress} />
         <ButtonComponent symbol="9" onButtonPress={onButtonPress} />
         <ButtonComponent symbol="x" onButtonPress={onButtonPress} />
         <ButtonComponent symbol="4" onButtonPress={onButtonPress} />
         <ButtonComponent symbol="5" onButtonPress={onButtonPress} />
         <ButtonComponent symbol="6" onButtonPress={onButtonPress} />
         <ButtonComponent symbol="-" onButtonPress={onButtonPress} />
         <ButtonComponent symbol="1" onButtonPress={onButtonPress} />
         <ButtonComponent symbol="2" onButtonPress={onButtonPress} />
         <ButtonComponent symbol="3" onButtonPress={onButtonPress} />
         <ButtonComponent symbol="+" onButtonPress={onButtonPress} />
         <ButtonComponent symbol="0" onButtonPress={onButtonPress} />
         <ButtonComponent symbol="." onButtonPress={onButtonPress} />
         {/* <ButtonComponent symbol="=" onButtonPress={onButtonPress} /> */}
      </div>
   );
};

export default ButtonsComponent;
