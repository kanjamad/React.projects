# react-projects-7-slider

#### IN ACTION

[Gatsby-Airtable Project](https://gatsby-airtable-design-project.netlify.app/)

## Option 1
```javascript
  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 2000);
    return () => clearInterval(slider);
  }, [index]);

//   button

        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>



```

## Option 2
```javascript
const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1;
      if (index > people.length - 1) {
        index = 0;
      }
      return index;
    });
  };

  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1;
      if (index < 0) {
        index = people.length - 1;
      }
      return index;
    });
  };

    useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1;
        if (index > people.length - 1) {
          index = 0;
        }
        return index;
      });
    }, 2000);
    return () => clearInterval(slider);
  }, [index]);

//   Button
 <button className="prev" onClick={prevSlide}>
          <FiChevronLeft />
        </button>
<button className="next" onClick={nextSlide}>
          <FiChevronRight />
        </button>
```
