export function twoNumberSum1(array, targetSum) {
  for (let x = 0; x < array.length; x++) {
    for (let y = x + 1; y < array.length; y++) {
      if (array[x] + array[y] === targetSum) {
        return [array[x], array[y]]
      }
    }
  }

  return []
}

export function twoNumberSum2(array, targetSum) {
  const hash = {}

  for (let x = 0; x < array.length; x++) {
    const num = array[x]
    const diff = targetSum - num

    if (hash[diff]) {
      return [diff, num]
    }
    hash[num] = true
  }

  return []
}

export function twoNumberSum3(array, targetSum) {
  array.sort((a, b) => a - b)

  let left = 0
  let right = array.length - 1

  while (left < right) {
    const currentSum = array[left] + array[right]

    if (currentSum === targetSum) {
      return [array[left], array[right]]
    }
    if (currentSum < targetSum) {
      left += 1
    } else if (currentSum > targetSum) {
      right -= 1
    }
  }

  return []
}
