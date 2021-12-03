# JavaScript-search-algorithm
This is a Javascript search algorithm that displays a user's job preferences based on their skills(in the select options). Users only have to input their name, qualifications and/or top five sellable skills. The completion of this form generates three career suggestions, major roles and average salaries.

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
The algorithm style implemented is a permutation, whereby different data/combinations are generated from the interaction of different scenarios - in this case - selected options. Overall, there are 30 options to select, and 210 permutations were generated from 5 combinations per sequence. This borrows the concept of Heap algorithms a little bit, whereby all the data involved interact with one another to generate combinations and solutions.
