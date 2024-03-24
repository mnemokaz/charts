import './App.css';
import {TableRow} from './TableRow';

const App = () => {
  const table = [
    {
      title: 'Выручка, руб',
      today: 500521,
      yesterday: 480521,
      percent: 4,
      thisDay: 4805121,
    },
    {
      title: 'Наличные',
      today: 300000,
      yesterday: 300000,
      percent: 0,
      thisDay: 300000,
    },
    {
      title: 'Безналичный расчет',
      today: 100000,
      yesterday: 100000,
      percent: 0,
      thisDay: 100000,
    },
    {
      title: 'Кредитные карты',
      today: 100521,
      yesterday: 100521,
      percent: 0,
      thisDay: 100521,
    },
    {
      title: 'Средний чек, руб',
      today: 1300,
      yesterday: 900,
      percent: 44,
      thisDay: 900,
    },
    {
      title: 'Средний гость, руб',
      today: 1200,
      yesterday: 800,
      percent: 50,
      thisDay: 800,
    },
    {
      title: 'Удаление из чека (после оплаты) руб',
      today: 1000,
      yesterday: 1100,
      percent: -9,
      thisDay: 900,
    },
    {
      title: 'Удаление из чека (до оплаты) руб',
      today: 1300,
      yesterday: 1300,
      percent: 0,
      thisDay: 900,
    },
    {
      title: 'Количество чеков',
      today: 34,
      yesterday: 36,
      percent: -6,
      thisDay: 34,
    },
    {
      title: 'Количество гостей',
      today: 34,
      yesterday: 36,
      percent: -6,
      thisDay: 32,
    },
  ];

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Показатель</th>
            <th>Текущий день</th>
            <th>Вчера</th>
            <th>Этот день недели</th>
          </tr>
        </thead>
        <tbody>
          {table.map(row => (
            <TableRow
              key={row.title}
              title={row.title}
              today={row.today}
              yesterday={row.yesterday}
              percent={row.percent}
              thisDay={row.thisDay}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default App;
