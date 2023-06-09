import React from "react";

export default function Results(props: any) {

  let data = props.data;
  
  return (
  <div className="overflow-hidden shadow-lg items-center px-4 flex justify-center">
    <img src={data?.pokemon?.image} alt="Sunset in the mountains"></img>
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{data?.pokemon?.name}</div>
      <p>Number : {data?.pokemon?.number}</p>
      <p>Classification : {data?.pokemon?.classification}</p>
      <p>Flee Rate : {data?.pokemon?.fleeRate}</p>
      <p>Max CP : {data?.pokemon?.maxCP}</p>
      <p>Max HP : {data?.pokemon?.maxHP}</p>
      <p>Resistant : {data?.pokemon?.resistant?.join(',')}</p>
      <p>Types : {data?.pokemon?.types?.join(',')}</p>
      <p>Weaknesses : {data?.pokemon?.weaknesses?.join(',')}</p>
      <p>Height : {data?.pokemon?.height?.minimum} - {data?.pokemon?.height?.maximum}</p>
      <p>Weight : {data?.pokemon?.weight?.minimum} - {data?.pokemon?.weight?.maximum}</p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <div className="font-bold text-xl mb-2">Attacks</div>
      <div>
        <h2>Fast</h2>
      {data?.pokemon?.attacks?.fast?.map((fast: any, i: number) => (
        <div key={i} className={fast.name}>
          {fast.name} ({fast.type}) - {fast.damage} damage
        </div>
      ))}
      </div>
      <div>
        <h2>Special</h2>
      {data?.pokemon?.attacks?.special?.map((special: any, i: number) => (
        <div key={i} className={special.name}>
          {special.name} ({special.type}) - {special.damage} damage
        </div>
      ))}
      </div>
    </div>
    <div className="px-6 pt-4 pb-2">
      <div className="font-bold text-xl mb-2">Evolutions</div>
      <div>
        {data?.pokemon?.evolutions?.map((evolution: any, i: number) => (
          <div key={i} className={evolution?.number}>
            <div className="italic text-xl mb-2" onClick={ () => props.handleClick(evolution?.name)}>
              {evolution?.name} !!!
            </div>
            <p>Number : {evolution?.number}</p>
            <p>Classification : {evolution?.classification}</p>
            <p>Flee Rate : {evolution?.fleeRate}</p>
            <p>Max CP : {evolution?.maxCP}</p>
            <p>Max HP : {evolution?.maxHP}</p>
            <p>Resistant : {evolution?.resistant?.join(',')}</p>
            <p>Types : {evolution?.types?.join(',')}</p>
            <p>Weaknesses : {evolution?.weaknesses?.join(',')}</p>
            <p>Height : {evolution?.height?.minimum} - {evolution?.height?.maximum}</p>
            <p>Weight : {evolution?.weight?.minimum} - {evolution?.weight?.maximum}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}