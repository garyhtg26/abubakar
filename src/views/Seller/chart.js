import { mixins, Line } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
    
    extends: Line,
    /*
    computed: {
      options() {
        return {
          responsive: true,
          maintainAspectRatios: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  callback: (value, index, values) => {
                    return `${value} Item`;
                  },
                },
              },
            ],
          },
          tooltips: {
            enabled: true,
            callbacks: {
              label: (tooltipItems, data) => {
                console.log(data);
                return data.datasets[0].data[tooltipItems.index] + "Item";
              },
            },
          },
        };
      },
    },*/
    mixins: [reactiveProp],
    props: ["chartData", "options"],
    mounted() {
        // this.chartData is created in the mixin.
        // If you want to pass options please create a local options object
        this.renderChart(this.chartData, this.options);
    },
};