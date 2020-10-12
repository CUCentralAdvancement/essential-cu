// construct an instance of Headroom, passing the element
let myElement = document.querySelector("header");
let headroom = new Headroom(myElement);
headroom.init();
AOS.init({
    once: true
});
$(document).foundation();

$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  return elementBottom > viewportTop && elementTop < viewportBottom;
};


// Page Arrow Animations
let scrolling = false;
const arrows = document.querySelectorAll('.svg-arrow');
const drawArrow = (el) => {
  el.dataset.drawn = true;
  new Vivus(el.id, {
    duration: 50,
    type: "oneByOne",
    animTimingFunction: Vivus.EASE
  });
}

$(window).scroll(() => scrolling = true);

setInterval(() => {
  if (scrolling) {
    scrolling = false;
    [...arrows].forEach(arrow => {
      if ($(arrow).isInViewport() && !arrow.dataset.drawn) drawArrow(arrow);
    });
  }
}, 250);

// Number Counters
$(window).on("scroll", function() {
  var numberCount = $(".count");

  if (numberCount.length) {
    numberCount.each(function () {
      if ($(this).isInViewport() && $(this).attr("data-count") === "false" && !$(this).hasClass("count-decimal")) {
        $(this).prop("Counter", 0).animate({
          opacity: 1,
          Counter: $(this).text()
        }, {
          duration: 2000,
          easing: "swing",
          step: function (now) {
            $(this).text( Math.ceil(now).toLocaleString("en") );
          }
        });
        $(this).attr("data-count", true);
      } else if ($(this).isInViewport() && $(this).attr("data-count") === "false" && $(this).hasClass("count-decimal")) {
        $(this).prop("Counter", 0).animate({
          opacity: 1,
          Counter: $(this).text()
        }, {
          duration: 2000,
          easing: "swing",
          step: function (now) {
            $(this).text( (Math.ceil(now) / 100).toLocaleString("en") );
          }
        });
        $(this).attr("data-count", true);
      }
    });
  }
});



(function() {
  let quotes = $(".quotes");
  let quoteIndex = -1;

  function showNextQuote() {
    ++quoteIndex;
    quotes
      .eq(quoteIndex % quotes.length)
      .fadeIn(1000).css("display","block")
      .delay(1000)
      .fadeOut(1000, showNextQuote);
  }

  showNextQuote();
})();

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
  document.body.style.overflow = "hidden";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  document.body.style.overflow = "visible";
}

// Chartjs
if ( $("#CU-endowment__figure--graph").length ) {
  new Chart(document.getElementById("CU-endowment__figure--graph"), {
    type: "bar",
    data: {
      labels: ["2013", "2014", "2015", "2016", "2017", "2018"],
      datasets: [
        {
          label: "Endowment generated",
          data: [0.879, 1.06, 1.09, 1.06, 1.22, 1.36],
          backgroundColor: [
            "#c7b277",
            "#c7b277",
            "#c7b277",
            "#c7b277",
            "#c7b277",
            "#9ea0a5"
          ],
          borderWidth: 0
        }
      ]
    },
    options: {

            layout: {
                padding: {
                    top: 10
                }
            },

        tooltips: {
            enabled: false
        },
      plugins: {
        datalabels: {
          align: "end",
          anchor: "end",
          color: "black",
          FontFamily: "Reef",
          FontStyle: "Bold",
          font: function(context) {
            let w = context.chart.width;
            return {
              size: w < 512 ? 12 : 14
            };
          },
          formatter: function(value, context) {
            if (value > 1) {
              return "$" + value + " B";
            } else {
              return "$" + value.toString().slice(2) + " M";
            }
          }
        }
      },
      legend: {
        display: false
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              display: false
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              color: "rgba(0, 0, 0, 0)"
            },
            ticks: {
              display: false
            }
          }
        ]
      }
    }
  });
}

