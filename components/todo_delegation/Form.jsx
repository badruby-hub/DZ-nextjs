import { useState, memo, useCallback, useRef } from 'react'
import { Button } from './Button';
import { ADD_ACTION, DEL_COMPLETED_ACTION } from './consts';

export const Form = memo(function ({ addItem }) {
  const
    [value, setValue] = useState('-'),
    onClick = event => {
      const 
       action = event.target.closest('button[data-action]')?.dataset?.action;
       console.debug('Form onClick',action);
       switch (action) {
        case ADD_ACTION:
          addItem(value);
       
       }
    }

  console.debug('Form render', value);

  return <fieldset onClick={onClick}>
    <legend>Form</legend>
    <input value={value} onInput={event => setValue(event.target.value)} />
    <Button action={ADD_ACTION}>Add</Button>
    <hr/>
    <Button action={DEL_COMPLETED_ACTION}>Del copleted</Button>
  </fieldset>
});