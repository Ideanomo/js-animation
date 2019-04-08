
var utils = {};

/* Calculate mouse position byoffset */
utils.captureMouse = function(element) {
    var mouse = {x: 0, y: 0};
    element.addEventListener('mousemove', function(event) {
        var x, y;
        // Set x and y values with the event.pageX and pageY
        // or get the document offset position of the element
        if(event.pageX || event.pageY) {
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
    
    return mouse;

}