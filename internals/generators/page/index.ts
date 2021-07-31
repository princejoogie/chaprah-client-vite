import { Actions, PlopGeneratorConfig } from 'node-plop';
import inquirer from 'inquirer';

import { pathExists } from '../utils';
import { baseGeneratorPath } from '../paths';

inquirer.registerPrompt('directory', require('inquirer-directory'));

export enum ComponentProptNames {
  componentName = 'componentName',
  routeName = 'routeName',
  wantPrivate = 'wantPrivate',
}

type Answers = { [P in ComponentProptNames]: string };

export const pageGenerator: PlopGeneratorConfig = {
  description: 'Add a page',
  prompts: [
    {
      type: 'input',
      name: ComponentProptNames.componentName,
      message: 'What should it be called?',
    },
    {
      type: 'input',
      name: ComponentProptNames.routeName,
      message: 'What should be the route of this page?',
    },
    {
      type: 'confirm',
      name: ComponentProptNames.wantPrivate,
      default: false,
      message: 'Do you want this page to be private?',
    },
  ],
  actions: data => {
    const answers = data as Answers;

    const componentPath = `${baseGeneratorPath}/pages/{{properCase ${ComponentProptNames.componentName}}}`;
    const actualComponentPath = `${baseGeneratorPath}/pages/${answers.componentName}`;

    if (pathExists(actualComponentPath)) {
      throw new Error(`Component '${answers.componentName}' already exists`);
    }
    const actions: Actions = [
      {
        type: 'add',
        path: `${componentPath}/index.tsx`,
        templateFile: './page/index.tsx.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${componentPath}/config.tsx`,
        templateFile: './page/config.tsx.hbs',
        abortOnFail: true,
      },
    ];

    actions.push({
      type: 'prettify',
      data: { path: `${actualComponentPath}/**` },
    });

    return actions;
  },
};
