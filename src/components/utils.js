exports.categoryList = (list) => {
        
    const categories = []

    list.forEach((item) => {
    categories.push(item.category)
})
const uniqueCategories = [...new Set (categories)]
return uniqueCategories

}