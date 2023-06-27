import {useState} from 'react';

function TodoEditor(props){
  let [newTodo, setNewTodo] = useState('')
  return(
    <div className='TodoEditor'>
      <h2>새로운 Todo 작성하기 🖌️</h2>
      <div className='editor-wrapper'>
        <input placeholder='할일을 입력해주세용' onChange={(e)=>{
          newTodo = e.target.value;
        }}/>
        <button className='positive' onClick={()=>{
          let addedTodoItems=[...props.todoItems];
          addedTodoItems.unshift({content: newTodo, done: false});
          props.setTodoItems(addedTodoItems);
        }}>추가</button>
      </div>

    </div>
  )
}

export default TodoEditor;