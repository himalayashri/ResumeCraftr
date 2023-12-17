import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Box,
    Input
} from '@chakra-ui/react'

import { useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { useContext } from 'react';
import { DataContext } from "../DataContext";


const EditModal = ({ dataa, children }) => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const { data, setData } = useContext(DataContext);

    const [about, setAbout] = useState(dataa.about);
    const [cw, setCw] = useState(dataa.current.cw);
    const [cwy, setCwy] = useState(dataa.current.cwy);
    const [colleg, setColleg] = useState(dataa.education.college)
    const [cours, setCourse] = useState(dataa.education.course)
    const [yearr, setYear] = useState(dataa.education.year)
    const [experience, setExperience] = useState(dataa.experience.experience);
    const [ey, setEy] = useState(dataa.experience.ey);
    const [projectTitle, setProjectTitle] = useState(dataa.projects.projectTitle);
    const [projectDescription, setProjectDescription] = useState(dataa.projects.projectDescription);
    const [skills, setSkills] = useState(dataa.skills.skill);
    const [rating, setRating] = useState(dataa.skills.rating);
    const [name, setName] = useState(dataa.name);

    const fetchData = () => {
        fetch('/api')
            .then((res) => res.json())
            .then((data) => setData(data));
    }

    function editResume() {


        fetch(`/api/${dataa.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "id": dataa.id,
                "name": name,
                "current": {
                    "cw": cw,
                    "cwy": cwy
                },
                "about": about,
                "education": {
                    "college": colleg,
                    "course": cours,
                    "year": yearr
                },
                "experience": {
                    "experience": experience,
                    "ey": ey
                },
                "projects": {
                    "projectTitle": projectTitle,
                    "projectDescription": projectDescription
                },
                "skills": {
                    "skill": skills,
                    "rating": rating
                }
            }),
        })
            .then((res) => res.json())
            .then(() => fetchData())
            .finally(() => {
                console.log(data);
                onClose()
            });

    }
    return (
        <>
            {
                children ? <span onClick={onOpen}>{children}</span> : null
            }

            <Modal isOpen={isOpen} onClose={onClose} isCentered size={"xlg"} >
                <ModalOverlay />
                <ModalContent h={"80%"} maxW={{ sm: "95%", md: "60%" }} overflowY={'auto'}>
                    <ModalHeader
                        fontFamily={"Work sans"}
                        display={"inline"}
                        justifyContent="center" width={"50%"} margin={'auto'}><Input py={10} textAlign={"center"} fontSize={"40px"} value={name} onChange={(e) => setName(e.target.value)} placeholder='Your Name' /></ModalHeader>
                    <ModalCloseButton size={"lg"} />
                    <ModalBody fontFamily={20} px={20}>
                        {dataa.about && <Box>
                            <Box w={'auto'} fontSize={29} bg={"#515151"} color={'white'} pl={10}>About Me</Box>

                            <Input value={about} onChange={(e) => setAbout(e.target.value)} type='text' bg={"#dcd7d7"} fontSize={24} borderBottom={"2px"} borderColor={"#515151"} display={'flex'} justifyContent={'space-between'} px={12} py={10} placeholder='Tell me about yourself...' />


                        </Box>}
                        {dataa.current && <Box>
                            <Box w={'auto'} fontSize={29} bg={"#515151"} color={'white'} pl={10}>Currently Working</Box>

                            <Box bg={"#dcd7d7"} fontSize={24} borderBottom={"2px"} borderColor={"#515151"} display={'flex'} justifyContent={'space-between'} >
                                <Input value={cw} onChange={(e) => setCw(e.target.value)} type='text' bg={"#dcd7d7"} fontSize={24} borderBottom={"2px"} borderColor={"#515151"} display={'flex'} justifyContent={'space-between'} px={12} py={10} w={"70%"} placeholder="Currently working at..." />
                                <Input value={cwy} onChange={(e) => setCwy(e.target.value)} type='number' bg={"#dcd7d7"} fontSize={24} borderBottom={"2px"} borderColor={"#515151"} display={'flex'} justifyContent={'space-between'} px={12} py={10} w={"30%"} placeholder='since (year)' />
                            </Box>



                        </Box>}

                        {dataa.education && <Box>
                            <Box w={'auto'} fontSize={29} bg={"#515151"} color={'white'} pl={10}>Education</Box>

                            <Box bg={"#dcd7d7"} fontSize={24} borderBottom={"2px"} borderColor={"#515151"}>
                                <Input value={colleg} onChange={(e) => setColleg(e.target.value)} py={10} fontSize={24} fontWeight={500} type='text' px={12} placeholder='University or College name' />
                                <Input value={cours} onChange={(e) => setCourse(e.target.value)} py={10} fontSize={24} type='text' px={12} placeholder='Course name' />
                                <Input value={yearr} onChange={(e) => setYear(e.target.value)} py={10} fontSize={24} fontWeight={300} px={12} type='text' placeholder='year' />

                            </Box>



                        </Box>}

                        {dataa.experience && <Box>
                            <Box w={'auto'} fontSize={29} bg={"#515151"} color={'white'} pl={10}>Experience</Box>

                            <Box bg={"#dcd7d7"} fontSize={24} borderBottom={"2px"} borderColor={"#515151"} display={'flex'} justifyContent={'space-between'} >
                                <Input width={"70%"} fontSize={24} px={12} py={10} value={experience} onChange={(e) => setExperience(e.target.value)} placeholder='Position and Company name' />
                                <Input width={"30%"} fontSize={24} px={12} py={10} value={ey} onChange={(e) => setEy(e.target.value)} placeholder='year' />

                            </Box>

                        </Box>}
                        {dataa.projects && <Box>
                            <Box w={'auto'} fontSize={29} bg={"#515151"} color={'white'} pl={10}>Projects</Box>

                            <Box bg={"#dcd7d7"} fontSize={24} borderBottom={"2px"} borderColor={"#515151"} >
                                <Input fontSize={24} value={projectTitle} onChange={(e) => setProjectTitle(e.target.value)} py={10} fontWeight={500} px={12} placeholder='Project title' />
                                <Input fontSize={24} value={projectDescription} onChange={(e) => setProjectDescription(e.target.value)} py={10} px={12} placeholder='Project description' />
                            </Box>

                        </Box>}
                        {dataa.skills && <Box>
                            <Box w={'auto'} fontSize={29} bg={"#515151"} color={'white'} pl={10}>Skills</Box>

                            <Box bg={"#dcd7d7"} fontSize={24} borderBottom={"2px"} borderColor={"#515151"} display={'flex'} justifyContent={'space-between'} >
                                <Input width={"70%"} fontSize={24} value={skills} onChange={(e) => setSkills(e.target.value)} py={10} px={12} placeholder='Skill' />
                                <Input width={"30%"} fontSize={24} value={rating} onChange={(e) => setRating(e.target.value)} py={10} px={12} placeholder='Rating' />
                            </Box>
                        </Box>}
                    </ModalBody>

                    <ModalFooter>
                        <Button mr={3} variant='ghost' onClick={onClose} fontSize={"20px"} size={"lg"}>
                            Close
                        </Button>
                        <Button colorScheme='blue' fontSize={"20px"} size={"lg"} onClick={editResume}>Save</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default EditModal;