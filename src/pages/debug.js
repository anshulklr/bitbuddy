import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Badge,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  useClipboard,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { ALL_MODULES } from '../data/moduleData';

export default function DebugView() {
  const { onCopy, hasCopied } = useClipboard(JSON.stringify(ALL_MODULES, null, 2));

  if (!ALL_MODULES || ALL_MODULES.length === 0) {
    return (
      <Container maxW="container.xl" py={8}>
        <Alert status="error">
          <AlertIcon />
          No module data available
        </Alert>
      </Container>
    );
  }

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} align="stretch">
        <Box>
          <Heading mb={4}>Developer View - All Modules</Heading>
          <Text color="gray.500">Total Modules: {ALL_MODULES.length}</Text>
          <Button onClick={onCopy} mt={2} size="sm">
            {hasCopied ? 'Copied!' : 'Copy all data'}
          </Button>
        </Box>

        <Accordion allowMultiple>
          {ALL_MODULES.map((module) => (
            <AccordionItem key={module.id}>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Text fontSize="lg" fontWeight="bold">
                    {module.emoji} {module.title}
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                <VStack align="stretch" spacing={4}>
                  <Box>
                    <Text fontWeight="bold">Description:</Text>
                    <Text>{module.description}</Text>
                  </Box>
                  
                  <Box>
                    <Text fontWeight="bold">Stats:</Text>
                    <Text>Total Lessons: {module.lessons?.length || 0}</Text>
                    <Text>Total Rewards: {module.totalRewards || 0} sats</Text>
                  </Box>

                  <Box>
                    <Text fontWeight="bold" mb={2}>Lessons:</Text>
                    <Table variant="simple" size="sm">
                      <Thead>
                        <Tr>
                          <Th>ID</Th>
                          <Th>Title</Th>
                          <Th>Duration</Th>
                          <Th>Reward</Th>
                          <Th>Content</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {module.lessons?.map((lesson) => (
                          <Tr key={lesson.id}>
                            <Td>{lesson.id}</Td>
                            <Td>
                              {lesson.emoji} {lesson.title}
                            </Td>
                            <Td>{lesson.duration}</Td>
                            <Td>{lesson.reward} sats</Td>
                            <Td>
                              <Accordion allowMultiple size="sm">
                                <AccordionItem>
                                  <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                      View Content
                                    </Box>
                                    <AccordionIcon />
                                  </AccordionButton>
                                  <AccordionPanel>
                                    {lesson.content?.map((content, idx) => (
                                      <Box key={idx} mb={2}>
                                        <Badge>{content.type}</Badge>
                                        <Text mt={1}>{content.text}</Text>
                                        {content.points && (
                                          <VStack align="start" pl={4} mt={1}>
                                            {content.points.map((point, pidx) => (
                                              <Text key={pidx}>{point}</Text>
                                            ))}
                                          </VStack>
                                        )}
                                      </Box>
                                    ))}
                                    {lesson.quiz && (
                                      <Box mt={2}>
                                        <Badge colorScheme="green">Quiz</Badge>
                                        <Text mt={1}>{lesson.quiz.question}</Text>
                                        <VStack align="start" pl={4} mt={1}>
                                          {lesson.quiz.options.map((option, oidx) => (
                                            <Text key={oidx} color={oidx === lesson.quiz.correct ? "green.500" : "gray.500"}>
                                              {oidx === lesson.quiz.correct ? "✓" : "○"} {option}
                                            </Text>
                                          ))}
                                        </VStack>
                                      </Box>
                                    )}
                                  </AccordionPanel>
                                </AccordionItem>
                              </Accordion>
                            </Td>
                          </Tr>
                        ))}
                      </Tbody>
                    </Table>
                  </Box>
                </VStack>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </VStack>
    </Container>
  );
}