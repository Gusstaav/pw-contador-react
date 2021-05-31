import './App.css'

import React from 'react'

import Contador from './components/layout/Contador'
import Card from './components/layout/Card';

export default () => (

        <div className="App" >
          <h1>Contador</h1>

            <div className="Cards" >

              <Card titulo="Contador em um componente único" color="#0d3024">
                <Contador numeroInicial={10} />
              </Card>

            </div>
        </div>
);