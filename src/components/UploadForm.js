import React,{useState} from 'react'

const UploadForm = () => {
 
    const [name, setName] = useState('');
    const [videos, setVideos] = useState([]);
    const handleSubmit = (e)=>{

        e.preventDefault()
    }
    return (

    
    <>
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='name'>Name</label>
                    <input type="text" name='name' id='name' className='form-control' onChange={(e) =>setName(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label htmlFor='videos'>Upload Videos</label>
                    <input type='file' name='videos' id='videos ' multiple className='form-control' accept='.mp4, .mkv' onChange={(e)=>{setVideos(e.target.files)}}/>
                </div>
                <button className='btn btn-primary mt-2'>Submit</button>
            </form>
        </div>
    </>
  )
}

export default UploadForm