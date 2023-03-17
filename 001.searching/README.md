# 검색 알고리즘

검색 알고리즘에 대해 공부한 것을 정리합니다.

## Linear Search

각각의 요소를 순회하며 검색합니다.

JS에서는 이미 Linear Search를 사용하는 method들이 있습니다.

- indexOf
- includes
- find
- findIndex

Best O(1), Average O(n), Worst O(n)

## Binary Search

이미 Sort 되어있는 배열에서만 유효합니다.

배열의 중간의 값과 찾고자하는 값을 비교해 나머지 절반을 버리면서 검색합니다.

이를 Divide and Conquer(분할정복)라 정의합니다

```js
const val = 15
const arr = [1, 3, 4, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19]
```

1. 배열의 가운데에 있는 11과 비교, 11보다 val이 크므로 좌측 전부 제거
2. [12, 15, 16, 17, 18, 19] 에서 17과 val 비교

   .

   .

   .

3. 15를 찾음
