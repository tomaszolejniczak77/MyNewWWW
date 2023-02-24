fetch(
  "https://api.open-meteo.com/v1/forecast?latitude=52.22&longitude=19.34&hourly=temperature_2m,precipitation_probability,precipitation,weathercode,pressure_msl,cloudcover,windspeed_10m,windspeed_120m,windgusts_10m&timezone=Europe%2FBerlin"
)
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    let a = res.hourly.time;
    let b = res.hourly.pressure_msl;
    let c = res.hourly.windspeed_10m;
    let d = res.hourly.temperature_2m;
    let e = res.hourly.windgusts_10m;

    let test = " ";
    let test1 = " ";
    let test2 = " ";
    let test3 = " ";

    for (i = 0; i < 24; i++) {
      test = test + d[i] + "<br>";
      test1 = test1 + a[i] + "<br>";
      test2 = test2 + b[i] + "<br>";
      test3 = test3 + c[i] + "<br>";

      // let element1 = "pressure" + i;
      // let element2 = "time" + i;
      // let element3 = "wind" + i;
      // let element4 = "temperature" + i;
      // document.getElementById("weather").innerHTML =
      //   '<p id="' +
      //   element2 +
      //   '"></p>' +
      //   "<br/>" +
      //   '<p id="' +
      //   element1 +
      //   '"></p>' +
      //   "<br/>" +
      //   '<p id="' +
      //   element3 +
      //   '"></p>' +
      //   "<br/>" +
      //   '<p id="' +
      //   element4 +
      //   '"></p>';
      // document.getElementById(element1).innerHTML = test2;
      // document.getElementById(element2).innerHTML = test1;
      // document.getElementById(element3).innerHTML = test3;
      // document.getElementById(element4).innerHTML = test;
    }

    let xValues = [
      00, 01, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18,
      19, 20, 21, 22, 23,
    ];
    let yValues = d;
    let yValues1 = c;
    let yValues2 = b;

    new Chart("myChart", {
      type: "line",
      data: {
        labels: xValues,
        datasets: [
          {
            borderColor: "green",
            data: yValues,
            fill: false,
            label: "temperature °C",
          },
          {
            borderColor: "red",
            data: yValues1,
            fill: false,
            label: "wind km/h",
          },
        ],
      },
      options: {
        legend: {
          display: true,
        },

        title: {
          display: true,
          text: "24 hours weather in Kutno",
        },
      },
    });

    new Chart("myChart1", {
      type: "line",
      data: {
        labels: xValues,
        datasets: [
          {
            borderColor: "blue",
            data: yValues2,
            fill: false,
            label: "pressure hPa",
          },
        ],
      },
      options: {
        legend: {
          display: true,
        },

        title: {
          display: true,
          text: "24 hours weather in Kutno",
        },
      },
    });
  });
