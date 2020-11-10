module.exports = {
	baseResponse: {
		code: {
			type: "array",
			itemType: "number",
			required: true,
			enum: ["0:失败", "1:成功"]
		},
		msg: { type: "string", required: true, example: "信息" }
	}
};
