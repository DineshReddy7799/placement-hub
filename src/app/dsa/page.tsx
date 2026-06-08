// src/app/dsa/page.tsx
"use client";

import { useState } from "react";
import styles from "./page.module.css";

type Difficulty = "Easy" | "Medium" | "Hard";

interface Question {
  id: string;
  title: string;
  difficulty: Difficulty;
  link: string;
}

interface Company {
  id: string;
  name: string;
  questions: Question[];
}

const BASE_URL = "https://leetcode.com/problems";

const companyData: Company[] = [
  {
    id: "tcs",
    name: "TCS",
    questions: [
      { id: "tcs1", title: "Reverse String", difficulty: "Easy", link: `${BASE_URL}/reverse-string` },
      { id: "tcs2", title: "Palindrome Number", difficulty: "Easy", link: `${BASE_URL}/palindrome-number` },
      { id: "tcs3", title: "Fibonacci Number", difficulty: "Easy", link: `${BASE_URL}/fibonacci-number` },
      { id: "tcs4", title: "Factorial Trailing Zeroes", difficulty: "Easy", link: `${BASE_URL}/factorial-trailing-zeroes` },
      { id: "tcs5", title: "Valid Parentheses", difficulty: "Easy", link: `${BASE_URL}/valid-parentheses` },
      { id: "tcs6", title: "Merge Two Sorted Lists", difficulty: "Easy", link: `${BASE_URL}/merge-two-sorted-lists` },
      { id: "tcs7", title: "Maximum Subarray", difficulty: "Medium", link: `${BASE_URL}/maximum-subarray` },
      { id: "tcs8", title: "Climbing Stairs", difficulty: "Easy", link: `${BASE_URL}/climbing-stairs` },
      { id: "tcs9", title: "Remove Duplicates from Sorted Array", difficulty: "Easy", link: `${BASE_URL}/remove-duplicates-from-sorted-array` },
      { id: "tcs10", title: "Contains Duplicate", difficulty: "Easy", link: `${BASE_URL}/contains-duplicate` },
      { id: "tcs11", title: "Single Number", difficulty: "Easy", link: `${BASE_URL}/single-number` },
      { id: "tcs12", title: "Missing Number", difficulty: "Easy", link: `${BASE_URL}/missing-number` },
      { id: "tcs13", title: "Move Zeroes", difficulty: "Easy", link: `${BASE_URL}/move-zeroes` },
      { id: "tcs14", title: "Reverse Linked List", difficulty: "Easy", link: `${BASE_URL}/reverse-linked-list` },
      { id: "tcs15", title: "Two Sum", difficulty: "Easy", link: `${BASE_URL}/two-sum` },
      { id: "tcs16", title: "Intersection of Two Arrays", difficulty: "Easy", link: `${BASE_URL}/intersection-of-two-arrays` },
      { id: "tcs17", title: "First Unique Character", difficulty: "Easy", link: `${BASE_URL}/first-unique-character-in-a-string` },
      { id: "tcs18", title: "Valid Anagram", difficulty: "Easy", link: `${BASE_URL}/valid-anagram` },
      { id: "tcs19", title: "Fizz Buzz", difficulty: "Easy", link: `${BASE_URL}/fizz-buzz` },
      { id: "tcs20", title: "Power of Two", difficulty: "Easy", link: `${BASE_URL}/power-of-two` },
      { id: "tcs21", title: "Implement strStr()", difficulty: "Easy", link: `${BASE_URL}/implement-strstr` },
      { id: "tcs22", title: "Search Insert Position", difficulty: "Easy", link: `${BASE_URL}/search-insert-position` },
      { id: "tcs23", title: "Length of Last Word", difficulty: "Easy", link: `${BASE_URL}/length-of-last-word` },
      { id: "tcs24", title: "Plus One", difficulty: "Easy", link: `${BASE_URL}/plus-one` },
      { id: "tcs25", title: "Add Binary", difficulty: "Easy", link: `${BASE_URL}/add-binary` },
      { id: "tcs26", title: "Sqrt(x)", difficulty: "Easy", link: `${BASE_URL}/sqrtx` },
      { id: "tcs27", title: "Majority Element", difficulty: "Easy", link: `${BASE_URL}/majority-element` },
      { id: "tcs28", title: "Valid Palindrome", difficulty: "Easy", link: `${BASE_URL}/valid-palindrome` },
      { id: "tcs29", title: "Excel Sheet Column Number", difficulty: "Easy", link: `${BASE_URL}/excel-sheet-column-number` },
      { id: "tcs30", title: "Number of 1 Bits", difficulty: "Easy", link: `${BASE_URL}/number-of-1-bits` },
    ]
  },
  {
    id: "infosys",
    name: "Infosys",
    questions: [
      { id: "infy1", title: "3Sum", difficulty: "Medium", link: `${BASE_URL}/3sum` },
      { id: "infy2", title: "Longest Substring Without Repeating Characters", difficulty: "Medium", link: `${BASE_URL}/longest-substring-without-repeating-characters` },
      { id: "infy3", title: "String to Integer (atoi)", difficulty: "Medium", link: `${BASE_URL}/string-to-integer-atoi` },
      { id: "infy4", title: "Container With Most Water", difficulty: "Medium", link: `${BASE_URL}/container-with-most-water` },
      { id: "infy5", title: "Longest Common Prefix", difficulty: "Easy", link: `${BASE_URL}/longest-common-prefix` },
      { id: "infy6", title: "Letter Combinations of a Phone Number", difficulty: "Medium", link: `${BASE_URL}/letter-combinations-of-a-phone-number` },
      { id: "infy7", title: "Remove Nth Node From End of List", difficulty: "Medium", link: `${BASE_URL}/remove-nth-node-from-end-of-list` },
      { id: "infy8", title: "Valid Sudoku", difficulty: "Medium", link: `${BASE_URL}/valid-sudoku` },
      { id: "infy9", title: "Multiply Strings", difficulty: "Medium", link: `${BASE_URL}/multiply-strings` },
      { id: "infy10", title: "Permutations", difficulty: "Medium", link: `${BASE_URL}/permutations` },
      { id: "infy11", title: "Rotate Image", difficulty: "Medium", link: `${BASE_URL}/rotate-image` },
      { id: "infy12", title: "Group Anagrams", difficulty: "Medium", link: `${BASE_URL}/group-anagrams` },
      { id: "infy13", title: "Pow(x, n)", difficulty: "Medium", link: `${BASE_URL}/powx-n` },
      { id: "infy14", title: "Spiral Matrix", difficulty: "Medium", link: `${BASE_URL}/spiral-matrix` },
      { id: "infy15", title: "Jump Game", difficulty: "Medium", link: `${BASE_URL}/jump-game` },
      { id: "infy16", title: "Merge Intervals", difficulty: "Medium", link: `${BASE_URL}/merge-intervals` },
      { id: "infy17", title: "Insert Interval", difficulty: "Medium", link: `${BASE_URL}/insert-interval` },
      { id: "infy18", title: "Unique Paths", difficulty: "Medium", link: `${BASE_URL}/unique-paths` },
      { id: "infy19", title: "Minimum Path Sum", difficulty: "Medium", link: `${BASE_URL}/minimum-path-sum` },
      { id: "infy20", title: "Set Matrix Zeroes", difficulty: "Medium", link: `${BASE_URL}/set-matrix-zeroes` },
      { id: "infy21", title: "Sort Colors", difficulty: "Medium", link: `${BASE_URL}/sort-colors` },
      { id: "infy22", title: "Minimum Window Substring", difficulty: "Hard", link: `${BASE_URL}/minimum-window-substring` },
      { id: "infy23", title: "Word Search", difficulty: "Medium", link: `${BASE_URL}/word-search` },
      { id: "infy24", title: "Decode Ways", difficulty: "Medium", link: `${BASE_URL}/decode-ways` },
      { id: "infy25", title: "Binary Tree Inorder Traversal", difficulty: "Easy", link: `${BASE_URL}/binary-tree-inorder-traversal` },
      { id: "infy26", title: "Validate Binary Search Tree", difficulty: "Medium", link: `${BASE_URL}/validate-binary-search-tree` },
      { id: "infy27", title: "Symmetric Tree", difficulty: "Easy", link: `${BASE_URL}/symmetric-tree` },
      { id: "infy28", title: "Binary Tree Level Order Traversal", difficulty: "Medium", link: `${BASE_URL}/binary-tree-level-order-traversal` },
      { id: "infy29", title: "Convert Sorted Array to BST", difficulty: "Easy", link: `${BASE_URL}/convert-sorted-array-to-binary-search-tree` },
      { id: "infy30", title: "Maximum Depth of Binary Tree", difficulty: "Easy", link: `${BASE_URL}/maximum-depth-of-binary-tree` },
    ]
  },
  {
    id: "accenture",
    name: "Accenture",
    questions: [
      { id: "acc1", title: "Roman to Integer", difficulty: "Easy", link: `${BASE_URL}/roman-to-integer` },
      { id: "acc2", title: "Integer to Roman", difficulty: "Medium", link: `${BASE_URL}/integer-to-roman` },
      { id: "acc3", title: "Longest Palindromic Substring", difficulty: "Medium", link: `${BASE_URL}/longest-palindromic-substring` },
      { id: "acc4", title: "ZigZag Conversion", difficulty: "Medium", link: `${BASE_URL}/zigzag-conversion` },
      { id: "acc5", title: "Reverse Integer", difficulty: "Medium", link: `${BASE_URL}/reverse-integer` },
      { id: "acc6", title: "Regular Expression Matching", difficulty: "Hard", link: `${BASE_URL}/regular-expression-matching` },
      { id: "acc7", title: "Swap Nodes in Pairs", difficulty: "Medium", link: `${BASE_URL}/swap-nodes-in-pairs` },
      { id: "acc8", title: "Reverse Nodes in k-Group", difficulty: "Hard", link: `${BASE_URL}/reverse-nodes-in-k-group` },
      { id: "acc9", title: "Next Permutation", difficulty: "Medium", link: `${BASE_URL}/next-permutation` },
      { id: "acc10", title: "Search in Rotated Sorted Array", difficulty: "Medium", link: `${BASE_URL}/search-in-rotated-sorted-array` },
      { id: "acc11", title: "Find First and Last Position", difficulty: "Medium", link: `${BASE_URL}/find-first-and-last-position-of-element-in-sorted-array` },
      { id: "acc12", title: "Count and Say", difficulty: "Medium", link: `${BASE_URL}/count-and-say` },
      { id: "acc13", title: "Combination Sum", difficulty: "Medium", link: `${BASE_URL}/combination-sum` },
      { id: "acc14", title: "Combination Sum II", difficulty: "Medium", link: `${BASE_URL}/combination-sum-ii` },
      { id: "acc15", title: "Trapping Rain Water", difficulty: "Hard", link: `${BASE_URL}/trapping-rain-water` },
      { id: "acc16", title: "Jump Game II", difficulty: "Medium", link: `${BASE_URL}/jump-game-ii` },
      { id: "acc17", title: "Rotate List", difficulty: "Medium", link: `${BASE_URL}/rotate-list` },
      { id: "acc18", title: "Simplify Path", difficulty: "Medium", link: `${BASE_URL}/simplify-path` },
      { id: "acc19", title: "Edit Distance", difficulty: "Hard", link: `${BASE_URL}/edit-distance` },
      { id: "acc20", title: "Search a 2D Matrix", difficulty: "Medium", link: `${BASE_URL}/search-a-2d-matrix` },
      { id: "acc21", title: "Combinations", difficulty: "Medium", link: `${BASE_URL}/combinations` },
      { id: "acc22", title: "Subsets", difficulty: "Medium", link: `${BASE_URL}/subsets` },
      { id: "acc23", title: "Remove Duplicates from Sorted Array II", difficulty: "Medium", link: `${BASE_URL}/remove-duplicates-from-sorted-array-ii` },
      { id: "acc24", title: "Search in Rotated Sorted Array II", difficulty: "Medium", link: `${BASE_URL}/search-in-rotated-sorted-array-ii` },
      { id: "acc25", title: "Remove Duplicates from Sorted List II", difficulty: "Medium", link: `${BASE_URL}/remove-duplicates-from-sorted-list-ii` },
      { id: "acc26", title: "Partition List", difficulty: "Medium", link: `${BASE_URL}/partition-list` },
      { id: "acc27", title: "Gray Code", difficulty: "Medium", link: `${BASE_URL}/gray-code` },
      { id: "acc28", title: "Restore IP Addresses", difficulty: "Medium", link: `${BASE_URL}/restore-ip-addresses` },
      { id: "acc29", title: "Interleaving String", difficulty: "Medium", link: `${BASE_URL}/interleaving-string` },
      { id: "acc30", title: "Binary Tree Zigzag Level Order", difficulty: "Medium", link: `${BASE_URL}/binary-tree-zigzag-level-order-traversal` },
    ]
  },
  {
    id: "cognizant",
    name: "Cognizant",
    questions: [
      { id: "cog1", title: "Find Median from Data Stream", difficulty: "Hard", link: `${BASE_URL}/find-median-from-data-stream` },
      { id: "cog2", title: "Sliding Window Maximum", difficulty: "Hard", link: `${BASE_URL}/sliding-window-maximum` },
      { id: "cog3", title: "Minimum Size Subarray Sum", difficulty: "Medium", link: `${BASE_URL}/minimum-size-subarray-sum` },
      { id: "cog4", title: "Longest Increasing Subsequence", difficulty: "Medium", link: `${BASE_URL}/longest-increasing-subsequence` },
      { id: "cog5", title: "Coin Change", difficulty: "Medium", link: `${BASE_URL}/coin-change` },
      { id: "cog6", title: "Longest Common Subsequence", difficulty: "Medium", link: `${BASE_URL}/longest-common-subsequence` },
      { id: "cog7", title: "Word Break", difficulty: "Medium", link: `${BASE_URL}/word-break` },
      { id: "cog8", title: "Word Break II", difficulty: "Hard", link: `${BASE_URL}/word-break-ii` },
      { id: "cog9", title: "Palindrome Partitioning", difficulty: "Medium", link: `${BASE_URL}/palindrome-partitioning` },
      { id: "cog10", title: "Clone Graph", difficulty: "Medium", link: `${BASE_URL}/clone-graph` },
      { id: "cog11", title: "Course Schedule", difficulty: "Medium", link: `${BASE_URL}/course-schedule` },
      { id: "cog12", title: "Course Schedule II", difficulty: "Medium", link: `${BASE_URL}/course-schedule-ii` },
      { id: "cog13", title: "Implement Trie (Prefix Tree)", difficulty: "Medium", link: `${BASE_URL}/implement-trie-prefix-tree` },
      { id: "cog14", title: "Design Add and Search Words", difficulty: "Medium", link: `${BASE_URL}/design-add-and-search-words-data-structure` },
      { id: "cog15", title: "Word Search II", difficulty: "Hard", link: `${BASE_URL}/word-search-ii` },
      { id: "cog16", title: "Number of Islands", difficulty: "Medium", link: `${BASE_URL}/number-of-islands` },
      { id: "cog17", title: "Surrounded Regions", difficulty: "Medium", link: `${BASE_URL}/surrounded-regions` },
      { id: "cog18", title: "LRU Cache", difficulty: "Medium", link: `${BASE_URL}/lru-cache` },
      { id: "cog19", title: "Min Stack", difficulty: "Medium", link: `${BASE_URL}/min-stack` },
      { id: "cog20", title: "Find Minimum in Rotated Sorted Array", difficulty: "Medium", link: `${BASE_URL}/find-minimum-in-rotated-sorted-array` },
      { id: "cog21", title: "Find Minimum in Rotated Array II", difficulty: "Hard", link: `${BASE_URL}/find-minimum-in-rotated-sorted-array-ii` },
      { id: "cog22", title: "Contains Duplicate II", difficulty: "Easy", link: `${BASE_URL}/contains-duplicate-ii` },
      { id: "cog23", title: "Contains Duplicate III", difficulty: "Hard", link: `${BASE_URL}/contains-duplicate-iii` },
      { id: "cog24", title: "Maximal Square", difficulty: "Medium", link: `${BASE_URL}/maximal-square` },
      { id: "cog25", title: "Maximal Rectangle", difficulty: "Hard", link: `${BASE_URL}/maximal-rectangle` },
      { id: "cog26", title: "Lowest Common Ancestor of BST", difficulty: "Easy", link: `${BASE_URL}/lowest-common-ancestor-of-a-binary-search-tree` },
      { id: "cog27", title: "Lowest Common Ancestor of Binary Tree", difficulty: "Medium", link: `${BASE_URL}/lowest-common-ancestor-of-a-binary-tree` },
      { id: "cog28", title: "Serialize and Deserialize Binary Tree", difficulty: "Hard", link: `${BASE_URL}/serialize-and-deserialize-binary-tree` },
      { id: "cog29", title: "Binary Tree Maximum Path Sum", difficulty: "Hard", link: `${BASE_URL}/binary-tree-maximum-path-sum` },
      { id: "cog30", title: "Diameter of Binary Tree", difficulty: "Easy", link: `${BASE_URL}/diameter-of-binary-tree` },
    ]
  },
  {
    id: "wipro",
    name: "Wipro",
    questions: [
      { id: "w1", title: "Two Sum", difficulty: "Easy", link: `${BASE_URL}/two-sum` },
      { id: "w2", title: "Reverse Integer", difficulty: "Medium", link: `${BASE_URL}/reverse-integer` },
      { id: "w3", title: "Palindrome Number", difficulty: "Easy", link: `${BASE_URL}/palindrome-number` },
      { id: "w4", title: "Roman to Integer", difficulty: "Easy", link: `${BASE_URL}/roman-to-integer` },
      { id: "w5", title: "Longest Common Prefix", difficulty: "Easy", link: `${BASE_URL}/longest-common-prefix` },
      { id: "w6", title: "Valid Parentheses", difficulty: "Easy", link: `${BASE_URL}/valid-parentheses` },
      { id: "w7", title: "Merge Two Sorted Lists", difficulty: "Easy", link: `${BASE_URL}/merge-two-sorted-lists` },
      { id: "w8", title: "Remove Duplicates from Sorted Array", difficulty: "Easy", link: `${BASE_URL}/remove-duplicates-from-sorted-array` },
      { id: "w9", title: "Remove Element", difficulty: "Easy", link: `${BASE_URL}/remove-element` },
      { id: "w10", title: "Implement strStr()", difficulty: "Easy", link: `${BASE_URL}/find-the-index-of-the-first-occurrence-in-a-string` },
      { id: "w11", title: "Search Insert Position", difficulty: "Easy", link: `${BASE_URL}/search-insert-position` },
      { id: "w12", title: "Maximum Subarray", difficulty: "Medium", link: `${BASE_URL}/maximum-subarray` },
      { id: "w13", title: "Length of Last Word", difficulty: "Easy", link: `${BASE_URL}/length-of-last-word` },
      { id: "w14", title: "Plus One", difficulty: "Easy", link: `${BASE_URL}/plus-one` },
      { id: "w15", title: "Add Binary", difficulty: "Easy", link: `${BASE_URL}/add-binary` },
      { id: "w16", title: "Sqrt(x)", difficulty: "Easy", link: `${BASE_URL}/sqrtx` },
      { id: "w17", title: "Climbing Stairs", difficulty: "Easy", link: `${BASE_URL}/climbing-stairs` },
      { id: "w18", title: "Remove Duplicates from Sorted List", difficulty: "Easy", link: `${BASE_URL}/remove-duplicates-from-sorted-list` },
      { id: "w19", title: "Merge Sorted Array", difficulty: "Easy", link: `${BASE_URL}/merge-sorted-array` },
      { id: "w20", title: "Binary Tree Inorder Traversal", difficulty: "Easy", link: `${BASE_URL}/binary-tree-inorder-traversal` },
      { id: "w21", title: "Same Tree", difficulty: "Easy", link: `${BASE_URL}/same-tree` },
      { id: "w22", title: "Symmetric Tree", difficulty: "Easy", link: `${BASE_URL}/symmetric-tree` },
      { id: "w23", title: "Maximum Depth of Binary Tree", difficulty: "Easy", link: `${BASE_URL}/maximum-depth-of-binary-tree` },
      { id: "w24", title: "Convert Sorted Array to Binary Search Tree", difficulty: "Easy", link: `${BASE_URL}/convert-sorted-array-to-binary-search-tree` },
      { id: "w25", title: "Balanced Binary Tree", difficulty: "Easy", link: `${BASE_URL}/balanced-binary-tree` },
      { id: "w26", title: "Minimum Depth of Binary Tree", difficulty: "Easy", link: `${BASE_URL}/minimum-depth-of-binary-tree` },
      { id: "w27", title: "Path Sum", difficulty: "Easy", link: `${BASE_URL}/path-sum` },
      { id: "w28", title: "Pascal's Triangle", difficulty: "Easy", link: `${BASE_URL}/pascals-triangle` },
      { id: "w29", title: "Best Time to Buy and Sell Stock", difficulty: "Easy", link: `${BASE_URL}/best-time-to-buy-and-sell-stock` },
      { id: "w30", title: "Valid Palindrome", difficulty: "Easy", link: `${BASE_URL}/valid-palindrome` }
    ]
  },
  {
    id: "capgemini",
    name: "Capgemini",
    questions: [
      { id: "cg1", title: "Single Number", difficulty: "Easy", link: `${BASE_URL}/single-number` },
      { id: "cg2", title: "Linked List Cycle", difficulty: "Easy", link: `${BASE_URL}/linked-list-cycle` },
      { id: "cg3", title: "Min Stack", difficulty: "Medium", link: `${BASE_URL}/min-stack` },
      { id: "cg4", title: "Intersection of Two Linked Lists", difficulty: "Easy", link: `${BASE_URL}/intersection-of-two-linked-lists` },
      { id: "cg5", title: "Majority Element", difficulty: "Easy", link: `${BASE_URL}/majority-element` },
      { id: "cg6", title: "Excel Sheet Column Title", difficulty: "Easy", link: `${BASE_URL}/excel-sheet-column-title` },
      { id: "cg7", title: "Excel Sheet Column Number", difficulty: "Easy", link: `${BASE_URL}/excel-sheet-column-number` },
      { id: "cg8", title: "Reverse Bits", difficulty: "Easy", link: `${BASE_URL}/reverse-bits` },
      { id: "cg9", title: "Number of 1 Bits", difficulty: "Easy", link: `${BASE_URL}/number-of-1-bits` },
      { id: "cg10", title: "Happy Number", difficulty: "Easy", link: `${BASE_URL}/happy-number` },
      { id: "cg11", title: "Remove Linked List Elements", difficulty: "Easy", link: `${BASE_URL}/remove-linked-list-elements` },
      { id: "cg12", title: "Count Primes", difficulty: "Medium", link: `${BASE_URL}/count-primes` },
      { id: "cg13", title: "Isomorphic Strings", difficulty: "Easy", link: `${BASE_URL}/isomorphic-strings` },
      { id: "cg14", title: "Reverse Linked List", difficulty: "Easy", link: `${BASE_URL}/reverse-linked-list` },
      { id: "cg15", title: "Contains Duplicate", difficulty: "Easy", link: `${BASE_URL}/contains-duplicate` },
      { id: "cg16", title: "Contains Duplicate II", difficulty: "Easy", link: `${BASE_URL}/contains-duplicate-ii` },
      { id: "cg17", title: "Implement Stack using Queues", difficulty: "Easy", link: `${BASE_URL}/implement-stack-using-queues` },
      { id: "cg18", title: "Invert Binary Tree", difficulty: "Easy", link: `${BASE_URL}/invert-binary-tree` },
      { id: "cg19", title: "Power of Two", difficulty: "Easy", link: `${BASE_URL}/power-of-two` },
      { id: "cg20", title: "Implement Queue using Stacks", difficulty: "Easy", link: `${BASE_URL}/implement-queue-using-stacks` },
      { id: "cg21", title: "Palindrome Linked List", difficulty: "Easy", link: `${BASE_URL}/palindrome-linked-list` },
      { id: "cg22", title: "Lowest Common Ancestor of a BST", difficulty: "Easy", link: `${BASE_URL}/lowest-common-ancestor-of-a-binary-search-tree` },
      { id: "cg23", title: "Valid Anagram", difficulty: "Easy", link: `${BASE_URL}/valid-anagram` },
      { id: "cg24", title: "Missing Number", difficulty: "Easy", link: `${BASE_URL}/missing-number` },
      { id: "cg25", title: "Move Zeroes", difficulty: "Easy", link: `${BASE_URL}/move-zeroes` },
      { id: "cg26", title: "Word Pattern", difficulty: "Easy", link: `${BASE_URL}/word-pattern` },
      { id: "cg27", title: "Power of Three", difficulty: "Easy", link: `${BASE_URL}/power-of-three` },
      { id: "cg28", title: "Reverse String", difficulty: "Easy", link: `${BASE_URL}/reverse-string` },
      { id: "cg29", title: "Reverse Vowels of a String", difficulty: "Easy", link: `${BASE_URL}/reverse-vowels-of-a-string` },
      { id: "cg30", title: "Intersection of Two Arrays", difficulty: "Easy", link: `${BASE_URL}/intersection-of-two-arrays` }
    ]
  },
  {
    id: "techmahindra",
    name: "Tech Mahindra",
    questions: [
      { id: "tm1", title: "Ransom Note", difficulty: "Easy", link: `${BASE_URL}/ransom-note` },
      { id: "tm2", title: "First Unique Character in a String", difficulty: "Easy", link: `${BASE_URL}/first-unique-character-in-a-string` },
      { id: "tm3", title: "Find the Difference", difficulty: "Easy", link: `${BASE_URL}/find-the-difference` },
      { id: "tm4", title: "Is Subsequence", difficulty: "Easy", link: `${BASE_URL}/is-subsequence` },
      { id: "tm5", title: "Sum of Left Leaves", difficulty: "Easy", link: `${BASE_URL}/sum-of-left-leaves` },
      { id: "tm6", title: "Convert a Number to Hexadecimal", difficulty: "Easy", link: `${BASE_URL}/convert-a-number-to-hexadecimal` },
      { id: "tm7", title: "Longest Palindrome", difficulty: "Easy", link: `${BASE_URL}/longest-palindrome` },
      { id: "tm8", title: "Fizz Buzz", difficulty: "Easy", link: `${BASE_URL}/fizz-buzz` },
      { id: "tm9", title: "Third Maximum Number", difficulty: "Easy", link: `${BASE_URL}/third-maximum-number` },
      { id: "tm10", title: "Add Strings", difficulty: "Easy", link: `${BASE_URL}/add-strings` },
      { id: "tm11", title: "Number of Segments in a String", difficulty: "Easy", link: `${BASE_URL}/number-of-segments-in-a-string` },
      { id: "tm12", title: "Find All Numbers Disappeared in an Array", difficulty: "Easy", link: `${BASE_URL}/find-all-numbers-disappeared-in-an-array` },
      { id: "tm13", title: "Assign Cookies", difficulty: "Easy", link: `${BASE_URL}/assign-cookies` },
      { id: "tm14", title: "Repeated Substring Pattern", difficulty: "Easy", link: `${BASE_URL}/repeated-substring-pattern` },
      { id: "tm15", title: "Hamming Distance", difficulty: "Easy", link: `${BASE_URL}/hamming-distance` },
      { id: "tm16", title: "Island Perimeter", difficulty: "Easy", link: `${BASE_URL}/island-perimeter` },
      { id: "tm17", title: "Max Consecutive Ones", difficulty: "Easy", link: `${BASE_URL}/max-consecutive-ones` },
      { id: "tm18", title: "Construct the Rectangle", difficulty: "Easy", link: `${BASE_URL}/construct-the-rectangle` },
      { id: "tm19", title: "Teemo Attacking", difficulty: "Easy", link: `${BASE_URL}/teemo-attacking` },
      { id: "tm20", title: "Next Greater Element I", difficulty: "Easy", link: `${BASE_URL}/next-greater-element-i` },
      { id: "tm21", title: "Keyboard Row", difficulty: "Easy", link: `${BASE_URL}/keyboard-row` },
      { id: "tm22", title: "Find Mode in Binary Search Tree", difficulty: "Easy", link: `${BASE_URL}/find-mode-in-binary-search-tree` },
      { id: "tm23", title: "Base 7", difficulty: "Easy", link: `${BASE_URL}/base-7` },
      { id: "tm24", title: "Relative Ranks", difficulty: "Easy", link: `${BASE_URL}/relative-ranks` },
      { id: "tm25", title: "Perfect Number", difficulty: "Easy", link: `${BASE_URL}/perfect-number` },
      { id: "tm26", title: "Fibonacci Number", difficulty: "Easy", link: `${BASE_URL}/fibonacci-number` },
      { id: "tm27", title: "Detect Capital", difficulty: "Easy", link: `${BASE_URL}/detect-capital` },
      { id: "tm28", title: "Longest Uncommon Subsequence I", difficulty: "Easy", link: `${BASE_URL}/longest-uncommon-subsequence-i` },
      { id: "tm29", title: "Minimum Absolute Difference in BST", difficulty: "Easy", link: `${BASE_URL}/minimum-absolute-difference-in-bst` },
      { id: "tm30", title: "Reverse String II", difficulty: "Easy", link: `${BASE_URL}/reverse-string-ii` }
    ]
  },
  {
    id: "ibm",
    name: "IBM",
    questions: [
      { id: "ibm1", title: "Longest Substring Without Repeating Characters", difficulty: "Medium", link: `${BASE_URL}/longest-substring-without-repeating-characters` },
      { id: "ibm2", title: "Longest Palindromic Substring", difficulty: "Medium", link: `${BASE_URL}/longest-palindromic-substring` },
      { id: "ibm3", title: "Zigzag Conversion", difficulty: "Medium", link: `${BASE_URL}/zigzag-conversion` },
      { id: "ibm4", title: "String to Integer (atoi)", difficulty: "Medium", link: `${BASE_URL}/string-to-integer-atoi` },
      { id: "ibm5", title: "Container With Most Water", difficulty: "Medium", link: `${BASE_URL}/container-with-most-water` },
      { id: "ibm6", title: "Integer to Roman", difficulty: "Medium", link: `${BASE_URL}/integer-to-roman` },
      { id: "ibm7", title: "3Sum", difficulty: "Medium", link: `${BASE_URL}/3sum` },
      { id: "ibm8", title: "3Sum Closest", difficulty: "Medium", link: `${BASE_URL}/3sum-closest` },
      { id: "ibm9", title: "Letter Combinations of a Phone Number", difficulty: "Medium", link: `${BASE_URL}/letter-combinations-of-a-phone-number` },
      { id: "ibm10", title: "Remove Nth Node From End of List", difficulty: "Medium", link: `${BASE_URL}/remove-nth-node-from-end-of-list` },
      { id: "ibm11", title: "Generate Parentheses", difficulty: "Medium", link: `${BASE_URL}/generate-parentheses` },
      { id: "ibm12", title: "Swap Nodes in Pairs", difficulty: "Medium", link: `${BASE_URL}/swap-nodes-in-pairs` },
      { id: "ibm13", title: "Find the Index of the First Occurrence in a String", difficulty: "Easy", link: `${BASE_URL}/find-the-index-of-the-first-occurrence-in-a-string` },
      { id: "ibm14", title: "Divide Two Integers", difficulty: "Medium", link: `${BASE_URL}/divide-two-integers` },
      { id: "ibm15", title: "Search in Rotated Sorted Array", difficulty: "Medium", link: `${BASE_URL}/search-in-rotated-sorted-array` },
      { id: "ibm16", title: "Find First and Last Position of Element in Sorted Array", difficulty: "Medium", link: `${BASE_URL}/find-first-and-last-position-of-element-in-sorted-array` },
      { id: "ibm17", title: "Valid Sudoku", difficulty: "Medium", link: `${BASE_URL}/valid-sudoku` },
      { id: "ibm18", title: "Combination Sum", difficulty: "Medium", link: `${BASE_URL}/combination-sum` },
      { id: "ibm19", title: "Multiply Strings", difficulty: "Medium", link: `${BASE_URL}/multiply-strings` },
      { id: "ibm20", title: "Permutations", difficulty: "Medium", link: `${BASE_URL}/permutations` },
      { id: "ibm21", title: "Rotate Image", difficulty: "Medium", link: `${BASE_URL}/rotate-image` },
      { id: "ibm22", title: "Group Anagrams", difficulty: "Medium", link: `${BASE_URL}/group-anagrams` },
      { id: "ibm23", title: "Pow(x, n)", difficulty: "Medium", link: `${BASE_URL}/powx-n` },
      { id: "ibm24", title: "Spiral Matrix", difficulty: "Medium", link: `${BASE_URL}/spiral-matrix` },
      { id: "ibm25", title: "Jump Game", difficulty: "Medium", link: `${BASE_URL}/jump-game` },
      { id: "ibm26", title: "Merge Intervals", difficulty: "Medium", link: `${BASE_URL}/merge-intervals` },
      { id: "ibm27", title: "Insert Interval", difficulty: "Medium", link: `${BASE_URL}/insert-interval` },
      { id: "ibm28", title: "Unique Paths", difficulty: "Medium", link: `${BASE_URL}/unique-paths` },
      { id: "ibm29", title: "Minimum Path Sum", difficulty: "Medium", link: `${BASE_URL}/minimum-path-sum` },
      { id: "ibm30", title: "Set Matrix Zeroes", difficulty: "Medium", link: `${BASE_URL}/set-matrix-zeroes` }
    ]
  },
  {
    id: "sql",
    name: "SQL & Databases",
    questions: [
      { id: "sql1", title: "Combine Two Tables", difficulty: "Easy", link: `${BASE_URL}/combine-two-tables` },
      { id: "sql2", title: "Second Highest Salary", difficulty: "Medium", link: `${BASE_URL}/second-highest-salary` },
      { id: "sql3", title: "Nth Highest Salary", difficulty: "Medium", link: `${BASE_URL}/nth-highest-salary` },
      { id: "sql4", title: "Rank Scores", difficulty: "Medium", link: `${BASE_URL}/rank-scores` },
      { id: "sql5", title: "Consecutive Numbers", difficulty: "Medium", link: `${BASE_URL}/consecutive-numbers` },
      { id: "sql6", title: "Employees Earning More Than Managers", difficulty: "Easy", link: `${BASE_URL}/employees-earning-more-than-their-managers` },
      { id: "sql7", title: "Duplicate Emails", difficulty: "Easy", link: `${BASE_URL}/duplicate-emails` },
      { id: "sql8", title: "Customers Who Never Order", difficulty: "Easy", link: `${BASE_URL}/customers-who-never-order` },
      { id: "sql9", title: "Department Highest Salary", difficulty: "Medium", link: `${BASE_URL}/department-highest-salary` },
      { id: "sql10", title: "Department Top Three Salaries", difficulty: "Hard", link: `${BASE_URL}/department-top-three-salaries` },
      { id: "sql11", title: "Delete Duplicate Emails", difficulty: "Easy", link: `${BASE_URL}/delete-duplicate-emails` },
      { id: "sql12", title: "Rising Temperature", difficulty: "Easy", link: `${BASE_URL}/rising-temperature` },
      { id: "sql13", title: "Trips and Users", difficulty: "Hard", link: `${BASE_URL}/trips-and-users` },
      { id: "sql14", title: "Game Play Analysis I", difficulty: "Easy", link: `${BASE_URL}/game-play-analysis-i` },
      { id: "sql15", title: "Game Play Analysis II", difficulty: "Easy", link: `${BASE_URL}/game-play-analysis-ii` },
      { id: "sql16", title: "Game Play Analysis III", difficulty: "Medium", link: `${BASE_URL}/game-play-analysis-iii` },
      { id: "sql17", title: "Game Play Analysis IV", difficulty: "Medium", link: `${BASE_URL}/game-play-analysis-iv` },
      { id: "sql18", title: "Employee Bonus", difficulty: "Easy", link: `${BASE_URL}/employee-bonus` },
      { id: "sql19", title: "Find Customer Referee", difficulty: "Easy", link: `${BASE_URL}/find-customer-referee` },
      { id: "sql20", title: "Customer Placing Largest Orders", difficulty: "Easy", link: `${BASE_URL}/customer-placing-the-largest-number-of-orders` },
      { id: "sql21", title: "Big Countries", difficulty: "Easy", link: `${BASE_URL}/big-countries` },
      { id: "sql22", title: "Classes More Than 5 Students", difficulty: "Easy", link: `${BASE_URL}/classes-more-than-5-students` },
      { id: "sql23", title: "Human Traffic of Stadium", difficulty: "Hard", link: `${BASE_URL}/human-traffic-of-stadium` },
      { id: "sql24", title: "Sales Person", difficulty: "Easy", link: `${BASE_URL}/sales-person` },
      { id: "sql25", title: "Tree Node", difficulty: "Medium", link: `${BASE_URL}/tree-node` },
      { id: "sql26", title: "Triangle Judgement", difficulty: "Easy", link: `${BASE_URL}/triangle-judgement` },
      { id: "sql27", title: "Shortest Distance in a Plane", difficulty: "Medium", link: `${BASE_URL}/shortest-distance-in-a-plane` },
      { id: "sql28", title: "Swap Salary", difficulty: "Easy", link: `${BASE_URL}/swap-salary` },
      { id: "sql29", title: "Not Boring Movies", difficulty: "Easy", link: `${BASE_URL}/not-boring-movies` },
      { id: "sql30", title: "Exchange Seats", difficulty: "Medium", link: `${BASE_URL}/exchange-seats` },
    ]
  }
];

