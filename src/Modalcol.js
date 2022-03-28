import React from 'react';
import ReactDOM from 'react-dom';


const Modalcol = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className='Text'>
        <p>
          Москваc<br/>
          <br/>
          Санкт Петербург<br/>
          <br/>
          Краснодар <br/>
        </p>
        <p>
          +79183529808<br/>
          <br/>
          +79183529808<br/>
          <br/>
          +79183529808<br/>
        </p>
        </div>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;
export default Modalcol;