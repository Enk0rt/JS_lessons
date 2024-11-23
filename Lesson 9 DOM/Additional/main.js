let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let container = document.createElement('div');
container.classList.add('flex')

for (const item of coursesArray) {
    let info = document.createElement("div");
    info.classList.add('card-container');

    let h3 = document.createElement("h3")
    h3.innerText = `${item.title}`

    let p = document.createElement("p")

    if(item.monthDuration > 4) p.innerText = `${item.monthDuration} місяців, `
        else if(item.monthDuration === 1) p.innerText = `${item.monthDuration} місяць, `
    else p.innerText = `${item.monthDuration} місяці, `

    let span = document.createElement("span")
    span.innerText = `${item.hourDuration} годин`
    p.appendChild(span)

    let ul = document.createElement("ul")
    for (const moduleItem of item.modules) {
        let li = document.createElement("li");
        li.innerText = `${moduleItem}`
        ul.appendChild(li);
    }
    info.append(h3,p, ul)
    container.append(info)
}

document.body.appendChild(container)