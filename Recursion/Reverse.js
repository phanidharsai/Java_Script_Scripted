function reverse(str) {
  if (str.length !== 0)
    return str.charAt(str.length - 1) + reverse(str.slice(0, str.length - 1));
  else return "";
}

console.log(reverse("ias"));
