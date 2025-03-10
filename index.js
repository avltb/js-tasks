const choosePresident = function(age, citizenship, education, language){
    if (age < 40){
        console.log("The candidate does not meet the age requirements.");
    } else if (citizenship !== "Kazakhstan"){
        console.log("The candidate must be a citizen of the Republic of Kazakhstan.");
    } else if (education !== "higher"){
        console.log("The candidate must have a university degree.");
    } else if (language !== "fluent in kazakh"){
        console.log("The candidate must be fluent in Kazakh.");
    } else {
        console.log("The candidate meets all the requirements for applying for the position of president.");
    }
    }
  choosePresident(35, "Kazakhstan", "higher", "fluent in kazakh");
  choosePresident(48, "Kazakhstan", "higher", "fluent in kazakh");
  choosePresident(56, "Russia", "higher", "fluent in kazakh");
  choosePresident(63, "Kazakhstan", "secondary", "fluent in kazakh");
  choosePresident(49, "Kazakhstan", "higher", "no knowledge in kazakh");

  const ageAllow = function(age){
    if (age >= 40){
        console.log("You can run for president.")
    } else if (age >= 21){
        console.log("You can buy alcohol.")  
    } else if (age >= 18){
        console.log("You can vote, get a job and pay taxes.");
    } else if (age >= 16){
        console.log("You can get an identity card in Kazakhstan.");
    } else {
        console.log("The age is too small for the above actions.")
    }
  }
  ageAllow(23);
  ageAllow(12);
  ageAllow(20);
  ageAllow(17);
  ageAllow(52);