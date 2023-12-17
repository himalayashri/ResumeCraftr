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
    Text,
    Box
} from '@chakra-ui/react'

import { useDisclosure } from '@chakra-ui/react';
import EditModal from "./EditModal";

const ResumeModal = ({ data, children }) => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const rateStars = () => {
        let stars = ""
        for (let i = 0; i < data.skills.rating; i++) {
            stars += "⭐"
        }
        return stars;
    }

    return (
        <>
            {
                children ? <span onClick={onOpen}>{children}</span> : null
            }

            <Modal isOpen={isOpen} onClose={onClose} isCentered size={"xlg"} >
                <ModalOverlay />
                <ModalContent h={"80%"} maxW={{ sm: "95%", md: "60%" }} overflowY={'auto'}>
                    <ModalHeader fontSize={"40px"}
                        fontFamily={"Work sans"}
                        display={"flex"}
                        justifyContent="center">{data.name}</ModalHeader>
                    <ModalCloseButton size={"lg"} />
                    <ModalBody fontFamily={20} px={20}>
                        {data.about && <Box>
                            <Box w={'auto'} fontSize={29} bg={"#515151"} color={'white'} pl={10}>About Me</Box>

                            <Box bg={"#dcd7d7"} fontSize={24} borderBottom={"2px"} borderColor={"#515151"} display={'flex'} justifyContent={'space-between'} px={12} py={3}>
                                {data.about}

                            </Box>

                        </Box>}
                        {data.current && <Box>
                            <Box w={'auto'} fontSize={29} bg={"#515151"} color={'white'} pl={10}>Currently Working</Box>

                            <Box bg={"#dcd7d7"} fontSize={24} borderBottom={"2px"} borderColor={"#515151"} display={'flex'} justifyContent={'space-between'} px={12} py={3}>
                                <Box>{data.current.cw}</Box>
                                <Box>{data.current.cwy} - present</Box>

                            </Box>

                        </Box>}

                        {data.education && <Box>
                            <Box w={'auto'} fontSize={29} bg={"#515151"} color={'white'} pl={10}>Education</Box>


                            <Box bg={"#dcd7d7"} fontSize={24} borderBottom={"2px"} borderColor={"#515151"} px={12} py={2}>
                                <Text py={2} fontWeight={500}>{data.education.college}</Text>
                                <Text py={2} >{data.education.course}</Text>
                                <Text py={2} fontWeight={300}>{data.education.year}</Text>

                            </Box>

                        </Box>}

                        {data.experience && <Box>
                            <Box w={'auto'} fontSize={29} bg={"#515151"} color={'white'} pl={10}>Experience</Box>
                            <Box bg={"#dcd7d7"} fontSize={24} borderBottom={"2px"} borderColor={"#515151"} display={'flex'} justifyContent={'space-between'} px={12} py={2}>
                                <Text py={2} >{data.experience.experience}</Text>
                                <Text py={2} >{data.experience.ey}</Text>

                            </Box>

                        </Box>}
                        {data.projects && <Box>
                            <Box w={'auto'} fontSize={29} bg={"#515151"} color={'white'} pl={10}>Projects</Box>

                            <Box bg={"#dcd7d7"} fontSize={24} borderBottom={"2px"} borderColor={"#515151"} px={12}>
                                <Text py={2} fontWeight={500}>{data.projects.projectTitle}</Text>
                                <Text py={2} >{data.projects.projectDescription}</Text>
                            </Box>

                        </Box>}
                        {data.skills && <Box>
                            <Box w={'auto'} fontSize={29} bg={"#515151"} color={'white'} pl={10}>Skills</Box>

                            <Box bg={"#dcd7d7"} fontSize={24} borderBottom={"2px"} borderColor={"#515151"} display={'flex'} justifyContent={'space-between'} px={12}>
                                <Text py={2} >{data.skills.skill}</Text>
                                <Text py={2} >{rateStars()}</Text>
                            </Box>
                        </Box>}

                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose} fontSize={"20px"} size={"lg"}>
                            Close
                        </Button>
                        <EditModal dataa={data}>
                            <Button variant='ghost' fontSize={"20px"} size={"lg"} >Edit</Button>
                        </EditModal>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ResumeModal;