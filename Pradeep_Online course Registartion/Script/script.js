var autoincrementeduserid = 1000;
var autoincrementedcourseid = 100;
var currentUsername;
var currentUserid;
var enrolled;
// Class for user details
var User = /** @class */ (function () {
    function User(pusname, page, pphnumber) {
        autoincrementeduserid++;
        this.UserId = "Student" + autoincrementeduserid.toString();
        this.Usname = pusname;
        this.Uage = page;
        this.Usphnumber = pphnumber;
    }
    return User;
}());
// class for course details
var course = /** @class */ (function () {
    function course(paramcourseName, paramcoursedays, paramuserId) {
        autoincrementedcourseid++;
        this.courseId = "course" + autoincrementedcourseid.toString();
        this.courseName = paramcourseName;
        this.required_days = paramcoursedays;
        this.UserId = paramuserId;
    }
    return course;
}());
// Array for adding user details
var studentlist = new Array();
var userobj = new User("Pradeep", "21", "9500997791");
studentlist.push(userobj);
var courseList = new Array();
// signup(new user adding function) function
function signup() {
    var homediv = document.getElementById('homediv');
    var newUser = document.getElementById('signupdiv');
    var existingUser = document.getElementById('logindiv');
    var dashboard = document.getElementById('dashboarddiv');
    homediv.style.display = "none";
    newUser.style.display = "block";
    existingUser.style.display = "none";
    dashboard.style.display = "none";
}
// funtion for signing in
function signin() {
    var homediv = document.getElementById('homediv');
    var newUser = document.getElementById('signupdiv');
    var existingUser = document.getElementById('logindiv');
    var dashboard = document.getElementById('dashboarddiv');
    var availUser = document.getElementById('availableUser');
    homediv.style.display = "none";
    newUser.style.display = "none";
    existingUser.style.display = "block";
    dashboard.style.display = "none";
    availUser.innerHTML = "<h2>Registered Users:</h2>";
    for (var i = 0; i < studentlist.length; i++) {
        availUser.innerHTML += "User Name : ".concat(studentlist[i].Usname, " | User Id : ").concat(studentlist[i].UserId, "<br>");
    }
}
// function for getting user details
function register() {
    var homediv = document.getElementById('homediv');
    var newUser = document.getElementById('signupdiv');
    var existingUser = document.getElementById('logindiv');
    var dashboard = document.getElementById('dashboarddiv');
    homediv.style.display = "block";
    newUser.style.display = "none";
    existingUser.style.display = "none";
    dashboard.style.display = "none";
    var newusname = document.getElementById('usname').value;
    var newusage = document.getElementById('age').value;
    var newusphnumber = document.getElementById('phone').value;
    if (newusname && newusage && newusphnumber != "") {
        var userobj1 = new User(newusname, newusage, newusphnumber);
        studentlist.push(userobj1);
        var con = confirm("Do you want to register");
        if (con) {
            alert("Registration Successfull " + userobj1.UserId);
            console.log(userobj1.UserId);
        }
        else {
            alert("Registration Failed");
        }
    }
    else {
        alert("Complete the Form");
    }
}
function validateUser() {
    var homediv = document.getElementById('homediv');
    var newUser = document.getElementById('signupdiv');
    var existingUser = document.getElementById('logindiv');
    var dashboard = document.getElementById('dashboarddiv');
    var usIdcheck = false;
    var usid = document.getElementById('uid').value;
    for (var i = 0; i < studentlist.length; i++) {
        if (studentlist[i].UserId == usid) {
            homediv.style.display = "none";
            newUser.style.display = "none";
            existingUser.style.display = "none";
            dashboard.style.display = "block";
            currentUserid = studentlist[i].UserId;
            currentUsername = studentlist[i].Usname;
            return;
        }
        else {
            usIdcheck = true;
        }
    }
    if (usIdcheck) {
        alert("Enter Valid User Id");
    }
    else {
        alert("Enter Valid User Id.");
    }
}
function course_enroll() {
    var enrolled = document.getElementById('courses').value;
    var days = document.getElementById('days').value;
    var en = confirm("Do you want to buy a course:");
    if (en) {
        var enrollobj = new course(enrolled, days, currentUserid);
        courseList.push(enrollobj);
        alert("Course purchased successfully");
        console.log(enrollobj.courseName);
    }
    else {
        alert("course not purchased");
    }
}
function enroled() {
    var show = document.getElementById("enrolledCourses");
    var days = document.getElementById("days");
    var count = 0;
    var ans = "";
    var coursecount = 0;
    for (var i = 0; i < courseList.length; i++) {
        if (courseList[i].UserId == currentUserid) {
            if (courseList[i].courseName != "") {
                var coursename = courseList[i].courseName;
                var totaldays = parseInt(courseList[i].required_days);
                count += totaldays;
                var result = ("<b>Course Name :</b> <span>" + coursename + "</span><br><b> Total days for course:</b><span>" + totaldays + "</span><br>");
                ans += result;
            }
            else {
                coursecount += 0;
            }
        }
    }
    if (coursecount == 0) {
        var result = ("<b style='color:red'> No courses are enrolled</b>");
        show.innerHTML = result;
    }
    if (ans != "") {
        show.innerHTML = ans;
    }
    var countday = "<br><b>Total Number of days : </b><span>" + count + "</span>";
    days.innerHTML = countday;
}
