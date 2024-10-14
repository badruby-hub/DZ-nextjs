import { memo} from 'react';
import { Button } from './Button';
import { DELETE_ACTION, TOGGLE_CHECKBOX_ACTION } from './consts';

export const Item = memo(function ({ item}) {
  console.debug('Item render id=', item);
  const
    { id, checked, text } = item;
  return <li data-id={id}>
    <input type="checkbox" value={checked} data-action={TOGGLE_CHECKBOX_ACTION}/>
    <span>{text}</span>
    <Button action={DELETE_ACTION}>❌</Button>
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