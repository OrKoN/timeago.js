/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */

import { toDate, formatDiff, diffSec, nextInterval } from '../../src/utils/date';

import { getLocale } from '../../src/register';

describe('date', () => {
  test('toTimestamp', () => {
    expect(toDate('1992-08-01')).toBeInstanceOf(Date);
    expect(toDate(712627200000)).toBeInstanceOf(Date);

    expect(toDate('2017-2-5 3:57:52UTC')).toBeInstanceOf(Date);
    expect(toDate('2017-2-5T3:57:52Z')).toBeInstanceOf(Date);

    expect(toDate()).toBeInstanceOf(Date);
  });

  test('diffSec', () => {
    const now = new Date();
    // @ts-ignore
    expect(diffSec(now)).toBeApproximate(0);
    // @ts-ignore
    expect(diffSec(now, now)).toBeApproximate(0);
    // @ts-ignore
    expect(diffSec(new Date(+now - 10000), now)).toBeApproximate(10);
  });

  test('nextInterval', () => {
    expect(nextInterval(1)).toEqual(1); // sec
    expect(nextInterval(30)).toEqual(1); // sec

    expect(nextInterval(110)).toEqual(10); // minute

    expect(nextInterval(2 * 3600 + 100)).toEqual(3500); // hour

    expect(nextInterval(3600 * 24 + 3600)).toEqual(23 * 3600); // day
  });
});
