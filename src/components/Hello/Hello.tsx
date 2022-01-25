import * as React from 'react';

interface HelloProp {
    name: string
}

const Hello = (props: HelloProp) => {
  return <div>Olá {props.name} ! O pacote funciona!</div>
}

export default Hello;