import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
border-radius: 2px;
border: 1px solid lightgrey;
padding: 9px;
margin-bottom: 9px;
`

export default class Task extends React.Component {
  render() {
    return <Container>
   { this.props.task.content }
   </Container> 
  }
}
