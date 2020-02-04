const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;
const app = express();
const token = 'esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ';

let presidentialCandidates = [
        {
            "id": 1,
            "tweet": {
                "text": "Heading to Davos, Switzerland, to meet with World and Business Leaders and bring Good Policy and additional Hundreds of Billions of Dollars back to the United States of America! We are now NUMBER ONE in the Universe, by FAR!!",
                "reply_count": "22.4K",
                "retweet_count": "10.8K",
                "like_count": "115.5K",
                "date": "20 Jan 2020"
            },
            "options": [
                {
                    "id": 2,
                    "handle": "@JoeBiden",
                    "name": "Joe Biden",
                    "picture_url": "https://pbs.twimg.com/profile_images/1223955397008068614/6j51JwXU_400x400.jpg"
                },
                {
                    "id": 1,
                    "handle": "@realDonaldTrump",
                    "name": "Donald J. Trump",
                    "picture_url": "https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg"
                },
                {
                    "id": 0,
                    "handle": "@BernieSanders",
                    "name": "Bernie Sanders",
                    "picture_url": "https://pbs.twimg.com/profile_images/1097820307388334080/9ddg5F6v_400x400.png"
                }
            ],
            "correct_option_id": 1
        },
        {
            "id": 2,
            "tweet": {
                "text": "My first executive orders will be to reverse every single thing President Trump has done to demonize and harm immigrants, including his racist and disgusting Muslim ban.",
                "reply_count": "10.5K",
                "retweet_count": "18.3K",
                "like_count": "131.3K",
                "date": "27 Jan 2020"
            },
            "options": [
                {
                    "id": 1,
                    "handle": "@realDonaldTrump",
                    "name": "Donald J. Trump",
                    "picture_url": "https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg"
                },
                {
                    "id": 2,
                    "handle": "@JoeBiden",
                    "name": "Joe Biden",
                    "picture_url": "https://pbs.twimg.com/profile_images/1223955397008068614/6j51JwXU_400x400.jpg"
                },
                {
                    "id": 0,
                    "handle": "@BernieSanders",
                    "name": "Bernie Sanders",
                    "picture_url": "https://pbs.twimg.com/profile_images/1097820307388334080/9ddg5F6v_400x400.png"
                }
            ],
            "correct_option_id": 0
        },
        {
            "id": 3,
            "tweet": {
                "text": "Let's remember one thing when it comes to impeachment: Donald Trump is on trial because he's afraid to run against me. He knows I'll beat him this November.",
                "reply_count": "19.8K",
                "retweet_count": "7.3K",
                "like_count": "40K",
                "date": "28 Jan 2020"
            },
            "options": [
                {
                    "id": 0,
                    "handle": "@BernieSanders",
                    "name": "Bernie Sanders",
                    "picture_url": "https://pbs.twimg.com/profile_images/1097820307388334080/9ddg5F6v_400x400.png"
                },
                {
                    "id": 2,
                    "handle": "@JoeBiden",
                    "name": "Joe Biden",
                    "picture_url": "https://pbs.twimg.com/profile_images/1223955397008068614/6j51JwXU_400x400.jpg"
                },
                {
                    "id": 1,
                    "handle": "@realDonaldTrump",
                    "name": "Donald J. Trump",
                    "picture_url": "https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg"
                }
            ],
            "correct_option_id": 2
        }
    ];

app.use(bodyParser.json());

app.use(cors());

function authenticator(req, res, next) {
	const { authorization } = req.headers;
	if (authorization === token) {
		next();
	} else {
		res.status(403).json({ error: 'User must be logged in to do that.' });
	}
}

app.post('/api/login', (req, res) => {
	const { email, password } = req.body;
	if (email === '1234@gmail.com' && password === '123456') {
		req.loggedIn = true;
		res.status(200).json({
			payload: token
		});
	} else {
		res.status(403).json({ error: 'Email or Password incorrect. Please see Readme' });
	}
});

app.post('/api/signup', (req, res) => {
	const { password, confirmPassword } = req.body;
	if (password === confirmPassword) {
		req.loggedIn = true;
		res.status(200).json({
			payload: token
		});
	} else {
		res.status(403).json({ error: 'Email or Password incorrect. Please see Readme' });
	}
});

app.get('/api/tweets', authenticator, (req, res) => {
	console.log('')
	setTimeout(() => {
		res.send(presidentialCandidates);
	}, 1000);
});

// app.get('/api/friends/:id', authenticator, (req, res) => {
// 	const friend = friends.find((f) => f.id == req.params.id);

// 	if (friend) {
// 		res.status(200).json(friend);
// 	} else {
// 		res.status(404).send({ msg: 'Friend not found' });
// 	}
// });

app.post('/api/friends', authenticator, (req, res) => {
	const friend = { id: getNextId(), ...req.body };

	friends = [ ...friends, friend ];

	res.send(friends);
});

app.put('/api/friends/:id', authenticator, (req, res) => {
	const { id } = req.params;

	const friendIndex = friends.findIndex((f) => f.id == id);

	if (friendIndex > -1) {
		const friend = { ...friends[friendIndex], ...req.body };

		friends = [ ...friends.slice(0, friendIndex), friend, ...friends.slice(friendIndex + 1) ];
		res.send(friends);
	} else {
		res.status(404).send({ msg: 'Friend not found' });
	}
});

app.delete('/api/friends/:id', authenticator, (req, res) => {
	const { id } = req.params;

	friends = friends.filter((f) => f.id !== Number(id));

	res.send(friends);
});

function getNextId() {
	return nextId++;
}

app.listen(port, () => {
	console.log(`server listening on port ${port}`);
});
