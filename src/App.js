import './App.css';
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoItem from './component/TodoItem'
import {useState} from 'react'

function App() {

  let items = [
    {
      content: '리액트 공부',
      done: false
    },
    {
      content: '웹디자인 공부',
      done: false
    },
    {
      content: '깃 공부',
      done: false
    },
    {
      content: '피그마 공부',
      done: false
    },
    {
      content: '카운터 앱 만들기',
      done: true
    },
    {
      content: '코딩애플 강좌 듣기',
      done: true
    },
    {
      content: '블로그 앱 만들기',
      done: true
    },
    {
      content: '감정 일기장 만들기',
      done: false
    },
  ];

  let [todoItems, setTodoItems] = useState(items);

  return (
    <div className="App">
      <Header />
      <TodoEditor 
        todoItems = {todoItems}
        setTodoItems = {setTodoItems}
      />


      <div className='TodoList'>
        <h2>Todo List 🌱</h2>
        {
          todoItems.map((todoItem, i)=>{
            return (
              todoItem.done ? null : 
              <TodoItem 
                todoItems={todoItems} 
                todoItem={todoItem} 
                setTodoItems = {setTodoItems}
                i={i}
              /> 
            );
          })
        }
      </div>

      <div className='DoneList'>
        <h2>Done List 😋</h2>
        {
          todoItems.map((todoItem, i)=>{
            return (
              todoItem.done ? 
              <TodoItem 
                todoItems={todoItems} 
                todoItem={todoItem} 
                setTodoItems = {setTodoItems}
                i={i}
              /> : null
            );
          })
        }
      </div>

      <div className='SearchItems'>
        <h2>Search Todos 🐾</h2>
        <input placeholder='검색어를 입력해보세용' className='SearchBar' onChange={(e)=>{
          let search = e.target.value
          return(
            (search in todoItems.content) ?
            <TodoItem 

            /> : null
          );
        }}/>
      </div>

      <div className='Footer'>
        <p>@ 2023.06.27 | Jihae Kim</p>
      </div>
    </div>
  );
}

export default App;
