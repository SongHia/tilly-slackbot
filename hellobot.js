module.exports = function(req, res, next) {
	var userName = req.body.user_name;
	var botPayload = {
		text: userName + ', do you remember this time? ' + "https://songhitp-today-i-learned.herokuapp.com/archive"
	};

	//avoid infinite loop
	if (userName !== 'slackbot') {
		return res.status(200).json(botPayload);
	} else {
		return res.status(200).end();
	}
}
