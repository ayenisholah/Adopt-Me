// asadf => false
// aaaab => aabaa => true
// aabbcc => abccba => true
// aaadd => daaad => true
// ddabb => dbabd => true
// dbdb => dbbd => true
// qqwwerasf => false
// aba => true

function couldBePalindrome(string) {
  //     check if every char has an even count except at most one
  const counter = {};
  for (let i = 0; i < string.length; i++) {
    if (counter[string[i]]) {
      counter[string[i]] += 1;
    } else {
      counter[string[i]] = 1;
    }
  }
  const counts = Object.values(counter);
  let oddCount = 0;
  for (let i = 0; i < counts.length; i++) {
    if (count % 2 === 1) {
      oddCount += 1;
    }
    if (oddCount > 1) {
      return false;
    }
  }
  return true;
}

// withExtraProps
// takes in a component, adds in extraProps ({ x: "foo", y: "bar" }), and returns the new component
//
// Example
// export default withExtraProps(counter);
//
// import Counter from "./counter";
// <Counter hello="world" />
// { x: "foo", y: "bar", hello: "world" }

const withExtraProps = Component => {
  return class extends React.Component {
    render() {
      const extraProps = { x: "foo", y: "bar" };
      return <Component {...extraProps} {...this.props} />;
    }
  };
};

import React, { useState, useEffect } from "react";

const counter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCounter(counter + 1);
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);
  return (
    <>
      <div>{counter}</div>
      <button
        onClick={e => {
          setCounter(counter + 1);
        }}
      >
        Increment 1
      </button>
      <button
        onClick={e => {
          setCounter(counter - 1);
        }}
      >
        Decrement 1
      </button>
      <button
        onClick={e => {
          setCounter(0);
        }}
      >
        Reset to 0
      </button>
    </>
  );
};

export default counter;

// Function
