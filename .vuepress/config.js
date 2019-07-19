module.exports = {
    title: "Sample",
    dest: "dist",
    markdown: {
        extendMarkdown: md => {
           // md.use(require('markdown-it-footnote'))
        }
    },
    themeConfig: {
        search: true,
        displayAllHeaders: true,
        /*
        nav: function(linkList){
            let linkList2 = []
            for (let i = 0; i < linkList.length; i++) {
                linkList2.push({ text: linkList[i][1], link: linkList[i][0] })
            }
            return linkList2
        }(linkList),
        */
        navbar: true,
        sidebarDepth: 2, // max 2
        markdown: {lineNumbers:true},
    }
}
