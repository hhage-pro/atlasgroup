import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {App,pageMeta} from './App';
export function render(url:string){
 const {title,description}=pageMeta(url);
 const base=import.meta.env.BASE_URL.replace(/\/$/,'');
 return {html:renderToString(<StaticRouter location={base+url} basename={base}><App/></StaticRouter>),title,description};
}
