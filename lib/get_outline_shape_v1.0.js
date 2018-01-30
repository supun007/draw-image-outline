/**
 * Get the outline shape for a given image.
 * Background of the image can be either fully transparent or in white color 
 * Both options available with this solution. Future enhancements can be added to any given bacground color
 *  
 *
 * @author  Supun Samaraweera
 * @version 1.0
 * @since   2018-01-19 
 */


/**
 * Declare globale constants
 */
var IMG_CANVAS_DEF_WIDTH = 150;
var IMG_CANVAS_DEF_HEIGHT = 150;
var IMG_BASE_COLOR_FULLY_TRANSPARENT = 0; // Fully transparent backgrounds
var IMG_BASE_COLOR_FULLY_VISIBLE = 255; // Fully opaque backgrounds
var IMG_BASE_COLOR_WHITE = 765;  // RGB color for WHITE 255+255+255. Background color is white


/**
 * Draw the outline pixels while scanning x and y axis for different pixels (transparent or white)
 * @param {integer} backGroundRGB - Background color or the base color.
 * @return {object} shape - 
 */
function drawOutline(backGroundRGB) {
    var contLoop = false; //State of the INNER_LOOP
    var lastPixDraw = false; // Last pixel draw status
    var pixelData = []; // Pixel data array [ R, G, B, Alpha channel ]
    var curPixelVal = 0; // Current pixel RGB value sum
    var shape = new createjs.Shape(); // Shape outline

    // Create new outline stroke
    shape.graphics.setStrokeStyle(1).beginStroke("#F4A142");
    shape.graphics.lineTo(0, 0);

    /**
     * To determine the outline, initial scanning the canvas and marking the outline.
     * */

    //OUTER_LOOP:
    for (x = 0; x < IMG_CANVAS_DEF_WIDTH; x++) {

        //INNER_LOOP:
        for (y = 0; y < IMG_CANVAS_DEF_HEIGHT; y++) {

            pixelData = getPixelData(imgCanvas, x, y);

            if (backGroundRGB === IMG_BASE_COLOR_FULLY_TRANSPARENT)
                curPixelVal = pixelData[3];
            else if (backGroundRGB === IMG_BASE_COLOR_WHITE)
                curPixelVal = pixelData[0] + pixelData[1] + pixelData[2];

            //console.log("X " + x + " Y " + y + " | pixelData : " + pixelData[0] + " " + pixelData[1] + " " + pixelData[2] + " " + pixelData[3] + " RGB = " + curPixelVal);

            if (curPixelVal !== backGroundRGB) {

                if (contLoop) {

                    if (!lastPixDraw) {
                        shape.graphics.moveTo(x - 1, y - 1);
                        shape.graphics.lineTo(x, y);
                    }

                    lastPixDraw = true;

                } else {
                    shape.graphics.moveTo(x, y);
                }

                contLoop = true;
            } else {

                if (lastPixDraw) {
                    shape.graphics.moveTo(x + 1, y + 1);
                    shape.graphics.lineTo(x, y);

                    lastPixDraw = true;
                    contLoop = true;
                }

                contLoop = false;
                lastPixDraw = false;
            }

        }// End INNER_LOOP:

        contLoop = false;

    } // End OUTER_LOOP:

    /**
     * To draw the horizontal missing pixels, scan trough the canvas in inverse order
     * */

    //OUTER_LOOP_REVERS:
    for (y = 0; y < IMG_CANVAS_DEF_WIDTH; y++) {

        //INNER_LOOP_REVERS:
        for (x = 0; x < IMG_CANVAS_DEF_HEIGHT; x++) {

            pixelData = getPixelData(imgCanvas, x, y);

            if (backGroundRGB === IMG_BASE_COLOR_FULLY_TRANSPARENT)
                curPixelVal = pixelData[3];
            else if (backGroundRGB === IMG_BASE_COLOR_WHITE)
                curPixelVal = pixelData[0] + pixelData[1] + pixelData[2];

            //console.log("X " + x + " Y " + y + " | pixelData : " + pixelData[0] + " " + pixelData[1] + " " + pixelData[2] + " " + pixelData[3] + " RGB = " + curPixelVal);

            if (curPixelVal !== backGroundRGB) {
                //console.log("Y : " + y);
                if (contLoop) {

                    if (!lastPixDraw) {
                        shape.graphics.moveTo(x - 1, y - 1);
                        shape.graphics.lineTo(x, y);
                    }

                    lastPixDraw = true;
                } else {
                    shape.graphics.moveTo(x, y);
                }
                contLoop = true;
            } else {

                if (lastPixDraw) {
                    shape.graphics.moveTo(x + 1, y + 1);
                    shape.graphics.lineTo(x, y);

                    lastPixDraw = true;
                    contLoop = true;
                }

                contLoop = false;
                lastPixDraw = false;
            }

        } // End INNER_LOOP_REVERS:

        contLoop = false;
    } // End OUTER_LOOP_REVERS

    // Return the final shape
    return shape;
} // End Function drawOutline


/**
 * Returning the pixel data for given cordinates.
 * @param {string} canvas - The name of the employee.
 * @param {integer} x - x cordinates for the selected pixel
 * @param {integer} y - y cordinates for the selected pixel
 */
function getPixelData(canvas, x, y) {
    return document.getElementById(canvas).getContext('2d').getImageData(x, y, 1, 1).data;
} 