import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Result({ input }) {
  var dataInputObject = calculateInvestmentResults(input);
  var initialInvestment =
    dataInputObject[0].valueEndOfYear -
    dataInputObject[0].interest -
    dataInputObject[0].annualInvestment;
  return (
    <>
      <table id="result">
        <thead>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </thead>
        <tbody>
          {dataInputObject.map((resultData) => {
            const totalInterest =
              resultData.valueEndOfYear -
              resultData.annualInvestment * resultData.year -
              initialInvestment;
            const totalInvestment = resultData.valueEndOfYear - totalInterest;
            return (
              <tr key={resultData.year}>
                <td>{resultData.year}</td>
                <td>{formatter.format(resultData.valueEndOfYear)}</td>
                <td>{formatter.format(resultData.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalInvestment)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