// Financials chart
if ( $("#financials-endowments-bargraph").length ) {
  var financialsEndowmentsBarGraph = $("#financials-endowments-bargraph");
  var endowmentData = {
    labels: ["2013", "2014", "2015", "2016", "2017", "2018"],
    datasets: [{
      label: "idk what to put for the tooltip label",
      fontColor: '#fff',
      data: [0.879, 1.06, 1.09, 1.06, 1.22, 1.36],
      backgroundColor: [
        "#c7b277",
        "#c7b277",
        "#c7b277",
        "#c7b277",
        "#c7b277",
        "#9ea0a5"
      ],
      borderWidth: 0
    }]
  };
  var endowmentOptions = {
      layout: {
          padding: {
              top: 10
          }
      },
    plugins: {
      datalabels: {
        align: "end",
        anchor: "end",
        color: "white",
        FontFamily: "Reef",
        FontStyle: "Bold",
        font: function(context) {
          let w = context.chart.width;
          return {
            size: w < 512 ? 12 : 14
          };
        },
        formatter: function(value, context) {
          if (value > 1) {
            return "$" + value + " B";
          } else {
            return "$" + value.toString().slice(2) + " M";
          }
        }
      }
    },
    legend: {
      display: false,
      labels: {

      }
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            color: "rgba(0, 0, 0, 0)"
          },
          ticks: {
            display: false
          }
        }
      ]
    }
  };

  $(window).on("scroll", function() {
    if (financialsEndowmentsBarGraph.isInViewport() && financialsEndowmentsBarGraph.attr("data-graph") === "false") {
      var myChart = new Chart(financialsEndowmentsBarGraph, {
        type: "bar",
        data: endowmentData,
        options: endowmentOptions
      });

      financialsEndowmentsBarGraph.attr("data-graph", true);
    }
  });
}

// Financials Transfer doughnut chart
if ( $("#financials-transfers-doughnut").length ) {
    // Set usePointStyle = true to turn legend rectangle into a circle.
    Chart.defaults.global.legend.labels.usePointStyle = true;

    var transferData = {
        labels: [
            "Academic support",
            "Capital projects",
            "Scholarships",
            "Advancement support",
            "Research",
            "Chairs, professorships and other faculty support",
            "Public service, administration, library and other support",
            "Athletics",
        ],
        datasets: [{
            label: "Transfers to CU in fiscal year 2018",
            backgroundColor: [
                "#cab37c",
                "#4d525a",
                "#fed56a",
                "#9ea0a5",
                "#d6cca6",
                "#595955",
                "#7b6f4b",
                "#ffffff"
            ],
            hoverBackgroundColor: [
                "#cab37c",
                "#4d525a",
                "#fed56a",
                "#9ea0a5",
                "#d6cca6",
                "#595955",
                "#7b6f4b",
                "#ffffff"
            ],
            borderColor: ["#cab37c", "#4d525a","#fed56a","#9ea0a5","#d6cca6", "#595955", "#7b6f4b", "#ffffff"],
            data: [30, 13, 13, 12, 11, 10, 8, 3],
        }]
    };

    var transferOptions = {
        responsive: true,
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 50,
                bottom: 50
            }
        },
        title: {
            display: false,
            text: "Transfers to CU in fiscal year 2018",
        },
        legend: {
            display: false,
            onClick: function(event, legendItem) {},
            // position: "left",
            // labels: {
            //   fontSize: 15,
            //   fontFamily: "Roboto, sans-serif",
            //   padding: 20,
            //   boxWidth: 50,
            // }
        },
        legendCallback: function(chart) {
            var ul = document.createElement("ul");
            ul.className = "no-bullet";
            var borderColor = chart.data.datasets[0].borderColor;
            chart.data.labels.forEach(function(label, index) {
                ul.innerHTML += '<li><span style="background-color: ' + borderColor[index]+ '"></span>' + label + '</li>'; // ^ ES6 Template String
            });
            return ul.outerHTML;
        },
        cutoutPercentage: 70,
        animation: {
            animateScale: true,
            animateRotate: true
        },
        tooltips: {
            enabled: false,
        },
        plugins: {
            beforeInit: function(c) {
                var data = c.data.datasets[0].data
                var data_sum = data.reduce((a, b) => a + b, 0);
                var each_one = 100 / data_sum;
                c.data.datasets[0].data = data.map(e => e * each_one);
            },
            datalabels: {
                align: "end",
                anchor: "end",
                color: "#ffffff",
                FontFamily: "Roboto",
                FontStyle: "300",
                font: function(context) {
                    let w = context.chart.width;
                    return {
                        size: w < 512 ? 22 : 24
                    };
                },
                formatter: function(value, context) {
                    return value + "%";
                }
            }
        },
    };

    var financialsTransferDoughnut = $("#financials-transfers-doughnut");
    $(window).on("scroll", function() {
        if (financialsTransferDoughnut.isInViewport() && financialsTransferDoughnut.attr("data-graph") === "false") {
            // var ctx = $("#financials-asset-allocation-doughnut");
            var myChart = new Chart(financialsTransferDoughnut, {
                type: "doughnut",
                data: transferData,
                options: transferOptions
            });

            if (document.getElementById("financials-transfers-doughnut-legend")) {
                document.getElementById("financials-transfers-doughnut-legend").innerHTML = myChart.generateLegend();
            }

            if (document.getElementById("financials-transfers-doughnut-legend-mobile")) {
                document.getElementById("financials-transfers-doughnut-legend-mobile").innerHTML = myChart.generateLegend();
            }

            financialsTransferDoughnut.attr("data-graph", true);
        }
    });
}

