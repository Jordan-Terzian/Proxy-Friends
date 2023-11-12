export const formatDate = (date) => {
  if (!date) return placeholder;
  const day = date.getDate();
  const month = date.getMonth() + 1; // January is 0!
  const year = date.getFullYear();
  return `${formatTwoDigit(day)}/${formatTwoDigit(month)}/${year}`;
};

export const formatTwoDigit = (t) => {
  return t >= 10 ? t : `0${t}`;
};

export const formatDateTime = (date, placeholder = "dd/mm/yyyy") => {
  if (!date) return placeholder;
  const day = date.getDate();
  const month = date.getMonth() + 1; // January is 0!
  const year = date.getFullYear();

  return `${formatTwoDigit(day)}/${`${formatTwoDigit(
    month
  )}`}/${year} ${formatTwoDigit(date.getHours())}:${formatTwoDigit(
    date.getMinutes()
  )}`;
};

export const formatDateRange = (startDate, endDate) => {
  const startDay = startDate.getDate();
  const startMonth = startDate.getMonth() + 1; // January is 0!
  const startYear = startDate.getFullYear();
  const startHour = startDate.getHours();
  const startMin = startDate.getMinutes();

  const endDay = endDate.getDate();
  const endMonth = endDate.getMonth() + 1; // January is 0!
  const endYear = endDate.getFullYear();
  const endHour = endDate.getHours();
  const endMin = endDate.getMinutes();

  if (startDay === endDay && startMonth === endMonth && startYear === endYear) {
    return `${formatDate(startDate)} ${formatTwoDigit(
      startHour
    )}:${formatTwoDigit(startMin)} - ${formatTwoDigit(
      endHour
    )}:${formatTwoDigit(endMin)}`;
  } else {
    return `${formatDate(startDate)} ${formatTwoDigit(
      startHour
    )}:${formatTwoDigit(startMin)}  - ${formatDate(endDate)} ${formatTwoDigit(
      endHour
    )}:${formatTwoDigit(endMin)}`;
  }
};
