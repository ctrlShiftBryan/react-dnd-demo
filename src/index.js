import '@atlaskit/css-reset';
import React from "react";
import { DragDropContext } from 'react-beautiful-dnd';
import ReactDOM from "react-dom";
import Column from './Column';
import initialData from './initial-data';

class App extends React.Component {
  state = initialData;

    onDragEnd = result => {
    //TODO reoder our column
    }

  render() {
    return  (
    <DragDropContext onDragEnd={this.onDragEnd}>
    { this.state.columnOrder.map((columnId) => {
          const column = this.state.columns[columnId];
          const tasks = column.taskIds.map(taskId => this.state.tasks[taskId])
          return <Column key={column.id} column={column} tasks={tasks} />;
    })}
    </DragDropContext>
    )
  }
}



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)

