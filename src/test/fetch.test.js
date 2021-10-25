import { fetchData, fetchData1, fetchData2 } from './fetch';

/**
 * 回调函数的测试
 * 1. 异步函数测试，需要写done参数机制
 */
test('fetchData 返回结果为 true', (done) => {
  fetchData((data) => {
    expect(data).toEqual({
      success: true,
    });
    done(); // 确保promise执行完成
  });
});

test('fetchData1 返回结果为 true', () => {
  return fetchData1().then((res) => {
    expect(res.data).toEqual({
      success: true,
    });
  });
});

test('fetchData2 返回结果为404', () => {
  expect.assertions(1); // 确保catch 被执行一次
  return fetchData2().catch((err) => {
    expect(err.toString().indexOf('404') > -1).toBe(true);
  });
});

/**
 *  测试成功情况
 */
test('方式2: fetchData1 返回结果为True', () => {
  return expect(fetchData1()).resolves.toMatchObject({
    data: {
      success: true,
    },
  });
});

/**
 *  测试失败
 */
// test('方式2: fetchData1 返回结果为404', () => {
//   return expect(fetchData1()).rejects.toThrow();
// });

/**
 * await 语法
 */

test('await-方式测试异步', async () => {
  await expect(fetchData1()).resolves.toMatchObject({
    data: {
      success: true,
    },
  });
});

test('await-方式测试异步1', async () => {
  const response = await fetchData1();
  expect(response.data).toEqual({
    success: true,
  });
});

/**
 * 异步错误的方式
 */
test('await-方式测试异步1', async () => {
  // expect.assertions(1); // 必须执行一次
  try {
    await fetchData1();
  } catch (e) {
    // console.log(e);
  }
});
