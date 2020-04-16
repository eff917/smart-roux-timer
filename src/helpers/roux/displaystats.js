import { convertTime } from "../../timer/timerController";

export function displayStats(solveStats) {
    let rows = "";
    solveStats.forEach(function(stage, index, array) {
        let stageTime = convertTime((stage.time - solveStats[Math.max((index -1), 0)].time));
        let cumulativeTime = convertTime(stage.time);
        let row=`
        <tr>
            <th scope="row" >${stage.name}</th>
            <td >${stage.block}</td>
            <td >${stage.movecount - solveStats[Math.max((index -1), 0)].movecount}</td>
            <td>${stage.movecount}</td>
            <td>${stageTime}</td>
            <td>${cumulativeTime}</td>
        </tr>`;
        rows += row;
    });

    let table = `<table border="1">
    <caption>
      Solve Stats
    </caption>
    <col>
    <col>
    <colgroup span="3"></colgroup>
    <thead>
      <tr>
        <th scope="col" rowspan="2">Stage</th>
        <th scope="col" rowspan="2">Name</th>
        <th colspan="2" scope="colgroup">Movecount</th>
        <th colspan="2" scope="colgroup">Time</th>
      </tr>
      <tr>
        <th scope="col">Stage</th>
        <th scope="col">Cumulative</th>
        <th scope="col">Stage</th>
        <th scope="col">Cumulative</th>
      </tr>
    </thead>
    <tbody>
    ${rows}
    </tbody></table>`
    
    return table;
};