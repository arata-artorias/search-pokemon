import React, {useState} from "react";
import { useLazyQuery } from '@apollo/client';
import Search from '../components/search';
// import renderResult from '../components/result';

export default function Home() {
  return (
    <div>
      <div className="items-center px-4 flex justify-center">
        <h1 className="text-2xl">Search Pokemon</h1>
      </div>
      <Search/>
    </div>
  );
}
