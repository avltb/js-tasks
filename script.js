function listTopCompanies(){
    const companies = ["Google", "Apple", "Microsoft", "Facebook", "Spotify", "LinkedIn", "Samsung", "PayPal", "Yandex", "Sony"];
    for (let i = 0; i < companies.length; i++){
      let position = i + 1;
      let suffix;
  
      if (position === 1){
        suffix = "st";
      } else if (position === 2){
        suffix = "nd";
      } else if (position === 3){
        suffix = "rd";
      } else {
        suffix = "th";
      }
      console.log(`My ${position}${suffix} choise is ${companies[i]}`)
    }
  }
  listTopCompanies()