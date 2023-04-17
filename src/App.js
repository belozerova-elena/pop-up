import React from 'react';
import './index.css';

const Modal = ({ open, setOpen, children }) => (
  <div className={`overlay animated ${open ? 'show' : ''}`}>
    <div className="modal">
      <svg onClick={() => setOpen(false)} height="200" viewBox="0 0 200 200" width="200">
        <title />
        <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
      </svg>
      {children}
    </div>
  </div>
);

function App() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="app">
      <button onClick={() => setOpen(true)} className="open-modal-btn">Open</button>
        <Modal open={open} setOpen={setOpen}>
          <h3>Pop-up</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque praesentium quaerat asperiores ut accusantium explicabo. Ipsa, recusandae. Laudantium suscipit, dolorum ducimus ullam facilis delectus facere eius commodi veniam aperiam et!</p>
        </Modal>
    </div>
  );
}

export default App;