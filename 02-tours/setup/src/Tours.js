import React from "react";
import Tour from "./Tour";
const Tours = ({ tours }) => {
  return (
    <section>
      <div className="title">
        <h2>ours tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          // {...tour} mean that I'll have access to all the properties that are in my object
          return <Tour key={tour.id} {...tour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
