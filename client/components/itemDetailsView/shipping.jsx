import React from 'react';

function getTomorrow(dateObj) {
  const result = new Date(dateObj);
  result.setDate(dateObj.getDate() + 1);
  return result;
}

function getNextTwoBusinessDay(dateObj) {
  const day = dateObj.getDay();
  const result = new Date(dateObj);
  if (day >= 0 && day <= 3) {
    // case mon to wed, 2 days
    result.setDate(dateObj.getDate() + 2);
  } else if (day === 4 || day === 5) {
    // case thurs and fri, get package in 4 days
    result.setDate(dateObj.getDate() + 4);
  } else if (day === 5) {
    // case sat, get package in 3 days
    result.setDate(dateObj.getDate() + 3);
  }

  return result;
}

function getDeadline() {
  let dateString;
  let deadline;
  const currentTime = new Date(Date.now());
  if (currentTime.getHours() < 18) {
    // within the time limit
    deadline = currentTime;
  } else {
    // has to order next day
    deadline = getTomorrow(currentTime);
  }

  dateString = `${deadline.getMonth() + 1} ${deadline.getDate()}, ${deadline.getFullYear()}`;
  dateString += ' 18:00';

  return new Date(dateString);
}

function formatDate(dateObj) {
  const monthNames = [
    'January', 'February', 'March',
    'April', 'May', 'June', 'July',
    'August', 'September', 'October',
    'November', 'December',
  ];

  const dayNames = [
    'Sun', 'Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Sat',
  ];

  const date = dateObj.getDate();
  const dayIndex = dateObj.getDay();
  const day = dayNames[dayIndex];
  const monthIndex = dateObj.getMonth();
  const month = monthNames[monthIndex];

  return `${day}, ${month} ${date}`;
}

function timeBetween(deadline) {
  const now = new Date(Date.now());
  const timeDiff = deadline.getTime() - now.getTime();

  const hourFactor = 3600000;
  const minFactor = 60000;

  const hour = Math.floor(timeDiff / hourFactor);
  const min = Math.floor((timeDiff % hourFactor) / minFactor);

  let result = '';
  if (hour !== 0) { result += `${hour} hr `; }
  result += `${min} mins`;

  return result;
}

export default class Shipping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: getDeadline(),
      arrivingDate: getNextTwoBusinessDay(getDeadline()),
    };
  }

  render() {
    return (
      <div className="spacing-small">
        <span className="text-bold">
          Want it {formatDate(this.state.arrivingDate)}?
        </span>
        &nbsp;Order within
        <span className="color-success text-bold">
          {` ${timeBetween(this.state.deadline)} `}
        </span>
        and choose
        <span className="text-bold"> Two-Day Shipping</span>
        &nbsp;at checkout. <a>Details</a>
      </div>
    );
  }
}
