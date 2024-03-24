import {FC, useState} from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './TableRow.css';

type TableRowProps = {
  title: string;
  today: number;
  yesterday: number;
  percent: number;
  thisDay: number;
};

const options = {
  title: {
    text: 'My chart',
  },
  series: [
    {
      data: [1, 2, 3],
    },
  ],
};

export const TableRow: FC<TableRowProps> = ({
  title,
  today,
  yesterday,
  percent,
  thisDay,
}) => {
  const [showChart, setShowChart] = useState(false);

  const backgroundColor =
    percent > 0
      ? 'rgb(231, 246, 225)'
      : percent < 0
        ? 'rgb(253, 223, 224)'
        : 'rgb(239, 239, 239)';

  const color = percent >= 0 ? 'green' : 'red';

  return (
    <>
      <tr
        onClick={() => {
          setShowChart(!showChart);
        }}>
        <td>{title}</td>
        <td>{today}</td>

        <td
          className="yesterday"
          style={{
            backgroundColor,
          }}>
          <span>{yesterday}</span>
          <span style={{fontWeight: 'bold', color}}>{percent}%</span>
        </td>

        <td>{thisDay}</td>
      </tr>
      {showChart && (
        <tr>
          <td colSpan={4}>
            <HighchartsReact
              highcharts={Highcharts}
              options={{
                chart: {width: 600},
                title: {
                  text: '',
                },
                series: [
                  {
                    data: [today, yesterday, thisDay],
                  },
                ],
              }}
            />
          </td>
        </tr>
      )}
    </>
  );
};