export default function DSAPage() {
  const [activeCompanyId, setActiveCompanyId] = useState(companyData[0].id);

  const activeCompany = companyData.find(c => c.id === activeCompanyId)!;

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        
        <header className={styles.header}>
          <h1 className={styles.title}>Company-Wise DSA & SQL Preparation</h1>
          <p className={styles.subtitle}>Curated coding questions mapped perfectly to top IT services firms and database tracks.</p>
        </header>

        <div className={styles.layout}>
          
          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.sidebarTitle}>Top Companies & Tracks</div>
            {companyData.map((company) => (
              <button
                key={company.id}
                onClick={() => setActiveCompanyId(company.id)}
                className={`${styles.companyBtn} ${activeCompanyId === company.id ? styles.activeCompany : ""}`}
              >
                {company.name}
                <span className={styles.badge}>{company.questions.length} Qs</span>
              </button>
            ))}
          </aside>

          {/* Question List */}
          <main className={styles.contentArea}>
            <div className={styles.companyHeader}>
              <h2>{activeCompany.name} Target Questions</h2>
            </div>

            {activeCompany.questions.map((q, index) => (
              <article key={q.id} className={styles.questionCard}>
                <div className={styles.questionInfo}>
                  <h3 className={styles.questionTitle}>
                    {index + 1}. {q.title}
                  </h3>
                  <div className={styles.metaRow}>
                    <span className={`${styles.difficulty} ${styles[q.difficulty]}`}>
                      {q.difficulty}
                    </span>
                    <span style={{ fontSize: "0.85rem", color: "#64748b", fontWeight: "600" }}>
                      LeetCode
                    </span>
                  </div>
                </div>
                
                <a 
                  href={q.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.solveBtn}
                >
                  Solve Problem
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </article>
            ))}
          </main>

        </div>
      </div>
    </div>
  );
}