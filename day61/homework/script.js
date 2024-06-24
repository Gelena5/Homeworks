// 1: შექმენით ფუნქცია სახელად isTeenager, რომელიც იღებს ორ პარამეტრს: ასაკი (რიცხვი) და hasPermission. ფუნქცია უნდა დაბრუნდეს False, თუ ადამიანი არის მოზარდი (18 წლამდე) და არ აქვს ნებართვა აიღოს მართვის მოწმობა, ან თუ ადამიანი არის 18 წლის და აქვს უფლება აიღოს მართვის მოწმობა ფუნქციამ დააბრუნოს true.  გამოიყენეთ "and" (&&) და "or" (||)

function isTeenager(age, hasPermission) {
    return (age < 18 && hasPermission) || (age >= 18 && hasPermission);
}

console.log(isTeenager(16, false));
console.log(isTeenager(16, true));
console.log(isTeenager(18, true));
console.log(isTeenager(18, false));


// 2: შექმენით ფუნქცია სახელად isValidCoupon, რომელიც იღებს ორ პარამეტრს: couponCode (სტრინგი) და totalAmount (რიცხვი). ფუნქცია უნდა დაბრუნდეს true, თუ კუპონის კოდი არის "SALE" ან "BIGSALE" და ჯამური თანხა მეტია ან ტოლია 50-ზე, ან თუ კუპონის კოდი არის "LILSALE" მთლიანი თანხის მიუხედავად. წინააღმდეგ შემთხვევაში, ის უნდა დაბრუნდეს false. გამოიყენეთ "და" (&&) და "ან" (||)

function isValidCoupon(couponCode, totalAmount) {
    return ((couponCode === "Sale" || couponCode === "Bigsale") && totalAmount >= 50) || (couponCode === "Lilsale");
}

console.log(isValidCoupon("Sale", 60));
console.log(isValidCoupon("Sale", 40));
console.log(isValidCoupon("Bigsale", 50));
console.log(isValidCoupon("Lilsale", 30));
console.log(isValidCoupon("Nosale", 100));