import React, { Component } from 'react';
import * as service from "../services/board";


  //1. 몽고 db에서 list 조회

  //2. 게시판 컴포넌트를 만들고 새로운 데이터를 몽고db에 생성

  //3. 특정 id를 가진 데이터 수정

  //4. 특정 id를 가진 데이터 삭제


const propTypes = {

};

const defaultProps = {

};
    
class BoardFrame extends Component {

    constructor(props) {
        super(props);

        this.state={
        	list: [],
        };
    }


	fetchBoardInfo = async (boardId) => {
		const board = await service.getBoard(boardId);
		console.log(board);
	}

    componentDidMount(){
    	// fetch('http://localhost:3000/board')
    	// 	.then(results => {
    	// 		return results.json();
    	// 	}).then(data => {
    	// 		let boards = data.map((board) => {
    	// 			return(
					// 	<div key={board._id}>
					// 		{board.title}					
					// 	</div>
    	// 			)
    	// 		})
    	// 		this.setState({boards: boards});
    	// 		console.log("state", this.state.boards)
    	// 	})
    	this.fetchBoardInfo("5aba3be49dc4bb0d5a9e8cfb");
    		    		
    }

    render() {
    	
        return(
            <div>
            	{this.state.boards}
            </div>
        );
    }
}

BoardFrame.propTypes = propTypes;
BoardFrame.defaultProps = defaultProps;
    
export default BoardFrame;