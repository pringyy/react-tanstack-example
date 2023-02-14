import {
    useQuery,
  } from "@tanstack/react-query";
  import axios from "axios";
  import {Text, Box, Button, Anchor} from "@mantine/core"
  
  const Projects = () => {
    const { isLoading, error, data: reposData } = useQuery({
        queryKey: ["repoData"],
        queryFn: () =>
          axios
            .get("https://api.github.com/users/pringyy/repos")
            .then((res) => res.data),
      });

    if (isLoading) return <p>Loading...</p>

    if (error) return <p>Error...</p>

    

   

    return (
        reposData.map((repo: any) => {
            return(
            <div className="py-2 px-10">
                <Box className="border rounded-xl px-5 ">
                    <Text className="font-bold" size={"xl"}>{repo.name}</Text>
                    <Text size={"md"}>{repo.description}</Text>
                    <Anchor href={repo.html_url} >
                        Visit Repo
                    </Anchor>
                    <Text>{repo.language}</Text>
                </Box>
            </div>
            )
    
        })
      
    );
  };

export default Projects;