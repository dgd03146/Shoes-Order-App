import { useEffect, useState } from "react";

import React from "react";
import Card from "../UI/Card";
import styles from "./AvailableShoes.module.css";
import Shoe from "./Shoe";

const AvailableShoes = (props) => {
  const [shoes, setShoes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);
      const response = await fetch("https://react-http-6d8d9-default-rtdb.firebaseio.com/shoes.json");

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
          url: responseData[key].url
        });
      }

      setShoes(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={styles.ShoesLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={styles.ShoesError}>
        <p>{httpError}</p>
      </section>
    );
  }

  return (
    <Card className={styles.shoes}>
      <ul>
        {shoes.map((item) => (
          <Shoe id={item.id} key={item.id} item={item} />
        ))}
      </ul>
    </Card>
  );
};

export default AvailableShoes;
