/*The blender has a state that is turned off by default,
and it has a function that controls the states of the blender 
that is activated when we touch the button.
This goes into the if and checks if the blender is off, 
then changes the state to on and prints the message to the console.
In case the blender is in a different state,
it changes the state to off and prints its message on the console*/

let blenderState = "off";
let blender = document.getElementById("blender");

function controlBlender() {
  if (blenderState == "off") {
    blenderState = "turned on";
    blender.classList.add("active");
    /*console.log("you turned me on");*/
  } else {
    blenderState = "off";
    blender.classList.remove("active");
    /*console.log("you turned me off");*/
  }
}
