const readCsvData = () => {
    axios.post('/list', {
        file: 'oida',
        lastName: 'Flintstone'
      })
      .then((response) => {
        const data = response.data;
        let $csvList = document.querySelector("#csv-list");
        data.forEach((e, idx) => {
            const li = document.createElement('li');
            li.textContent = e;
            li.id = "list" + idx;
            li.onclick = () => getCsvFile(e, idx);
            $csvList.appendChild(li)
        })
        console.log(data)
      })
      .catch(function (error) {
        console.log(error);
      });
}

const getCsvFile = (name, idx) => {
    console.log(name)
    const url = "/file";
    axios.post(url, {
        file: name
    })
    .then((response) => {
        document.querySelector("#raw").textContent = response.data;
        redrawPlot(response.data);
    })
}

const redrawPlot = (data) => {
    
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }, {
                label: 'OIDA',
                data: [15, 11, 12, 15, 12, 13],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    }); 
}