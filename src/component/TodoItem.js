function TodoItem(props){
  return (
    <div className='TodoItem'>
      <input type="checkbox"  checked/>

      <h3>{props.todoItem.content}</h3>
      <p>{new Date().toLocaleDateString()}</p>

      <button className='negative' onClick={()=>{
        let copyTodoItems=[...props.todoItems];
        copyTodoItems.splice(props.i,1);
        props.setTodoItems(copyTodoItems)
      }}>삭제</button>
    </div>
  );
};

export default TodoItem;