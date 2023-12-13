# The Odin Project - Landing Page

A generic landing page created with html and css for the odin project.

[Live Link](https://antonharbers.github.io/Demo-Landing-Page/)

## Folder Structure

```
    /.git           -> git repository
    /images         -> contains the favicon.ico
    /styles
        style.css       -> contains all the css for full screen sizes
        minStyle.css    -> contains all the css for smaller screen sizes
    index.html      -> Contains all our HTML and links to the styles and script
    script.js       -> Contains the js code to animate the headerlogo
    README.md

```

## Key Concepts

### Benefits of Design before Code

This project was great at demonstrating the benefits of having a complete design before you start coding. When presented with the design one can start creating a mental model of what the css might look like by identifying containers and sections and certain elements that belong together.

### Responsive CSS

When adapting CSS for different screen sizes the media query is a useful tool. In this project I have two css files. One (style.css) for the general CSS at any screen size larger than tablet size, and one (minStyle.css) for the design elements at smaller screen sizes (specifically common phone and tablet screen sizes). This can be acheived using media queries like so:

CSS:

```
    @media (max-width: 768px) {
        /*  Your CSS for screen sizes with a max width of 768 px here */
    }

    @media (max-width: 1028px) {
        /*  Your CSS for screen sizes with a max width of 1028 px here */
    }
```

The correct CSS will automatically be applied based on the media query that is currently being met.

### CSS Flexbox

A lot of the elements needed in this project could be clustered together and displayed on the screen using the CSS flexbox model. Assigning variables to the attributes of justify-content and align-items makes it relatively easy to center content and makes coding complex layout patterns quite easy in comparison to other methods.

Some flexbox code that is a useful starting point:

CSS:

```
    .flexClass {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }
```

The above code would center any items inside the .flexClass elements and apply a gap of 1rem to them. Tweaking these values can quickly lead to elegant and clean designs.

## Final Notes

Overall this project was a great learning experience. Copying an already finished design takes your mind of how things should look and lets you focus on how to acheive the desired layout. I learned a lot about CSS properties and how to best group HTML elements together in this one.
