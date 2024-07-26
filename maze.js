$(document).ready(function () {
  "use strict"; // Enforce strict mode for better error checking

  const $maze = $("#maze");
  const $boundaries = $maze.find(".boundary");
  const $start = $("#start");
  const $end = $("#end");
  const $status = $("#status");
  const className = "youlost";

  // Flag to track if any walls have been hit
  let isStarted = false;

  // Mouseover event handler to turn all boundaries red
  $boundaries.mouseover(function () {
    if (!isStarted) {
      return;
    }
    resetGame();
    $boundaries.addClass(className);
    $status.text('You lose! Click "S" to try again.');
  });

  // Click event handler for the end div
  $end.mouseenter(function () {
    if (!isStarted) {
      return;
    }
    resetGame();
    $status.text("You win! :]");
  });

  // Click event handler for the start div to reset the maze state
  $start.click(function () {
    if (isStarted) {
      return;
    }
    resetGame();
    isStarted = true;
    $boundaries.removeClass(className);
    $status.text("Move the mouse through without touching any walls.");
  });

  // Function to reset the game state
  function resetGame() {
    isStarted = false;
  }

  // Mouseleave event handler for the maze container
  $maze.mouseleave(function () {
    if (!isStarted) {
      return;
    }
    resetGame();
    $status.text('You lose! Click "S" to try again.');
  });
});