// Financials LTIP Bar Graph
if( $("#financials-ltip-bargraph").length ) {
  var ltipData = {
    labels: ["3 Year", "5 Year", "10 Year"],
    datasets: [{
      label: "LTIP",
      backgroundColor: "#cab37c",
      hoverBackgroundColor: "#cab37c",
      data: [7.5, 8.9, 6.4]
    }, {
      label: "Policy Benchmark",
      backgroundColor: "#4d535c",
      hoverBackgroundColor: "#4d535c",
      data: [7.0, 8.4, 6.2]
    }]
  };

  var ltipOptions = {
    responsive: true,
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 20,
        bottom: 0
      }
    },
    title: {
      display: false,
      text: "CU's long-term investments outpace our benchmark",
    },
    legend: {
      display: true,
      onClick: function(event, legendItem) {},
      position: "bottom",
      labels: {
        fontSize: 15,
        fontFamily: "Roboto, sans-serif",
        padding: 20,
        boxWidth: 50,
      }
    },
    tooltips: {
      enabled: false,
    },
    plugins: {
      datalabels: {
        align: "end",
        anchor: "end",
        color: "#000",
        font: function(context) {
          let w = context.chart.width;
          return {
            size: w < 512 ? 18 : 20,
            family: "Reef",
            style: "Bold"
          };
        },
        formatter: function(value, context) {
          return value + "%";
        }
      }
    },
    scales: {
      xAxes: [{
        categoryPercentage: 0.9,
        barPercentage: 1.0,
        gridLines: {
          display: false
        }
      }],
      yAxes: [
        {
          gridLines: {
            color: "rgba(0, 0, 0, 0)"
          },
          ticks: {
            display: false
          }
        }
      ]
    }
  };

  var financialsLTipBar = $("#financials-ltip-bargraph");
  $(window).on("scroll", function() {
    if (financialsLTipBar.isInViewport() && financialsLTipBar.attr("data-graph") === "false") {
      var myChart = new Chart(financialsLTipBar, {
        type: "bar",
        data: ltipData,
        options: ltipOptions
      });

      financialsLTipBar.attr("data-graph", true);
    }
  });
}

// Financials LTIP asset allocation in fiscal year 2018
if ( $("#financials-asset-allocation-doughnut").length ) {
  // Set usePointStyle = true to turn legend rectangle into a circle.
  Chart.defaults.global.legend.labels.usePointStyle = true;

  var assetAllocationData = {
    labels: [
      "International equities",
      "Global private capital",
      "Domestic equities",
      "Hedge funds",
      "Real assets",
      "Fixed income and cash",
    ],
    datasets: [{
      backgroundColor: [
          "#cab37c",
          "#4d525a",
          "#fed56a",
          "#9ea0a5",
          "#d6cca6",
          "#000",

      ],
        hoverBackgroundColor: [
            "#cab37c",
            "#4d525a",
            "#fed56a",
            "#9ea0a5",
            "#d6cca6",
            "#000",

        ],
        borderColor: ["#cab37c", "#4d525a","#fed56a","#9ea0a5","#d6cca6", "#000"],
      data: [29, 24, 20, 15, 8, 4],
    }]
  };

  var assetAllocationOptions = {
    responsive: true,
    layout: {
      padding: 50
    },
    title: {
      display: false,
      text: "LTIP asset allocation in fiscal year 2018",
    },
    legend: {
      display: false,
      onClick: function(event, legendItem) {},
    },
      legendCallback: function(chart) {
          var ul = document.createElement("ul");
          ul.className = "no-bullet";
          var borderColor = chart.data.datasets[0].borderColor;
          chart.data.labels.forEach(function(label, index) {
              ul.innerHTML += '<li><span style="background-color: ' + borderColor[index]+ '"></span>' + label + '</li>'; // ^ ES6 Template String
          });
          return ul.outerHTML;
      },
    cutoutPercentage: 70,
    animation: {
      animateScale: true,
      animateRotate: true
    },
    tooltips: {
      enabled: false,
    },
    plugins: {
      beforeInit: function(c) {
        var data = c.data.datasets[0].data
        var data_sum = data.reduce((a, b) => a + b, 0);
        var each_one = 100 / data_sum;
        c.data.datasets[0].data = data.map(e => e * each_one);
      },
      datalabels: {
        align: "end",
        anchor: "end",
        color: [
            "#cab37c",
            "#4d525a",
            "#fed56a",
            "#9ea0a5",
            "#d6cca6",
            "#000",
        ],
        FontFamily: "Roboto",
        FontStyle: "300",
        font: function(context) {
          let w = context.chart.width;
          return {
            size: w < 512 ? 22 : 24
          };
        },
        formatter: function(value, context) {
          return value + "%";
        }
      }
    },
  };

  var financialsAssetAllocationDoughnut = $("#financials-asset-allocation-doughnut");
  $(window).on("scroll", function() {
    if (financialsAssetAllocationDoughnut.isInViewport() && financialsAssetAllocationDoughnut.attr("data-graph") === "false") {
      // var ctx = $("#financials-asset-allocation-doughnut");
      var myChart = new Chart(financialsAssetAllocationDoughnut, {
        type: "doughnut",
        data: assetAllocationData,
        options: assetAllocationOptions
      });

      if (document.getElementById("financials-asset-allocation-doughnut-legend")) {
          document.getElementById("financials-asset-allocation-doughnut-legend").innerHTML = myChart.generateLegend();
      }

    if (document.getElementById("financials-asset-allocation-doughnut-legend-mobile")) {
        document.getElementById("financials-asset-allocation-doughnut-legend-mobile").innerHTML = myChart.generateLegend();
    }
      financialsAssetAllocationDoughnut.attr("data-graph", true);
    }
  });
}

