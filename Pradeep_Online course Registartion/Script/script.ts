let autoincrementeduserid=1000;
let autoincrementedcourseid=100;
let currentUsername: string;
let currentUserid: string;
let enrolled:string;

// Class for user details
class User {

        UserId: string;
        Usname: string;
        Uage: string;
        Usphnumber: string;
    
        constructor(pusname: string, page: string, pphnumber: string) {
    
            autoincrementeduserid++;
    
            this.UserId = "Student" + autoincrementeduserid.toString();
    
            this. Usname = pusname;
            this. Uage = page;
            this. Usphnumber = pphnumber;
        }
    
    }
    // class for course details
class course {
    
    courseId: string;
    courseName: string;
    required_days:string;
    UserId: string;

    constructor( paramcourseName: string, paramcoursedays: string,paramuserId:string) {
        autoincrementedcourseid++;

        this.courseId = "course" +  autoincrementedcourseid.toString();
        this.courseName = paramcourseName;
        this.required_days= paramcoursedays;
        this.UserId=paramuserId;
        
    }
}

// Array for adding user details
let studentlist: Array<User> = new Array<User>();
let userobj=new User("Pradeep", "21","9500997791" );
studentlist.push(userobj);


let courseList: Array<course> = new Array<course>();


// signup(new user adding function) function
function signup()
 { 
     
let homediv = document.getElementById('homediv') as HTMLDivElement;
let newUser = document.getElementById('signupdiv') as HTMLDivElement;
let existingUser = document.getElementById('logindiv') as HTMLDivElement;
let dashboard = document.getElementById('dashboarddiv') as HTMLDivElement;
    
    homediv.style.display = "none";
    newUser.style.display = "block";
    existingUser.style.display="none";
    dashboard.style.display="none";
}

// funtion for signing in
function signin()
{     
let homediv = document.getElementById('homediv') as HTMLDivElement;
let newUser = document.getElementById('signupdiv') as HTMLDivElement;
let existingUser = document.getElementById('logindiv') as HTMLDivElement;
let dashboard = document.getElementById('dashboarddiv') as HTMLDivElement;
let availUser = document.getElementById('availableUser') as HTMLLabelElement;
    homediv.style.display = "none";
    newUser.style.display = "none";
    existingUser.style.display="block";
    dashboard.style.display="none";

    availUser.innerHTML = "<h2>Registered Users:</h2>";


    for (let i = 0; i < studentlist.length; i++) {

        availUser.innerHTML += `User Name : ${studentlist[i].Usname} | User Id : ${studentlist[i].UserId}<br>`;
    }

}
// function for getting user details
function register()
{
    let homediv = document.getElementById('homediv') as HTMLDivElement;
    let newUser = document.getElementById('signupdiv') as HTMLDivElement;
    let existingUser = document.getElementById('logindiv') as HTMLDivElement;
    let dashboard = document.getElementById('dashboarddiv') as HTMLDivElement;

    homediv.style.display = "block";
    newUser.style.display = "none";
    existingUser.style.display="none";
    dashboard.style.display="none";

        
        let newusname = (document.getElementById('usname') as HTMLInputElement).value;
        let newusage = (document.getElementById('age') as HTMLInputElement).value;
        let newusphnumber = (document.getElementById('phone') as HTMLInputElement).value;

        if(newusname &&newusage &&newusphnumber !="")
        {
            let userobj1=new User(newusname ,newusage ,newusphnumber);
            studentlist.push(userobj1);
            let con=confirm("Do you want to register");
            if(con)
            {
                alert("Registration Successfull " +userobj1.UserId);
                console.log(userobj1.UserId);
            }
            else{
                  alert("Registration Failed");
            }
        }
        else
        {
        alert("Complete the Form")
        }

}

function validateUser()
{
    let homediv = document.getElementById('homediv') as HTMLDivElement;
    let newUser = document.getElementById('signupdiv') as HTMLDivElement;
    let existingUser = document.getElementById('logindiv') as HTMLDivElement;
    let dashboard = document.getElementById('dashboarddiv') as HTMLDivElement;
    
    let usIdcheck: boolean = false;
    let usid = (document.getElementById('uid') as HTMLInputElement).value;

   for (let i = 0; i < studentlist.length; i++) 
   {
    if (studentlist[i].UserId == usid) 
    {
        homediv.style.display = "none";
        newUser.style.display = "none";
        existingUser.style.display="none";
        dashboard.style.display="block";

        currentUserid= studentlist[i].UserId;
        currentUsername = studentlist[i].Usname;
        return;
    }
     else
      {
           usIdcheck = true;
      }
    }
      if (usIdcheck) 
      {
         alert("Enter Valid User Id");
      }
      else 
      {
         alert("Enter Valid User Id.");
      }
}


function course_enroll() 
{

    let enrolled = (document.getElementById('courses') as HTMLSelectElement).value;
    let days =(document.getElementById('days') as HTMLInputElement).value;

    let en=confirm("Do you want to buy a course:");
    if(en)
    {
        let enrollobj=new course(enrolled,days,currentUserid);
        courseList.push(enrollobj);
        alert("Course purchased successfully");
        console.log(enrollobj.courseName);

    }
    else
    {
        alert("course not purchased");
    }

}
function enroled()
{
    let show = document.getElementById("enrolledCourses");
    let days = document.getElementById("days");

    let count=0;
    let ans="";
    let coursecount=0;

    for(let i=0;i<courseList.length;i++)
    {
        if(courseList[i].UserId == currentUserid)
        {
         
            if(courseList[i].courseName!="")
            {
                let coursename=courseList[i].courseName;
                let totaldays=parseInt(courseList[i].required_days);
                count+=totaldays;
                let result=("<b>Course Name :</b> <span>"+coursename+"</span><br><b> Total days for course:</b><span>"+totaldays+"</span><br>");
                ans+=result;

            }
            else
            {
                coursecount+=0;

            }
        }

    }
    if(coursecount==0)
    {
        let result =("<b style='color:red'> No courses are enrolled</b>");
        show.innerHTML = result;
    }
    if(ans!="")
    {
        show.innerHTML=ans;
    }
    let countday ="<br><b>Total Number of days : </b><span>"+count+"</span>";
    days.innerHTML=countday;
        


    
}

