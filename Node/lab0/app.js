import fs from "fs";
import inquirer from "inquirer";
import validator from "validator";

const questions = [
    {
        type : 'input',
        name : 'userName',
        message : 'Enter your name\n'
    },
    {
        type : 'input',
        name : 'email',
        validate : (input) =>{
            if(validator.isEmail(input)){
                return true;
            }
            else{
                return `wrong mail format\n`;
            }
        },
        message : 'Enter your email\n',
    },
    {
        type : 'password',
        name : 'password',
        mask : '*',
        message : 'Enter your password\n'
    }
]
let allusers = [];
if(fs.existsSync('./users.json')){
    const fileContet = fs.readFileSync('./users.json' , 'utf8');
    allusers = Array.isArray(JSON.parse(fileContet)) ? JSON.parse(fileContet) : [JSON.parse(fileContet)] ;
}

const data = await inquirer.prompt(questions);
allusers.push(data);
fs.writeFileSync("users.json" , JSON.stringify(allusers) , 'utf8');