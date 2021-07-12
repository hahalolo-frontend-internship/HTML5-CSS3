import React from 'react'
import "./loading.css"


function Loading() {

      return (
            <div className="loader">
            <div className="loader-inner">
               <h1>Loading...</h1>
              <div className="loader-line-wrap">
                <div className="loader-line"></div>
              </div>
              <div className="loader-line-wrap">
                <div className="loader-line"></div>
              </div>
              <div className="loader-line-wrap">
                <div className="loader-line"></div>
              </div>
              <div className="loader-line-wrap">
                <div className="loader-line"></div>
              </div>
              <div className="loader-line-wrap">
                <div className="loader-line"></div>
              </div>
            </div>
          </div>
      );
}

export default Loading

