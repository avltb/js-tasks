const choosePresident = function(age, citizenship, education, language){
    if (age < 40){
        return "The candidate does not meet the age requirements.";
    } else if (citizenship !== "Kazakhstan"){
        return "The candidate must be a citizen of the Republic of Kazakhstan.";
    } else if (education !== "higher"){
        return "The candidate must have a university degree.";
    } else if (language !== "fluent in kazakh"){
        return "The candidate must be fluent in Kazakh.";
    } else {
        return "The candidate meets all the requirements for applying for the position of president.";
    }
    }
choosePresident(35, "Kazakhstan", "higher", "fluent in kazakh");
choosePresident(48, "Kazakhstan", "higher", "fluent in kazakh");
choosePresident(56, "Russia", "higher", "fluent in kazakh");
choosePresident(63, "Kazakhstan", "secondary", "fluent in kazakh");
choosePresident(49, "Kazakhstan", "higher", "no knowledge in kazakh");
