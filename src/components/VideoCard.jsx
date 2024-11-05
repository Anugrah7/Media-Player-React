import React, { useState } from 'react'
import {Card ,Modal} from 'react-bootstrap'
import { saveHistoryAPI } from '../sevices/allAPI';
import { removeVideoAPI } from '../sevices/allAPI';

          
const VideoCard = ({displayData,setDeleteVideoResponseFromVideoCard,insideCategory}) => {
  const[show,setShow] = useState(false);

  const handleClose= () => setShow(false);

  const handleShow = async() => {
    setShow(true);

    //store history in json
    const {caption,youTubeLink} = displayData
    const sysDateTime = new Date()
    console.log(sysDateTime.toLocaleString('en-US',{timeZoneName:'short'}));
    const timeStamp = sysDateTime.toLocaleString('en-US',{timeZoneName:'short'})
    const historyDetails = {caption,youTubeLink,timeStamp}
    try{
      await saveHistoryAPI(historyDetails)
    }catch(err){
      console.log(err);
      
    }
    
  }

  const deleteVideo = async (id) =>{
    try{
      const result = await removeVideoAPI(id)
      setDeleteVideoResponseFromVideoCard(result)
    }catch(err){
      console.log(err);
      
    }
  }

  //video card dragging
  const videoCardDragStarted = (e,dragVideoDetails)=>{
    console.log("Inside videoCardDragStarted with videoId :"+dragVideoDetails?.id);
    //share data using event drag start
    e.dataTransfer.setData("videoDetails",JSON.stringify(dragVideoDetails))
  }

  return (
    <>
    {/* to drag set draggable attribute as true in jsx  */}
       <Card draggable={true} onDragStart={e=>videoCardDragStarted(e,displayData)} style={{ height: '250px' }} >
      <Card.Img onClick={handleShow} variant="top" height={'200px'} src={displayData?.imgUrl} />
      <Card.Body>
        
        <Card.Text className='d-flex justify-content-between'>
          <p>{displayData?.caption}</p>
          {
           !insideCategory && <button onClick={()=>deleteVideo(displayData?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
          }
          
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Caption</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe className='rounded shadow' width="100%" height="400" src={`${displayData?.youTubeLink}?autoplay=1`} title="Linkin Park |Heavy is the Crown | Live" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default VideoCard
