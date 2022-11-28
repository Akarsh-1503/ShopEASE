



export const addEllipsis =(text)=>{

    if(text.length > 51){
        return text.substring(0,51) + '...';
    }
    else
        return text;
}