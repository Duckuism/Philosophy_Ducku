import React from 'react';

const BoardFrame = ({boardId, fetching, title, writer, content, boards}) => {
  console.log({boards},"in BoardFrame");
  console.log(boards,"in BoardFrame2");

  console.log(boards[0]);


  

  
  

  return (
    <div>
    	{boardId}
    	{fetching}
    	{title}
    	{writer}
    	{content}

    </div>

  )
}

export default BoardFrame;