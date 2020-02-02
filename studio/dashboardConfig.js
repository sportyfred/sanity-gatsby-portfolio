export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5e3747abe461b6c5608bd934',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-1v5pahmk',
                  apiId: '926f1fbb-0190-4a5a-9e40-5f760a354039'
                },
                {
                  buildHookId: '5e3747abc2ca7510fa8669cd',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-jabo5bc3',
                  apiId: 'b4aaf97e-cbea-4d19-9d2c-fc8670d410df'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sportyfred/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-jabo5bc3.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
