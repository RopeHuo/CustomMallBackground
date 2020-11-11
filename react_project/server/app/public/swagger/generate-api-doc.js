const http = require("http");
//文件模块
const fs = require("fs");
//系统路径模块
const path = require("path");
http.get("http://127.0.0.1:7001/swagger-doc", resp => {
	let data = "";

	// 已经接收到数据
	resp.on("data", chunk => {
		data += chunk;
	});

	// 请求结束执行
	resp.on("end", () => {
		// 格式化json
		let text = data;

		// 指定要创建的目录和文件名称 __dirname为执行当前js文件的目录
		let file = path.join(__dirname, "swagger-doc.json");

		// 写入文件
		fs.writeFile(file, text, function(err) {
			if (err) {
				console.log("文件创建失败!" + err);
			} else {
				console.log("文件创建成功~" + file);
			}
		});
	});
}).on("error", err => {
	console.log("接口请求失败! " + err.message);
});
