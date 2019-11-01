let user = {
};

console.log(user);
console.log(typeof(user));

user.username = "batman";
user.password = "hunter2";

console.log(user);

if (user.username == 'batman' && user.password == 'hunter2'){
    console.log("Access Granted");
}else {
    console.log("Access Denied");
}


let user1 = {
    username: "wonderwoman",
    password: "123123",
    greet(){
        console.log("Hello, I am ", this.username);
    },
    setName(name){
        this.username = name;
    }
};

user1.greet();
user1.setName("spiderman");
user1.greet();