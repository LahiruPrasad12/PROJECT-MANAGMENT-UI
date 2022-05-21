import React from 'react';
import axios from "axios";

const Home = () => {

    const creatGroup = async()=>{
        let data = {
            name:'group2'
        }
        let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNGMxZWFmYWUxNTFhNDFmY2I5OGE3ZiIsImlhdCI6MTY1MTk2MjYyOCwiZXhwIjoxNjU5NzM4NjI4fQ.kuuNh5Rp6RRN4755wQZiXEnKqdGR49Ph-Q4SDmVGCIk'
        let respond = await axios.post('http://localhost:5000/api/groups',data,{ headers: {"Authorization" : `Bearer ${token}`} })
    }
    return (
        <div>
            Hello Home
            <button type="submit" onClick={(e)=>{creatGroup()}}>create group</button>
        </div>
    );
};

export default Home;