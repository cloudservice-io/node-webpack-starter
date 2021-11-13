import { getWelcomeMessage } from './getWelcomeMessage';

it('Returns undefined when date param is missing', () => {
  const message = getWelcomeMessage();
  expect(message).toBe(undefined);
});

it('Returns good morning when is midnight', () => {
  const date = new Date();
  date.setHours(0, 0);

  const message = getWelcomeMessage(date);

  expect(message).toBe('Good morning');
});

it('Returns good afternoon when is 12:01', () => {
  const date = new Date();
  date.setHours(12, 1);

  const message = getWelcomeMessage(date);

  expect(message).toBe('Good afternoon');
});

it('Returns good evening when is 23:59', () => {
  const date = new Date();
  date.setHours(23, 59);

  const message = getWelcomeMessage(date);

  expect(message).toBe('Good evening');
});
