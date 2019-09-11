// eslint-disable-next-line no-undef
const context = require.context('./',true,/index\.js$/);//获取到当前目录下,包含子目录的index.js,解决多个仓库

export default context
.keys()
.filter(item => item !== "./index.js")//不用得到当前文件
.map(key => context(key));//context方法可以获取路径中的文件内容

