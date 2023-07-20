import React from "react";
import { Draggable } from "react-beautiful-dnd";

interface Props {
  id: string;
  todos: Todo[];
  index: number;
}

const Column = ({ id, todos, index }: Props) => {
  return <h1></h1>;
  //   <Draggable draggableId="">

  //   </Draggable>;
};

export default Column;
