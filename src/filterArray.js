export const filterArray = (category, array) => {
    if(category === 'all'){
        return array;
    }
    else{
        let filteredArr = array.filter((exercise) => {
           return exercise.focusArea === category;
     });
     return filteredArr;
    }
}