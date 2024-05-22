import { useState } from "react";
import { 
  Container, 
  VStack, 
  HStack, 
  Heading, 
  Input, 
  Button, 
  Checkbox, 
  IconButton, 
  List, 
  ListItem, 
  Text,
  Box 
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} w="100%">
        <Heading as="h1" size="2xl" mb={6}>Todo App</Heading>
        <HStack w="100%">
          <Input 
            placeholder="Add a new task" 
            value={newTask} 
            onChange={(e) => setNewTask(e.target.value)} 
          />
          <Button onClick={addTask} colorScheme="teal">Add Task</Button>
        </HStack>
        <List spacing={3} w="100%">
          {tasks.map((task, index) => (
            <ListItem 
              key={index} 
              display="flex" 
              alignItems="center" 
              justifyContent="space-between" 
              bg="gray.100" 
              p={3} 
              borderRadius="md"
            >
              <HStack>
                <Checkbox 
                  isChecked={task.completed} 
                  onChange={() => toggleTaskCompletion(index)}
                />
                <Text as={task.completed ? "s" : ""}>{task.text}</Text>
              </HStack>
              <IconButton 
                aria-label="Delete task" 
                icon={<FaTrash />} 
                onClick={() => deleteTask(index)} 
                colorScheme="red"
              />
            </ListItem>
          ))}
        </List>
      </VStack>
      <Footer />
    </Container>
  );
};

const Footer = () => (
  <Box as="footer" py={4} textAlign="center" w="100%" bg="gray.200" mt={10}>
    <Text>© 2023 Todo App</Text>
  </Box>
);

export default Index;