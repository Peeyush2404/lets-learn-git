import React from 'react'
import UploadForm from './components/UploadForm'
import UploadsList from './components/UploadsList'

const Videos = () => {
  return (
    <div>
        <div className='row'>
            <div className='col'>
                <div className='card' >
                <div className='card-body'><UploadForm/></div>
                </div>
            </div>
            <div className='col'>
                <div className='card' >
                <div className='card-body'><UploadsList/></div>
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Videos