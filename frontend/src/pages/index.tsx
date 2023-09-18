import React from "react";

export default function Home() {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch('/api/getData')
      .then((response) => response.json())
      .then((data) => setData(data.data));
  }, []);
    return (
      <div className="container">
        <h1>Software Practice Empirical Evidence Database (SPEED)</h1>
      </div>
    );
  }
