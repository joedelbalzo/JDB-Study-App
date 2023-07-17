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
  {
    category: "JavaScript",
    question: "What is the use of 'this' keyword in JavaScript?",
    answerOne: "CIt refers to the current instance of the object",
    answerTwo: "XIt refers to the previous instance of the object",
    answerThree: "XIt refers to the global object",
    answerFour: "XAll of the above",
    answerFive: "XNone of the above",
    timesCorrect: 0,
    timesIncorrect: 0,
  },
  {
    category: "JavaScript",
    question:
      "Which method in an Array object is used to add and/or remove elements from an array?",
    answerOne: "Xfilter()",
    answerTwo: "Xmap()",
    answerThree: "Csplice()",
    answerFour: "Xreduce()",
    answerFive: "XindexOf()",
    timesCorrect: 0,
    timesIncorrect: 0,
  },
  {
    category: "Data Structures",
    question: "What data structure uses a Last In First Out (LIFO) method?",
    answerOne: "XQueue",
    answerTwo: "XLinked List",
    answerThree: "XArray",
    answerFour: "CStack",
    answerFive: "XBinary Tree",
    timesCorrect: 0,
    timesIncorrect: 0,
  },
  {
    category: "Data Structures",
    question:
      "In binary search trees, where does a node with a value less than the parent node go?",
    answerOne: "XTo the right",
    answerTwo: "XTo the root",
    answerThree: "CTo the left",
    answerFour: "XNone of the above",
    answerFive: "XAll of the above",
    timesCorrect: 0,
    timesIncorrect: 0,
  },
  {
    category: "Algorithms",
    question:
      "What is the time complexity of the quicksort algorithm in the average case scenario?",
    answerOne: "XO(n)",
    answerTwo: "XO(nlogn)",
    answerThree: "CO(nlogn)",
    answerFour: "XO(n^2)",
    answerFive: "XO(1)",
    timesCorrect: 0,
    timesIncorrect: 0,
  },
  {
    category: "Algorithms",
    question:
      "In the Dijkstra's algorithm, which data structure is typically used to store the vertices?",
    answerOne: "XArray",
    answerTwo: "XLinked List",
    answerThree: "XStack",
    answerFour: "CHeap",
    answerFive: "XHash Table",
    timesCorrect: 0,
    timesIncorrect: 0,
  },
  {
    category: "JavaScript",
    question:
      "What type of JavaScript variable is mutable and allows properties to be added and removed?",
    answerOne: "CObject",
    answerTwo: "XNumber",
    answerThree: "XString",
    answerFour: "XBoolean",
    answerFive: "XNone of the above",
    timesCorrect: 0,
    timesIncorrect: 0,
  },
  {
    category: "JavaScript",
    question: "Which method is used to remove the last element from a JavaScript array?",
    answerOne: "Xshift()",
    answerTwo: "Cpop()",
    answerThree: "Xpush()",
    answerFour: "Xunshift()",
    answerFive: "Xsplice()",
    timesCorrect: 0,
    timesIncorrect: 0,
  },
  {
    category: "Data Structures",
    question: "In hash tables, what technique helps handle collisions?",
    answerOne: "XBinary Search",
    answerTwo: "XDynamic Programming",
    answerThree: "CDouble Hashing",
    answerFour: "XRadix Sort",
    answerFive: "XAll of the above",
    timesCorrect: 0,
    timesIncorrect: 0,
  },
  {
    category: "Algorithms",
    question: "Which of the following is not a type of sorting algorithm?",
    answerOne: "XBubble Sort",
    answerTwo: "CPrim's Algorithm",
    answerThree: "XHeap Sort",
    answerFour: "XQuick Sort",
    answerFive: "XInsertion Sort",
    timesCorrect: 0,
    timesIncorrect: 0,
  },
  {
    category: "Binary Search Trees",
    question: "What is the time complexity of searching for an element in a binary search tree?",
    answerOne: "XO(n^2)",
    answerTwo: "XO(logn)",
    answerThree: "CO(n)",
    answerFour: "XO(1)",
    answerFive: "XO(nlogn)",
    timesCorrect: 0,
    timesIncorrect: 0,
  },
  {
    category: "Binary Search Trees",
    question: "What does the following JavaScript code do?",
    codeSnippet: `
    function isBST(node, min = null, max = null) {
      if (node === null) {
          return true;
      }
      if ((min !== null && node.val <= min) || (max !== null && node.val > max)) {
          return false;
      }
      return isBST(node.left, min, node.val) && isBST(node.right, node.val, max);
    }
    `,
    answerOne: "XReturns the sum of all nodes in a binary search tree",
    answerTwo: "XReturns a binary search tree after deleting a specific node",
    answerThree: "CChecks if a given binary tree is a binary search tree",
    answerFour: "XFinds the smallest element in a binary search tree",
    answerFive: "XNone of the above",
    timesCorrect: 0,
    timesIncorrect: 0,
  },
  {
    category: "Binary Search Trees",
    question: "In a binary search tree, which traversal method results in a sorted order of nodes?",
    answerOne: "XPreorder traversal",
    answerTwo: "XPostorder traversal",
    answerThree: "CInorder traversal",
    answerFour: "XLevel-order traversal",
    answerFive: "XNone of the above",
    timesCorrect: 0,
    timesIncorrect: 0,
  },
  {
    category: "Binary Search Trees",
    question:
      "What operation would give a worst-case time complexity of O(n) in a binary search tree?",
    answerOne: "XInsertion",
    answerTwo: "XDeletion",
    answerThree: "XSearch",
    answerFour: "CAll of the above",
    answerFive: "XNone of the above",
    timesCorrect: 0,
    timesIncorrect: 0,
  },
  {
    category: "Binary Search Trees",
    question: "What does the following JavaScript code do?",
    codeSnippet: `
    function findMin(root) {
      let current = root;
      while (current.left !== null) {
          current = current.left;
      }
      return current.key;
    }
    `,
    answerOne: "CReturns the minimum element in a binary search tree",
    answerTwo: "XReturns the maximum element in a binary search tree",
    answerThree: "XReturns the sum of all elements in a binary search tree",
    answerFour: "XReturns the height of the binary search tree",
    answerFive: "XNone of the above",
    timesCorrect: 0,
    timesIncorrect: 0,
  },
  {
    category: "Binary Search Trees",
    question:
      "In a binary search tree, the left child is _______ than the parent, and the right child is _______ than the parent.",
    answerOne: "Xlarger, smaller",
    answerTwo: "Csmaller, larger",
    answerThree: "Xlarger, larger",
    answerFour: "Xsmaller, smaller",
    answerFive: "XNone of the above",
    timesCorrect: 0,
    timesIncorrect: 0,
  },
  {
    category: "Binary Trees",
    question: "What is the maximum number of nodes at level 'l' in a binary tree?",
    answerOne: "Xl",
    answerTwo: "Xl^2",
    answerThree: "CL^2",
    answerFour: "Xl!",
    answerFive: "XNone of the above",
    timesCorrect: 0,
    timesIncorrect: 0,
  },
  {
    category: "Binary Trees",
    question: "What is the time complexity of in-order tree traversal in a binary tree?",
    answerOne: "XO(logn)",
    answerTwo: "XO(n^2)",
    answerThree: "CO(n)",
    answerFour: "XO(1)",
    answerFive: "XO(nlogn)",
    timesCorrect: 0,
    timesIncorrect: 0,
  },
  {
    category: "Binary Trees",
    question: "What does the following JavaScript code do?",
    codeSnippet: `
    function height(root) {
      if (root === null) {
          return -1;
      } else {
          return Math.max(height(root.left), height(root.right)) + 1;
      }
    }
    `,
    answerOne: "XFinds the sum of all elements in the binary tree",
    answerTwo: "CFinds the height of the binary tree",
    answerThree: "XFinds the largest element in the binary tree",
    answerFour: "XChecks if the binary tree is balanced",
    answerFive: "XNone of the above",
    timesCorrect: 0,
    timesIncorrect: 0,
  },
  {
    category: "Binary Search Trees",
    question:
      "What is the time complexity of the worst case for insert operation in a Binary Search Tree?",
    answerOne: "XO(1)",
    answerTwo: "XO(logn)",
    answerThree: "XO(nlogn)",
    answerFour: "CO(n)",
    answerFive: "XO(n^2)",
    timesCorrect: 0,
    timesIncorrect: 0,
  },
  {
    category: "Binary Search Trees",
    question: "What does the following JavaScript code do?",
    codeSnippet: `
    function isBalanced(root) {
      if (root === null) {
          return true;
      }
      const leftHeight = height(root.left);
      const rightHeight = height(root.right);
      return (
        Math.abs(leftHeight - rightHeight) <= 1 &&
        isBalanced(root.left) &&
        isBalanced(root.right)
      );
    }
    `,
    answerOne: "CChecks if the binary tree is balanced",
    answerTwo: "XReturns the height of the binary tree",
    answerThree: "XChecks if the binary tree is a binary search tree",
    answerFour: "XFinds the largest element in the binary tree",
    answerFive: "XNone of the above",
    timesCorrect: 0,
    timesIncorrect: 0,
  },
  {
    category: "Binary Search Trees",
    question: "What does 'balanced' mean in the context of Binary Search Trees?",
    answerOne: "XAll nodes have two children",
    answerTwo: "XThe tree is fully filled",
    answerThree: "XThere are no duplicate nodes",
    answerFour: "CThe height of the left and right subtrees of every node differ by no more than 1",
    answerFive: "XNone of the above",
    timesCorrect: 0,
    timesIncorrect: 0,
  },
  {
    category: "Binary Trees",
    question: "What type of binary tree is used for Huffman coding?",
    answerOne: "XBinary Search Tree",
    answerTwo: "XB+ Tree",
    answerThree: "CBinary Heap",
    answerFour: "XAVL Tree",
    answerFive: "XRed-Black Tree",
    timesCorrect: 0,
    timesIncorrect: 0,
  },
  {
    category: "Binary Search Trees",
    question:
      "In the context of Binary Search Trees, what does the term 'in-order predecessor' mean?",
    answerOne: "XThe node with the highest value",
    answerTwo: "XThe parent node",
    answerThree: "CThe node with the next lower value",
    answerFour: "XThe left child of a node",
    answerFive: "XThe right child of a node",
    timesCorrect: 0,
    timesIncorrect: 0,
  },
  {
    category: "JavaScript Data Structures",
    question: "What will be the output of the following JavaScript code?",
    codeSnippet: `
    let arr = [10, 20, 30, 40, 50];
    console.log(arr.length);
    `,
    answerOne: "C5",
    answerTwo: "X50",
    answerThree: "X10",
    answerFour: "X4",
    answerFive: "XNone of the above",
    timesCorrect: 0,
    timesIncorrect: 0,
  },
  {
    category: "JavaScript Data Structures",
    question: "What will be the output of the following JavaScript code?",
    codeSnippet: `
    let set = new Set();
    set.add(1);
    set.add(2);
    set.add(3);
    console.log(set.has(2));
    `,
    answerOne: "XFalse",
    answerTwo: "CTrue",
    answerThree: "X3",
    answerFour: "X2",
    answerFive: "XNone of the above",
    timesCorrect: 0,
    timesIncorrect: 0,
  },
  {
    category: "JavaScript Data Structures",
    question: "What is the time complexity of adding an element to a JavaScript array?",
    answerOne: "CO(1)",
    answerTwo: "XO(n)",
    answerThree: "XO(nlogn)",
    answerFour: "XO(logn)",
    answerFive: "XNone of the above",
    timesCorrect: 0,
    timesIncorrect: 0,
  },
  {
    category: "JavaScript Data Structures",
    question: "What data structure is ideally suited for a first-in-first-out (FIFO) process?",
    answerOne: "XSet",
    answerTwo: "XArray",
    answerThree: "XStack",
    answerFour: "CQueue",
    answerFive: "XNone of the above",
    timesCorrect: 0,
    timesIncorrect: 0,
  },
  {
    category: "JavaScript Data Structures",
    question: "What will be the output of the following JavaScript code?",
    codeSnippet: `
    let map = new Map();
    map.set('name', 'John');
    console.log(map.get('name'));
    `,
    answerOne: "Xname",
    answerTwo: "Xundefined",
    answerThree: "CJohn",
    answerFour: "Xnull",
    answerFive: "XNone of the above",
    timesCorrect: 0,
    timesIncorrect: 0,
  },
  {
    category: "JavaScript Data Structures",
    question: "Which method removes the last element from an array and returns that element?",
    answerOne: "Xshift()",
    answerTwo: "Xunshift()",
    answerThree: "Cpop()",
    answerFour: "Xpush()",
    answerFive: "XNone of the above",
    timesCorrect: 0,
    timesIncorrect: 0,
  },
  {
    category: "JavaScript Data Structures",
    question: "What will be the output of the following JavaScript code?",
    codeSnippet: `
    let arr = [1, 2, 3, 4, 5];
    arr.splice(2, 1);
    console.log(arr);
    `,
    answerOne: "X[1, 2, 3, 4, 5]",
    answerTwo: "C[1, 2, 4, 5]",
    answerThree: "X[1, 3, 4, 5]",
    answerFour: "X[2, 3, 4, 5]",
    answerFive: "XNone of the above",
    timesCorrect: 0,
    timesIncorrect: 0,
  },
  {
    category: "JavaScript Data Structures",
    question: "Which of the following is not a built-in JavaScript data structure?",
    answerOne: "XLinked List",
    answerTwo: "CHeap",
    answerThree: "XSet",
    answerFour: "XMap",
    answerFive: "XArray",
    timesCorrect: 0,
    timesIncorrect: 0,
  },
  {
    category: "JavaScript Data Structures",
    question: "What will be the output of the following JavaScript code?",
    codeSnippet: `
    let stack = [];
    stack.push(1);
    stack.push(2);
    console.log(stack.pop());
    `,
    answerOne: "X1",
    answerTwo: "C2",
    answerThree: "Xundefined",
    answerFour: "Xnull",
    answerFive: "XNone of the above",
    timesCorrect: 0,
    timesIncorrect: 0,
  },
  {
    category: "JavaScript Data Structures",
    question: "What is the time complexity to access an element in a JavaScript array by index?",
    answerOne: "XO(n)",
    answerTwo: "CO(1)",
    answerThree: "XO(nlogn)",
    answerFour: "XO(logn)",
    answerFive: "XNone of the above",
    timesCorrect: 0,
    timesIncorrect: 0,
  },
  {
    category: "Python Data Structures",
    question: "What will be the output of the following Python code?",
    codeSnippet: `
    list = [1, 2, 3, 4, 5]
    print(len(list))
    `,
    answerOne: "C5",
    answerTwo: "X1",
    answerThree: "X2",
    answerFour: "X3",
    answerFive: "XNone of the above",
    timesCorrect: 0,
    timesIncorrect: 0,
  },
  {
    category: "Python Data Structures",
    question: "What will be the output of the following Python code?",
    codeSnippet: `
    dict = {'Name': 'Zara', 'Age': 7}
    print("Value : %s" %  dict.get('Age'))
    `,
    answerOne: "XName",
    answerTwo: "C7",
    answerThree: "XZara",
    answerFour: "XNone",
    answerFive: "XNone of the above",
    timesCorrect: 0,
    timesIncorrect: 0,
  },
  {
    category: "Python Data Structures",
    question: "What is the time complexity of appending an element to a Python list?",
    answerOne: "XO(n)",
    answerTwo: "CO(1)",
    answerThree: "XO(nlogn)",
    answerFour: "XO(logn)",
    answerFive: "XNone of the above",
    timesCorrect: 0,
    timesIncorrect: 0,
  },
  {
    category: "Python Data Structures",
    question: "What data structure is ideally suited for a first-in-first-out (FIFO) process?",
    answerOne: "XList",
    answerTwo: "XDict",
    answerThree: "XStack",
    answerFour: "CQueue",
    answerFive: "XNone of the above",
    timesCorrect: 0,
    timesIncorrect: 0,
  },
  {
    category: "Python Data Structures",
    question: "What will be the output of the following Python code?",
    codeSnippet: `
    stack = [3, 4, 5]
    stack.append(6)
    stack.append(7)
    print(stack)
    `,
    answerOne: "X[3, 4, 5]",
    answerTwo: "C[3, 4, 5, 6, 7]",
    answerThree: "X[6, 7]",
    answerFour: "X[7, 6, 5, 4, 3]",
    answerFive: "XNone of the above",
    timesCorrect: 0,
    timesIncorrect: 0,
  },
  {
    category: "Python Data Structures",
    question: "Which method removes the last element from a list and returns that element?",
    answerOne: "Xshift()",
    answerTwo: "Xunshift()",
    answerThree: "Cpop()",
    answerFour: "Xpush()",
    answerFive: "XNone of the above",
    timesCorrect: 0,
    timesIncorrect: 0,
  },
  {
    category: "Python Data Structures",
    question: "What will be the output of the following Python code?",
    codeSnippet: `
    queue = [3, 4, 5]
    queue.append(6)
    queue.append(7)
    queue.pop(0)
    print(queue)
    `,
    answerOne: "X[3, 4, 5]",
    answerTwo: "X[3, 4, 5, 6, 7]",
    answerThree: "C[4, 5, 6, 7]",
    answerFour: "X[7, 6, 5, 4]",
    answerFive: "XNone of the above",
    timesCorrect: 0,
    timesIncorrect: 0,
  },
  {
    category: "Python Data Structures",
    question: "Which of the following is not a built-in Python data structure?",
    answerOne: "XLinked List",
    answerTwo: "CHeap",
    answerThree: "XSet",
    answerFour: "XDict",
    answerFive: "XList",
    timesCorrect: 0,
    timesIncorrect: 0,
  },
  {
    category: "Python Data Structures",
    question: "What will be the output of the following Python code?",
    codeSnippet: `
    stack = [3, 4, 5]
    stack.append(6)
    stack.append(7)
    print(stack.pop())
    `,
    answerOne: "X3",
    answerTwo: "C7",
    answerThree: "X5",
    answerFour: "XNone",
    answerFive: "XNone of the above",
    timesCorrect: 0,
    timesIncorrect: 0,
  },
  {
    category: "Python Data Structures",
    question: "What is the time complexity to access an element in a Python list by index?",
    answerOne: "XO(n)",
    answerTwo: "CO(1)",
    answerThree: "XO(nlogn)",
    answerFour: "XO(logn)",
    answerFive: "XNone of the above",
    timesCorrect: 0,
    timesIncorrect: 0,
  },
  {
    category: "Python Data Structures",
    question: "How do you define an empty set in Python?",
    answerOne: "Cset()",
    answerTwo: "X{}",
    answerThree: "XSet()",
    answerFour: "X[]",
    answerFive: "XNone of the above",
    timesCorrect: 0,
    timesIncorrect: 0,
  },
  {
    category: "Python Data Structures",
    question: "What will be the output of the following Python code?",
    codeSnippet: `
    dict = {'a': 1, 'b': 2, 'c': 3}
    print(len(dict))
    `,
    answerOne: "X2",
    answerTwo: "C3",
    answerThree: "X1",
    answerFour: "X0",
    answerFive: "XNone of the above",
    timesCorrect: 0,
    timesIncorrect: 0,
  },
  {
    category: "Python Data Structures",
    question:
      "What is the time complexity of checking whether an element is present in a Python set?",
    answerOne: "XO(n)",
    answerTwo: "CO(1)",
    answerThree: "XO(nlogn)",
    answerFour: "XO(logn)",
    answerFive: "XNone of the above",
    timesCorrect: 0,
    timesIncorrect: 0,
  },
  {
    category: "Python Data Structures",
    question: "What will be the output of the following Python code?",
    codeSnippet: `
    dict = {'a': 1, 'b': 2, 'c': 3}
    print('b' in dict)
    `,
    answerOne: "XFalse",
    answerTwo: "CTrue",
    answerThree: "XNone",
    answerFour: "X3",
    answerFive: "XNone of the above",
    timesCorrect: 0,
    timesIncorrect: 0,
  },
  {
    category: "Python Data Structures",
    question: "Which of the following Python data structures is ordered?",
    answerOne: "XSet",
    answerTwo: "XDictionary",
    answerThree: "XBoth of the above",
    answerFour: "CNone of the above",
    answerFive: "XList",
    timesCorrect: 0,
    timesIncorrect: 0,
  },
  {
    category: "Python Data Structures",
    question: "What will be the output of the following Python code?",
    codeSnippet: `
    tup = ('physics', 'chemistry', 1997, 2000)
    print(len(tup))
    `,
    answerOne: "X3",
    answerTwo: "X1",
    answerThree: "XNone",
    answerFour: "C4",
    answerFive: "XNone of the above",
    timesCorrect: 0,
    timesIncorrect: 0,
  },
  {
    category: "Python Data Structures",
    question: "What will be the output of the following Python code?",
    codeSnippet: `
    tup1 = (50,)
    print(type(tup1))
    `,
    answerOne: "XInt",
    answerTwo: "C<class 'tuple'>",
    answerThree: "X<class 'list'>",
    answerFour: "X<class 'str'>",
    answerFive: "XNone of the above",
    timesCorrect: 0,
    timesIncorrect: 0,
  },
  {
    category: "Python Data Structures",
    question: "What will be the output of the following Python code?",
    codeSnippet: `
    dict = {['Name']: 'Zara', 'Age': 7}
    print("Value : %s" %  dict.get('Name'))
    `,
    answerOne: "XZara",
    answerTwo: "XNone",
    answerThree: "XAge",
    answerFour: "X7",
    answerFive: "CTypeError: unhashable type: 'list'",
    timesCorrect: 0,
    timesIncorrect: 0,
  },
  {
    category: "Python Data Structures",
    question: "What will be the output of the following Python code?",
    codeSnippet: `
    list1 = ['physics', 'chemistry', 1997, 2000]
    list1.remove(1997)
    print(list1)
    `,
    answerOne: "C['physics', 'chemistry', 2000]",
    answerTwo: "X['physics', 'chemistry']",
    answerThree: "X['physics', 'chemistry', 1997]",
    answerFour: "X['physics', 'chemistry', 1997, 2000]",
    answerFive: "XNone of the above",
    timesCorrect: 0,
    timesIncorrect: 0,
  },
  {
    category: "Python Data Structures",
    question: "What is the time complexity to access an element in a Python tuple by index?",
    answerOne: "XO(n)",
    answerTwo: "CO(1)",
    answerThree: "XO(nlogn)",
    answerFour: "XO(logn)",
    answerFive: "XNone of the above",
    timesCorrect: 0,
    timesIncorrect: 0,
  },
];
module.exports = questionData;
