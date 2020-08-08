This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

This project uses the users array from the typical json server:
[http://jsonplaceholder.typicode.com/users](http://jsonplaceholder.typicode.com/users)

You need to use the "username" value as login and "address.zipcode" value as password to login to the app.
For example, login will be **Bret** and password will be **92998-3874**

```
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}
```

You can add, watch, edit and remove users from the app. Also, there is a search on the users list to get the users by containing search query in the name of users.

**Complete stack of technologies:** React(including Hooks), Redux(including Saga), Bootstrap React.

Please enjoy!