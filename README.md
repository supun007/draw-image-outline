# Creately Challenge - Find outlines of shapes
For a given image (transparent or white back ground), to find out the outline of the visible edges is little tricky since each and every pixel have to be assess to get a smooth result.

### Best solution
So far, the best algorithm to determine the outlines of an image is Marching squares algorithm.
>https://en.wikipedia.org/wiki/Marching_squares

There are lot of implementation of this algorithm hence I haven’t tried to re-engage with the same solution. Below is the results of my effort and the working example is available.

### Workaround 
In this given solution, I have tried to scan an image canvas pixel by pixel and then determine which pixel to consider as an outline pixel.

The solution was tested as a Java swing application and as a web page with JavaScript.

Working html/js solution file tree is as below,
  - assets
    * `image-01.png`
    * `image-01-transp.png`
  - css
    * `examples.css`
    * `shared.css`
  - lib
    * `easeljs-NEXT.js`
    * `get_outline_shape_v1.0.js`
  - `draw_outliner.html`
  
 **NOTE:**_This example was purely based on html5, JavaScript and is using `easeljs-NEXT.js` library to draw canvas images and draw lines_ 
 
 ### Final Result
 
 To manupulate the image outline via pixel scaning _`get_outline_shape_v1.0.js`_ was the final outcome. `draw_outliner.html` is the impletation of the working solution.
 
 ### Steps to run
 
 - In the _`draw_outliner.html`_ file, _init()_ js function is initialising the image drawing in the two html canvases namely "imgCanvas" and "outlineCanvas".
 
 - _handleImageLoad()_ funtion is loading iniial given basic image into "imgCanvas" and then calling the _drawOutline(BASE_COLOR)_ fuction to get the outlines of the image as a shape object.
 


 






