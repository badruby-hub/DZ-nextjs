import { memo, useCallback } from 'react';
import { Button } from './Button';

export const Item = memo(function ({ item, delItem, toggleCheckbox }) {
  console.debug('Item render id=', item);
  const
    { id, checked, text } = item,
    onClick = useCallback(() => delItem(id),[]);
  return <li>
    <input type="checkbox" value={checked} onChange={() => toggleCheckbox(id)} />
    <span>{text}</span>
    <Button onClick={onClick}>❌</Button>
    {checked && '💹'}
  </li>
});


export class ToDoItem {
  checked = false;
  id = Math.random();

  constructor(text) {
    Object.assign(this, { text });
  }

  toggle() {
    const
      neo = new ToDoItem();
    Object.assign(neo, this);
    neo.checked = !neo.checked;
    return neo;
  }
}