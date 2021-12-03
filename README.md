# JavaScript-search-algorithm
This is a Javascript search algorithm that displays a user's job preferences based on their skills(in the select options). Users only have to input their name, qualifications and/or top five sellable skills. The completion of this form generates three career possibilities, major roles and average salaries.

# Objectives
 - To provide a clear picture of career paths that one's skills could lead to.
 - To know the career possibilities based on one's skills.
 - To understand the roles one can fit into and their average pay in the job market.

# Languages involved
 - HTML
 - CSS
 - JavaScript

# Data structure
 - Arrays: contain the labelled data which are in objects
 - Objects: contain the titled data which have unique IDs, skill categories and applicable industries.
 - Arrays in objects: these contain either the list of skills of industries 

# Data quality
The user can only select designated options which trigger suggestions based on the data we have in the array of
objects. An input element was not used in order to control the quality of data or search category. The options represent the selected index in the dropdown menu.

# Methods
 - The algorithm style implemented is a permutation, whereby different data/combinations are generated from the interaction of different scenarios - in this case - selected options. Overall, there are 30 options to select, and 210 permutations were generated from 5 combinations per sequence. This borrows the concept of Heap algorithms a little bit, whereby all the data involved interact with one another to generate combinations and solutions.

 - For--let loops were used to iterate the select elements which are listed in an array. For every select menu and option selected, we will get a defined output.

 - AddEventListeners were used to trigger responses(iteration >>> output), whenever a select menu is selected. The 'change' method was used. For every change in the selected index, a corresponding change in output follows suite, so long as the options do not fall within the same category.

 - If--else statements will used to condition the 5-combinations-per-sequence permutation.
 - The innerText DOM method will be used to affix data into the paragraphs inside the detail and summary elements (The grandparent and parent nodes of the output respectively). The data from the objects within the "jobs" array are called based on their indices, and serve as the innerText content.

# Challenges and lessons learned
