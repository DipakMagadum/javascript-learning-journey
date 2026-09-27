// String and Array Conversion
// Converting strings into arrays and arrays back into strings


// --------------------------------------------------
// split()
// --------------------------------------------------

let fullName = "Dipak Magadum";

let nameParts = fullName.split(" ");

console.log("Name parts:");
console.log(nameParts);


// Split a sentence into words

let message = "JavaScript is important for web development";

let words = message.split(" ");

console.log("Words:");
console.log(words);


// --------------------------------------------------
// split() with a comma
// --------------------------------------------------

let skills = "Java,JavaScript,React,Node.js";

let skillList = skills.split(",");

console.log("Skills:");
console.log(skillList);


// --------------------------------------------------
// join()
// --------------------------------------------------

let technologies = ["Java", "Spring Boot", "React", "MySQL"];

let technologyList = technologies.join(", ");

console.log(`Technologies: ${technologyList}`);


// --------------------------------------------------
// Practical example - processing user input
// --------------------------------------------------

let input = "  JavaScript, React, Node.js  ";

let cleanedInput = input.trim();

let selectedSkills = cleanedInput.split(",");

console.log("Selected skills:");
console.log(selectedSkills);


// Remove extra spaces from each skill

let cleanSkills = selectedSkills.map((skill) => {
    return skill.trim();
});

console.log("Clean skills:");
console.log(cleanSkills);


// Convert the array back into a string

let formattedSkills = cleanSkills.join(" | ");

console.log(`Skills: ${formattedSkills}`);


// --------------------------------------------------
// Practical example - tags
// --------------------------------------------------

let tags = "javascript,frontend,react,web";

let tagList = tags.split(",");

console.log("Tags:");
console.log(tagList);

let tagText = tagList.join(" #");

console.log(`#${tagText}`);