module.exports = {
	server_port : 5000,
	db_url:'mongodb://localhost:27017/local',

	//file : 스키마 파일을 지정
	//collection : 데이터 베이스의 컬렉션 이름을 지정
	//schemaName : 스키마 파일을 불러들인 후 반환된 객체를 어떤 속성 이름으로 할 것인지 지정
	//modelName : 스키마에서 모델 객체를 만든 후 어떤 속성 이름으로 할 것인지 지정
	db_schemas:[
		{file:'./user_schema', collection:'users', schemaName: 'UserSchema',
		modelName: 'UserModel' }
	],
	route_info:[
	]
}