import React, { useState, useEffect } from "react";
import { client } from "../../client";

const Navigation = () => {
  const [entry, setEntry] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const query = '*[_type == "portfolioEntries"]';

    client.fetch(query).then((data) => {
      setEntry(data);
    });
  }, []);

  useEffect(() => {
    const query = '*[_type == "portfolioCategory"]';

    client.fetch(query).then((data1) => {
      setCategory(data1);
    });
  }, []);

  return (
    <ul>
      {entry.map((item) => (
        <li key={`link-${item}`}>
          {item.clientName}
            {category.filter(cat => item.portfolioCategory._ref === cat._id)
            .map(cat => {
              return (
                <li key={`link-${cat}`}>
                  {cat.categoryName}
                </li>
              )
            })}
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
