'use strict'

const Sequelize = require('sequelize')

;(async () => {
  const sequelize = new Sequelize('RW', 'root', '314159', {
    dialect: 'mysql',
    database: 'rw',
    host: 'localhost',
    port: '3306',
    define: {
      timestamps: false
    }
  })


  // AUTH
  await sequelize.authenticate()
  console.log('Connection has been established successfully.')


  //  MODELS
  const User = sequelize.define('User', {
    username: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    password: Sequelize.STRING,
    email: Sequelize.STRING,
  })

  const Word = sequelize.define('Word', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    // 单词
    word: Sequelize.STRING,
    // 单词释义
    translate: Sequelize.STRING,
    // 单词集：CET4 / CET6
    wordSet: Sequelize.STRING,
  })

  const Book = sequelize.define('Book', {
    id: {
      type: Sequelize.INTEGER,
      references: {
        model: Word,
        key: 'id',
      },
      primaryKey: true,
    },
    username: {
      type: Sequelize.STRING,
      references: {
        model: User,
        key: 'username',
      },
      primaryKey: true,
    },
  })

  const Record = sequelize.define('Record', {
    id: {
      type: Sequelize.INTEGER,
      references: {
        model: Word,
        key: 'id',
      },
      primaryKey: true,
    },
    username: {
      type: Sequelize.STRING,
      references: {
        model: User,
        key: 'username',
      },
      primaryKey: true,
    },
    // time: {}
  })


  //  SYNC SCHEMA
  await sequelize.sync({
      force: true
    })

  console.log('Sync success')


  // SOME INIT RECORDS
  await User.bulkCreate([
    {
      username: "melody",
      password: "123456",
      email: "nubi@melody.pw",
    },
    {
      username: "kira",
      password: "123456",
      email: "kira@kira.cn",
    },
  ])

  await Word.bulkCreate([
    {
      word: "blank",
      translate: "adj. 空白的, 茫然的 n. 空白(处)，空隙，空虚",
      wordSet: "CET4",
    },
    {
      word: "relax",
      translate: "vi. 放松,松懈,松弛 vt. 放松,放宽(限制等)",
      wordSet: "CET4",
    },
    {
      word: "heel",
      translate: "n. 脚后跟 v. 倾侧",
      wordSet: "CET4",
    },
    {
      word: "ill",
      translate: "adj. 坏的,有病的,引起痛苦的,敌意的 n. 邪恶,不幸,祸害,坏话",
      wordSet: "CET4",
    },
    {
      word: "natural",
      translate: "adj. 自然的； 物质的； 天生的； 不做作的 n. 自然的事情",
      wordSet: "CET4",
    },
    {
      word: "breadth",
      translate: "n. 宽度",
      wordSet: "CET4",
    },
    {
      word: "twinkle",
      translate: "n. 闪烁,闪耀,眨眼,瞬息 v. 闪烁,使...闪耀,眨眼，迅速移动",
      wordSet: "CET4",
    },
    {
      word: "fence",
      translate: "n. 围墙, 剑术",
      wordSet: "CET4",
    },

    // CET 6
    {
      word: "natural",
      translate: "adj. 自然的； 物质的； 天生的； 不做作的 n. 自然的事情",
      wordSet: "CET6",
    },
    {
      word: "breadth",
      translate: "n. 宽度",
      wordSet: "CET6",
    },
    {
      word: "twinkle",
      translate: "n. 闪烁,闪耀,眨眼,瞬息 v. 闪烁,使...闪耀,眨眼，迅速移动",
      wordSet: "CET6",
    },
    {
      word: "fence",
      translate: "n. 围墙, 剑术",
      wordSet: "CET6",
    },
  ])


  await Book.bulkCreate([
    {
      username: "melody",
      id: 1,
    },
    {
      username: "melody",
      id: 2,
    },
    {
      username: "kira",
      id: 1,
    },
  ])

  await Record.bulkCreate([
    {
      username: "melody",
      id: 1,
    },
    {
      username: "melody",
      id: 2,
    },
    {
      username: "kira",
      id: 1,
    },
  ])

})()
