
const extraLanguages = ["en"] // English is currently the default so it isn't needed here.

const createLocalePage = (page, createPage) => {
  const { context, ...rest } = page

  const plpage = createPage({
    ...rest,
    context: {
      ...context,
      locale: "pl",
    },
  });
 
  if (extraLanguages.length) {
   
    extraLanguages.forEach(code => {
      const { path, context, ...rest } = page;
      
      
      const newpage = createPage({
        ...rest,
        path: `/${code}${path}`,
        // every page for each language gets the language code as a prefix
        // to its path: "/es/blog/<some-slug>" for example
        context: {
          ...context,
          locale: code,
        },
      })
      
    })
  }
}



exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  deletePage(page)

  createLocalePage(page, createPage)
  
}