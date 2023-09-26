import React, { useEffect, useState } from 'react'
import { useAuthState } from '../../context/AuthContextProvider'
import { db } from '../../utils/firebase-config';
import { getStudents } from '../../context/AuthContextProvider';
import { addStudents } from '../../context/AuthContextProvider';
import Sidenav from '../../modules/sidenav';
import pagesData from '../pageRouter';
import DashboardNavbar from '../../modules/navbar';
import { Route, Routes } from 'react-router-dom';
const Home = () => {
  const user = useAuthState();
  console.log(user);
  const [students,setStudents] = useState([]);
  const [username,setusername]= useState('');
  const [password,setpassword] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      const studentsData = await getStudents();
      setStudents(studentsData);
    };
  
    fetchData(); // Call the function to fetch data
  
    return () => {
      // Add any cleanup logic here if needed
    };
  }, []);

  const handleClick = async() => {
    const data = {
      username:username,
      password:password,
    }
    await addStudents(data);
  };

  
  
  console.log(students);

  return (
    <div className="min-h-screen bg-blue-gray-50/50">
      <Sidenav routes={pagesData}/>
      <div className="p-4 xl:ml-80">
      <DashboardNavbar />
      <Routes>
          {pagesData.map(
            ({ layout, pages }) =>
              layout === "dashboard" &&
              pages.map(({ path, element }) => (
                <Route exact path={path} element={element} />
              ))
          )}
        </Routes>
      </div>
    </div>
  
  )
}

export default Home