import { useEffect } from "react";


const useTitle = (title) => {
    return (
        useEffect(() =>{
            document.title =`Elite Estate | ${title}`
        },[])
    );
};

export default useTitle;