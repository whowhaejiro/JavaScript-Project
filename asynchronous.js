setTimeout(() => {
    console.log('This will log in 2 seconds')
}, 2000);

function greet() {
    console.log('Hello from greet function')
};
setTimeout(greet, 4000);

setTimeout(() => {
    console.log('data fetched')
}, 2000);
console.log('data fetching');

setTimeout(() => {
    console.log('datas')
}, 4000);

const sampleData = [
    {id:1, name: 'item 1', description: 'Description for item 1'},
    {id:2, name: 'item 2', description: 'Description for item 2'},
    {id:3, name: 'item 3', description: 'Description for item 3'},
]

async function fetchData() {
    console.log('Fetching Data.....')

    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            //sampleData.forEach(function(users) {
              //  console.log(users);
            //});
            console.log('data successfully fetched', sampleData)
            resolve(sampleData)
        }, 4000)
    });
};

//document.getElementById("fetchData");

//function fetchData() {
  //  button.addEventListener("click", function(e) {
      //  console.log(users);
    //});

//};



//document.getElementById("fetch-data").addEventListener('click', async () => {
  //  const dataContainer = document.getElementById("data-container");
    //dataContainer.innerHTML = 'Fetching data.....';

    //try {
      //  const data = await fetchData()
        //dataContainer.innerHTML = '';

        //data.forEach((item) => {
          //  const itemElement = document.createElement('div');
            //itemElement.innerHTML = `<h3>${item.name}</h3><p>${item.description}</p>`;
            //dataContainer.appendChild(itemElement);
        //});
    //} catch {
      //  dataContainer.innerHTML = 'Failed to fetch data';
        //console.log(error);
    //}
//})

async function displayData() {
    const dataList = document.getElementById('data-list')
    try {
        const data = await fetchData()
        const listItems = data.map(item => `<li>${item.name}:
            ${item.description}</li>`).join('');
        dataList.innerHTML = listItems;
    } catch (error) {
        console.log(error)
    }
}
displayData();