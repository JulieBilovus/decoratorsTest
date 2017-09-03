function getBonus(user) {
    var bonus = user.bonus;

    var d = new Date();
    var diff = ((d.getTime() - user.lastVisitDate.getTime()) / 1000 / 60 / 60 / 24);
    console.log(diff)
    
    if (diff <= 10 && diff >= 0) {
        bonus += Math.round((diff * 24)) + user.ordersCount;       
    }
    
    return bonus;
}