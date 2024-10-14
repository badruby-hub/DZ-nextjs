import { useState, useCallback } from 'react';
import { Form } from './Form';
import { List } from './List';
import { ToDoItem } from './Item';


export function ToDoApp() {
  console.debug('ToDoApp render');
  const
    [list, setList] = useState([new ToDoItem('дело 1'), new ToDoItem('дело 2')]),
    delItem = useCallback(id => setList(old => old.filter(item => id !== item.id)), []),
    toggleCheckbox = useCallback(id => setList(old => {
      const
        index = old.findIndex(item => id === item.id),
        element = old[index];
      return old.with(index, element.toggle());
    }), []),
    addItem = useCallback(text => setList(old => [...old, new ToDoItem(text)]),[]);

  return <>
    <Form addItem={addItem } />
    <List list={list} delItem={delItem} toggleCheckbox={toggleCheckbox} />
  </>
}