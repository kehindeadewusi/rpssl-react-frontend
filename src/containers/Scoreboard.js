import React, {useState, useEffect} from 'react';
import Display from '../components/Scores/Display/Display';
import ClearControl from '../components/Scores/ClearControl/ClearControl';
import ReloadControl from '../components/Scores/ReloadControl/ReloadControl';
import axios from 'axios';
import ApiLink from '../components/Common/ApiLink/ApiLink';

const Scoreboard = props => {
    const [api, setApi] = useState("http://localhost:8081");
    const [scores, setScores] = useState([])

    const apiChangeHandler= (e)=> {
        setApi(e.target.value);
    }

    const clearHandler= ()=> {
        axios.post(api + "/clear-scoreboard")
            .then(response =>{
                setScores([])
            });
    }

    useEffect(() => {
        loadData();
        return () => {};
      }, []);
    
    const loadData = () => {
        axios.get(api + "/scoreboard")
            .then(response =>{
                setScores(response.data);
            });
    }

    const reloadHandler = () => {
        loadData();
    }

    return (
        <>
            <div><ApiLink api={api} apiChange={apiChangeHandler}/></div>
            {<Display scores={scores}/>}
            <div>
                <ReloadControl reload={reloadHandler}/>
            </div>
            <div>
                <ClearControl clear={clearHandler}/>
            </div>
        </>
    );
}

export default Scoreboard;