# DoBots website

You can find this website at [www.dobots.nl](http://www.dobots.nl).

## Users

You can add a blog post by:

    rake post title="Your fancy title"
    
Now navigate to the file created for you and adjust it.

In case you have never worked with a markdown syntax before. It is quite easy. This very file is written in it! The variant of markdown that is used is called kramdown. It makes writing also mathematics very easy. So, a very short overview:

 * A movie can be embedded by using `{% embedly https://youtube-link %}`
 * An image can be embedded by placing it in the attachments folder and link it through `![Alternative description]({{ site.url }}/attachments/image_file.png "Image description")`
 * An example of a right-floated image: `![Meccano Spykee]({{ site.url }}/attachments/meccano_spykee_400.jpg "Meccano Spykee"){: .float-right}` which uses kramdown to use the css style `float-right`.
 * A mathematical equation can be described with `$$y=x^2$$`

The other syntax options you can probably find in no time searching online or checking other posts.

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
