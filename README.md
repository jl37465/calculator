# calculator

==>[LIVE PREVIEW HERE](https://jl37465.github.io/calculator/)<==
Calculator web app created with HTML, CSS, and JavaScript as part of The Odin Project's Curriculum.<br>


~~ MAIN AIMS ~~
The main goal was to program a functioning calculator that would allow the user to input both numbers and operators like =, +, and CE with buttons. This particular project was supposed to consolidate my fundamental knowledge of HTML, CSS, and JavaScript, as well as how these languages interact with one another in a more realistic setting.
<br>

~~ CHALLENGES ~~
The main difficuties of the challenge were translating the JavaScript functionality into a visible output on the HTML web page, such as displaying the expressions and final answer on the calculator's display. I eventually achieved this by pushing the inputs from the buttons into an initial array, then using .join("") to form a single number and pushing that into the calcuation array, along with the operator and eventually the second number. I then pushed that result into the final array, which changed the textContent of the GUI to display the result.<br>

The calculator also allows for multiple operators to be input without pressing the "=" button. When a second operator is input, it automatically executes the first calculation before using that result as the first operand in the next equation, automatically updating the display as it goes.<br>

I also added animations to the buttons for a slightly more tactile feel.


~~ IMPROVEMENTS ~~
In terms of additional functionality, I would probably implement a second display just below the first to output the result of a calculation, which would be more akin to modern calculators.
