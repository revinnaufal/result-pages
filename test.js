//if(schoolObject.students[nim].status)
// '20216127 : 'Revin
const schoolObject = {
    students:{
        '20216127':{
            name : 'Revin Naufal Alief',
            password : '123',
            studentStatus : true,
            courses:{


            }

        },
        
        '20216128':{
            name: 'Allwinnaldo',
            password : '123',
            studentStatus : true,
            courses:{

            }
        },
        '20216129':{
            name : 'Muhammad Rasyid Redha',
            password : '123',
            studentStatus : true,
            courses:{

            }
        },
        '20216130':{
            name : 'Saviour',
            password : '123',
            studentStatus : true,
            courses:{

            }
        }
    },
    teachers:{

    }

}

const courseWeightObject = {
    'calculus' : 3,
    'physics' : 3,
    'ict seminar' : 3,
    'capstone design' : 3,
    'performance evaluation' : 3,
    'practicum' : 2,
    'blockchain' : 4
}

function teacher(){
    var opsi;
    while(opsi != 0){
        console.log(`\n\n~ Teacher Menu ~\n`);
        console.log('1. Input Student\'s Score');
        console.log(`2. Student List`);
        
        const numTeacherChoice = parseInt(prompt('Choose Menu: '));
        switch(numTeacherChoice){
            case 1:
                teacherMenu1();
                opsi=1;
                break;
            case 2:
                opsi=2;
                teacherMenu2();
                break;
            default:
                opsi=0;
                break;
        }

    }
}
function teacherMenu1(){
    var studentID = prompt('Please input the number ID of the student : ');
    
    //console.log(isMyObjectEmpty);

    try {
        var studentStatus = schoolObject.students[studentID].studentStatus;
        var subject = prompt('Input the name of the subject : ');
        var score = parseInt(prompt('Input the score of the subject : '));
        var gpa = numberToGPAConversion(score);

        schoolObject.students[studentID].courses[subject] = {
            weight : courseWeightObject[subject.toLocaleLowerCase()], 
            score : score, 
            gpa : gpa
        };

        console.log(`Successfully Added ${studentID} -> ${subject} : ${schoolObject.students[studentID].courses[subject].gpa}`);
        console.log(schoolObject.students[studentID]);
        
    } catch (error) {
        console.log('\n|---------------------------|');
        console.log('|                           |');
        console.log('| Student is not registered |');
        console.log('|                           |');
        console.log('|---------------------------|');
        
    }
    
    /*
    try {
        schoolObject.students[studentID][subject] = score;
        
    } catch (error) {
        schoolObject.students[studentID] ={};
    }*/
    


    
}

function teacherMenu2(){
    console.log(`\t\t  ~ Student List ~`);
    for(let keyObject in schoolObject.students){
        console.log(`\t${keyObject}\t${schoolObject.students[keyObject].name}`)
    }
}

function numberToGPAConversion(numericScore){
    var grade;
    if(numericScore > 80){
        grade = 'A';
    } else if(numericScore > 70 && numericScore<=80){
        grade = 'AB';
    } else if(numericScore >65 && numericScore<=70){
        grade = 'B';
    } else if(numericScore > 60 && numericScore<=65){
        grade = 'BC';
    } else if(numericScore >50 && numericScore <=60){
        grade = 'C';
    } else if(numericScore > 40 && numericScore <=50){
        grade = 'D';
    } else{
        grade = 'E';
    }
    return grade;
}

function gpaConvert(gpa){
    var gpaConversion;
    if(gpa === 'A'){
        gpaConversion = 4;
    } else if(gpa === 'AB'){
        gpaConversion = 3.5;
    } else if(gpa === 'B'){
        gpaConversion = 3
    }else if(gpa === 'BC'){
        gpaConversion = 2.5
    }else if(gpa === 'C'){
        gpaConversion = 2;
    }else if(gpa === 'D'){
        gpaConversion = 1;
    }else{
        gpaConversion = 0;
    }
    return gpaConversion;
}

function student(){
    var question = [{
        type : 'password',
        name : 'secret',
        message : 'Input your password\n'
    },]
    var studentID = prompt('Insert your student ID : ');
    var studentPassword = prompt('Insert your password :');
    /*
    var studentPassword = inquirer.prompt(question).then(
        answer =>{
            
            return answer.secret;
        }
    )
    console.log(studentPassword);*/

    if(schoolObject.students[studentID].password === studentPassword){
        studentMenu(studentID);

    }

}

function studentMenu(studentID){
    var opsi;
    while(opsi != 0){
        //console.log('Welcome Student')
        console.log(`\n~ Student Menu ~`);
        console.log(`1. View Report`);
        
        const numStudentChoice = parseInt(prompt('Choose Menu: '));
        switch(numStudentChoice){
            case 1:
                studentMenu1(studentID);
                opsi=1;
                break;
            case 2:
                opsi=2;
                //teacherMenu2();
                break;
            default:
                opsi=0;
                break;
        }

    }
}

function studentMenu1(studentID){
    console.log(`\nStudent Number : ${studentID}`);
    console.log(`Name           : ${schoolObject.students[studentID].name}`);
    console.log('\nNo.\tCourse Name\tSKS\tScore\tIndex')
    var i =1;
    var convertedGPA;
    var sumSKS = 0;
    var sumGPA = 0;
    var cumulativeGPA;
    for(let course in schoolObject.students[studentID].courses){
        console.log(`${i}\t${course}\t`+
            `${schoolObject.students[studentID].courses[course].weight}\t`+
            `${schoolObject.students[studentID].courses[course].score}\t`+
            `${schoolObject.students[studentID].courses[course].gpa}`);
        convertedGPA = gpaConvert(schoolObject.students[studentID].courses[course].gpa);
        sumSKS +=  schoolObject.students[studentID].courses[course].weight;
        sumGPA += (convertedGPA * schoolObject.students[studentID].courses[course].weight);

        i += 1;
    }
    //console.log(sumSKS);
    //console.log(sumGPA)
    cumulativeGPA = sumGPA/sumSKS;

    //console.log(`\nNo.\tCourse Name\tSKS\tScore\tIndex`);
    console.log('---\t-----------\t---\t-----\t-----+');
    console.log(`Cumulative GPA\t\t\t${cumulativeGPA}`)

}

const prompt = require('prompt-sync')({sigint: true});
const inquirer = require('inquirer');
var number = 1;
while(number !== 0){
    console.log(`=== BLOCKCHAIN-BASED STUDENT RESULT PAGES ====\n\n`);
    console.log(`~ MAIN MENU ~`);
    console.log(`1. Teacher`);
    console.log(`2. Student`);

    const num = prompt('Choose Menu: ');

    number = parseInt(num);;
    switch(number){
        case 1:
            teacher();
            break;
        case 2:
            student();
            break;
        default:
            break;
    }

}
