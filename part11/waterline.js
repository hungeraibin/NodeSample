var Waterline = require('waterline')
var mysqlAdapter = require('sails-mysql')
var mongoAdapter = require('sails-mongo')

// 适配器配置
var adapters = {
  mongo: mongoAdapter,
  mysql: mysqlAdapter,
  default: 'mongo'
}

// 连接配置
var connections = {
  mongo: {
    adapter: 'mongo',
    url: 'mongodb://localhost/waterline-sample'
  },
  mysql: {
    adapter: 'mysql',
    url: 'mysql://root:@localhost/waterlinesample'
  }
}

// 数据集合
var User = Waterline.Collection.extend({
  identity: 'user',
  connection: 'mongo',
  schema: true,
  attributes: {
    username: {
      type: 'string',
      required: true
    },
    birthday: {
      type: 'date',
      after: new Date('1990-01-01'), // 校验器
      before: function() {
        return new Date()
      }
    },
    createTime: {
      type: 'date'
    }
  },
  beforeCreate: function(value, cb) {
    value.createTime = new Date()
    console.log('beforeCreate executed')
    return cb 
  }
})


var orm = new Waterline()

// 加载数据集合
orm.registerModel(User)

// 初始化ORM 传入配置
var config = {
  adapters: adapters,
  datastores: connections
}

orm.initialize(config, function(err, models) {
  if (err) {
    console.log('orm initialize failed.', err)
    return
  }

  console.log('models:', models)

  models.collections.user.create({username: 'Aibin'}, function(err, user) {
    console.log('after user.create, err, user', err, user)
  })
})