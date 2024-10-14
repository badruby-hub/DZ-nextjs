import { useState, memo, useCallback, useRef } from 'react'
import { Button } from './Button';

export const Form = memo(function ({ addItem }) {
  const
    ref = useRef(''),
    [value, setValue] = useState('-'),
    onClick = useCallback(() => addItem(ref.current), []);
  ref.current = value;
  console.debug('Form render', value);
  return <fieldset>
    <legend>Form</legend>
    <input value={value} onInput={event => setValue(event.target.value)} />
    <Button onClick={onClick}>Add</Button>
  </fieldset>
});