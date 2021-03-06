/* eslint-disable no-undef */
module.exports = function (plop) {
  plop.setGenerator('components', {
    description: 'application component logic',

    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name?',
      },
    ],

    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/index.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/styles.ts',
        templateFile: 'templates/styles.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/test.spec.tsx',
        templateFile: 'templates/test.spec.tsx.hbs',
      },
    ],
  });
};
