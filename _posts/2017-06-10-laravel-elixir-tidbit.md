---
layout: post
title: Laravel Elixir Tidbit
---

## The case

You do know that multiple `<link>` and `<script>` tags will cause your browser to do multiple requests to the server, don't you?

Well, I am not saying anyone on my team doesn't, but surely no one cares (at the moment). 

In my current project, we have like 20+ `<script>` tags and the same goes for `<link>` tags for stylesheets. Most of them are from plugins. I don't know how long it takes to load those resources one by one (I think Chrome Dev Tools can analyse the timings) but it is horrendous to see all those requests in your browser debugging tool.

So let's learn another tool so we can optimize both our workflow and our application. Please welcome

```
Laravel Elixir
```

## The buildup

If you are a Javascript developer, you've probably heard or used a task runner such as Gulp or Grunt. Laravel Elixir is a layer of abstraction on top of the task runner in our Laravel app. It uses Gulp internally for the task and it is simpler than to use Gulp directly. You have less stuff to configure.

Here I won't repeat what [Laravel docs say on using Laravel Elixir](https://laravel.com/docs/5.2/elixir). You can read it by yourself; it's pretty straightforward.

I will point out things I found by experimenting with Laravel Elixir instead.

Oh, for you who are running Laravel 5.4, it is renamed to Laravel Mix instead. 

## TIL

* Compiling SCSS to one CSS file does not work
    
    What the docs say...

    >Again, like the `less` method, you may compile multiple Sass files into a single CSS file, and even customize the output directory of the resulting CSS:

    ```javascript
    elixir(function(mix) {
        mix.sass([
            'app.scss',
            'controllers.scss'
        ], 'public/assets/css');
    });
    ```
    
    Boo...It doesn't work at all.
    
    If I put the name of a CSS file as the second argument, Laravel Elixir will create a directory with that name and then put the compiled CSS files in that directory. So no compilation to single CSS file.

    But there is a workaround.

    ```javascript
    elixir(function(mix) {
        mix.sass("*", "resources/assets/css/");
        mix.styles("*");
    });
    ```

    Easy, eh.
