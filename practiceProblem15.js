let DATA = "secret information"
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("Data = ", DATA);
    }
}

class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }
    editData() {
        DATA = "New DATA";
    } 
}

let student1 = new User("Tony", "abc@email.com");
let student2 = new User("Alan", "abcde@email.com");

student1.viewData();
student2.viewData();

let admin = new Admin("admin", "admin@college.com");
admin.editData();
admin.viewData();