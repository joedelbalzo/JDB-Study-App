const questionData = [
  {
    category: "test",
    question: "What's the worst part about coding interviews?",
    answerOne: "XAlgos",
    answerTwo: "CGetting the interview in the first place",
    answerThree: "XNetworking",
    answerFour: "XMaking it to the final round and they change the offer",
    answerFive: "XWhat's a coding interview?",
    timesCorrect: 4,
    timesIncorrect: 2,
  },
  {
    category: "JavaScript Basics",
    question: "What is JavaScript?",
    answerOne: "CA scripting language used to make the website interactive",
    answerTwo: "XAn assembly language used to make the website interactive",
    answerThree: "XA compiled language used to make the website interactive",
    answerFour: "XNone of the above",
    timesCorrect: 4,
    timesIncorrect: 2,
  },
  {
    category: "JavaScript Basics",
    question: "Which of the following is correct about JavaScript?",
    answerOne: "CIt's an object-based language",
    answerTwo: "XIt's an assembly-language",
    answerThree: "XIt's an object-oriented language",
    answerFour: "XIt's a high-level language",
    answerFive: "XNone of the above",
    timesCorrect: 4,
    timesIncorrect: 2,
  },
  {
    category: "JavaScript Basics",
    question: "Among the given statements, which statement defines closures in JavaScript?",
    answerOne:
      "XJavaScript is a function that is enclosed with references to its inner function scope",
    answerTwo:
      "CJavaScript is a function that is enclosed with references to its lexical environment",
    answerThree:
      "XJavaScript is a function that is enclosed with the object to its inner function scope",
    answerFour: "XNone of the above",
    timesCorrect: 4,
    timesIncorrect: 2,
  },
  {
    category: "JavaScript Basics",
    question: "Arrays in JavaScript are defined by which of the following statements?",
    answerOne: "CIt is an ordered list of values",
    answerTwo: "XIt is an ordered list of objects",
    answerThree: "XIt is an ordered list of strings",
    answerFour: "XIt is an ordered list of functions",
    answerFive: "XNone of the above",
    timesCorrect: 4,
    timesIncorrect: 2,
  },
  {
    category: "JavaScript Basics",
    question:
      "Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
    answerOne: "XPosition",
    answerTwo: "CWindow",
    answerThree: "XStandard",
    answerFour: "XLocation",
    answerFive: "XNone of the above",
    timesCorrect: 4,
    timesIncorrect: 2,
  },
  {
    category: "JavaScript Basics",
    question: "Which of the following scoping type does JavaScript use?",
    answerOne: "XSequential",
    answerTwo: "XSegmental",
    answerThree: "CLexical",
    answerFour: "XLiteral",
    answerFive: "XNone of the above",
    timesCorrect: 4,
    timesIncorrect: 2,
  },
  {
    category: "JavaScript Basics",
    question: "What is the basic difference between JavaScript and Java?",
    answerOne: "XFunctions are considered fields",
    answerTwo: "CFunctions are values, and there is no hard distinction between methods and fields",
    answerThree: "XVariables are specific",
    answerFour: "XThere are no differences",
    timesCorrect: 4,
    timesIncorrect: 2,
  },
  {
    category: "JavaScript Basics",
    question: "What is the basic difference between JavaScript and Java?",
    answerOne: "XFunctions are considered fields",
    answerTwo: "CFunctions are values, and there is no hard distinction between methods and fields",
    answerThree: "XVariables are specific",
    answerFour: "XThere are no differences",
    answerFive: "XNone of the above",
    timesCorrect: 4,
    timesIncorrect: 2,
  },

  //big o
  {
    category: "Time and Space Complexity",
    question: "What is the time complexity of the 'splice' method in JavaScript?",
    answerOne: "XConstant (O(1))",
    answerTwo: "CLinear (O(n))",
    answerThree: "XQuadratic (O(n^2))",
    answerFour: "XLogarithmic (O(log n))",
    answerFive: "XExponential (O(2^n))",
    timesCorrect: 2,
    timesIncorrect: 6,
  },
  {
    category: "Time and Space Complexity",
    question: "What is the space complexity of a recursive function?",
    answerOne: "XConstant (O(1))",
    answerTwo: "XLinear (O(n))",
    answerThree: "XQuadratic (O(n^2))",
    answerFour: "CLinear (O(log n))",
    answerFive: "XExponential (O(2^n))",
  },

  {
    category: "Time and Space Complexity",
    question: "Which sorting algorithm has the best average-case time complexity?",
    answerOne: "XBubble Sort",
    answerTwo: "CMerge Sort",
    answerThree: "XSelection Sort",
    answerFour: "CQuick Sort",
    answerFive: "XInsertion Sort",
    timesCorrect: 1,
    timesIncorrect: 4,
  },
  {
    category: "Time and Space Complexity",
    question: "Data Structure Ops: Array (unsorted) -- Deletion",
    answerOne: "XO(1)",
    answerTwo: "CO(N)",
    answerThree: "XO(log(n))",
    answerFour: "XO(n log(n))",
    answerFive: "XO(m)",
    timesCorrect: 1,
    timesIncorrect: 4,
  },
  {
    category: "Time and Space Complexity",
    question: "Data Structure Ops: Splay Tree (unsorted) -- Search(Average)",
    answerOne: "XO(1)",
    answerTwo: "XO(N)",
    answerThree: "CO(log(n))",
    answerFour: "XO(n log(n))",
    answerFive: "XO(m)",
    timesCorrect: 1,
    timesIncorrect: 4,
  },
  {
    category: "Time and Space Complexity",
    question: "Data Structure Ops: AVL Tree (unsorted) -- Insertion(worst)",
    answerOne: "XO(1)",
    answerTwo: "XO(N)",
    answerThree: "CO(log(n))",
    answerFour: "XO(n log(n))",
    answerFive: "XO(m)",
    timesCorrect: 1,
    timesIncorrect: 4,
  },

  // //////////////linked lists ////////////
  //// source https://www.interviewbit.com/linked-list-mcq/ ////

  {
    category: "Linked Lists",
    question: "What information is stored in a doubly-linked list's nodes?",
    answerOne: "XValue of node",
    answerTwo: "XAddress of next node",
    answerThree: "XAddress of previous node",
    answerFour: "CAll of the above",
    // answerFive: "",
    timesCorrect: 1,
    timesIncorrect: 0,
  },
  {
    category: "Linked Lists",
    question: "What is the optimal time complexity to count the number of nodes in a linked list?",
    answerOne: "CO(n)",
    answerTwo: "XO(1)",
    answerThree: "XO(log n)",
    answerFour: "XNone of the above",
    // answerFive: "",
    timesCorrect: 1,
    timesIncorrect: 0,
  },
  {
    category: "Linked Lists",
    question: "Which of the following are applications of linked lists?",
    answerOne: "XImplementing file systems",
    answerTwo: "XChaining in hash tables",
    answerThree: "Xbinary tree implementation",
    answerFour: "CAll of the above",
    // answerFive: "",
    timesCorrect: 0,
    timesIncorrect: 1,
  },
  {
    category: "Linked Lists",
    question:
      "Insertion of an element at the middle of a linked list requires the modification of how many pointers?",
    answerOne: "C2",
    answerTwo: "X1",
    answerThree: "X3",
    answerFour: "X4",
    // answerFive: "",
    timesCorrect: 0,
    timesIncorrect: 1,
  },
  {
    category: "Linked Lists",
    question:
      "Insertion of an element at the end of a linked list requires the modification of how many pointers?",
    answerOne: "X2",
    answerTwo: "C1",
    answerThree: "X3",
    answerFour: "X4",
    // answerFive: "",
    timesCorrect: 0,
    timesIncorrect: 1,
  },
  {
    category: "Linked Lists",
    question:
      "In the worst case, the number of comparisons needed to search a singly linked list of length n for a given element will be?",
    answerOne: "XO(log n)",
    answerTwo: "CO(n)",
    answerThree: "XO(1)",
    answerFour: "XO(n+m)",
    answerFive: "XNone of the above",
    timesCorrect: 1,
    timesIncorrect: 0,
  },
  {
    category: "Linked Lists",
    question: "Which of the following algos is not feasible to implement in a linked list??",
    answerOne: "XLinear Search",
    answerTwo: "CBinary Search",
    answerThree: "XMerge Sort",
    answerFour: "XInsertion Sort",
    answerFive: "XNone of the above",
    timesCorrect: 0,
    timesIncorrect: 1,
  },
  {
    category: "Linked Lists",
    question: "Which of the following algos is not feasible to implement in a linked list?",
    answerOne: "XLinear Search",
    answerTwo: "CBinary Search",
    answerThree: "XMerge Sort",
    answerFour: "XInsertion Sort",
    answerFive: "XNone of the above",
    timesCorrect: 0,
    timesIncorrect: 1,
  },
  {
    category: "Linked Lists",
    question: "Which of the following can be done with linked lists?",
    answerOne: "XImplementation of Stacks and Queues",
    answerTwo: "XImplementation of Binary Trees",
    answerThree: "XImplementation of Data Structures that can simulate Dynamic Arrays",
    answerFour: "CAll of the above",
    // answerFive: "XNone of the above",
    timesCorrect: 0,
    timesIncorrect: 1,
  },
  {
    category: "Linked Lists",
    question: "What is the time complexity to insert an element to the front of a linked list?",
    answerOne: "XO(log n)",
    answerTwo: "XO(n)",
    answerThree: "CO(1)",
    answerFour: "XO(n+m)",
    answerFive: "XNone of the above",
    timesCorrect: 1,
    timesIncorrect: 0,
  },
  {
    category: "Linked Lists",
    question: "What is the time complexity to insert an element to the rear of a linked list?",
    answerOne: "XO(log n)",
    answerTwo: "CO(n)",
    answerThree: "XO(1)",
    answerFour: "XO(n+m)",
    answerFive: "XNone of the above",
    timesCorrect: 1,
    timesIncorrect: 0,
  },
  {
    category: "Linked Lists",
    question: "Linked lists nodes can be implemented using what?",
    answerOne: "XStructs",
    answerTwo: "XClasses",
    answerThree: "CBoth",
    answerFour: "XNeither",
    // answerFive: "XNone of the above",
    timesCorrect: 0,
    timesIncorrect: 1,
  },
  {
    category: "Linked Lists",
    question:
      "Which type of linked list stores the address of the head node in the next pointer of the last node?",
    answerOne: "XSingly",
    answerTwo: "XDoubly",
    answerThree: "XHashed List",
    answerFour: "CCircular",
    // answerFive: "XNone of the above",
    timesCorrect: 0,
    timesIncorrect: 1,
  },
  {
    category: "Linked Lists",
    question: "What does the following code snippet do?",
    codeSnippet: `
    ListNode* solve(ListNode* head) {
      ListNode* prev = NULL;
      if(head == NULL) {
          return head;
      }
      if(head -> next == NULL) {
          return head;
      }
      ListNode* curr = head -> next;
      while(head != NULL) {
          head -> next = prev;
          prev = head;
          head = curr;
          if(curr != NULL) {
              curr = curr -> next;
          }
      }
      return prev;
  }
    `,
    answerOne: "XReturns the original linked list",
    answerTwo: "CReturns the linked list after reversing it",
    answerThree: "XReturns a linked list containing elements at odd indices only",
    answerFour: "XNone of the above",
    // answerFive: "X",
    timesCorrect: 0,
    timesIncorrect: 1,
  },
  {
    category: "Linked Lists",
    question: "What is the time complexity to reverse a linked list?",
    answerOne: "XO(log n)",
    answerTwo: "CO(n)",
    answerThree: "XO(1)",
    answerFour: "XO(n+m)",
    answerFive: "XNone of the above",
    timesCorrect: 0,
    timesIncorrect: 1,
  },
  {
    category: "Linked Lists",
    question: "What is the time complexity to concatenate two linked lists?",
    answerOne: "XO(log n)",
    answerTwo: "XO(n)",
    answerThree: "XO(1)",
    answerFour: "CO(1) if we have the address of the last node of one of the lists",
    answerFive: "XNone of the above",
    timesCorrect: 0,
    timesIncorrect: 1,
  },
  {
    category: "Linked Lists",
    question: "Which type of linked list traversals can be performed in both directions?",
    answerOne: "XSingly",
    answerTwo: "CDoubly",
    answerThree: "XCircularly",
    answerFour: "XNone of the above",
    // answerFive: "XNone of the above",
    timesCorrect: 0,
    timesIncorrect: 1,
  },
  {
    category: "Linked Lists",
    question:
      "Which of the following algorithm is the optimal way to find the middle element of a linked list?",
    answerOne: "XFind the length, and then traverse to the length/2 node",
    answerTwo: "CFast and slow pointer method",
    answerThree: "XFind distance of all nodes and print middle nodes",
    answerFour: "XNone of the above",
    // answerFive: "XNone of the above",
    timesCorrect: 0,
    timesIncorrect: 1,
  },
  {
    category: "Linked Lists",
    question: "A linked list where none of the nodes contain a NULL pointer is?",
    answerOne: "XSingly",
    answerTwo: "XDoubly",
    answerThree: "CCircularly",
    answerFour: "XNone of the above",
    // answerFive: "XNone of the above",
    timesCorrect: 1,
    timesIncorrect: 0,
  },
  {
    category: "Linked Lists",
    question: "Which of the following statements are true?",
    answerOne: "XRandom access of elements in a linked list is not possible",
    answerTwo: "XArrays have better cache locality than linked lists",
    answerThree: "XThe size of linked lists is dynamic and can be changed as needed.",
    answerFour: "CAll of the above",
    answerFive: "XNone of the above",
    timesCorrect: 1,
    timesIncorrect: 0,
  },
  {
    category: "Linked Lists",
    question:
      "What is the optimal complexity we can achieve when removing duplicates from an unsorted linked list?",
    answerOne: "XO(log n)",
    answerTwo: "CO(n)",
    answerThree: "XO(1)",
    answerFour: "XO(n^2)",
    answerFive: "XNone of the above",
    timesCorrect: 0,
    timesIncorrect: 1,
  },
  {
    category: "Linked Lists",
    question:
      "What is the optimal complexity we can achieve when removing duplicates from a sorted linked list?",
    answerOne: "XO(log n)",
    answerTwo: "CO(n)",
    answerThree: "XO(1)",
    answerFour: "XO(n^2)",
    answerFive: "XNone of the above",
    timesCorrect: 0,
    timesIncorrect: 1,
  },
  {
    category: "Linked Lists",
    question: "Which of the following sorting algorithms can be applied to linked lists?",
    answerOne: "XMerge Sort",
    answerTwo: "XInsertion Sort",
    answerThree: "XQuick Sort",
    answerFour: "CAll of the above",
    answerFive: "XNone of the above",
    timesCorrect: 0,
    timesIncorrect: 1,
  },
  {
    category: "Linked Lists",
    question: "What does the following code snippet do?",
    codeSnippet: `
    ListNode* solve(ListNode* head, int x) {
      ListNode* front = head;
      int count = 1;
      while(front != NULL) {
        cout << front -> data << " " << head -> data << endl;
        if(count <= x) {
          front = front -> next;
        }
        else {
          head = head -> next;
          front = front -> next;
        }
        count++;
      }
      return head;
    }    
    `,
    answerOne: "XFind the xth node from beginning of a linked list",
    answerTwo: "CFind xth node from end of a linked list",
    answerThree: "XFind x-1th node from end of a linked list",
    answerFour: "XAll of the above",
    answerFive: "XNone of the above",
    timesCorrect: 0,
    timesIncorrect: 1,
  },
  {
    category: "Linked Lists",
    question: "What will be the output of the following code snippet for 1->2->3->4->5?",
    codeSnippet: `
    void solve (ListNode* head) {
      while(head != NULL) {
      cout << head -> data << " ";
      head = head -> next;
    }
  
    }    
    `,
    answerOne: "X21345",
    answerTwo: "C12345",
    answerThree: "X54321",
    answerFour: "X23154",
    answerFive: "XNone of the above",
    timesCorrect: 0,
    timesIncorrect: 1,
  },
  {
    category: "Linked Lists",
    question: "What does the following code snippet do?",
    codeSnippet: `
    int solve (ListNode* list) {
      ListNode* fast = list;
    ListNode* slow = list;
    while(fast -> next != NULL && fast -> next -> next != NULL) {
      fast = fast -> next -> next;
      slow = slow -> next;
    }
    return slow -> data;
  
    }    
    `,
    answerOne: "CFind the middle element in the linked list",
    answerTwo: "XFind the last element in the linked list",
    answerThree: "XFind the first element in the linked list",
    answerFour: "XNone of the above",
    // answerFive: "XNone of the above",
    timesCorrect: 1,
    timesIncorrect: 0,
  },
  {
    category: "Linked Lists",
    question: "What does the following code snippet do?",
    codeSnippet: `
    void solve(ListNode* node) {
      node = node -> next;  
    }    
    `,
    answerOne: "XDeletes the given node from the linked list",
    answerTwo: "XDeletes head of the list",
    answerThree: "XDeletes the last node of the list",
    answerFour: "CNone of the above",
    // answerFive: "XNone of the above",
    timesCorrect: 1,
    timesIncorrect: 0,
  },
  {
    category: "Linked Lists",
    question:
      "The type of pointer used to point to the address of the next element in a linked list",
    answerOne: "XPointer to character",
    answerTwo: "XPointer to integer",
    answerThree: "CPointer to node",
    answerFour: "XAll of the above",
    answerFive: "XNone of the above",
    timesCorrect: 0,
    timesIncorrect: 1,
  },
  {
    category: "Linked Lists",
    question: "Which is the most optimal to find an element at the kth position in a linked list?",
    answerOne: "XSingly Linked List",
    answerTwo: "XDoubly Linked List",
    answerThree: "XCircular Linked List",
    answerFour: "CArray implementation of the linked list",
    answerFive: "XNone of the above",
    timesCorrect: 0,
    timesIncorrect: 1,
  },
  {
    category: "Linked Lists",
    question: "What is the time complexity of adding 2 numbers as a linked list?",
    answerOne: "CO(max(n,m)) where n and m are sizes of the list",
    answerTwo: "XO(n+m)",
    answerThree: "XO(min(n,m))",
    answerFour: "XNone of the above",
    // answerFive: "XNone of the above",
    timesCorrect: 0,
    timesIncorrect: 1,
  },
  {
    category: "Linked Lists",
    question: "Which of the following problems can be solved using two tortoise and hare pointers?",
    answerOne: "XDetecting cycle in a linked list",
    answerTwo: "XFinding the intersection of two linked lists",
    answerThree: "XFinding the middle element of a linked list",
    answerFour: "CAll of the above",
    answerFive: "XNone of the above",
    timesCorrect: 1,
    timesIncorrect: 0,
  },
  {
    category: "Linked Lists",
    question: "Which of the following is similar about singly and doubly linked lists?",
    answerOne:
      "XBoth of them are not able to access the data at a random position in constant time",
    answerTwo:
      "XBoth of them can add a new node after a given node or at the beginning of a new list in O(1) time",
    answerThree: "XBoth of them can delete the first node in O(1) time. ",
    answerFour: "CAll of the above",
    answerFive: "XNone of the above",
    timesCorrect: 1,
    timesIncorrect: 0,
  },
  {
    category: "Linked Lists",
    question: "Rotating a linked list by some places clockwise will take a TIME complexity of?",
    answerOne: "XO(log n)",
    answerTwo: "CO(n)",
    answerThree: "XO(1)",
    answerFour: "XO(n^2)",
    answerFive: "XNone of the above",
    timesCorrect: 1,
    timesIncorrect: 0,
  },
  {
    category: "Linked Lists",
    question: "Rotating a linked list by some places clockwise will take a SPACE complexity of?",
    answerOne: "XO(log n)",
    answerTwo: "XO(n)",
    answerThree: "CO(1)",
    answerFour: "XO(n^2)",
    answerFive: "XNone of the above",
    timesCorrect: 1,
    timesIncorrect: 0,
  },
  {
    category: "Linked Lists",
    question: "What is the space complexity for deleting a linked list?",
    answerOne: "XO(log n)",
    answerTwo: "XO(n)",
    answerThree: "CO(1)",
    answerFour: "XO(n^2)",
    answerFive: "XNone of the above",
    timesCorrect: 1,
    timesIncorrect: 0,
  },
  {
    category: "Linked Lists",
    question: "What is the space complexity for storing a linked list?",
    answerOne: "XO(log n)",
    answerTwo: "CO(n)",
    answerThree: "XO(1)",
    answerFour: "XO(n^2)",
    answerFive: "XNone of the above",
    timesCorrect: 1,
    timesIncorrect: 0,
  },
  {
    category: "Linked Lists",
    question: "Which of the following operations takes O(1) time?",
    answerOne: "CInsert element at the start of linked list",
    answerTwo: "XInsert element at end of linked list",
    answerThree: "XFind length of linked list",
    answerFour: "XNone of the above",
    // answerFive: "XNone of the above",
    timesCorrect: 1,
    timesIncorrect: 0,
  },
  {
    category: "Linked Lists",
    question: "What information stored by linked lists is used to implement binary trees?",
    answerOne: "XValue of current node",
    answerTwo: "XPointer to left child",
    answerThree: "XPointer to right child",
    answerFour: "CAll of the above",
    answerFive: "XNone of the above",
    timesCorrect: 1,
    timesIncorrect: 0,
  },
  {
    category: "Linked Lists",
    question: "Which of the following sorting algorithms is preferred to sort a linked list?",
    answerOne: "CMerge Sort",
    answerTwo: "XQuick Sort",
    answerThree: "XInsertion",
    answerFour: "XAll of the above",
    answerFive: "XNone of the above",
    timesCorrect: 1,
    timesIncorrect: 2,
  },
];
module.exports = questionData;
