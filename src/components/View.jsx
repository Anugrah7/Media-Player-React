import React, { useEffect, useState } from 'react'
import {Row,Col} from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideosAPI, saveVideoAPI,updateCategoryAPI } from '../sevices/allAPI'
import { all } from 'axios'

const View = (addResponseFromHome,deleteResponseFromCategory,setDeleteResponseFromView) => {

  const [deleteVideoResponseFromVideoCard,setDeleteVideoResponseFromVideoCard] = useState("")
  const [allVideos,setAllVideos] = useState([])

  useEffect(()=>{
    getAllVideos()
  },[addResponseFromHome,deleteVideoResponseFromVideoCard,deleteResponseFromCategory])

  // console.log(allVideos);
  

  const getAllVideos = async()=>{
    try{
      const result = await getAllVideosAPI()
      console.log(result);
      if(result.status>=200 && result.status<300){
        setAllVideos(result.data)
      }
      
    }catch(err){
      console.log(err);
      
    }
  }

  const dragOverview = (e)=>{
    e.preventDefault()
  }

  const categoryVideoDropOverview = async (e)=>{
    console.log("Inside categoryVideoDropOverview");
    const {video,categoryDetails} = JSON.parse(e.dataTransfer.getData("dragData"))
    console.log(video,categoryDetails);
    const updatedCategoryVideoList = categoryDetails?.allVideos?.filter(item=>item.id!=video?.id)
    const updatedCategory = {...categoryDetails,allVideos:updatedCategoryVideoList}
    console.log(updatedCategory);
    //updating the category by delete video from category using API
    const result = await updateCategoryAPI (updatedCategory)
    //use state lifting to communicate data from view to category 
    setDeleteResponseFromView(result)
    //use api to upload videos 
    await saveVideoAPI(video)
    //call get all video function
    getAllVideos()

  }
  return (
    <>
    <Row droppable="true" onDragOver={dragOverview} onDrop={e=>categoryVideoDropOverview(e)}>
      {
        allVideos?.length>0?
        allVideos?.map(video=>(
          <Col key={video?.id} className='mb-5' sm={12} md={6} lg={4}>
          <VideoCard setDeleteVideoResponseFromVideoCard={setDeleteVideoResponseFromVideoCard} displayData={video}/>
          </Col>
        ))
      :
      <div className="fw-bolder text-danger fs-5">No Videos are uploaded Yet</div>
      }
    </Row>
    </>
  )
}

export default View

