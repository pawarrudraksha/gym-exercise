
export const exerciseOptions = {
    method: 'GET',
    params: {limit: '100'},
    headers: {
      'X-RapidAPI-Key':'0a490ed662msh2935eccb62c8fc1p1a065djsne266aaa2fe3d',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  

export const youtubeOptions = {
    method: 'GET',
    params: {limit: '100'},
    headers: {
      'X-RapidAPI-Key':'0a490ed662msh2935eccb62c8fc1p1a065djsne266aaa2fe3d',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
  
export const fetchData=async (url,options)=>{
    const response=await fetch(url,options);
    const data=await response.json()
    return data;
}