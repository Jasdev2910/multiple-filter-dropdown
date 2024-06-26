import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobDetails } from './redux/actions/jobActions';
import Card from './components/jobCard/Card';

export default function JobList(){
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchJobDetails());
    }, [dispatch]);

    const jobs = useSelector((store) => store.jobDetails);
  

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-20 pt-10">
             {jobs?.jobDetails?.jdList?.map((data) => (
          <Card  key={data.jdUid} data={data} />
        ))}

        </div>
    )
}
