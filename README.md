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

Alternatively, you can set this up a bash alias for convenience: 

Install package globally
```bash
~$ npm install -g https://github.com/mheadd/federal-holidays.git 
~$ chmod +x /usr/local/lib/node_modules/federal-holidays/index.js
```

Then, in your `.bash_profile` file:
```bash
alias holidays='node /usr/local/lib/node_modules/federal-holidays/index.js'
```

Finally, reload your profile:
```bash
~$ . ~/.bash_profile
~$ holidays
```

## Sample output

```
Date                    Holiday                            
----------------------  -----------------------------------
Wednesday, January 1    New Year’s Day                     
Monday, January 20      Birthday of Martin Luther King, Jr.
Monday, February 17*    Washington’s Birthday              
Monday, May 25          Memorial Day                       
Friday, July 3**        Independence Day                   
Monday, September 7     Labor Day                          
Monday, October 12      Columbus Day                       
Wednesday, November 11  Veterans Day                       
Thursday, November 26   Thanksgiving Day                   
Friday, December 25     Christmas Day                      

More information here: https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/
```

