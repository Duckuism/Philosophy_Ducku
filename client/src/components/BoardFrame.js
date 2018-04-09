import React from 'react';

const BoardFrame = ({boardId, fetching, title, writer, content, boards}) => {
  console.log({boards},"in BoardFrame");
  console.log(boards,"in BoardFrame2");

  console.log(boards[0]);

  const oneBoard = boards.map(function(item, index, array){
    return (
      <div key={index}>
        {item.title}{item.writer}{item.content}
      </div>
    )
  }); 


  return (
    <div>
    	{boardId}
    	{fetching}
    	{title}
    	{writer}
    	{content}
      {oneBoard}
    </div>

  )
}

export default BoardFrame;