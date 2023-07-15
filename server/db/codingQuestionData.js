const codingQuestionData = [
  {
    category: "simple sum",
    question: "Create a sum function named sumOf()",
    inputs: [{ input: [2, 4] }, { input: [50, 550] }, { input: [40, -28] }],
    answer: ["6", "600", "12"],
    timesCorrect: 0,
    timesIncorrect: 0,
    code:
      "function sumOf(a, b) {\n" +
      "  // Write your code here\n" +
      "}\n" +
      "\n" +
      "\n" +
      "console.log(sumOf(2, 4)); // expected output = 6\n" +
      "console.log(sumOf(50, 550)); // expected output = 600\n" +
      "console.log(sumOf(40, -28)) // expected output = 12;",
    codePython:
      "def sumOf(a, b):\n" +
      "    # Write your code here\n" +
      "    pass\n" +
      "\n" +
      "\n" +
      "print(sumOf(2, 4)) # expected output = 6\n" +
      "print(sumOf(50, 550)) # expected output = 600\n" +
      "print(sumOf(40, -28)) # expected output = 12",
  },

  {
    category: "array",
    question: "Create a function named 'findMax' that finds the maximum number in an array",
    inputs: [
      { input: [2, 4, 5, 1, 3] },
      { input: [50, 550, 45, 60] },
      { input: [-40, -28, -100, -1500] },
    ],
    answer: ["5", "550", "-28"],
    timesCorrect: 0,
    timesIncorrect: 0,
    code:
      "function findMax(arr) {\n" +
      "  // Write your code here\n" +
      "}\n" +
      "\n" +
      "\n" +
      "console.log(findMax([2, 4, 5, 1, 3])); // expected output = 5\n" +
      "console.log(findMax([50, 550, 45, 60])); // expected output = 550\n" +
      "console.log(findMax([-40, -28, -100, -1500])) // expected output = -28;",
    codePython:
      "def findMax(arr):\n" +
      "    # Write your code here\n" +
      "    pass\n" +
      "\n" +
      "\n" +
      "print(findMax([2, 4, 5, 1, 3])) # expected output = 5\n" +
      "print(findMax([50, 550, 45, 60])) # expected output = 550\n" +
      "print(findMax([-40, -28, -100, -1500])) # expected output = -28",
  },
  {
    category: "string",
    question: "Create a function named 'reverseStr' that reverses a given string",
    inputs: [{ input: ["abcd"] }, { input: ["javascript"] }, { input: ["openai"] }],
    answer: ["dcba", "tpircsavaj", "ianepo"],
    timesCorrect: 0,
    timesIncorrect: 0,
    code:
      "function reverseStr(str) {\n" +
      "  // Write your code here\n" +
      "}\n" +
      "\n" +
      "\n" +
      'console.log(reverseStr("abcd")); // expected output = "dcba"\n' +
      'console.log(reverseStr("javascript")); // expected output = "tpircsavaj"\n' +
      'console.log(reverseStr("openai")); // expected output = "ianepo";',
    codePython:
      "def reverseStr(str):\n" +
      "    # Write your code here\n" +
      "    pass\n" +
      "\n" +
      "\n" +
      'print(reverseStr("abcd")) # expected output = "dcba"\n' +
      'print(reverseStr("javascript")) # expected output = "tpircsavaj"\n' +
      'print(reverseStr("openai")) # expected output = "ianepo"',
  },
  {
    category: "object",
    question:
      "Create a function named 'getValue' that takes an object and a key as arguments, and returns the value of the key from the object",
    inputs: [
      { input: [{ a: 1, b: 2 }, "a"] },
      { input: [{ language: "JavaScript", library: "React" }, "library"] },
      { input: [{ company: "OpenAI", project: "GPT-4" }, "project"] },
    ],
    answer: ["1", "React", "GPT-4"],
    timesCorrect: 0,
    timesIncorrect: 0,
    code:
      "function getValue(obj, key) {\n" +
      "  // Write your code here\n" +
      "}\n" +
      "\n" +
      "\n" +
      'console.log(getValue({ a: 1, b: 2 }, "a")); // expected output = 1\n' +
      'console.log(getValue({ language: "JavaScript", library: "React" }, "library")); // expected output = "React"\n' +
      'console.log(getValue({ company: "OpenAI", project: "GPT-4" }, "project")); // expected output = "GPT-4";',
    codePython:
      "def getValue(obj, key):\n" +
      "    # Write your code here\n" +
      "    pass\n" +
      "\n" +
      "\n" +
      'print(getValue({ "a": 1, "b": 2 }, "a")) # expected output = 1\n' +
      'print(getValue({ "language": "JavaScript", "library": "React" }, "library")) # expected output = "React"\n' +
      'print(getValue({ "company": "OpenAI", "project": "GPT-4" }, "project")) # expected output = "GPT-4"',
  },
  {
    category: "array",
    question:
      "Create a function named 'flattenArray' that takes a nested array and returns a flattened array",
    inputs: [{ input: [[1, [2, [3, [4]], 5]]] }, { input: [[["a"], "b", ["c", "d"]]] }],
    answer: ["1,2,3,4,5", "a,b,c,d"],
    timesCorrect: 0,
    timesIncorrect: 0,
    code:
      "function flattenArray(arr) {\n" +
      "  // Write your code here\n" +
      "}\n" +
      "\n" +
      "\n" +
      "console.log(flattenArray([1, [2, [3, [4]], 5]])); // expected output = 1,2,3,4,5\n" +
      'console.log(flattenArray([["a"], "b", ["c", "d"]])); // expected output = "a,b,c,d";',
    codePython:
      "def flattenArray(arr):\n" +
      "    # Write your code here\n" +
      "    pass\n" +
      "\n" +
      "print(flattenArray([1, [2, [3, [4]], 5]])) # expected output = 1,2,3,4,5\n" +
      'print(flattenArray([["a"], "b", ["c", "d"]])) # expected output = "a,b,c,d"',
  },
];
module.exports = codingQuestionData;
