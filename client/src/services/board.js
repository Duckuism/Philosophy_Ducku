import axios from 'axios';

export function getBoard(boardId){
	return axios.get("http://localhost:3000/api/boards/"+boardId);
}

export function getBoards(){
	return axios.get('http://localhost:3000/api/boards');
}

export function createBoard(){
	return axios.post('http://localhost:3000/api/boards');
}

export function updateBoard(boardId){
	return axios.put('http://localhost:3000/api/boards/'+boardId);
}

export function deleteBoard(boardId){
	return axios.delete('http://localhost:3000/api/boards/'+boardId);
}