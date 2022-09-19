import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import Authorization from "../../Authorization";

const UploadImage=()=>{
    const [imageFile, setImageFile] = useState();
    const [showPic, setPic] = useState({});
    const [imgFlag, setImgflag] = useState(false);
    const {id} = useParams();
    const history = useHistory();
    useEffect(()=>{},[showPic])
    const handleChange=(event)=>{
            setImageFile(event.target.files[0]);
            setImgflag(true);
            console.log(imageFile);
    }
    const handleSubmission=()=>{
        const formData = new FormData();
        formData.append('imageFile',imageFile)  //1st argumet 'imageFile' name must be matches with spring-boot requeat param name MultipartFile imageFile
        console.log(imageFile);
        console.log(formData);
        axios.post(`http://localhost:8080/api/users/${Authorization.getUser().userId}/image`,formData,
        {headers:{'Content-type':'multipart/form-data;boundary=<calculated when request is sent>'}})
        .then(res=>history.push("/"))
        .catch(err=>alert("error"));
    }
    const showImage=()=>{axios.get(`http://localhost:8080/api/users/${Authorization.getUser().userId}/image`)
    .then(res=>{setImageFile(res.data);
        console.log(res.data);
        setImgflag(true)})}
        useEffect(()=>{},[])
    return(
        <div style={{'margin-left':'700px'}}>
            <input  type="file" onChange={handleChange} name="file"></input>
            <button
             onClick={handleSubmission}
             className='btn btn-primary' 
             style={{'margin':'100px'}}>Upload</button><br/>
           {imgFlag ?  <img src={URL.createObjectURL(imageFile)} style={{'height':'400px','width':'400px'}}></img> : <img src={`http://localhost:8080/api/users/${Authorization.getUser().userId}/image`} style={{'height':'400px','width':'400px'}}></img>}
            <br/><br/><Link to={`/`}><button className="btn btn-primary">Back</button></Link>
        </div>
    )
}
export default UploadImage;