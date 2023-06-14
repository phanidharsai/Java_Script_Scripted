// check if given number is pallindrome

const isPalindrome = (() => {
  /**
   * This function is returned immediately
   * from the invocation of the outer arrow function
   * and is assigned to the `isPalindrome` identifier.
   */
  return function isPalindrome(str) {
    // remove non-alphanumeric characters and
    // change the string to lowercase
    str = str.replace(/[^a-z0-9]/i, "").toLowerCase();

    // call the recursive _isPalindrome function with string (if not empty)
    // and return the result
    return str.length > 0 && _isPalindrome(str);
  };

  /**
   * Internal recursive `_isPalindrome()` function
   * optimized for recursion with proper tail call.
   *
   * A single reference to this function is created and stored
   * after the immediate invocation of the outer arrow function,
   * not accessible outside the scope of the outer arrow function,
   * but accessible to `isPalindrome()` via closure.
   */
  function _isPalindrome(str) {
    const len = str.length;

    if (len <= 1) return true;
    if (str[0] !== str[len - 1]) return false;

    // proper tail call
    return _isPalindrome(str.slice(1, -1));
  }
})();

console.log(isPalindrome("bob"));
