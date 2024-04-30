import { useEffect } from "react";


const useTitle = (title) => {
    return (
        useEffect(() =>{
            document.title =`SouthAsianTourism | ${title}`
        },[])
    );
};

export default useTitle;