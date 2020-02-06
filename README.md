# Front-End-GuessWho

**Deployed website**:
[GuessWho](https://guess-who-build-week-2.netlify.com/)

## Description

GuessWho is a mobile game that presents the player with a tweet and three possible 2020 presidential candidates whom might of tweeted that tweet. Categories of celeberities would be a future feature that would be added. The user is to match the person with his/her tweet. Points will be awarded for correct guesses; in future editions, after set levels of points are reached the user can unlock more people. 

## Getting Started

To begin using the App as a client end user, register as a user on the registration page. Registration must include valid email address and password between 4 and 20 characters.

To login to the App, follow the link and login with the correct username and password.

The first page rendered after the login is the home page. On home page, user will be prompted to choose single player and the category of tweeters.

Once you push play, you will be given a tweet and underneath, three possible answers. User then selects the option they believe to be correct. If the answer is correct, their score will increment by one point. Every ten points a user scores, the level increments.

When logged in, the user has access to a menu in the top right of the screen. The menu includes options:
1. Home Page - user can select game mode and start playing
2. Account - user can track their points and level
3. Settings - user can delete their account
4. Logout - user can logout

## Prerequisites

All of the below dependencies can be installed using:
`yarn install` or `npm install`

Start development by creating a react app using:
`yarn start` or `npm start`

## Dependencies

This project was created using yarn and designed for react client side. Other dependencies include:

```
"@fortawesome/fontawesome-free": "^5.12.1",
"@fortawesome/fontawesome-svg-core": "^1.2.27",
"@fortawesome/free-brands-svg-icons": "^5.12.1",
"@fortawesome/free-solid-svg-icons": "^5.12.1",
"@fortawesome/react-fontawesome": "^0.1.8",
"axios": "^0.19.0",
"font-awesome": "^4.7.0",
"react": "^16.10.1",
"react-dom": "^16.10.1",
"react-hook-form": "^4.8.0",
"react-redux": "^7.1.3",
"react-router-dom": "^5.1.2",
"react-scripts": "^3.3.1",
"redux": "^4.0.5",
"styled-components": "^5.0.0",
"yup": "^0.28.1"
```
 ## Demo Login
 
The "users" login looks like this:

```
"email": "testing@gmail.com",
"password": "123456",
```
# BE

## DATA STRUCTURE

### Users
POST to /api/register

expects:
```
{
    email: "email",
    password: "password"
}
```
returns:
```
{
    id: id, 
    token: "token",
    points: points
}
```

POST to /api/login
expects: 
```
{
    email: "email",
    password: "password"
}
```
returns:
```
{
    id: id, 
    token: "token",
    points: points
}
```

GET to /api/users/:id
returns:
```
{
    id: id
    email: "email",
    password: "password",
    points: points
}
```

GET to /api/tweets
returns:
```
rounds data structure
```


PUT to /api/users/:id
expects: 
```
{
    points: points,
}
```

returns:
```
{
 "message": "User updated."
}
```


DELETE to /api/users/:id
returns:
```
{
 "message": "User deleted."
}
```
## Authors and acknowledgment

**UI Engineers**:
Michael Bailar
Edward Blanciak

**Front End Engineers**:
Damon Bogich
Aaron Janovitch
Thomas Shotts Jr.

**Backend Engineer**:
Phil MacEachron
Nasra Aden

**UX Designer**
Jessica Morrison

**Project Lead**
Jojo Zhang

**Full Repo**:
https://github.com/guess-who-bw

## Project status

This project was completed for a Lambda School build week February 2020. There may be updates to the application periodically

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details