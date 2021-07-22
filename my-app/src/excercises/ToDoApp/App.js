import './App.css';
import React, { useState, useContext } from 'react';
import ToDoItem from './components/toDoItem';
import ToDoInput from './components/ToDoInput';


function App() {
  const [tabs, setTabs] = useState([
    {isActive:false, name:'Complete'},
    {isActive:true, name:'All'},
    {isActive:false, name:'Incomplete'}
  ])
  const [toDoList, setToDoList] = useState([
    {state:2, value:'Wake Up'}
  ])
  const [temporalToDoList, setTemporalToDoList] = useState(toDoList);


  const onSubmit = (toDoAdded) => {
    if(toDoAdded.trim() === '') return;
    const value = toDoAdded;
    setToDoList([
      ...toDoList,
      {state:0, value:value}
    ]);
    setTemporalToDoList([
      ...toDoList,
      {state:0, value:value}
    ]);
  }

  const onSelectTab = (event) => {
    const defaultTabs = [
    {isActive:false, name:'Complete',state:2},
    {isActive:false, name:'All'},
    {isActive:false, name:'Incomplete', state:1}
    ];
    const tabSelected = (element) => element.name === event.target.innerText;
    const indexTabSelected = defaultTabs.findIndex(defaultTabs.nane = tabSelected);
    defaultTabs[indexTabSelected].isActive = true;
    setTabs(defaultTabs);
    refreshItemList(defaultTabs[indexTabSelected].state)
  }

  const refreshItemList = (state) => {
    if(state){
      setTemporalToDoList(() => 
        toDoList.filter(item => item.state == state)
      )
    }else{
      setTemporalToDoList([...toDoList]);
    }
  }

  const changeToDoItemState = (newList) =>{
    setToDoList(newList);
    setTemporalToDoList(newList);
  }

  return (
    <div className="App">
      <div className="App-header">
        <div>
        <div className="title">
                To do list
            </div>
          {
            tabs[1].isActive ? <ToDoInput getToDoList={onSubmit}/> : ''
          }
          <div className="tabs-container">
            {tabs.map(tabsItem =>
              <div className={tabsItem.isActive?'active-tab':'desactive-tab'} onClick={onSelectTab}>
                {tabsItem.name}
              </div>
            )}
          </div>
          <ToDoItem toDoList={temporalToDoList} onChangeItemState={changeToDoItemState}/>
        </div>
      </div>
    </div>
  );
}

export default App;
