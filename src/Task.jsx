import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';


const Container = styled.div`
border-radius: 2px;
border: 1px solid lightgrey;
padding: 9px;
margin-bottom: 9px;
background-color: white;
`

export default class Task extends React.Component {
  render() {
    return  <Draggable draggableId={this.props.task.id} index={this.props.index}>
         {
           (provided) => ( <Container
            {...provided.draggableProps} 
            {...provided.dragHandleProps} 
            ref={provided.innerRef}
           > { this.props.task.content } 
           </Container> )
         }

    </Draggable>
  }
}
