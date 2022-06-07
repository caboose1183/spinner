const spinner = "|/-\\\-|/-\\\-|/-\\\-|";
let time = 0;
let st = 'hello from spinner1.js... \rheyyy\n';
for (const char of spinner) {
  setTimeout(() => {
    process.stdout.write(char + '\r');
  }, time)
  time += 200
}