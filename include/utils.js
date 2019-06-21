
var utils = {};

/**
 * Track the current mouse position, relative to an element
 * Calculate mouse position by offset
 * @param {HTMLElement} element
 * @return {object} Contains properties: x, y, event
 */
utils.captureMouse = function (element) {
    // Create mouse object
    var mouse = {x: 0, y: 0};
    element.addEventListener('mousemove', function (event) {
        var x, y;
        // Set x and y values with the event.pageX and pageY
        // or get the document offset position of the element
        if (event.pageX || event.pageY) {
            x = event.pageX;
            y = event.pageY;
        } else {
            x = event.clientX + document.body.scrollLeft +
            document.documentElement.scrollLeft;
            y = event.clientY + document.body.scrollTop +
            document.documentElement.body.scrollTop;
        }
        x -= element.offsetLeft;
        y -= element.offsetTop;

        mouse.x = x;
        mouse.y = y;
    }, false);

    // Return mouse object with x, y properties
    return mouse;
}

/**
 * Track the current (first) touch position, relative to an element
 * @param {HTMLElement} element
 * @return {object} Contains properties: x, y, isPressed, event
 */
utils.captureTouch = function (element) {
    // Create touch object
    var touch = {x: null, y: null, isPressed: false, event: null};

    element.addEventListener('touchstart', function (event) {
        var touch_event = event.touches[0], x, y;
        x = touch_event.pageX;
        y = touch_event.pageY;
        touch.isPressed = true;
        touch.event = event;
        touch.x = x;
        touch.y = y;
    }, false);

    element.addEventListener('touchend', function (event) {
        touch.isPressed = false;
        touch.x = null;
        touch.y = null;
        touch.event = event;
    }, false);

    element.addEventListener('touchmove', function (event) {
        var x, y,
        touch_event = event.touches[0]; // first touch

        if (touch_event.pageX || touch_event.pageY) {
            x = touch_event.pageX;
            y = touch_event.pageY;
        } else {
            x = touch_event.clientX + document.body.scrollLeft +
                document.documentElement.scrollLeft;
            y = touch_event.clientY + document.body.scrollTop +
                document.documentElement.scrollTop;
        }
        x -= element.offsetLeft;
        y -= element.offsetTop;

        touch.x = x;
        touch.y = y;
        touch.event = event;
    }, false);

    // Returns the touch object with x, y and isPressed properties
    return touch;
};

