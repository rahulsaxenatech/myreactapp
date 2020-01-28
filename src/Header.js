import React from 'react';

function Myheader() {
  return (
    <div>
      <h2>External default function Component</h2>
      <pre>
        {
          'export function NewComp(){return(<h1>External Second function Component</h1>);}'
        }
      </pre>
    </div>
  );
}

export default Myheader;

export function NewComp() {
  return <h1>External Second function Component</h1>;
}
