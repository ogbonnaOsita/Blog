// Function to sort data in descending order
export const sortByDate = (field) => {
  return function (a, b) {
    const dateA = new Date(a[field]);
    const dateB = new Date(b[field]);
    return dateB - dateA;
  };
};

// Function to pick one object from each category after sorting by date
export const pickOneFromEachCategory = (data) => {
  const sortedData = data.sort(sortByDate("published_at"));

  const uniqueCategories = new Set();
  const pickedObjects = [];

  for (const obj of sortedData) {
    if (!uniqueCategories.has(obj.category)) {
      uniqueCategories.add(obj.category);
      pickedObjects.push(obj);
    }
  }

  return pickedObjects;
};

// Function to get only objects of the same category from the JSON data
export const getObjectsOfSameCategory = (data, category) => {
  return data.filter((obj) => obj.category === category);
};
