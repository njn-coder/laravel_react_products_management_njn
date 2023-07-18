import React, { useEffect } from 'react';
import { Link } from '@inertiajs/react';
export default function Pagination({ links }) {
  
    function getClassName(active) {
        if(active) {
            return "btn btn-primary m-1 px-4 py-3 text-sm border rounded hover:bg-white focus:border-primary focus:text-primary bg-blue-700 text-white";
        } else{
            return "m-1 mb-1 px-4 py-3 text-sm border rounded hover:bg-white focus:border-primary focus:text-primary";
        }
    }

    function GETiNDEX(val) {
        if(val == 0) {
            return "Previous";
        } else if(val == links.length - 1){
            return "Next";
        }else{
            return val
        }
    }
    
    useEffect(()=>{
        console.log(links)
    })
    return (
        links != undefined ? <>{links.length > 3 && (
            <div className="mb-4">
                <div className="flex flex-wrap mt-8">
                    {links.map((link, key) => (
                            link.url === null ?
                                    (<div
                                            className="btn  m-1 px-4 py-3 text-sm border rounded hover:bg-white focus:border-primary focus:text-primary text-primary"
                                        >{link.label.replace(/&raquo;|&laquo;/g, '')}</div>) :
  
                                    (<Link
                                                className={getClassName(link.active)}
                                                href={ link.url }
                                            >{GETiNDEX(key)}</Link>)
                                    ))}
                </div>
            </div>
        )}</> : <></>
        
    );
}