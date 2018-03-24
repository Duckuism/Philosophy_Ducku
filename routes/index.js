
module.exports = function(app, User, Board){

	// --- USER ROUTE START ---
	// GET ALL MEMBERS
	app.get('/api/users', (req, res) => {
		User.find(function(err, users){
			if(err) return res.status(500).send({error: 'database failure'});
			res.json(users);
		});
	});

	// GET SINGLE USER
	app.get('/api/users/:user_id', (req, res)=>{
		User.findOne({_id: req.params.user_id}, (err, user)=>{
			if(err) return res.status(500).json({error: err});
			if(!user) return res.status(400).json({error: 'user not found'});
			res.json(user);
		})
	})

	// CREATE USER
	app.post('/api/users', (req, res) => {
		const user = new User();
		user.name = req.body.name;
		user.password = req.body.password;
		user.email = req.body.email;
		user.phoneNumber = req.body.phoneNumber;
		user.published_date = new Date(req.body.published_date);

		user.save(function(err){
			if(err){
				console.err(err);
				res.json({result: 0});
				return;
			}

			res.json({result: 1});
		});
	})

	// UPDATE THE USER
	app.put('/api/users/:user_id', (req, res)=>{
		User.findById(req.params.user_id, (err, user) => {
			if(err) return res.status(500).json({error: 'database failure'});
			if(!user) return res.status(404).json({error : 'user not found'});

			if(req.body.name) user.name = req.body.name;
			if(req.body.password) user.password = req.body.password;
			if(req.body.email) user.email = req.body.email;
			if(req.body.phoneNumber) user.phoneNumber = req.body.phoneNumber;
			if(req.body.published_date) user.published_date = req.body.published_date;

			user.save((err)=>{
				if(err) res.status(500).json({error: 'failed to update'});
				res.json({message: 'user updated'});
			})
		})
	})
	
	// DELETE USER
	app.delete('/api/users/:user_id', (req, res)=>{
		User.remove({_id: req.params.user_id}, (err, output)=>{
			if(err) return res.status(500).json({error: "database failure"});
			res.status(204).end();
		})
	})
	// --- USER ROUTE END

	// --- BOARD ROUTE START --- 
	// GET ALL BOARDS
	app.get('/api/boards', (req, res) => {
		Board.find(function(err, boards){
			if(err) return res.status(500).send({error: 'database failure'});
			res.json(boards);
		});
	});
	// GET SINGLE BOARDS
	app.get('/api/boards/:board_id', (req, res) => {
		Board.findOne({_id: req.params.board_id}, (err, board)=>{
			if(err) return res.status(500).json({error: err});
			if(!board) return res.status(400).json({error: 'board not found'});
			res.json(board);
		})
	})
	// CREATE BOARD
	app.post('/api/boards', (req, res) => {
		const board = new Board();
		board.title = req.body.title;
		board.writer = req.body.writer;
		board.content = req.body.content;
		board.published_date = new Date(req.body.published_date);

		board.save(function(err){
			if(err){
				console.err(err);
				res.json({result: 0});
				return;
			}

			res.json({result: 1});
		});
	})
	// UPDATE THE BOARD
	app.put('/api/boards/:board_id', (req, res)=>{
		Board.findById(req.params.board_id, (err, board) => {
			if(err) return res.status(500).json({error: 'database failure'});
			if(!board) return res.status(404).json({error : 'board not found'});

			if(req.body.title) board.title = req.body.title;
			if(req.body.writer) board.writer = req.body.writer;
			if(req.body.content) board.content = req.body.content;			
			if(req.body.published_date) board.published_date = req.body.published_date;

			board.save((err)=>{
				if(err) res.status(500).json({error: 'failed to update'});
				res.json({message: 'board updated'});
			})
		})
	})
	// DELETE BOARD
	app.delete('/api/boards/:board_id', (req, res)=>{
		Board.remove({_id: req.params.board_id}, (err, output)=>{
			if(err) return res.status(500).json({error: "database failure"});
			res.status(204).end();
		})
	})
	// --- BOARD ROUTE END ---
}