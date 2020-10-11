export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5f8313c12c8e2f08191c0067',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-h7fgu4ee',
                  apiId: '9e0fff16-f342-4239-96cb-fd2742606b77'
                },
                {
                  buildHookId: '5f8313c2005db83a5fecc734',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-46aefox1',
                  apiId: 'a0a40d18-82c0-46ed-a179-22456b0ce11e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/KaterinaLandova/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-46aefox1.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
