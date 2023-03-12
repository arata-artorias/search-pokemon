import React, {useState} from "react";
import { useLazyQuery } from '@apollo/client';
import QUERY_SINGLE_POKEMON from '../pages/querySinglePokemon.graphql';
import Results from '../components/result';

export default function Search() {

  const [searchValue, setSearchValue] = useState('');

  const [getPokemon, { loading, error, data }] = useLazyQuery(QUERY_SINGLE_POKEMON, 
    {
    variables: { name: searchValue },
    }
  );

  const handleClick = (newValue: string) => {
    setSearchValue(newValue);
    getPokemon({
      variables: { name: newValue },
    })
  };

  const searchFunction = (event: any) => {
    setSearchValue(event.target.value)
    getPokemon({
      variables: { name: event.target.value },
    })
  }

  const renderResult = () => {
    if (searchValue == '' && error) {
      return (
      <div className="items-center px-4 flex justify-center">
        <div className="search-message">Please enter more characteres</div>
      </div> );
    }
    
    if (loading) {
      return (
        <div className="items-center px-4 flex justify-center">
          <div className="search-message">Loading...</div>
        </div> );
    }
    if (error) {
      return <div className="search-message">Something went wrong</div>
    }

    if (data?.pokemon != null) {
      return (
        <div>
          <Results data={data} handleClick={handleClick}/>
        </div>
      );
    } else {
      if (searchValue != '') {
        return (
          <div className="items-center px-4 flex justify-center">
            <div className="search-message">Not Found</div>
          </div> 
        );
      }
    }
  };

  return (
    <div>
    <div className="items-center px-4 flex justify-center">
      <div className="relative mr-3">
        <input
          type="text"
          className="block p-2 pl-10 w-70 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:pl-3"
          onChange={searchFunction}
          placeholder="Enter Pokemon Name..."
          value={searchValue}
          required
        />
      </div>
    </div>
    {renderResult()}
    </div>
  );
}