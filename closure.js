for (var a = 0; a < 3; a++) {
  debugger;
  const log = () => console.log(a);
  setTimeout(log, 300); // 3,3,3
}
// using var it will store ref to global var
