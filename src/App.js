import React, { useEffect, useState, Fragment } from "react";
import Tabletop from "tabletop";
import "./styles.css";

const gSheetURL =
  "https://docs.google.com/spreadsheets/d/1JYv1Qj5xCTVODX0Q_yuFyVwwkfeReaw0LcRfuCb3wmw/edit?usp=sharing";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Tabletop.init({
      key: "1JYv1Qj5xCTVODX0Q_yuFyVwwkfeReaw0LcRfuCb3wmw",
      simpleSheet: true
    })
      .then((data) => setData(data))
      .catch((err) => console.warn(err));
  }, []);

  return (
    <div>
      <h1>Mentions to neoGeans</h1>
      <h1>
        Give it a try its <a href={gSheetURL}> Dynamic...</a>
      </h1>
      <ul className="rolldown-list" id="myList">
        {data.map((item, i) => (
          <Fragment key={i}>
            <li>{item.Name}</li>
            <li>
              <a href={item.Site}>Personal Site</a>
            </li>
            <br />
          </Fragment>
        ))}
      </ul>
    </div>
  );
}
