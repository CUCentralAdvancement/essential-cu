// ***** Financials page JS ******
$(function() {
  var $window = $( window );
  var $body = $( 'body' );

  var $slider = $( '.js-fin-slider' );

  // run progressive image loader on Slick init (must define before instantiated)
  $slider.on( 'init', function(){
    progressiveImageLoader();
  });

  // Run SLICK for Story slider
  $slider.slick({
    infinite: false,
    adaptiveHeight: true
  });

  // focus on first slide so keyboard nav works immediately - https://github.com/kenwheeler/slick/issues/901
  $slider.find('.slick-active').focus();

  // Progress bar - https://codepen.io/mjtweaver/pen/pEkYgQ (using transform instead of bg-grad)
  var $progressBar = $( '.js-story-progress' );
  var $progressBarLabel = $( '.js-story-progress__label' );

  // Slick BEFORECHANGE events
  $slider.on( 'beforeChange', function(event, slick, currentSlide, nextSlide) {

    // Progress bar
    var calc = ( ( nextSlide ) / ( slick.slideCount-1 ) ) * 100;
    $progressBar.css( 'transform', 'translateX( ' + calc + '%').attr('aria-valuenow', calc );
    $progressBarLabel.text( calc + '% completed' );
  });

  // Slick AFTERCHANGE events
  $slider.on( 'afterChange', function(event, slick, currentSlide, nextSlide) {

    // progressive image loader
    progressiveImageLoader();

    // run charts
    handleCharts();

    // scroll to top after slide change
    if ( $window.scrollTop() > 0 ) {
      $('html, body').animate({
        scrollTop: 0
      }, 10 );
    }
  });

  // CHARTS ******************

  // color vars
  var c_grey_cool = '#9ea1a2';
  var c_grey_steel = '#7c7e7f';
  var c_grey_brown = '#595955';
  var c_black = '#000000';
  var c_gold_cu = '#cfb87c';
  var c_gold_cu_light = '#d6cca6';
  var c_gold_cu_dark = '#7b6f4b';
  var c_white = '#ffffff';
  var c_teal = '#354463';

  // global font
  Chart.defaults.global.defaultFontFamily = 'Roboto';
  Chart.defaults.global.defaultFontStyle = 'bold';

  // Set usePointStyle = true to turn legend rectangle into a circle.
  Chart.defaults.global.legend.labels.usePointStyle = true;

  // main switchboard fn to handle creation and removing of charts, called on Slick afterChange
  function handleCharts() {

    // check for other active charts
    var $hasPrevChartEl = $( '.js-fin-chart-ran' );
    if ( $hasPrevChartEl.length ) {
      var thisChart = $hasPrevChartEl.data( 'chart' );

      // destroy previous chart so it can be redrawn
      if ( thisChart === "fin-chart-endow" ) {
        chartEndow.destroy();
      } else if ( thisChart === "fin-chart-invest" ) {
        chartInvest.destroy();
        $chartInvestLegend.removeClass( 'js-legend-show' );
      } else if ( thisChart === "fin-chart-perform" ) {
        chartPerform.destroy();
      } else if ( thisChart === "fin-chart-transfer" ) {
        chartTransfer.destroy();
        $chartTransferLegend.removeClass( 'js-legend-show' );
      }

      $hasPrevChartEl.removeClass( 'js-fin-chart-ran' );
    }

    // if current slide has chart
    var $chartEl = $( '.slick-active.js-section-story__chart' );

    if ( $chartEl.length ) {
      var thisChart = $chartEl.data( 'chart' );

      // run appropriate chart
      if ( thisChart === "fin-chart-endow" ) {
        runChartEndow();
      } else if ( thisChart === "fin-chart-invest" ) {
        runChartInvest();
      } else if ( thisChart === "fin-chart-perform" ) {
        runChartPerform();
      } else if ( thisChart === "fin-chart-transfer" ) {
        runChartTransfer();
      }

      $chartEl.addClass( 'js-fin-chart-ran' );
    } 
  }

  // slide 8 - bar chart
  var $canvasEndow = $( '#fin-chart-endow' );

  var chartEndowData = {
    labels: [ 'FY15','FY16','FY17','FY18','FY19'],
    color: c_black,
    datasets: [
      {
        data: [1.09, 1.06, 1.22, 1.36, 1.45],
        backgroundColor: [
          c_grey_brown,
          c_grey_steel,
          c_gold_cu_dark,
          c_gold_cu,
          c_gold_cu_light
        ],
        hoverBackgroundColor: [
          c_grey_brown,
          c_grey_steel,
          c_gold_cu_dark,
          c_gold_cu,
          c_gold_cu_light
        ],
        borderWidth: 0,
        hoverBorderWidth: 0
      }
    ]
  };

  var chartEndowOptions = {
    responsive: true,
    layout: {
      padding: {
        top: 30
      }
    },
    plugins: {
      datalabels: {
        align: 'end',
        anchor: 'end',
        color: c_black,
        font: function(context) {
          let w = context.chart.width;
          return {
            size: w < 400 ? 12 : 18
          };
        },
        formatter: function(value, context) {
          if (value > 1) {
            return '$' + value + 'B';
          } else {
            return '$' + value.toString().slice(2) + 'M';
          }
        }
      }
    },
    legend: {
      display: false
    },
    tooltips: {
      enabled: false
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false
          },
          ticks: {
            fontSize: 14,
            fontColor: c_black
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            color: 'rgba(0, 0, 0, 0)'
          },
          ticks: {
            display: false,
            min: 0,
            max: 1.5
          }
        }
      ]
    }
  };

  var chartEndow;
  function runChartEndow(){
    chartEndow = new Chart( $canvasEndow, {
      type: 'bar',
      data: chartEndowData,
      options: chartEndowOptions
    });
  }
  
  // slide 9 - doughnut chart
  var $canvasInvest = $( '#fin-chart-invest' );

  var chartInvestData = {
    labels: [ 
      'Fixed income and cash',
      'Real assets',
      'Global hedge funds',
      'Global private capital',
      'Global public equities'
    ],
    color: c_black,
    datasets: [
      {
        data: [ 5, 8, 13, 24, 50 ],
        backgroundColor: [
          c_grey_brown,
          c_grey_steel,
          c_gold_cu_dark,
          c_gold_cu,
          c_gold_cu_light
        ],
        hoverBackgroundColor: [
          c_grey_brown,
          c_grey_steel,
          c_gold_cu_dark,
          c_gold_cu,
          c_gold_cu_light
        ],
        borderWidth: 0,
        hoverBorderWidth: 0
      }
    ]
  };

  var chartInvestOptions = {
    responsive: true,
    layout: {
      padding: {
        top: 30,
        right: 55,
        bottom: 100,
        left: 55
      }
    },
    cutoutPercentage: 50,
    animation: {
      animateScale: true,
      animateRotate: true,
      onComplete: function() {
        $chartInvestLegend.addClass( 'js-legend-show' );          
      }
    },
    tooltips: {
      enabled: false
    },
    legend: {
      display: false
    },
    legendCallback: function(chart) {
      var ul = document.createElement('ul');
      var bgColor = chart.data.datasets[0].backgroundColor;
      chart.data.labels.forEach(function(label, index) {
        ul.innerHTML += '<li><span style="background-color: ' + bgColor[index] + '"></span>' + label + '</li>';
      });
      return ul.outerHTML;
    },
    plugins: {
      datalabels: {
        align: 'end',
        anchor: 'end',
        color: c_black,
        font: function(context) {
          let w = context.chart.width;
          return {
            size: w < 400 ? 14 : 22
          };
        },
        formatter: function(value, context) {
          return value + '%';
        }
      }
    }
  };    
  
  var chartInvest;
  var $chartInvestLegend = $( '.js-chart-invest-legend' );

  function runChartInvest(){
    chartInvest = new Chart( $canvasInvest, {
      type: 'doughnut',
      data: chartInvestData,
      options: chartInvestOptions
    });

    // generate custom legend - hooks into legendCallback option
    $chartInvestLegend.html( chartInvest.generateLegend() );
  }

  // slide 10 - bar chart
  var $canvasPerform = $( '#fin-chart-perform' );

  var chartPerformData = {
    labels: [ '3 Year', '5 Year', '10 Year' ],
    color: c_black,
    datasets: [{
      label: 'LTIP',
      backgroundColor: c_gold_cu,
      hoverBackgroundColor: c_gold_cu,
      data: [ 10.8, 6.5, 9.2 ]
    }, {
      label: 'Policy Benchmark',
      backgroundColor: c_grey_steel,
      hoverBackgroundColor: c_grey_steel,
      data: [ 10, 5.8, 9.6 ]
    }]
  };

  var chartPerformOptions = {
    responsive: true,
    layout: {
      padding: {
        top: 30
      }
    },
    legend: {
      display: true,
      position: "bottom",
      labels: {
        fontSize: 18,
        padding: 20,
        boxWidth: 50,
      }
    },
    tooltips: {
      enabled: false
    },
    plugins: {
      datalabels: {
        align: 'end',
        anchor: 'end',
        color: c_black,
        font: function(context) {
          let w = context.chart.width;
          return {
            size: w < 400 ? 14 : 20
          };
        },
        formatter: function(value, context) {
          return value + '%';
        }
      }
    },
    scales: {
      xAxes: [{
        categoryPercentage: 0.8,
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
            display: false,
            min: 0,
            max: 13
          }
        }
      ]
    }
  };

  var chartPerform;
  function runChartPerform(){
    chartPerform = new Chart( $canvasPerform, {
      type: 'bar',
      data: chartPerformData,
      options: chartPerformOptions
    });
  }

  // slide 11 - doughnut chart
  var $canvasTransfer = $( '#fin-chart-transfer' );

  var chartTransferData = {
    labels: [ 
      'Academic support',
      'Research',
      'Scholarships',
      'Advancement support',
      'Capital projects',
      'Chairs, professorships and other faculty support',
      'Public service, administration, library and other support',
      'Athletics'
    ],
    color: c_black,
    datasets: [
      {
        data: [ 24, 19, 14, 13, 11, 10, 8, 1 ],
        backgroundColor: [
          c_gold_cu,
          c_grey_brown,
          c_gold_cu_dark,
          c_grey_steel,
          c_gold_cu_light,
          c_teal,
          c_grey_cool,
          c_black
        ],
        hoverBackgroundColor: [
          c_gold_cu,
          c_grey_brown,
          c_gold_cu_dark,
          c_grey_steel,
          c_gold_cu_light,
          c_teal,
          c_grey_cool,
          c_black
        ],
        borderWidth: 0,
        hoverBorderWidth: 0
      }
    ]
  };

  var chartTransferOptions = {
    responsive: true,
    layout: {
      padding: {
        top: 30,
        right: 55,
        bottom: 150,
        left: 55
      }
    },
    cutoutPercentage: 50,
    animation: {
      animateScale: true,
      animateRotate: true,
      onComplete: function() {
        $chartTransferLegend.addClass( 'js-legend-show' );
      }
    },
    tooltips: {
      enabled: false
    },
    legend: {
      display: false
    },
    legendCallback: function(chart) {
      var ul = document.createElement('ul');
      var bgColor = chart.data.datasets[0].backgroundColor;
      chart.data.labels.forEach(function(label, index) {
        ul.innerHTML += '<li><span style="background-color: ' + bgColor[index] + '"></span>' + label + '</li>';
      });
      return ul.outerHTML;
    },
    plugins: {
      datalabels: {
        align: 'end',
        anchor: 'end',
        color: c_black,
        font: function(context) {
          let w = context.chart.width;
          return {
            size: w < 400 ? 14 : 22
          };
        },
        formatter: function(value, context) {
          return value + '%';
        }
      }
    }
  };    

  var chartTransfer;
  var $chartTransferLegend = $( '.js-chart-transfer-legend' );

  function runChartTransfer(){
    chartTransfer = new Chart( $canvasTransfer, {
      type: 'doughnut',
      data: chartTransferData,
      options: chartTransferOptions
    });

    // generate custom legend - hooks into legendCallback option
    $chartTransferLegend.html( chartTransfer.generateLegend() );
  }

  // Progressive Image Loading **************
    // https://codepen.io/jmperez/pen/yYjPER
    // note: can not work with picture/img srcsets, or background-images.

  function progressiveImageLoader() {
    var $progContainer;
    
    // load only active slide if within financials section
    $progContainer = $( '.slick-active .js-img-prog-container' );

    $progContainer.each( function(){
      var $this = $( this );
      var $progImageLow = $this.find( '.js-img-prog-low' );

      // 1: load small image through JS,and show hidden image on page
      var img = new Image();
      img.src = $progImageLow.attr('src');
      img.onload = function () {
        $progImageLow.addClass( 'js-img-prog-loaded' );
      };
      
      // 2: load large image through JS, append to page when loaded
      var progImageFull = new Image();
      progImageFull.src = $progImageLow.data( 'large' );
      progImageFull.alt = $progImageLow.attr( 'alt' );
      progImageFull.onload = function () {
        progImageFull.className = 'js-img-prog-high js-img-prog-loaded';
      };
      progImageFull.style = 'position:absolute';
      $this.append( progImageFull );

      // 3: don't re-run this on already loaded images
      $this.removeClass( 'js-img-prog-container' );
    });
  }

});
