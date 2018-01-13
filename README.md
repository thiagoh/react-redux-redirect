# React + Redux redirect How To

I'm not really happy with articles and tutorials discussing what's the best way of redirecting after and action is dispatched. Some of them use `state` to make a page redirect. What I most dislike on this approach is the that IMHO only persisten application variables should reside at the application `state` and I don't see `redirectTo: '/my-next-url'` being something reasonable to live there. Other approach, a little bit better, I should say, use dependency injection into `action's` file to make redirect after the action is dispatched. What I don't like on this approach is that if you have `X` action files (and `X` is a number can be quite large), where your actions are, then you have to inject into all of them. Which in turn, can result in more complicated tests and tedious maintenance.

Because of these and other reasons I figured out my way of achieving page redirection.

```
> npm install
> npm start
```
