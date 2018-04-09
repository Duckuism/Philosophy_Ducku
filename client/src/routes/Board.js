
import React, { Component } from 'react';
import BoardFrame from '../components/BoardFrame';
import * as service from "../services/board";

const propTypes = {

};

const defaultProps = {

};
    
class Board extends Component {

    constructor(props) {
        super(props);
        
        //초기값 설정
        this.state={
        	boardId: null,
        	fetching: false,
        	board:{
        		title: null,
        		writer: null,
        		content: null
        	},
            boards: [{}]
        };
    }

    //read information of certain one board
	fetchBoardInfo = async (boardId) => {

		this.setState({
			fetching: true
		})

		const board = await Promise.all([
			service.getBoard(boardId)
		])

		// console.log(board);

		const {title, writer, content} = board[0].data;
        
        //데이터를 받아온 후 state 변경
		this.setState({
			boardId,
			board: {
				title,
				writer,
				content
			},        
			fetching: false
		})
	}

    //read information of all boards
    fetchAllBoardInfo = async () =>{
        this.setState({
            fetching: true
        })

        const boards = await Promise.all([
            service.getBoards()
        ])    
        
        this.setState({
            boards: boards[0].data,
            fetching: false
        })

    }

    //create new board
    fetchCreateBoard = async() =>{
        this.setState({
            fetching: true
        })

        const board = await Promise.all([
            service.createBoard()
        ])

        this.setState({
            fetching: true
        })
    }

    //update certain board by ID
    fetchUpdateBoard = async(boardId) =>{
        this.setState({
            fetching: true
        })

        const board = await Promise.all([
            service.updateBoard(boardId)
        ])

        this.setState({
            fetching: true
        })
    }

    //delete certain board by ID
    fetchDeleteBoard = async(boardId) =>{
        this.setState({
            fetching: true
        })

        const board = await Promise.all([
            service.deleteBoard(boardId)
        ])

        this.setState({
            fetching: true
        })
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

    	// this.fetchBoardInfo("5aba3be49dc4bb0d5a9e8cfb");
        this.fetchAllBoardInfo();
    		    		
    }

    render() {
        
		const {boardId, fetching, board, boards} = this.state;

        return(
		    <div className="ContentBox">
		    	<BoardFrame
				boardId = {boardId}
            	fetching = {fetching}
            	title = {board.title}
            	writer = {board.writer}
            	content = {board.content}
                boards = {boards}
		    	/>
		    </div>            
        );
    }
}

Board.propTypes = propTypes;
Board.defaultProps = defaultProps;
    
export default Board;