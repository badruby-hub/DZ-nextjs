import { useState, useCallback } from 'react';
import { Form } from './Form';
import { List } from './List';
import { ToDoItem } from './Item';
import { DEL_COMPLETED_ACTION, DELETE_ACTION, TOGGLE_CHECKBOX_ACTION } from './consts';


export function ToDoApp2() {
  console.debug('ToDoApp render');
  const
    [list, setList] = useState([new ToDoItem('дело 1'), new ToDoItem('дело 2')]),
    onClick = event =>{
      const 
      action = event.target.closest('[data-action]')?.dataset?.action,
      id = +event.target.closest('li[data-id]')?.dataset?.id ;
      console.debug('Form onClick',action,id);
      switch (action) {
        case DELETE_ACTION:
          setList(old => old.filter(item => id !== item.id))
          break;
          case TOGGLE_CHECKBOX_ACTION:
            {
              const 
              index = list.findIndex(item => id === item.id),
              element = list[index];
            
               if (element instanceof ToDoItem) 
            setList(list.with(index, element?.toggle()));
            break;
}
            case DEL_COMPLETED_ACTION:
            setList(old=>old.filter(item => !item.checked))
      }
    },
    addItem = useCallback(text => setList(old => [...old, new ToDoItem(text)]),[]);

  return <fieldset onClick={onClick}>
    <legend>App</legend>
    <Form addItem={addItem } />
    <List list={list}/>
  </fieldset>
}