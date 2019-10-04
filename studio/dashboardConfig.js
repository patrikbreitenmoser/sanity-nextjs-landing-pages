export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d9760a3dcadcecb27baa536',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-vt59io8m',
                  apiId: 'c2413c66-b7f8-4b32-aa13-f800b3de0d22'
                },
                {
                  buildHookId: '5d9760a4cc7720daccc1b074',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-8q4z9amg',
                  apiId: '05c39fa9-d99d-44c3-826d-29bd8db00539'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/patrikbreitenmoser/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-8q4z9amg.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
