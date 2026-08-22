// 1-Écris une fonction removeByIndex qui supprime l’élément à l’index donné et retourne le nouveau tableau.
function removeByIndex(tab, index) {
  tab.splice(index, 1);
  return tab;
}
console.log(removeByIndex([10, 20, 30, 40], 2));



// 2-Écris une fonction pick qui prend un objet et un tableau de clés, et retourne un nouvel objet avec seulement ces clés.
function pick(obj, keys) {
  return keys.reduce((result, key) => {
    if (key in obj) {
      result[key] = obj[key];
    }
    return result;
  }, {});
}

const user = {
  nom: "Semeh",
  age: 26,
  ville: "sousse",
  email: "missaouismeh@gmail.com"
};

console.log(pick(user, ["nom", "ville"]));




//3- Écris une fonction mostFrequent qui prend un tableau et retourne la valeur qui apparaît le plus souvent dans un tableau.
function mostFrequent(arr) {
  let counts = {}; 

  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    if (counts[value]) {
      counts[value] = counts[value] + 1;
    } else {
      counts[value] = 1;
    }
  }

  let maxCount = 0;
  let maxValue = arr[0];

  for (let key in counts) {
    if (counts[key] > maxCount) {
      maxCount = counts[key];
      maxValue = key;
    }
  }

  return maxValue;
}
const nums = [1, 3, 3, 2, 1, 3, 5];
console.log(mostFrequent(nums));