// Private Support doughnut chart
if ( $("#private-support-chart").length ) {
  // Set usePointStyle = true to turn legend rectangle into a circle.
  Chart.defaults.global.legend.labels.usePointStyle = true;

  var data = {
    labels: [
      "CU Anschutz",
      "CU Boulder",
      "CU Denver",
      "UCCS",
    ],
    datasets: [{
      label: "CU System Totals",
      backgroundColor: [
        "#cab37c",
        "#231f20",
        "#9ea0a5",
        "#fed56a",
      ],
      hoverBackgroundColor: [
        "#cab37c",
        "#231f20",
        "#9ea0a5",
        "#fed56a",
      ],
      borderWidth: [0, 0, 0, 0],
      borderColor: ["#cab37c", "#231f20","#9ea0a5","#fed56a"],
      hoverBorderColor: ["#cab37c", "#231f20","#9ea0a5","#fed56a"],
      data: [58, 34, 5, 4],
    }]
  };

  var options = {
    responsive: true,
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 50,
        bottom: 50
      }
    },
    title: {
      display: false,
      text: "CU System Totals",
    },
    legend: {
      display: false,
      onClick: function(event, legendItem) {},
    },
    legendCallback: function(chart) {
      var ul = document.createElement("ul");
      ul.className = "no-bullet";
      var bgColor = chart.data.datasets[0].backgroundColor;
      chart.data.labels.forEach(function(label, index) {
        ul.innerHTML += `
            	<li>
               	<span style="background-color: ${bgColor[index]}"></span>
                  ${label}
               </li>
            `; // ^ ES6 Template String
      });
      return ul.outerHTML;
    },
    cutoutPercentage: 70,
    animation: {
      animateScale: true,
      animateRotate: true
    },
    tooltips: {
      enabled: false,
    },
    plugins: {
      beforeInit: function(c) {
        var data = c.data.datasets[0].data
        var data_sum = data.reduce((a, b) => a + b, 0);
        var each_one = 100 / data_sum;
        c.data.datasets[0].data = data.map(e => e * each_one);
      },
      datalabels: {
        align: "end",
        anchor: "end",
        color: [
          "#cab37c",
          "#231f20",
          "#9ea0a5",
          "#fed56a",
        ],
        FontFamily: "Roboto",
        FontStyle: "300",
        font: function(context) {
          let w = context.chart.width;
          return {
            size: w < 512 ? 22 : 24
          };
        },
        formatter: function(value, context) {
          return value + "%";
        }
      }
    },
  };

  var privateSupportDoughnut = $("#private-support-chart");
  $(window).on("scroll", function() {
    if (privateSupportDoughnut.isInViewport() && privateSupportDoughnut.attr("data-graph") === "false") {
      var myChart = new Chart(privateSupportDoughnut, {
        type: "doughnut",
        data: data,
        options: options
      });

      document.getElementById("private-support-chart-legend").innerHTML = myChart.generateLegend();
      privateSupportDoughnut.attr("data-graph", true);
    }
  });

  $(".slick-slider-container").on('beforeChange', function(event, slick, currentSlide, nextSlide){
    // update chart borderWidth array on slide change
  });
}


if ( $(".slick-slider-container").length ) {
  $(".slick-slider-container").slick({
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    customPaging: (slider, i) => {
      return $(slider.$slides[i]).find('.slide').attr('data-title');
    },
    dots: true,
    autoplay: false,
    autoplaySpeed: 3000,
    draggable: false,
    swipe: false
  });
}
