function getDiscount(user) {
    var globalDiscount = user.globalDiscount;
    
    var d = new Date();
    var currentHour = d.getHours();
    var currentMinutes = d.getMinutes();
    var currentDay = d.getDay();
    
    var itIsNight = false;
    var itIsWeekend = false;
    
    if (currentHour >= 23 || (currentHour >= 5 && currentMinutes === 0)) {
        itIsNight = true;
    }
    
    if (currentDay === 0 || currentDay === 6) {
        itIsWeekend = true;
    }
    
    if (itIsNight) {
        globalDiscount += user.nightDiscount;
    }
    
    if (itIsWeekend) {
        globalDiscount += user.weekendDiscount;
    }
    
    return globalDiscount;
}