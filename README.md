# HW5p2: Authentication

## Back-end
On the back-end side I added a User model and a User controller to support users and authentication. I used Passport.js to provide 2 auth strategies: using email/password, and using JWTs. Lastly, I added in support for usernames and used them to display the author of each post.
## Front-end
On the front-end I had to add new routes to support auth, as well as new actions and components to support signing in, signing up, and signing out. I wrapped everything in a "higher order" component, require-auth.js, to prevent unauthenticated users from accessing the Add post functionality. 


[backend repo](https://github.com/codavis18/hw5p1-blogserver/tree/part2)
[frontend repo](https://github.com/codavis18/hw4-redux-blog/tree/with-auth)
[heroku url](https://hw5-part2.herokuapp.com/api)
[surge url](http://myblog-with-auth.surge.sh/)


