# Creately Challange - Find outlines of shape
For a given image (transparent or white back ground), to find out the outline of the visible edges is little tricky since each and every pixel have to be assess to get a smooth result.

#### Best solution
So far the best algorithm to determine the outlines of an image is Marching squares algorithm.
>https://en.wikipedia.org/wiki/Marching_squares

There are lot of implementation of this algorithm hence I haven’t tried to re-engage with the same solution. Below is the results of my effort and the working example is available.

#### Workaround 
In this given solution, I have tried to scan an image canvas pixel by pixel and then determine which pixel to consider as an outline pixel.

The solution was tested as a Java swing application and as a web page with JavaScript.

Working html/js solution file tree is as below,
  - assets
      image-01.png
      image-01-transp.png
  - css
      examples.css
      shared.css
  - lib
      easeljs-NEXT.js
      get_outline_shape_v1.0.js
  - draw_outliner.html 

 






