const wearACoat = function(degrees){
    if (degrees < 0){
      console.log("stay inside");
    } else if (degrees < 30) {
      console.log("wear a coat and a hat");
    } else if (degrees < 50) {
      console.log("wear a coat")
    } else {
      console.log("wear whatever you want")
    }
  }
  wearACoat(69);
  wearACoat(80);
  wearACoat(45);
  wearACoat(20);
  wearACoat(-3);