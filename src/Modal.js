import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isShowingpay, hide }) => isShowingpay ? ReactDOM.createPortal(
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
            Купи наш стул <br/>
            <br/>
            Его преимущество
            <br/>
            <br/>
            -Дёшовый
            <br/>
            -Долговечный
          </p>
        <img src='https://annblok.github.io/Beauty/img/chair.png' alt='стул'/>
        </div>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;