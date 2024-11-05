//saveVideoAPI - post http request called add component

import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"

export const saveVideoAPI = async (videoDetails)=>{
    return await commonAPI("POST",`${SERVERURL}/uploadVideos`,videoDetails)
}

//getAllVideosAPI - get http rqst called View Component
export const getAllVideosAPI = async ()=>{
    return await commonAPI("GET",`${SERVERURL}/uploadVideos`,"")
}

//saveHistoryAPI -  post Http Rqst to http://localhost:3000/history called by VideoCard Compontnt when we play video

export const saveHistoryAPI = async (historyDetails)=>{
    return await commonAPI("POST",`${SERVERURL}/history`,historyDetails)
}

//getAllHistoryApi - get http rqst to http://localhost:3000/history called by history  by History Compontnt when we play video

export const getAllHistoryAPI = async ()=>{
    return await commonAPI("GET",`${SERVERURL}/history`,"")
}

//Delete History APi  delete http rqst to http://localhost:3000/history called by history  by History Compontnt when user click on delete button

export const deleteHistoryAPI = async (id)=>{
    return await commonAPI("DELETE",`${SERVERURL}/history/${id}`,{})
}

//removeVideoAPI - get http rqst called View Component
export const removeVideoAPI = async (id)=>{
    return await commonAPI("DELETE",`${SERVERURL}/uploadVideos/${id}`,{})
}
//Save Category API - post http rqst to http://localhost:3000/categories

export const saveCategoryAPI = async (categoryDetails) =>{
    return await commonAPI("POST",`${SERVERURL}/categories`,categoryDetails)
}

//get Category API - get http rqst called Category Component

export const getAllCategoryAPI = async () =>{
    return await commonAPI("GET",`${SERVERURL}/categories/`,{})
}

//remove category API - delete http rqst to http://localhost:3000/categories/id  called by caategory component when user click on delete button

export const removeCategoryAPI = async (id)=>{
    return await commonAPI("DELETE",`${SERVERURL}/categories/${id}`,{})
}

//UPDATE Category API - PUT http://localhost:3000/categories/id called by category component whem video dropped over the category 

export const updateCategoryAPI = async (categoryDetails)=>{
    return await commonAPI("PUT",`${SERVERURL}/categories/${categoryDetails.id}`,categoryDetails)
}