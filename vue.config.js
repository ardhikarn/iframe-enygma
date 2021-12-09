module.exports = {
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      console.log(args)
      args[0].title = 'Enygma Software Smart City Terbaik' // Replace your title here
      return args
    })
  },
}