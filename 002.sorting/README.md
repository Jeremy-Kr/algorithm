# 정렬 알고리즘

정렬 알고리즘에 대해 공부한 것을 정리합니다.

## Bubble Sort

각 요소를 순회하며 다음 인덱스와 비교

다음 인덱스보다 요소가 크면 swap

반복

Best O(n^2) Average O(n^2) Worst O(n^2)

## Selection Sort

각 요소를 순회하며 최소값을 찾아서 swap

반복

Best O(n^2) Average O(n^2) Worst O(n^2)

## Insertion Sort

각 요소를 순회하며 앞의 요소들과 비교

앞의 요소보다 작으면 swap

반복

Best O(n) Average O(n^2) Worst O(n^2)

## Merge Sort

배열을 반으로 나누고

각각을 정렬

정렬된 배열을 병합

Best O(n log n) Average O(n log n) Worst O(n log n)

## Quick Sort

배열의 중간값을 pivot으로 설정

pivot보다 작은 요소들을 왼쪽, 큰 요소들을 오른쪽으로 정렬

반복

Best O(n log n) Average O(n log n) Worst O(n^2)

## Radix Sort

배열의 요소들을 10진수로 표현

각 자리수를 기준으로 정렬

반복

Best O(nk) Average O(nk) Worst O(nk)
