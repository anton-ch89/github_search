import React, {useContext} from "react";
import { Card } from "../components/Card";
import { Search } from "../components/Search";
import { githubContext } from "../context/github/githubContext";

const Home = () => {


  const {loading, users} = useContext(githubContext)
 
  return (
    <>
      <Search />
      <div className="row">

{loading
? <p className="text-center">Загрузка...</p>
:users.map((user)=>(  
    <div className="col-sm-4 mb-4" key={user.id}> 
    <Card user={user}/>
  </div> ))
}


          
      </div>
    </>
  );
};

export default Home;
