import React, { useState, useReducer, Reducer } from 'react';
import './mainComponent.css';

import ButtonsComponent from '../buttons/ButtonsComponent';
import DisplayScreenComponent from '../displayscreen/DisplayScreenComponent';
import { useEffect } from 'react';

type Action = {
   type: 'number' | 'operation' | 'erase' | 'clear' | 'calculate';
   symbol?: string;
};

interface InitialState {
   operationResult: string;
}

const reducer: Reducer<InitialState, Action> = (state, action) => {
   switch (action.type) {
      case 'number':
         return { operationResult: state.operationResult + action.symbol };
      case 'operation':
         return { operationResult: state.operationResult + action.symbol };
      case 'erase':
         return {
            operationResult: state.operationResult.substring(
               0,
               state.operationResult.length - 1
            ),
         };
      case 'clear':
         return { operationResult: '' };
      case 'calculate':
         return state;
      default:
         return state;
   }
};

const initialState: InitialState = {
   operationResult: '',
};

const MainComponent: React.FC = () => {
   const [currentOperation, dispatch] = useReducer(reducer, initialState);
   const [result, setResult] = useState(0);

   const NUMBERS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
   const OPERATIONS = ['x', '-', '+', '/', '^'];

   useEffect(() => {
      if (currentOperation.operationResult === '') {
         setResult(0);
         return;
      }

      if (checkValidOperation()) {
         const operationMap = mapOperation();
         const result = eval(operationMap.join(' '));
         setResult(result);
      }
   }, [currentOperation.operationResult]);

   const updateOperation = (symbol: string): void => {
      if (NUMBERS.includes(symbol)) {
         dispatch({ type: 'number', symbol });
         // console.log('numero');
         return;
      }

      if (OPERATIONS.includes(symbol)) {
         dispatch({ type: 'operation', symbol });
         // console.log('operacion');
         return;
      }

      if (symbol === 'del') {
         dispatch({ type: 'erase' });
         return;
      }

      if (symbol === '=') {
         dispatch({ type: 'calculate' });
         // console.log('calculate');
         return;
      }

      if (symbol === 'C') {
         dispatch({ type: 'clear' });
         // console.log('clear');
         return;
      }
   };

   const checkValidOperation = (): boolean => {
      const splitOperation = currentOperation.operationResult.split('');

      let canBeOperator = false;
      for (let i = 0; i < splitOperation.length; i++) {
         if (OPERATIONS.includes(splitOperation[i])) {
            if (!canBeOperator) return false;

            canBeOperator = false;
            continue;
         }

         if (NUMBERS.includes(splitOperation[i])) {
            canBeOperator = true;
            continue;
         }
      }

      return true;
   };

   const mapOperation = (): Array<string> => {
      const splitOperation = currentOperation.operationResult.split('');

      const operationsMap = [];
      let numberString = '';

      for (let i = 0; i < splitOperation.length; i++) {
         if (NUMBERS.includes(splitOperation[i])) {
            numberString += splitOperation[i];

            if (
               splitOperation[i + 1] &&
               OPERATIONS.includes(splitOperation[i + 1])
            ) {
               operationsMap.push(numberString);
            }

            if (!splitOperation[i + 1]) {
               operationsMap.push(numberString);
            }
         }

         if (OPERATIONS.includes(splitOperation[i])) {
            if (!splitOperation[i + 1]) continue;

            if (splitOperation[i] === 'x') {
               operationsMap.push('*');
               numberString = '';
               continue;
            }

            if (splitOperation[i] === '^') {
               operationsMap.push('**');
               numberString = '';
               continue;
            }

            operationsMap.push(splitOperation[i]);
            numberString = '';
         }
      }

      return operationsMap;
   };

   return (
      <div className="main">
         <DisplayScreenComponent
            operation={currentOperation.operationResult}
            result={result}
         />
         <ButtonsComponent onButtonPress={updateOperation} />
      </div>
   );
};

export default MainComponent;
