import { Modal,Button,Form,FloatingLabel } from 'react-bootstrap'
import React,{useState} from 'react'
import { saveVideoAPI } from '../sevices/allAPI'

const Add = ({setAddResponseFromHome}) => {
  const [invalidYoutubeLink,setInvalidYoutubeLink] = useState(false)
  const [videoDetails,setVideoDetails] = useState({caption:"",imgUrl:"",youTubeLink:""})

  console.log(videoDetails);
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const extractingEmbedLinkFromYoutubeLink = (userInputYoutubeLink)=>{
    if(userInputYoutubeLink.includes("https://www.youtube.com/watch?v=")){
      console.log(userInputYoutubeLink.split("v=")[1].slice(0,11));
      const videoId = userInputYoutubeLink.split("v=")[1].slice(0,11)
      setInvalidYoutubeLink(false)
      setVideoDetails({...videoDetails,youTubeLink:`https://www.youtube.com/embed/${videoId}`})
    }else{
      setInvalidYoutubeLink(true)
      setVideoDetails({...videoDetails,youTubeLink:""})
    }
  }

  const handleUploadVideo = async ()=>{
    //object destructure  :  const {key1,key2....} = object-name
    const {caption,imgUrl,youTubeLink} = videoDetails
    if(caption && imgUrl && youTubeLink){
      // alert("proceed to store video details permanently")
      try{
        const result = await saveVideoAPI(videoDetails)
          console.log(result);
          if(result.status>=200 && result.status < 300){
            alert("video uploaded successfully")
            handleClose()
            //pass result to the view component
            setAddResponseFromHome(result)
          }else{
            console.log(result);
            
          } 
      }catch(err){
        console.log(err);
        
      }
    }else{
      alert("Fill the form completely")
    }
  }



  return (
    <>
    <div className='d-flex align-items-center'>
      <h5 style={{color:'black',fontWeight:"bolder"}}>Upload New Video</h5>
      <button style={{color:'black'}} onClick={handleShow} className='btn  ms-3 fw-bolder fs-5'>+</button>
    </div>
       <Modal
       show={show}
       onHide={handleClose}
       backdrop="static"
       keyboard={false}
     >
       <Modal.Header closeButton>
         <Modal.Title>Modal title</Modal.Title>
       </Modal.Header>
       <Modal.Body>
         <div className="border rounded p-3">
         <FloatingLabel controlId="floatingCaption" label="Video Caption">
        <Form.Control onChange={e=>setVideoDetails({...videoDetails,caption:e.target.value})}  type="text" placeholder="Caption" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingURL" label="Video imageURL">
        <Form.Control onChange={e=>setVideoDetails({...videoDetails,imgUrl:e.target.value})} className='mt-3' type="text" placeholder="Video Image URL" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingLink" label="Video youtube Link">
        <Form.Control onChange={e=>extractingEmbedLinkFromYoutubeLink(e.target.value)} className='mt-3' type="text" placeholder="Video Youtube Link" />
      </FloatingLabel>
      {
        invalidYoutubeLink && 
        <div className='text-danger fw-bolder mt-2'>Invalid Youtube Link... Please try with other !!!</div>
      }
         </div>
       </Modal.Body>
       <Modal.Footer>
         <Button variant="secondary" onClick={handleClose}>
           Cancel
         </Button>
         <Button onClick={handleUploadVideo} variant="primary">Upload</Button>
       </Modal.Footer>
     </Modal>
    </>
  )
}

export default Add
