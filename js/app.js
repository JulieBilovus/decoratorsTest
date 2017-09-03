var user = new User('Vasia', '9/1/2017 11:15:2');

document.getElementById("discount").innerHTML = getDiscount(user) + '% is ' + user.name + ' discount for now';
document.getElementById("bonus").innerHTML = user.name + ' has ' + getBonus(user) + ' bonus scores now';