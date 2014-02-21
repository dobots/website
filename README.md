# DoBots website

You can find this website at [www.dobots.nl](http://www.dobots.nl).

## Users

You can add a blog post by:

    rake post title="Your fancy title"
    
Now navigate to the file created for you and adjust it.

## Admin

The site is run through Jekyll:

    jekyll serve
    
There is Procfile that allows you to run it on Heroku:

    web: jekyll serve -P $PORT
    
You can install a theme through:

    rake theme:install git="https://github.com/jekyllbootstrap/theme-the-program.git"
    
And switch a theme through:

   rake theme:switch name="flat"

If you want to adjust the theme, you have to navigate to "\_includes/themes/flat/" and "assets/themes/flat/".

For running on Heroku, there is a Gemfile added. You add for example kramdown to it, or oembed and run "bundle install".
    
## Copyrights

The license for the Jekyll part is MIT. The license for Bootstrap as well. The copryights of Bootstrap belong to Twitter.

* [MIT](http://opensource.org/licenses/MIT)

With respect to our companies theme, please, try to create a distinct look for your users compared to ours. However, we won't mind if you use parts of it.
