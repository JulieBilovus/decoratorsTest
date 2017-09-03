function User(name, lastVisitDate) {
     this.name = name;
     this.lastVisitDate = new Date(lastVisitDate);
     this.globalDiscount = 5;
     this.nightDiscount = 25;
     this.weekendDiscount = 15;
     this.ordersCount = 13;
     this.ordersTotalPrice = 2600;
     this.bonus = 10;
 }