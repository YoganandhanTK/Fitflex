import React, { useEffect, useState } from 'react'
import { FaFireAlt } from "react-icons/fa";
import '../styles/HomeSearch.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import img1 from '../assets/cardio.jpg';
import img2 from '../assets/shoulder.jpg'; 
import img3 from '../assets/dumbbell.jpg';
import img4 from '../assets/kettelbell.jpg';

const HomeSearch = () => {

  const navigate = useNavigate();

  const [search, setSearch] = React.useState('');

  const [searchType, setSearchType] = useState('bodyPart');

  const handleSearch = () => {
    if (search !== '' && searchType === 'bodyPart') {
      navigate(`/bodyPart/${search}`);
      setSearch('');
    } else if (search !== '' && searchType === 'equipment') {
      navigate(`/equipment/${search}`);
      setSearch('');
    }
  }

  const [bodyParts, setBodyParts] = useState([])
  const [equipment, setEquipment] = useState([])

  const bodyPartsOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': '334036bf59mshf4d431f3f4bb597p1bd651jsn1a9389d4954b',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  const equipmentOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/equipmentList',
    headers: {
      'X-RapidAPI-Key': '334036bf59mshf4d431f3f4bb597p1bd651jsn1a9389d4954b',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  useEffect(() => { 

    fetchData();
  }, [])

  const fetchData = async () =>{
    try {
      const bodyPartsData = await axios.request(bodyPartsOptions);
      console.log(bodyPartsData.data);
      setBodyParts(bodyPartsData.data);

      const equipmentData = await axios.request(equipmentOptions);
      console.log(equipmentData.data);
      setEquipment(equipmentData.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='home-search-component' id='search'>
        <h3>Search for Your Perfect Workout</h3>
        <div className="search-type-buttons">
          <h4>Search by: </h4>
          <span>
            <button className={searchType === 'bodyPart' ? 'active': ''} onClick={()=> setSearchType('bodyPart')} >Body Parts</button>
            <button className={searchType === 'equipment' ? 'active': ''} onClick={()=> setSearchType('equipment')} >Equipment</button>
          </span>
        </div>
        <div className='search-body'>
          {searchType === 'bodyPart' ? 
          
            <select onChange={(e)=> setSearch(e.target.value)} value={search} >
              <option value="">Choose body part</option>
              {bodyParts.map((bodyPart, index) => (
                <option key={index} value={bodyPart}>{bodyPart}</option>
              ))}
            </select>
          :
            <select  onChange={(e)=> setSearch(e.target.value)} value={search}>
              <option value="">Choose Equipment</option>
              {equipment.map((equip, index) => (
                <option key={index} value={equip}>{equip}</option>
              ))}
            </select>
          
          }
            <button onClick={() => handleSearch()} >Search</button>
        </div>
        <div className="popular-categories-container">
            <span>
                <h5>Popular Categories</h5>
                <FaFireAlt className="fire-icon" />
            </span>
            <div className="popular-categories">

              <div className="popular-category" onClick={()=> navigate("/bodyPart/cardio")} >
              <img src={img1} alt="" />
                <p>Cardio</p>
              </div>
              <div className="popular-category" onClick={()=> navigate("/bodyPart/Shoulders")} >
              <img src={img2} alt="" />
                <p>Shoulders</p>
              </div>
              <div className="popular-category" onClick={()=> navigate("/equipment/dumbbell")}>
              <img src={img3} alt="img" />
                <p>Dumbbells</p>
              </div>
              <div className="popular-category" onClick={()=> navigate("/bodyPart/Kettelbell")}>
              <img src={img4} alt='' />
                {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUccLBhrTXSaQNxl_knjzXl-ACQqr4ANIweQ&usqp=CAU" /> */}
                <p>Kettlebell</p>
              </div>

            </div>
        </div>
    </div>
  )
}

export default HomeSearch