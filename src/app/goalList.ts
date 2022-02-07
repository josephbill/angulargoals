//using the goals class to push an array of goals
import {Goals} from "./goals"; //in this case the name in the braces is the class model name

export let goals:Goals[] = [
  //creating objects using properties declared in constructor
  new Goals(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son',new Date(2022,3,14)),
  new Goals(2,'Buy Cookies','I have to buy cookies for the parrot',new Date(2022,4,14)),
  new Goals(3,'Get new Phone Case','Diana has her birthday coming up soon',new Date(2022,5,14)),
  new Goals(4,'Get Dog Food','Pupper likes expensive snacks',new Date(2022,6,14)),
  new Goals(5,'Solve math homework','Damn Math',new Date(2022,7,14)),
  new Goals(6,'Plot my world domination plan','Cause I am an evil overlord',new Date(2022,8,14)),
];


