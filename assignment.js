//kilometerToMeter Convert (Problem-1)
    function kilometerToMeter(kilometer){
        if(kilometer <=0){
            return "distance can not be negative value";
        }else{
            return kilometer*1000;
        }
    }
    var kilometer = 5;  //Please enter your kilometer value.
    var meter= kilometerToMeter(kilometer); 
    console.log(meter);


//budgetCalculator  (Problem-2)
    function budgetCalculator(itemOfClock, itemOfPhone, itemOfLaptop){
        var itemOfClock = Math.floor(itemOfClock);
        var itemOfPhone = Math.floor(itemOfPhone);
        var itemOfLaptop = Math.floor(itemOfLaptop);
        if(itemOfClock <0 || itemOfPhone <0 || itemOfLaptop <0){
            if(itemOfClock <0){
                return "Please purchase at least 1 clock or enter quantity  0";
            }else if(itemOfPhone <0){
                return "Please purchase at least 1 phone or enter quantity  0";
            }else if(itemOfLaptop <0){
                return "Please purchase at least 1 laptop or enter quantity  0";
            }
        }else{
            var clockPrice=itemOfClock*50;
            var phonePrice=itemOfPhone*100;
            var laptopPrice=itemOfLaptop*500;
            return clockPrice + phonePrice + laptopPrice;
        }
    }
    var itemOfClock = 5;    //Please enter item of clock.
    var itemOfPhone = 2;    //Please enter item of phone.
    var itemOfLaptop = 3;    //Please enter item of laptop.
    var totalPrice=budgetCalculator(itemOfClock, itemOfPhone, itemOfLaptop);
    console.log(totalPrice);

//hotelCost  (Problem-3)
    function hotelCost(enterDays){
        var enterDays =Math.floor(enterDays);
        var totalCost = 0;
        if(enterDays<=0){
            return "Please stay at least 1 day.";
        }else if(enterDays<=10){
            totalCost = enterDays*100;
            return totalCost;
        }else if(enterDays<=20){
            var firstTenDays = 10*100;
            var remaining = enterDays-10;
            var lastTenDays =remaining*80;
                totalCost= firstTenDays + lastTenDays;
            return totalCost;
        }else{
            var firstTenDays = 10*100;
            var lastTenDays = 10*80;
            var remaining = enterDays-20;
            var otherDays =remaining*50;
                totalCost=firstTenDays + lastTenDays + otherDays;
            return totalCost;
        }
    }
    var enterDays=25; //Please enter your days number.
    var totalAmount= hotelCost(enterDays);
    console.log(totalAmount);

//megaFriend  (Problem-4)
    function megaFriend(friendList){
        if(friendList.length==0){
            return "friend list is empty";
        }else{
            var largestName='';
            for (var i = 0; i < friendList.length; i++) {
                var currentItem=friendList[i];
                if(currentItem.length > largestName.length){
                    largestName = friendList[i];
                }
            }
            return largestName;
        }
    }
    var friendList=["Md.ismail","Md.ibrahim","Abdur Rahman","Md.ismail hossain","Jahid babul"];
    var result = megaFriend(friendList);
    console.log(result);
