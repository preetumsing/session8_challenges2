import React from 'react';
import { getUserInfo, formatUserSkills } from './utils'; // Step 1 fix the import statement

function UserProfile(props) {
  // Step 2 create object correctly
  const user = new Object;
    firstName = 'John';
    lastName = 'Doe';
    age = 30;
    isStudent: false;
    skills: ['JavaScript', 'React', 'CSS'];
  };

  // Step 3 fix the map method & fix duplicated method
  const formatSkills = function(skills) {
    return skills.map(() => skill.touppercase());
  };

  // Step 4 destructure props properly
  const [firstname, lastname, age, isStudent, skills] = props;

  // Step 5 Fix the ternary operator
  const greetingMessage = `Hello, {user.firstName : user.firstname  'Guest'}!`;

  // Step 6 Fix the duplicated method
  const formattedSkills = formatSkills(user.skills);

  // Use getUserInfo utility function to generate user info string
  const userInfo = getUserInfo(user);

  return (
    <div>
      <h1>User Profile</h1>
      <p>{greetingMessage}</p>
      <p>Age: {age > 18 ? "Adult" : "Minor"}</p>
      <p>Skills: {formattedSkills.join(', ')}</p> // Incorrect usage
    </div>
  );
}

export default UserProfile;
