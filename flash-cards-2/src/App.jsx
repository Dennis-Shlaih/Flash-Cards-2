import React from 'react';
import './App.css';
import FlashcardList from "./components/FlashcardList.jsx";

const cards = [
  { question: 'What is the principle of mathematical induction used for?', answer: 'To prove statements about natural numbers by showing that if it holds for a base case and assuming it holds for an arbitrary case, it also holds for the next case.', difficulty: 'medium' },
  { question: 'What is the difference between a permutation and a combination?', answer: 'A permutation is an arrangement of items where order matters, while a combination is a selection of items where order does not matter.', difficulty: 'easy' },
  { question: 'What is the pigeonhole principle?', answer: 'If more than n items are put into n containers, then at least one container must contain more than one item.', difficulty: 'hard' },
  { question: 'How many edges does a complete graph with n vertices have?', answer: 'A complete graph with n vertices has n(n-1)/2 edges.', difficulty: 'medium' },
  { question: 'What is a Hamiltonian cycle?', answer: 'A Hamiltonian cycle in a graph is a cycle that visits each vertex exactly once and returns to the starting vertex.', difficulty: 'hard' },
  { question: 'How do you determine if a function is bijective?', answer: 'A function is bijective if it is both injective (one-to-one) and surjective (onto).', difficulty: 'easy' },
  { question: 'What is an Eulerian path, and how does it differ from an Eulerian circuit?', answer: 'An Eulerian path visits every edge of a graph exactly once, while an Eulerian circuit is an Eulerian path that starts and ends at the same vertex.', difficulty: 'medium' },
  { question: 'What is the principle of inclusion-exclusion?', answer: 'It is a formula used to calculate the size of the union of multiple sets by adding the sizes of the sets and then subtracting the sizes of their intersections.', difficulty: 'hard' },
  { question: 'What is a spanning tree of a graph?', answer: 'A spanning tree of a graph is a subgraph that includes all the vertices of the original graph and is a tree (connected and acyclic).', difficulty: 'medium' },
  { question: 'What is the chromatic number of a graph?', answer: 'The chromatic number of a graph is the smallest number of colors needed to color the vertices so that no two adjacent vertices share the same color.', difficulty: 'hard' },
];

const App = () => {
  return (
    <div className="App">
      <h2>Discrete Math Quiz</h2>
      <h4>Attempt this challenging quiz to test your knowledge on Discrete Mathematics</h4>
      <h5>Number of cards: 10</h5>
      <FlashcardList cards={cards} />
    </div>
  );
};

export default App;
