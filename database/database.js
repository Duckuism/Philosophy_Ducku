const mongoose = require('mongoose');

//database 객체에 db, schema, model 모두 추가
const database = {};

database.init = (app, config)=>{
	console.log('called init() method');
	connect(app, config);
}

//데이터베이스에 연결하고 응답객체(res)의 속성으로 db객체 추가
database.connect = (app, config) => {
	console.log('called connect() method');
}

//config에 정의한 스키마 및 모델 객체 생성
database.createSchema = (app, config) => {
	const schemaLen = config.db_schemas.length;
	console.log('데이터 베이스 설정에 정의된 스키마의 수 : %d ', schemaLen);

	for(let i = 0; i<schemalen; i++){
		const curItem = config.db_schemas[i];

		//모듈 파일에서 모듈을 불러온 후 createSchema() 함수 호출
		const curSchema = require(curItem.file).createSchema(mongoose);
		console.log('%s 모듈을 불러들인 후 스키마 정의함');

		//User 모델 정의
		const curModel = mongoose.model(curItem.collection, curSchema);
		console.log('%s 컬렉션을 위해 모델 정의함', curItem.collection);

		//database 객체에 속성으로 추가
		database[curItem.schemaName] = curSchema;
		database[curItem.modelName] = curModel;
		console.log('스키마 이름[%s], 모델 이름[%s]이 database 객체의 속성으로 추가됨',
					curItem.schemaName, curItem.modelName);
	}

	app.set('database', database);
	console.log('database 객체가 app 객체의 속성으로 추가됨');
}

//database 객체를 module.exports에 할당
module.exports = database;