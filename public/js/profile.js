let socket = io();

$("#loginBox").show();
$("#chatBox").hide();

$("#btnStart").click(() => {
	socket.emit("login", {
		username: $("#inpUsername").val(),
	});
});

$("#btnEnd").click(() => {
	socket.emit("logout", {
		username: $("#inpUsername").val(),
	});
});

$("#clearmsg").click(() => {
	let ul = document.getElementById("ulMsgs");
	while (ul.getElementsByTagName("li").length > 0) {
		ul.removeChild(ul.firstChild);
	}
});

socket.on("logged_in", () => {
	$("#loginBox").hide();
	$("#chatBox").show();
});

socket.on("logged_out", () => {
	$("#loginBox").show();
	$("#chatBox").hide();
});

console.log("socket id", socket);
$("#btnSendMsg").click(() => {
	socket.emit("msg_send", {
		to: $("#inpToUser").val(),
		msg: $("#inpNewMsg").val(),
	});
});

socket.on("msg_rcvd", (data) => {
	$("#ulMsgs").append($("<li>").text(` [${data.from}]:${data.msg}`));
});
