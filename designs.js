"use strict";

// Select color input
const colorInput = $("#colorPicker");

// Select size input
const canvasHeightInput = $("#input_height");
const canvasWidthInput = $("#input_width");

// Selcect canvas
const canvas = $("#pixel_canvas");

// When size is submitted by the user, call makeGrid()
function makeGrid() {
    let canvasHeight = canvasHeightInput.val();
    let canvasWidth = canvasWidthInput.val();
    clearGrid();
    createGrid(canvasHeight, canvasWidth);

    // add listener(through delegator)
    canvas.children("tr").on("click", "td", function() {
        if ($(this).hasClass("filled")) {
            $(this).removeClass("filled");
            $(this).css("background-color", "");
        } else {
            $(this).addClass("filled");
            $(this).css("background-color", colorInput.val());
        }
    });

}

function clearGrid() {
    // vanilla JS version of canvas.remove();
    let canvasTable = document.querySelector("#pixel_canvas");
    while(canvasTable.rows.length > 0) {
        canvasTable.deleteRow(0);
      }
}

function createGrid(height, width) {
    // add grids in the canvas table
    for(let i = 0; i < height; i++) {
        canvas.append($("<tr>"));
        // canvas.children().last();
        let row = canvas.children("tr:last");
        for(let j = 0; j < width; j++) {
            row.append($("<td>"));
        }    
    }
}

$("input[type=submit]").on("click", function(e) {
    // Prevent from page reloading after clicking submit
    e.preventDefault();
    makeGrid();
});
