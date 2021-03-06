import path from 'path';
import fs from 'fs';
import { remote } from 'electron';

const { app } = remote;

function getBasePath(projectId) {
    return window.localStorage.getItem('project-path-' + projectId);
}

let Projects = [];
const settingFilePath = path.resolve(app.getAppPath(), 'setting.json');
try {
    const content = fs.readFileSync(settingFilePath, 'utf-8');
    Projects = JSON.parse(content);
}catch(err) {
    Projects = [{
        id: 'visitor',
        name: '访客端',
        neiPath: 'nei.10731.a8daca0dfdf4eb1d7b1f1024c605c9e5',
        envType: '',
        tasks: [{
            name: 'nei',
            cmd: 'nei server',
            rpath: '',
            pid: null,
            logs: []
        }, {
            name: 'mcss',
            cmd: 'mcss -w 1',
            rpath: 'src/main/webapp/',
            pid: null,
            logs: []
        }]
    }, {
        id: 'kefu',
        name: '客服端',
        neiPath: 'nei.10680.b3d1a5bda566b026a5c9ff97aee94c72',
        envType: '',
        tasks: [{
            name: 'nei',
            cmd: 'nei server -k b3d1a5bda566b026a5c9ff97aee94c72',
            rpath: '',
            pid: null,
            logs: []
        }, {
            name: 'mcss',
            cmd: 'mcss -c mcssflex.json -w 1',
            rpath: 'src/main/webapp/',
            pid: null,
            logs: []
        }]
    }, {
        id: 'admin',
        name: '管理端',
        neiPath: 'nei.10681.438b741d9582957f7545e34e2a0e2e59',
        envType: '',
        tasks: [{
            name: 'nei',
            cmd: 'nei server -k 438b741d9582957f7545e34e2a0e2e59',
            rpath: '',
            pid: null,
            logs: []
        }, {
            name: 'mcss',
            cmd: 'mcss -c mcssflex.json -w 1',
            rpath: 'src/main/webapp/',
            pid: null,
            logs: []
        }]
    }]
}

Projects.forEach(project => {
    project.basePath = getBasePath(project.id);
});

export default Projects;