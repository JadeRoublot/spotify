import React from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';



const getListStyle = (isDraggingOver: boolean) => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
});

const main = () => {
    const dispatch = useDispatch();
  
    

    return (
        <div className="todo-list-redux">
           
          
        </div>
    );
};

export default main;
