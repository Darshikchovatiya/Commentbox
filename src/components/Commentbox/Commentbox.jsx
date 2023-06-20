import React, { useState } from 'react'
import {FaTrash} from 'react-icons/fa'

function Commentbox() {

    const [inputvalue, setInputvalue] = useState({
        fname: '',
        lname: '',
        comment: ''
    });

    const [viewdata, setViewdata] = useState([]);

    const handleinput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setInputvalue({ ...inputvalue, [name]: value });
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        let name = inputvalue;
        setViewdata([...viewdata, name]);
        setInputvalue({
            fname: '',
            lname: '',
            comment: ''
        });
    }

    const handleRemove = (e, index) =>{
        let newData = viewdata.filter((inp,id)=>{
            return id != index;
        }) 
        setViewdata(newData);
    }

    return (
        <>
            <div className="container">
                <form className='row' onSubmit={handlesubmit}>
                    <div className="mb-3 col-md-6">
                        <label className="form-label">First Name</label>
                        <input type="text" className="form-control" name='fname' value={inputvalue.fname} onChange={handleinput} />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Last Name</label>
                        <input type="text" className="form-control" name='lname' value={inputvalue.lname} onChange={handleinput} />
                    </div>
                    <div className="mb-3 comm_texta">
                        <label className="form-label">Comment</label>
                        <textarea className="form-control" rows="3" placeholder='Comment here' name='comment' value={inputvalue.comment} onChange={handleinput}></textarea>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Send</button>
                    </div>
                </form>
            </div>

            <div className="container">
                <div className="row">
                    {
                        viewdata.length >= 1 ?
                            viewdata.map((val, id) => {
                                return (
                                    <>
                                        <div className="d-flex justify-content-center align-items-center w-100">
                                            <div className="toast">
                                                <div className="toast-header">
                                                    <img src="..." className="rounded me-2" alt="..." />
                                                    <strong className="me-auto">
                                                        {
                                                            val.fname + " " + val.lname
                                                        }
                                                    </strong>
                                                    <button type="button" className='delete_btn' onClick={(e)=>{handleRemove(e,id)}}><FaTrash/></button>
                                                </div>
                                                <div className="toast-body">
                                                    {
                                                        val.comment
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </>

                                )
                            })
                            : ""
                    }
                </div>
            </div>
        </>
    )
}

export default Commentbox