const generateTeam = (team) => {
    console.log(team);
    const html = [];
    const generateManager = manager => {
        console.log(manager);
        let managerHTML = 
        `<div class ="card" style = "width: 20rem;">
            <div class="card-header">${manager.name}<br/><i></i>Manager</div>
            <ul>
                <li> ID: ${manager.id}</li>
                <li> Email: <span id="email><a href="mailto:${manager.email}">${manager.email}</a></span></li>
                <li>Office Number: ${manager.officeNumber}</li>
            </ul>
        <div>
        `;
        html.push(managerHTML);
        
    }

    const generateEngineer = engineer => {
        console.log(engineer);
        let engineerHTML = 
        `<div class ="card" style = "width: 20rem;">
            <div class="card-header">${engineer.name}<br/><i></i>Engineer</div>
            <ul>
                <li> ID: ${engineer.id}</li>
                <li> Email: <span id="email><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
                <li>Github: ${engineer.github}</li>
            </ul>
        <div>
        `;
        html.push(engineerHTML);
        
    }
    const generateIntern = intern => {
        console.log(intern);
        let internHTML = 
        `<div class ="card" style = "width: 20rem;">
            <div class="card-header">${intern.name}<br/><i></i>Intern</div>
            <ul>
                <li> ID: ${intern.id}</li>
                <li> Email: <span id="email><a href="mailto:${intern.email}">${intern.email}</a></span></li>
                <li>School: ${intern.school}</li>
            </ul>
        <div>
        `;
        html.push(internHTML);
        
    }

    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === "Manager") {
            generateManager(team[i]);
        }
        if (team[i].getRole() === "Engineer") {
            generateEngineer(team[i]);
        }
        if (team[i].getRole() === "Intern") {
            generateIntern(team[i]);
        }
    }

    return html.join('');
}

export default team => {

    return `
    <!DOCTYPE html>
    <html lang ="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Employee list</title>
    </head>
    <body>
        <header>
        <h1> Employees </h1>
        </header>

        <main> ${generateTeam(team)}</main>

    </body>
    `;
}