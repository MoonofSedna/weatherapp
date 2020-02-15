import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Weather from './components/Weather';
import 'bootstrap/dist/css/bootstrap.min.css';
import Error from "./components/Error";
import Spinner from "./components/Spinner";

function App() {

    const [search, saveSearch] = useState({
      city: '',
      country:''
  });
    const [consult, saveConsult] = useState(false);
    const [result, saveResult]= useState({});
    const [error, SaveError] = useState(false);
    const [loading, saveLoading] = useState(false);


    //***Extract Values ****//


    const {city, country} = search;

    useEffect(() => {

        const consultAPI = async () => {

          if(consult){

            const appId = '71cbb031f970dcdde3746db6329dcd26';
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;

            const reply = await fetch(url);
            const result = await reply.json();

            saveResult(result);
            saveConsult(false);

          //****Detect if the query is correct ****//

          if(result.cod === '404'){

            SaveError(true);
            } else{
            SaveError(false);
            }

          }
        }

        consultAPI();
        // eslint-disable-next-line
    },[consult]);

 

    let component;

    if(error){

      component = <Error message="No results" />

    } else{

      component = <Weather
      result = {result} />

    }

    

return(

    <Fragment>
    <Header 
    title='Weather App'
    />

    <div className=" content-form">
      <div className="container ">
        <div className="row">
          <div className="form-cont col-md-6 col-sm-12 order-2 order-lg-2  cont-w">
            <Form 
            search={search}
            saveSearch={saveSearch}
            saveConsult={saveConsult}
            saveLoading = {saveLoading}
            />
          </div>
          <div className="weather-cont col-md-6 col-sm-12  order-md-2">
           {loading ? <Spinner /> : component}
          </div>
        </div>
      </div>
    </div>
    </Fragment>
  );
}

export default App;
