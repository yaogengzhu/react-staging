import Counter from './counter';

/**
 * 需要创建实例去使用
 */

let counter = null;

/**
 * 会
 */
beforeEach(() => {
  counter = new Counter();
})

// afterEach(() => {
//   console.log('afterEach');
// });

/**
 * 测试前的开始工作
 */
// beforeAll(() => {
//   counter = new Counter();
// });

/**
 * 测试后都被执行
 */
afterAll(() => {});

test('测试 Counter 中的addOne 方法', () => {
  counter.addOne();
  expect(counter.number).toBe(1);
});

test('测试 Counter 中的minuOne', () => {
  counter.minuOne();
  expect(counter.number).toBe(-1);
});
