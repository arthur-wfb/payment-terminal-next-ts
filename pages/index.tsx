import React, {useState, useEffect, useContext} from 'react'

import NoticeAndLoaderContext from '../contexts/NoticeAndLoaderContext'
import OperatorsContext from '../contexts/operatorsContext'

import OperatorsListScreen from '../components/operators_list_screen/OperatorsListScreen'
import {IOperator} from "../interfaces/IOperator";
import {NextPageContext} from "next";

interface AppProps {
  operatorsFromServer: IOperator[]
}

function App(props: AppProps) {
  const [operators, setOperators] = useState(undefined);
  const { notice } = useContext(NoticeAndLoaderContext);

  useEffect(() => {
    async function loadOperators(){
      const response = await fetch(`${process.env.API_URL}/api/operators`);
      const json = await response.json();
      setOperators(json.operators);
    }

    setOperators(props.operatorsFromServer);

    if (props.operatorsFromServer === undefined){
      loadOperators()
    }
  }, [])

  return (
    <OperatorsContext.Provider value={{ operators }}>
      <OperatorsListScreen notice = {notice} />
    </OperatorsContext.Provider>
  );
}

App.getInitialProps = async ({req}: NextPageContext) => {
  if (!req){
    return { operatorsFromServer: undefined }
  }

  const response = await fetch(`${process.env.API_URL}/api/operators`);
  const json = await response.json();

  return {
    operatorsFromServer : json.operators
  }
}

export default App
