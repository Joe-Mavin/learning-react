import React, { useEffect, useState } from "react";

const ExampleDependency = () => {
  const [data, setData] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const promise1 = new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(["The Mando", "Vickings", "Star Wars"]);
      }, 5000);
    } catch (error) {
      reject(error);
    }
  });
  useEffect(() => {
    let isMount = true;
    promise1
      .then((data) => {
        if (isMount) {
          setData(data);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        if (isMount) {
          console.log(`Error fetching data:${error}`);
          setIsLoading(false);
        }
      });

    return () => {
      isMount = false; //unsubscribing
    };
  }, []);
  if (isLoading) {
    return <div>Loading Please Be Patient....</div>;
  }
  return (
    <div>
      <ul>
        {data.map((data, index) => {
          return <div key={index}>{data}</div>;
        })}
      </ul>
    </div>
  );
};

export default ExampleDependency;
