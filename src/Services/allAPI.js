import Category from "../Components/Category";
import WatchHistory from "../Pages/WatchHistory";
import { commonAPI } from "./commonAPI";
import { serverURL } from "./serverURL";

//uploading video
//for add component
export const uploadVideo = async (body)=>{
    return await commonAPI('POST',`${serverURL}/videos`,body)
}

// get all videos
//for view componnent
//body as empty string with no space
export const getAllVideos=async()=>
{
    return await commonAPI("GET",`${serverURL}/videos`,"")
}


//get a single video
//for videoCard 
export const getAVideo=async(id)=>{
        return await commonAPI("GET", `${serverURL}/videos/${id}`, "");

    
}


//delete a single video
//for videoCard 
export const deleteAVideo=async(id)=>{
        return await commonAPI("DELETE", `${serverURL}/videos/${id}`, {});

    
}  
//store watch history to jsonserver  and return response to videocard component
export const addHistory = async (videoHistory) => {
	return await commonAPI("POST", `${serverURL}/history`, videoHistory);
};


//to get video watching histotry from json server and return to watch component
export const getHistory = async () => {
	return await commonAPI("GET", `${serverURL}/history`, "");
};


//add category to json server
export const saveCategory =async (body)=>{
    // return response to category component 
    return  await commonAPI('POST',`${serverURL}/categories`,body)

}

//get category from json server

export const getAllCategory=async()=>{
    return await commonAPI('GET',`${serverURL}/categories`)
}

// delte Category from json server
export const deleteCategory=async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/categories/${id}`,{})
}

//update categories in the json server

export const updateCategory=async(id,body)=>{
    return await commonAPI("PUT", `${serverURL}/categories/${id}`,body);
}

// delete WatchHistory
export const deleteHistory = async (id) => {
	return await commonAPI("DELETE", `${serverURL}/history/${id}`, {});
};
