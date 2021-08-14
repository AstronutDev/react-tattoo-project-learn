import React, { useState } from 'react';
import './App.css';

import AppHeader from './components/AppHeader';
import TattoItem from './components/Tattooitem';
import TattooPost from './components/Tattoopost.js';
import Appsearch from './components/Appsearch';
import tattoos from './components/datas/tattoos';

interface Tattoo {
  title: string,
  thumnailURL: string
}


function App() {
  const [selectTattoo, setSelectTattoo] = useState({title:'init', thumnailURL:''})
  const [searchText, setSearchText] = useState('')

  function onTattooOpenClick(tattoo: Tattoo) {
    console.log('ontapcall', tattoo.thumnailURL);
    
    setSelectTattoo({
      title: tattoo.title,
      thumnailURL: tattoo.thumnailURL
    })
  }

  function onTattooCloseClick() {
    setSelectTattoo({
      title: 'init',
      thumnailURL: ''
    })
  }

  let tattooPost = null
  if(selectTattoo.title === 'init') {

  } else  {
    tattooPost = <TattooPost tattoo={selectTattoo} onbgClick={onTattooCloseClick}/>
  }



  return (
    <div className="App">
      <AppHeader/>
      <section className="app-section">
        <div className="app-container">
          <Appsearch value={searchText} onValueChange={setSearchText}/>
          <div className="app-grid">
            {tattoos.filter(tattoo => { return tattoo.title.includes(searchText)}).map((item,index) => {
              return <TattoItem key={index} tattoo={item} onTattooClick={onTattooOpenClick}/>
            })}
          </div>
        </div>
      </section>
      {tattooPost}
    </div>
  );
}

export default App;
