import { Skill } from './../skill.model';
import * as SkillsActions from './skills.actions';

export interface State {
    skills: Skill[];
}

const initialState = {
    skills: []
};


export function SkillsReducers(state = initialState, action: SkillsActions.SkillsActions) {
    switch (action.type) {
        case SkillsActions.SET_SKILLS:
            return {
                ...state,
                skills: action.payload
            };
        case SkillsActions.ADD_SKILL:
            const newSkillTags = action.payload.tags.toString();
            const newSkillTagsArray = newSkillTags.split('#');
            newSkillTagsArray.splice(0, 1);
            action.payload.tags = newSkillTagsArray;
            return {
                ...state,
                skills: [...state.skills , action.payload]
            };
        case SkillsActions.UPDATE_SKILL:
            const updatedSkillTags = action.payload.item.tags.toString();
            const updatedSkillTagsArray = updatedSkillTags.split('#');
            updatedSkillTagsArray.splice(0, 1);
            action.payload.item.tags = updatedSkillTagsArray;
            const updatedSkill = action.payload.item;
            const nState = [...state.skills];
            nState[action.payload.index] = updatedSkill;
            return {
                ...state,
                skills: nState
            };
        case SkillsActions.DELETE_SKILL:
            const newState = [...state.skills];
            newState.splice(action.payload, 1);
            return {
                ...state,
                skills: newState
            };
        default:
            return state;
    }
}


// const initialState = {
//     skills: [
//         new Skill(
//             'english', 9,
//             'I am not certified but I believe myself to be at C1 proficency by CEFR standard.' +
//             'I have experience working in an Incentive Travel department where daily communication' +
//             'in english with people from all over the world was my bread and butter. I have no trouble' +
//             'comprehending technical language and documentation in this language',
//             ['english', 'language', 'communication', 'multicultural'],
//             './assets/logos/britain.svg'
//         ),
//         new Skill(
//             'spanish', 4,
//             'Self-tought via memrise and duolingo apps :) I know many words but have o experience using the' +
//             'language. I can understand a lot and convey an easy message, but using it live is way out of my level',
//             ['spanish', 'language', 'communication', 'multicultural'],
//             './assets/logos/spain.svg'
//         ),
//         new Skill(
//             'french', 2,
//             'Self-tought via memrise and duolingo apps :) I some words and i keep improving my vocabulary, ' +
//             'but it is more for reading and writing than heaving an actual conversation',
//             ['french', 'language', 'communication', 'multicultural'],
//             './assets/logos/france.svg'
//         ),
//         new Skill(
//             'polish', 10,
//             'My native language. \'Nuff said',
//             ['polish', 'language', 'communication', 'multicultural'],
//             './assets/logos/poland.svg'
//         ),
//         new Skill(
//             'HTML5', 3,
//             'You can see my work here',
//             ['html', 'html5', 'programming', 'frontend', 'front-end'],
//             './assets/logos/html5.svg'
//         ),
//         new Skill(
//             'CSS3', 3,
//             'You can see my work here',
//             ['css', 'css3', 'programming', 'design', 'frontend', 'front-end'],
//             './assets/logos/css3.svg'
//         ),
//         new Skill(
//             'JavaScript', 2,
//             'You can see my work here',
//             ['javascript', 'programming', 'frontend', 'front-end'],
//             './assets/logos/javascript.svg'
//         ),
//         new Skill(
//             'Angular 5', 4,
//             'You can see my work here',
//             ['angular', 'angular5', 'programming', 'frontend', 'front-end'],
//             './assets/logos/angular.svg'
//         ),
//         new Skill(
//             'Sass', 4,
//             'You can see my work here',
//             ['sass', 'css', 'programming', 'design', 'frontend', 'front-end'],
//             './assets/logos/sass.svg'
//         ),
//         new Skill(
//             'Adobe Photoshop', 3,
//             'You can see my work here',
//             ['adobe', 'photoshop', 'graphic', 'design'],
//             './assets/logos/photoshop.svg'
//         ),
//         new Skill(
//             'MS Word', 5,
//             'You can see my work here',
//             ['word', 'microsoft', 'msword', 'texteditor', 'text'],
//             './assets/logos/msword.svg'
//         ),
//         new Skill(
//             'MS Excel', 7,
//             'You can see my work here',
//             ['excel', 'microsoft', 'msexcel'],
//             './assets/logos/msexcel.svg'
//         ),
//         new Skill(
//             'MS PowerPoint', 5,
//             'You can see my work here',
//             ['powerpoint', 'presentation', 'microsoft'],
//             './assets/logos/powerpoint.svg'
//         ),
//         new Skill(
//             'LateX', 3,
//             'You can see my work here',
//             ['latex', 'text', 'texteditor'],
//             './assets/logos/latex.svg'
//         ),
//         new Skill(
//             'TypeScript', 4,
//             'You can see my work here',
//             ['typescript', 'programming', 'frontend', 'front-end'],
//             './assets/logos/typescript.svg'
//         ),
//         new Skill(
//             'MS SharePoint', 5,
//             'Experience as an user',
//             ['sharepoint', 'microsoft', 'mssharepoint', 'workflow'],
//             './assets/logos/ms_sharepoint.svg'
//         ),
//         new Skill(
//             'SQL', 3,
//             'Academic knowledge',
//             ['query', 'sql', 'backend', 'back-end', 'database'],
//             './assets/logos/sql.png'
//         ),
//         new Skill(
//             'Git', 6,
//             'I do some control but have no experience working with others',
//             ['git', 'versioncontrol', 'control', 'repository'],
//             './assets/logos/git.svg'
//         ),
//         new Skill(
//             'Redux(NgRx)', 3,
//             'Trying to use it even when it\'s not needed',
//             ['redux', 'ngrx', 'optimalization'],
//             './assets/logos/ngrx.png'
//         ),
//         new Skill(
//             'node.js', 3,
//             'gonna learn',
//             ['node', 'node.js', 'nodejs', 'backend', 'back-end'],
//             './assets/logos/nodejs.svg'
//         ),
//         new Skill(
//             'Adobe Illustrator', 0,
//             'gonna learn',
//             ['adobe', 'illustrator', 'design', 'graphic'],
//             './assets/logos/illustrator.svg'
//         ),
//         new Skill(
//             'Driving Licence', 4,
//             'licence duh',
//             ['car', 'lincece', 'driving', 'auto'],
//             './assets/logos/car.svg'
//         )
//     ]
// };
