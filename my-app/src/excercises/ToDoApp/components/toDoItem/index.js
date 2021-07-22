import '../../App.css';
import {React} from 'react';

function ToDoItem(props){
    const {toDoList} = props;
    const {onChangeItemState} = props;

    const setState = (index,state) => {
        toDoList[index].state = state;
        onChangeItemState(toDoList);
    }

    return(
        <div className="item-container">
            {
            toDoList.map((item, index) => 
            item.state ?
                <div className="item">
                <div>
                    {item.value}
                </div>
                <div className={item.state == 1? 'state-incomplete':'state-complete'}>
                    {item.state == 1? 'Incomplete': 'Complete'}
                </div>
                </div>
                :
                <div className="item">
                <div className="item-label" >
                {item.value}
                </div>
                <div className="select-state">
                <div className="check-icon">
                    <div onClick={()=> setState(index, 2)}>Done</div>
                </div>
                <div className="times-icon">
                    <div onClick={()=> setState(index, 1)}>Undone</div>
                </div>
                </div>
            </div>
            )}
        </div>
    )
}
export default ToDoItem;