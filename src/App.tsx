import './App.css'
import {
  useQuery,
} from "@tanstack/react-query";
import axios from "axios";
import {Text} from "@mantine/core"

import Projects from "./Components/Projects/Projects"
import ContactForm from './Components/ContactForm/ContactForm';
import Layout from './Components/Layout/Layout';

import RubiksCube from './Components/RubixCube/RubixCube';

import { Canvas } from 'react-three-fiber';



function App() {
  const { isLoading, error, data: userData } = useQuery({
    queryKey: ["userData"],
    queryFn: () =>
      axios
        .get("https://api.github.com/users/pringyy")
        .then((res) => res.data),
  });

  if (isLoading) return <p>Loading...</p>

  if (error) return <p>Error...</p>

  return (
    <Layout>
      <img src={userData.avatar_url}/>
      <Text className="text-3xl ">{userData.name}</Text>
      <Text className="text-xl ">{userData.bio}</Text>
     
        <RubiksCube/>
      
    
      <Projects/>
      <ContactForm/>   
    </Layout>
  );
}

export default App
