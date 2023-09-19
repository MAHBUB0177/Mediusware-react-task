import React, {useCallback, useState} from 'react';

const Problem1 = () => {

    const [show, setShow] = useState('all');
    const[listitem,setListitem]=useState([])
    const[data,setData]=useState({})

    const handleClick = (val) =>{
        setShow(val);
    }

    let tabledata = [];
    

    const tableFilteData = useCallback(()=> {
        console.log({show})
        if(show === 'all'){
            return listitem.sort((a, b) => a.status?.localeCompare(b?.status))
        }else if(show === "active"){
            return listitem?.filter((item,i)=>item?.status.toLowerCase() === show)
        }else if(show === "completed"){
            return listitem?.filter((item,i)=>item?.status.toLowerCase() === show)
        }
    }, [listitem, show])
    const handelSubmit=(e)=>{
        e.preventDefault() 
        setListitem([...listitem,data])
        setData({})
        e.target.reset()
    }

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form className="row gy-2 gx-3 align-items-center mb-4" onSubmit={handelSubmit}>
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Name" name='name'  onChange={(e)=>{
                            setData({...data,[e.target.name]:e.target.value})
                            }} required/>
                        </div>
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Status" name='status' onChange={(e)=>{
                            setData({...data,[e.target.name]:e.target.value})
                            }} required/>
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='all' && 'active'}`} type="button" onClick={()=>handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show==='active' && 'active'}`} type="button" onClick={()=>handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='completed' && 'active'}`} type="button" onClick={()=>handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>

                            
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                                tableFilteData()?.map((item,index)=>
                                
                                <tr key={index}>
                            <td scope="col">{item?.name}</td>
                            <td scope="col">{item?.status}</td>
                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;