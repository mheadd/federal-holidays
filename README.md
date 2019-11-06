# CLI Federal Holiday List

Quickly display a list of federal holidays from the command line.

## Install

```bash
~$ git clone https://github.com/mheadd/federal-holidays.git 
~$ cd federal-holidays
~$ npm install 
```

## Usage

```bash
~$ node path/to/federal-holidays/index.js
```

Alternatively, you can set this up a bash alias for convenience. if you installed usin the `-g` flag, then: 

Install globally
```bash
~$ npm install -g https://github.com/mheadd/federal-holidays.git 
~$ chmod +x /usr/local/lib/node_modules/federal-holidays/index.js
```

Then, in your bash profile:
```bash
alias holidays='node /usr/local/lib/node_modules/federal-holidays/index.js'
```
