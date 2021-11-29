import {useState , useEffect} from 'react';
import Youtube from '../api/Youtube';

const useVideos = (defaultSearchTerm) => {
    const [videos , setVideos] = useState([]);

    const search = async (term) => {
        const response = await Youtube.get("/search", {
            params: {
                q: term,
            },
        });
        setVideos(response.data.items);
    };

    useEffect(() => {
        search(defaultSearchTerm);
    },[defaultSearchTerm]);

    return [videos , search];
};

export default useVideos;