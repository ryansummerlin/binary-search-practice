function linearSearch (arr, target) {

  // Can you solve this in one line?
  return arr.indexOf(target);

};

function binarySearch(arr, target) {

  // Set integers pointing to the high and low range of possible indices
  let low = 0;
  let high = arr.length - 1;
  let mid;

  // While high and low indices do not overlap...
  while (high > low) {

    // Find the midpoint between high and low indices
    mid = low + Math.round((high - low) / 2);

    // Compare the target value to the midpoint value

    // If the target equals the midpoint...
      // Return the midpoint index
    if (target === arr[mid]) {
      return mid;
    }
    // If the target is higher than the midpoint...
      // Move the low pointer to midpoint + 1
    else if (target > arr[mid]) {
      low = mid + 1;
    }
    // If the target is less than the midpoint...
      // Move the high pointer to midpoint - 1
    else if (target < arr[mid]) {
      high = mid - 1;
    }

  }

  // Return -1 if the loop exits with overlapping pointers
  return -1;

}


module.exports = [linearSearch, binarySearch]
