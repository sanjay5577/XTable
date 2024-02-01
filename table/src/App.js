import {useState , useEffect} from "react"
import './App.css';

const arr = 
[

    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" }

]



function App() {

  const[sorted, setSorted]=useState([]);

  useEffect(()=>{
    setSorted(arr);
  },[])

  const handlesort=(e)=>{
    const text = e.target.textContent;

    if(text==="Sort by Date"){
      
      
        const res =arr.sort((a,b)=>{
        let dateA = new Date(a.date);
        let dateB = new Date(b.date);

      if(dateA ===dateB ){
          return b.views - a.views
       }
      return dateB - dateA

      })
      console.log(res)
      setSorted([...res]);

    }
    else{
      const res =arr.sort((a,b)=>{
        let dateA = new Date(a.date);
        let dateB = new Date(b.date);

      if(b.views ===a.views){
          return dateB - dateA
       }
      return b.views - a.views

      })
      console.log(res)
      setSorted([...res]);

    }
  }

  console.log(sorted)

  
  return (
    <div className="App">
      <h1>Date and Views Table</h1>
      <div>
        <button onClick={handlesort}>Sort by Date</button>
        <button onClick={handlesort}>Sort by Views</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((item)=>{
            return(
              <tr >
                <td>{item.date}</td>
                <td>{item.views}</td>
                <td>{item.article}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      
    </div>
  );
}

export default App;
