export const getWelcomeMessage = date => {
  if (!date) {
    return;
  }

  const hour = date.getHours();

  if (hour >= 0 && hour <= 11) {
    return 'Good morning';
  }

  if (hour >= 12 && hour <= 17) {
    return 'Good afternoon';
  }

  return 'Good evening';
};
