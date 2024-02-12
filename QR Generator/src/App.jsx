import { useState } from 'react'
import './App.css'

function App() {
  const [image,setImage] = useState('');
  const [dataobject,setDataobject] = useState({data:'',size:150});
  const [error,setError] = useState('');

  const handleinput = (e)=>{
    setImage('');
    setDataobject({...dataobject,[e.target.name]:e.target.value});
  }

  async function generatecode(){
    const {data,size} = dataobject;
    try{
      if(data === ''){
        setImage('')
        setError('Enter data to get QR code !!!');
      }else{
        setError('');
        const response = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(data)}`)
        .then((response)=>response.status===200&&setImage(response.url));
      }
    }catch(error){
      setImage('')
      setError('Error while generating QR code..! Please Try Again Later!!!')
      console.log(error);
    }
  }

  function downloadcode(){
    fetch(image)
    .then((response)=>response.blob())
    .then((blob)=>{
      const link = document.createElement("a");
      link.href =URL.createObjectURL(blob);
      link.download="qrcode.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    })

  }

  return (
    <>
    <section className='container'>
      <h1 className='title'>qr generator</h1>
      {image && <img src={image} className='qr-img'/>}
      <p className='error-message'>{error}</p>
      <section>
          <label htmlFor='text-field' className='input-label'>Data for qr code : </label>
          <input type='text' placeholder='Enter Data for QR code' id='text-field' onChange={handleinput} name='data'/>
          <label htmlFor='size-field' className='input-label'>Image Size(e.g. 150) : </label>
          <input type='text' placeholder='Enter Size for QR code' id='size-field' onChange={handleinput} name='size'/>
          <button className='generate-btn' onClick={generatecode}>Generate Code</button>
          <button className='download-btn' onClick={downloadcode}>Download Code</button>
      </section>
    </section>
    </>
  )
}

export default App
