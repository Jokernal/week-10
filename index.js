import inquirer from "inquirer";
import Intern from './lib/Intern.js';
import Engineer from './lib/Engineer.js';
import Manager from './lib/Manager.js';
import siteGen from './src/siteGen.js';
import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "index.html");
const employees = [];

const promptManager = () => 
{

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your managers name? (Required)',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                }else {
                    console.log('No for real I need a name!');
                    return false;
                }
            },
        },
        {    
            type: 'input',
            name: 'employeeId',
            message: 'Enter employee ID of manager! (Required)',
            validate: idInput => {
                if(idInput) {
                    return true;
                }else {
                    console.log('No for real I need an ID number!');
                    return false;
                }
            },
        },
        {    
            type: 'input',
            name: 'email',
            message: 'Enter managers email! (Required)',
            validate: emailInput => {
                if(emailInput) {
                    return true;
                }else {
                    console.log('No for real I need an email!');
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your managers office number? (Required)',
            validate: officeInput => {
                if(officeInput) {
                    return true;
                }else {
                    console.log('No for real I need an office number!');
                    return false;
                }
            }
        }
    ]).then(responses =>{
        console.log(responses);
        const manager = new Manager(responses.name, responses.employeeId, responses.email, responses.officeNumber)
        employees.push(manager);
        promptMenu();
    })
};

const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'selection',
            message: 'select an option:',
            choices:['add engineer', 'add intern', 'DONE']
        }   
        
    ])
    .then(option => {

        if(option.selection === 'add engineer')
        {
            promptEngineer();
        }else if(option.selection === 'add intern')
        {
            promptIntern();
        }else{
            buildPage();
        }
      

    });
};

const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your engineers name? (Required)',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                }else {
                    console.log('No for real I need a name!');
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter employee ID of engineer! (Required)',
            validate: idInput => {
                if(idInput) {
                    return true;
                }else {
                    console.log('No for real I need an ID number!');
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter engineers email! (Required)',
            validate: emailInput => {
                if(emailInput) {
                    return true;
                }else {
                    console.log('No for real I need an email!');
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your engineers github? (Required)',
            validate: githubInput => {
                if(githubInput) {
                    return true;
                }else {
                    console.log('No for real I need a github!');
                    return false;
                }
            }
        }
    ]).then(responses =>{
        console.log(responses);
        const engineer = new Engineer(responses.name, responses.employeeId, responses.email, responses.github)
        employees.push(engineer);
        promptMenu();
    })
}

const promptIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your Intern name? (Required)',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                }else {
                    console.log('No for real I need a name!');
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter employee ID of Intern! (Required)',
            validate: idInput => {
                if(idInput) {
                    return true;
                }else {
                    console.log('No for real I need an ID number!');
                    return false;
                }
            },

        }, 
        {  
            type: 'input',
            name: 'email',
            message: 'Enter Intern email! (Required)',
            validate: emailInput => {
                if(emailInput) {
                    return true;
                }else {
                    console.log('No for real I need an email!');
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is your Interns school? (Required)',
            validate: githubInput => {
                if(githubInput) {
                    return true;
                }else {
                    console.log('No for real I need a school name!');
                    return false;
                }
            }
        }
    
    ]).then(responses =>{
        console.log(responses);
        const intern = new Intern(responses.name, responses.employeeId, responses.email, responses.school)
        employees.push(intern);
        promptMenu();
    })

  
}

const buildPage = () => {
    if(!fs.existsSync(OUTPUT_DIR)){
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, siteGen(employees), "utf-8");

}

promptManager();

