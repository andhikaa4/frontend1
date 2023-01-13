import React, {  useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import Modal from 'react-modal';
import DraggableDiv from '../Test file';

export const DraggableWord = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState('');
  
  const divRef = useRef(null);

  const [color, setColor] = useState("black");
  const [word, setWord] = useState('DRAGGABLE')
  const letter = word.split('')
  const [fontSize, setFontSize] = useState(30);

  const handleChange = (e) => {
    setFontSize(e.target.value);
  }

  const generateColor = () => {
    const letters = "0123456789ABCDEF";
    let newColor = "#";
    for (let i = 0; i < 6; i++) {
      newColor += letters[Math.floor(Math.random() * 16)];
    }
    setColor(newColor);
  };

  function handleSave() {
    html2canvas(divRef.current).then(canvas => {
      setImgSrc(canvas.toDataURL('image'));
      setModalIsOpen(true);
    });
  }

  function handleDownload() {
    const link = document.createElement('a');
    link.href = imgSrc;
    link.download = `${word}.png`;
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };



  return (
    <div className='d-flex justify-content-center py-5' >
      <div className=' w-50' >
        <div className=' bg-primary bg-gradient bg-opacity-50 px-5 py-2' style={{ height: '150px' }}>
          <p className='m-0 text-center' >Letter Draggable*</p>
          <div ref={divRef} className='fs-1 fw-bold d-flex justify-content-center w-100 h-100 '>      
            {letter?.map((item, index) => (
                <div id="my-div"  key={index} style={{cursor:'grab'}} >
                    <DraggableDiv item={item} id={index} fontSize={fontSize} color={color} />
                </div>
            ))}

          </div>
        </div>
        <div className='d-flex flex-column align-items-center mt-4 ' style={{ gap: '20px' }} >
          <input className='form-control w-50 bg-light' type="text" name="name" value={word} onChange={(e) => { setWord(e.target.value) }} />
          <label>
            Font size:
            <input className='mx-1' type="range" min="30" max="72" value={fontSize} onChange={handleChange} />
            {fontSize}px
          </label>
          <div className='d-flex' >
            <span className='p-4 rounded bg-danger me-2' onClick={() => setColor('#DC3545')} style={{ cursor: 'pointer' }} />
            <span className='p-4 rounded bg-secondary me-2' onClick={() => setColor('#6C757D')} style={{ cursor: 'pointer' }} />
            <span className='p-4 rounded bg-warning me-2' onClick={() => setColor('#FFC107')} style={{ cursor: 'pointer' }} />
            <span className='p-4 rounded bg-primary me-2' onClick={() => setColor('#0D6EFD')} style={{ cursor: 'pointer' }} />
            <span className='p-4 rounded bg-success me-2' onClick={() => setColor('#198754')} style={{ cursor: 'pointer' }} />

          </div>
          <p className='m-0' >Or</p>
          <button className='btn btn-success' onClick={generateColor}>Random Change Color</button>
          <button onClick={handleSave} className='btn btn-outline-success'>Save</button>

          <Modal
          style={customStyles}
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
          >
            <img src={imgSrc} alt='...' /><br/>
            <div className='d-flex justify-content-center flex-column' >
                            <p className='text-center text-wrap'>Right Click and choose save as to input the file name</p>
              <button className='btn btn-success' onClick={handleDownload}>Download</button>
            </div>
          </Modal>
        </div>


      </div>

    </div>
  );
};

