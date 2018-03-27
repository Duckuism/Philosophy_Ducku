import axios from 'axios';

export function getBoard(boardId){
	return axios.get('http://localhost:3000/api/boards/'+boardId);

}