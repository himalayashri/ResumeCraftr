import './App.css';
import { Box, Text } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { useContext } from 'react';
import { DataContext } from './DataContext';

import ResumeModal from "./modals/ResumeModal";
import EditModal from "./modals/EditModal";
import NewResumeModal from "./modals/NewResumeModal";


function App() {
  const { onOpen } = useDisclosure();

  const { data, setData } = useContext(DataContext);

  const fetchData = () => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setData(data));
  }

  function deleteResume(id) {

    fetch(`/api/${id}`, {
      method: 'DELETE',
    }).then(() => fetchData());
  }

  return (
    <>
      <div className='app'>
        <Box bg='#c6c6c6' w={{ base: "85%", md: "60%", xl: "50%" }} p={4} color='white' h={"60%"} minHeight={{ base: "30%", md: "50%" }} overflowY={"auto"} >
          <Box mt={5} textAlign={"center"} display={{ md: "flex" }} justifyContent={{ base: "center", md: "space-between" }} alignItems={"center"} px={10} flexWrap={"wrap"}>
            <Box mx={3} fontSize={"25px"} color={"black"} fontWeight={900} borderRadius={4} fontStyle={"italic"}>ResumeCraftr</Box>
            <NewResumeModal >
              <Button mt={5} fontSize={{ base: "20px", md: "25px" }} py={10} colorScheme='blue' fontWeight={700}>Create Resume +</Button>

            </NewResumeModal>

          </Box>
          {
            data.map((r) => (
              <Box key={r.id} color='white' w='auto' h={"auto"} minHeight={20} p={5} bg='#616060' m={10} fontSize={20} display={"flex"} justifyContent={'space-between'} cursor={'pointer'}>
                <ResumeModal data={r} >

                  <Text>{r.name}</Text>
                </ResumeModal>


                <Box display={'flex'} alignItems={'center'} >
                  <ResumeModal data={r} >

                    <Button className='btn' fontSize={{ base: "10", md: "20" }} mx={{ base: "5", md: "15" }} onClick={onOpen}>View</Button>
                  </ResumeModal>
                  <EditModal dataa={r}>
                    <Button className='btn' fontSize={{ base: "10", md: "20" }} mx={{ base: "5", md: "15" }}>Edit</Button>

                  </EditModal>

                  <Button className='btn' fontSize={{ base: "10", md: "20" }} mx={{ base: "5", md: "15" }} onClick={() => deleteResume(r.id)}>Delete</Button>
                </Box>


              </Box>
            ))
          }

        </Box>
      </div >
    </>
  );
}

export default App;
