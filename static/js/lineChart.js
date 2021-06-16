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
    
    console.log("PLOT ME");
    console.log(data);
    // TODO here you can redraw your plot with data
    var names = ['SquareShaded', 'Bargraph', 'Blank', 'CircleShaded'];
    var groups = new vis.DataSet();
    groups.add({
        id: 0,
        content: names[0],
        className: 'custom-style1',
        options: {
            drawPoints: {
                style: 'square' // square, circle
            },
            shaded: {
                orientation: 'bottom' // top, bottom
            }
        }});

    groups.add({
        id: 1,
        content: names[1],
        className: 'custom-style2',
        options: {
            style:'bar',
            drawPoints: {style: 'circle',
                size: 10
            }
        }});

    var container = document.getElementById('visualization');
    container.innerHTML = "";
    var items = JSON.parse(data);
    console.log(items)

    var dataset = new vis.DataSet(items);
    var options = {
        dataAxis: {
            showMinorLabels: false,
            right: {
                title: {
                    text: 'Title (right axis)'
                }
            }
        },
        legend: {left:{position:"bottom-left"}},
        start: '2014-06-09',
        end: '2014-07-03'
    };
    var graph2d = new vis.Graph2d(container, items, groups, options);

    function showIcons(show) {
        graph2d.setOptions({dataAxis: {icons: show}});
    }

    function showTitle(axis, show) {
        var title;
        if(show == true) {
            title = {text: "Title (" + axis + " axis)"};
        }
        else {
            title = {text: undefined};
        }

        if(axis == 'left') {
            graph2d.setOptions({dataAxis: {left: {title: title}}});
        }
        else {
            graph2d.setOptions({dataAxis: {right: {title: title}}});
        }
    }

    var colors=['red','green','blue','black','yellow','purple','pink'];
    function styleTitle(axis) {
        var title;
        title = {style: "color: " + colors[Math.floor(Math.random() * colors.length) + 1]};

        if(axis == 'left') {
            graph2d.setOptions({dataAxis: {left: {title: title}}});
        }
        else {
            graph2d.setOptions({dataAxis: {right: {title: title}}});
        }
    }
}