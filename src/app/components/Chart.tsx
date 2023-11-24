import React, { useEffect } from "react";
import Chart from "chart.js";

interface MyWindow extends Window {
    myLine?: Chart;
  }

const CardLineChart: React.FC = () => {
  useEffect(() => {
    const config = {
      type: "bar",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        datasets: [
          {
            label: "Tasks",
            backgroundColor: "#3182ce",
            borderColor: "#3182ce",
            data: [42, 100, 6, 211, 56, 71, 32,100, 6, 211, 56, 32],
            fill: false,
            color:"black"
          },
          {
            label: "Earnings",
            fill: false,
            backgroundColor: "#ed64a6",
            borderColor: "#ed64a6",
            data: [600, 1254,21, 2283, 56, 106, 11,21, 2283, 56, 106, 11],
            color:"black"
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Sales Charts",
          fontColor: "black",
        },
        legend: {
          labels: {
            fontColor: "black",
          },
          align: "start",
          position: "top",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "rgba(0, 0, 0, 1)",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Month",
                fontColor: "rgba(0, 0, 0, 1)",
              },
              gridLines: {
                display: false,
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(225, 225, 225, 0.1)",
                zeroLineColor: "rgba(225,225, 225, 0.1)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "rgba(0, 0, 0, 1)",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
                fontColor: "rgba(0, 0, 0, 1)",
              },
              gridLines: {
                borderDash: [3],
                borderDashOffset: [3],
                drawBorder: false,
                color: "rgba(225, 225, 225, 0.1)",
                zeroLineColor: "rgba(225, 225, 225, 0.1)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    const ctx = document.getElementById("line-chart") as HTMLCanvasElement;
    (window as MyWindow).myLine = new Chart(ctx, config as any);
  }, []);

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full h-full rounded">
        <div className="rounded-t py-1 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h2 className="text-black text-[1rem] font-[500] mt-1">Here is how you are doing</h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-[100%]">
            <canvas id="line-chart" className="text-black"></canvas>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardLineChart;